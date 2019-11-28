module.exports = {
  name: 'shared-data-access-movie',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/data-access-movie',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
