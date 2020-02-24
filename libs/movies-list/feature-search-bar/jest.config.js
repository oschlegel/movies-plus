module.exports = {
  name: 'movies-list-feature-search-bar',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/movies-list/feature-search-bar',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
