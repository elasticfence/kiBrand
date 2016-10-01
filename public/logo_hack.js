import chrome from 'ui/chrome';
import 'plugins/kibrand/less/main.less';
import uiModules from 'ui/modules';

uiModules.get('kibana', [])
  .config(function() {
    let config = chrome.getInjected('brandConfig', {});
        if (config.logourl){
                chrome
                  .setBrand({
                     'logo': 'url('+config.logourl+') left no-repeat',
                     'smallLogo': 'url('+config.logourl+') left no-repeat'
                  })
        } else {
                chrome
                  .setBrand({
                     'title': config.name ? config.name : ""
                  })

        }
  });
