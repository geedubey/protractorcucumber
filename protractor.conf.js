

exports.config = {
  allScriptsTimeout: 11000,
  
  directConnect: true,
  chromeDriver: './node_modules/chromedriver/lib/chromedriver/chromedriver.exe',
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'binary': require('puppeteer').executablePath(),
      'args': ['--start-maximized']
    },
  },

  specs: [
    'features/*.feature'
  ],
 
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    require: ['features/**/*.js'],
    tags: false,
    //format: 'node_modules/pretty',
    profile: false,
    'no-source': false
  },

  onPrepare: function() {
    
  }
};