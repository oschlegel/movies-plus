module.exports = {
  name: 'shared-data-access-movie',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/data-access-movie',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
