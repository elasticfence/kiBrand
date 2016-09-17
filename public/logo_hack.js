import $ from 'jquery';
import chrome from 'ui/chrome';
import 'plugins/kibana-logo-hack/less/main.less';
import uiModules from 'ui/modules';

var setBrand = function(brand,url){
        if (url){
                chrome
                  .setBrand({
                     'logo': 'url('+url+') left no-repeat',
                     'smallLogo': 'url('+url+') left no-repeat'
                  })
        } else {
                chrome
                  .setBrand({
                     'title': brand ? brand : ""
                  })

        }
}

$.getJSON( "/brand", function( data ) {
        if (data.brand) {
                if (data.logourl) {
                        setBrand(data.brand,data.logourl);
                } else {
                        setBrand(data.brand);
                }
        } else {
                setBrand("");
        }
});

