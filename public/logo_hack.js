import _ from 'lodash';
import $ from 'jquery';
import 'plugins/kibana-logo-hack/less/main.less';

$(document).ready(function () {

	var logo = $('.logo')[0].style;
	var smalllogo = $('.smalllogo')[0].style;

	/* logo w:252px h:45px */
	/* small logo w:45px h:45px */

	/* Hide Logo */
	logo.display="none";
	smalllogo.display="none";
});
