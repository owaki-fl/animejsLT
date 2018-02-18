const baseConfig = {
  tmp: '.tmp',
  dev: 'dev',
  build: 'build',
  assets: 'dev/assets'
}

module.exports = {
  dir: baseConfig,

  copy: {
    dir: [
      baseConfig.assets + '/**/images/**/*',
      baseConfig.assets + '/**/lib/**/*',
      baseConfig.assets + '/**/js/**/parts.js',
      baseConfig.assets + '/**/js/**/map_all.js',
      baseConfig.assets + '/**/*.csv'
    ],
    build_dir: [
      baseConfig.assets + '/**/images/**/*',
      baseConfig.assets + '/**/lib/**/*',
      baseConfig.assets + '/**/js/**/parts.js',
      baseConfig.assets + '/**/js/**/map_all.js',
      baseConfig.assets + '/**/*.csv'
    ]
  },

  ejs: {
    src: [baseConfig.dev + '/ejs/**/*.ejs', '!' + baseConfig.dev + '/ejs/**/_*.ejs']
  },

  imagemin: {
    src: baseConfig.assets + '/**/images/**/*.{jpg,jpeg,png,gif,svg}'
  },

  sass: {
    src: [baseConfig.assets + '/**/css/**/*']
  },

  watch: {
    dir: [
      baseConfig.dev + '/**/*',
      '!' + baseConfig.dev + '/gulp/**/*',
      '!' + baseConfig.dev + '/ejs/**/*',
      '!' + baseConfig.dev + '/**/sass/**/*'
    ],
    ejs: baseConfig.dev + '/ejs/**/*.ejs',
    js: baseConfig.assets + '/**/js/**/*'
  }
}
