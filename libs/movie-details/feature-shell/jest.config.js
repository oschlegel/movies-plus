module.exports = {
  name: 'movie-details-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/movie-details/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
