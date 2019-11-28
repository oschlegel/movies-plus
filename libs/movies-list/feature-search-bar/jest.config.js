module.exports = {
  name: 'movies-list-feature-search-bar',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/movies-list/feature-search-bar',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
