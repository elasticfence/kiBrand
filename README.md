# Kibana-logo-hack
Kibana Plugin for Logo Neutralization

<img src="http://i.imgur.com/61132PJ.png" />

--------

### Installation
```
bin/kibana plugin --install kibana-logo-hack -u https://github.com/elasticfence/kibana-logo-hack/archive/master.tar.gz
```

#### Configuration
Add your custom branding preferences to ```config/kibana.yml``` 
```
kibana-logo-hack.enabled: true
kibana-logo-hack.name: "NULL"
# kibana-logo-hack.logourl: "http://127.0.0.2/some/logo.svg"

```
#### Alternative Runtime Usage
* Custom Brand
```
BRAND="NULL" bin/kibana
```

* Custom Logo __(local svg)__
```
LOGOURL="/bundles/src/ui/public/images/kibana.svg" bin/kibana
```
* Custom Logo __(remote svg)__
```
LOGOURL="http://127.0.0.2/some/logo.svg" bin/kibana
```

--------

#### FAQ

* _Q_: I did not add any settings, and Logo and Brands are gone!
  * _A_: Correct. No values nullify top bar branding.  

* _Q_: I set a logo and now the brand name is gone!
  * _A_: Correct. Once a logo is set, the brand will only be presented at small widths. 

* _Q_: Is this plugin compatible with Kibana 5.0?
  * _A_: Likely not yet due to changes in K5 - if you are a Kibana 5 user please provide us feedback

* _Q_: I installed the plugin and it caused issue X
  * _A_: Please immediately open an issue on our tracker and provide full kibana error logs
