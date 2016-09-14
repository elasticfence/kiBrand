module.exports = function (kibana) {
  return new kibana.Plugin({
    uiExports: {
      hacks: [
        'plugins/kibana-logo-hack/logo_hack'
      ]
    },
  });
};
