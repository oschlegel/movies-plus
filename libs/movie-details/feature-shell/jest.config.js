module.exports = {
  name: 'movie-details-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/movie-details/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
