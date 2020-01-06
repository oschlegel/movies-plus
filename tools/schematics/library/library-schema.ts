import { UnitTestRunner } from '@nrwl/angular/src/utils/test-runners';

export type LibraryType = 'Feature' | 'Data Access' | 'Ui' | 'Util'

export interface LibrarySchema {
  name: string;
  skipFormat: boolean;
  simpleModuleName: boolean;
  scope: string;
  sourceDir?: string;
  publishable: boolean;

  spec?: boolean;
  flat?: boolean;
  commonModule?: boolean;

  style?: string;
  prefix?: string;
  routing?: boolean;
  lazy?: boolean;
  parentModule?: string;
  type: LibraryType;

  unitTestRunner: UnitTestRunner;

  testingLibrary?: boolean;
}
