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
    config(Joi) {
      return Joi.object().keys({
        enabled: Joi.boolean().default(true),
	logourl: Joi.string().default(logourl),
        brand: Joi.string().default(brand)
      }).default();
    },
    uiExports: {
      injectDefaultVars(server, options) {
        return { brand: options.brand, logourl: options.logourl, enabled: options.enabled };
      },
      hacks: [
        'plugins/kibana-logo-hack/logo_hack'
      ]
    },
    init: function (server, options) {
        server.log(['info','status','Brand'],options.brand);
        server.route({
            path: '/brand',
            method: 'GET',
            handler(req, reply) {
              reply({ brand: options.brand, logourl: options.logourl });
            }
        });
    }
  });
};

