/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'credit-card': '&#xe93f;',
            'money5': '&#xe93f;',
            'phone': '&#xe942;',
            'telephone': '&#xe942;',
            'location': '&#xe947;',
            'map-marker': '&#xe947;',
            'clock': '&#xe94e;',
            'time2': '&#xe94e;',
            'enlarge': '&#xe989;',
            'expand': '&#xe989;',
            'key': '&#xe98d;',
            'password': '&#xe98d;',
            'hammer': '&#xe996;',
            'tool2': '&#xe996;',
            'leaf': '&#xe9a4;',
            'nature': '&#xe9a4;',
            'briefcase': '&#xe9ae;',
            'portfolio': '&#xe9ae;',
            'loop2': '&#xea2e;',
            'repeat2': '&#xea2e;',
            'facebook': '&#xea90;',
            'brand10': '&#xea90;',
            'instagram': '&#xea92;',
            'brand12': '&#xea92;',
            'twitter': '&#xea96;',
            'brand16': '&#xea96;',
            'windows8': '&#xeac2;',
            'brand57': '&#xeac2;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
