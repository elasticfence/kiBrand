# kibana-logo-hack
Kibana Plugin for Logo Neutralization

### Installation
```
bin/kibana plugin --install kibana-logo-hack -u https://github.com/elasticfence/kibana-logo-hack/archive/master.tar.gz
```
#### Usage
* Custom Brand
```
BRAND="NULL" bin/kibana
```

* Custom Logo (remote)
```
LOGOURL="/bundles/src/ui/public/images/kibana.svg" bin/kibana
```
* Custom Logo (remote)
```
LOGOURL="http://127.0.0.2/some/logo.svg" bin/kibana
```

###### Mugshot
<img src="http://i.imgur.com/61132PJ.png" />

#### Todo:
* Add custom logo and css management
