module.exports = {
  name: 'movies-plus',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/movies-plus',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
