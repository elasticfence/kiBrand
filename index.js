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
  var cssless;
  try {
     logourl = process.env.CSSLESS;
  } catch(err){
     cssless = "";
  }

  return new kibana.Plugin({
    id: 'kibrand',
    uiExports: {
      hacks: [
        'plugins/kibrand/logo_hack'
      ],
      injectDefaultVars(server, options) {
	let config = server.config();
	return {
          brandConfig: {
            name: config.get('kibrand.name') || brand,
            logourl: config.get('kibrand.logourl') || logourl,
            cssless: config.get('kibrand.cssless') || cssless
          }
        };
      }
    },
    config(Joi) {
      return Joi.object().keys({
        enabled: Joi.boolean().default(true),
	logourl: Joi.string().default(logourl),
	cssless: Joi.string().default(cssless),
        name: Joi.string().default(brand)
      }).default();
    }
  });
};
