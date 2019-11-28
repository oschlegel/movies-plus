module.exports = {
  name: 'movies-list-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/movies-list/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
