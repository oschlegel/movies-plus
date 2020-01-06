import {
  chain,
  externalSchematic,
  Rule,
  Tree,
  SchematicContext,
  noop
} from '@angular-devkit/schematics';
import { updateJsonInTree,createOrUpdate, readJsonInTree, NxJson } from '@nrwl/workspace';
import { strings } from '@angular-devkit/core';
import { LibrarySchema, LibraryType } from './library-schema';

/**
 * getFormattedLibraryName
 * @param name
 * @param type
 */
const getFormattedLibraryName = (name: string, type: LibraryType) => {
  if (name) {
    return `${strings.dasherize(type)}-${strings.dasherize(name)}`;
  }
  if (type === 'Feature') {
    return 'feature-shell';
  }
  return strings.dasherize(type);
};

/**
 * updateTslintWithScope
 * @param scopeTag
 */
const updateTslintWithScope = (scopeTag: string): Rule => {
  return chain([
    (host: Tree, context: SchematicContext) => {
      return updateJsonInTree('tslint.json', json => {
        const depConstraints: any[] =
          json.rules['nx-enforce-module-boundaries'][1].depConstraints;

        const constraintFound = !!depConstraints.find(
          constraint => constraint.sourceTag === scopeTag
        );
        if (!constraintFound) {
          depConstraints.push({
            sourceTag: scopeTag,
            onlyDependOnLibsWithTags: [scopeTag, 'scope:shared']
          });
        }

        return json;
      })(host, context);
    }
  ]);
};

const createTestingLibrary = (projectDirectory: string, projectName: string):Rule => {
  const projectRoot = `libs/${projectDirectory}/${projectName}`;

  return chain([
    // Create index file
    (host: Tree, context: SchematicContext) => {
      return createOrUpdate(host, `${projectRoot}/src/index.testing.ts`,'');
    },
    // Update paths in workspace tsconfig
    (host: Tree, context: SchematicContext) => {
      const nxJson = readJsonInTree<NxJson>(host, 'nx.json');
      return updateJsonInTree('tsconfig.json', json => {
        const compilerOptions = json.compilerOptions;
        compilerOptions.paths[`@${nxJson.npmScope}/${projectDirectory}/${projectName}/testing`] = [
          `${projectRoot}/src/index.testing.ts`
        ];
        return json;
      })(host, context);
    },
    // Update excludes in library tsconfig.lib
    (host: Tree, context: SchematicContext) => {
      return updateJsonInTree(`${projectRoot}/tsconfig.lib.json`, json => {
        json.exclude.push("src/index.testing.ts");
        return json;
      })(host, context);
    },
    // Update files in library tsconfig.spec
    (host: Tree, context: SchematicContext) => {
      return updateJsonInTree(`${projectRoot}/tsconfig.spec.json`, json => {
        json.files.push("src/index.testing.ts");
        return json;
      })(host, context);
    }
  ]);
};

export default function(schema: LibrarySchema): Rule {
  const scopeTag = `scope:${strings.dasherize(schema.scope)}`;
  const typeTag = `type:${strings.dasherize(schema.type)}`;
  const projectName = getFormattedLibraryName(schema.name, schema.type);
  const projectDirectory = strings.dasherize(schema.scope);

  return chain([
    externalSchematic('@nrwl/angular', 'lib', {
      ...schema,
      name: projectName,
      directory: projectDirectory,
      tags: `${scopeTag},${typeTag}`
    }),
    updateTslintWithScope(scopeTag),
    schema.testingLibrary ? createTestingLibrary(projectDirectory,projectName):noop()
  ]);
}
