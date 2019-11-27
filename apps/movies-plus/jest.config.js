module.exports = {
  name: 'movies-plus',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/movies-plus',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
