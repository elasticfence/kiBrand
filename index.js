module.exports = function (kibana) {

  var brand;
  try {	
     brand = process.env.BRAND || "Kibana";
  } catch(err){
     brand = "";
  }

  return new kibana.Plugin({
    config(Joi) {
      return Joi.object().keys({
        enabled: Joi.boolean().default(true),
        brand: Joi.string().default(brand)
      }).default();
    },
    uiExports: {
      injectDefaultVars(server, options) {
        return { brand: options.brand };
      },
      hacks: [
        'plugins/kibana-logo-hack/logo_hack'
      ]
    },
    init: function (server, options) {
	server.log(['info','status','Brand'],options.brand);
    }
  });
};

