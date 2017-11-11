const ghpages = require('gh-pages');
const path = require('path');

const deployOptions = {
  branch: 'master',
  repo: 'https://github.com/h4h-pilot/h4h-pilot.github.io.git',
  user: {
    name: 'H4H',
    email: 'steven.xie@outlook.com',
  },
  message: 'Auto-generated commit from gh-pages-deploy.',
}
ghpages.publish('build', deployOptions, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Deployed successfully.");
  }
});
