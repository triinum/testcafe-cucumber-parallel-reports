const report = require('multiple-cucumber-html-reporter');
const path = require('path');
const projectName = path.basename(__dirname);
const projectVersion = process.env.npm_package_version;
const reportGenerationTime = new Date().toISOString().split('T')[0];
report.generate({
  reportName: 'Sitrepi testid',
  jsonDir: 'reports',
  reportPath: 'reports',
  openReportInBrowser: true,
  disableLog: true,
  displayDuration: true,
    durationInMS: false,
       metadata:{
        browser: {
            name: 'chrome',
            version: '72'
        },
        device: 'Bamboo Win mingi masin',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
  customData: {
    title: 'Projekt',
    data: [
      { label: 'Arendus', value: `${projectName}` },
      { label: 'Laivi muudatus', value: `${projectVersion}` },
      { label: 'Testi kp', value: `${reportGenerationTime}` },
    ],
  },
});