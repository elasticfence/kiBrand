module.exports = function (kibana) {

  var brand;
  try {
     brand = process.env.BRAND;
  } catch(err){
     brand = "";
  }
  var logourl;
  try {
     logourl = process.env.LOGOURL;
  } catch(err){
     logourl = "";
  }

  return new kibana.Plugin({
    id: 'kibana-logo-hack',
    injectVars: function (server, options) {
	let config = server.config();
	return {
          brandConfig: {
            name: config.get('kibana-logo-hack.name') || brand,
            logourl: config.get('kibana-logo-hack.logourl') || logourl
          }
        };
    },
    uiExports: {
      hacks: [
        'plugins/kibana-logo-hack/logo_hack'
      ]
    },
    config(Joi) {
      return Joi.object().keys({
        enabled: Joi.boolean().default(true),
	logourl: Joi.string().default(logourl),
        name: Joi.string().default(brand)
      }).default();
    }
  });
};
