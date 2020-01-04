import {
  chain,
  externalSchematic,
  Rule,
  Tree,
  SchematicContext
} from '@angular-devkit/schematics';
import { updateJsonInTree } from '@nrwl/workspace';
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

export default function(schema: LibrarySchema): Rule {
  const scopeTag = `scope:${strings.dasherize(schema.scope)}`;
  const typeTag = `type:${strings.dasherize(schema.type)}`;

  return chain([
    externalSchematic('@nrwl/angular', 'lib', {
      ...schema,
      name: getFormattedLibraryName(schema.name, schema.type),
      directory: strings.dasherize(schema.scope),
      tags: `${scopeTag},${typeTag}`
    }),
    updateTslintWithScope(scopeTag)
  ]);
}
