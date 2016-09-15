import chrome from 'ui/chrome';
import 'plugins/kibana-logo-hack/less/main.less';

chrome
  .setBrand({
   // 'logo': 'url() left no-repeat',
   //  'smallLogo': 'url() left no-repeat',
     'title': brand ? brand : ""
  })


