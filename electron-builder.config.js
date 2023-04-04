/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  publish: null,
  npmRebuild: false,
  productName: 'PLAZA-TICKET',
  // extraFiles: [{ from: 'src/songs', to: 'resources/songs' }],
  files: ['dist/main/**/*', 'dist/render/**/*', 'dist/preload/**/*'],
  directories: { output: 'dist/electron', buildResources: 'src/resourses' },
  // extraResources: [
  //   {
  //     to: 'database/db_prd.sqlite3',
  //     from: 'src/database/db_prd.sqlite3'
  //   }
  // ]
}

module.exports = config
