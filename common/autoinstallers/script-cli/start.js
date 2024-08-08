const { ensureLibForCommand, runProject } = require('./utils');

ensureLibForCommand(
  ['projects/test-core', 'projects/test-ui'],
  () => {
    runProject('test-ui', 'start');
  }
);
