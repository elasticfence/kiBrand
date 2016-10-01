# KiBrand
Kibana Plugin for Logo Neutralization

<img src="http://i.imgur.com/61132PJ.png" />

--------
#### Requirements

* Kibana 4.6+


### Installation
```
bin/kibana plugin --install kibrand -u https://github.com/elasticfence/kibrand/archive/master.tar.gz
```

#### Configuration
Add your custom branding preferences to ```config/kibana.yml``` 
```
kibrand.enabled: true
kibrand.name: "NULL"
# kibrand.logourl: "http://127.0.0.2/some/logo.svg"

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

#### LESS Override
Optional custom LESS rules can be added in  ```/etc/kibrand.less``` 

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
