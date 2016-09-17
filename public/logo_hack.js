import $ from 'jquery';
import chrome from 'ui/chrome';
import 'plugins/kibana-logo-hack/less/main.less';
import uiModules from 'ui/modules';

var brand = process.env.BRAND || "";
console.log('loaded hack');

var setBrand = function(brand,url){
        if (url){
                chrome
                  .setBrand({
                     'logo': 'url('+url+') left no-repeat',
                     'smallLogo': 'url('+url+') left no-repeat',
                     'title': brand ? brand : ""
                  })
        } else {
                chrome
                  .setBrand({
                     'title': brand ? brand : ""
                  })

        }
}

$.getJSON( "/brand", function( data ) {
        console.log(data);
        setBrand(data.brand);
});

