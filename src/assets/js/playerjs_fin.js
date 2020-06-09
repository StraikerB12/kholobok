//	Playerjs.com 9.97.2
//	02.03.2020 15:39:14
//	API - http://bit.ly/plrjsapi
let finrts = {
    "screencolor": "000000",
    "toolbar": { "color": "000000", "hide": 1, "margin": "-20 0 0 0", "gradient": 1, "animation": "alpha", "a": "1", "leftandrightpadding": 10, "h": 50, "stretchonfullscreen": 1, "hideuntilstarted": 0, "hidewithoutmoving": 1, "hideleavetimeout": 3, "position": "bottom", "clickarea": 0, "hideonpause": 0, "hidedown": 1, "hidejustfull": 0 },
    "control_title": { "order": 1, "on": 0, "action": "title", "type": "text", "position": "top-left", "click": 0, "hand": 0, "text": "", "var": "title", "hide": 1, "hideonplay": 1, "animation": "position", "bg": 1, "bga": 0.4, "bgpadding": "6 6 6 6", "letterspacing": "0", "showtitleplaylist": 1, "font": "Roboto" },
    "control_line": { "order": 3, "on": 1, "type": "shape", "action": "line", "h": 4, "rounding": "0", "w": 122, "a": 1, "abg": "0.3", "aload": "0.4", "aover": "0", "color": "1ac748", "colorbg": "ffffff", "colorload": "ffffff", "colorover": "ffffff", "buffer": { "on": 0, "color": "ffffff", "a": 0.5 }, "position": "bottom", "margin": "0 15 50 15", "handle": 1, "bgpadding": "5 0 5 0", "tip": 1, "hide": 1, "hideonlive": 1, "handlescale": "1.3", "linetipmarginbottom": 15, "toptip": 1, "tipbgcolor": "ffffff", "tipbgrounding": 3, "expand": "1.7", "tipcolor": "000000", "tippadding": "5 7 4 7", "tipfontsize": 11, "tipbga": "1", "tipa": "0.8", "linetippointer": 1, "animation": "position", "tipmargin": "0 0 0 0", "customwidth": 0, "ontop": 1, "pointed": 1, "clickarea": 0, "value": 0, "clickmargin": "0 0 5 0", "clickscaley": "1.1", "click": 1, "bg": 1, "bgcolor": "000000" },
    "control_play": { "order": 2, "on": 1, "icon": "<svg width='20' height='20'><g fill-rule='nonzero' transform='translate(4, 2)'><path d='M0.546276239,0.24474624 L12.7132387,7.7763331 L0.586041552,15.4534493 L0.546276239,0.24474624 Z M2.05333314,2.9417772 L2.07893387,12.7330742 L9.88637072,7.79058012 L2.05333314,2.9417772 Z' fill='#ffffff'/></g></svg>", "icon2": "<svg width='20' height='20'><g fill-rule='nonzero' fill='#000000' transform='translate(4, 3)'><path d='M1.5,1.5 L1.5,11.5 L3.5,11.5 L3.5,1.5 L1.5,1.5 Z M0,0 L5,0 L5,13 L0,13 L0,0 Z' fill='#ffffff'/><path d='M8.5,1.5 L8.5,11.5 L10.5,11.5 L10.5,1.5 L8.5,1.5 Z M7,0 L12,0 L12,13 L7,13 L7,0 Z' fill='#ffffff'/></g></svg>", "icon3": "<svg width='20' height='20'><g transform='translate(2, 3)'><path d='M16,7.13661132 L16,7.10916945 L15.2081785,7.10916945 L14.275093,7.10916945 C14.275093,3.19912625 11.063197,0 7.13754645,0 C3.21189591,0 0,3.19912625 0,7.10916945 C0,11.0192126 3.21189591,14.2183389 7.13754645,14.2183389 L7.13754645,12.4410465 C4.19330855,12.4410465 1.78438662,10.0417018 1.78438662,7.10916945 C1.78438662,4.17663705 4.19330855,1.77729236 7.13754645,1.77729236 C10.0817844,1.77729236 12.4907063,4.17663705 12.4907063,7.10916945 L10.6445167,7.10916945 L13.3828996,11.5524004 L16,7.13661132 Z' fill='#ffffff'></path></g></svg>", "action": "play", "action2": "pause", "type": "svg", "scale": "1.3", "scaleover": "1", "margin": "0 0 0 5", "bgcolorover": "39a874", "a": "1", "aover": "-1", "tip": 1, "iconscolorover": "000000", "iconscolor": "-1", "bg": 1, "bgcolor": "38c26d", "bgpadding": "5 7 5 7", "bgaover": "1", "bga": "0", "bgo": "0", "iconmargin": "0 0 0 2", "tipbgcolor": "ffffff", "tipcolor": "000000", "tipbgrounding": 3, "tipbga": "1", "tipfontsize": 11, "tippadding": "7 7 7 7", "tipa": "0.7", "animation": "position", "tippointer": 1, "tippointeralign": "left", "iconsreplay": 1, "hide": 0, "position": "controls" },
    "control_mute": { "order": 8, "on": 1, "icon": "<svg width='20' height='20'><g transform='translate(3, 2)'><polygon fill-rule='nonzero' points='8.8817842e-16 4.3746 8.8817842e-16 10.62539 3.10029 10.62539 7.74143 15 7.74419 0 3.10237 4.37461 1.77635684e-15 4.37461 1.77635684e-15 4.3746' fill='#ffffff'/><path d='M10.44167,3.62185 C10.17405,3.31419 9.74434,3.31419 9.47808,3.62343 C9.21251,3.93268 9.21251,4.43332 9.47944,4.74335 L9.47944,4.74178 C10.06713,5.42512 10.42941,6.36234 10.42941,7.40396 C10.42941,8.44479 10.06781,9.37885 9.4808,10.06219 C9.2125,10.36985 9.2125,10.87049 9.47944,11.18131 C9.61223,11.33554 9.78657,11.41304 9.9609,11.41304 C10.13591,11.41304 10.31024,11.33554 10.44303,11.18131 C11.27519,10.21641 11.79138,8.87583 11.7907,7.40396 C11.79138,5.92892 11.27315,4.58676 10.44167,3.62186 L10.44167,3.62185 Z' id='pjs_volume_element1' fill='#ffffff'/><path d='M11.99413,1.86278 C11.72289,2.17257 11.72289,2.67489 11.99413,2.98309 C12.99747,4.13271 13.61608,5.71413 13.61608,7.46829 C13.61608,9.22085 12.99747,10.80149 11.99552,11.9519 C11.72427,12.26089 11.72427,12.76243 11.99552,13.07221 C12.13045,13.22671 12.3076,13.30435 12.48543,13.30435 C12.66256,13.30435 12.83971,13.22671 12.97464,13.07221 C14.22569,11.63894 15.00138,9.65345 15,7.46829 C15.00069,5.28154 14.225,3.29446 12.97187,1.86278 C12.69993,1.55299 12.2633,1.55299 11.99413,1.86278 L11.99413,1.86278 Z' id='pjs_volume_element2' fill='#ffffff'/></g></svg>", "icon2": "<svg width='20' height='20'><g fill-rule='nonzero' fill='#000000' transform='translate(3, 2)'><polygon points='8.8817842e-16 4.3746 8.8817842e-16 10.62539 3.10029 10.62539 7.74143 15 7.74419 0 3.10237 4.37461 1.77635684e-15 4.37461 1.77635684e-15 4.3746' fill='#ffffff'/><path d='M11.9267767,6.64744791 L9.87932726,4.59999847 L9,5.47932573 L11.0474494,7.52677517 L9,9.57422461 L9.87932726,10.4535519 L11.9267767,8.40610243 L13.9742261,10.4535519 L14.8535534,9.57422461 L12.806104,7.52677517 L14.8535534,5.47932573 L13.9742261,4.59999847 L11.9267767,6.64744791 Z' fill='#ffffff'/></g></svg>", "action": "mute", "action2": "unmute", "type": "svg", "margin": "0 0 0 10", "bg": 1, "bgcolor": "42bd88", "bgo": "0", "bgpadding": "5 5 5 7", "iconmargin": "0 0 0 -1", "bgaover": "1", "bga": "0", "tip": 1, "tippadding": "7 7 7 7", "tipbga": "1", "tipfontsize": 11, "tipbgrounding": 3, "tipbgcolor": "ffffff", "tipcolor": "000000", "tipa": "0.7", "animation": "alpha", "tippointer": 1, "tippointeralign": "left", "tiptext": "", "position": "controls", "hide": 1, "hideonmobile": 1, "displayvolume": 1, "hideoverwidth": 0, "hideondesktop": 0, "iconscolor": "-1", "iconscolorover": "000000" },
    "control_volume": { "order": 9, "on": 1, "type": "shape", "action": "volume", "h": 4, "rounding": "1", "customwidth": 1, "w": 70, "a": 1, "abg": "0.3", "aover": "0", "color": "42bd88", "colorbg": "ffffff", "colorover": "ffffff", "hide": 1, "hideoutmute": 1, "rotation": "", "bgpadding": "5 0 5 0", "bg": 1, "handle": 1, "position": "controls", "margin": "0 0 0 10", "animation": "alpha", "hideuntilstarted": 0, "hideonleave": 0, "handlescale": "1.3", "handlecolor": "-1", "expand": "1.4", "tip": 1, "tipbgcolor": "ffffff", "tipcolor": "000000", "linetipmarginbottom": 15, "tipbga": "1", "tipbgrounding": 3, "linetippointer": 1, "tipfontsize": 11, "ontop": 1, "handlehide": 0, "clickarea": 0, "hideonmobile": 1 },
    "control_time": { "order": 5, "on": 1, "action": "time", "type": "text", "text": "00:00", "fontsize": 11, "margin": "1 0 0 10", "click": 0, "separator": "/", "inversetime": 1, "animation": "position", "showduration": 1, "letterspacing": "1", "font": "Roboto", "bold": 0, "bg": 1 },
    "control_duration": { "order": 7, "on": 1, "action": "duration", "type": "text", "text": "-  0:00", "fontsize": 11, "margin": "1 0 0 0", "click": 0, "animation": "position", "tip": 0, "tiptext": "Длительность", "hide": 0, "hideonlive": 1, "hideondesktop": 0, "position": "controls", "font": "Roboto", "letterspacing": "1" },
    "control_buffer": { "order": 6, "on": 1, "icon": "<div class='loader(rand)'><svg class='circular(rand)' viewBox='25 25 50 50'><circle class='path(rand)' stroke='(color)' cx='50' cy='50' r='20' fill='none' stroke-width='2' stroke-miterlimit='10'/></svg></div>|||.loader(rand) {position: relative;margin: 0 auto;width: 50px;}.loader(rand):before {content: '';display: block;padding-top: 100%;}.circular(rand) {-webkit-animation: rotate 2s linear infinite;animation: rotate 2s linear infinite;height: 100%;-webkit-transform-origin: center center;transform-origin: center center;width: 100%;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;}.path(rand) {stroke-dasharray: 1, 200;stroke-dashoffset: 0;-webkit-animation: dash 1.5s ease-in-out infinite;animation: dash 1.5s ease-in-out infinite;}@-webkit-keyframes rotate {100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}@keyframes rotate {100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}@-webkit-keyframes dash {0% {stroke-dasharray: 1, 200;stroke-dashoffset: 0;}50% {stroke-dasharray: 89, 200;stroke-dashoffset: -35px;}100% {stroke-dasharray: 89, 200;stroke-dashoffset: -124px;}}@keyframes dash {0% {stroke-dasharray: 1, 200;stroke-dashoffset: 0;}50% {stroke-dasharray: 89, 200;stroke-dashoffset: -35px;}100% {stroke-dasharray: 89, 200;stroke-dashoffset: -124px;}}", "action": "buffer", "type": "css", "position": "center", "scale": 1, "click": 0, "hide": 1, "color": "69e089" },
    "control_settings": { "order": 12, "on": 1, "icon": "<svg width='20' height='20'><g fill-rule='nonzero' transform='translate(1, 1)'><path d='M9.95921636,0 L11.0734352,2.42298075 L12.084278,2.97683675 L14.5654263,1.86912475 L16.0013553,3.35766689 L15.1972647,5.84141709 L15.4154756,6.83068435 L17.8737063,7.7883911 L18,9.84229954 L15.5533514,10.8000063 L15.0708477,11.8384089 L16.0816905,14.3422093 L14.6566042,15.8135479 L12.1531543,14.7692045 L11.0274766,15.2422408 L10.0855101,17.60767 L8.06382454,17.7 L6.98410547,15.2884058 L5.8124692,14.7807148 L3.44615574,15.8537721 L1.96426811,14.4345393 L2.92927551,11.8845739 L2.36631345,10.8230269 L0,9.89997483 L0.0230409069,7.82304578 L2.44677181,6.84231842 L2.94073435,5.84141709 L1.88393297,3.35766689 L3.33132085,1.89226913 L5.86988664,2.89614086 L6.97264662,2.4807798 L7.9375308,0.0460412136 L9.95921636,0 Z M8.84993873,6 C7.27603345,6 6,7.27601328 6,8.84993974 C6,10.4239867 7.27603345,11.7 8.84993873,11.7 C10.4239666,11.7 11.7,10.4239867 11.7,8.84993974 C11.7,7.27601328 10.4239666,6 8.84993873,6 Z' fill='#ffffff'/></g></svg>", "action": "settings", "position": "controls-right", "margin": "0 7 0 0", "type": "svg", "scale": "1", "tip": 1, "tipbgrounding": 3, "animation": "position", "bg": 1, "bgpadding": "5 7 5 7", "bgcolor": "42bd88", "bgo": "0", "bgaover": "1", "bga": "0", "iconmargin": "0 0 0 0", "tippadding": "7 7 7 7", "tipbga": "1", "tipa": "0.7", "tipfontsize": 11, "tipletterspacing": 0, "tipcolor": "000000", "tipbgcolor": "ffffff", "tippointer": 1, "tippointeralign": "right", "tiptext": "", "hdicon": 0, "hide": 1, "hideonlive": 0, "iconscolorover": "000000" },
    "control_playlist": { "order": 10, "on": 0, "icon": "<svg width='17px' height='16px' viewBox='2 2 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n    <g id='Group-2' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(3.000000, 3.000000)' stroke-linecap='round' stroke-linejoin='round'>\n        <path d='M0,1 L14.5187304,1' id='Line' stroke='#FFFFFF' stroke-width='2'></path>\n        <path d='M0,7 L14.5187304,7' id='Line' stroke='#FFFFFF' stroke-width='2'></path>\n        <path d='M0,13 L14.5187304,13' id='Line' stroke='#FFFFFF' stroke-width='2'></path>\n    </g>\n</svg>", "action": "playlist", "position": "center", "margin": "10 0 0 25", "bg": 0, "scale": "1.5", "type": "svg", "animation": "position", "bgpadding": "0 10 10 0", "bga": "0", "bgaover": "1", "tip": 1, "bgcolor": "1aaeff", "bgo": "0.2", "bgborder": 0, "bgbordercolor": "ffffff", "tipbgcolor": "ffffff", "tipcolor": "000000", "tippointer": 1, "tippointeralign": "left", "tipbgrounding": 3, "tipfontsize": 11, "tippadding": "7 7 7 7", "tipbga": "1", "tipmargin": "0 0 50 -40", "tiptext": "Список видео" },
    "control_full": {
        "order": 13,
        "on": 1,
        "icon": "<svg width='18' height='18'><path d='M10 3h3.6l-4 4L11 8.4l4-4V8h2V1h-7zM7 9.6l-4 4V10H1v7h7v-2H4.4l4-4z' fill='#ffffff'></path></svg>",
        "icon2": "<svg width='18' height='18'><path d='M1 12h3.6l-4 4L2 17.4l4-4V17h2v-7H1zM16 .6l-4 4V1h-2v7h7V6h-3.6l4-4z' fill='#ffffff'></path></svg>",
        "action": "fullscreen",
        "action2": "normalscreen",
        "type": "svg",
        "position": "controls-right",
        "margin": "0 5 0 0",
        "scale": "0.9",
        "bg": 1,
        "bgpadding": "6 6 6 6",
        "bgcolor": "42bd88",
        "bgo": "0",
        "bga": "0",
        "bgaover": "1",
        "tip": 1,
        "tipfontsize": 11,
        "tipbga": "1",
        "tipa": "0.7",
        "tippadding": "7 7 7 7",
        "tipbgrounding": 3,
        "tipbgcolor": "ffffff",
        "tipcolor": "000000",
        "animation": "position",
        "iconmargin": "0 2 3 0",
        "tippointer": 1,
        "tippointeralign": "right",
        "tiptext": "",
        "bgcolorover": "-1",
        "iconscolor": "-1",
        "iconscolorover": "000000"
    },
    "control_start": { "order": 14, "position": "center", "scale": "1.7", "on": 1, "icon": "<svg width='20' height='20'><g fill-rule='nonzero' transform='translate(5, 3)'><path d='M11.4463462,6.1578125 L1.14019231,0.11666667 C1.01432692,0.04375 0.88475962,0 0.73668269,0 C0.33317308,0 0.00370192,0.328125 0.00370192,0.72916667 L0,0.72916667 L0,13.2708333 L0.00370192,13.2708333 C0.00370192,13.671875 0.33317308,14 0.73668269,14 C0.88846154,14 1.01432692,13.9489583 1.15129808,13.8760417 L11.4463462,7.8421875 C11.6906731,7.6416667 11.8461538,7.3390625 11.8461538,7 C11.8461538,6.6609375 11.6906731,6.36197917 11.4463462,6.1578125 L11.4463462,6.1578125 Z' fill='#ffffff'/></g></svg>", "icon3": "<svg width='20' height='20'><g transform='translate(2, 3)'><path d='M16,7.13661132 L16,7.10916945 L15.2081785,7.10916945 L14.275093,7.10916945 C14.275093,3.19912625 11.063197,0 7.13754645,0 C3.21189591,0 0,3.19912625 0,7.10916945 C0,11.0192126 3.21189591,14.2183389 7.13754645,14.2183389 L7.13754645,12.4410465 C4.19330855,12.4410465 1.78438662,10.0417018 1.78438662,7.10916945 C1.78438662,4.17663705 4.19330855,1.77729236 7.13754645,1.77729236 C10.0817844,1.77729236 12.4907063,4.17663705 12.4907063,7.10916945 L10.6445167,7.10916945 L13.3828996,11.5524004 L16,7.13661132 Z' fill='#ffffff'></path></g></svg>", "action": "play", "type": "svg", "bg": 1, "bgcolor": "42bd88", "bgo": "0", "bgpadding": "10 10 10 10", "iconmargin": "0 0 0 0", "bga": "1", "bgaover": "-1", "scaleover": "2.2", "hide": 1, "hideonplay": 1, "hideonyoutube": 1, "bgborder": 0, "a": "1", "tip": 0, "tiptext": "Воспр.///Пауза", "iconscolor": "000000", "animation": "none", "margin": "0 0 0 0", "iconsreplay": 0, "aover": "0.9", "hideonpause": 0, "hideonleave": 0 },
    "control_live": { "order": 4, "on": 1, "text": "<span style='color:#55a81e'>●</span> <span style='font-size:10px'>LIVE</span>", "letterspacing": "2", "action": "live", "type": "text", "hand": 1, "click": 1, "fontsize": 12, "margin": "0 0 0 10", "a": "1", "hide": 1, "hideonvod": 1, "font": "Arial", "tip": 1, "tiptext": "Прямой эфир", "clickarea": 1 },
    "control_stop": { "order": 15, "on": 1, "icon": "<svg width='20' height='20'><g transform='translate(4, 4)'><rect x='0' y='0' width='12' height='12' fill='#ffffff'/></g></svg>", "action": "stop", "type": "svg", "bg": 0 },
    "control_prev": { "order": 16, "on": 1, "icon": "<svg width='20' height='20'><g transform='translate(5.5, 5)'><path d='M8.99999,10.43749 L8.99999,10.4375 L2,5.21875 L8.99999,0 L8.99999,10.43749 Z M0,0 L2,0 L2,10.24983 L0,10.24983 L0,0 Z' fill='#ffffff'/></g></svg>", "action": "prev", "type": "svg", "scale": 1.2, "position": "controls-bottom", "margin": "0 0 0 15" },
    "control_next": { "order": 17, "on": 1, "icon": "<svg width='20' height='20'><g transform='translate(5, 5)'><path d='M0.46948,1e-05 L0.46948,1e-05 L0.46948,0 L7.46947,5.21875 L0.46948,10.4375 L0.46948,1e-05 Z M7.53052,0 L9.53052,0 L9.53052,10.62482 L7.53052,10.62482 L7.53052,0 Z' fill='#ffffff'/></g></svg>", "action": "next", "type": "svg", "scale": 1.2, "position": "controls-bottom", "margin": "0 0 0 15" },
    "control_share": { "order": 18, "on": 0, "icon": "<svg width='20' height='20'><g fill='#000000' transform='translate(2, 2)'><path d='M5.5662845,8.26248366 C5.5662845,8.31742532 5.55410017,8.36915611 5.55096705,8.423741 L11.1639402,11.2990803 C11.6445251,10.8820232 12.2593116,10.6217638 12.938501,10.6217638 C14.4655458,10.622299 15.7029517,11.8904166 15.7029517,13.455005 C15.7029517,15.0215556 14.4655458,16.2896732 12.938501,16.2896732 C11.4102378,16.2896732 10.1740504,15.0215556 10.1740504,13.455005 C10.1740504,13.3986363 10.1862347,13.3481542 10.1893679,13.2935693 L4.57639463,10.41823 C4.0944173,10.8336816 3.48102327,11.093941 2.80183384,11.093941 C1.27496309,11.093941 0.0373831776,9.82707208 0.0373831776,8.26248366 C0.0373831776,6.69628979 1.27496309,5.42781546 2.80183384,5.42781546 C3.48102327,5.42781546 4.09459137,5.68968022 4.57639463,6.10513188 L10.1893679,3.22979258 C10.1862347,3.17485093 10.1740504,3.12312015 10.1740504,3.06675144 C10.1740504,1.50359007 11.4102378,0.235294118 12.938501,0.235294118 C14.4655458,0.235294118 15.7029517,1.50359007 15.7029517,3.06675144 C15.7029517,4.63294531 14.4655458,5.90141964 12.938501,5.90141964 C12.2577451,5.90141964 11.6440029,5.63955488 11.1639402,5.22249779 L5.55096705,8.09944252 C5.55392611,8.15438418 5.5662845,8.20611499 5.5662845,8.26248366' fill='#ffffff'/></g></svg>", "action": "share", "type": "svg", "position": "top-right", "margin": "15 15 0 0", "bg": 1, "bgo": 1, "scale": 1, "bgpadding": "6 6 6 6", "bga": 0.3, "bgaover": 0.6, "animation": "position", "ease": "elastic", "hide": 1, "hideonleaveandplay": 0, "hideonplay": 1, "tip": 1 },
    "lang": "en",
    "settings": { "settings4": 0, "settings4action": "channel", "rounding": 5, "bgcolor": "ffffff", "color": "000000", "bga": "1", "valuecolor": "000000", "padding": "5 10 5 10", "margin": "0 10 12 0", "bgcolorover": "f0f0f0", "settings5": 0, "settings5action": "download", "headfontsize": 12, "bordercolored": 1, "bordercolor": "bfbfbf", "settings3title": "", "settings3": 1, "settings2": 1, "settings1": 1, "position": "bottom-right", "scrollarrows": 1, "settings1title": "", "showovercontrol": 0, "fontsize": 12, "settings2action": "speed", "settings2title": "", "settings3action": "scale", "activeicon": 1, "nohead": 1, "activeiconsize": 3, "limitwidth": 0, "hidearrow": 0, "always": 0, "show1value": 1, "customspeeds": 0, "valuefontsize": 12, "settings1hide": 0, "settings3hide": 0, "speed4live": 1, "settings4title": "", "font": "Roboto" },
    "log": 0,
    "rounding": 6,
    "control_Uy0EN": { "on": 0, "order": 11, "action": "custom", "icon": "<svg width='18' height='18'><path d='M13.293 3.293L7.022 9.564l1.414 1.414 6.271-6.271L17 7V1h-6z' fill='#ffffff'></path><path d='M13 15H3V5h5V3H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6h-2v5z' fill='#ffffff'></path></svg>", "type": "svg", "position": "controls", "margin": "0 0 0 5", "link": 1, "linkurl": "api:pipwebkit", "hide": 0, "bg": 1, "bgcolor": "55a81e", "bgo": "0.2", "bga": "0", "bgaover": "1", "bgpadding": "6 6 6 6", "tip": 1, "tiptext": "Свернуть видео", "tipbgrounding": 3, "tipfontsize": 11, "tipbga": "1", "tipa": "0.7", "tipbgcolor": "ffffff", "tipcolor": "000000", "tippadding": "7 7 7 7", "animation": "position", "iconmargin": "0 0 0 1", "tippointer": 1, "tippointeralign": "right" },
    "preload": 0,
    "playlist": {
        // 42bd87
        "bgcolor": "aec7bc",
        "color": "000000",
        "valuecolor": "000000",
        "historybgcolor": "aec7bc",
        "bgcolorover": "9db1a8",
        "bordercolor": "dedede",
        "playbgcolor": "9db1a8",
        "dropbgcolor": "42bd88",
        "dropcolor": "000000",

        "hidecontrol": 1,
        "bgcolor": "aec7bc",
        "color": "000000",
        "valuecolor": "000000",
        "bga": "1",
        "historybgcolor": "aec7bc",
        "bgcolorover": "9db1a8",
        "bordercolored": 1,
        "bordercolor": "dedede",
        "rounding": 3,
        "margin": "10 10 0 10",
        "floatleft": 1,
        "droplist": 1,
        "always": 1,
        "historycolor": "000000",
        "borderbottom": 0,
        "historytitlestrike": 1,
        "dropclrs": 1,
        "playbgcolored": 1,
        "playbgcolor": "9db1a8",
        "font": "Roboto",
        "dropbgcolor": "42bd88",
        "dropcolor": "000000"
    },
    "alerts": 1,
    "posteronpause": 0,
    "eventstracker": 1,
    "events": "PlayerUroTVEvents",
    "vast": 0,
    "prerolls": 0,
    "thumbs": 0,
    "union": 0,
    "yamtr": 0,
    "youtubeposter": 0,
    "landfullmobile": 1,
    "reload": 1,
    "hotkey": { "seeksides": 1, "nums": 0, "m": 0, "volumewheelfull": 1 },
    "hls": 1,
    "fullonplay": 0,
    "timestore": 1,
    "stopotherplayers": 1,
    "ssfly": 0,
    "ssflyw": 1920,
    "rc_custom": 1,
    "rc_anyway": 0,
    "rc_label": "Player Uro.TV Pro",
    "timestore0plroot": 1,
    "playedstore": 0,
    "nativecontrolsmobile": 0,
    "version": -1,
    "tagcors": 0,
    "rc_version": 1,
    "border": 0,
    "transbg": 0,
    "bgcolor": "ffffff",
    "shadow": 0,
    "ga": 0,
    "hlsdvrtime": 0,
    "intros": 1,
    "intro": "https://uro.tv/files/video/newurotv_video/2018/10/converted/13824_1080.mp4",
    "introstart": 60,
    "midrolls": 1,
    "vast_midrollrest": 1,
    "chromecast": { "on": 0 },
    "share2": "vk",
    "share3": "telegram",
    "share4": "whatsapp",
    "tags": 0,
    "pip": { "on": 0 },
    "shareiconscale": "2.9",
    "eventlisteners": 1,
    "postmessage": 1,
    "observer": 0,
    "ga_event": { "error": 1, "end": 1, "play25": 1, "play50": 1, "play75": 1 },
    "finishrewind": 0,
    "reloadtimeout": 10,
    "landscapefull": 1,
    "effects": 0,
    "effectblur": 1,
    "effectgray": 0,
    "fonts": 1,
    "redirect": 0,
    "water": 0,
    "hlsaudio": 1,
    "livewakeup": 1,
    "channels": 0,
    "channel2off": 1,
    "channel0title": "Ru",
    "channel1title": "En",
    "pass": 0,
    "dash": 0,
    "lsfullstart": 0,
    "lsfullplay": 0,
    "timestorenolive": 1,
    "lang_it": 0,
    "lang_cz": 0,
    "file": "[{pjs'qttitlepjs'qt:pjs'qtSeason 1pjs'qt,pjs'qtfolderpjs'qt:[{pjs'qttitlepjs'qt:pjs'qtEpisode 1pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 2pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 3pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 4pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 5pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 6pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 7pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 8pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 9pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 10pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt}]},{pjs'qttitlepjs'qt:pjs'qtSeason 2pjs'qt,pjs'qtfolderpjs'qt:[{pjs'qttitlepjs'qt:pjs'qtEpisode 1pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 2pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 3pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 4pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 5pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 6pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 7pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 8pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 9pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 10pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt}]},{pjs'qttitlepjs'qt:pjs'qtSeason 3pjs'qt,pjs'qtfolderpjs'qt:[{pjs'qttitlepjs'qt:pjs'qtEpisode 1pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 2pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 3pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 4pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 5pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 6pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 7pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 8pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 9pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt},{pjs'qttitlepjs'qt:pjs'qtEpisode 10pjs'qt,pjs'qtfilepjs'qt:pjs'qthttps://plrjs.com/x.mp4pjs'qt}]}]\n",
    "fontnames": "Roboto"
};

let infodatastart = {
    "screencolor": "000000",

    "toolbar": {
        "color": "40c173",
        "hide": 1,
        "margin": "-20 0 0 0",
        "gradient": 0,
        "animation": "alpha",
        "a": "1",
        "leftandrightpadding": 10,
        "h": 50,
        "stretchonfullscreen": 1,
        "hideuntilstarted": 0,
        "hidewithoutmoving": 1,
        "hideleavetimeout": 3,
        "position": "bottom",
        "clickarea": 0,
        "hideonpause": 0,
        "hidedown": 1,
        "hidejustfull": 0
    },

    "control_title": {
        "order": 1,
        "on": 1,
        "action": "title",
        "type": "text",
        "position": "top-right",
        "click": 0,
        "hand": 0,
        "text": "",
        "var": "title",
        "hide": 1,
        "hideonplay": 1,
        "animation": "position",
        "bg": 1,
        "bga": 0.4,
        "bgpadding": "6 6 6 6",
        "letterspacing": "0",
        "showtitleplaylist": 1,
        "font": "Montserrat-Bold",
        "title": "title",
        "fontsize": 32,
        "margin": "20 20 0 0",
        "bgo": "20"
    },

    "control_line": {
        "order": 3,
        "on": 1,
        "type": "shape",
        "action": "line",
        "h": 4, // высота линии
        "rounding": "0",
        "w": 122, // ширина
        "a": 1,
        "abg": "0.3", // прозрачность фона
        "aload": "0.4", // прозрачность загрузки
        "aover": "0", // прозрачность ховера
        "color": "40c173", // цвет линии
        "colorbg": "40c173", // цвет фона
        "colorload": "ffffff", // цвет загрузки
        "colorover": "ffffff", // цвет ховера
        "buffer": {
            "on": 1, // вкл буфер
            "color": "ffffff", // цвет буфера
            "a": 0.5 // прозрачность буфера
        },
        "position": "bottom", // позиция
        "margin": "0 15 50 15",
        "handle": 1,
        "bgpadding": "5 0 5 0",
        "tip": 1,
        "hide": 1,
        "hideonlive": 1,
        "handlescale": "1.3",
        "linetipmarginbottom": 15,
        "toptip": 0,
        "tipbgcolor": "ffffff",
        "tipbgrounding": 3,
        "expand": "1", // увеличение при наведении
        "tipcolor": "000000",
        "tippadding": "5 7 4 7",
        "tipfontsize": 11,
        "tipbga": "1",
        "tipa": "0.8",
        "linetippointer": 1,
        "animation": "position",
        "tipmargin": "0 0 0 0",
        "customwidth": 0,
        "ontop": 1,
        "pointed": 1,
        "clickarea": 0,
        "value": 0,
        "clickmargin": "0 0 5 0",
        "clickscaley": "1.1",
        "click": 1,
        "bg": 0, // вкл фон
        "bgcolor": "40c173" // цвет фона
    },
    "control_play": {
        "order": 2,
        "on": 1,
        "icon": "<svg width='20' height='20'><g fill-rule='nonzero' transform='translate(4, 2)'><path d='M0.546276239,0.24474624 L12.7132387,7.7763331 L0.586041552,15.4534493 L0.546276239,0.24474624 Z M2.05333314,2.9417772 L2.07893387,12.7330742 L9.88637072,7.79058012 L2.05333314,2.9417772 Z' fill='#ffffff'/></g></svg>",
        "icon2": "<svg width='20' height='20'><g fill-rule='nonzero' fill='#000000' transform='translate(4, 3)'><path d='M1.5,1.5 L1.5,11.5 L3.5,11.5 L3.5,1.5 L1.5,1.5 Z M0,0 L5,0 L5,13 L0,13 L0,0 Z' fill='#ffffff'/><path d='M8.5,1.5 L8.5,11.5 L10.5,11.5 L10.5,1.5 L8.5,1.5 Z M7,0 L12,0 L12,13 L7,13 L7,0 Z' fill='#ffffff'/></g></svg>",
        "icon3": "<svg width='20' height='20'><g transform='translate(2, 3)'><path d='M16,7.13661132 L16,7.10916945 L15.2081785,7.10916945 L14.275093,7.10916945 C14.275093,3.19912625 11.063197,0 7.13754645,0 C3.21189591,0 0,3.19912625 0,7.10916945 C0,11.0192126 3.21189591,14.2183389 7.13754645,14.2183389 L7.13754645,12.4410465 C4.19330855,12.4410465 1.78438662,10.0417018 1.78438662,7.10916945 C1.78438662,4.17663705 4.19330855,1.77729236 7.13754645,1.77729236 C10.0817844,1.77729236 12.4907063,4.17663705 12.4907063,7.10916945 L10.6445167,7.10916945 L13.3828996,11.5524004 L16,7.13661132 Z' fill='#ffffff'></path></g></svg>",
        "action": "play",
        "action2": "pause",
        "type": "svg",
        "scale": "1.3", // маштаб
        "scaleover": "1",
        "margin": "0 0 0 5",
        "bgcolorover": "40c173",
        "a": "1",
        "aover": "-1",
        "tip": 1,
        "iconscolorover": "40c173", // цвет иконки при наведении
        "iconscolor": "-1",
        "bg": 0, // вкл фон
        "bgcolor": "40c173", // цвет фона
        "bgpadding": "5 7 5 7",
        "bgaover": "1",
        "bga": "0",
        "bgo": "0",
        "iconmargin": "0 0 0 2",
        "tipbgcolor": "ffffff",
        "tipcolor": "000000",
        "tipbgrounding": 3,
        "tipbga": "1",
        "tipfontsize": 11,
        "tippadding": "7 7 7 7",
        "tipa": "0.7",
        "animation": "position",
        "tippointer": 1,
        "tippointeralign": "left",
        "iconsreplay": 1,
        "hide": 0,
        "position": "controls"
    },
    "control_mute": {
        "order": 8,
        "on": 1,
        "icon": "<svg width='20' height='20'><g transform='translate(3, 2)'><polygon fill-rule='nonzero' points='8.8817842e-16 4.3746 8.8817842e-16 10.62539 3.10029 10.62539 7.74143 15 7.74419 0 3.10237 4.37461 1.77635684e-15 4.37461 1.77635684e-15 4.3746' fill='#ffffff'/><path d='M10.44167,3.62185 C10.17405,3.31419 9.74434,3.31419 9.47808,3.62343 C9.21251,3.93268 9.21251,4.43332 9.47944,4.74335 L9.47944,4.74178 C10.06713,5.42512 10.42941,6.36234 10.42941,7.40396 C10.42941,8.44479 10.06781,9.37885 9.4808,10.06219 C9.2125,10.36985 9.2125,10.87049 9.47944,11.18131 C9.61223,11.33554 9.78657,11.41304 9.9609,11.41304 C10.13591,11.41304 10.31024,11.33554 10.44303,11.18131 C11.27519,10.21641 11.79138,8.87583 11.7907,7.40396 C11.79138,5.92892 11.27315,4.58676 10.44167,3.62186 L10.44167,3.62185 Z' id='pjs_volume_element1' fill='#ffffff'/><path d='M11.99413,1.86278 C11.72289,2.17257 11.72289,2.67489 11.99413,2.98309 C12.99747,4.13271 13.61608,5.71413 13.61608,7.46829 C13.61608,9.22085 12.99747,10.80149 11.99552,11.9519 C11.72427,12.26089 11.72427,12.76243 11.99552,13.07221 C12.13045,13.22671 12.3076,13.30435 12.48543,13.30435 C12.66256,13.30435 12.83971,13.22671 12.97464,13.07221 C14.22569,11.63894 15.00138,9.65345 15,7.46829 C15.00069,5.28154 14.225,3.29446 12.97187,1.86278 C12.69993,1.55299 12.2633,1.55299 11.99413,1.86278 L11.99413,1.86278 Z' id='pjs_volume_element2' fill='#ffffff'/></g></svg>",
        "icon2": "<svg width='20' height='20'><g fill-rule='nonzero' fill='#000000' transform='translate(3, 2)'><polygon points='8.8817842e-16 4.3746 8.8817842e-16 10.62539 3.10029 10.62539 7.74143 15 7.74419 0 3.10237 4.37461 1.77635684e-15 4.37461 1.77635684e-15 4.3746' fill='#ffffff'/><path d='M11.9267767,6.64744791 L9.87932726,4.59999847 L9,5.47932573 L11.0474494,7.52677517 L9,9.57422461 L9.87932726,10.4535519 L11.9267767,8.40610243 L13.9742261,10.4535519 L14.8535534,9.57422461 L12.806104,7.52677517 L14.8535534,5.47932573 L13.9742261,4.59999847 L11.9267767,6.64744791 Z' fill='#ffffff'/></g></svg>",
        "action": "mute",
        "action2": "unmute",
        "type": "svg",
        "margin": "0 0 0 10",
        "bg": 0,
        "bgcolor": "42bd88",
        "bgo": "0",
        "bgpadding": "5 5 5 7",
        "iconmargin": "0 0 0 -1",
        "bgaover": "1",
        "bga": "0",
        "tip": 1,
        "tippadding": "7 7 7 7",
        "tipbga": "1",
        "tipfontsize": 11,
        "tipbgrounding": 3,
        "tipbgcolor": "ffffff",
        "tipcolor": "000000",
        "tipa": "0.7",
        "animation": "alpha",
        "tippointer": 1,
        "tippointeralign": "left",
        "tiptext": "",
        "position": "controls",
        "hide": 1,
        "hideonmobile": 1,
        "displayvolume": 1,
        "hideoverwidth": 0,
        "hideondesktop": 0,
        "iconscolor": "-1",
        "iconscolorover": "40c173"
    },
    "control_volume": {
        "order": 9,
        "on": 1,
        "type": "shape",
        "action": "volume",
        "h": 4,
        "rounding": "1",
        "customwidth": 1,
        "w": 70,
        "a": 1,
        "abg": "0.3",
        "aover": "0",
        "color": "40c173",
        "colorbg": "ffffff",
        "colorover": "ffffff",
        "hide": 1,
        "hideoutmute": 0, // скрыть в неактивном состоянии
        "rotation": "",
        "bgpadding": "5 0 5 0",
        "bg": 0,
        "handle": 1,
        "position": "controls",
        "margin": "0 0 0 10",
        "animation": "alpha",
        "hideuntilstarted": 0,
        "hideonleave": 0,
        "handlescale": "1.3",
        "handlecolor": "-1",
        "expand": "1", // раширение при наведении
        "tip": 1,
        "tipbgcolor": "ffffff",
        "tipcolor": "000000",
        "linetipmarginbottom": 15,
        "tipbga": "1",
        "tipbgrounding": 3,
        "linetippointer": 1,
        "tipfontsize": 11,
        "ontop": 1,
        "handlehide": 0,
        "clickarea": 0,
        "hideonmobile": 1
    },
    "control_time": {
        "order": 5,
        "on": 1,
        "action": "time",
        "type": "text",
        "text": "00:00",
        "fontsize": 11,
        "margin": "1 0 0 10",
        "click": 0,
        "separator": "/",
        "inversetime": 1,
        "animation": "position",
        "showduration": 1,
        "letterspacing": "1",
        "font": "Montserrat-Regular",
        "bold": 0,
        "bg": 0
    },
    "control_duration": {
        "order": 7,
        "on": 1,
        "action": "duration",
        "type": "text",
        "text": "/  0:00",
        "fontsize": 11,
        "margin": "1 0 0 0",
        "click": 0,
        "animation": "position",
        "tip": 0,
        "tiptext": "Длительность",
        "hide": 0,
        "hideonlive": 1,
        "hideondesktop": 0,
        "position": "controls",
        "font": "Montserrat-Regular",
        "letterspacing": "1"
    },
    "control_buffer": {
        "order": 6,
        "on": 1,
        "icon": "<div class='loader(rand)'><svg class='circular(rand)' viewBox='25 25 50 50'><circle class='path(rand)' stroke='(color)' cx='50' cy='50' r='20' fill='none' stroke-width='2' stroke-miterlimit='10'/></svg></div>|||.loader(rand) {position: relative;margin: 0 auto;width: 50px;}.loader(rand):before {content: '';display: block;padding-top: 100%;}.circular(rand) {-webkit-animation: rotate 2s linear infinite;animation: rotate 2s linear infinite;height: 100%;-webkit-transform-origin: center center;transform-origin: center center;width: 100%;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;}.path(rand) {stroke-dasharray: 1, 200;stroke-dashoffset: 0;-webkit-animation: dash 1.5s ease-in-out infinite;animation: dash 1.5s ease-in-out infinite;}@-webkit-keyframes rotate {100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}@keyframes rotate {100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}@-webkit-keyframes dash {0% {stroke-dasharray: 1, 200;stroke-dashoffset: 0;}50% {stroke-dasharray: 89, 200;stroke-dashoffset: -35px;}100% {stroke-dasharray: 89, 200;stroke-dashoffset: -124px;}}@keyframes dash {0% {stroke-dasharray: 1, 200;stroke-dashoffset: 0;}50% {stroke-dasharray: 89, 200;stroke-dashoffset: -35px;}100% {stroke-dasharray: 89, 200;stroke-dashoffset: -124px;}}",
        "action": "buffer",
        "type": "css",
        "position": "center",
        "scale": 1,
        "click": 0,
        "hide": 1,
        "color": "40c173"
    },
    "control_settings": {
        "order": 12,
        "on": 1,
        "icon": "<svg width='20' height='20'><g fill-rule='nonzero' transform='translate(1, 1)'><path d='M9.95921636,0 L11.0734352,2.42298075 L12.084278,2.97683675 L14.5654263,1.86912475 L16.0013553,3.35766689 L15.1972647,5.84141709 L15.4154756,6.83068435 L17.8737063,7.7883911 L18,9.84229954 L15.5533514,10.8000063 L15.0708477,11.8384089 L16.0816905,14.3422093 L14.6566042,15.8135479 L12.1531543,14.7692045 L11.0274766,15.2422408 L10.0855101,17.60767 L8.06382454,17.7 L6.98410547,15.2884058 L5.8124692,14.7807148 L3.44615574,15.8537721 L1.96426811,14.4345393 L2.92927551,11.8845739 L2.36631345,10.8230269 L0,9.89997483 L0.0230409069,7.82304578 L2.44677181,6.84231842 L2.94073435,5.84141709 L1.88393297,3.35766689 L3.33132085,1.89226913 L5.86988664,2.89614086 L6.97264662,2.4807798 L7.9375308,0.0460412136 L9.95921636,0 Z M8.84993873,6 C7.27603345,6 6,7.27601328 6,8.84993974 C6,10.4239867 7.27603345,11.7 8.84993873,11.7 C10.4239666,11.7 11.7,10.4239867 11.7,8.84993974 C11.7,7.27601328 10.4239666,6 8.84993873,6 Z' fill='#ffffff'/></g></svg>",
        "action": "settings", // текст сопровождения
        "position": "controls-right",
        "margin": "0 7 0 0",
        "type": "svg",
        "scale": "1",
        "tip": 1,
        "tipbgrounding": 3,
        "animation": "position",
        "bg": 0,
        "bgpadding": "5 7 5 7",
        "bgcolor": "42bd88",
        "bgo": "0",
        "bgaover": "1",
        "bga": "0",
        "iconmargin": "0 0 0 0",
        "tippadding": "7 7 7 7",
        "tipbga": "1",
        "tipa": "0.7",
        "tipfontsize": 11,
        "tipletterspacing": 0,
        "tipcolor": "000000",
        "tipbgcolor": "ffffff",
        "tippointer": 1,
        "tippointeralign": "right",
        "tiptext": "",
        "hdicon": 0,
        "hide": 1,
        "hideonlive": 0,
        "iconscolorover": "40c173"
    },
    "control_playlist": {
        "order": 10,
        "on": 0,
        "icon": "<svg width='17px' height='16px' viewBox='2 2 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n    <g id='Group-2' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(3.000000, 3.000000)' stroke-linecap='round' stroke-linejoin='round'>\n        <path d='M0,1 L14.5187304,1' id='Line' stroke='#FFFFFF' stroke-width='2'></path>\n        <path d='M0,7 L14.5187304,7' id='Line' stroke='#FFFFFF' stroke-width='2'></path>\n        <path d='M0,13 L14.5187304,13' id='Line' stroke='#FFFFFF' stroke-width='2'></path>\n    </g>\n</svg>",
        "action": "playlist",
        "position": "center",
        "margin": "10 0 0 25",
        "bg": 0,
        "scale": "1.5",
        "type": "svg",
        "animation": "position",
        "bgpadding": "0 10 10 0",
        "bga": "0",
        "bgaover": "1",
        "tip": 1,
        "bgcolor": "1aaeff",
        "bgo": "0.2",
        "bgborder": 0,
        "bgbordercolor": "ffffff",
        "tipbgcolor": "ffffff",
        "tipcolor": "000000",
        "tippointer": 1,
        "tippointeralign": "left",
        "tipbgrounding": 3,
        "tipfontsize": 11,
        "tippadding": "7 7 7 7",
        "tipbga": "1",
        "tipmargin": "0 0 50 -40",
        "tiptext": "Список видео"
    },
    "control_full": {
        "order": 13,
        "on": 1,
        "icon": "<svg width='18' height='18'><path d='M10 3h3.6l-4 4L11 8.4l4-4V8h2V1h-7zM7 9.6l-4 4V10H1v7h7v-2H4.4l4-4z' fill='#ffffff'></path></svg>",
        "icon2": "<svg width='18' height='18'><path d='M1 12h3.6l-4 4L2 17.4l4-4V17h2v-7H1zM16 .6l-4 4V1h-2v7h7V6h-3.6l4-4z' fill='#ffffff'></path></svg>",
        "action": "fullscreen",
        "action2": "normalscreen",
        "type": "svg",
        "position": "controls-right",
        "margin": "0 5 0 15",
        "scale": "0.9",
        "bg": 0,
        "bgpadding": "6 6 6 6",
        "bgcolor": "42bd88",
        "bgo": "0",
        "bga": "0",
        "bgaover": "1",
        "tip": 1,
        "tipfontsize": 11,
        "tipbga": "1",
        "tipa": "0.7",
        "tippadding": "7 7 7 7",
        "tipbgrounding": 3,
        "tipbgcolor": "ffffff",
        "tipcolor": "000000",
        "animation": "position",
        "iconmargin": "0 2 3 0",
        "tippointer": 1,
        "tippointeralign": "right",
        "tiptext": "",
        "bgcolorover": "-1",
        "iconscolor": "-1",
        "iconscolorover": "40c173"
    },

    "control_start": {
        "order": 14,
        "position": "center",
        "scale": "1.7",
        "on": 1,
        "icon": "<svg width='20' height='20'><g fill-rule='nonzero' transform='translate(5, 3)'><path d='M11.4463462,6.1578125 L1.14019231,0.11666667 C1.01432692,0.04375 0.88475962,0 0.73668269,0 C0.33317308,0 0.00370192,0.328125 0.00370192,0.72916667 L0,0.72916667 L0,13.2708333 L0.00370192,13.2708333 C0.00370192,13.671875 0.33317308,14 0.73668269,14 C0.88846154,14 1.01432692,13.9489583 1.15129808,13.8760417 L11.4463462,7.8421875 C11.6906731,7.6416667 11.8461538,7.3390625 11.8461538,7 C11.8461538,6.6609375 11.6906731,6.36197917 11.4463462,6.1578125 L11.4463462,6.1578125 Z' fill='#000000'/></g></svg>",
        "icon3": "<svg width='20' height='20'><g transform='translate(2, 3)'><path d='M16,7.13661132 L16,7.10916945 L15.2081785,7.10916945 L14.275093,7.10916945 C14.275093,3.19912625 11.063197,0 7.13754645,0 C3.21189591,0 0,3.19912625 0,7.10916945 C0,11.0192126 3.21189591,14.2183389 7.13754645,14.2183389 L7.13754645,12.4410465 C4.19330855,12.4410465 1.78438662,10.0417018 1.78438662,7.10916945 C1.78438662,4.17663705 4.19330855,1.77729236 7.13754645,1.77729236 C10.0817844,1.77729236 12.4907063,4.17663705 12.4907063,7.10916945 L10.6445167,7.10916945 L13.3828996,11.5524004 L16,7.13661132 Z' fill='#000000'></path></g></svg>",
        "action": "play",
        "type": "svg",
        "bg": 1,
        "bgcolor": "40c173",
        "bgo": "1", // скругление
        "bgpadding": "10 10 10 10",
        "iconmargin": "0 0 0 0",
        "bga": "1",
        "bgaover": "-1",
        "scaleover": "2.2",
        "hide": 1,
        "hideonplay": 1,
        "hideonyoutube": 1,
        "bgborder": 0,
        "a": "1",
        "tip": 0,
        "tiptext": "Воспр.///Пауза",
        "iconscolor": "ffffff",
        "animation": "none",
        "margin": "0 0 0 0",
        "iconsreplay": 0,
        "aover": "0.9",
        "hideonpause": 0,
        "hideonleave": 0
    },

    "control_stop": {
        "order": 15,
        "on": 0,
        "icon": "<svg width='20' height='20'><g transform='translate(4, 4)'><rect x='0' y='0' width='12' height='12' fill='#ffffff'/></g></svg>",
        "action": "stop",
        "type": "svg",
        "bg": 0
    },
    "control_prev": {
        "order": 16,
        "on": 1,
        "icon": "<svg width='20' height='20'><g transform='translate(5.5, 5)'><path d='M8.99999,10.43749 L8.99999,10.4375 L2,5.21875 L8.99999,0 L8.99999,10.43749 Z M0,0 L2,0 L2,10.24983 L0,10.24983 L0,0 Z' fill='#ffffff'/></g></svg>",
        "action": "prev",
        "type": "svg",
        "scale": 1.2,
        "position": "controls-bottom",
        "margin": "0 0 0 15",
        "iconscolorover": "40c173"
    },
    "control_next": {
        "order": 17,
        "on": 1,
        "icon": "<svg width='20' height='20'><g transform='translate(5, 5)'><path d='M0.46948,1e-05 L0.46948,1e-05 L0.46948,0 L7.46947,5.21875 L0.46948,10.4375 L0.46948,1e-05 Z M7.53052,0 L9.53052,0 L9.53052,10.62482 L7.53052,10.62482 L7.53052,0 Z' fill='#ffffff'/></g></svg>",
        "action": "next",
        "type": "svg",
        "scale": 1.2,
        "position": "controls-bottom",
        "margin": "0 0 0 15",
        "iconscolorover": "40c173"
    },
    "settings": {
        "settings4": 0,
        "settings4action": "channel",
        "rounding": 5,
        "bgcolor": "ffffff",
        "color": "000000",
        "bga": "1",
        "valuecolor": "000000",
        "padding": "5 10 5 10",
        "margin": "0 10 12 0",
        "bgcolorover": "f0f0f0",
        "settings5": 0,
        "settings5action": "download",
        "headfontsize": 12,
        "bordercolored": 1,
        "bordercolor": "bfbfbf",
        "settings3title": "Маштаб",
        "settings3": 0,
        "settings2": 1,
        "settings1": 1,
        "position": "bottom-right",
        "scrollarrows": 1,
        "settings1title": "Качество",
        "showovercontrol": 0,
        "fontsize": 12,
        "settings2action": "speed",
        "settings2title": "Скорость",
        "settings3action": "scale",
        "activeicon": 1,
        "nohead": 1,
        "activeiconsize": 3,
        "limitwidth": 0,
        "hidearrow": 0,
        "always": 0,
        "show1value": 1,
        "customspeeds": 0,
        "valuefontsize": 12,
        "settings1hide": 0,
        "settings3hide": 0,
        "speed4live": 1,
        "settings4title": "",
        "font": "Montserrat-Regular"
    },
    "control_Uy0EN": {
        "on": 1,
        "order": 11,
        "action": "custom",
        "icon": "<svg width='18' height='18'><path d='M13.293 3.293L7.022 9.564l1.414 1.414 6.271-6.271L17 7V1h-6z' fill='#ffffff'></path><path d='M13 15H3V5h5V3H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6h-2v5z' fill='#ffffff'></path></svg>",
        "type": "svg",
        "position": "controls",
        "margin": "0 0 0 15",
        "link": 1,
        "linkurl": "api:pipwebkit",
        "hide": 0,
        "bg": 0,
        "bgcolor": "40c173",
        "bgo": "0.2",
        "bga": "0",
        "bgaover": "1",
        "bgpadding": "6 6 6 6",
        "tip": 1,
        "tiptext": "Свернуть видео",
        "tipbgrounding": 3,
        "tipfontsize": 11,
        "tipbga": "1",
        "tipa": "0.7",
        "tipbgcolor": "ffffff",
        "tipcolor": "000000",
        "tippadding": "7 7 7 7",
        "animation": "position",
        "iconmargin": "0 0 0 1",
        "tippointer": 1,
        "tippointeralign": "left",
        "iconscolorover": "40c173"
    },
    "preload": 0,
    "playlist": {


        "font": "Montserrat-Regular",
        "hidecontrol": 1,

        "bgcolor": "55e6a7",
        "bgcolorover": "9db1a8",

        "color": "000000",
        "valuecolor": "000000",

        "bga": "1",

        "historybgcolor": "aec7bc",


        "bordercolored": 1,
        "bordercolor": "dedede",
        "rounding": 3,
        "margin": "17 16 0 32",
        "floatleft": 1,
        "droplist": 1,
        "always": 1,
        "historycolor": "000000",
        "borderbottom": 0,
        "historytitlestrike": 1,
        "dropclrs": 1,
        "playbgcolored": 1,
        "playbgcolor": "9db1a8",
        "dropbgcolor": "42bd88",
        "dropcolor": "000000",
        "fontsize": 29,
        "headfontsize": 20,
        "padding": "7 15 7 18",
        "scrollarrows": 1
    },
    "alerts": 1,
    "posteronpause": 0,
    "eventstracker": 1,
    "events": "PlayerUroTVEvents",
    "vast": 0,
    "prerolls": 0,
    "thumbs": 0,
    "union": 0,
    "yamtr": 0,
    "youtubeposter": 0,
    "landfullmobile": 1,
    "reload": 1,
    "hotkey": {
        "seeksides": 1,
        "nums": 0,
        "m": 0,
        "volumewheelfull": 1
    },
    "hls": 1,
    "fullonplay": 0,
    "timestore": 1,
    "stopotherplayers": 1,
    "ssfly": 0,
    "ssflyw": 1920,
    "rc_custom": 1,
    "rc_anyway": 0,
    "rc_label": "Player Uro.TV Pro",
    "timestore0plroot": 1,
    "playedstore": 0,
    "nativecontrolsmobile": 0,
    "version": -1,
    "tagcors": 0,
    "rc_version": 1,
    "border": 0,
    "transbg": 0,
    "bgcolor": "ffffff",
    "shadow": 0,
    "ga": 0,
    "hlsdvrtime": 0,
    "intros": 1,
    "introstart": 60,
    "midrolls": 1,
    "vast_midrollrest": 1,
    "chromecast": {
        "on": 0
    },
    "tags": 0,
    "pip": {
        "on": 0
    },
    "shareiconscale": "2.9",
    "eventlisteners": 1,
    "postmessage": 1,
    "observer": 0,
    "ga_event": {
        "error": 1,
        "end": 1,
        "play25": 1,
        "play50": 1,
        "play75": 1
    },
    "finishrewind": 0,
    "reloadtimeout": 10,
    "landscapefull": 1,
    "effects": 0,
    "effectblur": 1,
    "effectgray": 0,
    "fonts": 1,
    "redirect": 0,
    "water": 0,
    "hlsaudio": 1,
    "pass": 0,
    "dash": 0,
    "lsfullstart": 0,
    "lsfullplay": 0,
    "timestorenolive": 1,
    // "rounding": 20 // скругление всего плеера
    "aspect": "off" // под размер контейнера
}

var pljssglobal = [];
var pljssglobalid;
if (window['PlayerjsAsync']) { setTimeout(PlayerjsAsync, 1) };

function Playerjs(options) {
    var o = {
        play: false,
        playerid: 'ha5cr6i5q798',
        default_w: 640,
        default_h: 360,
        version: '9.97.2',
        compilation: ['HLS', '', ''],
        compilations: '',
        fullscreen: false,
        realfullscreen: false,
        nativecontrols: false,
        fullwheel: false,
        fullscreen_start: false,
        airplay: false,
        pipwebkit: false,
        ispipkit: false,
        u: '#1KRpSE3peFC5cH2QOIbo6ocTPsWTPsVologxOH2QbEDobuglbE29lH3obuboPsWTPsWTbrVphGCxeochQrVpmEDpgGC4bubomscTMsVTPoWTbrVpgIfYdGCBNJVo6syPbEC5iHCY0GC9NochbECQPGZXbrVpaochbsyolofQeFgxaHfxRGCJhJnUaFZxiHfIbucXPrVphoch1sVPbI3xRFDxcGZ9NFgBlHntcIfBeHbo6syPbGZedFDBNJZelI3xaIgxeFVo6sVPbGZedFDJiJZaOJDxmH3FiHfIbucXlofaiFZBlFCY2FDxiHCBOJDwbucslogUOI2e0GC9NochbEf90JZ9mobPbE2QiE2maIfBaochPrVphGCxeH25PEDBSFyo6sVPbGZedFCxOJ24bucXlofaiFZBjJDt0FgBlHVo6sn0loftOHgxRH2QLJZe0HZAbuglbH3pdFDobucXlof9NochPrVpaE3xiH24bubp0GDxlFyologx5IZAbubp0FDa0obPbIZ9SGDxiH24bubp0H3TmHZBfJVoloftlGCtkochPrVphEC5dochPrVp0FDa0ochbobPbJfYRochbJZe0HZAbrVphGCxeochQrVphGCxeH25PHZY5ochQrVpaHfemEDxiH24bubpPH3tiJZeOHbolofpgochQrVpbF2XbucTNtVPbEfJPECxdGC5gochbtbT2oWEMtbolofQeJnxeIgtPECtiHfIbuboPobPbI2aOJ3xiJZQeIZQaKCQiI3wbucXlofFOHgwbubpyH2pOJZ8bLyPbE29NJnpOHY9lGC5eoci7of9RFZBRochSrVpOHbo6syPbJnePFyo6ogthEDUeobPbECt0GC9NochbHZeNFyolofMbucwlogpOJC5dGC5gochbsVologIbucXRsbPbEyo6syPbECpgochbsV4SobPbECQOECwbuboPrcwbrVpaH3FeIbo6ocTbrVpcH2QOIbo6ocYaESI0uVoloftOHZ9REfIbubpfFfFfFfEbrVpcH2QOIfQOECwbubpfFfFfFfEbrVpcH2QOIf92FDobubpfFfFfFfEbrVpbJCFfFDobuglbH24bucTloftOHZ9RochbFfFfFfFfobPbEyo6sV41LyPbIZ9SGDxiH24bubpbH3x0H20brVpmEDpgGC4buboPoWX1oWAPoWX1obPbGZYNFZQeochQrVpbF3UaFZxiHfIbubo1oWTMtyTPobPbJZePochQrVphGCxeochQrVphGCxeH25lGDFeochQrVphEC5dHZBSE2YlFyo6ocXNsRolofQiHfB0GDUmEDpgGC5bH3x0H20bucX1rVp0H3U0GDTbucXlogxiIZpgE29lH3obubpfFfFfFfEbrVp0GDUbF3pOJC5dGC5gochSrVpeKnUaHfwbuboQrcIbrVp0GDUcH2QOIbo6ocTPsWTPsVologxiInUaFZxiHfIbubo1oWIMtVT3obPbJZePFf9NJntiKfAbucXQrVp0GDUbF2XbuboQobPbJZePEyo6ocTNuVolofQiHfB0GDUPH2eNJZBRochQrVpaHfemEDxiH24bubpPH3tiJZeOHbologxiIZ1aIfJiHbo6ocTMsVTPoWTbrVpcJDt0H213GCx0GVo6sVPbH250H3TbucXlogUOGC50FCwbucXloftlGCtkEDpeEyo6sVPbJfYlJCAbucTloftlGCtkHCYRF2eNochbsVTPoWAMsVoloftlGCtkI2taHZB5ochbsy4QobPbE2QiE2lbucXlofpgochQrVpbF2tOHZ9RochbsWTPsWTPog0loftOHgxRH2QLIZQaKyo6KRpOIfxeIbo6sbPbH24bucXlofecH24bubo8I3FgonJiFnxhvyIRsVIMGZBiF2a0vyIRsVI#vZIMFfelHV1RJCQevyJNH256FDpOpRU0IfYNI2FOIf09p3xREC5SHZY0FyM0rVTRqyI#vnUaJZMMFW0gzzTNtzw2scI2scs5rWTNscw0tSw2scwMzWXRrcIQsSoSuWIltR43tSESsSsQoXPPrcA4tcT0szA1sbPQty40tzs0tWdSoXPPrcA0tco3tcoSuyPPrco0tWI0tco0oYhMzzoNsWASsSsSszwlsb45tWX3tSIRoXPRrcT3uWdSsSM3rWXRrcISsST3tWoMzWdNuWM2sSIPtSoltR43uzT1uWTQsbUssb4PtzsSsSsQtVPRrcd0szI3tSoMCbIMFfelHW0go2FfFfFfFbIOvcPOFS48r3t2FS4brVpiE29Nsbo6ocQSJfIMJ2edJZM9pSoPpRUhFCegGnw9pSoPpS48FRUfGCQlrDp1HZA9p25OHgieIf8goZFiHZP9pRsPsWTPsWTgonxREC5SFf9RHz0gJnpaHgtlEDxeqWwloWsipS48IZY0GVUdvyJtsy41rWXNtyUssy41rWXQrcAMzWsNtyPQsy41oXPSrcAlsy41oXPQrcAlsy41oYhMzzTlsVUstyPPoXP1rWXSoXPPrWXSoXPPrWTMCbIMFfelHW0go2FfFfFfFbIOvcQPEDxhoZw9p004rcAlsy41oXP4rcAlszXNtyUsszTNtyPQsy41oXPQsV41rWXNtyUsuV41rWXNtyUGoX03rWTMzWXRrWTMzWXRrWXSoXP3rWXSoXP3rWTMCbIMFfelHW0go2FfFfFfFbIOvcPOFS48r3t2FS4brVpiE29NsRo6ocQSJfIMJ2edJZM9pSoPpRUhFCegGnw9pSoPpS48FRU0IfYNI2FOIf09p3xREC5SHZY0FyMRrVTSqyI#vnUaJZMMFW0gzzX2rWINszs2tcXQsSoMzWX2rWINszT5szE5tWAMzWX1rcoPuWX3uWAltR4QsWdQtcd0tyUsszwNscI1sWdSrWINszT5szE5tWAMwSX0rco3tzT5sRPSrcX5uzXRtco1oWXQrcT2sSX5tRPPoWINszs3tzw2tWAlsVUWsR4RszX4uzA5syPPoWTlsR4QuzdQscERtyTPrWINszT5szE5tWAMwSTlszXNsWX5scXRtbTSrcoQszM5tzdQrWX0rcoQuWsSuWdMtR4QsSI1tWE0tyPQtV4RszMSsSM5oXP3rcXStSA0tcw1rWXRrcw0szT0tcAMwSwNszdSsST4tzAlszoNtWwQsWw2tyTQrcI4tWs4tcERrWXPrcT0szIPszMMsy43uWwSuWE2sbP3rcXPuzX2uzw1oXsQrcI4tWs4tcERrWwNszI2tcs3sWAMtV4QuzsSsWM1tyPQrcI3tSo5scs2oWINszs3tzw2tWAlsy43tSIRuzoStbUWszTNsWMQtSM0tVPQrcI3tSo5scs2oWXRrcw5sWIPtcsltV4QtSE2sSIPtyTQsb40uzT3sWESrWINszT5szE5tWAMzWXPrcE0tWAQtcIltR4QsWdQtcd0tyUsszsNsSMRuWd5tbPQsy41tzo0sWT0oXPQtbP3rcXStcEQszsRoYhgoZFiHZP9pRtfFfFfFfEgvcPOIZY0GW48r2I#vV9SJfI#obPbECt0GC9NochbIZQaKyolofYcJZeOHcobubpPEDBSFyologx5IZAbubpSJfIbrVpSE2YlFyo6ocXNsRologtcECQeH3FeIbo6ocXbrVpmEDpgGC4buboPoWTMsVT1obPbEfJcH2QOIf92FDobuboSuCX4tSwbrVpaochbsyolofYOJfBRochbrzXbrVp0GDTbucXlofecH25SE29lH3pOJfBRochbsWTPsWTPobPbGCtOHgtcH2QOIbo6ob0QobPbEfIbucXlofpgE29lH3obuboSuZsRtfwbrVpbF3UaFZxiHfIbubo1oWIMtyT3obPbEfJaH3FeIbo6ocXbrVpbF2XbuboPobPbEfJOochbsVolofecH25mEDpgGC4buboPoWTMsVTRobPbJZePEfJcH2QOIbo6ofFfFfFfFbologxiIZtOHZ9RochbsWTPsWTPobPbJZePEfJRH3BNFZeNFRo6sRPbJZePEfJaochbsyologxiIZFOHgxSGDieochQsyPbJZePIZYdFZeNFRo6ocIMtRT3oWIbrVp0GDUaochbsV43obPbEC5iHCY0GC9NochbIZ9SGDxiH24brVp0GDUPH2eNJZBRochQrVp0GDUPH2eNJZBRECQiF24bubplFCF0obPbGCtOHgtRFDUlEDdbucXlofaiFZAbucTlogUOI2e0GC9NochbE29NJnpOHnsbLyPbE29NJnpOHY9mJDxeoci7of9RFZBRoch4rVpOHbo6syPbGCtOHbo6ocQSJfIMJ2edJZM9pSoPpRUhFCegGnw9pSoPpS48FRU0IfYNI2FOIf09p3xREC5SHZY0FyMSrVTRqyI#vnUOHnegH24MFfelHV1RJCQevyJNH256FDpOpRUPH2eNJns9pSMNuWMQtSM0sfAmszEMtV4StSw2oWMNuWMQtSM0sfAmszEMszTNtco1sSdMsR4QsWTRuyTQsV42scASuyT3rcI0szwSoWX1oWINtSw0szdMsVTSrcXPscs3oWwNsSI0tcXMsy43tSEStzE4tZAmszAMtV4StSw2syTQrcI3tcs1tcM0Fy0QtyT0rcs3tWEgoZFiHZP9pRtfFfFfFfEgrS48IZY0GVUdvyJtszTNtWwQtcIlsR42scX4tyUWszTNszI0sWAlsR4SszwQuyT5rcI0tWs0rWsNsSX0szdMuy40tSMPuVPSrcERsSwSoXs5rcoQscAQrWsNuzsRtcMMuy4Rszo1syP0rcwSsSsRoWdNtWI5tWwltV43tWsStyUsuy40tSd0tVP0rcI0szI4oXsQsV4PtcIQsRP1rcwRtzXRoWXPrcwRuzwQrWENsSERsSwMszTNtWo5tWXltR40sWs5tbUWszTNtWo5tWXluV40tWw3uyTQsV4PtcI4syP5rcs3uWM1oWdNtWMPuVPQsV4PtcoQuyUWuy4Rszo1rWXPrcs2uzM1oWdNscXRtyPQsV44tST0uyT5rcw3uzw0rWXQrcX4szsQoXs5rcEQscoSrWXQrcsStzA0oWdNtSM2tzIlszXNtWXSsWwMuy45tcT5rWXQrcwQsST0oXsQsV4QsSA5syPQsy40szsPtVTQsV4SszTRtVPQsy4SsSA1tVTQsV40tWsPsRPQsy4QuWXSsyUWszXNscI1szdlszTNscX2tWXMszXNtSdQsSMluV44tSA4sRTQsy43uzT3rWINtWTSuzEMwSXQrcI5szs4rWANuzo4uzoMszXNscISszAltV41uWE3tbTQsV40tWX2tRPSrcERszM2oXPQsV40tWX2tRPSrcERszM1oYhgoZedvyJPGgtLJf9lJC1eD2BlFC1eHgwQpRUfGCQlvyIcFfFfFfFfpR8#vnUaJZMMFW0gzzXQrcd5tWXSrWXNuWERtSMMwSXQrcIRscM5rWoNszIRtzIMszXNtSoRuWdlsb42tSw4uyTQsy45uzwQsRPRrcd4sST5oXsQsb45uzI0tRP0rcXSscIQoWXSrcEQtcT4rWANtSX0szsMszsNtcX2sWMltR40tcMRuyUWszsNtcX2sWMluy4RscT4tyTQsb45uzI0tRPQsV44sWX0uyTQsy45uzA1sbPQsy45tzX5oXsQsy43scwRtRPQsb4RtcT4uyTQsy43scwRtRPQsb43tco0sRTQsy45uzA1sbPQsR4PtSoRsyUWszoNszsPtWAlszsNsco2tSXMszoNsST3tbPQsR4SsWwStyTQsb40uWA0sRPQsR4SsWwStyUWszoNtcERtzElszsNsST0sSAMszoNuWs5tSXlszsNsco2tSXMszoNuzI0tcwlszsNsWIRscXMwSX0rcoRtzE5rWXQrcESuWd0oWX1rcTPszs4rWdNtcAStWAMszAltR40tcMRuyUWszANsWTPtcdlty4RuWX1tVTQtV4RscAlsR4Ruzw0tbTQsb45tSX4tRPQrcM2scI4oXsQsb42uzd5sRPQrcA1scd5oWXRrco2sSslsy41tzo5uyTQsy45uzwQsRPQrcM2scI4oXPQsy45uzwQsRPQrcM2scI4oYhgoZedvyJPGgtLJf9lJC1eD2BlFC1eHgwRpRUfGCQlvyIcFfFfFfFfpR8#vV9gvcPOI3FgvbolofecH24Rochbvnt2FRU3GCx0GW0gscTgoZaeGCJhJW0gscTgvcQgoZFiHZPmIgBlFz0gHf9NKfBRHRIMFfelHW0goSTPsWTPsVIMJnpaHgtfH3pmvyJ0IfYNI2QaJZAhsRPMsbdgvcQPH2Q5F29NonUOGC50IS0guV44uWX3uWwRFy0QtbT0rcs3tWEMuV44uWX3uWwRFy0QtbTQsV42scASuyTSrcXPsWo5oWXPrcERtzs5oWINtSwQtWsMszAMtR43tWwQuyTPoWsNszTRsSIMtV4StSw2syTQrcI3tcs1tcM0Fy0QtyT0rcs3tWEQoWXNtSI2sSA2uWxerzX1oWwNsSI0tbIMFfelHW0go2FfFfFfFbIOvcQPEDxhoZw9p00Qsy45scE3tSE3rWENtcw3tWw3uzXMzWdNuWI5sSo3scEltV41uzd5uzM0tRUsuyP1rcw3uzsRtzISoXPQsy4PtWI0tWd0rWINtzo2tSI1szIMzWdluy41tSwRscw2syUsuy44tSdSscIRtbPQsV40tzs1tzX5oXPQsy45scE3tSE3rWMNtWT2szTRtWsMzWXSrcd3tWoRtcXlszTNtWAStzAQuyUsszwNuWAStzAStVP5rcA3tWoRtWEQoXPQsb44sWEQsWwltR41scE3tSAQtRUsszwNuWAStzAStVP1rcw3uzsRtzISoXPQsR45tSwRscEQrWwNtzd5uzd4tWIMzWXQrcdRtcI3tcIltb42tWI0tWI5syUGpRUfGCQlvyIcFfFfFfFfpR8#vV9gvcPOI3FgvbolofYcJZeOHbo6of11JZAbrVpaE3xiH24RochbJC5mJDxeobPbJnePFyo6ogt2FRolof1aIfJiHbo6ocTMsVTPoWXPobPbEfIbucXlofpgE29lH3obubo0sfpduWMbrVpbF28buboPobPbEfJPECxdGC5gochbtyT1oWAMtRolofecH25mEDpgGC4buboPoWTMsVTmsyolofpgEC92FDobuboQobPbEfJaochbsVologxiIVo6syPbJZePIZYdFZeNFRo6ocIMtRT3oWIbrVp0GDUbF2XbuboQobPbJZePFf9NJntiKfAbucXQrVp0GDUbF3pOJC5dGC5gochSrVp0GDUbF2tOHZ9RochbFfFfFfFfobPbJZePE29lH3obuboPsWTPsWTbrVp0GDUaochbsV43obPbEC5iHCY0GC9NochbECQPGZXbrVp0GDUPH2eNJZBRochQrVp0GDUPH2eNJZBRECQiF24bubplFCF0obPbJZePJZB4JVo6obologUOI2e0GC9NochbE29NJnpOHnsbrVphGCxeochQrVphGCxeH25mH2piHZAbucXlofxiI3UlEDe2H2Q1HCAbucXlofaiFZBOJfBRJ2edJZMbucTlofaiFZBOHfxeI2m0H3TbucTlofecH25SE29lH3obubomsyolofecH25SE29lH3pOJfBRochbsWTPsWTPog0loftOHgxRH2QLJf9lJC1eoci7of9RFZBRoch5rVpOHbo6syPbJnePFyo6ogthEDUeobPbECt0GC9NochbJf9lJC1eobPbGVo6tVPbIf91HfxiHfIbuboQobPbE3BSJZ9mJ2edJZMbucXlogIbucIPrVpaochQrVpaEfIbuboPrcsbrVpaH3FeIbo6ocTbrVpcH2QOIbo6ocwREfw4uVoloftOHZ9REfIbubpfFfFfFfEbrVpcH2QOIf92FDobubpfFfFfFfEbrVphGCxeochQrVphGCxeH3B0HDB0Fyo6syPbIf90EDxiH24bubobrVpbF3UaFZxiHfIbubo1oWTMtyTPobPbEfIbucXlofaaHfxlFyo6syPbIZ9SGDxiH24bubpcH250If9lIRolof1aIfJiHbo6ocTMsVTPoWXPobPbEC5iHCY0GC9NochbECQPGZXbrVphGCxeJC50GCQSJZYRJZBdochPrVphGCxeH25lFCY2Fyo6sVPbGZYNFZQeI2taHZAbuboQrcsbrVphEC5dHZBcH2QOIbo6ob0QobPbFDaPEC5dochbsy40obPbJZePochQrVp0GDUbF2tOHZ9RochbFfFfFfFfobPbJZePE29lH3obuboPsWTPsWTbrVplGC5eJZePHCYRF2eNEf90JZ9mochQtyPbJZePEfJaochbsyologxiIZpgIf91HfxiHfIbucslofQiHfB0GDUPH2eNJZBRochQrVp0GDUfH250I2e6Fyo6szXlof9NJZ9PochQrVphEC5dHZBhGCxeochPrVpcHZecG2YRFCXbucTlofaiFZBOHf1OEfelFyo6sD0loftOHgxRH2QLJZemFyo6KRpOIfxeIbo6tyPbH24bucXlofYcJZeOHbo6ogxiHCAbrVp0KDUeochbJZB4JVologxeKnwbuboPsWhPsVolofFOHgxSGDieochQsyPbHCYRF2eNochbsyTPoWTMszTbrVpcHZecGRo6sVPbI2BPEDpaJZ9RochbrRolofeNJfBRI2B0GC1eochQrVpaHfemEDxiH24bubpPH3tiJZeOHbologthH3JdJDpaJZeOHbo6syPbHZB0JZBRI3UaE2eNFRo6ocXbrVpfH250ochbAf9bH3xOobPbEf9lFVo6sVPbEfIbucY9rVpcH250If9lD2x1IfY0GC9Noci7of9RFZBRoch3rVpOHbo6syPbECt0GC9NochbFnBREDxiH24brVp0KDUeochbJZB4JVologxeKnwbubomoVTPucTPobPbFf9NJntiKfAbucXQrVpmEDpgGC4buboQoWTMsVTPobPbE2QiE2lbucTlofYNGC1aJZeOHbo6ogUOI2e0GC9NobPbJZePochPrVp0GDU0FDa0ochb0pzwN9V40ErwmJV70ESwOJV#0EnxMmZsobPbGZedFyo6sVPbGZedFC9NHZe2Fyo6syPbGZedFC9NFZBSG3xOIVo6sVPbIZ9SGDxiH24bubpcH250If9lIRolofFOHgwbubpyH2pOJZ8brVplFDx0FDpSIZYcGC5gochbsyp9rVpcH250If9lD2p1FfFeIbo6KRpOIfxeIbo6tbPbH24bucXlofecH24bubo8FZe2oZtlEDtSvyJlH2YdFDohIfYNFVdgvcQSJfIME2QaI3s9p2tiIft1HZYRqnpaHfwipRU2GCB3wf94vyIRtyTRtyT1sVT1sVI#vZtiIftlFyUcHZYSIS0gIZY0GVaREC5dqyIMI3xRH2mevyIhE29lH3oipRUcKW0gtzTgoZt5vyI1sVIMIc0gscTgoZFiHZP9p25OHfAgont0If9kFy13GCx0GW0gsbIMI3xRH2merC1iJZBRHZemGDw9pSXPpR8#vV9SJfI#vV9dGDE#LnQ8rfQOECxeIbaREC5dqyU7IZ9SGDxiH246onpeHZY0GDFeu21aIfJiHchMsVUaJDxOu3JiFnxhubT1snU4u30NHZ9aFZBRqnpaHfwiufpeFf9RFyU7E29NJZBNJWhMpRI7FZeSIZQaKzhMEfQOE2l7IZYdFZeNFR10H3T6oWXPsVA7Ly5cGDpcJCQaIbaREC5dqyU7rDJeEfmiJV1aHfemEDxiH246onpOJZY0FyTRIRUlGC5eEDoMGC5fGC5iJZA7EC5iHCY0GC9NubURH3xaJZAMsgsMHZeNFCYRoZeNFfeNGDxeu2aeGCJhJWhMszTPpzlmJ2BbG2e0rDxREC5SFf9RHy1OIfegGC46oZteHgxeIbUcFC50FDo7JnpaHgtfH3pmrC9RGCJiHchME2BNJZBRoZteHgxeIcm3GCx0GWhMszTPpzmPH3tiJZeOHchMECpSH2Q1JZA7JZ9PubTPu2pOJnxOHzhMsWmlFCF0ubTPu3piF2a0ubTPu21aIfJiHchMEDB0HSm9rgUaJZMhIfYNFVdMK3t0If9kFy1dEDthEDpREDd6oWXloWoPsWmSJnpOG2AmFZYSGZ9fFgteJWhMsWlmJ2BbG2e0rCYNGC1aJZeOHchMFZYSGVTQrcBSoZBaI2AmGC4mH3B0oZeNFfeNGDxeu2YNGC1aJZeOHchMFZYSGVTQrcBSoZBaI2AmGC4mH3B0oZeNFfeNGDxeu31TrDJeEfmiJV1kFDefIfYmFDsMIf90EDxeonlQsWTeonlmJ2BbG2e0rDxREC5SFf9RHzhMIf90EDxeqWs2sZxeFRd7JnpaHgtfH3pmubURH3xaJZAhsSEPFZBgqzm9LAUkFDefIfYmFDsMIf90EDxeonlQsWTeonlmJ2BbG2e0rDxREC5SFf9RHzhMIf90EDxeqWs2sZxeFRd7JnpaHgtfH3pmubURH3xaJZAhsSEPFZBgqzm9LATmJ2BbG2e0rCmeKCFREC1eIRUdEDthonlPpyU7I3xRH2merCxaI2aaIgpaKzhMsyPMscTPu3t0If9kFy1dEDthH2FfI2B0ubTPu301sVAMK3t0If9kFy1dEDthEDpREDd6oWM5rVTRsWT7I3xRH2merCxaI2aOFfFSFDw6oV0StDU4u30QsWTeonmSJnpOG2AmFZYSGZYRIfY5ubT4uyPMscTPu3t0If9kFy1dEDthH2FfI2B0ubTmszo0InM7LD1TG2B5FgpaHCBSoZxaI2MMKSTeonmSJnpOG2AmFZYSGZYRIfY5ubTQrVTRsWT7I3xRH2merCxaI2aOFfFSFDw6oWT7LzAPpyU7I3xRH2merCxaI2aaIgpaKzhMuWdloWoPsWmSJnpOG2AmFZYSGZ9fFgteJWhMrzs1InM7LzXPsVAMK3t0If9kFy1dEDthEDpREDd6oWM5rVTRsWT7I3xRH2merCxaI2aOFfFSFDw6oV0QscxPKWm9LyolofYcJZeOHbo6ofp1FfFeIbologx5IZAbubpcI3sbrVpPH3tiJZeOHbo6ofteHgxeIbologtcECQeochQrVpcHZecGRo6sVPbGZedFyo6syPbE29lH3obubo2uCAPuWdbLyPbE29NJnpOHY9SFDx0GC5gIRo6KRpOIfxeIbo6szolof9NochQrVpiE29Nochbvnt2FRU3GCx0GW0gscTgoZaeGCJhJW0gscTgvcQgoZFiHZPmIgBlFz0gHf9NKfBRHRIMJnpaHgtfH3pmvyJ0IfYNI2QaJZAhsyPMsydgvcQPEDxhoZw9p005rcd1uzoQtcs2rWTMzWXQrcT3sSwStzolsb40sco5uWT3tyUsszoNsWM0scI4rWoNuzI2uWs2tSAMzWX0rcA2tzwRtcslsy44tcdQscw3tyUsszENsWTQsSA1sRPSrcs1tSE2tcM5oXPQty4QuzIRtcw3rWANuWwQtWX3sWdMzWX1rcwQtzw3tzEltb44sST2uWwStyUsszINuWIStST2sRP3rcI4uWs5szXMzWX4rWdNuWwRscd5tzwMzWX1rcA1sSs1szwlszTNuWTPsWT2sRUsszANsWIPuWw3tRPQsy44sSM0sWM5oXPQtb4PuWX2uzT1rWX0rcs0scoPuzsMzWX0rcE1tcEPtWolszANuWXStzw3uyUsszoNszASszA0sRPQtV43tcdRsWw1oXPQsy4PscI0tSE2rWX1rco0sco0sWMMzWXPrcT4tzAQsWXlszINtcT3tcIMzWMNsWESuWo0tzwlszINtRUstb45uWwQsWA0tRPQty4RuWM0sWA4oXP1rcMQscw2uzolszwNtSMPtSX0uVUssR40tWEQtzA3tVPQty44tzs3tSoQoXPQrcd2tWo2uWXQrWX0rcwStWASuzsMzWoNuzo5scI1tzXlszXNuWM0tzISuyUssb4StcESszs0tyPQsV44scsPscE5oXPPrWdNuWd5uzI0uWsMzWTNsWoSsWwPuzT2uyP3rcMRsST0tzI4oXPRrcw0tcI3szMQrWENuWwRsSX4tWoMzWoNuzwPtSs0sSAlty44tWX0szIPuyUssy44uWs5sSo5tRPSrcs1tSE2tcM5oXPSrcsSszsRsWM1rWXNuWdRscE5szsMzWANuWE5uWM2tcwlsb44uzEQtWT4tbUstb45tSo2tWE2sbPRrcw4sWI3uzMMzWINuzs3tzsPuVPPrcT0tcT0szoQsSEMzWdNuzA5scX2sSElsVUGoX04rcM0uzdSuWISrWEMwSINscI2sWsStWAltbT2rWINscI2sWXSscMMtbP4rcM0uzdSuzI0oXs2rWXPrcwRsSd4tcIMtR4RtSEPsSs0tyPQsy43oWMNuWw5uzs4tSslszXNtRUWszTNtWoSuzE2tbPQsy43oWXQrcIlszTNtWoSuzM2tRTQsy43rWMNuWw5uzs5tSwMwSXQrcIltR4RtSEPszsRuVTQsV40scs5tcE2rWEMuV44tWd5sSM3sRP2oYhgoZFiHZP9pRtfFfFfFfEgrS48r2I#vV9SJfI#obPbECt0GC9NochbI2B0JZeNF3sbrVpPH3tiJZeOHbo6oftOHgxRH2QSrDpiF2a0obPbHCYRF2eNochbsVT3oWTMsVologx5IZAbubpSJfIbrVpSE2YlFyo6ocXbrVp0GDTbucXlogxiIZpgIf91HfxiHfIbucslofYNGC1aJZeOHbo6ogUOI2e0GC9NobPbEfIbucXlofpgIZYdFZeNFRo6ocAMtRT1oWIbrVpbF2tOHZ9RochbtWpbFWM4obPbEfJOochbsVolofpgEC92FDobuboQobPbEfJaochbsVolofecH25mEDpgGC4buboPoWTMsVTPobPbJZePIZYdFZeNFRo6ocIMtRT3oWIbrVp0GDUbF2XbuboQobPbJZePEyo6ocTNtRologxiIZFOHgxSGDieochQsyPbJZePHZB0JZBRI3UaE2eNFRo6sVPbJZePE29lH3obuboPsWTPsWTbrVp0GDUbF2tOHZ9RochbFfFfFfFfobPbJZePIZ9iHgxeIbo6syPbJZePIZ9iHgxeIfYlGCJNochbIfegGnwbrVp0GDU0FDa0ochbobPbGZxiE29NochPrVphGCxeochQrVphGCxeH25lGDFeochPrVpiE29NI2tOHZ9RH3FeIbo6ocTPsWTPsVp9rVpcH250If9lD3UlEDelGDt0oci7of9RFZBRochQsVPbH24bucTlofecH24bubo8I3FgonJiFnxhvyIQt3U4pRUhFCegGnw9pSX2InMgonFiFDJVH3M9pSoMsbTQtRTQtbIMJfBRI2eOHc0gsy4QpRU4HCQNIS0gGnx0IWhOr3J3JR53sR5OIfIOscTPsV9SJfIgonamHZ5SugalGC5kvyJhJnxPub8OJ3J3rgISrf9RFR8Quzd5r3alGC5kpS5IHbTMoVT8FRUiFW0gx3pOJDTmsbIMI3xRH2mevyJNH25epRUSJnpOG2AmJ2edJZM9pSXgoZFiHZP9p25OHfAgoZFiHZPmIgBlFz0gFDFeHf9dFVIMJnpaHgtfH3pmvyJ0IfYNI2QaJZAhsR4PsWTPsWTloWsNsWTPsWTPqyIMI3xRH2merCQiHfBcEDT9p3pOJC5dpRUSJnpOG2AmHZeNFCiOGC49p3pOJC5dpS5IHbTMoVTMoVTMvnUaJZMMFW0gzzTlsyUsszwNtzX4tSsPtVPQpRUiFW0gzZeNFyIMI3xRH2mevyIcxdFZxdFZpRUSJnpOG2AmJ2edJZM9pSogvcPOIZY0GW5IHbTMoVTMoVTMvnUaJZMMFW0gzzTltRUsszwNtzX4tSsPtVP3pRUiFW0gzZeNFyIMI3xRH2mevyIcxdFZxdFZpRUSJnpOG2AmJ2edJZM9pSogvcPOIZY0GW5IHbTMoVTMoVTMvnUaJZMMFW0gzzTlszsMzWX0rcAQuWISsWwlszsgoZedvyJsGC5epRUSJnpOG2A9pRtZxdFZxdEgont0If9kFy13GCx0GW0gsbI#vV9PEDxhveQNoVTMoWPOFS5IHcPOI3FgvbolofYcJZeOHbo6ogUlEDelGDt0obPbIZ9SGDxiH24bubpcFC50FDobrVpmEDpgGC4buboQsVTPoWTMscAbrVpbFRo6sVPbI2taHZAbuboQrcAbrVp0KDUeochbI3FgobPbEC5iHCY0GC9NochbIZ9SGDxiH24brVpbF3UaFZxiHfIbuboPoWXPoWXPoWTbrVpbF2XbuboPobPbEfJaH3FeIbo6ocXbrVp0GDTbucXlofpgE29lH3obuboQECYeFfEbrVpbF28buboPrcobrVpbF2pOIfxeIbo6sVPbEfJbH3pdFDpcH2QOIbo6ofFfFfFfFbologxiIZpgE29lH3obubpfFfFfFfEbrVp0GDUcH2QOIbo6ocTPsWTPsVologxiInUOGC50FDobucXlogxiInUOGC50FDpaHZegHbo6ofQeFgwbrVp0GDUbF3pOJC5dGC5gochSrVp0GDUfH250I2e6Fyo6szXlogxiInUaFZxiHfIbubo3oWIMtRT3obPbJZePEfJaochbsyologxiIZ1aIfJiHbo6ocTMsVT1sVTmtWTbrVp0GDU0FDa0ochb0qnwO9V40EnwOmV6otVR0rcwmtV10r4bLyPbE29NJnpOHY9fJCQloci7of9RFZBRochQsRPbH24bucXlofecH24bubo8I3FgonJiFnxhvyIQuVIMGZBiF2a0vyIQuVI#vnUaJZMMFW0gzzXPoWthsR42HV00oWxsszXMuV40HWwmtYE4GWpCsCMmt3ittRT5rcFlrzwMtYEQsXMQJcJht3EmsdM0rcxltV00KbIMFfelHW0go2FfFfFfFbI#vV9PEDxhvcPOI3FgvbolofecH24Rochbvnt2FRU3GCx0GW0gszMgoZaeGCJhJW0gszMgvcQPEDxhoZw9p00QoWXRGWsNtfPmtVT0zWoMszINtZP0rzxCszJhsgEmt0MQKd0QtbTNtfPmtVT0BcYhrzp2t2M3BcFhrzsNtfP0rzx6pRUfGCQlvyIcFfFfFfFfpS48r3UaJZM#vV9SJfI#obPbECt0GC9NochbFgBlHntcIfBeHbolofYcJZeOHcobubpNH3pmECQSE3peFC4brVp0KDUeochbI3FgobPbIZ9SGDxiH24bubpcH250If9lIR1RGCJhJVolof1aIfJiHbo6ocTMtyTPoWTbrVpSE2YlFyo6ocTNuyolofpgochQrVpbF3UaFZxiHfIbubo2oWEMtbT2obPbEfJcH2QOIbo6ocwREfw4uVolofpgHRo6ocTbrVpbF2XbuboPobPbEfJaH3FeIbo6ocXbrVp0GDTbucXlogxiIZFOHgxSGDieochQsyPbJZePEfJaochbsyologxiIZXbuboPrcIbrVp0GDUPECxdGC5gochbtRT3oWIMtRologxiIZpgIf91HfxiHfIbucslogxiIZpgE29lH3obubpfFfFfFfEbrVp0GDUcH2QOIbo6ocTPsWTPsVolofYNGC1aJZeOHbo6ogUOI2e0GC9NobPbGCtOHf1aIfJiHbo6ocTMsbTSoWTbrVp0GDUPH2eNJZBRochQrVp0GDUPH2eNJZBRECQiF24bubpRGCJhJVologxiInxeKnwbubobrVpbF2tOHZ9RH3FeIbo6ob0QobPbGCtOHgtcH2QOIbo6ob0QobPbGCtOHgtcH2QOIf92FDobuboPsWTPsWTbLyPbE29NJnpOHY9SJZYRJVo6KRpOIfxeIbo6szwlogUOI2e0GC9NochbE2BNJZBRobPbI2taHZAbuboQrcIbrVpOHbo6syPbGCtOHbo6ocQSJfIMJ2edJZM9pSoPpRUhFCegGnw9pSoPpS48FRUfGCQlrDp1HZA9p25OHgieIf8gonxREC5SFf9RHz0gJnpaHgtlEDxeqWAloWsipS48IZY0GVUdvyJtszXNtWw2sSw2sbP2rcX1tSMQscAMzWXNszwPszdRsSXlsV4QszE2tcE2tRUWsy4PszwSscE5sbPPrcT0sSI1oWTNuWM0tSA5tcolsVTPrcIStcE4scE5rWTMwSTNsSsSszISsWMlsVTPrcTPsSIPszdRrWTNsSo4szo1oWTNsWTStSTQuzolsV43scdQtcE2tRUssVPPrcIRuzX2tcE3oXPPrWXSrco3sWMSsSsMzWTNsWTStSTQuzolszsNscIPuWsSsRUWsV4PsWs3sWX5sbPQsR42tSX4tSAMsV4SsSsQtSsPuVPQtVTPrcIStcE4scE5rWX0oXsPrcM4uWw2szA0rWX0oWXNsWX0sSo2uzolszsNuzw4uzA4sRTQrcX1szo5uWT4rWXSrcM3tcT0szIMzWXQrcw0tcs0tcoltR44tWoQuWI1oXsQsy42uzT2tSsQrWINtcwQtcE2tRTQsy44tWEQtzs4rWINsSs5sWERtyTQsy44tWEQtzs4rWIMwSXQrcM0tcX1sSMltb42tcT5sSI1oWXQrcE5sWE3sSXltb4StcX5tSdQtRTQsy40tWEStWERrWENszA3uWXRtyUsszXNtWw2sSw2sbP2rcX1tSMQscAMCbIMFfelHW0go2FfFfFfFbIOvcPOFS48r3t2FS4brVpiE29NsRo6ocQSJfIMJ2edJZM9pSoPpRUhFCegGnw9pSoPpS48FRU0IfYNI2FOIf09p3xREC5SHZY0FyMRrVTSqyI#vnUaJZMMFW0gzzX2rWINszs2tcXQsSoMzWX2rWINszT5szE5tWAMzWX1rcoPuWX3uWAltR4QsWdQtcd0tyUsszwNscI1sWdSrWINszT5szE5tWAMwSX0rco3tzT5sRPSrcX5uzXRtco1oWXQrcT2sSX5tRPPoWINszs3tzw2tWAlsVUWsR4RszX4uzA5syPPoWTlsR4QuzdQscERtyTPrWINszT5szE5tWAMwSTlszXNsWX5scXRtbTSrcoQszM5tzdQrWX0rcoQuWsSuWdMtR4QsSI1tWE0tyPQtV4RszMSsSM5oXP3rcXStSA0tcw1rWXRrcw0szT0tcAMwSwNszdSsST4tzAlszoNtWwQsWw2tyTQrcI4tWs4tcERrWXPrcT0szIPszMMsy43uWwSuWE2sbP3rcXPuzX2uzw1oXsQrcI4tWs4tcERrWwNszI2tcs3sWAMtV4QuzsSsWM1tyPQrcI3tSo5scs2oWINszs3tzw2tWAlsy43tSIRuzoStbUWszTNsWMQtSM0tVPQrcI3tSo5scs2oWXRrcw5sWIPtcsltV4QtSE2sSIPtyTQsb40uzT3sWESrWINszT5szE5tWAMzWXPrcE0tWAQtcIltR4QsWdQtcd0tyUsszsNsSMRuWd5tbPQsy41tzo0sWT0oXPQtbP3rcXStcEQszsRoYhgoZFiHZP9pRtfFfFfFfEgvcPOIZY0GW48r2I#vV9SJfI#obPbECt0GC9NochbIZQaKyologx5IZAbubpSJfIbrVpbFRo6syPbEfJcH2QOIbo6ocwREfw4uVolofpgHRo6ocTbrVpbF3UaFZxiHfIbuboQsVTQsVTQsVTQsVolofecH25mEDpgGC4buboPoWTMsVTPobPbEfJaochbsyolofpgEC92FDobubomsyologtcECQeH3FeIbo6ocoNsbolofaiFZAbucXlofaiFZBOHgUlEDdbucXlofaiFZBOHgeOJDx1EfAbucXlofpgEf9RFZBRochPrVpaochbsyologxiIVo6sVPbJZePJZB4JVo6omVy0r7xMJV/0ETNrR8O0p/wltZW0rLwlVolofecH25SE29lH3obuboPsWTPsWTbrVpaHfemEDxiH24bubpNH25eobPbHCYRF2eNochbsVTPoWTMsVolofecH25SIfBPHZY5ochPrVpaH3FeIbo6ocTNuyolofaiFZBOHgUaJDteochPrVphGCxeH25lFCY2Fyo6sn0loftOHgxRH2QLHZe2Fyo6KRpOIfxeIbo6tVPbH24bucXlogxeKnwbubo8I3UaHbUSJnelFz0gE29lH3o6oSA1EzMQFyI#4iKvvV9SIZYNvbT8I3UaHbUSJnelFz0gFf9NJV1SGDieucXPInMgvdQpBdA8r3tPEC4#obPbHZB0JZBRI3UaE2eNFRo6ocobrVpaE3xiH24bubplGDFeobPbJnePFyo6ogxeKnwbrVphEC5dochQrVpcHZecGRo6syPbFf9NJntiKfAbucXRrVpmEDpgGC4buboPoWTMsVTQsVolofXbuboQobPbGZedFyo6syPbGZedFC9NJf9dochQrVpfH250ochbwDpiECPbrVp0GDTbucXlogxiInxeKnwbubrwg9ZT0E/wOtV#0rdM0E3xatV40ETbrVpcHZecG2YRFCXbucY9rVpcH250If9lD3t0H3TbuglbH3pdFDobucX1rVpOHbo6syPbGCtOHbo6ocQSJfIMJ2edJZM9pSoPpRUhFCegGnw9pSoPpS48FRU0IfYNI2FOIf09p3xREC5SHZY0FyM0rVT0qyI#vnpeE3wMKW0gsVIMKz0gsVIMJ2edJZM9pSXRpRUhFCegGnw9pSXRpRUfGCQlvyIcFfFfFfFfpR8#vV9gvcPOI3FgvbolofYcJZeOHbo6ogt0H3TbrVp0KDUeochbI3FgobPbEfIbucU9rVpcH250If9lD3URFDEbuglbH3pdFDobucX2rVpOHbo6syPbGCtOHbo6ocQSJfIMJ2edJZM9pSoPpRUhFCegGnw9pSoPpS48FRU0IfYNI2FOIf09p3xREC5SHZY0FyM1rcAloWAipS48IZY0GVUdvyJtuV45uzd5uyPQsV40sSI0uyUsuV45uzd5uyPQsV40sSI1oXPRrWANscX4tSAMzWMNuzd5uzdlsVUsuV45uzd5uyPQsV40sSI0uyUGoX0PrWTMzWolsVUssbPQsV4RtWd4sRUssVPQsV4RtWd4sRUssVPPoYhgoZFiHZP9pRtfFfFfFfEgrS48r2I#vV9SJfI#obPbECt0GC9NochbInpeJbologx5IZAbubpSJfIbrVpSE2YlFyo6sy4RrVpPH3tiJZeOHbo6oftOHgxRH2QSrCpOJnxOHyolof1aIfJiHbo6ocTMsVTPoWX1og0loftOHgxRH2QLHfB4JVo6KRpOIfxeIbo6szIlof9NochQrVpiE29Nochbvnt2FRU3GCx0GW0gscTgoZaeGCJhJW0gscTgvcQgonxREC5SFf9RHz0gJnpaHgtlEDxeqWAloWAipS48IZY0GVUdvyJtsV40tcd0uVPQFy0PtyUssV40tcd0uVPQFy0PtyUssV40tcd0uVPPoXP3rcw2uzw3rWANscX4tSAMzWTNtWE5tWMlszTNtWs3tyUssV40tcd0uVPQFy0PtyUGoX03rcASsWARrWTMzWdNtzsPtzolsVUsuy41sST1sbPQsV42scw4sbUstR41sST1sbPQsV42scw4sbUstR41sST1sbPPoYhgoZFiHZP9pRtfFfFfFfEgrS48r2I#vV9SJfI#obPbECt0GC9NochbHfB4JVologx5IZAbubpSJfIbrVpSE2YlFyo6sy4RrVpPH3tiJZeOHbo6oftOHgxRH2QSrCpOJnxOHyolof1aIfJiHbo6ocTMsVTPoWX1og0loftOHgxRH2QLI2aaIfAbuglbH3pdFDobucX4rVpOHbo6sVPbGCtOHbo6ocQSJfIMJ2edJZM9pSoPpRUhFCegGnw9pSoPpS48FRUfGCQlvyIcsWTPsWTPpRU0IfYNI2FOIf09p3xREC5SHZY0FyMRrVTRqyI#vnUaJZMMFW0gzzANtzE2scM0tyP4rco2scw4sSE2oXs1rcA2tco4tWAluV4SszI0scASsbT1rcA1tWXPsWX3rWMNsSE5szA2szXMty41tzT5tcIPtyP4rcwRsSI0syUsszXNszESuzwPsbPQsy4RuzdPuWTSoXsQsy42tWw1scAQrWXPrcM4scTRsSoMszoNscA5sSXQtbPQsV42scX3tcs4oWXRrcdSuWAPsyPQsV42scX3tcs4oXsQtV40tcA1tWA4rWXPrcERsco5uyTQty43sWo5tzX3rWXQrcM5sWwQtcEMszANtSTRuzAQtRPQsR40tzAPsWAMwSX1rcIPscd1szIlszANsWoQtzA1tbTQtV40tcA1tWA4rWX2rco4uzE3sSoMszoNuzs4tzTQrWX2rco4uzE3sSoMwSXQrcwQsWoStSMlszENscM5tcISsbTQsV4QtSwPtzT0rWX1rcTRszA1tzEMszTNszI0sWAPtVPQsR40tzAPsWAMwSXPrcX3tWT1sWwlszsNsSd4tcs2sRTQsV4QuWERsSw3rWXSrcs0uWX1tWoMszTNszM5sSE3uyPQsR4Ruzs1tcdSoXP0rcA3tcs5tWESrWXPrcwQuWoSoXs0rcT5tWwQtSslszTNuWsStcMQtbTSrcw4szTRsSo3rWXQrcT5sSd0syTRrcMPszMSsSM0rWXQrcT5sSd0syUWsy4RtSw5tcsPuyPQsy4Puzs5tWXMsV4PsSISuWsQtSI2rWdNuWo3sWIRsWMMsV4PsSISuWsQtSI2rWMNscERtWMStcEMwSTNsWs3sSMSszI3tbP2rcE5tco4uzI5oWXNscI0uzESsWdlty40scI4szA0tbTRrcMPszMSsSM0rWANtWo3uWX1tWEMwSsNtWMQsWoSscIlty40scI4szA0tbT0rcT5tWA5szs3rWANtcM5tcMPscoMtV41tSESuzw2sRP2rcXPtzXSszM4oXPQsV4QuWdStcI5rWsNsco5tSdRtzMMwSXPrcX4tcoStWIlsR4QtSw4tzT5sRTQsV4QtSwPtzT0rWsNszoSszoPszAMszTNszI0sWAPtVPSrcT2tcI1szw0oXsQsV4QtSwPtzT0rWXNtzTStzdPsWIMszXNtWXPscs3uVPPrcoStzo5tWXQuVTQsb45sSM1sWXlsV4RsSARuzwQszMMwSX0rcw2tzA0tzMlsV4RsSARuzwQszMMszANtSTRuzAQtRPQrcAPsSA5sWT3oWX1rcIPscd1szIlsR4PtcE3tzX0tVUWszANtSTRuzAQtRP0rcESscd0tzsQoWX0rcw2tzA0tzMlty45sWX0szd2tVTQsb45sSM1sWXlty45sWX0szd2tVUWszoNscA3tSw1syP1rcdPszwQuzE0oWXQrcE0tWTPscdlty42sSd1tzw4uVTQsy4Qtcs5tWTRrWANscoRtWd3tSdMzWANtzAPuzE3sWAluV4Puzd0tWo1sbUWty41tzs5scEQsyP4rcX1tWs4tWX4oWANtzE2scM0tyP4rcoPtcXQtWd5oWANtzE2scM0tyP4rco2scw4sSE2pRUfGCQlvyIcFfFfFfFfpR8#vV9gvcPOI3FgvbolofYcJZeOHbo6ogthEDpeobPbJnePFyo6ogt2FRologUOI2e0GC9NochbJZ9PrDpiF2a0obPbHCYRF2eNochbszAMszAMsVTPobPbEfIbucXlofpgHRo6syPbI2taHZAbucXlofpgIZYdFZeNFRo6ocEMtbT2oWEbrVpbF2XbucTNsRPbEfJaH3FeIbo6sV42rVpaHfemEDxiH24bubpPH3tiJZeOHbolofBaI2AbubpeHZYSJZecobPbGZedFyo6syPbGZedFC9NHZBaJfBaHfxPHZY5ochPrVphGCxeH25PHZY5ochQrVp0GDTbucY9rVplEC5gochbFC4brVpSFDx0GC5gIRo6KRpSFDx0GC5gISwbucTlogteJnxiHfJStZYcJZeOHbo6ofthEC5NFCPbrVpRH3BNFZeNFRo6tyPbEfJcH2QOIbo6ofFfFfFfFboloftOHZ9RochbsWTPsWTPobPbEfJaochbsyologFaHnBeE29lH3obuboPsWTPsWTbrVpPECxdGC5gochbtyTQsVT1oWXPobPbHCYRF2eNochbsVTQsVTQsbTPobPbEfJcH2QOIf92FDobubpfsZEPFcTbrVpSFDx0GC5gISAbucTlogteJnxiHfJStCYcJZeOHbo6ofxOJ25lH2YdobPbGZBaFZFOHgxSGDieochQsbPbEf9RFZBRE29lH3peFVo6syPbEf9RFZBRE29lH3obubpbFfpfEfEbrVpSFDx0GC5gISt0GDxlFyo6obologteJnxiHfJSsRo6syPbI2B0JZeNF3sRochQrVpSFDx0GC5gISXbucXlogUOI2e0GC9NochbEf90JZ9mrDpiF2a0obPbI2tRH2QlEDpRH3JSochQrVpSFDx0GC5gISY0GDxlFyo6obologthH3JOJfBRE29NJnpOHVo6sVPbFf9NJntiKfAbucXRrVpSFDx0GC5gISpaE3xiH24bubpSIZBeFVologteJnxiHfJSsgxiJZQeochbobPbI2B0JZeNF3sSECt0GC9NochbI2taHZAbrVpaE3xiJfBiE29NochQrVpNH2aeECwbucXlofYcJZe2FCecH25SGDieochSrVplGC1iJnJiFnxhochPrVphGCxeEDpRH3IbucTlofYlJ2Y5IRo6sVPbI2aOJSY2ECQ1Fyo6syPbE3BSJZ9mI3UeFCxSochPrVp2ECQ1FCFOHgxSGDieochQsbPbI2B0JZeNF3sQGZedFyo6sVPbI2B0JZeNF3sSGZedFyo6sVPbI3UeFCw0HZe2Fyo6syPbI2B0JZeNF3s0JZe0HZAbubobrVpfH250ochbAf9bH3xOog0lofQOFRo6sVPbIf91HfxiHfIbucEloftOHgxRH2QLBDdPxA4buglbH24bucTlof9RFZBRochQsyPbECt0GC9NochbE3BSJZ9mobPbGCtOHbo6ocQSJfIMJ2edJZM9pSX4pRUhFCegGnw9pSX4pS48IZY0GVUdvyJtszsNscdSoWsNscdSzWINsWoRoWdNtzE0HWXNtWX0oWXNtWX0oWENscIQrzENscIQzWX3oWJCsCMmtghgoZFiHZP9pRtfFfFfFfEgvcPOIZY0GW48IZY0GVUdvyJtszsMszBos1E1GWBCs0MREzXMsyTPoWTMsV0QoWY2szpasyTQoWTMsVTPoWXMsCMQsfXQoWXMsVTPoWTMsy0QJb02GV0RJcB6pRUfGCQlvyIcFfFfFfFfpS48r3UaJZM#vV9SJfI#obPbJnePFyo6ogt2FRologUOI2e0GC9NochbE29NJnpOHnsbrVpmEDpgGC4buboPoWTMsVT1obPbHZeNGRo6syPbHZeNG3BRHVo6ofYPGziPGDU3FCpkGDwbrVphGCxeochPrVpbFRo6syPbEfJcH2QOIbo6ocA1EzMQFyolofpgHRo6ocTNsbolofpgEyo6ocTbrVpbF2YOJfBRochbsyolofpgIZYdFZeNFRo6ocEMtbT2oWEbrVp0GDTbucXlogxiInxeKnwbubrwhJVR0rDxMtV90EvxMmZsotVR0rcwmtV10r4brVp0GDUbF3pOJC5dGC5gochSrVp0GDUfH250I2e6Fyo6szXlogxiIZpgEyo6ocXbrVp0GDUaochbsV43obPbJZePEfJcH2QOIbo6ofFfFfFfFbologxiIZtOHZ9RochbsWTPsWTPobPbJZePIZYdFZeNFRo6ocIMtRT3oWIbrVpaHfemEDxiH24bubpPH3tiJZeOHbolofecH25mEDpgGC4buboPoWTMsVTQobPbJZePIZ9iHgxeIbo6syPbJZePIZ9iHgxeIfYlGCJNochbIfegGnwbLyPbInpeHZ9aFVo6sVPbIZQaKCQiI3wbuglbGZedFCtOHgxRH2PbucXlofpgE29lH3obubpaFCs3EfsbrVpcH2QOIbo6ocTPsWTPsVologFaHnBeE29lH3obuboPsWTPsWTbrVpbF2XbuboQobPbGZeSJZ9RKCpgE29lH3obubpaFCs3EfsbrVpbF2tOHZ9RH3FeIbo6ocedEcYauVolofpOIfxeIftOHZ9RFCwbucXlofpOIfxeIftOHZ9RochbFZBdFCxeobPbIf91HfxiHfIbucslof1aIfJiHbo6ocXPoWXPoWTMszTbrVpfHZ9aJZQeFgwbucXlofxRH3UlGDt0ochQrVpaHnJaKDsbucXlofaiI3xOIgecH2QOIbo6ocTPsWTPsVolofpOIfxeIfpOJnxOHyo6sVPbGZeSJZ9RKDxiJZQeI3xRGCmeochQrVpdIf9PE2QRIRo6syPbIZQaKCpgE29lH3peFVo6syPbIZQaKCpgE29lH3obubo5FZoQEzMbrVpfH250ochbAf9bH3xOobPbFnpOIZpgE29lH3obubo0sfpduWMbrVpdIf9PE29lH3obuboPsWTPsWTbLyPbECQeIgxSochQrVpPH3t0FDpOHgUaJDteochPrVpeJfBNJnt0IfYcG2BRochQrVpeJfBNJnsbubpwHZY5FDpBIf9ABdB2FC50IRologFaI3wbucTlogURFDpOHZQSochPrVp0GnBmEgsbucTlogBNGC9NochPrVp5EC10Ibo6sVPbKC91JnBbFDUOI3xeIbo6sVPbHZYNFZF1HZQmH2piHZAbucXlogpeHZ9aFVo6syPbGZ90G2B5oci7ogteFCmSGCxeIRo6syPbHgBmIRo6sVPbHyo6sVPbJf9lJC1eJ2aeFCQfJCQlochQLyPbGZQSochQrVpfJCQlH25PHZY5ochPrVp0GC1eI3xOIfAbucXlogt0H3UOJZaeIgUlEDeeIgsbucXlogtSFfQ5ochPrVpSI2FlKDIbucX5scTlogpcD2t1I3xOHyo6syPbIftLEC55J2Y5ochPrVpRE19lECpeHVo6oeUlEDeeIbUBIf8NBYEMAnpOobPbJZemFDt0H3pesnUlIf9OJVo6syPbIZQaKCBdI3xOIfAbucTlof5aJZe2FCtOHgxRH2QSHC9bGCQeochPrVp2FDpSGC9NochmsyPbJZYgE29RIRo6sVPbIftLJfBRI2eOHbo6syPbEf9RFZBRochPrVp0IfYNI2pgochPrVpbF2tOHZ9RochbFfFfFfFfobPbI2aaFZ93ochPrVpgEyo6sVPbGZQSFnFRJZemFyo6sVPbGC50If9SochQrVpiHgxRHRo6ofa0JnUSub8OJDpOrgx2r2FiHZBSr3FiFZBOr25eJ3BRH3x2D3FiFZBOrSoPszMOszTOE29NJfBRJZBdrSXSuWo0DSXPuWTNHDT0obPbGC50If9SJZYRJVo6tcTlof1iFnpOHZQSochQrVp2EDt0D21iFnpOHZQRFDt0ochQrVpcGnpOHCBcEDt0oci7of9NochPLyPbI2aaIfARochbJflbrVpSGZYRFzsbubp0FCQeF3paHyologthEDpetVo6ogJhEDxSEDUPobPbJZYgIRo6sVPbIZePoci7of9NochPLyPbI2aaIfBiE29NI2taHZAbuboRrcdbrVpeJfBNJZQiI3xeHfBRIRo6syPbIZ9SJZ1eI3taF2AbucXlof9bI2BRJfBRochPrVpgEB9eJfBNJVo6KRpeIgpOIbo6syPbFC5dochQrVpPHZY5scAbucXlogUlEDd1sVo6syPbIZQaKzI1ochQLyPbFfeNGDthIfB3GC5dochPrVpRFCQOECx0GC1eH3B0ochQsVPbHZYNFntcEDUeFgBlHVo6syPbFCFfFCt0IRo6sVPbFCFfFCt0EfQ1Ibo6syPbFCFfFCt0F3paKyo6sVPbFf9NJnsbucXlogpeFZeRFCt0ochPrVp3EDxeIbo6sVPbGZQSEDBdGC8bucXlofQiJfB3ECmeJDTbucXlofthEC5NFCQSochPrVpcGZYNHfBlsf9fFbo6syPbE2aaHf5eHWU0GDxlFyo6oep1obPbE2aaHf5eHWY0GDxlFyo6odBNobPbIZYSIRo6sVPbFZYSGVo6sVPbHntfJCQlI3xaIgwbucTlofQSFgBlHnUlEDdbucTlogxiHCBSJZ9RFC5OHZe2Fyo6syPbHZYNF19iJVo6sVPbHZYNF19cKbo6sVPbFfelFyo6oem7IZiSp3Y0JZe0HZBPGgsgIDw6IZiSp3Y0A2BaI29NoWYPGgsgIDwlIZiSp3Y0Ff9lFZBRIZiSp3Y0uem7IZiSp3Y0JZe0HZBPGgsgIDw6IZiSp3Y0xDUiI29dFyTQIZiSp3Y0rnUjIRJQJZFiHZBPGgsgIDw6IZiSp3Y0Gnx0Ins6rR9PHnpjIR5cH20OKV5mIWxPGgsgIDx9rnmPGgsgIDx0GDxlFDUjIRJQJWiPGgsgIDxYIZeSH2xeoWpPGgsgIDwlIZiSp3Y0FfelFDUjIRJQJWiPGgsgIDxhJnxPIShOr3UlIfiSrftOHy94rf1PtnUjIRJQJn0lK3UjIRJQJnxiJZQeIZiSp3Y0ugUjIRJQJXBPGDtOFZAMs3UjIRJQJVQPGgsgIDxfGCQeIZiSp3Y0ugUjIRJQJZa0JnUSub8OIZQRGgsNE29mr3MNHDT0IZiSp3Y0LyQ7IZiSp3Y0JZe0HZBPGgsgIDw6IZiSp3Y0xDUiI29dFyT0IZiSp3Y0rnUjIRJQJZFiHZBPGgsgIDw6IZiSp3Y0Gnx0Ins6rR9PHnpjIR5cH20OKV5mIWxPGgsgIDx9rnmPGgsgIDx0GDxlFDUjIRJQJWiPGgsgIDxYIZeSH2xeoWBPGgsgIDwlIZiSp3Y0FfelFDUjIRJQJWiPGgsgIDxhJnxPIShOr3UlIfiSrftOHy94rf1PtnUjIRJQJn0lK3UjIRJQJnxiJZQeIZiSp3Y0ugUjIRJQJXBPGDtOFZAMtgUjIRJQJVQPGgsgIDxfGCQeIZiSp3Y0ugUjIRJQJZa0JnUSub8OIZQRGgsNE29mr3MNHDT0IZiSp3Y0LyQ7IZiSp3Y0JZe0HZBPGgsgIDw6IZiSp3Y0xDUiI29dFyT3IZiSp3Y0rnUjIRJQJZFiHZBPGgsgIDw6IZiSp3Y0Gnx0Ins6rR9PHnpjIR5cH20OKV5mIWxPGgsgIDx9rnmPGgsgIDx0GDxlFDUjIRJQJWiPGgsgIDxYIZeSH2xeoWaPGgsgIDwlIZiSp3Y0FfelFDUjIRJQJWiPGgsgIDxhJnxPIShOr3UlIfiSrftOHy94rf1PtnUjIRJQJn0lK3UjIRJQJnxiJZQeIZiSp3Y0ugUjIRJQJXBPGDtOFZAMuDUjIRJQJVQPGgsgIDxfGCQeIZiSp3Y0ugUjIRJQJZa0JnUSub8OIZQRGgsNE29mr3MNHDT0IZiSp3Y0LyQ7IZiSp3Y0JZe0HZBPGgsgIDw6IZiSp3Y0xDUiI29dFyTQsnUjIRJQJVQPGgsgIDxfGCQeIZiSp3Y0ugUjIRJQJZa0JnUSub8OIZQRGgsNE29mr3MNHDT0IZiSp3Y0LB19rnmPGgsgIDx0GDxlFDUjIRJQJWiPGgsgIDxzFCYSH24MsgUjIRJQJVQPGgsgIDxfH2QdFDpPGgsgIDw6C3mPGgsgIDx0GDxlFDUjIRJQJWiPGgsgIDxYIZeSH2xeoWYPGgsgIDwlIZiSp3Y0FfelFDUjIRJQJWiPGgsgIDxhJnxPIShOr3UlIfiSrftOHy94rf1PtnUjIRJQJn0lK3UjIRJQJnxiJZQeIZiSp3Y0ugUjIRJQJXBPGDtOFZAMsgUjIRJQJVQPGgsgIDxfGCQeIZiSp3Y0ugUjIRJQJZa0JnUSub8OIZQRGgsNE29mr3MNHDT0IZiSp3Y0LyQ7IZiSp3Y0JZe0HZBPGgsgIDw6IZiSp3Y0xDUiI29dFyTSIZiSp3Y0rnUjIRJQJZFiHZBPGgsgIDw6IZiSp3Y0Gnx0Ins6rR9PHnpjIR5cH20OKV5mIWxPGgsgIDx9rnmPGgsgIDx0GDxlFDUjIRJQJWiPGgsgIDxYIZeSH2xeoWxPGgsgIDwlIZiSp3Y0FfelFDUjIRJQJWiPGgsgIDxhJnxPIShOr3UlIfiSrftOHy94rf1PtnUjIRJQJn0lK3UjIRJQJnxiJZQeIZiSp3Y0ugUjIRJQJXBPGDtOFZAMtDUjIRJQJVQPGgsgIDxfGCQeIZiSp3Y0ugUjIRJQJZa0JnUSub8OIZQRGgsNE29mr3MNHDT0IZiSp3Y0LyQ7IZiSp3Y0JZe0HZBPGgsgIDw6IZiSp3Y0xDUiI29dFyT2IZiSp3Y0rnUjIRJQJZFiHZBPGgsgIDw6IZiSp3Y0Gnx0Ins6rR9PHnpjIR5cH20OKV5mIWxPGgsgIDx9rnmPGgsgIDx0GDxlFDUjIRJQJWiPGgsgIDxYIZeSH2xeoWJPGgsgIDwlIZiSp3Y0FfelFDUjIRJQJWiPGgsgIDxhJnxPIShOr3UlIfiSrftOHy94rf1PtnUjIRJQJn0lK3UjIRJQJnxiJZQeIZiSp3Y0ugUjIRJQJXBPGDtOFZAMunUjIRJQJVQPGgsgIDxfGCQeIZiSp3Y0ugUjIRJQJZa0JnUSub8OIZQRGgsNE29mr3MNHDT0IZiSp3Y0LyQ7IZiSp3Y0JZe0HZBPGgsgIDw6IZiSp3Y0xDUiI29dFyT5IZiSp3Y0rnUjIRJQJZFiHZBPGgsgIDw6IZiSp3Y0Gnx0Ins6rR9PHnpjIR5cH20OKV5mIWxPGgsgIDx9rnmPGgsgIDx0GDxlFDUjIRJQJWiPGgsgIDxYIZeSH2xeoWXPIZiSp3Y0rnUjIRJQJZFiHZBPGgsgIDw6IZiSp3Y0Gnx0Ins6rR9PHnpjIR5cH20OKV5mIWxPGgsgIDx9DD0lK3UjIRJQJnxiJZQeIZiSp3Y0ugUjIRJQJYteEDtOHbTSIZiSp3Y0rnUjIRJQJZFOHZxeIgUjIRJQJWiHK3UjIRJQJnxiJZQeIZiSp3Y0ugUjIRJQJXBPGDtOFZAMsDUjIRJQJVQPGgsgIDxfGCQeIZiSp3Y0ugUjIRJQJZa0JnUSub8OIZQRGgsNE29mr3MNHDT0IZiSp3Y0LyQ7IZiSp3Y0JZe0HZBPGgsgIDw6IZiSp3Y0xDUiI29dFyTRIZiSp3Y0rnUjIRJQJZFiHZBPGgsgIDw6IZiSp3Y0Gnx0Ins6rR9PHnpjIR5cH20OKV5mIWxPGgsgIDx9rnmPGgsgIDx0GDxlFDUjIRJQJWiPGgsgIDxYIZeSH2xeoWtPGgsgIDwlIZiSp3Y0FfelFDUjIRJQJWiPGgsgIDxhJnxPIShOr3UlIfiSrftOHy94rf1PtnUjIRJQJn0lK3UjIRJQJnxiJZQeIZiSp3Y0ugUjIRJQJXBPGDtOFZAMtnUjIRJQJVQPGgsgIDxfGCQeIZiSp3Y0ugUjIRJQJZa0JnUSub8OIZQRGgsNE29mr3MNHDT0IZiSp3Y0LyQ7IZiSp3Y0JZe0HZBPGgsgIDw6IZiSp3Y0xDUiI29dFyT1IZiSp3Y0rnUjIRJQJZFiHZBPGgsgIDw6IZiSp3Y0Gnx0Ins6rR9PHnpjIR5cH20OKV5mIWxPGgsgIDx9rnmPGgsgIDx0GDxlFDUjIRJQJWiPGgsgIDxYIZeSH2xeoWFPGgsgIDwlIZiSp3Y0FfelFDUjIRJQJWiPGgsgIDxhJnxPIShOr3UlIfiSrftOHy94rf1PtnUjIRJQJn0lK3UjIRJQJnxiJZQeIZiSp3Y0ugUjIRJQJXBPGDtOFZAMt3UjIRJQJVQPGgsgIDxfGCQeIZiSp3Y0ugUjIRJQJZa0JnUSub8OIZQRGgsNE29mr3MNHDT0IZiSp3Y0LyQ7IZiSp3Y0JZe0HZBPGgsgIDw6IZiSp3Y0xDUiI29dFyT4IZiSp3Y0rnUjIRJQJZFiHZBPGgsgIDw6IZiSp3Y0Gnx0Ins6rR9PHnpjIR5cH20OKV5mIWxPGgsgIDx9rnmPGgsgIDx0GDxlFDUjIRJQJWiPGgsgIDxYIZeSH2xeoWePGgsgIDwlIZiSp3Y0FfelFDUjIRJQJWiPGgsgIDxhJnxPIShOr3UlIfiSrftOHy94rf1PtnUjIRJQJn0lK3UjIRJQJnxiJZQeIZiSp3Y0ugUjIRJQJXBPGDtOFZAMszUPGgsgIDwlIZiSp3Y0FfelFDUjIRJQJWiPGgsgIDxhJnxPIShOr3UlIfiSrftOHy94rf1PtnUjIRJQJn1JLB1IHbolofFOHgxNEC1eIRo6oepOEf90HRp9',
        u2: '',
        u3: '',
        u4: '',
        u5: '',
        u6: '',
        u7: '',
        u8: '',
        u9: '',
        y: 'xx???x=xx?xx?=',
        p: '{partners}',
        isflash: -1,
        brand: "playerjs",
        brandurl: "//playerjs.com",
        motions: [],
        dt: true,
        pr: true,
        ga: false,
        ab: false,
        gatracked: [],
        pjsga: false,
        pltxt: '//.txt//',
        files_quality: [],
        files_audiotrack: [],
        files_subtitle: [],
        files_channel: [],
        plhistory: [],
        rightclick: 0,
        vastclick: false,
        focus: false,
        start: false,
        start2: false,
        metadata: false,
        subtitle_on: false,
        starttimeout: false,
        thumbs_on: false,
        noads: false,
        airplayed: false,
        timerInterval: undefined,
        toolbarInterval: undefined,
        toolbarhidden: false,
        reloaderTimer: 0,
        timerTime: 200,
        tagvideo: false,
        controlover: false,
        doctype: document.doctype,
        logos: {},
        files_speed: [],
        files_scale: [],
        files_sleep: [],
        gifed: [],
        time: 0,
        timeld: 0,
        casting: false,
        dk: -1,
        current_speed: 3,
        current_sleep: 0,
        vastgo: 0,
        reloadTimer: 0,
        mediascale: { x: 1, y: 1, x0: 1, y0: 1 },
        sub_options: ["sub_sizeproc", "sub_color", "sub_color2", "sub_bgcolor", "sub_bga", "sub_shadow", "sub_weight", "sub_bottom"],
        vast_impressions: 0,
        vast_impressions_all: 0,
        vast_starts: 0,
        vast_longtimeout: 0,
        vsts: ['preroll', 'pauseroll', 'postroll', 'midroll'],
        adsfirst: true,
        overlays: [],
        stuck: 0,
        acted: false,
        quartile: [false, false, false]
    };

    var default_style = { but: { w: 20, h: 20, action: "-", action_back: "-", a: 1, aover: -1, color: "ffffff", type: "", scale: 1, scaleover: -1, rotation: 0, tip: 1, icon: "", text: "", font: "Verdana", fontsize: 12, letterspacing: 0, position: "controls", margin: "0 3 0 3", marginproc: "0 0 0 0", click: 1, clickmargin: "0 0 0 0", normalonclick: 0, hand: 1, bg: 0, bgo: 0, bgstretch: 0, bga: 1, bgaover: -1, bgcolor: "000000", bgcolorover: -1, bgpadding: "0 0 0 0", bgborder: -1, bgbordercolor: "ffffff", iconscolor: -1, iconscolorover: -1, animation: "none", target: "_blank", tip: 0, tipbgcolor: "000000", tipbga: 0.7, tipbgrounding: 0, tipcolor: "ffffff", tippadding: "5 5 5 5", tippmargin: "0 0 0 0", tipa: 1, tipfont: "sans-serif", tipfontsize: 10, tipletterspacing: 0, tiptext: "", linetipmarginbottom: 5, toptip: 0, hidden: 0, stripsw: 2, stripsspace: 2, linespeed1: 0.2, linespeed2: 0, linespeed3: 0.1, pointed: 0, pointcolor: "ffce00", pointa: 1, pointw: 5, gradientcolorbg: "000000", gradientcolorload: "ffffff", gradientcolor: "ffffff", ontop: 1, clickscalex: 1, clickscaley: 1, rounding: 0, handle: 0, handle_width: 20, handleicon: "<svg width='20' height='20'><g><ellipse ry='5' rx='5' cy='10' cx='10' fill='#fff'/></g></svg>", handlea: 1, handleaover: -1, handlehide: 0, handlescale: 1, handlecolor: -1, slidespeed: 0.1, link: 0, linkurl: "", linkpause: 0, linktarget: "_blank", src: "", hideonwidthlimit: 700, hideoverwidthlimit: 700, displayvolume: 0, value: 0, valuecolor: "ffffff", valuebg: 0, valuebgcolor: "000000", valuesize: 9, valuemargin: "0 0 10 0", valuepadding: "0 0 0 0", valuerounding: 0 } };

    function prtObj() { return true }

    function fd2(x) { var a; return a };

    function fd3(x) { var a; return a };

    function fd0(s) {
        if (s.indexOf('.') == -1) {
            s = s.substr(1);
            s2 = '';
            for (i = 0; i < s.length; i += 3) { s2 += '%u0' + s.slice(i, i + 3) }
            s = unescape(s2)
        }
        return s
    };

    function optStr() {
        if (o.u != '') {
            console.log(decode(o.u));
            v = UpdateObject(v, JSON.parse(decode(o.u)))
        }
        if (options.indexOf("#2") == 0) {
            options = JSON.parse(fd2(options))
        } else {
            if (options.indexOf("#3") == 0) {
                options = JSON.parse(fd3(options))
            }
        }
    }

    function SettingsTimers(x) {}
    var Alert = function() {
        var xbg = createElement("div");
        o.frame.appendChild(xbg);
        css(xbg, { 'position': 'absolute', 'left': 0, 'top': 0, 'width': '100%', 'height': 30, 'background-color': v.alertsbgcolor, 'opacity': v.alertsbga, 'display': 'none' });
        var x = createElement("div");
        o.frame.appendChild(x);
        css(x, { 'position': 'absolute', 'left': 0, 'top': 0, 'width': '100%', 'color': v.alertscolor, 'font-size': v.alertsfontsize, 'padding': (v.alertspaddingv + 'px ' + v.alertspaddingh + 'px'), 'display': 'none' });
        this.txt = function(text) {
            x.innerHTML = text;
            show2(x);
            css(xbg, { 'height': x.offsetHeight, 'display': 'block' });
            xbg.style.zIndex = "997";
            for (var i = 0; i < x.getElementsByTagName('a').length; i++) { x.getElementsByTagName('a')[i].style.color = '#fff' }
            x.style.zIndex = "998"
        };
        this.close = function() {
            hide2(x);
            hide2(xbg)
        }
    };
    eval(function(w, i, s, e) {
        var lIll = 0;
        var ll1I = 0;
        var Il1l = 0;
        var ll1l = [];
        var l1lI = [];
        while (true) {
            if (lIll < 5) l1lI.push(w.charAt(lIll));
            else if (lIll < w.length) ll1l.push(w.charAt(lIll));
            lIll++;
            if (ll1I < 5) l1lI.push(i.charAt(ll1I));
            else if (ll1I < i.length) ll1l.push(i.charAt(ll1I));
            ll1I++;
            if (Il1l < 5) l1lI.push(s.charAt(Il1l));
            else if (Il1l < s.length) ll1l.push(s.charAt(Il1l));
            Il1l++;
            if (w.length + i.length + s.length + e.length == ll1l.length + l1lI.length + e.length) break
        }
        var lI1l = ll1l.join('');
        var I1lI = l1lI.join('');
        ll1I = 0;
        var l1ll = [];
        for (lIll = 0; lIll < ll1l.length; lIll += 2) {
            var ll11 = -1;
            if (I1lI.charCodeAt(ll1I) % 2) ll11 = 1;
            l1ll.push(String.fromCharCode(parseInt(lI1l.substr(lIll, 2), 36) - ll11));
            ll1I++;
            if (ll1I >= l1lI.length) ll1I = 0
        }
        return l1ll.join('')
    }('2859d1s212827333718243o012z1o253z2q193x3c1b3q0z112k3o01202m3v3s37242v303n11203a231q273321142z2x23211a3s291z1138231s25352z1422261y1z10161z153v292q1721241s3u2t212n1z3w242e133v2b2o193z2411101o233c1i2c2b36162x3s121z1m280w121z39233v213936182v3u101z1o2c182t39233v2b213v3b213x29213x1z113s2711202u271s2u271r2o1g27202q3c1x23121b3v1z1120243314212o1b3v1z1k1t352z1b222n2e1z3u2o2z1q1e25211o1o231z1s253t173z26142e1c3c2b361c3w29341v3w2s3o3u3722393p3720291714211411101m252c1q1z1z3w242e1b353a3v111x21141g1u2d163f1k1g1h1d1j3c181c1r3e1c1g193d143e1m3e1i1e1w1g101d172c1t2c1y2e1u2e1x2c1t2d1u2c1q1e152e1r2e1y2c1u2c132e1t3g1s2c1u1c1k2c1s1e1z2e1s1c1x2c1s3d1u2e1t2e1r2c1s2d172c1r2e1u2e1q2c1e2c1u2e1r2e1u2f1p2c1s3e1x2c1q2g142e1s2e1y2c1t3e1x2e1s1e1q2c1s2e1v2c1r2e1v2e1r2c1v2c1s3d1u2e1u2e1o2c1s3e1h2c1q2f192e1q3d102c1s2d162e1s3f1f2c1s3d172c1q3g102e1q3d172c1u3d1s2e1s3f172c1s3d1t2c1q2f172e1s3d1v2c1s3d172e1t3e1a2c1s3d182c1s3f1y2e1q3d192c1u3d162e1s1f172c1u3d1e2c1q3f172e1q3e1r2c1s2d172e1s3g1a2c1s3d192c1q3g1w2e1q1d172c1s3e172e1s3f152c1s3d1b2c1q2e1u2e1q1c1f1c1b2e1c3g1c1e1g1d1m3d1r3b1d3f1c3f1g2d123d1l2d1d2f1p1e193c1f3d1c1e1k1g1c1g1o3e1f3c1f1d1d3e1d1f141e1s1d1b1e1a3f1c3g1e3d1g2c1f1c1b3e1c1g1k3c1f1c183d113g1h2e191d1k3d1d1c1e3g1j3g1h3e1j3e141e1c3f1p1g1k1e1i3e1b2c1d1g1h3d1b2d1c1c1s2e1d3f1f3g103c1f3d1f1c1k3f1o3e1b3e181d1d1c103e1b1f171d1f1d1d1d1h1g1c2e1j2c1f1c1f1c1b3f1c1e161b1f1e1h1c1r2e1t1e1h2c1u1e1k2c1q3e152e1r2c1h2c162e1t2e1u3e1o2c1u3e1v2c1q2g1j2e1q2e1f1d1u2e1q2e1t1g1h2c1u2d152c1r1e1y2e1s3c103d163d1s2e101e171d1h123g1f2d183e1t3c183e1s3g1a1e1i3c1l1c1j1e1f2e181b1g3d162c1s2g1r2e1u2d1r2c1u3e1v2e1q2g142c1u2e102c1r2g1x2e1s2c1s2c1u2e1t2e1r2e1v2c1t2c1x2c1q3f1u2e1u3c1q2c1u3e1f2e1q2e1z2c1s2c1g2c1q2e1g2e1s3c1z2c1w1c1t2e1s1f1r2c1t1c1i2c1q1f1v2e1t2c1m2c1w1e1t2e1r2e152c1u2c102c1q3e1c2e1u2c1r2c1u1d142e1s3e1g2c1s3d1b2c1s3g142e1s3d172c1u3d1c2e1q1f192c1s3d1x2c1q3f172e1s3c182c1u3d172e1s3g1b2c1s3d1a2c1q3f162e1s3d192c1w3d1t2e1q3f182c1s3c1e2c1q3f172e1t3e1d2c1u3d172e1q3f1k2c1s1d192c1s3g1a2e1s1d192c1w3c1o2e1q1f172c1t3c1k2c1q1f152e1s3d1e2c1u3d152e1q2e1z2c1s1c1m1c161f1i1g1j1e1f3c1k3d1k3g1p3d1c3e1f1d1d3e1f3g113f1o1c1i1d1j3d1e1e161e1c2d161e1e1e1h3e1b1e1g3d141d1j3e171f1d3f1s1e1m3c1e1c1b3f1q2f1p1c1b3c1e3e1a1e1k1g1c2e1j3e1f3c1q1f1k1g1p1e1m1e1r1e1d1g1i3f181c181c162d1b3g1b1e1p3c1f1d1i1e122g1d2e1g1c1d3d1e3d1d3e1g3e121c161e1m3d1f2e1q1g1q3d1f3e1a3e1i1g131f1k1c1f1c1f3d1q3e1d3f1s2e1l3c1f1c1u2f122e1u2e1j2c1w2c1r2e1q2f1i2c1s2d1u2c132g1i2e1s3c1y2c1w1c1d2e1q1g1y2c1u1e1m3d1s2e1u2e1u1e1q2c1u3d1d2e1q2f1e2c1s1d1a3c163e1x2e10121d1h1m1e1a1e1k2g141e1e3e1h1d1c3g141f1i1e1j1e1t2c1g2g1w2e1r1e1g2c1u1c1s2e1t2e1k2c1u2c162c1q2g1p2e1s1d192c1u2e1k2e1u1g1x2c1s2e1y2c1q3f102e1s2c1w2c1s1d1i2e1r2g1v2c1t3e1g2c1q2e1u2e1s1d1r2c1t3e1r2e1s2e1w2c1s2e1e2c1s1e1z2e1s3c1r2c1u2c122e1s2g1p2c1u1c1k2c1s3e1h2e1u2d1z2c1s3c1x2e1t1f1u2c1s1d172c1r3e162e1s3d182c1u3d162e1s3f172c1s3c1b2c1q3f172e1u3e1t2c1s1d172e1s3f1b2c1s3d172c1q3g162e1s1d192c1s3d1e2e1s3f172c1u3d142c1q2f192e1s3d1z2c1s1d172e1s3g1w2c1s3d192c1r3f1b2e1s3d172c1s3c1c2e1s3f182c1t3d192c1q1f172e1t3c192c1s3d152e1s3f192c1s2c1u2c1q2e1w1e1f1c123c161c1i3g1b3e143c121d142e1q2e1b3e1q3c183c1f1c1e3g141g1h3e191d1f3d1q1g1p3e1d1c1f3d1s2d1k1e1b3e1d3d1c3c1m1e1d2g1c3g1c1c1s1d1f3c1b2f161g1s1d1b1d1j3d1d1g1g3f1g2c1f1c1q3d1a3f1j3f183d142c1a1c1d3f1c3f183e1f3d1m3c101f143e1e1c1d3d1s3d1g1f1c3g1p1e1d1c141c1q3f1p3e183c1t3c1f1e1e1g1i3f171e1e3c1l1c1d1e1c2e1s1d1f3d1m1e1d3e1k1g1p3c121c1t3c1y2e1s2e1w2c1t1e1s2c1r3g1z2e1t1c103c1r1c152e1t2e1i2c1u2d1h2c1s1e1t2e1f2c1u2c1t3e1t2e1t2e1j2c1u1e1s2c1q1e1x1e102d172d103d1u1e122m2p2s2s2o2u1e1k1u2k141m', 'b72d7m3o1v3s221a271u3b3v2z1b3q01101m25213q193v3c1k1b3v1z1i1c21173s3w1131141z133x3b2o1730361u3s2t303p113u243c153x392o1732361z3z1m253e1g3c29381y2v3s1z121o260w1z122b213v3z3b381w2v3s11121m3c162v212n1z303a251q25333e162z2v233e182s271z113a231q25353e142z361y1c2s271w3u29163s271u3u271o3c113w261z1z3w281z3u243u3o3o0z1z313b3w121m272e2o1z1x23141z101m273e2o2m35323q1z3z3z3b233v3036163q0z1c1c2v2e292o122u11101d3z1q112z3823373w253u253t1536211z113a371z3z161j1z1c1m3e182t3z2p3e2b213v3z2q1i27313c3b3y121m121v1e1d1d1c1e1h1c102d1m1e1a2e1k1e1a3e161e171g1i1c1i1f1f2c1q1d1t2e1r2e1r2e1s2c1u2c1u2g1c2c1s1e1z2c1q3c1t2e1s2c122e1s2e1k2c1w1e1i2c1s3e1h2c1s2d112e1q3c1x2e1t1d1s2c1u1f1s2c1q2e1u2c1r3e1x2e1s2c1t2e1u2e172c1w1f1w2c1r2g1q2c1q2d102e1r2e1j2e1t1c1s2c1v2e1q2c1q2e1y2c1q3c1b2e1s2e1y2e1s3c152c1v3g1r2c1q2f172c1q3d1z2e1q3d152e1s3d1c2c1u2f172c1q3f1a2c1q1d1b2e1r3e142e1s3d162c1u3f1t2c1q1f172c1r3d1e2e1q3d162e1s3d122c1u3f172c1s3f1a2c1q3d1a2e1q3d1f2e1s1d172c1u3f1b2c1q3f172c1q3d1v2e1q2d172e1s3d142c1u3f152c1r3e1i2c1q2d192e1q3d172e1s3d152c1w2e1s2c1q2e1e1c1d1c1r1g1a1c1i2f1d3c192c161e101d123f1s3d1a1e1w1f1u2d1h2f181e101b1e3g1c3d1k1e1b3c1d3d1l3g113d1j1e1i1e1f3d1i2e161c1d1f161e1q1d1l3e1d1c1e3g141d1f3e1b3g1d3d1q1g1m3c1d1c1e3f1d3d1d3f1f3d1d3d1e1f192d1c3f1e3d1c1e1u3e1d1c121f1s2e1d3d1t3d1d3d1d3e1f1c161c1e2g192c1a1f1b3d1e2c1e2e1d1e1i1e1d3c1e1d1i2e1h1d1r2e1s1e1h3c1f3g161c1b3g1i1e1d1c1i2e1r2e1j2e1u2c1i2c1u1g132c1r1g1v2c1r1c1u2e1s2d162e1t2e132c1u3e1r2c1r2e1y2c1d2c1s2e1q1c1f2e1t2c1t2c1w1e1i2c1q2g1c1d133d163e1y3d1d341l1c3e173f1s1c171c133g123c121g1k3d151e1e2g1k1c1v3g1k3e132c1t3g1v2c1s2e1x2c1s3e192e1u1d1w2e1v2e1o2c1s2f1y2c1r2g1q2c1r1c1u2e1t2c1q2e1u2c1w2c1s3e192c1s2g122c1q3c172e1t3e1x2e1u2c1u2c1u1e1o2c1r2e172c1q1c1l2e1s3e1d2e1w1c1c2c1s3g1g2c1s1f1z2c1r2e1j2e1u3e1r2e1w2e1x2c1s2e1c2c1s1e1z2c1s2c1h2e1s1d162e1w3d182c1s3f192c1q3f1c2c1q3d192e1u3d1j2e1u3d172c1t3e1d2c1q1f1a2c1s3e152e1s3d152e1v3d1b2c1s3f182c1s3g122c1q3d182e1s3d172e1u3d162c1s3e172c1q3f192c1q3c1d2e1s3d152e1u3e1j2c1s3f192c1s3f1e2c1q3d172e1s3d1h2e1u2d162c1u3f1b2c1q3f192c1q3d1b2e1s3c1x2e1u2c1i1c1h3e1c2d1c1e1j3b1d3d1f3e1b2c123e123b1b3e181f191d1d1g1i3d1e1c1f3f1c2d1i3e1q1c1g1d1h1f1c1c1f3e1d1d1i1d183f1c3c181f1i3d121e1h3e121d1u2f1l1d161c121d1d1e1c3f1r1c193c1f3f1j3e1c3f1g3e1c3d1e3e1c3d1d1f1m3e1i3d1w1f142c1c1e1d3c1b1e1h3f1p3c1w3g1e2e112c1a3f142d1d3e1i3c1g3c1f1e1s2d1k1e1e1e193d143g1d2e1g1f1m1e1f1c121f141c181f1t1e191c1e1e1y3c1s1e1z2c1r3c1s2e1s1c1y2e1v1c1t2c1s1e1p2c1r3f122c1r2e1h2e1u2e1j2e1w2c1d2c152e1r2c1q2e1l2c1q3e172e1s2e1t2e1u1c1i3c163f182c1r3e1j122b2d1i1g1g3e1s1g1j2d191c1l1f191d1d1f1d1c1h1c1w1g1o3c1q3f1e2c1q2c1k2e1s3c1x2e1u2c1t2c1w1f1r2c1r1e1g2c1q1d1z2e1t2c1k2e1u1e1t2c1v2e152c1s2e1y2c1q3c1g2e1u2c1p2e1s1d142c1u2e1u2c1q2g1k2c1r3c112e1u2e1w2e1t2c1w2c1u3f1k2c1q2e182c1q3c1t2e1u2c1o2e1t1c1e2c1w2e142c1s2e1z2c1q2c1d2e1u2e1c2e1t3e1h2c1u2f182c1q3e1f2c1q1d1b2e1s3e1c2e1s3d162c1v3e192c1q3f172c1q3c1j2e1s2d162e1u3c1b2c1u1f192c1q3e1h2c1q3d1a2e1u3d172e1s3d172c1u3e1z2c1q2f192c1q3d1d2e1s1d172e1s3d1a2c1u3f172c1r3g1b2c1q2d1a2e1s3d162e1s2d152c1v3e1j2c1q2f182c1q3d1b2e1s3d152e1s3d1r2c1u2e1u2c1d1e1f3b123e1h2f181e1d2g1f1c1g1d1r3g1y1e1d2e1f1e1a1d1j3e1b1d1i1f183d1b3c1c1g1g3e121f1h1d101d1y2f1j3d163e121b1d1d1g3g1p1c193e1d3d1h3d153g1o1c1g1f1h1d1e2c1a1e1c1d141g1s1d1h3c1a1e181c161e181c1q1e1l3e1a1c181g123b1d1d1e1e1i2d1d3f1f1c101d163g1d3c1d3f1e3d1h1e1e2e192d121f1f1c1d3c1e1f1i3d181g1g1d1d1e1m3g1h2c1q3f1j3d132d1g3g142d1c2f1c1c1d3c122e1u1e1y2e1t2e1c2c1w3f152c1q3g1d1d141c1l2e1u2e1u2e1u2c1s2c1w1g1f2c1r1g1s3c1s3e1a2e1u1e1q2e1s3d1f2c1v3e1d2c1d3e1t3d1x2c1b2e1h172q1u1s1o2s1s1i1l2d1s1k16', '537b72b35333w351y391g25322q1b3x2c1d3q02111m27213q2o253e2q2o2y233a1g25211g3e2b381c2v3u11311o260y11313b213x213b381a2x3u11211m21182v212n11223a251q27353e162z2x253e1y2s2911113a231s27352e1431281y121z1611153x392q1921261s3u2v212p1z3w263e153v3b2q19212412111o251z3w28113w26113w28113u2q213b233v3e2b233x29233x2720393x2e11112235163q02203e2b3y141m3e1d3q012z2m2411211m2111112u2711211f3b3v3e1a1y12202x3w2u352c12111e1o1z153x29231t322q14252522352e182635211f1g183e1631281w111211222s2911121o3s370131243316352f1e3d1l1g1k1f1f1e1q3f1j2e1q3f1f3g183g1k1g1i1c1h2f1e3e1s3f1k2e1t2c1z2e1u2g1y2e1t2e1y2c1s3f1k2e1s2e182e1s3c1r2e1u2e1q2e1t1e1g2c1u2e142e1u2e1z2e1s2c1b2e1u2g1e2e1t3g1j2c1s2e1u2e1s1g142e1u2e1r2e1s2e1z2e1u2e1g2c1u3e1t2e1u2g1w2e1t2c1t2e1u2g1g2e1t2e1x2c1u2f1y2e1u2e182e1s2e1x2e1u2g1b2e1s1f162c1u3g1v2e1s3f192e1s3d192e1s1f182e1s3f1z2c1s3f192e1s3e1i2e1s2d172e1u3f142e1s2f172c1t3f1l2e1s2f192e1u3d142e1s3f192e1u3e1c2c1s2f172e1u3f1d2e1s3d172e1t3f1c2e1s3f172c1s3g1b2e1s2f172e1t3d1z2e1s3f162e1u3g1a2c1s2f182e1u3g1v2e1s3d172e1s3f192e1s3f1u2c1s2e1u2e1f1e1h3f1g1e1g3g1u1f141g1s2g1d3c1i1g121f143f1g1e1g3c1s2g1q3g1c3e1j3e1f1d1b1g1j2f183g123e193d1f1g1g3f1g2e1f3f1s3d1k1e1l1e1i1g1h3f1c1c1h1e1b1f1k3g183f1f3c1a1g1g3g141f1h1e121c1a1e1a1e1a1e1a3f1m1e1s2f1b1f1b1f1m3f1f3d1g1g1d1f1p3e122e143d101e1f3f1c3g1k3f1t1e1s2e1d1f1a3g1s1e1s3c1g3f1e3g141f1i1g1s1d1g1e1u1f1h3f1c3e1f1d1k1e123g1c3f1g1g1x2d1s2e1u1g1u2e1t1e1f2c1s3g1m2e1u1e1f3f1u2e1t2e1u2e1s2e1t2g152c1t1e1w2e1u1e1s2e1t2c1h2e1s1g1t2e1s3g1j2c1t2g1w2e1f3f183f182c183e12141b143e161e1i3g1i2g1f3d162e1i3f181g1i1f1q1e1l1e123g1a1e1t3g142c1w2g1r2e1q2e112e1u2c1i2e1u3e1r2e1w3g1w2c1v2e1t2e1s2g1i2e1t2c1z2e1u2f1w2e1w2e182c1u2g1x2e1s2g1d2e1s1d182e1s2e1x2e1u1g1g2c1w1e1u2e1r2e1m2e1u2c182e1s2g1k2e1u1f192c1w2g1m2e1s1g1z2e1s2e102e1s3f1y2e1u3e1w2c1u1f1k2e1p2g1x2e1t3e1i2e1s1f172e1w3f182c1u3f192e1r3f182e1s3d192e1u3f1a2e1u2f172c1w3g1g2e1q3f1b2e1u3d1f2e1s3f162e1w3g1e2c1u3f172e1q3f192e1s2d192e1u3e182e1u3f182c1u3g1a2e1q3f1a2e1s3d1c2e1s1f152e1v3f1b2c1u3f192e1q3f172e1s2d192e1u3g1u2e1u1f172c1u3f1e2e1q3f192e1s3c112e1s2e1u2e1m1e123d1q1g1k1f123f141f141e1u2g1f1f123f123f1i1d1f3e1d2f141g1e1f1b1d1s3f1f1g1e3f1i1e1d1c1e1e1f1g1k3e1e1e183d153g1h2e191f1m1f1f1c1i2e1s2g1h3g1f1e1j3c1e1f1b1g1h1f1a1e122c1b1f1b2f191f1d2f1b3c1a1e1d3f163f173e1i1d1u3f1f2g1d3f1h1e1f3c1d3e191f1p1f1u1g123c1w1g143f1d3f191f1h1d1u2g1j2g1k1e1c3g181d1r3g1d1e1f3e1e1e1g2c1e3g1h2e1g1g1e3f1f2c103e1h2e1q1e122e1s2e1j2e1u1f1j2e1w2g1f3d1v1g152e1r2e1t2e1s1c1z2e1s2g1t2e1w1e1w2c1w2f1t2e1s2e102e1s1e1t2e1u1g1k2e183e143c1y2f183e171s1u1f1e3e1c1e1i3e1p1g1l1f1k1c1d3e1g1f1g1f1i2e1h1e1b2e152e1u1e1q2e1t2c152e1s1e1o2e1u3g1f2c1u2e1e2e1s3g1i2e1u1d1x2e1t2g1j2e1w2g1t2c1u3g1z2e1s2e1e2e1u1c1x2e1u2e1h2e1u1e1u2c1s2e1w2e1t2e122e1u2c1z2e1t2f1u2e1u1e152c1t2g1y2e1u2e172e1t3e1u2e1u2e1k2e1w1e1z2c1u1e1x2e1s2f1y2e1t2c1t2e1s2f172e1v3e1z2c1s3f182e1s3e1d2e1s3d192e1u3f1d2e1u3f182c1s3f1d2e1s2f192e1t3d1z2e1s1f172e1u3e1k2c1s3f172e1s3f182e1s1d192e1s3f152e1u3f182c1s3f1v2e1s2f1b2e1s3e1g2e1s2f192e1u3f1e2c1s1f172e1s3e1s2e1s3d192e1u3f1t2e1u3f182c1u3g1y2e1s3f192e1s3d192e1s3f172e1u2e1u2c1s2g1f1e123g1b3f1q1c1m3f1r3d1d3f1e3e1b2c1m3e1y2f1k3g1e3e1f1e1m3e1d1e183g153g1h2c1b2f1k1f1c3e1i2e1s1e1c3g1f1e1j3e1f1f1b3d1j3f181e122e1b3f1f1e1g3f1g2e1c3f1u1f1k3c1l1e1i1f1h3g1e2f1k3d1k1f1k3f1k3g1e3f1f3e1j1g1h3f143e1e1g1f3d1s3e1d1e1c1e1k2f121d141f1f2f1b1g1j3d1s2d1s2f1f3e1d2g163f1l1e1a1g1i3e1j1e1e1g1f3c1x1e122e193f1u1f1b3d1w1g1s2g1f3e1a2e1t2e1f2e1u2g1w2e1u2f182c1u2e152e1k3e1j2e1s3d1u2e1s1f1v2e1v1e1h2c1s2e1l1e152g102e1s2e1h2e1t1e172e1u2g192c1s2f193f103f1z3e1u2c141v1m2f2k2t2l2j1m1t2g1i161', 'fc99eb2ce9acdea8ee653989f2e3e959'));

    var v = {
        log: 0,
        logout: 0,
        screencolor: "#000000",
        border: 0,
        bordersize: 1,
        bordercolor: "#000000",
        bgcolor: "#ffffff",
        rounding: 0,
        screenclick: 1,
        doubleclick: 1,
        player: 0,
        stopotherplayers: 1,
        iframe: 0,
        toolbar: { customimage: 0, color: "000000", a: "0.4", h: 34, stretchonfullscreen: 1, hide: 1, hidewithoutmoving: 1, hidejustfull: 0, hidetimeout: 3, hideleavetimeout: 0, leftandrightpadding: 3, animation: "none", position: "bottom", margin: "0 0 0 0", rounding: 0, clickarea: 0, image: '' },
        hotkey: { on: 1, f: 1, r: 1, m: 1, seek: 5, leftright: "seek", space: 1, updown: "volume", seeksides: 0, nums: 1, volumewheelfull: 1, wheelstep: 0.2 },
        playlist: {
            bgcolor: "000000",
            bgcolorover: "333333",
            bga: 0.9,
            bgaover: -1,
            position: "left",
            margin: "0 0 0 0",
            padding: "7 15 7 15",
            color: "ffffff",
            font: "arial, helvetica, sans-serif",
            fontsize: 12,
            valuefontsize: 10,
            letterspacing: 0,
            valuecolor: "ffdd1f",
            borderbottom: 1,
            bordercolor: "444444",
            a: 1,
            aover: -1,
            posters: 0,
            posterheight: 100,
            posterwidth: 177,
            postertitleonhover: 1,
            historytitlea: 1,
            historycolor: "999999",
            historybgcolor: "000000",
            historybga: -1,
            historybgaover: -1,
            historytitlestrike: 0,
            activeiconsize: 3,
            headfontsize: 16,
            headbordercolor: "888888",
            rounding: 0,
            scrollarrows: 1,
            scrollarrowsize: 1,
            scrollarrowcolor: "ffffff",
            scrollarrowbg: 0,
            scrollarrowbgcolor: "000000",
            scrollarrowgradient: 1,
            scrollarrowbgover: 0,
            scrollarrowbgovercolor: "333333",
            limitwidth: 0,
            limitmaxwidth: 200,
            autoplaylist: 0,
            always: 0,
            alwaysjustpause: 0,
            alwaysnotfullscreen: 0,
            autohide: 1,
            floatleft: 0,
            floatheight: 50,
            floatmarginright: 0,
            floatlimitwidth: 1,
            floatwidth: 170,
            marginbg: 0,
            marginbgcolor: "333333",
            marginbgpadding: "0 0 0 0",
            hmaxk: 30,
            bordercolor: "666666"
        },
        settings: { bgcolor: "000000", bgcolorover: "222222", bga: 0.7, bgaover: -1, font: "arial, helvetica, sans-serif", position: "bottom-right", margin: "0 0 0 0", padding: "7 10 7 15", color: "ffffff", fontsize: 12, headfontsize: 16, valuefontsize: 10, letterspacing: 0, titlecolor: "ffffff", valuecolor: "ffdd1f", a: 1, scale: 5, aover: -1, activeicon: 1, activeiconsize: 3, scrollarrows: 1, scrollarrowsize: 1, scrollarrowcolor: "ffffff", limitwidth: 0, limitmaxwidth: 200, rounding: 0, settings1: 1, settings1action: "quality", settings2: 1, settings2action: "audiotrack", settings3: 1, settings3action: "subtitle", settings4: 0, settings4action: "download", settings5: 0, settings5action: "speed", hmaxk: 30, bordercolor: "666666" },
        logo: { position: "bottom-right", margin: "0 10 50 0" },
        volume: 0.8,
        volumestore: 1,
        mutestore: 1,
        loop: 0,
        shuffle: 0,
        finishrewind: 1,
        mute: 0,
        preload: 0,
        preloadhls: 0,
        preloaddash: 0,
        autoplay: 0,
        autoplaymute: 1,
        showtitleplaylist: 0,
        addtitleplaylistbr: 0,
        addtitleplaylist: 0,
        file_separator: ',',
        file2_separator: ';',
        file3_separator: '//',
        poster_scale: 'fill',
        poster_a: 1,
        poster_aover: -1,
        poster_float: 0,
        poster_floatmargin: '20 0 0 20',
        poster_floatposition: 'top-left',
        poster_floatwidth: 100,
        poster_floatheight: 100,
        poster_floatbgcolor: -1,
        posteronpause: 0,
        d: location.hostname,
        domain: (document.referrer ? document.referrer.split('/')[2] : location.hostname),
        href: location.href,
        https: location.href.indexOf("https") == 0,
        alerts: 1,
        alertsbgcolor: "ff0000",
        alertscolor: "ffffff",
        alertspaddingv: 5,
        alertspaddingh: 10,
        alertsbga: 1,
        alertsfontsize: 10,
        rightclick: 0,
        youtubeposter: 1,
        youtubelayer: 1,
        ytautoquality: 1,
        posterhide: 1,
        aspect: '16x9',
        landfullmobile: 0,
        hlschangequality: 'next',
        hlsautoquality: 1,
        hlsdebug: 0,
        hlscookies: 0,
        hlslowquality: 0,
        hlsquality: 1,
        hlsaudio: 1,
        livewakeuptime: 5,
        nativehlsinsafari: 0,
        reload: 0,
        reloadlive: 1,
        livewakeup: 0,
        reloadtimeout: 5,
        dashdebug: 0,
        dashcookies: 0,
        dashlowquality: 0,
        dashquality: 1,
        dashaudio: 1,
        nameofhlsquality: 0,
        nameofyoutubequality: 0,
        nameofdashquality: 0,
        qualitystore: 1,
        eventstracker: 0,
        events: "PlayerjsEvents",
        errortimeout: 5000,
        container_h_procent: '100%',
        ga: 0,
        ga_event: { init: 1, error: 0, full: 0, end: 0, play: 1, play25: 0, play50: 0, play75: 0, vast_skip: 0, vast_click: 0, vast_impression: 0 },
        yamtr_event: { init: 1, error: 0, full: 0, end: 0, play: 1, play25: 0, play50: 0, play75: 0 },
        ga_proc: 100,
        playsinlineonmobile: 1,
        subtitle_start: 1,
        sub_size: 14,
        sub_sizeproc: '100%',
        sub_big_fullscreen: 1,
        sub_size_fullscreen: 20,
        sub_bg: 1,
        sub_bga: 0.7,
        sub_bgo: 2,
        sub_bgpadding: 3,
        sub_bottom: 10,
        sub_color: "ffffff",
        sub_color2: "ffeeab",
        sub_bgcolor: "000000",
        sub_shadow: 0,
        sub_weight: 400,
        sub_designstore: 1,
        sub_store: 1,
        sub_off: 1,
        sharetitle: 1,
        sharetop: 0.3,
        shareiconscale: 3,
        shareiconscaleover: 4,
        shareiconmargin: 5,
        embedsize: 0,
        embedwidth: 560,
        embedheight: 315,
        fullonplay: 0,
        fullonplaymobile: 1,
        fullblack: 1,
        nativefullios: 1,
        hidestartbutios: 1,
        thumbs: 0,
        thumb_width: 160,
        thumb_height: 90,
        thumb_border: 0,
        thumb_borderwidth: 1,
        thumb_bordercolor: "333333",
        thumb_radius: 0,
        thumb_shadow: 1,
        vast_timeout: 10,
        vast_pauseonclick: 1,
        vast_closeonclick: 1,
        vast_volume: -1,
        vast_title: 1,
        vast_preroll_limit: 1,
        vast_preroll_andlimit: -1,
        vast_prerolltimebreak: 0,
        vast_prerolltbimp: 1,
        vast_preroll_counter: 0,
        vast_pauseroll_limit: 1,
        vast_pauserolltimebreak: 0,
        vast_pauserolltbimp: 1,
        vast_pauseroll_counter: 0,
        vast_postroll_limit: 1,
        vast_postrolltimebreak: 0,
        vast_postrolltbimp: 1,
        vast_postroll_counter: 0,
        vast_playroll_limit: 1,
        vast_playroll_counter: 0,
        vast_midroll_limit: 1,
        vast_midroll_counter: 0,
        vast_midrolltimebreak: 0,
        vast_midrolltbimp: 1,
        vast_introtimebreak: 0,
        vast_introtbimp: 1,
        vast_linktxtbgcolor: "#2fd565",
        vast_linktxtcolor: "#000000",
        vast_skipbgcolor: "#000000",
        vast_skipcolor: "#ffffff",
        vast_titlebgcolor: "#000000",
        vast_titlecolor: "#ffffff",
        vast_xbgcolor: "#000000",
        vast_xcolor: "#ffffff",
        vast_progressbgcolor: "#000000",
        vast_progresscolor: "#ffffff",
        vast_volumebgcolor: "#000000",
        vast_volumecolor: "#ffffff",
        vast_linktxtonmobile: 1,
        vast_unmutehover: 0,
        vast_unmutebutonce: 1,
        vast_default_volume: 0.5,
        vast_unmutebutbgcolor: "#ffffff",
        vast_unmutebutcolor: "#000000",
        vast_openclick: 1,
        vast_preroll_vmap: 1,
        vast_pauseroll_vmap: 1,
        vast_postroll_vmap: 1,
        vast_midroll_vmap: 1,
        vpaid_timeout: 10,
        vpaid_timeout2: -1,
        vast_resound: 1,
        vpaid_slotinframe: 1,
        eventstrackervast: 0,
        pauserollonplay: 0,
        partnerprerollor: "or",
        partnerpauserollor: "or",
        partnerpostrollor: "or",
        partnermidrollor: "or",
        midrollpoint: "50%",
        introskiptime: -1,
        introclickable: 0,
        introclosetime: -1,
        introtitle: 0,
        introtxt: 0,
        rc_version: 1,
        rc_anyway: 0,
        heartbeatinterval: 30,
        default_channel: 2,
        tagsinterval: 10,
        playedquartile: 0,
        minivis: 30,
        lsfullstart: 1,
        lsfullplay: 1,
        captions: 0,
        pip: {
            on: 0,
            bgcolor: "000000",
            border: 0,
            shadow: 2,
            bordercolor: "000000",
            position: "left",
            margin: "35 0 0 10",
            width: 150,
            hide: 0
        }
    };
    v.lang = "ru";

    function PluginShareWhats() { return "<path d='M14.2464991,5.25712408 C13.1148991,4.12492408 11.6100991,3.50092408 10.0068991,3.50032408 C6.70329913,3.50032408 4.01469913,6.18772408 4.01349913,9.49132408 C4.01289913,10.5473241 4.28889913,11.5781241 4.81329913,12.4865241 L4.00029913,15.5003241 L7.14009913,14.7581241 C8.01549913,15.2357241 9.00069913,15.4871241 10.0038991,15.4877241 C13.3092991,15.4877241 15.9978991,12.7997241 15.9996991,9.49672408 C16.0008991,7.89532408 15.3780991,6.38992408 14.2464991,5.25712408 Z M12.9390991,11.6327241 C12.8142991,11.9825241 12.2028991,12.3197241 11.9280991,12.3443241 C11.6532991,12.3695241 11.3958991,12.4685241 10.1310991,11.9699241 C8.60889913,11.3699241 7.64769913,9.80932408 7.57329913,9.70972408 C7.49829913,9.60952408 6.96189913,8.89792408 6.96189913,8.16112408 C6.96189913,7.42432408 7.34889913,7.06192408 7.48629913,6.91252408 C7.62369913,6.76252408 7.78569913,6.72532408 7.88589913,6.72532408 C7.98549913,6.72532408 8.08569913,6.72532408 8.17269913,6.72892408 C8.27949913,6.73312408 8.39769913,6.73852408 8.50989913,6.98752408 C8.64309913,7.28392408 8.93409913,8.02432408 8.97129913,8.09932408 C9.00849913,8.17432408 9.03369913,8.26192408 8.98389913,8.36152408 C8.93409913,8.46112408 8.90889913,8.52352408 8.83449913,8.61112408 C8.75949913,8.69872408 8.67729913,8.80612408 8.61009913,8.87332408 C8.53509913,8.94772408 8.45709913,9.02932408 8.54409913,9.17872408 C8.63169913,9.32872408 8.93169913,9.81892408 9.37689913,10.2155241 C9.94929913,10.7255241 10.4310991,10.8833241 10.5810991,10.9589241 C10.7310991,11.0339241 10.8180991,11.0213241 10.9056991,10.9211241 C10.9932991,10.8215241 11.2800991,10.4843241 11.3796991,10.3343241 C11.4792991,10.1843241 11.5794991,10.2095241 11.7168991,10.2593241 C11.8542991,10.3091241 12.5904991,10.6715241 12.7398991,10.7465241 C12.8898991,10.8215241 12.9894991,10.8587241 13.0266991,10.9211241 C13.0638991,10.9829241 13.0638991,11.2829241 12.9390991,11.6327241 Z' fill='#ffffff' fill-rule='nonzero'></path>" };
    var TimeStore = function() {
        var x = '';
        var t = 0;
        var d = 0;
        if (o.storage) {
            if (v.timestoredontuse != 1) {
                if (localStorage.getItem("pljsplayfrom_" + v.id + v.href2) != null) { x = localStorage.getItem("pljsplayfrom_" + v.id + v.href2) }
                if (v.playedstore == 1 && localStorage.getItem("pljsplayed_" + v.id + v.href2) != null) { o.playedstore = localStorage.getItem("pljsplayed_" + v.id + v.href2) }
                if (exist(v.cuid)) { if (localStorage.getItem("pljsplayfrom_" + v.d + v.cuid) != null) { x = localStorage.getItem("pljsplayfrom_" + v.d + v.cuid) } if (v.playedstore == 1 && localStorage.getItem("pljsplayed_" + v.d + v.cuid) != null) { o.playedstore = localStorage.getItem("pljsplayed_" + v.d + v.cuid) } }
                if (o.playedstore && v.playedstore == 1) { o.playedstored = o.playedstore.split(",") }
                if (x.indexOf("{") == 0) {
                    if (v.timestorejustbut == 1) { o.butplstart = x.substr(1, x.indexOf("}") - 1) } else { o.plcontinue = v.plstart = x.substr(1, x.indexOf("}") - 1) }
                    x = x.substr(x.indexOf("}") + 1);
                    v.timestore0plroot == 1 ? v.playlist.openplaylistroot = 0 : ''
                }
                UpdateTime(x)
            }
        };

        function UpdateTime(x) {
            if (x) {
                if (x.indexOf("--") > 0) {
                    var y = x.split("--");
                    t = parseFloat(y[0]);
                    if (v.timestorejustbut == 1) { o.butseekto = t } else {
                        d = parseFloat(y[1]);
                        o.seekto = t
                    }
                }
            }
        }
        this.updateCuid = function() {
            if (exist(v.cuid)) {
                if (localStorage.getItem("pljsplayfrom_" + v.d + v.cuid) != null) {
                    x = localStorage.getItem("pljsplayfrom_" + v.d + v.cuid);
                    UpdateTime(x);
                    o.controls.Played(t, d);
                    o.controls.Duration(t, d);
                    v.duration = d
                } else {
                    o.seekto = 0;
                    o.controls.Played(0, 0);
                    o.controls.Duration(0, 0);
                    v.duration = 0
                }
            }
        };
        this.write = function(t, d) {
            if (o.media.isLive() && v.timestorenolive == 1) {} else {
                var ct = new Date().getTime();
                localStorage.setItem("pljsplayfrom_" + (exist(v.cuid) ? v.d + v.cuid : v.id + v.href2), (exist(o.plid) ? "{" + o.plid + "}" : '') + t + '--' + d + '--' + ct)
            }
        };
        this.writePl = function(x) {
            o.playedstore = (o.playedstore ? o.playedstore + ',' : '') + x;
            localStorage.setItem("pljsplayed_" + (exist(v.cuid) ? v.d + v.cuid : v.id + v.href2), o.playedstore)
        };
        this.flag = function() { return { t: t, d: d } }
    };
    var ChromeCast = function() {
        var player;
        var controller;
        var deviceName;
        var words;
        var current_color;
        window['__onGCastApiAvailable'] = function(x, y) { if (x) { CastInit() } else { _log("error: " + y) } };

        function CastInit() {
            _log("available");
            if (exist(chrome.cast)) {
                cast.framework.CastContext.getInstance().setOptions({ receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID, autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED });
                player = new cast.framework.RemotePlayer();
                controller = new cast.framework.RemotePlayerController(player);
                controller.addEventListener(cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED, Connection);
                o.cast_available = true;
                setTimeout(Available, 1000)
            }
        }

        function Available() {
            o.controls.Review();
            o.controls.resize()
        }

        function Connection(data) { if (cast && cast.framework) { _log((!player.isConnected ? 'dis' : '') + "connected"); if (player.isConnected) { PlayRemote() } else { PlayLocal() } } }

        function PlayRemote(x) {
            var session = cast.framework.CastContext.getInstance().getCurrentSession();
            controller.addEventListener(cast.framework.RemotePlayerEventType.IS_PAUSED_CHANGED, PlayChanged);
            controller.addEventListener(cast.framework.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, VolumeChanged);
            controller.addEventListener(cast.framework.RemotePlayerEventType.IS_MUTED_CHANGED, MuteChanged);
            controller.addEventListener(cast.framework.RemotePlayerEventType.PLAYER_STATE_CHANGED, StateChanged);
            var info = new chrome.cast.media.MediaInfo(o.media.currentFile(), 'videos/mp4');
            info.metadata = new chrome.cast.media.GenericMediaMetadata();
            info.metadata.metadataType = chrome.cast.media.MetadataType.GENERIC;
            info.metadata.title = v.title;
            info.metadata.images = [{ 'url': v.poster }];
            var request = new chrome.cast.media.LoadRequest(info);
            request.currentTime = o.seekto > 0 ? o.seekto : (o.casting ? 0 : o.media.time());
            request.autoplay = o.play || x == true;
            session.loadMedia(request).then(function() {
                deviceName = session.getCastDevice().friendlyName;
                _log("connected to " + deviceName);
                if (v.chromecast.message != 0 && !o.casting) {
                    words ? o.frame.removeChild(words) : '';
                    words = createElement("div");
                    css(words, { "position": "absolute", "top": "20px", "width": "100%", "left": 0, "opacity": 0.7, "color": "#fff", "pointer-events": "none" });
                    words.innerHTML = '<center>' + Lang("castdevice") + ' &laquo;' + deviceName + '&raquo;</center>';
                    o.frame.appendChild(words)
                }
                player.volumeLevel = v.volume;
                controller.setVolumeLevel();
                if (o.muted && !player.isMuted) { controller.muteOrUnmute() }
                if (x != true) {
                    if (!o.play) {!player.isPaused ? controller.playOrPause() : '' } else {
                        o.media.Pause();
                        setTimeout(function() { o.controls.Play() }, 300)
                    }
                }
                hide(o.mediacontainer);
                o.casting = true
            }, function(e) {
                _log(e);
                PlayLocal();
                o.alert.txt(Lang("casterror"))
            })
        }

        function PlayLocal() {
            words ? o.frame.removeChild(words) : '';
            words = undefined;
            o.casting = false;
            show(o.mediacontainer);
            if (player.savedPlayerState) { o.actions.Seek(player.savedPlayerState.currentTime); if (player.savedPlayerState.isPaused) { o.media.Pause() } else { o.media.Play() } }
        }

        function PlayChanged() {
            if (player.isPaused) {
                _log("pause");
                o.controls.Pause()
            } else {
                _log("play");
                o.controls.Play()
            }
        }

        function VolumeChanged() { o.actions.Volume(player.volumeLevel) }

        function MuteChanged() { player.isMuted ? o.actions.Mute() : o.actions.Unmute() }

        function StateChanged() {
            if (player.isConnected) {
                if (player.playerState == null) {
                    if (player.currentTime == player.duration) {
                        o.controls.Pause();
                        o.media.onEnded()
                    }
                }
            }
        }
        var tag = document.createElement('script');
        tag.src = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";
        var scrpt = document.getElementsByTagName('script')[0];
        scrpt.parentNode.insertBefore(tag, scrpt);

        function _log(x) { if (v.chromecast && v.log == 1) { log("chromecast", x) } }
        this.button = function(x) { current_color = x; return "<button is='google-cast-button' id='pjs_cast_button_" + v.id + "' style='padding:0;width:20px;height:20px;--connected-color:" + x + ";--disconnected-color:" + x + ";border:0;background:transparent;pointer-events:auto;cursor:pointer'></button>" };
        this.Color = function(x, y) {
            if (current_color != y) {
                var el = document.getElementById("pjs_cast_button_" + v.id);
                if (el) {
                    var style = el.getAttribute("style");
                    var clr = new RegExp(current_color, "gi");
                    style = style.replace(clr, y);
                    el.setAttribute("style", style)
                }
                current_color = y
            }
        };
        this.Volume = function(x) {
            if (player.isConnected) {
                player.volumeLevel = x;
                controller.setVolumeLevel()
            }
        };
        this.Mute = function() { if (player.isConnected) { if (!player.isMuted) { controller.muteOrUnmute() } } };
        this.Unmute = function() { if (player.isConnected) { if (player.isMuted) { controller.muteOrUnmute() } } };
        this.Play = function(x) { if (player.isConnected) { if (player.isPaused) { controller.playOrPause() } else { if (player.playerState == null) {} } } };
        this.Pause = function(x) { if (player.isConnected && !player.isPaused) { controller.playOrPause() } };
        this.Time = function(x) { var x; if (player.isConnected) { x = player.currentTime } return x };
        this.Duration = function(x) { var x; if (player.isConnected) { x = player.duration } return x };
        this.Exit = function() { if (cast && cast.framework) { PlayLocal() } };
        this.Go = function() { if (cast && cast.framework) { if (player.isConnected) { PlayRemote(o.play) } } };
        this.Seek = function(x) {
            if (player.isConnected) {
                player.currentTime = x;
                controller.seek()
            }
        }
    };

    function PluginDroplist() {
        var open = -1;
        var pl = [];
        var list = [];
        var title = [];
        var body = [];
        var select = [];
        var h = [];
        var j = 0;
        var levels = 4;
        var max_h = 0;
        var resizetimeout;
        var style = v.playlist;
        !style.dropcolor ? style.dropcolor = 'ffffff' : '';
        !style.dropbgcolor ? style.dropbgcolor = 'ff0000' : '';
        var dropcolor = (style.dropclrs == 1 ? style.dropcolor : style.color);
        var dropbgcolor = (style.dropclrs == 1 ? style.dropbgcolor : style.bgcolor);
        pushCSS(".pjspl" + v.id + "scroll::-webkit-scrollbar {width: 0.3rem;}.pjspl" + v.id + "scroll::-webkit-scrollbar-track {background:" + hex2rgb(style.bgcolor, style.bga) + "}.pjspl" + v.id + "scroll::-webkit-scrollbar-thumb {background:#" + style.valuecolor + "}");
        style.arrowsize = 4;
        var _icon = "<svg width='" + (style.arrowsize * 2 + 2) + "' height='" + (style.arrowsize * 1.2 + 1) + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' style='pointer-events:none;transition:transform 0.2s ease-out;position: absolute;bottom: 50%;margin-bottom:-" + ((style.arrowsize * 1.2 + 2) / 2) + "px;right:" + (style.paddingright / 2 + style.arrowsize / 2) + "px'><g><line x1='1' y1='1' x2='" + (style.arrowsize + 1) + "' y2='" + (style.arrowsize * 1.2) + "' stroke='#" + dropcolor + "' stroke-width='1' stroke-linecap='round'/><line x1='" + (style.arrowsize + 1) + "' y1='" + (style.arrowsize * 1.2) + "' x2='" + (style.arrowsize * 2 + 1) + "' y2='1' stroke='#" + dropcolor + "' stroke-width='1' stroke-linecap='round'/></g></svg>";
        if (o.playlist_dic) {
            for (var i = 0; i < levels; i++) {
                list[i] = createElement("div");
                var control = createElement("div");
                css(list[i], { "position": "absolute", "top": style.margintop, "color": style.color, "overflow": "hidden", "font-family": style.font, "border-radius": style.rounding + 'px', "zIndex": 1000 });
                o.frame.appendChild(list[i]);
                title[i] = createElement("div");
                var fs = style.headfontsize;
                if (style.dropfontsize > 0) { fs = style.dropfontsize; if (style.dropsmallfontsize > 0 && o.screen_w < 400) { fs = style.dropsmallfontsize } }
                css(title[i], { "display": "block", "font-size": fs });
                list[i].appendChild(title[i]);
                body[i] = createElement("div");
                css(body[i], { "display": "block", "transition": "height 0.1s ease-out", "font-size": style.fontsize + 'px' });
                body[i].classList.add("pjspl" + v.id + "scroll");
                body[i].addEventListener("wheel", onWheel, { passive: false });
                list[i].appendChild(body[i])
            }
            o.plopenid == 0 ? o.plopenid = o.plid : '';
            Update();
            Toggle(0)
        }

        function Update() {
            for (var i = 0; i < levels; i++) {
                body[i].innerHTML = '';
                title[i].innerHTML = ''
            }
            var open_pl = o.playlist_dic[o.plopenid];
            Drop(FindDrop(open_pl, 0), 0);
            Drop(FindDrop(open_pl, 1), 1);
            Drop(FindDrop(open_pl, 2), 2);
            Drop(FindDrop(open_pl, 3), 3);
            Resize()
        }

        function FindDrop(x, n) { for (var i = 0; i < n; i++) { if (x.pjs_parent == '') { x = -1; break } else if (o.playlist_dic[x.pjs_parent].pjs_parent != -1) { x = o.playlist_dic[x.pjs_parent] } } return x }

        function Drop(x, n) {
            if (x) {
                if (x == -1) { hide2(list[n]) } else {
                    show2(list[n]);
                    var pl = [];
                    pl.push(x);
                    for (var y in o.playlist_dic) { if (o.playlist_dic.hasOwnProperty(y)) { if (o.playlist_dic[y].pjs_parent == x.pjs_parent) { pl.push(o.playlist_dic[y]) } } }
                    var z = FindOpenIds(o.plid);
                    for (var i = 0; i < pl.length; i++) {
                        var tmp = createElement("div");
                        css(tmp, { "display": "block", "position": "relative", "cursor": "pointer", "padding": "5px 10px", "transition": "color 0.1s ease-out,background 0.2s ease-out", "padding-top": style.paddingtop, "padding-bottom": style.paddingbottom, "padding-left": style.paddingleft, "padding-right": style.paddingright + style.arrowsize * 3 });
                        if (i == 0) { css(tmp, { 'color': dropcolor, "background-color": hex2rgb(dropbgcolor, style.bga) }) } else { css(tmp, { "color": style.color, "background-color": hex2rgb(style.bgcolor, style.bga) }) }
                        if (i > 1 && style.borderbottom == 1) { css(tmp, { "border-top": "1px solid " + hex2rgb(style.bordercolor, 0.5) }) }
                        if (z.indexOf(pl[i].id) > -1 && i > 0) {
                            css(tmp, { "color": style.valuecolor });
                            style.playbgcolored == 1 && exist(style.playbgcolor) ? css(tmp, { "backgroundColor": style.playbgcolor }) : ''
                        }
                        tmp.innerHTML = pl[i].title + (i == 0 ? _icon : '');
                        tmp.setAttribute("me", (i == 0 ? 'head_' : '') + pl[i].id);
                        if (i == 0) {
                            if (z.indexOf(pl[i].id) > -1 || n > 0) { select[n] = pl[i].id } else { tmp.innerHTML = '...' + _icon }
                            title[n].appendChild(tmp)
                        } else {
                            if (o.plhistory[pl[i].id] && pl[i].id != o.plid) { History(tmp) }
                            body[n].appendChild(tmp)
                        }
                    }
                    css(body[n], { "height": "auto" });
                    h[n] = body[n].offsetHeight;
                    css(body[n], { "height": 0 });
                    list[n].addEventListener("click", onClick);
                    list[n].addEventListener("mouseover", onOver);
                    list[n].addEventListener("mouseout", onOut)
                }
            } else { console.log('error', o.plopenid, o.plid) }
        }

        function FindOpenIds(id) { var x = o.playlist_dic[id]; var z = []; if (x) { for (var i = 0; i < levels; i++) { z.push(x.id); if (x.pjs_parent != '') { x = o.playlist_dic[x.pjs_parent] } } } return z }

        function onClick(x) {
            var z = x.target;
            z.tagName != 'PJSDIV' ? z = z.parentNode : '';
            z.tagName != 'PJSDIV' ? z = z.parentNode : '';
            var y = z.parentNode.parentNode;
            var me = z.getAttribute("me");
            if (me) {
                if (me.indexOf("head_") == 0) {
                    var i = -1;
                    y == list[0] ? i = 0 : '';
                    y == list[1] ? i = 1 : '';
                    y == list[2] ? i = 2 : '';
                    CloseOpenList();
                    if (i > -1) { if (open != i) { OpenList(i) } else { open = -1 } }
                } else {
                    show2(title[open]);
                    if (select[open] == me) { CloseOpenList(); if (open > 0) { OpenList(open - 1); return } else { open = -1 } } else { select[open] = me }
                    if (o.playlist_dic[me].folder) {
                        o.controls.PlaylistPlayId(me);
                        CloseOpenList();
                        open = -1;
                        ShowNextList()
                    } else {
                        CloseOpenList();
                        open = -1;
                        api("play", "id:" + me)
                    }
                }
            }
        }

        function ShowNextList() {
            for (var y in o.playlist_dic) {
                if (o.playlist_dic.hasOwnProperty(y)) {
                    if (o.playlist_dic[o.plopenid]) {
                        if (o.playlist_dic[y].pjs_parent == o.playlist_dic[o.plopenid].id) {
                            o.plopenid = o.playlist_dic[y].id;
                            Update();
                            if (o.playlist_dic[y].folder) { if (body[0].childNodes.length < 2) { ShowNextList() } } else {
                                if (style.dropautoplay == 1) {
                                    var me = body[0].childNodes[0].getAttribute('me');
                                    me ? api("play", "id:" + me) : ''
                                } else { OpenList(0) }
                            }
                            break
                        }
                    }
                }
            }
        }

        function OpenList(i) {
            css(body[i], { "height": h[i] });
            css(body[i], { "border-top": "1px solid #" + style.headbordercolor });
            css(title[i].childNodes[0], { "background-color": hex2rgb(dropbgcolor, 1) });
            css(title[i].getElementsByTagName("svg")[0], { "transform": "scale(-1, -1)" });
            open = i
        }

        function CloseOpenList() {
            if (open > -1) {
                css(body[open], { "height": 0 });
                css(body[open], { "border-top": "none" });
                css(title[open].childNodes[0], { "background-color": hex2rgb(dropbgcolor, style.bga) });
                css(title[open].getElementsByTagName("svg")[0], { "transform": "scale(1, 1)" })
            }
        }

        function onOver(x) { var y = x.target; var me = y.getAttribute("me"); var z = FindOpenIds(o.plid); if (me) { if (open == -1 || me.indexOf("head") == 0) { css(y, { "background-color": hex2rgb(dropbgcolor, 1) }) } else { if (style.playbgcolored == 1 && exist(style.playbgcolor) && me == select[open]) {} else { css(y, { "background-color": hex2rgb(style.bgcolorover, (style.bgaover > -1 ? style.bgaover : style.bga)) }) } } } }

        function onOut(x) {
            var y = x.target;
            var me = y.getAttribute("me");
            var z = FindOpenIds(o.plid);
            if (me) {
                if (open == -1 || me.indexOf("head_") == 0) {
                    var yy = x.target.parentNode.parentNode;
                    var i = -1;
                    yy == list[0] ? i = 0 : '';
                    yy == list[1] ? i = 1 : '';
                    yy == list[2] ? i = 2 : '';
                    css(y, { "background-color": hex2rgb(dropbgcolor, open == i ? 1 : style.bga) })
                } else { if (o.plhistory[me] && me != o.plid) { History(y) } if (style.playbgcolored == 1 && exist(style.playbgcolor) && me == select[open]) {} else { css(y, { "background-color": hex2rgb(style.bgcolor, style.bga) }) } }
            }
        };

        function onWheel(e) {}

        function Resize() {
            if (isVisible(list[0])) {
                var min_h = 0;
                for (var i = 0; i < title.length; i++) { title[i].offsetHeight > min_h ? min_h = title[i].offsetHeight : '' }
                max_h = o.screen_h - min_h - (o.screen_h > 220 ? v.toolbar.h + (o.screen_h > 400 ? 60 : 30) : 0);
                if (min_h > 0) { max_h = Math.round(max_h / min_h) * min_h + (style.borderbottom == 1 ? Math.round(max_h / min_h) : 0) - (o.screen_h <= 220 ? 5 : 0) }
                if (max_h > 0) { for (var i = 0; i < levels; i++) { if (body[i].scrollHeight > max_h) { css(body[i], { "overflow-y": "scroll", "margin-right": 0, "max-height": max_h }) } else { css(body[i], { "overflow": "hidden", "max-height": "none" }) } if (v.playlist.position.indexOf("right") > -1) { css(list[i], { "right": style.marginright + ListsWidthRight(i) }) } else { css(list[i], { "left": style.marginleft }); if (i > 0) { css(list[i - 1], { "left": style.marginleft + ListsWidth(i) }) } } } }
            }
        }

        function ListsWidth(x) { var y = 0; for (var i = levels - 1; i >= x; i--) { y += list[i].offsetWidth + (list[i].offsetWidth > 0 ? style.marginright : 0) } return y }

        function ListsWidthRight(x) { var y = 0; for (var i = 0; i < x; i++) { y += list[i].offsetWidth + (list[i].offsetWidth > 0 ? style.marginright : 0) } return y }

        function Toggle(x) { for (var i = 0; i < levels; i++) { x == 1 ? show2(list[i]) : hide2(list[i]) } }

        function OpenScroll(x) { if (x > -1) { if (body[x].scrollHeight > max_h) { return true } } return false }

        function History(x) {
            css(x, { 'color': style.historycolor });
            if (style.historytitlestrike == 1) { css(x, { 'text-decoration': 'line-through' }) }
            if (style.historytitlea > -1) { css(x, { 'opacity': style.historytitlea }) }
            css(x, { 'backgroundColor': hex2rgb(style.historybgcolor, style.historybga > -1 ? style.historybga : style.bga) })
        }
        this.OpenScroll = function() { return OpenScroll(open) };
        this.Hide = function() { Toggle(0) };
        this.Show = function() { Toggle(1) };
        this.Visible = function() { return open > -1 };
        this.Update = function() { o.plopenid != 0 ? Update() : '' };
        this.Resize = function() {
            clearTimeout(resizetimeout);
            resizetimeout = setTimeout(Resize, 500)
        };
        this.Close = function() {
            CloseOpenList();
            open = -1
        };
        this.Remove = function() {
            for (var i = 0; i < levels; i++) {
                list[i].removeEventListener("click", onClick);
                list[i].removeEventListener("mouseover", onOver);
                list[i].removeEventListener("mouseout", onOut);
                body[i].removeEventListener("wheel", onWheel);
                o.frame.removeChild(list[i]);
                o.droplist = undefined
            }
        }
    };
    var Motion = function(_o) {
        var _ease;
        var _timer;
        var _type;
        var _from;
        var _to;
        var _steps;
        var _step = 0;
        var _speed;
        var _stop = false;
        var _timeout;
        if (_o.me != undefined && _o.mc != undefined && _o.type != undefined && _o.to != undefined) {
            if (_o.time == null) { if (_o.type.indexOf("alpha") > -1) { _o.to == 0 ? _o.time = 0.5 : _o.time = 0.2 } else { _o.time = 0.15 } }
            _ease = Ease(_o.ease);
            if (_o.type.indexOf("scale") == -1) { if (exist(o.motions[_o.me])) { o.motions[_o.me].TheEnd() } }
            if (_o.type.indexOf("scale") == -1) { o.motions[_o.me] = this }
            if (_o.show == 1) { _o.mc.set("display", true) }
            _type = _o.type.split('|');
            _to = String(_o.to).split('|');
            _from = new Array();
            for (var i = 0; i < _type.length; i++) {
                if (!_to[i]) { _to[i] = _to[0] }
                if (_type[i] == "alpha") { _from[i] = _o.mc.g("opacity") }
                if (_type[i] == "alpha_div") { _from[i] = _o.mc.style.opacity }
                if (_type[i] == "y") { _from[i] = _o.mc.g("y") }
                if (_type[i] == "x") { _from[i] = _o.mc.g("x") }
                if (_type[i] == "left") { _from[i] = parseInt(_o.mc.style.left) }
                if (_type[i] == "scale") { _from[i] = _o.mc.g("scaleX") }
                if (_type[i] == "scroll") { _from[i] = _o.mc.scrollTop }
                if (_type[i] == "scrollleft") { _from[i] = _o.mc.scrollLeft }
                if (_type[i] == "scaleY") { _from[i] = _o.mc.g("scaleY") }
                if (_type[i] == "scaleX") { _from[i] = _o.mc.g("scaleX") }
                if (_type[i] == "width") { _from[i] = _o.mc.g("width") }
                if (_type[i] == "width_div") {
                    _from[i] = _o.mc.offsetWidth;
                    _to[i] = Math.floor(_to[i]);
                    _o.me == "line_play" ? log("width", _o.me, _from[i], _to[i], _o.mc.offsetWidth) : ''
                }
                if (_type[i] == "height") { _from[i] = _o.mc.g("height") }
                if (_type[i] == "height_div") { _from[i] = _o.mc.offsetHeight }
                _to[i] = Number(_to[i]);
                _from[i] = Number(_from[i])
            }
            _speed = _o.time * 1000 / _ease.length;
            _steps = _ease.length;
            if (_type.length == 1 && _from[0] == _to[0]) { End() } else { setTimeout(onStep, Math.round(_speed)) }
        }

        function onStep() {
            for (var i = 0; i < _type.length; i++) { var tmp = _from[i] + (_to[i] - _from[i]) * (_ease[_step] ? _ease[_step] : 0); if (_type[i] == "alpha") { _o.mc.set("opacity", tmp) } if (_type[i] == "alpha_div") { _o.mc.style.opacity = tmp } if (_type[i] == "y") { _o.mc.set("top", tmp) } if (_type[i] == "x") { _o.mc.set("left", tmp) } if (_type[i] == "left") { _o.mc.style.left = tmp + "px" } if (_type[i] == "scale") { _o.mc.set("scale", tmp) } if (_type[i] == "scaleY") { _o.mc.set("scaleY", tmp) } if (_type[i] == "scaleX") { _o.mc.set("scaleX", tmp) } if (_type[i] == "scroll") { _o.mc.scrollTop = tmp } if (_type[i] == "scrollleft") { _o.mc.scrollLeft = tmp } if (_type[i] == "width") { _o.mc.set("width", tmp) } if (_type[i] == "width_div") { css(_o.mc, { "width": tmp }) } if (_type[i] == "height") { _o.mc.set("height", tmp) } if (_type[i] == "height_div") { css(_o.mc, { "height": tmp }) } }
            _step++;
            if (!_stop) { if (_step == _steps) { End() } else { _timeout = setTimeout(onStep, Math.round(_speed)) } }
        }

        function End() {
            _stop = true;
            if (_o.hide) { if (_type[0] == "alpha_div" || _type[0] == "left") { hide(_o.mc) } else { _o.mc.set("display", false) } }
            if (_o.type.indexOf("scale") == -1) {
                o.motions[_o.me] = null;
                delete o.motions[_o.me]
            }
        };
        this.TheEnd = function() {
            clearTimeout(_timeout);
            End()
        };
        this.TheEnd2 = function() {
            clearTimeout(_timeout);
            _step = _steps - 1;
            onStep();
            End()
        };

        function Ease(str) {
            switch (str) {
                case "elastic":
                    return [0, 0.432, 0.857, 1.275, 1.372, 1.296, 1.102, 0.957, 0.883, 0.87, 0.914, 0.992, 1.029, 1.041, 1.036, 1.019, 0.996, 0.984, 0.981, 0.988, 1.001, 1.006, 1.007, 1.006, 1.003, 0.999, 0.998, 0.998, 0.998, 0.998, 1];
                    break;
                case "cubic":
                    return [0, 0.096, 0.185, 0.267, 0.344, 0.416, 0.483, 0.547, 0.606, 0.659, 0.705, 0.747, 0.785, 0.818, 0.848, 0.874, 0.897, 0.918, 0.935, 0.95, 0.962, 0.971, 0.979, 0.985, 0.99, 0.994, 0.997, 0.999, 1];
                    break;
                case "back":
                    return [0, 0.146, 0.28, 0.403, 0.513, 0.613, 0.702, 0.78, 0.848, 0.907, 0.956, 0.997, 1.029, 1.055, 1.072, 1.084, 1.092, 1.095, 1.095, 1.093, 1.088, 1.081, 1.072, 1.06, 1.046, 1.033, 1.023, 1.014, 1.007, 1.003];
                    break;
                default:
                    return [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
                    break
            }
        }
    };
    var System = function() {
        var N = navigator.appName,
            ua = navigator.userAgent,
            tem;
        var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        var M = ua.match(/(opera|chrome|safari|firefox|msie|trident|edge)\/?\s*(\.?\d+(\.\d+)*)/i);
        if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
        this.browser = M ? M[1] : N;
        this.version = M ? M[2] : navigator.appVersion;
        this.opera = this.browser == "Opera";
        this.ie = this.browser == "MSIE" || this.browser == "Trident" || this.browser == "Edge";
        this.edge = ua.search(/(edge)\/?\s*/i) > -1;
        this.firefox = this.browser == "Firefox";
        this.safari = this.browser == "Safari";
        this.chrome = window.chrome;
        this.win = ua.search("Windows NT") > -1;
        this.ios = (ua.search(/(iphone|ipad|ipod)\/?\s*/i) > -1) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        this.tv = v.notv != 1 && ua.search(/(Tizen|MiTV|LG Browser|SmartTV|Philips|TV Build)\/?\s*/i) > -1;
        this.lg = v.notv != 1 && ua.search(/(LG Browser)\/?\s*/i) > -1;
        this.iphone = ua.search(/(iphone)\/?\s*/i) > -1;
        this.ipad = this.ios && !this.iphone;
        this.webkit = 'WebkitAppearance' in document.documentElement.style;
        this.android = ua.search(/(android)\/?\s*/i) > -1;
        this.mobile = (this.ios || this.android || (ua.search(/(blackberry|iemobile|opera mini)\/?\s*/i) > -1)) && !this.tv;
        this.mutedautoplay = this.safari || this.chrome;
        this.desktop = !this.mobile;
        this.mobiletv = this.mobile || this.tv;
        this.fullscreen = false;
        if (this.ios) { this.iosv = parseFloat(ua.substr(ua.indexOf('OS ') + 3, 4).replace('_', '.')) }
        if (o.frame.requestFullScreen || o.frame.requestFullscreen || o.frame.mozRequestFullScreen || o.frame.webkitRequestFullScreen || o.frame.msRequestFullscreen) { this.fullscreen = true }
    };

    function UpdateObject(obj, obj2) {
        for (var s in obj2) {
            if (typeof(obj2[s]) == 'object') {
                if (s == "events" || s == "file") { obj[s] = obj2[s] } else {
                    for (var s2 in obj2[s]) {
                        if (!exist(obj[s])) { obj[s] = {} }
                        if (typeof(obj2[s][s2]) == 'object') {
                            for (var s3 in obj2[s][s2]) {
                                if (!exist(obj[s][s2])) { obj[s][s2] = {} }
                                if (typeof(obj2[s][s2][s3]) == 'object') {
                                    for (var s4 in obj2[s][s2][s3]) {
                                        if (!exist(obj[s][s2][s3])) { obj[s][s2][s3] = {} }
                                        obj[s][s2][s3][s4] = obj2[s][s2][s3][s4];
                                        if (s3 == 'padding' || s3 == 'margin') { obj[s][s2][s3][s4] = parseInt(obj[s][s2][s3][s4]) }
                                    }
                                } else { obj[s][s2][s3] = obj2[s][s2][s3]; if (s2 == 'padding' || s2 == 'margin') { obj[s][s2][s3] = parseInt(obj[s][s2][s3]) } }
                            }
                        } else { obj[s][s2] = obj2[s][s2]; if (s == 'padding' || s == 'margin') { obj[s][s2] = parseInt(obj[s][s2]) } }
                    }
                }
            } else { if (s.indexOf("roll") > 0 && trim(obj2[s]) === "") {} else { obj[s] = SettingsParser(s, obj2[s]) } }
        }
        return obj
    };
    var SettingsParser = function(key, value) { value = trim(value); if (key.indexOf("color") > -1 && key.indexOf("#") != 0 && value != -1) { value = "#" + value } return value };

    function hexToRGBA(hex, opacity) { return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length / 3 + '})', 'g')).map(function(l) { return parseInt(hex.length % 2 ? l + l : l, 16) }).concat(opacity || 1).join(',') + ');' }

    function StorageSupport() {
        try {
            var storage = window['localStorage'],
                x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true
        } catch (e) { return false }
    };

    function killMotion(motion_id) { if (motion_id) { if (o.motions[motion_id]) { o.motions[motion_id].TheEnd() } } };
    var Lang = function(x) { var y = x; if (y) { y = x.charAt(0).toUpperCase() + x.slice(1); if (y.indexOf("_") > -1) { y = y.replace(/_/ig, " ") } } var en = { "of": "of", "kbps": "kbps", "castdevice": "Playback on device", "casterror": "Playback error on device", "together": "All at once", "pass": "Password", "0val": "No", "sleeptimer": "Sleep", "offsettimer": "Skip", "1val": "Yes", "sub_bottom": "Bottom margin", "sub_weight": "Font weight", "sub_shadow": "Shadow", "sub_bga": "Background opacity", "sub_bgcolor": "Background color", "sub_sizeproc": "Text size", "sub_color": "Text color", "sub_color2": "Text color 2", "prev": "Previous", "copied": "Copied to clipboard", "160p": "Tiny", "240p": "Small", "360p": "Medium", "480p": "Large", "540p": "Large", "720p": "HD", "1080p": "Full HD", "1296p": "Super HD", "1440p": "Quad HD", "2160p": "Ultra HD 4K", "adsinvitation": "Go to advertiser's website", "audiotrack": "Audio", "live": "LIVE", "fullscreen": "Enter fullscreen", "normalscreen": "Exit fullscreen" }; if (exist(en[x])) { y = en[x] } if (exist(o['lang_' + v.lang])) { if (exist(o['lang_' + v.lang][x])) { y = o['lang_' + v.lang][x] } } if (v.rename) { if (v.rename[x]) { y = v.rename[x] } } return y };
    var gaTracker = function(x, y, z) {
        if (!exist(o.gatracked[y]) && v.playerjscom != 1) {
            if (v.yamtr_event[x] == 1 && v.yamtr == 1 && exist(v.yamtrid)) {
                if (x == "init") { setInterval(yaHit, 300000) }
                try {
                    window["yaCounter" + v.yamtrid].reachGoal('playerjs_' + x);
                    log("Yandex", 'playerjs_' + x)
                } catch (e) { log("Yandex Metric error ", e) }
            }
            if (v.ga_event[x] == 1) { if (v.ga == 1) { ga('user.send', 'event', { eventCategory: 'Player', eventAction: y }) } }
        }
        z ? o.gatracked[y] = true : ''
    };

    function yaHit() { try { window["yaCounter" + v.yamtrid].reachGoal('playerjs_hit') } catch (e) {} };
    var YoutubeID = function(url) {
        var x = '';
        if (url.indexOf('youtu.be/') > -1) {
            x = url.substr(url.indexOf(".be/") + 4);
            x.replace("/", "")
        } else { x = url.split(/(youtu.be\/|v\/|embed\/|watch\?|youtube.capiom\/user\/[^#]*#([^\/]*?\/)*)\??v?=?([^#\&\?]*)/)[3] }
        if (x != '') {
            if (x.indexOf("?t=") > 0) {
                v.start = x.substr(x.indexOf("?t=") + 3);
                var h = 0;
                var m = 0;
                var s = 0;
                if (v.start.indexOf("h") > 0) {
                    h = v.start.substr(0, v.start.indexOf("h"));
                    v.start = v.start.substr(v.start.indexOf("h") + 1)
                }
                if (v.start.indexOf("m") > 0) {
                    m = v.start.substr(0, v.start.indexOf("m"));
                    v.start = v.start.substr(v.start.indexOf("m") + 1)
                }
                if (v.start.indexOf("s") > 0) {
                    s = v.start.substr(0, v.start.indexOf("s"));
                    v.start = v.start.substr(v.start.indexOf("s") + 1)
                }
                if (h > 0 || m > 0 || s > 0) { v.start = h * 3600 + m * 60 + s * 1 }
                x = x.substr(0, x.indexOf("?t="))
            }
        }
        return x
    };
    var js = function(x, y, li) {
        if (x == "init") { o.init = true }
        if (v.eventstracker == 1 && o.init) {
            if (v.eventlisteners == 1 || li == 1) {
                var ev = document.createEvent('Events');
                if (y !== undefined) { ev.info = y }
                ev.initEvent(x, true, true);
                o.container.dispatchEvent(ev)
            } else { if (y !== undefined) { if (typeof(y) == 'object') { y = JSON.stringify(y) } } if (typeof(v.events) == 'object') { if (exist(v.events[x]) || exist(v.events['other'])) { var z = x; if (!exist(v.events[x]) && exist(v.events['other'])) { z = 'other' } if (x.indexOf("vast_") == 0) { if (exist(v.events['vast'])) { z = 'vast' } } try { if (y !== undefined) { eval(v.events[z] + "('" + x + "','" + v.id + "','" + y + "')") } else { eval(v.events[z] + "('" + x + "','" + v.id + "')") } } catch (e) { log("events", e, x) } } } else { if (v.events == '') { v.events = "PlayerjsEvents" } try { if (y !== undefined) { eval(v.events + "('" + x + "','" + v.id + "','" + y + "')") } else { eval(v.events + "('" + x + "','" + v.id + "')") } } catch (e) { log("events", e, x, y) } } }
        }
        if (v.postmessage == 1 && li !== 1) {
            var zv = { event: x, time: (x == "seek" ? o.seeked_time : o.media.time()) };
            if (y !== undefined) { zv["data"] = y }
            if (x == "duration" || x == "time") { zv["duration"] = o.media.duration() }
            if (x == "volume" || x == "unmute") { zv["volume"] = v.volume }
            window.parent.postMessage(zv, '*');
            var z = x;
            x == "init" || x == "start" || x == "end" ? z = x + "ed" : '';
            x == "play" ? z = "resumed" : '';
            x == "pause" ? z = "paused" : '';
            x == "mute" ? z = "muted" : '';
            x == "unmute" ? z = "unmuted" : '';
            x == "seek" ? z = "rewound" : '';
            x == "vast_Impression" ? z = "adShown" : '';
            zv["event"] = z;
            if (z != '' && z != x) { window.parent.postMessage(zv, '*') }
        }
    };
    this.event = function(x, y) { o.events[x] = y };
    var api = function(x, y, but) { return apiProcessor(x, y, but) };
    this.api = function(x, y, but) { return apiProcessor(x, y, but) };


    // ijection js
    this.elements = function(data) {


        // console.log(v);


        v = UpdateObject(v, data);
        console.log(v);
        var show_settings = false;
        if (o.controls.SettingsVisible()) {
            o.controls.Settings();
            show_settings = true
        }
        var show_playlist = false;
        if (o.controls.PlaylistVisible()) {
            o.controls.Playlist();
            show_playlist = true
        }
        o.controls.Remove();
        o.controls = null;
        o.controls = new Controls();
        if (o.media.status() == "playing") { o.controls.Play() }
        o.controls.Volume(v.volume);
        if (exist(v.title)) { Title(v.title) }
        if (show_settings) { o.controls.Settings() }
        if (show_playlist) { o.controls.Playlist() }
        if (o.fullscreen) { o.controls.Fullscreen() }
        if (key != 'control_duration') { o.controls.Duration(o.media.time(), o.media.duration()) }
        Resize();
    }



    function apiProcessor(x, y, but) {
        if (exist(o.actions)) {
            if (o.destroyed == 1) { return }
            if (but) { if (typeof(but) == 'string') { if (but.indexOf("id:") == 0) { but = o.controls.butById(but.substr(3)); if (but) { if (x == "button" && y == "toogle") { but.CustomToogle() } } } } }
            if (x == "play") {
                if (exist(y)) {
                    if (typeof(y) == 'string') {
                        y = y.replace(/(\r\n|\n|\r)/gm, "");
                        var seekto = -1;
                        if (y.indexOf("[seek:") > -1 && y.indexOf("]") == y.length - 1) {
                            seekto = y.substr(y.indexOf("[seek:") + 6, y.length - 1);
                            o.seekto = seekto = parseInt(seekto.substr(0, seekto.length - 1));
                            y = y.substr(0, y.indexOf("[seek:"))
                        }
                        if (y.indexOf("#2") == 0) { y = fd2(y) }
                        if (y.indexOf("#3") == 0 && y.indexOf(v.file3_separator) > 0) { y = fd3(y) }
                        if (y.indexOf("#0") == 0) { y = fd0(y) }
                        if (v.fplace == 1) { y = fplace(y) }
                        if (y.indexOf(".txt") == y.length - 4) {
                            var xhr = XHR(y);
                            xhr.onload = function() { if (this.readyState == 4 && this.status == 200) { try { apiProcessor('play', JSON.parse(this.responseText)) } catch (e) {} } };
                            xhr.send();
                            return
                        }
                        if (y.indexOf("id:") == 0 && exist(o.playlist_dic)) {
                            var z = y.substr(3);
                            for (var j in o.playlist_dic) { if (o.playlist_dic.hasOwnProperty(j)) { if (o.playlist_dic[j].pjs_id == z) { z = j } } }
                            if (exist(o.playlist_dic[z])) {
                                o.controls.PlaylistPlayId(z);
                                seekto > -1 ? o.seekto = seekto : '';
                                return true
                            } else { return false }
                        }
                        if (y.indexOf("youtubeid:") == 0) { var z = y.substr(10); if (o.file_type == "youtube") { o.media.playByYoutubeId(z); return true } else { y = '//youtu.be/' + z } }
                    }
                    o.actions.NewFile(y)
                } else { o.actions.Play() }
            }
            if (x == "file" && exist(y)) {
                o.actions.NewFile(y, 1);
                o.controls.Duration(0, 0)
            }
            if (x == "pause") { o.play ? o.actions.Pause() : '' }
            if (x == "channel" && exist(y)) { o.start && o.channels ? o.channels.SetChannel(y) : '' }
            if (x.indexOf("vpaid_") == 0) { if (o.vast) { o.vast.VpaidSet(x.substr(6), y) } }
            if (x == "preload") { o.media.Preload() }
            if (x == "alert") {
                o.alert.close();
                o.alert = new Alert();
                if (v.alert404 == 1) { o.alert.txt(v.alert404text) } else { o.alert.txt("Test message") }
            }
            if (x == "waiting") {
                o.controls.Waiting();
                o.controls.HideElement("control_start")
            }
            if (x == "toggle") { o.play ? o.actions.Pause() : o.actions.Play() }
            if (x == "stop") {
                v.preload = 0;
                v.autoplay = 0;
                o.media.Recover();
                o.actions.Stop()
            }
            if (x == "reload") {
                o.time = o.media.time();
                o.actions.Reload()
            }
            if (x == "share") { o.controls.showShare() }
            if (x == "startvast" && exist(y)) {
                if (v.vast == 1 && o.p != '') {
                    var sv = JSON.parse(decode(o.p));
                    for (var l in sv) {
                        if (sv.hasOwnProperty(l)) {
                            if (exist(sv[l].id)) {
                                if (y == sv[l].id) {
                                    v.midroll = 'prt' + (exist(sv[l]['cpm']) ? 'cpm' + sv[l]['cpm'] : '') + y + '_' + sv[l].preroll;
                                    v.midrolls = true;
                                    o.actions.advertising("midroll")
                                }
                            }
                        }
                    }
                }
            }
            if (x == "vastbreak") { typeof VastBreak == "function" ? VastBreak() : '' }
            if (x == "cuid" && y) {
                v.cuid = y;
                o.continue ? o.continue.updateCuid() : ''
            }
            if (x == "mute") { o.actions.Mute() }
            if (x == "speed") { if (exist(y)) { o.actions.SetSpeed(y) } else { return o.files_speed[o.current_speed] } }
            if (x == "unmute") { o.actions.Unmute() }
            if (x == "qualities") { return o.files_quality }
            if (x == "adblock") { return o.ab ? true : false }
            if (x == "live") { return o.media ? o.media.isLive() : false }
            if (x == "audiotracks") { return o.files_audiotrack }
            if (x == "volume" || x == "setVolume") { if (exist(y)) { if (y >= 0 && y <= 1) { o.actions.Volume(y) } } return o.muted ? 0 : v.volume }
            if (x == "muted") { return exist(o.muted) ? o.muted : false }
            if (x == "moveplaylist") { o.controls ? o.controls.PlaylistMove(y) : '' }
            if (x == "design") {
                y < 2 ? y = '' : '';
                if (o['u' + y] != '') {
                    var x2 = JSON.parse(decode(o['u' + y]));
                    var v2 = [];
                    for (var l in v) { if (v.hasOwnProperty(l)) { if (l.indexOf("control_") == 0) { v[l] = null } } }
                    if (typeof x2 == "object") { for (var k in x2) { if (x2.hasOwnProperty(k)) { if (k.indexOf("control_") == 0) { v[k] = x2[k] } if (k == "toolbar") { v2[k] = x2[k] } } } }
                    v = UpdateObject(v, v2);
                    var show_settings = false;
                    if (o.controls.SettingsVisible()) {
                        o.controls.Settings();
                        show_settings = true
                    }
                    var show_playlist = false;
                    if (o.controls.PlaylistVisible()) {
                        o.controls.Playlist();
                        show_playlist = true
                    }
                    o.controls.Remove();
                    o.controls = null;
                    o.controls = new Controls();
                    if (o.media.status() == "playing") { o.controls.Play() }
                    o.controls.Volume(v.volume);
                    if (exist(v.title)) { Title(v.title) }
                    if (show_settings) { o.controls.Settings() }
                    if (show_playlist) { o.controls.Playlist() }
                    if (o.fullscreen) { o.controls.Fullscreen() }
                    if (key != 'control_duration') { o.controls.Duration(o.media.time(), o.media.duration()) }
                    Resize()
                }
            }
            if (x == "vars") { return v.vars }
            if (x == "resize") { o.controls.resize(true) }
            if (x == "seek") {
                if (exist(y)) {
                    if (typeof y == "string") {
                        if (y.indexOf("%") > -1) {
                            y = parseInt(y.substr(0, y.indexOf("%")));
                            y = o.media.duration() * y / 100
                        } else {
                            var omt = o.media.time();
                            if (o.continue && !o.start) {
                                if (!o.continue.seeked) {
                                    var f = o.continue.flag();
                                    if (f.t && f.d) {
                                        omt = f.t;
                                        o.continue.seeked = true
                                    }
                                }
                            }
                            if (y.indexOf("+") == 0) { y = omt + parseInt(y.substr(1)) } else { if (y.indexOf("-") == 0) { y = omt - parseInt(y.substr(1)) } }
                        }
                    }
                    y = parseInt(y);
                    y < 0 ? y = 0 : '';
                    if (o.media.duration() > 0) { y > o.media.duration() ? y = 0 : '' }
                    if (!exist(o.vast) && !exist(o.vastloader) && o.media.duration() > 0) {
                        o.seekto = undefined;
                        o.actions.Seek(y, true);
                        o.actions.Playing()
                    } else { o.seekto = y }
                }
            }
            if (x == "fullscreen") {!o.fullscreen ? o.actions.Fullscreen() : '' }
            if (x == "exitfullscreen") { o.fullscreen ? o.actions.Normalscreen() : '' }
            if (x == "isfullscreen") { return o.fullscreen }
            if (x == "unfixing") { if (exist(o.minify)) { o.minify.Un() } }
            if (x == "time") { var _t = o.media ? o.media.time() : 0; if (o.continue && v.timestore == 1 && !o.start) { var f = o.continue.flag(); if (f.t) { _t = f.t } } return _t }
            if (x == "timeplay") {
                if (o.butplstart) { apiProcessor("play", "id:" + o.butplstart) }
                if (o.butseekto) {
                    apiProcessor("seek", o.butseekto);
                    apiProcessor("play")
                }
            }
            if (x == "duration") { return o.media ? o.media.duration() : 0 }
            if (x == "points") {
                if (y) {
                    v.points = y;
                    o.controls.RenewPoints()
                }
            }
            if (x == "quality") { if (exist(y)) { if (but) { v.hd = Switcher(v.hd, y, but); if (o.files_quality.length == 2) { o.actions.SetQuality(v.hd) } } else { o.actions.SetQuality(y) } } else { return o.media ? o.media.getQuality() : 0 } }
            if (x == "audiotrack") { if (exist(y)) { if (but) { v.ahd = Switcher(v.ahd, y, but); if (o.files_audiotrack.length == 2) { o.actions.SetAudioTrack(v.ahd) } } else { o.actions.SetAudioTrack(y) } } else { return o.media ? o.media.getAudioTrack() : 0 } }
            if (x == "isyoutube") { return o.file_type == "youtube" }
            if (x == "restart") {
                if (o.current_audiotrack > 0) { o.restart_audio = o.current_audiotrack }
                o.actions.NewFile(v.file)
            }
            if (x == "playing") { return o.play }
            if (x == "started") { return o.start }
            if (x == "system") { return o.system[y] }
            if (x == "youtubeready") { o.media.onYoutubeReady() }
            if (x == "id") { return v.id }
            if (x == "log") { v.log = y }
            if (x == "eventstracker") { v.eventstracker = y }
            if (x == "pip") { o.media.PipToggle() }
            if (x == "airplay") { o.media.Airplay() }
            if (x == "pipwebkit") { o.media.PipWebkit() }
            if (x == "options") { console.log(options) }
            if (x == "subtitle") { v.subtitle = y; if (y) { if (y.toString().length < 3) { o.actions.SetSubtitle(y * 1) } else { o.media.SubtitleStart(y) } } }
            if (x == "box") {
                var box = createElement("div");
                box.id = y;
                box.style.zIndex = 10000;
                o.frame.appendChild(box)
            }
            if (x == "screenshot") {
                if (o.tagvideo) {
                    var canvas = createElement("canvas");
                    o.container.appendChild(canvas);
                    var ctx = canvas.getContext('2d');
                    var size = o.media.size();
                    canvas.width = size.width > 0 ? size.width : o.normal_w;
                    canvas.height = size.height > 0 ? size.height : o.normal_h;
                    ctx.drawImage(o.media.tag(), 0, 0, canvas.width, canvas.height);
                    quality = 2;
                    var canvas2 = document.createElement("canvas");
                    canvas2.width = canvas.width * quality;
                    canvas2.height = canvas.height * quality;
                    var ctx2 = canvas2.getContext("2d");
                    ctx2.drawImage(o.media.tag(), 0, 0, canvas.width * quality, canvas.height * quality);
                    if (v.sscopyright == 1 && exist(v.sstext)) {
                        !exist(v.ssfontsize) ? v.ssfontsize = 20 : '';
                        !exist(v.ssfontcolor) ? v.ssfontcolor = "ffffff" : '';
                        ctx2.font = v.ssfontsize + "px Courier, Arial";
                        ctx2.fillStyle = "#" + v.ssfontcolor;
                        ctx2.fillText((v.sstext == "domain" ? v.domain : v.sstext), v.ssfontsize, canvas.height * quality - v.ssfontsize - 5)
                    }
                    ctx.drawImage(canvas2, 0, 0, canvas.width, canvas.height);
                    var img;
                    try { img = canvas.toDataURL("image/jpeg") } catch (e) { console.log(e.message); return false }
                    return img
                } else { return false }
            }
            if (x == "dash") { return o.file_type == x ? o.media.getDASH() : undefined }
            if (x == "hls") { return o.file_type == x ? o.media.getHLS() : undefined }
            if (x == "poster") { if (!o.play && y.indexOf('//') > -1) { o.media.Poster(y); return true } else { return false } }
            if (x == "scale") { o.media.scale(y) }
            if (x == "title") {
                if (exist(y)) {
                    exist(y) ? v.title = y : '';
                    o.actions.Title('title');
                    return true
                } else { return v.title }
            }
            if (x == "invert") { o.actions.InvertPlaylist() }
            if (x == "playlist") {
                if (typeof(y) == 'object') { try { o.actions.UpdatePlaylist(y); return true } catch (e) { return false } } else {
                    if (y.indexOf(".txt") == y.length - 4 || y.indexOf(".txt?") > 0) {
                        var xhr = XHR(y);
                        xhr.onload = function() { if (this.readyState == 4 && this.status == 200) { try { apiProcessor('playlist', JSON.parse(this.responseText)) } catch (e) {} } };
                        xhr.send();
                        return true
                    }
                }
            }
            if (x == "next") { o.controls.PlaylistNext() }
            if (x == "prev") { o.controls.PlaylistPrev() }
            if (x == "find") { if (exist(y) && exist(o.playlist_dic)) {!o.play ? v.autoplay = 0 : ''; for (var j in o.playlist_dic) { if (o.playlist_dic.hasOwnProperty(j)) { if (o.playlist_dic[j].pjs_id == y) { y = j } } } if (exist(o.playlist_dic[y])) { o.controls.PlaylistOpenId(y); return true } else { return false } } }
            if (x == "playlist_folders") { var tmp = []; if (exist(o.playlist_dic)) { for (var j in o.playlist_dic) { if (o.playlist_dic[j].folder && o.playlist_dic[j].pjs_parent_i == -1) { tmp.push({ title: o.playlist_dic[j].title, id: o.playlist_dic[j].id }) } } } return tmp }
            if (x == "playlist_id") { if (o.plid) { return o.playlist_dic[o.plid].pjs_id ? o.playlist_dic[o.plid].pjs_id : o.plid } }
            if (x == "playlist_length") { if (o.playlist_dic) { return Object.keys(o.playlist_dic).length } else { return -1 } }
            if (x == "playlist_title") { if (exist(o.playlist_title)) { return o.playlist_title } }
            if (x == "showplaylist") { return v.plstart }
            if (x == "vastnow") { if (o.vast) { return true } else { return false } }
            if (x == "vastinfo") { if (o.vast) { return VastInfo() } else { return false } }
            if (x == "vastpause") { if (o.vast) { return o.vast.pause() } else { return false } }
            if (x == "vastresume") { if (o.vast) { return o.vast.resume() } else { return false } }
            if (x == "captions") {
                v.captions = Switcher(v.captions, y, but);
                o.media.captions()
            }
            if (x == "loop") { v.loop = Switcher(v.loop, y, but) }
            if (x == "shuffle") { v.shuffle = Switcher(v.shuffle, y, but) }
            if (x == "autonext") { v.playlist.autoplaylist = Switcher(v.playlist.autoplaylist, y, but) }
            if (x == "hd") {
                if (o.files_quality.length == 2) {
                    v.hd = o.files_quality[o.current_quality];
                    v.hd = Switcher(v.hd, y, but);
                    if (o.files_quality[0] == v.hd) { o.actions.SetQuality(0) } else { o.actions.SetQuality(1) }
                }
            }
            if (x == "v" && y != 'file') { return v[y] }
            if (x.indexOf("update:") == 0) { if (typeof(y) == 'object' && typeof(v[x.substr(7)]) == 'object') { for (var yy in y) { if (y.hasOwnProperty(yy)) { v[x.substr(7)][yy] = y[yy] } } } else { v[x.substr(7)] = y } return true }
            if (x == "currentfile") { return o.media ? o.media.currentFile() : '' }
            if (x == "vrsn") { return o.version + ' ' + o.playerid }
            if (x == "playerid") { return o.playerid }
            if (x == "hlserror") { return o.hlserror }
            if (x == "dasherror") { return o.dasherror }
            if (x == "visibility") { return o.visibility }
            if (x == "destroy") {
                console.log("destroy");
                o.actions.Stop();
                o.destroyed = 1;
                v.hotkey.on = 0
            }
        } else { return false }
    };

    function Switcher(x, y, but) { var z = trim(y); if (y.indexOf("/") > 0) { var y2 = y.split("/"); if (y2.length == 2) { if (x == trim(y2[0])) { z = trim(y2[1]); if (but) { but.CustomSwitch(1) } } else { z = trim(y2[0]); if (but) { but.CustomSwitch(0) } } } } return z }

    function XHR(x) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', x, true);
        return xhr
    }

    function VastInfo() { var x; if (o.vast) { if (o.vast.active()) { x = o.vast } } if (!x && o.vastloader) { x = o.vastloader } if (x) { return { system: x.info("adsystem"), version: x.info("version"), vpaid: x.info("isVpaid"), url: o.current_vast_url + (x.info("wrapper") ? x.info("wrapper0") + x.info("wrapper") : ''), type: x.info("filetype"), file: x.info("file"), volume: x.getVolume(), id: o.vast_adid } } }
    var createElement = function(x) {
        var y = x;
        x == 'div' || x == 'div2' ? y = 'pjsdiv' : '';
        var z = document.createElement(y);
        if (x == 'div2') { css(z, { "cursor": "pointer", "display": "block" }) }
        return z
    };
    var log = function(a, b, c, d, e, f, g) {
        if (v.log == 1 || v.logout == 1) {
            var x = a + (b != undefined ? " " + b : "") + (c != undefined ? " " + c : "") + (d != undefined ? " " + d : "") + (e != undefined ? " " + e : "") + (f != undefined ? " " + f : "") + (g != undefined ? " " + g : "");
            console.log("Playerjs: " + x);
            if (v.logout == 1 && exist(document.getElementById("pjslog"))) { document.getElementById("pjslog").innerHTML += x + '<br/>' }
        }
    };
    var CustomFonts = function() {
        if (v.fonts == 1 && exist(v.fontnames) && v.fontnames != '') {
            var x = document.createElement('link');
            x.rel = 'stylesheet';
            x.href = 'https://fonts.googleapis.com/css?family=' + v.fontnames.replace(/,/ig, "|").replace(/ /ig, "+");
            document.head.appendChild(x)
        }
    };
    var Time = function(time) {
        time < 0 ? time = 0 : '';
        var full_minutes = o.media.duration >= 600 ? true : false;
        var full_hours = o.media.duration >= 3600 ? true : false;
        var minutes = Math.floor(time / 60);
        var seconds = int(time - minutes * 60);
        var hours = Math.floor(minutes / 60);
        minutes = minutes - hours * 60;
        return String((hours > 0 || full_hours ? hours + ':' : '') + ((hours > 0 || full_minutes) && minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds)
    };
    var Href = function() { return encodeURIComponent((window.location != window.parent.location) ? document.referrer : document.location.href) };
    var Scripted = function(y) { var x = false; var scripts = document.getElementsByTagName('script'); for (var i = 0; i < scripts.length; i++) { if (scripts[i].src.indexOf(y) > -1) { x = true } } return x };
    var hex2rgb = function(x, y) { x = x.replace('#', ''); var r = parseInt(x.length == 3 ? x.slice(0, 1).repeat(2) : x.slice(0, 2), 16); var g = parseInt(x.length == 3 ? x.slice(1, 2).repeat(2) : x.slice(2, 4), 16); var b = parseInt(x.length == 3 ? x.slice(2, 3).repeat(2) : x.slice(4, 6), 16); if (y) { return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + y + ')' } else { return 'rgb(' + r + ', ' + g + ', ' + b + ')' } };
    var css = function(e, o) {
        if (e) {
            for (var key in o) {
                if (o.hasOwnProperty(key)) {
                    if (o[key] != 'NaNpx' && o[key] != undefined) {
                        if (typeof o[key] == 'number' && key != 'opacity' && key != 'zIndex') { o[key] += 'px' }
                        if ((key.indexOf("color") > -1 || key.indexOf("Color") > -1) && o[key].indexOf("#") == -1 && o[key].indexOf("rgba") == -1) { o[key] = '#' + o[key] }
                        if (key == "transform") {
                            e.style['-ms-' + key] = o[key];
                            e.style['-moz-' + key] = o[key];
                            e.style['-webkit-' + key] = o[key];
                            e.style['-o-' + key] = o[key]
                        }
                        if (key == "fontFamily") { if (o[key].indexOf(" ") > -1) { o[key] = '"' + o[key] + '"' } }
                        if (key == "box-sizing") { e.style.setProperty(key, o[key], 'important') } else { e.style[key] = o[key] }
                    }
                }
            }
        }
    };
    var controlCSS = function(x, color, y) {
        !color ? color = '#fff' : '';
        color.substr(0, 1) != '#' ? color = "#" + color : '';
        var r = random(100000, 1000000);
        x = x.replace(/\(rand\)/g, r);
        x = x.replace(/\(color\)/g, color);
        var _html = x.substr(0, x.indexOf('|||'));
        var _css = x.substr(x.indexOf('|||') + 3);
        var _css2 = '';
        if (o.system.webkit) {
            _css2 = _css.replace(/animation:/g, "-webkit-animation:");
            _css2 = _css2.replace(/animation-/g, "-webkit-animation-");
            _css2 = _css2.replace(/@keyframes/g, "@-webkit-keyframes");
            _css2 = _css2.replace(/transform/g, "-webkit-transform")
        }
        y.innerHTML = _html;
        pushCSS(_css2 + _css)
    };
    var pushCSS = function(x) { if (o.css) { if (o.css.styleSheet) { o.css.styleSheet.cssText = x } else { o.css.appendChild(document.createTextNode(x)) } } };
    var xhr = function(y, z) {
        var x = new XMLHttpRequest();
        x.open('GET', y, true);
        x.onload = z;
        x.send()
    };
    var gif = function(z) {
        var gif = document.createElement("img");
        if (o.gifed.indexOf(z) > -1) { o.gifed.push(z); if (z.indexOf("?") > 0) { z = z + '&' + Math.random() } else { z = z + '?' + Math.random() } } else { o.gifed.push(z) }
        gif.setAttribute('src', z);
        gif.setAttribute('height', '1px');
        gif.setAttribute('width', '1px')
    };
    var attr = function(e, o) { for (var key in o) { if (o.hasOwnProperty(key)) { e.setAttribute(key, o[key]) } } };
    var destroy = function(e) {
        if (e) {
            try {
                e.parentNode.removeChild(e);
                e = null
            } catch (e) {}
        }
    };
    var random = function(min, max) { return Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random()) };
    var trim = function(x) { if (typeof x == "string") { return x.replace(/^\s+|\s+$/gm, '') } else { return x } };
    var encode = function(x, n) { if (n == 0) { return "#0" + salt.e(x) } if (n == 1) { return "#1" + pepper(salt.e(x), 1) } };
    var str2obj = function(x) {
        if (v[x] != "") {
            if (typeof v[x] != "string") { o[x + 'o'] = v[x] } else {
                if (v[x].indexOf("[{") == 0) {
                    try {
                        v[x] = v[x].replace(/pjs'qt/ig, '"');
                        o[x + 'o'] = eval(v[x])
                    } catch (e) {}
                }
            }
        }
    };
    var dechar = function(x) { return String.fromCharCode(x) };
    var decode = function(x) { if (x.substr(0, 2) == "#1") { return salt.d(pepper(x.substr(2), -1)) } else if (x.substr(0, 2) == "#0") { return salt.d(x.substr(2)) } else { return x } };
    var checkBase64 = function(x) { if (x) { if (x.indexOf('http') == -1 && x.indexOf('.') == -1 && x.length > 100) { x = 'data:image/png;base64,' + x } } return x };
    var hide = function(x) { x.style.visibility = "hidden" };
    var show = function(x) { x.style.visibility = "visible" };
    var hide2 = function(x) { x.style.display = "none" };
    var show2 = function(x) { x.style.display = "block" };
    var isVisible = function(x) { return x ? x.style.visibility != "hidden" && x.style.display != "none" : false };
    var int = function(s) { if (typeof s == "string") { if (s.indexOf("px") > 0) { s = s.substr(0, s.indexOf("px")) } } return parseInt(s) };
    var hidden = function(x) { return x.style.display == "none" };
    var hexToRgb = function(hex) { var bigint = parseInt(hex, 16); var r = (bigint >> 16) & 255; var g = (bigint >> 8) & 255; var b = bigint & 255; return r + "," + g + "," + b };
    var MarginPadding = function(o, x, y) {
        o[x + 'top'] = 0;
        o[x + 'right'] = 0;
        o[x + 'bottom'] = 0;
        o[x + 'left'] = 0;
        if (exist(o[y])) {
            var z = o[y].split(" ");
            if (z.length == 4) {
                o[x + 'top'] = z[0] ? parseFloat(z[0]) : 0;
                o[x + 'right'] = z[1] ? parseFloat(z[1]) : 0;
                o[x + 'bottom'] = z[2] ? parseFloat(z[2]) : 0;
                o[x + 'left'] = z[3] ? parseFloat(z[3]) : 0
            }
        }
        return o
    };
    var StringVar = function(x, y) { return v[x] && v[x] != '' ? v[x] : y };
    var abc = String.fromCharCode(65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122);
    var salt = {
        _keyStr: abc + "0123456789+/=",
        e: function(e) {
            var t = "";
            var n, r, i, s, o, u, a;
            var f = 0;
            e = salt._ue(e);
            while (f < e.length) {
                n = e.charCodeAt(f++);
                r = e.charCodeAt(f++);
                i = e.charCodeAt(f++);
                s = n >> 2;
                o = (n & 3) << 4 | r >> 4;
                u = (r & 15) << 2 | i >> 6;
                a = i & 63;
                if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 }
                t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
            }
            return t
        },
        d: function(e) {
            var t = "";
            var n, r, i;
            var s, o, u, a;
            var f = 0;
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (f < e.length) {
                s = this._keyStr.indexOf(e.charAt(f++));
                o = this._keyStr.indexOf(e.charAt(f++));
                u = this._keyStr.indexOf(e.charAt(f++));
                a = this._keyStr.indexOf(e.charAt(f++));
                n = s << 2 | o >> 4;
                r = (o & 15) << 4 | u >> 2;
                i = (u & 3) << 6 | a;
                t = t + dechar(n);
                if (u != 64) { t = t + dechar(r) }
                if (a != 64) { t = t + dechar(i) }
            }
            t = salt._ud(t);
            return t
        },
        _ue: function(e) {
            e = e.replace(/\r\n/g, "\n");
            var t = "";
            for (var n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                if (r < 128) { t += dechar(r) } else if (r > 127 && r < 2048) {
                    t += dechar(r >> 6 | 192);
                    t += dechar(r & 63 | 128)
                } else {
                    t += dechar(r >> 12 | 224);
                    t += dechar(r >> 6 & 63 | 128);
                    t += dechar(r & 63 | 128)
                }
            }
            return t
        },
        _ud: function(e) {
            var t = "";
            var n = 0;
            var r = 0;
            var c1 = 0;
            var c2 = 0;
            while (n < e.length) {
                r = e.charCodeAt(n);
                if (r < 128) {
                    t += dechar(r);
                    n++
                } else if (r > 191 && r < 224) {
                    c2 = e.charCodeAt(n + 1);
                    t += dechar((r & 31) << 6 | c2 & 63);
                    n += 2
                } else {
                    c2 = e.charCodeAt(n + 1);
                    c3 = e.charCodeAt(n + 2);
                    t += dechar((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    n += 3
                }
            }
            return t
        }
    };
    var pepper = function(s, n) {
        s = s.replace(/\+/g, "#");
        s = s.replace(/#/g, "+");
        var a = sugar(o.y) * n;
        if (n < 0) a += abc.length / 2;
        var r = abc.substr(a * 2) + abc.substr(0, a * 2);
        return s.replace(/[A-Za-z]/g, function(c) { return r.charAt(abc.indexOf(c)) })
    };
    var sugar = function(x) {
        x = x.split(dechar(61));
        var result = '';
        var c1 = dechar(120);
        var chr;
        for (var i in x) {
            if (x.hasOwnProperty(i)) {
                var encoded = '';
                for (var j in x[i]) { if (x[i].hasOwnProperty(j)) { encoded += (x[i][j] == c1) ? dechar(49) : dechar(48) } }
                chr = parseInt(encoded, 2);
                result += dechar(chr.toString(10))
            }
        }
        return result.substr(0, result.length - 1)
    };
    var exist = function(x) { return x != null && typeof(x) != 'undefined' && x != 'undefined' };
    var findLeft = function(el) { return el.getBoundingClientRect().left + (window.scrollX ? window.scrollX : window.pageXOffset) };
    var findTop = function(el) { const rect = el.getBoundingClientRect(); return rect.top + window.scrollY };
    var redirect = function(x) {
        if (x != '') {
            if (v.redirectblank == 1) { window.open(x) } else { window.location.href = x }
            x = ''
        }
    };
    var timeFormat = function(seconds) {
        var seconds = Math.round(seconds);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        minutes = Math.floor(minutes % 60);
        seconds = Math.floor(seconds % 60);
        hours > 0 && minutes < 10 ? minutes = "0" + minutes : "";
        seconds = seconds >= 0 ? ((seconds >= 10) ? seconds : "0" + seconds) : "00";
        var out = (hours > 0 ? hours + ":" : "") + (minutes >= 0 ? minutes : "0") + ":" + seconds;
        return out
    };
    var Actions = function() {
        var _fullscreen_end = false;
        var _subtitle_empty = true;
        if (o.system.tv) { log("tv") }
        this.Title = function(x) { o.controls ? o.controls.title(x) : '' };
        this.File = function(x) {
            if (x) {
                if (typeof(x) == 'string') {
                    x = x.replace(/(\r\n|\n|\r)/gm, "");
                    if (x.indexOf("[{") == 0) {
                        try {
                            x = x.replace(/pjs'qt/ig, '"');
                            x = JSON.parse(x)
                        } catch (e) { x = "incorrect JSON" }
                    }
                }
                if (typeof(x) == 'object') {
                    o.playlist_dic = [];
                    o.playlist = IndexPlaylist(x);
                    if (v.playlist.openlast == 1 && !v.plstart) {
                        var keys = Object.keys(o.playlist_dic);
                        var last = keys.slice(-1)[0];
                        last ? v.plstart = last : ''
                    }
                    var y = FindFileInPlaylist();
                    x = y.file;
                    o.titlestore = y.title;
                    o.controls ? o.controls.titlepl(y.title) : '';
                    if (exist(y.poster)) { if (o.media) { o.media.Poster(y.poster) } else { v.poster = y.poster } }
                    if (exist(y.sub)) { y.subtitle = y.sub }
                    if (exist(y.start)) { v.start = o.seekto = y.start }
                    SettingsTimers("offset");
                    if (exist(y.id)) { o.plid = y.id }
                    var sx = ["subtitle", "vars", "embed", "url", "heartbeat", "thumbnails", "download", "points", "remove", "end", "title2"];
                    if (exist(v.control_title)) {
                        if (v.control_title.showfrom1file == 1 && v.control_title.showtitleplaylist == 1) {
                            sx.push("title");
                            sx.push("t1");
                            sx.push("t2");
                            sx.push("t3");
                            sx.push("t4");
                            sx.push("t5")
                        }
                    }
                    for (var i = 0; i < sx.length; i++) { if (exist(y[sx[i]])) { v[sx[i]] = y[sx[i]] } }
                    if (sx.indexOf('title') > 0) {
                        if (v.control_title.templated == 1) {
                            o.title_template = v.control_title.template;
                            o.actions.TitleTemplate(y)
                        }
                        o.actions.Title('title')
                    }
                    if (o.controls) { o.controls.UpdatePlaylist(o.playlist) }
                    if (o.droplist) { o.droplist.Update() }
                }
                if (typeof(x) == 'string') {
                    if (x.indexOf("#2") == 0) { x = fd2(x) }
                    if (x.indexOf("#3") == 0 && x.indexOf(v.file3_separator) > 0) { x = fd3(x) }
                    if (x.indexOf("#0") == 0) { x = fd0(x) }
                    if (v.fplace == 1) { x = fplace(x) }
                    if (x == '') {
                        log("empty file");
                        o.media_error = true;
                        js("error", "empty")
                    }
                    o.files_quality = [];
                    o.files_audiotrack = [];
                    o.current_file = 0;
                    o.current_quality = 0;
                    o.current_audiotrack = 0;
                    v.file_separator == '' ? v.file_separator = ',' : '';
                    if ((x.indexOf("]") > -1 && x.indexOf("[") > -1) || exist(v.qualities)) { o.files = x.split(v.file_separator) } else { o.files = [x] }
                    o.audiotracks = [];
                    if (exist(v.qualities)) { var qualities = v.qualities.split(v.file_separator) }
                    if (o.files.length > 0) {
                        var q = 0;
                        for (var i = 0; i < o.files.length; i++) {
                            o.files[i] = trim(o.files[i]);
                            if (o.files[i] != '') {
                                if (o.files[i].indexOf("[") == 0 && o.files[i].indexOf("]") > 1) {
                                    o.files_quality[i] = o.files[i].substr(o.files[i].indexOf("[") + 1, o.files[i].indexOf("]") - 1);
                                    o.files[i] = o.files[i].substr(o.files[i].indexOf("]") + 1)
                                } else { if (exist(v.qualities)) { o.files_quality[i] = exist(qualities[i]) ? qualities[i] : '' } else { o.files_quality[i] = i + 1 } }
                                if (exist(v.default_quality) && q == 0) {
                                    if (v.default_quality == o.files_quality[i]) {
                                        o.current_file = i;
                                        o.current_quality = i
                                    }
                                }
                                if (exist(o.default_quality)) {
                                    if (o.default_quality == o.files_quality[i]) {
                                        o.current_file = i;
                                        o.current_quality = i;
                                        q = i
                                    }
                                }
                                o.files[i] = Prefile(o.files[i])
                            }
                        }
                    } else { o.files[0] = Prefile(o.files[0]) }
                    return o.files[o.current_file]
                }
            } else { return x }
        };

        function Prefile(x) { if (exist(v.prefile) && x.indexOf("//") == -1) { x = v.prefile + x } return x };
        this.InvertPlaylist = function() {
            if (o.playlist) {
                var x = o.playlist.reverse();
                for (var i = 0; i < x.length; i++) { x[i].pjs_i = i }
                o.playlist = x;
                o.controls.UpdatePlaylist(o.playlist)
            }
        };
        this.UpdatePlaylist = function(x) {
            if (typeof(x) == 'object') {
                o.playlist_dic = [];
                o.playlist_source = x;
                o.playlist = IndexPlaylist(x);
                if (o.controls) { o.controls.UpdatePlaylist(o.playlist) }
            }
        };
        this.NewFile = function(x, y) {
            !exist(y) ? v.autoplay = 1 : '';
            v.preload = 0;
            v.duration = undefined;
            v.end = undefined;
            o.media_error != 2 ? o.media_error = false : '';
            o.metadata = false;
            o.pipwebkit = false;
            o.reloadTimer = 0;
            o.gatracked = [];
            o.checknative = false;
            o.gained = false;
            o.dvr = false;
            o.quartile = [false, false, false];
            RemoveSubtitles();
            if (v.vast_midroll_limit > 1) {
                if (exist(o.midrollo) && v.midrolls == 1) {
                    for (var i in o.midrollo) { o.midrollo[i].worked = undefined }
                    v.vast_midroll_limit--
                }
            }
            if (o.media.status() == "playing") { this.Stop() }
            if (exist(o.share)) { o.share.Remove() }
            if (exist(o.reloadErrorTimeout)) { clearTimeout(o.reloadErrorTimeout) }
            js("new");
            o.actions.VastRecover();
            x = this.File(x);
            if (y == 1) { o.file_type = '' }
            o.media.File(x);
            if ((o.system.mobile || o.system.safari) && !exist(y)) { o.actions.Play() }
            if (exist(o.custom_aspect)) {
                o.mediascale = { x: 1, y: 1, x0: 1, y0: 1 };
                o.media.normalscale()
            }
            o.media.NativeControls();
            o.controls.QualityChangedNoHand();
            o.controls.AudioTrackChangedNoHand();
            o.controls.refresh()
        };
        this.RemoveSubtitles = function() { RemoveSubtitles() };

        function RemoveSubtitles() {
            o.current_subtitle = -1;
            o.subtitle_on = false;
            o.thumbs_on = false;
            v.subtitle = null;
            v.thumbnails = null;
            o.sub = null;
            o.subs = null;
            if (exist(o.controls)) { o.controls.SubtitleChanged() }
            o.files_subtitle = null;
            if (exist(o.subtitle)) {
                o.mediacontainer.removeChild(o.subtitle);
                o.subtitle = null
            }
            o.current_subtitle = null;
            o.subtitle_on = false
        }
        this.TitleTemplate = function(x) {
            var y = false;
            if (x && o.title_template) {
                v.title = o.title_template;
                for (var i = 1; i < 6; i++) {
                    if (exist(x['t' + i])) {
                        v.title = v.title.replace("{" + i + "}", x['t' + i]);
                        y = true
                    }
                }
            }
            return y
        };
        this.MediaReady = function() {
            if (v.autoplay == 1) {
                if (v.observer == 1) { setTimeout(function() { o.actions.Play() }, 500) } else { this.Play() }
                v.autoplayed = 1
            }
            if (v.thumbs == 1) { if (typeof PluginThumbs !== "undefined") { var th = new PluginThumbs() } }
        };
        this.NativeControls = function() { var x = false; if (o.system.mobile) { x = true; if (v.nativenotiphone == 1 && o.system.iphone) { x = false } if (v.nativenotipad == 1 && o.system.ipad) { x = false } if (v.nativenotios == 1 && o.system.ios) { x = false } if (v.nativenotandroid == 1 && o.system.android) { x = false } } if (v.nativeontv == 1 && o.system.tv) { x = true } return x };
        this.Metadata = function() {
            o.media.Volume(v.volume);
            if (o.muted) { o.media.Mute() }
            o.metadata = true;
            o.controls.refresh();
            if (o.casting && o.tagvideo) { o.chromecast.Go() }
        };
        this.onPlayTag = function() {!o.onplay ? onPlay() : '' };

        function onPlay() {
            o.onplay = true;
            if (o.controls) { if (o.controls.SettingsVisible()) { o.controls.Settings() } }
            if (o.droplist) { o.droplist.Close() }
            if (exist(o.lunchfileonstart)) {
                var ol = o.lunchfileonstart.valueOf();
                o.lunchfileonstart = undefined;
                o.actions.NewFile(ol)
            } else { o.media.Play() }
            if (!o.checknative) { setTimeout(function() { o.media.NativeControls() }, 500) }!o.play ? o.controls.Play() : '';
            v.effects == 1 ? o.effects.api("play") : '';
            if (o.system.mobile) { o.controls.HideInterval() }
            if (exist(o.share)) { o.share.isOpen() ? o.share.Hide() : '' }
            if (v.heartbeats == 1 && exist(v.heartbeat) && o.dt) {
                if (v.heartbeat != '' && !exist(o.heartbeatInterval)) {
                    o.heartbeatInterval = setInterval(Heartbeat, v.heartbeatinterval * 1000);
                    Heartbeat()
                }
            }
        }
        this.Play = function(noads) {
            var stop = false;
            if (o.file_type == "youtube") {
                if (!o.media.YoutubeReady() && v.autoplay != 1 && v.preload == 1) {
                    stop = true;
                    if (window['YT']) {
                        v.autoplay = 1;
                        o.media.onYoutubeReady()
                    }
                }
            }
            if (v.pass == 1 && v.passontime == 0) {
                o.actions.Password();
                stop = true
            }
            if (o.geo) { if (v.geoplay == 1) { o.geo.Go() } }
            if (o.media_error || stop) { if (o.media_error) { Advertising("preroll") ? datetime(2) : '' } } else {
                StopOtherPlayer(!o.start);
                o.alert.close();
                if (!o.start) {
                    js("start");
                    o.start = true;
                    if (v.toolbar.hideuntilstarted == 1) { setTimeout(function() { o.controls.resizetext() }, 100) }
                    if (v.toolbar.hideleavetimeout > 0 && v.autoplay == 1) {
                        o.starttimeout = true;
                        setTimeout(StartTimeout, v.toolbar.hideleavetimeout * 1000)
                    }
                    if (v.water == 1 && v.wid) { PluginWater() }
                    js("new");
                    gaTracker("play", "Play", true);
                    o.ab ? gaTracker("adblock", "AdBlock", true) : ''
                } else { gaTracker("resume", "Resume") }
                if (v.fullonplay == 1 && !o.fullscreen) { var dd = new Date(); var tt = dd.getTime(); if (tt - o.clicktime < 300) { if (v.fullonplaymobile == 1) { o.system.mobile ? this.Fullscreen() : '' } else { this.Fullscreen() } } }
                if (Advertising("preroll") || Advertising("intro")) { datetime(2) } else {
                    if (v.redirect == 1 && exist(v.redirectonplay) && !exist(options.redirect)) {
                        redirect(v.redirectonplay);
                        stop = true
                    }
                    if (!stop) {
                        log("Play");
                        if (o.file_type != 'pdf') { o.media.duration() > 0 ? o.controls.Duration(o.media.time(), o.media.duration()) : '' }
                        if (!o.start2) {
                            o.start2 = true;
                            if (v.toolbar.hideleavetimeout > 0 && v.autoplay == 1) {
                                o.starttimeout = true;
                                setTimeout(StartTimeout, v.toolbar.hideleavetimeout * 1000)
                            }
                        }
                        var playroll = false;
                        if (o.media.time() > 1 && v.pauserollonplay == 1 && noads != 1) { playroll = Advertising("pauseroll") }
                        if (playroll) {} else { onPlay() }
                    }
                }
            }
        };

        function StartTimeout() {
            o.starttimeout = false;
            o.controls.refresh()
        }
        this.Pause = function() {
            if (o.play) {
                log("Pause");
                o.media.Pause();
                o.controls.Pause();
                js("pause");
                v.posteronpause ? ShowPoster() : '';
                v.effects == 1 ? o.effects.api("pause") : '';
                if (!exist(o.vast) && v.pauserollonplay == 0) { Advertising("pauseroll") }
                o.onplay = false
            }
        };
        this.Mute = function() {
            o.media.Mute();
            o.controls.Mute();
            o.muted = true;
            js("mute")
        };
        this.Unmute = function() {
            o.media.Unmute();
            o.muted = false;
            o.controls.Unmute();
            js("unmute")
        };
        this.Volume = function(x, y) {
            x < 0.02 ? x = 0 : '';
            x > 1 ? x = 1 : '';
            if (x <= 0) { this.Mute() } else {
                if (o.muted) { this.Unmute() }
                v.volume = x
            }
            js("volume", x);
            o.controls.Volume(x, y);
            o.media.Volume(x)
        };
        this.Waiting = function() { o.controls.Waiting() };
        this.StopWaiting = function() { o.controls ? o.controls.StopWaiting() : '' };
        this.Progress = function() { this.StopWaiting() };
        this.Seeked = function() {
            o.actions.UpdatePlay();
            this.StopWaiting()
        };
        this.Duration = function(time, duration) {
            if (o.continue && !o.start) { var f = o.continue.flag(); if (f.t && f.d) { time = f.t } }
            o.controls.Duration(time, duration)
        };
        this.LoadedData = function(time, duration) {
            if (exist(o.seekto) && o.file_type != "youtube") {
                o.actions.Seek(o.seekto, false);
                o.seekto = undefined
            }
        };
        this.ScreenClick = function() {
            var d = new Date();
            o.clicktime = d.getTime();
            var x = false;
            if (o.controls.SettingsVisible() && v.settings.always != 1) {
                o.controls.Settings();
                x = true
            }
            if (o.droplist) {
                if (o.droplist.Visible()) {
                    o.droplist.Close();
                    x = true
                }
            }
            if (v.playlist.always == 0) {
                if (o.controls.PlaylistVisible() && v.playlist.autohide == 1) {
                    o.controls.Playlist();
                    x = true
                }
            }
            if (v.redirect == 1 && exist(v.redirectonclick) && !exist(options.redirect)) {
                redirect(v.redirectonclick);
                x = true
            }
            if (!x) { this.Toggle() }
        };
        this.ControlsBgClick = function() { if (o.controls.SettingsVisible()) { o.controls.Settings() } };
        this.Toggle = function() {
            if (o.media.status() == "playing") { this.Pause() } else { this.Play() }
            Subtitle(o.media.time())
        };
        this.Seek = function(sec, hand) {
            if (sec < o.media.duration()) {
                o.seeked_time = sec;
                o.media.Seek(sec);
                if (hand) { o.controls.Seek(sec, o.media.duration()) }
                o.seeking = true;
                o.seeking_time = o.media.time();
                Subtitle(o.seeking_time)
            }
        };
        this.Open = function(url, target, endfull) {
            if (o.media.status() == "playing" && o.mode != 'audio') { Pause(); if (o.fullscreen && endfull) { o.controls.Normalscreen() } }
            window.open(url, target)
        };
        this.Download = function() {
            var x = o.media.currentFile();
            if (exist(v.download)) { x = v.download }
            if (x != '') {
                js("download");
                var win = window.open(x, '_blank');
                win.focus()
            }
        };
        this.UpdatePlay = function() {
            var time = o.media.time();
            var duration = o.media.duration();
            o.controls.Played(time, duration)
        };
        this.Playing = function() {
            var time = o.media.time();
            var duration = o.media.duration();
            var delta = duration > 0 ? time / duration : 0;
            if (!o.seeking) { o.controls ? o.controls.Played((o.seekto > 0 ? o.seekto : time), duration) : '' } else { time != o.seeking_time ? o.seeking = false : '' }
            if ((v.ga == 1 || v.yamtr == 1) && duration > 0) {
                gaTrackPlay("play25", "Play 25%", delta, 0.25);
                gaTrackPlay("play50", "Play 50%", delta, 0.50);
                gaTrackPlay("play75", "Play 75%", delta, 0.75)
            }
            for (var i = 0; i < 3; i++) { if (!o.quartile[i]) { if (delta >= i * 0.25 + 0.25) { Quartile(i) } } }
            v.reloadlog == 1 ? log(1, time, duration) : '';
            if (v.reload == 1) {
                if (o.play) {
                    var z = false;
                    var rld = false;
                    if (v.reloadlive == 1) { if (!o.media.isLive()) { z = true } }
                    if (time > 0) {
                        if (time == o.time && !z) { rld = true } else { o.reloadTimer = 0 }
                        o.time = time
                    } else {
                        if (v.reloadstart == 1) {
                            var ld = o.media.loaded();
                            v.reloadlog == 1 ? log(2, ld, o.timeld) : '';
                            if (!z) { if (ld == o.timeld) { rld = true } else { o.reloadTimer = 0 } }
                            o.timeld = ld
                        }
                    }
                    if (rld) {
                        o.reloadTimer++;
                        v.reloadlog == 1 ? log(3, o.reloadTimer) : '';
                        if (o.reloadTimer == v.reloadtimeout * (1000 / o.timerTime)) { o.actions.Reload() }
                    }
                }
            }
            if (v.vast == 1) {
                v.nomidroll != 1 && v.midrolls == 1 ? MidrollOverlay("midroll", time, duration) : '';
                v.nooverlay != 1 && v.overlays == 1 ? MidrollOverlay("overlay", time, duration) : ''
            }
            if (v.intros == 1 && v.introstart > 0) {
                if (time >= v.introstart) {
                    if (!exist(o.vast)) {
                        if (Advertising("intro")) {
                            o.media.Pause();
                            o.controls.Pause()
                        }
                        v.introstart = 0
                    }
                }
            }
            SettingsTimers("play");
            if (v.pass == 1 && v.passontime > -1) { PasswordTime(time, duration) }
            if (o.subtitle_on) { Subtitle(time) }
            if (o.storage && v.timestore == 1) { o.continue.write(time, duration) }
            if (exist(v.end)) {
                if (v.end > 0 && time > v.end) {
                    if (o.file_type == "youtube") {
                        o.media.Pause();
                        o.media.Seek(v.start > 0 ? v.start : 0)
                    } else {
                        o.media.Recover();
                        o.actions.Stop()
                    }
                    v.start > 0 ? o.seekto = v.start : '';
                    o.actions.Ended()
                }
            }
            if (exist(v.remove)) { var r1 = v.remove.split(","); for (var i = 0; i < r1.length; i++) { var r2 = r1[i].split("-"); if (r2.length == 2) { if (time > r2[0] && time < r2[1]) { o.media.Seek(r2[1]) } } } }
        };

        function Quartile(x) { o.quartile[x] = true; if (v.timestore == 1 && v.playedstore == 1 && v.playedquartile == x) { if (o.storage && o.plid) { o.continue ? o.continue.writePl(o.plid) : '' } } }

        function gaTrackPlay(x, y, t, p) { if (!exist(o.gatracked[y])) { if (t > p) { gaTracker(x, y, true) } } };
        this.Reload = function() {
            o.reloadTimer = 0;
            if (v.reloadjustevent == 1) { js("reload") } else {
                o.seekto > 0 || o.media.isLive() ? '' : o.seekto = o.media.time();
                var openpl = o.controls.PlaylistVisible();
                js("reload");
                o.media.reload();
                openpl && v.playlist.autohide == 1 ? o.controls.PlaylistShow() : ''
            }
        };
        this.Stopped = function() {
            o.controls.Played(0, 0);
            o.controls.Loaded(0, 0);
            o.actions.Duration(0, 0);
            o.controls.StopWaiting()
        };
        this.Loading = function() {
            var time = o.media.loaded();
            var duration = o.media.duration();
            o.controls ? o.controls.Loaded(time, duration) : ''
        };
        this.Ended = function() {
            js("fileend");
            if (v.loop == 1) {
                if (o.file_type == "youtube") { this.Stop() }
                if (v.start > 0) { o.actions.Seek(v.start) }
                this.Play()
            } else {
                if (o.media.isLive() || o.file_type == "youtube") { this.Stop() } else { if (v.finishrewind == 1) { o.actions.Seek((v.start > 0 ? v.start : 0), true); if (o.system.ie) { o.media.Pause() } } }
                o.controls.onEnded();
                v.intros == 1 ? v.outros = 1 : '';
                if (Advertising("postroll") || Advertising("outro")) {} else { End() }
            }
        };
        this.Fullscreen = function() {
            o.frameresize.contentWindow.onresize = Resize;
            var stop = false;
            var error = false;
            o.fs_error = false;
            o.fullscreen_process = true;
            setTimeout(function() { o.fullscreen_process = false }, 3000);
            for (var x in o.motions) { if (o.motions.hasOwnProperty(x)) { if (exist(o.motions[x])) { try { o.motions[x].TheEnd2() } catch (e) {} } } }
            try {
                o.fullscreen_start = true;
                if (o.system.ios && v.nativefullios == 1 && o.tagvideo && v.nativecontrolsmobile != 1) {
                    var x = o.media.tag();
                    if (x) {
                        if (x.webkitSupportsFullscreen) {
                            x.webkitEnterFullScreen();
                            x.addEventListener("webkitendfullscreen", iosExitFullscreen);
                            o.media.nativeSubtitle();
                            stop = true
                        }
                    }
                }
                if (!stop) {
                    if (o.frame.requestFullScreen) {
                        o.frame.requestFullScreen({ navigationUI: "hide" });
                        o.realfullscreen = true
                    } else if (o.frame.requestFullscreen) {
                        o.frame.requestFullscreen({ navigationUI: "hide" });
                        o.realfullscreen = true
                    } else if (o.frame.mozRequestFullScreen) {
                        o.frame.mozRequestFullScreen({ navigationUI: "hide" });
                        o.realfullscreen = true
                    } else if (o.frame.webkitRequestFullScreen) {
                        o.frame.webkitRequestFullScreen({ navigationUI: "hide" });
                        o.realfullscreen = true
                    } else if (o.frame.msRequestFullscreen) {
                        o.frame.msRequestFullscreen();
                        o.realfullscreen = true
                    }
                }
            } catch (e) {
                error = true;
                log(e)
            }
            if (!o.realfullscreen && !stop) { this.FullscreenUI() }
            if (!error) { setTimeout(PostFullscreen, 200) }
        };

        function PostFullscreen() {
            if (o.fs_error != true) {
                if (o.ispipkit) { o.media.PipWebkit() }
                if (v.hotkey.volumewheelfull == 1) {
                    VolumeWheelX(true);
                    o.volumewheel = true
                }
                v.effects == 1 ? o.effects.api("full") : '';
                js("fullscreen");
                gaTracker("full", "Fullscreen", true)
            }
        };
        var volumewheelin;
        var lastwheel = { x: 0, y: 0 };

        function VolumeWheel(e) {
            if (o.droplist) { if (o.droplist.OpenScroll()) { return } }
            o.hidden_volume_over = true;
            clearInterval(volumewheelin);
            volumewheelin = setInterval(function() {
                o.hidden_volume_over = false;
                o.controls.resize();
                lastwheel = { x: 0, y: 0 };
                clearInterval(volumewheelin)
            }, 2000);
            o.controls.resize();
            e.preventDefault();
            e.deltaX != 0 ? lastwheel.x++ : lastwheel.x--;
            e.deltaY != 0 ? lastwheel.y++ : lastwheel.y--;
            if (e.wheelDelta != 0) {
                if (lastwheel.x > lastwheel.y) { if (e.deltaX > 0) { o.actions.Volume(parseFloat(v.volume) - v.hotkey.wheelstep / 10, "no") } else { o.actions.Volume(parseFloat(v.volume) + v.hotkey.wheelstep / 10, "no") } } else { if (e.deltaY > 0) { o.actions.Volume(parseFloat(v.volume) + (o.system.win ? -v.hotkey.wheelstep / 10 : v.hotkey.wheelstep / 10), "no") } else { o.actions.Volume(parseFloat(v.volume) - (o.system.win ? -v.hotkey.wheelstep / 10 : v.hotkey.wheelstep / 10), "no") } }
                o.controls.volumescroll()
            }
        }

        function iosExitFullscreen() {
            if (o.system.ios) {
                o.media.removeNativeSubtitle();
                js("exitfullscreen")
            }
        }
        this.FullscreenUI = function() {
            if (o.fullscreen_start) {
                o.fullscreen = true;
                o.controls.Fullscreen();
                if (!o.realfullscreen) {
                    if (exist(o.parentIframe)) { try { css(o.parentIframe, { 'width': '100%', 'height': '100%', 'position': 'fixed', 'left': 0, 'top': 0, 'zIndex': "100000" }) } catch (err) {} }
                    css(o.frame, { 'width': '100%', 'height': '100%', 'position': 'fixed', 'left': 0, 'top': 0, 'zIndex': "100000" });
                    o.screen_w = o.frame.offsetWidth;
                    o.screen_h = o.frame.offsetHeight;
                    try { document.body.style.overflow = 'hidden'; if (!exist(o.playlist)) { document.ontouchmove = function(e) { e.preventDefault() } } } catch (err) {}
                }
                if (v.fullblack == 1) { css(o.frame, { 'backgroundColor': '#000000' }) }
                if (o.droplist) { o.droplist.Close() }
                Subtitle(o.media.time());
                o.fullscreen_start = false
            }
        };
        this.Normalscreen = function() { _fullscreen_end = true; if (document.cancelFullScreen) { document.cancelFullScreen() } else if (document.exitFullscreen) { document.exitFullscreen() } else if (document.cancelFullscreen) { document.cancelFullscreen() } else if (document.mozCancelFullScreen) { document.mozCancelFullScreen() } else if (document.webkitCancelFullScreen) { document.webkitCancelFullScreen() } else if (document.msExitFullscreen) { document.msExitFullscreen() } if (!o.realfullscreen) { this.NormalscreenUI(false) } };
        this.changeAspect = function(x, y) { NewAspect(x, y) };

        function NewAspect(x, frmvst) {
            if (exist(o.vast) && !frmvst) { o.resizeonplay = x } else {
                var stop = false;
                var coh = o.container_w / x;
                if (exist(o.parentIframe)) {
                    try { css(o.parentIframe, { 'height': coh }) } catch (err) {
                        stop = true;
                        log("iframe crossdomain issue")
                    }
                }
                if (!stop) {
                    o.aspect = x;
                    o.container_h = coh;
                    if (o.aspect > 0) { css(o.container, { 'height': coh }) }
                    js("height", coh)
                }
                if (o.vast && !o.fullscreen) {
                    o.screen_h = coh;
                    o.vast.Resize()
                }
            }
        };
        this.NormalscreenUI = function(x) {
            if (_fullscreen_end || x) {
                o.fullscreen = false;
                if (!o.realfullscreen) {
                    if (exist(o.parentIframe)) {
                        try {
                            css(o.parentIframe, { 'position': 'static', 'left': 0, 'top': 0, 'zIndex': 'unset' });
                            css(o.parentIframe, o.parentIframe_style);
                            css(o.parentIframe, { 'width': o.normal_w, 'height': o.normal_h })
                        } catch (err) {}
                    }
                    css(o.frame, { 'width': o.normal_w, 'height': o.normal_h, 'position': 'absolute', 'left': 0, 'top': 0, 'zIndex': 'unset' });
                    try {
                        document.body.style.overflow = 'auto';
                        document.ontouchmove = function(e) { return true }
                    } catch (err) {}
                }
                o.controls.Normalscreen();
                if (v.fullblack == 1) { css(o.frame, { 'backgroundColor': v.screencolor }); if (v.transparent == 1) { o.frame.style.backgroundColor = 'transparent' } else { css(o.frame, { 'backgroundColor': v.screencolor }) } }
                if (v.hotkey.volumewheelfull == 1) {
                    VolumeWheelX(false);
                    o.volumewheel = false
                }
                if (o.droplist) { o.droplist.Close() }
                Subtitle(o.media.time());
                o.controls.PlaylistHere();
                _fullscreen_end = false;
                js("exitfullscreen");
                o.realfullscreen = false;
                o.fullscreen_process = false
            }
        };
        this.volumewheel = function(x) { VolumeWheelX(x) };

        function VolumeWheelX(x) {
            lastwheel = { x: 0, y: 0 };
            if (x) { window.addEventListener("wheel", VolumeWheel, { passive: false }) } else {
                clearInterval(volumewheelin);
                window.removeEventListener("wheel", VolumeWheel, { passive: false })
            }
        }
        this.Stop = function() {
            v.preload = 0;
            o.controls.Pause();
            o.actions.Stopped();
            o.media.Volume(v.volume);
            if (o.controls.SettingsVisible()) { o.controls.Settings() }
            if (o.muted) { this.Mute() }
            if (exist(o.heartbeatInterval)) {
                clearInterval(o.heartbeatInterval);
                o.heartbeatInterval = null
            }
            Subtitle(0);
            log("stop");
            js("stop")
        };
        this.SetQuality = function(x) {
            if (exist(o.current_quality)) {
                if (o.current_quality != x) {
                    o.current_quality = x;
                    if (v.qualitystore == 1) { o.default_quality = o.files_quality[x]; if (o.storage) { localStorage.setItem("pljsquality", o.default_quality) } }
                    o.media.SetQuality(x);
                    js("quality", o.files_quality[x]);
                    o.controls.QualityChanged(x)
                }
            }
        };
        this.AirplayChanged = function() { o.controls ? o.controls.AirplayChanged() : '' };
        this.SetAudioTrack = function(x) {
            if (exist(o.current_audiotrack)) {
                if (o.current_audiotrack != x) {
                    o.current_audiotrack = x;
                    if (v.trackstore == 1) { o.default_audio = v.default_audio = o.files_audiotrack[x]; if (o.storage) { localStorage.setItem("pljstrack", o.default_audio) } }
                    o.media.SetAudioTrack(x);
                    js("audiotrack", x);
                    o.controls.SettingChanged("audiotrack")
                }
            }
        };
        this.SetSubtitle = function(x) {
            if (exist(o.current_subtitle)) {
                if (o.current_subtitle != x) {
                    if (v.sub_off == 1 && x == o.files_subtitle.length - 1) { SubtitleOff() } else {
                        o.current_subtitle = x;
                        o.subtitle_on = true;
                        o.media.SetSubtitle(x);
                        js("subtitle", o.files_subtitle[x]);
                        o.controls.SubtitleChanged()
                    }
                } else { if (v.sub_off != 1) { SubtitleOff() } }
            }
        };

        function SubtitleOff() {
            o.current_subtitle = v.sub_off == 1 ? o.files_subtitle.length - 1 : -1;
            v.subtitle_start = 0;
            o.subtitle_on = false;
            o.controls.SubtitleChanged();
            o.hls_subs || o.dash_subs ? o.media.SetSubtitle(o.current_subtitle) : '';
            exist(o.subtitle) ? o.mediacontainer.removeChild(o.subtitle) : '';
            o.subtitle = null
        }
        this.SetSpeed = function(x) {
            o.media.SetSpeed(x == o.speed1 ? 1 : o.files_speed[x]);
            o.current_speed = x
        };
        this.RenewSubtitle = function() {
            Subtitle(o.media.time());
            StyleSubtitle()
        };

        function Subtitle(time) {
            if (o.subtitle_on && exist(o.subs)) {
                var sub = o.media.sub();
                if (sub) {
                    var x = o.current_subtitle;
                    if (exist(sub[x])) {
                        if (exist(sub[x][1])) {
                            var t = parseInt(time * 10);
                            if (exist(sub[x][1][t])) {
                                var y = '';
                                y = sub[x][0][sub[x][1][t]];
                                if (!exist(o.subtitle)) {
                                    o.subtitle = createElement('div');
                                    o.mediacontainer.appendChild(o.subtitle);
                                    StyleSubtitle()
                                }
                                if (o.controls.ToolbarHidden()) { css(o.subtitle, { "position": "absolute", "bottom": (v.sub_bottom * 1) }) } else { css(o.subtitle, { "position": "absolute", "bottom": (v.sub_bottom * 1 + v.toolbar.h * 1) }) }
                                if (v.sub_split2words == 1) { y = PluginSubword(y) }
                                if (v.sub_all == 1) {
                                    y = y.replace(/\[sub2\]/gm, '<span style="color:' + (v.sub_color2.indexOf("#") == -1 ? '#' : '') + v.sub_color2 + '">');
                                    y = y.replace(/\[\/sub2\]/gm, '</span>')
                                }
                                o.subtitle.innerHTML = '<span style="' + (v.sub_bg == 1 ? 'background-color:' + hexToRGBA(v.sub_bgcolor, v.sub_bga) : '') + '-webkit-box-decoration-break: clone;color:' + (v.sub_color.indexOf("#") == -1 ? '#' : '') + v.sub_color + ';padding:' + v.sub_bgpadding + 'px ' + v.sub_bgpadding * 2 + 'px;border-radius:' + v.sub_bgo + 'px;margin:0 0;line-height:1.8;font-weight:' + v.sub_weight + '">' + trim(y) + '</span>';
                                if (v.sub_big_fullscreen == 1) { if (o.fullscreen) { css(o.subtitle, { "font-size": ((v.sub_size_fullscreen + ((parseInt(v.sub_sizeproc) - 100) * v.sub_size / 100)) + "px") }) } else { css(o.subtitle, { "font-size": ((v.sub_size + ((parseInt(v.sub_sizeproc) - 100) * v.sub_size / 100)) + "px") }) } }
                                _subtitle_empty = false
                            } else {
                                if (!_subtitle_empty && exist(o.subtitle)) {
                                    o.subtitle.innerHTML = '';
                                    _subtitle_empty = true
                                }
                            }
                        }
                    }
                }
            }
        }

        function StyleSubtitle() {
            if (o.subtitle) {
                css(o.subtitle, { "position": "absolute", "width": "100%", "padding-left": "10%", "padding-right": "10%", "left": 0, "color": v.sub_color, "text-align": "center", "box-sizing": "border-box" });
                o.subtitle.draggable = "true";
                if (v.sub_shadow == 1) { css(o.subtitle, { "text-shadow": "1px 1px 2px black" }) } else { css(o.subtitle, { "text-shadow": "none" }) }
            }
        }
        var vast_and;
        var vast_or;
        var vast_type;
        var vast_loaders;
        var vasturl;

        function Advertising(x) {
            if (v["vast_" + x + "timebreak"] > 0 && o.storage) {
                var tb = localStorage.getItem("pljs" + x + "_" + v.d);
                if (tb) {
                    var ct = new Date();
                    o.clicktime = ct.getTime();
                    var ct2 = (ct.getTime() - tb) / 3600000;
                    if (ct2 < v["vast_" + x + "timebreak"]) { return false }
                }
            }
            if (v["vast_" + x + "timelimit"] > 0) { if (o.media.duration() > 0) { if (o.media.duration() < v["vast_" + x + "timelimit"] * 60) { if (v["vast_" + x + "timelimited"] > 0) { v.vast_preroll_andlimit = v["vast_" + x + "timelimited"] } else { return false } } } }
            if (o.compilations.indexOf("VAST") != -1 && v.vast == 1 && !o.noads && v[x + 's'] == 1) {
                if (typeof VastVideo == "undefined") { return false }
                if (x == "intro" || x == "outro") { if (typeof PluginIntro !== "undefined") { vasturl = []; return PluginIntro(x) } }
                if (exist(o.vast) || exist(o.vastloader)) { js("vast_init", x); return true } else {
                    if (exist(v[x])) {
                        if (v[x].toString().indexOf(".") > -1 || v[x].toString().indexOf(":") > -1) {
                            js("vast_init", x);
                            if (x != "midroll" && x != "overlay") {
                                o.actions.Waiting();
                                Curtain()
                            }
                            vast_and = 0;
                            vast_or = 0;
                            vast_type = x;
                            vasturl = v[x].split(" and ");
                            vast_loaders = [];
                            o.adsinchain = vasturl.length;
                            o.adscounter = 1;
                            o.adsfirst = true;
                            for (var i = 0; i < vasturl.length; i++) { vasturl[i] = vasturl[i].split(" or ") }
                            v[x + "_recover"] = v[x];
                            v[x] = null;
                            o.vasttype = x;
                            if (x != 'overlay') { o.vast = new VastVideo() }
                            o.vastloader = new VastLoader();
                            for (var i = 0; i < vasturl.length; i++) {
                                for (var j = 0; j < vasturl[i].length; j++) {
                                    var _url = trim(vasturl[i][j]);
                                    if (_url.indexOf("[50%]") > 0) {
                                        var tmp = random(1, 2);
                                        vasturl[i][j] = vasturl[i][j].replace("[50%]", "");
                                        if (tmp == 2) { vasturl[i][j] = '' }
                                    }
                                }
                            }
                            if (v.vast_preload == 1) {
                                for (var i = 0; i < vasturl.length; i++) {
                                    var n = i == 0 ? 1 : 0;
                                    if (vasturl[i].length > n) {
                                        for (var j = n; j < vasturl[i].length; j++) {
                                            var _url = trim(vasturl[i][j]);
                                            vast_loaders[_url] = new VastLoader(true);
                                            vast_loaders[_url].Load(_url, x)
                                        }
                                    }
                                }
                            }
                            o.vastloader.Load(trim(vasturl[0][0]), x);
                            return true
                        } else { return false }
                    } else { return false }
                }
            } else { return false }
        };
        this.advertising = function(x) { Advertising(x) };

        function MidrollOverlay(w, x, d) {
            if (exist(o[w + 'o']) && v[w + 's'] == 1) {
                var y;
                for (var i in o[w + 'o']) {
                    if (o[w + 'o'].hasOwnProperty(i)) {
                        if (!exist(o[w + 'o'][i].worked) && exist(o[w + 'o'][i].time) && exist(o[w + 'o'][i].vast)) {
                            var z = o[w + 'o'][i].time.toString();
                            if (z) {
                                if (z.indexOf("%") > 0) { if (d > 0) { z = parseInt(z.substr(0, z.indexOf("%"))) * d / 100 } else { z = -1 } } else { z = parseInt(z) }
                                if (x >= z) {
                                    if (v['vast_' + w + 'rest'] > 0 && z > -1) { if (x - z >= v['vast_' + w + 'rest']) { z = -1 } }
                                    if (z > -1) {
                                        y = o[w + 'o'][i].vast;
                                        v[w] = o[w + 'o'][i].vast;
                                        if (Advertising(w)) { o[w + 'o'][i].worked = true; break }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        this.VastReady = function(x) {
            o.vastloader = null;
            log("VAST ready");
            js("vast_ready", o.vasttype);
            if (x.type == "overlay") {
                var ovr = new VastOverlay(x);
                o.overlays.push(ovr)
            } else {
                if (exist(o.vast)) {
                    if (o.play) {
                        o.media.Pause();
                        o.controls.Pause()
                    }
                    if (v.preload == 0 && v.vastbgpreload == 1 && o.media.time() == 0 && o.media.duration() == 0) {
                        v.preload = 1;
                        o.media.Preload()
                    }
                    if ((!o.vast.tagLive() || x.isVpaid) && o.vastgo > 0) {
                        log("VAST renew");
                        o.vast.Remove();
                        o.vast = null;
                        o.vast = new VastVideo()
                    }
                    o.vastgo++;
                    if (o.adsfirst && v.vast_longtimeout > 0) {
                        clearTimeout(o.vast_longtimeout);
                        o.vast_longtimeout = setTimeout(VastLongTimeout, v.vast_longtimeout * 1000 * 60);
                        if (exist(v.vast_longtimemsg)) {
                            if (v.vast_longtimemsg != '') {
                                o.vast_longtomsg ? o.vast_longtomsg.remove() : '';
                                o.vast_longtomsg = new PluginVastTimeMsg()
                            }
                        }
                    }
                    o.adsfirst = false;
                    if (v.vast_prestarttimeout > 0) {
                        log("VAST startdelay");
                        js("vast_startdelay");
                        setTimeout(VastGo, v.vast_prestarttimeout * 1000, x)
                    } else { VastGo(x) }
                } else { log("VAST alarm") }
            }
        };

        function VastGo(x) { o.vast.Go(x) }

        function VastLongTimeout() {
            if (exist(o.vast)) {
                if (o.vast.active() && o.vast_impressions == 0) {
                    o.vast.RemoveForNextAd();
                    log("VAST timeout " + v.vast_longtimeout);
                    vasturl = [];
                    VastRemoveAndPlay()
                }
            }
        }
        this.VastError = function() {
            js('vast_error', o.vasttype);
            log("VAST error");
            VastNext()
        };
        this.VastNext = function() { var stop = false; var nolimit = false; if (o.vasttype == "preroll") { if (v.vast_preroll_and2limit > 0 && o.vast_starts > 0) { nolimit = true; if (o.vast_impressions >= v.vast_preroll_and2limit) { stop = true } } if (v.vast_preroll_andlimit > 0 && !nolimit) { if (v.vast_preroll_2andlimit == 1 && o.vast_starts == 0) {} else { if (o.vast_impressions >= v.vast_preroll_andlimit) { stop = true } } } }!stop ? VastNext() : VastRemoveAndPlay() };
        this.VastRemoveUrl = function(x) { if (v[o.vasttype + "_recover"]) { for (var i = 0; i < 3; i++) { v[o.vasttype + "_recover"] = v[o.vasttype + "_recover"].replace(x + (i == 0 ? ' and ' : (i == 1 ? ' or ' : '')), '') } } };

        function VastNext() {
            if (vasturl.length > 0) {
                if (vast_or < vasturl[vast_and].length - 1) {
                    o.vast ? o.vast.RemoveForNextAd() : '';
                    vast_or++;
                    var _url = trim(vasturl[vast_and][vast_or]);
                    var _preloaded = VastPreloaded(_url);
                    if (_preloaded == 'skip') {
                        o.vastloader = new VastLoader();
                        o.vastloader.Load(_url, o.vasttype)
                    }
                    if (_preloaded == 'error') { VastNext() }
                } else { VastRemoveAndPlay() }
            } else { VastRemoveAndPlay() }
        }

        function VastPreloaded(_url) {
            var x = 'skip';
            if (v.vast_preload == 1) {
                if (vast_loaders[_url]) {
                    var y = vast_loaders[_url].Status();
                    if (y == 'ready') {
                        o.vastloader = vast_loaders[_url];
                        log("VAST preloaded");
                        vast_loaders[_url].Ready();
                        x = y
                    } else {
                        if (y == '') {
                            x = 'ok';
                            o.vastloader = vast_loaders[_url];
                            vast_loaders[_url].disablePreload()
                        }
                        if (y == 'error') { x = 'error' }
                    }
                }
            }
            return x
        }
        this.VastInsertAnd = function(x) {
            if (x != '') {
                vasturl.splice(vast_and + 1, 0, [x]);
                VastAddPreload(x)
            }
        };
        this.VastInsertOr = function(x) {
            if (vasturl[vast_and] && x != '') {
                vasturl[vast_and].push(x);
                VastAddPreload(x)
            }
        };
        this.VastRemoveAndPlay = function(x) { VastRemoveAndPlay(x) };

        function VastAddPreload(x) {
            if (v.vast_preload == 1 && vast_loaders) {
                vast_loaders[x] = new VastLoader(true);
                vast_loaders[x].Load(trim(x), o.vasttype)
            }
        }

        function VastRemoveAndPlay(dontplay) {
            var stop = false;
            var nolimit = false;
            if (o.vasttype == "preroll") { if (v.vast_preroll_and2limit > 0 && o.vast_starts > 0) { nolimit = true; if (o.vast_impressions >= v.vast_preroll_and2limit) { stop = true } } if (v.vast_preroll_andlimit > 0 && !nolimit) { if (v.vast_preroll_2andlimit == 1 && o.vast_starts == 0) {} else { if (o.vast_impressions >= v.vast_preroll_andlimit) { stop = true } } } }
            if (vasturl.length == 1) {
                if (vasturl[0][0].indexOf("js:") == 0) {
                    vast_and = -1;
                    vasturl = [
                        [vasturl[0][0]]
                    ]
                }
            }
            if (o.vast_stop == 2) { stop = true }
            if (vasturl.length > vast_and + 1 && !stop) {
                o.vast.RemoveForNextAd();
                vast_and++;
                o.adscounter++;
                vast_or = 0;
                var _url = trim(vasturl[vast_and][0]);
                var _preloaded = VastPreloaded(_url);
                if (_preloaded == 'skip') {
                    o.vastloader = new VastLoader();
                    o.vastloader.Load(_url, vast_type)
                }
                if (_preloaded == 'error') { VastRemoveAndPlay(dontplay) }
            } else {
                RemoveCurtain();
                o.controls.StopWaiting();
                if (exist(o.vast)) {
                    o.vast.Remove();
                    o.vast = null
                }
                o.vastloader = null;
                vasturl = [];
                vast_or = 0;
                vast_and = 0;
                js("vast_finish", o.vasttype);
                if (v.vast_ima == 1) {
                    if (o.ima) {
                        o.ima.Destroy();
                        o.ima = undefined
                    }
                }
                vast_type = '';
                o.vast_impressions = 0;
                clearTimeout(o.vast_longtimeout);
                o.vast_longtomsg ? o.vast_longtomsg.remove() : '';
                o.vast_starts++;
                if (o.vasttype == "preroll" || (o.vasttype == "pauseroll" && v.pauserollonplay == 1) || o.vasttype == "midroll") { if (v.file != '?') { o.media.AfterVast(); if ((o.file_type == "youtube" && !o.vastclick && o.system.ios) || dontplay == 'dontplay' || v.vast_dontplay == 1) {} else { o.actions.Play(1) } } }
                if (o.resizeonplay > 0) {
                    NewAspect(o.resizeonplay);
                    o.resizeonplay = 0
                }
                if (o.vasttype == "postroll") { End() }
                o.vastclick = false;
                o.vasttype = null
            }
        };
        this.EmptyVastUrl = function() {
            vasturl = [
                ['']
            ]
        };
        this.VastRecover = function() { var x = ['preroll', 'pauseroll', 'postroll']; for (var i = 0; i < x.length; i++) { if (exist(v[x[i] + "_recover"])) { v['vast_' + x[i] + '_' + 'limit']--; if (v['vast_' + x[i] + '_' + 'limit'] > 0) { v[x[i]] = v[x[i] + "_recover"] } } } };
        this.Password = function() {
            Curtain();
            if (exist(o.pass)) {
                o.pass.Remove();
                o.pass = null
            }
            o.pass = new Pass()
        };
        this.RemovePassword = function() {
            RemoveCurtain();
            o.pass.Remove();
            o.pass = null
        };

        function Curtain() {
            o.curtain = createElement("div");
            o.frame.appendChild(o.curtain);
            css(o.curtain, { "width": "100%", "height": "100%", "position": "absolute", "top": 0, "left": 0, "background": "#000000", "opacity": 0.1 });
            o.curtain.style.zIndex = 1000
        };

        function ShowPoster() {
            if (exist(o.poster)) {
                if (v.poster != o.currentposter) { Poster(v.poster, o.poster, v.poster_scale) }
                show(o.poster);
                css(o.poster, { "opacity": v.poster_a });
                o.controls.refresh()
            }
        };
        this.HidePoster = function() {
            if (exist(o.poster)) {
                if (o.media.time() == 0 && v.posterhidestart == 1) {} else {
                    hide(o.poster);
                    css(o.poster, { "opacity": 0 })
                }
            }
        };
        this.ShowPoster = function() { ShowPoster() };

        function RemoveCurtain() {
            if (o.curtain) {
                o.frame.removeChild(o.curtain);
                o.curtain = null
            }
        };

        function StopOtherPlayer(x) {
            if (v.stopotherplayers == 1) { for (var i = 0; i < pljssglobal.length; i++) { if (pljssglobal[i].api("id") != v.id) { pljssglobal[i].api('pause') } } }
            pljssglobalid = v.id
        }

        function IndexPlaylist(x) { var y = Object.keys(x).length; if (y > 0) { x = IndexPlaylistProcessor(x, y, '', -1) } return x }

        function IndexPlaylistProcessor(x, y, p, j) {
            var x2 = [];
            var stop;
            if (exist(x['playlist'])) {
                x = x['playlist'];
                y = x.length
            }
            var ii = 0;
            for (var i = 0; i < y; i++) {
                stop = false;
                if (exist(x[i]['id'])) { x[i]['pjs_id'] = x[i]['id'] }
                x[i]['id'] = "x" + p + '-' + i + (exist(x[i]['id']) ? '-' + x[i]['id'] : '');
                j == -1 && i == 0 && !exist(x[i]['folder']) ? o.pl_first_id = x[i]['id'] : '';
                if (!exist(o.pl_first_id)) { j == 0 && !exist(x[i]['folder']) ? o.pl_first_id = x[i]['id'] : '' }
                x[i]['pjs_parent'] = p;
                x[i]['pjs_parent_i'] = j;
                x[i]['pjs_i'] = ii;
                if (exist(x[i]['comment'])) {
                    x[i]['title'] = x[i]['comment'];
                    var q1 = x[i]['file'] ? x[i]['file'].indexOf('[') : 0;
                    var q2 = x[i]['file'] ? x[i]['file'].indexOf(']') : 0;
                    if (q1 > 0 && q2 > 0) {
                        var s1 = x[i]['file'].substr(q1 + 1, q2 - q1 - 1);
                        var s2 = s1.split(",");
                        var s3 = '';
                        for (var k = 0; k < s2.length; k++) { s3 += "[" + s2[k] + "]" + x[i]['file'].replace("[" + s1 + "]", s2[k]) + (k < s2.length - 1 ? "," : '') }
                        x[i]['file'] = s3
                    }
                }
                if (exist(x[i]['playlist'])) { x[i]['folder'] = x[i]['playlist'] }
                if (!exist(x[i]['folder'])) { if (exist(x[i]['file'])) { if (x[i]['file'] == '' && !exist(x[i]['redirect'])) { stop = true } } else { stop = true } }
                if (!stop) {
                    o.playlist_dic[x[i]['id']] = x[i];
                    ii += 1
                }
                if (exist(x[i]['folder'])) { var z = Object.keys(x[i]['folder']).length; if (z > 0) { x[i]['folder'] = IndexPlaylistProcessor(x[i]['folder'], z, x[i]['id'], i) } }
                if (!stop) { x2.push(x[i]) }
            }
            return x2
        }

        function FindFileInPlaylist() {
            var x = [];
            if (exist(v.plstart)) {
                if (v.plstart.indexOf("x-") != 0) { for (var y in o.playlist_dic) { if (o.playlist_dic.hasOwnProperty(y)) { if (o.playlist_dic[y].pjs_id == v.plstart) { v.plstart = y } } } }
                if (exist(o.playlist_dic[v.plstart])) {
                    v.playlist.norootplstart == 1 ? v.playlist.openplaylistroot = 0 : '';
                    x = o.playlist_dic[v.plstart]
                } else { x = o.playlist[0]; if (v.plstart == o.plcontinue) { o.seekto = undefined } }
            } else { x = o.playlist[0] }
            for (var i = 0; i < 10; i++) { if (exist(x['folder'])) { x = x['folder'][0] } else { break } }
            v.plstart = x.id;
            if (v.plstart == o.plcontinue) { x.start = undefined }
            return x
        }

        function End() {
            gaTracker("end", "End", true);
            o.actions.VastRecover();
            if (o.storage && v.timestore == 1) { o.continue.write(0, o.media.duration()) }
            if (o.controls.PlaylistExist()) {
                if (v.playlist.autoplaylist == 1 && o.controls.PlaylistNextExist()) { o.controls.PlaylistNext(); if (o.play && o.system.ios && o.file_type != "native") {} } else {
                    if (v.playlist.playlistrewind == 1 && !o.controls.PlaylistNextExist()) {
                        o.media.Remove();
                        o.controls.PlaylistRewind()
                    }
                    if (v.playlist.openplaylistafter == 1) {!o.controls.PlaylistVisible() ? o.controls.Playlist() : '' }
                    ShowPoster();
                    js("finish")
                }
            } else {
                ShowPoster();
                js("finish")
            }
        }

        function Heartbeat() {
            var vts = Math.floor(Date.now() / 1000);
            var fts = (exist(v.livets) ? v.livets : 0) + parseInt(o.media.time());
            var type = 0;
            o.system.desktop ? type = 1 : '';
            o.system.ios ? type = 2 : '';
            o.system.android ? type = 3 : '';
            o.system.winmob ? type = 4 : '';
            o.system.tv ? type = 5 : '';
            var url = v.heartbeat.replace("[vts]", vts);
            url = url.replace("[fts]", fts);
            url = url.replace("[dvtp]", type);
            var gif = document.createElement("img");
            gif.setAttribute('src', url);
            gif.setAttribute('height', '1px');
            gif.setAttribute('width', '1px');
            o.frame.appendChild(gif)
        }
    };
    var Media = function(url) {
        var url;
        var urls;
        var urls_and;
        var current_url;
        var _status = "";
        var _lastime = 0;
        var _ended = false;
        var _tags;
        var media;
        var media2;
        o.mediascale = { x: 1, y: 1, x0: 1, y0: 1 };
        var wait;
        var plurls;
        var current_plurl = 0;
        var sub = [];
        if (typeof(url) == 'string') {
            url = trim(url);
            if (url.indexOf("[{") == 0) {
                try {
                    url = url.replace(/pjs'qt/ig, '"');
                    url = JSON.parse(url);
                    wait ? url = o.actions.File(url) : ''
                } catch (e) {
                    console.log(e);
                    url = "incorrect JSON"
                }
            }
            if (url.indexOf("#2") == 0) { url = fd2(url) }
            if (url) { if (url.indexOf("#3") == 0 && url.indexOf(v.file3_separator) > 0) { url = fd3(url) } }
            if (url) { if (url.indexOf("#0") == 0) { if (url.indexOf(o.pltxt) > 0) { url = fd0(url.replace(o.pltxt, '')) + o.pltxt } else { url = fd0(url) } } }
            if (v.fplace == 1) { url = fplace(url) }
            if (typeof(url) == 'string') {
                if (url.indexOf(".m3u") == url.length - 4 || url.indexOf(".txt") > 0) {
                    plurls = url.split(" or ");
                    PlaylistLoad()
                }
            }
        }
        o.mediacontainer = createElement("div");
        css(o.mediacontainer, { "position": "absolute", "width": "100%", "height": "100%", "transition": "transform 0.2s linear", "text-align": "center" });
        o.frame.appendChild(o.mediacontainer);
        if (!wait) { Start() }

        function PlaylistLoad() {
            url = plurls[current_plurl];
            if (url.indexOf(o.pltxt) > 0) {
                url = url.replace(o.pltxt, '');
                v.file = url
            }
            var xhr = XHR(url);
            xhr.onload = function() { if (this.readyState == 4 && this.status == 200) { Playlist(this) } else { PlaylistError(1) } };
            xhr.onerror = function(e) { PlaylistError(1) };
            xhr.send();
            wait = true
        }

        function PlaylistError(x) {
            if (current_plurl + 1 < plurls.length) {
                current_plurl++;
                PlaylistLoad();
                x = 0
            }
            if (x == 1) { onError("playlist not found or access denied") }
            if (x == 2) { onError("playlists JSON") }
        }

        function Playlist(x) {
            if (x.responseText) {
                var y = x.responseText;
                if (y.indexOf("#2") == 0) { y = fd2(y) }
                if (y.indexOf("#3") == 0 && y.indexOf(v.file3_separator) > 0) { y = fd3(y) }
                if (url.indexOf(".m3u") == url.length - 4) {
                    var m3u = y.split(/(\r\n\t|\n|\r\t)/gm);
                    url = [];
                    var m3ui = 1;
                    var m3ut = '';
                    for (var i = 0; i < m3u.length; i++) {
                        if (m3u[i].indexOf("#EXTINF") > -1) {
                            if (m3u[i].indexOf(" - ") > -1) {
                                var tmp = m3u[i].split(" - ");
                                m3ut = tmp[tmp.length - 1]
                            }
                        }
                        if (m3u[i].indexOf("http") > -1) {
                            url.push({ title: (m3ut != '' ? m3ut : m3ui), file: m3u[i] });
                            m3ui++;
                            m3ut = ''
                        }
                    }
                } else { y = y.replace(/(\r\n\t|\n|\r\t)/gm, ""); try { url = JSON.parse(y) } catch (e) { PlaylistError(2) } }
                if (exist(url.items)) { url = YoutubePlaylist(url) }
                if (o.controls) { if (v.playlist.openplaylistbefore == 1) { if (!o.controls.PlaylistVisible()) { o.controls.PlaylistShow() } } }
                Start();
                Resize();
                setTimeout(function() { js("playlist") }, 1)
            }
        }

        function Start() {
            url = o.actions.File(url);
            url && url != '?' ? File(url) : ''
        }

        function onError(x) {
            log("Error: " + x);
            var y = true;
            if (urls) {
                if (urls.length > 0) {
                    current_url++;
                    y = current_url > urls.length - 1;
                    if (!y) {
                        var z = false;
                        o.seekto > 0 || !o.start || media.isLive() ? '' : o.seekto = media.time();
                        if (o.file_type != FileType(urls[current_url]) || o.file_type != 'native') {
                            if (o.play) {
                                o.actions.Stop();
                                z = true
                            }
                        }
                        log("Alternative source", o.seekto);
                        File('or');
                        o.start ? media.Play() : ''
                    } else {
                        if (v.reload == 1) {
                            y = false;
                            ErrorReload()
                        }
                    }
                }
            }
            if (y) {
                gaTracker("error", "Error", true);
                if (v.alerts && !o.media_error) { if (v.alert404 == 1 && x == "not found") { o.alert.txt(v.alert404text) } else { o.alert.txt(x) } }
                o.media_error = true;
                o.play ? o.controls.Pause() : '';
                exist(o.poster) ? o.actions.ShowPoster() : '';
                js("error", x)
            }
        };

        function ErrorReload() {
            log("Error Reload Timeout");
            exist(o.reloadErrorTimeout) ? clearTimeout(o.reloadErrorTimeout) : '';
            o.reloadErrorTimeout = setTimeout(function() { o.actions.Reload() }, v.reloadtimeout * 1000)
        }
        this.onError = function() { onError(media.errorMessage()) };
        this.onEnded = function() {
            log("Ended");
            _ended = true;
            var x = false;
            if (media.duration() > 0 && !o.casting) {
                var time = o.current_time;
                if (time + 10 < media.duration()) {
                    log('Break (recovery)');
                    js("recovery");
                    media.Play();
                    media.Seek(time);
                    x = true
                }
            }
            if (!x) {
                o.actions.Ended();
                js("end")
            }
        };
        this.onPlay = function() {
            v.posterhide == 1 ? o.actions.HidePoster() : '';
            o.controls.Play();
            o.actions.onPlayTag();
            if (v.tags == 1 && exist(v.tagsurl)) {
                if (v.tagsurl.length > 5) {
                    RadioTags();
                    clearInterval(_tags);
                    _tags = setInterval(RadioTags, v.tagsinterval * 1000)
                }
            }
            js("play")
        };
        this.NativeControls = function() {
            if (v.nativecontrolsmobile == 1 && o.tagvideo) {
                if (o.actions.NativeControls()) {
                    o.nativecontrols = media.nativeControls();
                    o.controls.refresh()
                }
            }
            o.checknative = true
        };
        this.onPause = function() { o.actions.Pause() };
        this.onSeeking = function() { log("Seeking") };
        this.onSeeked = function() {
            log("Seeked");
            o.actions.Seeked();
            o.seeking_time ? js("seek", o.seeking_time) : ''
        };
        this.onMeta = function() {
            log("Metadata");
            o.actions.Metadata()
        };
        this.onDuration = function() {
            if (media) {
                log("Duration", media.duration());
                o.actions.Duration(media.time(), media.duration());
                js("duration", media.duration());
                if (exist(o.restart_audio)) {
                    o.actions.SetAudioTrack(o.restart_audio);
                    o.restart_audio = null
                }
            }
        };
        this.onVolume = function() {};
        this.onWaiting = function() {
            log("Waiting");
            o.actions.Waiting();
            js("waiting")
        };
        this.onTimeupdate = function() {
            if (_lastime != media.time()) { o.actions.StopWaiting(); if (_lastime == 0) { if (v.posterhide == 1 && v.posterhidestart == 1) { o.actions.HidePoster() } } }
            _lastime = media.time();
            js("time", _lastime);
            if (v.pip.on == 1 && exist(v.file2) && _lastime > 0) {
                if (!exist(o.media2)) {
                    o.media2 = createElement("div");
                    v.pip = MarginPadding(v.pip, 'margin', 'margin');
                    css(o.media2, { "background": "#" + v.pip.bgcolor, "border": v.pip.border + "px solid #" + v.pip.bordercolor, "cursor": "pointer", "position": "absolute", "width": v.pip.width });
                    if (v.pip.pip_shadow > 0) { css(o.media2, { "box-shadow": "0px 1px " + v.pip.pip_shadow + "px rgba(0,0,0,0.5)" }) }
                    if (v.pip.position == "top-left" || v.pip.position == "left") { css(o.media2, { "top": v.pip.margintop - v.pip.marginbottom, "left": v.pip.marginleft - v.pip.marginright }) }
                    if (v.pip.position == "top-right" || v.pip.position == "right") { css(o.media2, { "top": v.pip.margintop - v.pip.marginbottom, "right": v.pip.marginright - v.pip.marginleft }) }
                    if (v.pip.position == "bottom-left") { css(o.media2, { "bottom": v.pip.marginbottom - v.pip.margintop, "left": v.pip.marginleft - v.pip.marginright }) }
                    if (v.pip.position == "bottom-right") { css(o.media2, { "bottom": v.pip.marginbottom - v.pip.margintop, "right": v.pip.marginright - v.pip.marginleft }) }!o.mouseHere && v.pip.hide == 1 ? hide(o.media2) : '';
                    o.frame.appendChild(o.media2)
                }
                if (!exist(media2)) {
                    media2 = new MediaVideo(v.file2, o.media2, true);
                    o.media2.addEventListener("click", ClickOnPip, false)
                }
            }
        };
        this.onYoutubeReady = function() { if (o.file_type == "youtube") { media.YoutubeReady() } };
        this.playByYoutubeId = function(x) {
            o.actions.Stop();
            media.playId(x)
        };
        this.YoutubeReady = function() { if (o.file_type == "youtube" && media) { return media.ready() } else { return true } };
        this.getHLS = function() { return media.getHLS() };
        this.getDASH = function() { return media.getDASH() };
        this.SetQuality = function(x) {
            log("Quality", x);
            if ((o.file_type == "native" || o.file_type == "ws" || (o.file_type == "hls" && (v.hlsquality == 0 || HlsLevelsLength() < 2)) || (o.file_type == "dash" && (v.dashquality == 0 || DashLevelsLength() < 2))) && exist(o.files[x])) {
                var time = this.time();
                o.seekto > 0 ? '' : o.seekto = time;
                o.actions.Seek(time, false);
                File(o.files[x]);
                o.actions.Play()
            }
            if (o.file_type == "hls" && v.hlsquality == 1 && HlsLevelsLength() > 1) { media.setHlsQuality(x) } else if (o.file_type == "dash" && v.dashquality == 1 && DashLevelsLength() > 1) { media.setDashQuality(x) } else if (o.file_type == "youtube") { media.setQuality(x) }
        };
        this.SetSubtitle = function(x) {
            if (exist(o.subs[x])) {
                log("Subtitle", x);
                o.current_subtitle = x;
                if (exist(o.files_subtitle[x])) { if (o.storage && v.sub_store == 1) { localStorage.setItem("pljssubtitle", o.files_subtitle[x]) } else { o.remember_sub = o.files_subtitle[x] } }
                if (o.file_type == "hls" && o.hls_subs == true) { media.setHlsSubTrack(x) } else { if (o.file_type == "dash" && o.dash_subs == true) { media.setDashSubTrack(x) } else { if (o.subs[x] == "all") { SubtitleLoadAll(o.current_subtitle) } else { SubtitleLoad(o.current_subtitle) } } }
            }
        };

        function SubtitleLoadAll(x) {
            sub[x] = Object();
            sub[x][0] = Array();
            sub[x][1] = Array();
            for (var i = 0; i < o.subs.length; i++) { setTimeout(SubtitleLoad, i * 500, i) }
        }
        this.SetSpeed = function(x) {
            log("Speed", x);
            media.setSpeed(x);
            if (v.pip.on == 1) { if (media2) { media2.setSpeed(x) } }
        };
        this.nativeSubtitle = function() { NativeSubtitle() };

        function NativeSubtitle() { if (o.tagvideo && o.subtitle_on) { media.removeTracks(); for (var i = 0; i < o.subs.length; i++) { media.addTrack(o.subs[i], o.files_subtitle[i], (i == o.current_subtitle)) } } }
        this.removeNativeSubtitle = function() { media.removeTracks() };
        this.SetAudioTrack = function(x) {
            log("Audiotrack", x);
            if (o.audiotracks.length > 0) {
                if (o.audiotracks[x]) {
                    var time = this.time();
                    o.seekto = time;
                    o.actions.Seek(time, false);
                    File(o.audiotracks[x]);
                    o.actions.Play()
                }
            } else { if (o.file_type == "hls" && v.hlsaudio == 1) { media.setHlsAudioTrack(x) } else if (o.file_type == "dash" && v.dashaudio == 1) { media.setDashAudioTrack(x) } }
        };
        this.getQuality = function() {
            var x = o.files_quality[o.current_quality];
            x == undefined ? x = '' : '';
            var y = autoQuality() && v.hlsautoquality == 1 && v.hlsquality == 1;
            return (y ? '' + Lang("auto") + ' ' : '') + x
        };
        this.getAudioTrack = function() {
            var x = o.files_audiotrack[o.current_audiotrack];
            x == undefined ? x = '' : '';
            return x
        };
        this.autoQuality = function() { return autoQuality() };

        function autoQuality() { var x = false; if (o.file_type == "youtube") { x = media.auto() } if (o.file_type == "hls" && v.hlsquality == 1 && HlsLevelsLength() > 1 && v.hlsautoquality == 1) { x = media.auto() } if (o.file_type == "dash" && v.dashquality == 1 && DashLevelsLength() > 1) { x = media.auto() } return x }

        function HlsLevelsLength() { if (o.file_type == "hls") { return media.HlsLevelsLength() } else { return 0 } }

        function DashLevelsLength() { if (o.file_type == "dash") { return media.DashLevelsLength() } else { return 0 } }
        this.resize = function(x) { if (media && (o.file_type == "youtube" || o.file_type == "vimeo" || exist(v.ratio))) { media.resize() } if (v.screenmarginbottom > 0) { css(o.mediacontainer, { "height": (o.fullscreen ? "100%" : o.normal_h - v.screenmarginbottom) }) } };
        this.size = function() { return media.size() };
        this.reload = function() {
            log('reload');
            o.reloadTimer = 0;
            v.autoplay = 1;
            File(url)
        };
        if (!exist(o.poster)) { CreatePoster() }
        if (exist(v.poster)) { if (v.poster != '') { Poster(v.poster, o.poster, v.poster_scale) } else { v.poster = null } }

        function Status() { _status = media ? media.status() : '' }

        function ParseUrl(url) {
            urls = url.split(" or ");
            for (var i = 0; i < urls.length; i++) {
                if (urls[i].indexOf(" and ") > -1) {
                    urls_and = urls[i].split(" and ");
                    urls[i] = urls_and[random(0, urls_and.length - 1)]
                }
            }
            current_url = 0
        }

        function Timer() { Status(); if (_status == "playing" || o.casting) { o.actions.Playing() } if (_status != "") { o.actions.Loading() } }

        function CreatePoster() {
            if (o.poster) { o.frame.removeChild(o.poster) }
            o.poster = createElement("div");
            css(o.poster, { "pointer-events": "none", "opacity": v.poster_a, transition: "opacity 0.5s" });
            if (v.poster_float == 1) {
                v.posterontop == 1 ? o.poster.style.zIndex = 100 : '';
                css(o.poster, { 'width': v.poster_floatwidth, 'height': v.poster_floatheight });
                var x = { "margin": v.poster_floatmargin };
                x = MarginPadding(x, 'margin', 'margin');
                if (v.poster_floatposition.indexOf("right") > -1) {
                    rightside = 1;
                    css(o.poster, { 'position': 'absolute', 'right': x.marginright - x.marginleft })
                } else { css(o.poster, { 'position': 'absolute', 'left': x.marginleft - x.marginright }) }
                if (v.poster_floatposition.indexOf("top") > -1) { css(o.poster, { 'top': x.margintop - x.marginbottom }) }
                if (v.poster_floatposition.indexOf("bottom") > -1) { css(o.poster, { 'bottom': x.marginbottom - x.margintop }) }
                if (v.poster_floatposition == "right" || v.poster_floatposition == "left") { css(o.poster, { 'top': '50%', 'margin-top': -v.poster_floatheight / 2 + x.margintop - x.marginbottom }) }
                if (v.poster_floatrounding > 0) { css(o.poster, { 'border-radius': v.poster_floatrounding }) }
                if (v.poster_floatbgcolor != -1) { css(o.poster, { 'background': v.poster_floatbgcolor }) }
            } else { css(o.poster, { 'position': 'absolute', 'left': 0, 'top': 0, 'width': '100%', 'height': '100%' }) }
            o.frame.appendChild(o.poster)
        }

        function File(x, y) {
            v.file2_separator == '' ? v.file2_separator = ';' : '';
            if (x.indexOf('{') > -1 && x.indexOf('}') > -1 && x.indexOf(v.file2_separator) > -1) {
                var z = x.split(v.file2_separator);
                o.audiotracks = [];
                for (var i = 0; i < z.length; i++) {
                    o.files_audiotrack[i] = z[i].substr(z[i].indexOf("{") + 1, z[i].indexOf("}") - 1);
                    o.audiotracks[i] = z[i].substr(z[i].indexOf("}") + 1);
                    if (exist(v.default_audio)) { if (v.default_audio == o.files_audiotrack[i]) { o.current_audiotrack = i } }
                }
                x = o.audiotracks[o.current_audiotrack]
            }!exist(urls) ? urls = [] : '';
            x && x != 'or' && x != 'x' ? ParseUrl(x) : '';
            var ft = o.file_type;
            if (urls.length > 0) {
                o.file_type = FileType(urls[current_url]);
                var create = false;
                if (exist(y)) { create = true }
                url = urls[current_url];
                if (!create && x != 'x' && media && o.file_type == ft && (ft == "native" || ft == "vimeo" || (ft == "hls" && v.hlsvastwait != 1))) { media.src(urls[current_url]) } else {
                    log("New");
                    RemoveMedia();
                    CreateMedia(urls[current_url])
                }
                if (o.speed1) { if (o.current_speed != o.speed1) { media.setSpeed(o.files_speed[o.current_speed]) } }
            }
            clearInterval(o.timerInterval);
            o.timerInterval = setInterval(Timer, o.timerTime);
            if (exist(v.subtitle)) { if (v.subtitle != '') { SubtitleStart(v.subtitle) } }
            if (v.hidevideo == 1) {
                if (v.nativecontrolsmobile == 1 && o.system.mobile) {} else {
                    if (o.file_type == "youtube") { css(o.mediacontainer, { "top": -3000, "left": -3000 }) } else { hide2(o.mediacontainer) }
                    v.toolbar.hide = 0
                }
            }
        }

        function FileType(x) {
            var type = "native";
            if (x) {
                if (x.indexOf(".m3u8") > 0) { type = "hls" } else if (x.indexOf(".mpd") > 0) { type = "dash" } else if (x.indexOf(".pdf") == x.length - 4) { type = "pdf" } else if (x.indexOf("ws://") == 0) { type = "ws" } else if (x.indexOf('youtube.com/') > -1 || x.indexOf('youtu.be/') > -1) {
                    type = "youtube";
                    if (v.youtubeposter == 1) {
                        var y = 'https://img.youtube.com/vi/' + YoutubeID(x) + '/';
                        imageExists(y + 'maxresdefault.jpg', function(z) {
                            z > 100 ? v.poster = y + 'maxresdefault.jpg' : v.poster = y + 'hqdefault.jpg';
                            if (o.playlist_dic) { o.playlist_dic[o.plid]['poster'] = v.poster }
                            v.autoplay == 1 || o.start ? '' : Poster(v.poster, o.poster, v.poster_scale)
                        })
                    }
                } else if (v.vimeo == 1 && x.indexOf('vimeo.com/') > -1) { type = "vimeo" }
            }
            o.tagvideo = type == "native" || type == "hls" || type == "dash" || type == "ws";
            return type
        }

        function imageExists(url, callback) {
            var img = new Image();
            img.onload = function() { callback(this.height) };
            img.src = url
        }

        function CreateMedia(x) {
            o.file_type = FileType(x);
            o.reverse_quality = false;
            if (o.tagvideo) { media = new MediaVideo(x, o.mediacontainer, false) }
            if (o.file_type == "youtube") { media = new MediaYoutube(x, o.mediacontainer) }
            if (v.vimeo == 1 && o.file_type == "vimeo") { media = new MediaVimeo(x, o.mediacontainer) }
            if (o.file_type == "pdf") { media = new MediaPdf(x) }
            o.controls ? o.controls.UpdateSettings() : '';
            var t = 0;
            if (exist(v.duration)) {
                if (o.continue && v.timestore == 1 && !o.start) { t = o.continue.flag().t }
                setTimeout(function() { o.actions.Duration(t, v.duration) }, 100)
            }
        }

        function RemoveMedia() {
            if (media) {
                media.Remove();
                media = null;
                _status = "ended"
            }
            if (media2) {
                media2.Remove();
                media2 = null;
                media2 = undefined;
                o.frame.removeChild(o.media2);
                o.media2 = undefined
            }
        };
        this.Remove = function() { RemoveMedia() };
        this.RemoveAll = function() {
            urls = [];
            RemoveMedia()
        };
        this.File = function(x, y) { File(x, y) };
        this.Poster = function(x) { Poster(x, o.poster, v.poster_scale) };
        this.Play = function() {
            if (media) {
                _ended = false;
                if (o.casting) { o.chromecast.Play() } else {
                    media.Play();
                    v.posterhide == 1 ? o.actions.HidePoster() : ''
                }
                if (exist(media2)) { media2.Play() }
                if (o.channels) {
                    if (o.tagvideo) { if (o.clicktime > 0 && !o.channels.Created()) { o.channels.Update() } } else {
                        o.files_channel = [];
                        o.controls.SettingChanged("channel")
                    }
                }
                if (o.tagvideo && v.volumegain > -1 && !o.gained && !o.system.ios) { if (o.clicktime > 0) { media.Gain() } }
            } else { setTimeout(this.Play, 500) }
        };

        function ClickOnPip(event) {
            event.stopPropagation();
            window.event ? window.event.cancelBubble = true : '';
            var tmp = media;
            media.ChangePip(true, o.media2);
            media2.ChangePip(false, o.mediacontainer);
            media = media2;
            media2 = tmp;
            media.Play();
            media2.Play();
            js("pip")
        }
        this.ToolbarHide = function() {
            if (exist(o.media2)) { if (v.pip.hide == 1) { hide(o.media2) } else { if (v.pip.position.indexOf("bottom") > -1) { css(o.media2, { "bottom": v.pip.marginbottom - v.pip.margintop - v.toolbar.h }) } } }
            v.effects == 1 ? o.effects.api("hide") : '';
            o.toolbarhidden = true
        };
        this.ToolbarShow = function() {
            if (exist(o.media2)) { if (v.pip.hide == 1) { show(o.media2) } else { if (v.pip.position.indexOf("bottom") > -1) { css(o.media2, { "bottom": v.pip.marginbottom - v.pip.margintop }) } } }
            if (v.toolbar.resizeme) {
                v.toolbar.resizeme = false;
                o.controls ? o.controls.resizeFromText(1) : ''
            }
            o.toolbarhidden = false
        };
        this.PipToggle = function() { if (exist(o.media2)) { isVisible(o.media2) ? hide(o.media2) : show(o.media2) } };
        this.Airplay = function() {
            if (o.tagvideo && o.airplay) {
                o.airplayed = true;
                media.airplay()
            }
        };
        this.PipWebkit = function() { if (o.tagvideo && o.pipwebkit) { media.pipwebkit() } };
        this.BeforeVast = function() {
            if (v.vast_poster == 1 && exist(v.vast_posterurl)) {
                if (!exist(o.vast_poster)) {
                    o.vast_poster = createElement("div");
                    css(o.vast_poster, { 'position': 'absolute', 'left': 0, 'top': 0, 'width': '100%', 'height': '100%', "pointer-events": "none", "zIndex": 10000 });
                    o.frame.appendChild(o.vast_poster)
                }
                show2(o.vast_poster);
                Poster(v.vast_posterurl, o.vast_poster, 'fill')
            }
            if (media) {
                datetime(0);
                media.BeforeVast()
            }
        };
        this.AfterVast = function() {
            if (o.vast_poster) { hide2(o.vast_poster) }
            media ? media.AfterVast() : ''
        };
        this.Pause = function() { if (o.casting) { o.chromecast.Pause() } else { media ? media.Pause() : log("nomedia") } if (exist(o.media2)) { media2.Pause() } };
        this.Recover = function() {
            o.actions.Seek(0, false);
            exist(o.poster) ? o.actions.ShowPoster() : '';
            File('x')
        };
        this.Toggle = function() { media ? media.Toggle() : '' };
        this.Seek = function(x) { if (media) { if (o.casting) { o.chromecast.Seek(x) } else { media.Seek(x); if (v.pip.on == 1) { if (media2) { media2.Seek(x) } } } } };
        this.Mute = function() {
            if (media) {
                media.Mute();
                o.casting ? o.chromecast.Mute() : ''
            }
        };
        this.Unmute = function() {
            if (media) {
                media.Unmute();
                o.casting ? o.chromecast.Unmute() : ''
            }
        };
        this.Volume = function(x) { media ? media.Volume(x) : ''; if (o.casting) { o.chromecast.Volume(x) } };
        this.isPlaying = function() { return media ? media.isPlaying() : false };
        this.isLive = function() { return media ? media.isLive() : false };
        this.status = function() { return _status };
        this.ended = function() { return _ended };
        this.time = function() {
            var x = 0;
            if (media) {
                x = media.time();
                if (o.casting) {
                    var y = o.chromecast.Time();
                    y ? x = y : ''
                } else { if (media.duration() > 0 && x != media.duration()) { o.current_time = x + 0.0001 } }
                return x
            } else { return 0 }
        };
        this.duration = function() {
            var x = 0;
            if (media) {
                x = media.duration();
                x == 0 && exist(v.duration) ? x = v.duration * 1 : '';
                if (o.casting) {
                    var y = o.chromecast.Duration();
                    y ? x = y : ''
                }
            }
            return x
        };
        this.loaded = function() { return media ? media.loaded() : 0 };
        this.createposter = function() { CreatePoster() };
        this.Preload = function() { if (o.tagvideo) { media.preload() } };
        this.scale = function(x) {
            if (String(x).indexOf(":") > 0) {
                var y = x.split(":");
                var z0 = o.screen_w / o.screen_h;
                var z1 = o.media.size();
                if (z1.width > 0) { z0 = z1.width / z1.height }
                var z = y[0] / y[1];
                if (z0 != z) {
                    if (o.tagvideo) { if (v.covervideo == 1) { css(media.tag(), { 'object-fit': 'cover' }) } else { css(media.tag(), { 'object-fit': 'fill' }) } }
                    var w2 = o.screen_h * z;
                    var x2 = w2 / o.screen_w;
                    var h2 = o.screen_w / z;
                    var y2 = h2 / o.screen_h;
                    if (x2 < 1) {
                        o.mediascale.x0 = o.mediascale.x = parseFloat(x2);
                        o.mediascale.y = 1
                    } else {
                        o.mediascale.x = 1;
                        o.mediascale.y0 = o.mediascale.y = parseFloat(y2)
                    }
                    css(o.mediacontainer, { "transform": "scaleX(" + o.mediascale.x + ") scaleY(" + o.mediascale.y + ")" });
                    o.custom_aspect = x
                }
            } else {
                o.mediascale.x += parseFloat(x);
                o.mediascale.y += parseFloat(x);
                css(o.mediacontainer, { "transform": "scaleX(" + o.mediascale.x + ") scaleY(" + o.mediascale.y + ")" })
            }
            o.controls.SettingsScale()
        };
        this.normalscale = function() {
            if (o.tagvideo) { css(media.tag(), { 'object-fit': 'contain' }) }
            o.mediascale.x = o.mediascale.x0;
            o.mediascale.y = o.mediascale.y0;
            css(o.mediacontainer, { "transform": "scaleX(" + o.mediascale.x + ") scaleY(" + o.mediascale.y + ")" });
            o.controls.SettingsScale();
            o.custom_aspect = null
        };
        this.currentSubtitle = function() {
            var x = undefined;
            exist(o.subs) ? exist(o.subs[o.current_subtitle]) ? x = o.subs[o.current_subtitle] : '' : '';
            return x
        };
        this.currentFile = function() { return currentFile() };

        function currentFile() { return urls.length > 0 ? (urls[current_url] ? urls[current_url] : '') : '' };
        this.tag = function() { return media ? media.tag() : false };
        this.SubtitleStart = function(x) { SubtitleStart(x) };
        this.captions = function() { if (o.tagvideo) { media.captions() } };

        function SubtitleStart(x) {
            if (x != '') {
                var start = 0;
                var memory = '';
                o.subs = x.split(",");
                o.files_subtitle = [];
                o.current_subtitle = -1;
                if (StorageSupport() && v.sub_store == 1) { if (localStorage.getItem("pljssubtitle") != null) { memory = localStorage.getItem("pljssubtitle") } } else { if (o.remember_sub) { memory = o.remember_sub } }
                for (var i = 0; i < o.subs.length; i++) {
                    if (o.subs[i].indexOf("#0") == 0) { o.subs[i] = fd0(o.subs[i]) }
                    if (o.subs[i].indexOf("#2") == 0) { o.subs[i] = fd2(o.subs[i]) }
                    if (o.subs[i].indexOf("[") == 0 && o.subs[i].indexOf("]") > 1) {
                        o.files_subtitle[i] = o.subs[i].substr(o.subs[i].indexOf("[") + 1, o.subs[i].indexOf("]") - 1);
                        o.subs[i] = o.subs[i].substr(o.subs[i].indexOf("]") + 1)
                    } else {
                        o.files_subtitle[i] = o.subs[i].substr(o.subs[i].lastIndexOf("/") + 1);
                        o.files_subtitle[i] = o.files_subtitle[i].substr(0, o.files_subtitle[i].lastIndexOf("."))
                    }
                    if (o.subs[i].indexOf("#0") == 0) { o.subs[i] = fd0(o.subs[i]) }
                    if (o.subs[i].indexOf("#2") == 0) { o.subs[i] = fd2(o.subs[i]) }
                }
                if (o.files_subtitle.length > 1 && v.sub_all == 1) {
                    o.files_subtitle.push(StringVar('sub_all_title', Lang('together')));
                    o.subs.push("all")
                }
                if (o.files_subtitle.length > 0 && v.sub_off == 1) {
                    o.files_subtitle.push(StringVar('sub_off_title', Lang('off')));
                    o.subs.push("")
                }
                for (var i = 0; i < o.subs.length; i++) {
                    if (exist(v.default_subtitle)) {
                        if (v.default_subtitle == o.files_subtitle[i]) {
                            start = i;
                            o.current_subtitle = i
                        }
                    }
                    if (memory != '') {
                        if (memory == o.files_subtitle[i]) {
                            start = i;
                            o.current_subtitle = i
                        }
                    }
                }
                if (v.sub_off == 1 && v.subtitle_start == 0) { o.current_subtitle = o.files_subtitle.length - 1 }
                exist(o.controls) ? o.controls.SubtitleChanged() : '';
                if (v.subtitle_start == 1) { o.current_subtitle = start; if (v.sub_all == 1 && o.subs[start] == "all") { SubtitleLoadAll(o.current_subtitle) } else { SubtitleLoad(o.current_subtitle) } } else { v.sub_off != 1 ? o.current_subtitle = -1 : '' }
            } else { o.actions.RemoveSubtitles() }
        }

        function SubtitleLoad(x) {
            if (exist(o.subs[x])) {
                if (o.subs[x].indexOf(".") > -1) {
                    o.subsor = o.subs[x].split(" or ");
                    o.sub_or = 0;
                    SubtitleLoad2()
                }
            }
        }

        function SubtitleLoad2(x) {
            var url = trim(o.subsor[o.sub_or]);
            var xhr = XHR(url);
            xhr.onload = function() {
                if (this.readyState == 4 && this.status == 200) {
                    o.subtitle_on = true;
                    SubtitleParse(url, this.responseText, x)
                } else {
                    if (o.sub_or + 1 < o.subsor.length) {
                        o.sub_or++;
                        SubtitleLoad2()
                    } else { SubtitleError("loading_error") }
                }
            };
            xhr.onerror = function(e) {
                if (o.sub_or + 1 < o.subsor.length) {
                    o.sub_or++;
                    SubtitleLoad2()
                } else { SubtitleError("loading_error") }
            };
            xhr.send()
        }

        function SubtitleError(x) {
            log("subtitle not found or access denied");
            if (o.files_subtitle[o.current_subtitle].indexOf(Lang("loading_error")) == -1) { o.files_subtitle[o.current_subtitle] = o.files_subtitle[o.current_subtitle] + ' (' + Lang(x) + ')' }
            v.subtitle_errdel == 1 ? o.subs[o.current_subtitle] = '' : '';
            o.current_subtitle = -1;
            o.subtitle_on = false;
            if (o.constrols) {
                o.controls.SubtitleChanged();
                o.controls.refresh()
            } else {
                setTimeout(function() {
                    o.controls.SubtitleChanged();
                    o.controls.refresh()
                }, 100)
            }
            if (exist(o.subtitle)) {
                o.mediacontainer.removeChild(o.subtitle);
                o.subtitle = null
            }
        }

        function SubtitleParse(url, x, y) {
            if (url.indexOf('.srt') > -1 || url.indexOf('.ass') > -1 || url.indexOf('.ssa') > -1 || url.indexOf('.vtt') > -1) {
                var l = o.current_subtitle;
                if (exist(sub[l]) && o.subs[l] == "all") {} else {
                    sub[l] = Object();
                    sub[l][0] = Array();
                    sub[l][1] = Array()
                }
                var rows = Array();
                rows = x.split(/\r|\n/);
                var cnt = 1;
                var t1 = 0;
                var t2 = 0;
                try {
                    var url_shift = (exist(v.subshift) ? v.subshift : 0);
                    if (url.indexOf('shift=') > 0) { url_shift = url.substr(url.indexOf('shift=') + 6) * 1 }
                    for (i = 0; i < rows.length; i++) {
                        if (url.indexOf('.srt') > -1 || url.indexOf('.vtt') > -1) {
                            if (rows[i].indexOf('-->') > -1 && rows[i].indexOf(':') > -1) {
                                t1 = TimeSub(rows[i].substr(0, rows[i].indexOf('-->'))) * 1 + url_shift;
                                t1 == 0 ? t1 = 1 : '';
                                t2 = TimeSub(rows[i].substr(rows[i].indexOf('-->') + 4, 12)) * 1 + url_shift;
                                exist(sub[l][0][t1]) ? '' : sub[l][0][t1] = '';
                                for (var j = t1; j < t2; j++) { sub[l][1][j] = t1 }
                                cnt++
                            } else { if (rows[i] != '' && rows[i].length > 1 && rows[i] != cnt && rows[i] != 'WEBVTT') { sub[l][0][t1] = (sub[l][0][t1] && sub[l][0][t1] != '' ? sub[l][0][t1] + '<br>' : '') + (o.subs[l] == "all" && y > 0 ? '[sub2]' : '') + rows[i] + (o.subs[l] == "all" && y > 0 ? '[/sub2]' : '') } }
                        }
                        if (url.indexOf('.ass') > -1 || url.indexOf('.ssa') > -1) {
                            if (rows[i].indexOf('Dialogue:') > -1) {
                                t1 = TimeSub(rows[i].substr((url.indexOf('.ssa') > -1 ? rows[i].indexOf('=0') + 3 : 12), 12)) * 1 + url_shift;
                                t2 = TimeSub(rows[i].substr((url.indexOf('.ssa') > -1 ? rows[i].indexOf('=0') + 14 : 23), 10)) * 1 + url_shift;
                                var p = '';
                                if (rows[i].indexOf('0,,') > 0) { p = rows[i].substr(rows[i].indexOf('0,,') + 3) } else { if (rows[i].indexOf('ffect,') > 0) { p = rows[i].substr(rows[i].indexOf('ffect,') + 6) } }
                                if (sub[l][0][t1] != undefined) { sub[l][0][t1] += '\n' + (o.subs[l] == "all" && y > 0 ? '[sub2]' : '') + p + (o.subs[l] == "all" && y > 0 ? '[/sub2]' : '') } else { sub[l][0][t1] = p }
                                sub[l][0][t1] = sub[l][0][t1].replace(/{.*?}/, '');
                                sub[l][0][t1] = sub[l][0][t1].replace(/\\\\N/, '<br>');
                                sub[l][0][t1] = sub[l][0][t1].replace(/\\N/, '<br>');
                                for (var j = t1; j < t2; j++) { sub[l][1][j] = t1 }
                            }
                        }
                    }
                    o.controls.SubtitleChanged();
                    o.actions.RenewSubtitle()
                } catch (e) { SubtitleError("error") }
            } else { SubtitleError("error") }
        }
        this.sub = function() { return sub };

        function RadioTags() {
            var xhr = XHR(v.tagsurl + '?url=' + urls[current_url]);
            xhr.onload = function() {
                if (this.readyState == 4 && this.status == 200) {
                    if (this.responseText) {
                        v.title = this.responseText;
                        o.actions.Title('title')
                    }
                }
            };
            xhr.send()
        }
    };

    function TimeSub(srt) {
        var tmp = srt.split(':');
        var out = 0;
        tmp.length == 2 ? tmp.unshift("00") : '';
        tmp[0] != '00' ? out += tmp[0] * 3600 : '';
        tmp[1] != '00' ? out += tmp[1] * 60 : '';
        out += tmp[2].substr(0, 2) * 1;
        out = out * 10 + tmp[2].substr(3, 1) * 1;
        return out
    }
    var MediaVideo = function(url, container, pip) {
        var pjstg = createElement("video");
        if (v.taginframe == 1) {
            var tagframe = createElement("iframe");
            attr(tagframe, { "scrolling": "no", "allowfullscreen": "true", "allowtransparency": "true", "src": "" });
            css(tagframe, { "position": "absolute", "width": "100%", "height": "100%", "border": 0 });
            container.appendChild(tagframe);
            var framei = window.setInterval(function() {
                if (tagframe.contentWindow.document.readyState === "complete") {
                    window.clearInterval(framei);
                    css(tagframe.contentDocument.body, { "padding": 0, "margin": 0 });
                    tagframe.contentDocument.body.appendChild(pjstg)
                }
            }, 100)
        } else { container.appendChild(pjstg) }
        var hls;
        var is_hls = false;
        var hls_started = false;
        var hls_created = false;
        var dash;
        var dash_created = false;
        var ws;
        var ws_created = false;
        var is_dash = false;
        var is_live = false;
        var is_sleep = 0;
        var is_ws = false;
        var error;
        var error_time;
        var unmuteplease = false;
        var onplay = false;
        var pip_quality = -1;
        var pause_before_vast = -1;
        var sleep_timeout;
        var _hlssubtracks;
        var _dashsubtracks;
        var _seekaftervast;
        var urlmse;
        var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
        css(pjstg, { 'width': '100%', 'height': '100%', 'object-fit': 'contain', 'transition': "filter 0.2s linear", 'min-height': 'auto', 'max-height': 'none', 'min-width': 'auto', 'max-width': 'none' });
        if (v.covervideo == 1 || v.fill == 1) { if (v.fillvideo == 1 || v.fill == 1) { css(pjstg, { 'object-fit': 'fill' }) } else { css(pjstg, { 'object-fit': 'cover' }) } }
        if (v.playsinlineonmobile == 1 && o.system.mobile) { attr(pjstg, { 'playsinline': '1' }) }
        v.tagcors == 1 ? pjstg.crossOrigin = 'anonymous' : '';
        attr(pjstg, { 'src': url, 'x-webkit-airplay': 'allow' });
        if (v.ynxnopip == 1) { attr(pjstg, { 'pip': 'false' }) }
        if (v.nativenodownload == 1) { attr(pjstg, { 'controlsList': 'nodownload' }) }
        if (!o.system.tv) { attr(pjstg, { 'preload': (v.preload == 1 && v.autoplay == 0 ? 'metadata' : 'none') }) }
        tagSrc();
        if (pip) {
            pjstg.autoplay = true;
            pjstg.muted = true
        }
        if (v.loop == 1) {}
        if (url.indexOf(".mpd") > 0 && o.compilation.indexOf("DASH") != -1) { is_dash = true; var dash_init = false; var dash_play = false; if (MseIsSupported()) { v.preload == 1 || v.autoplay == 1 || v.preloaddash == 1 ? CreateDASH(false) : '' } else { log("DASH not supported") } } else if (url.indexOf(".m3u8") > 0 && (o.compilation.indexOf("HLS") != -1 || exist(window.Hls))) { is_hls = true; try { if (exist(Hls)) { if (!Hls.isSupported() || (o.system.safari && v.nativehlsinsafari == 1) || (o.system.edge && v.nativehlsinedge == 1)) { is_hls = false } else { if (v.preload == 1 || v.autoplay == 1 || v.preloadhls == 1) { CreateHLS(false) } } } else { is_hls = false } } catch (error) { is_hls = false } } else if (url.indexOf("ws://") == 0 && v.flussonic == 1) {
            is_ws = true;
            CreateWS()
        }
        if (o.system.tv && v.autoplay == 1 && !is_hls && !is_dash && !is_ws) { setTimeout(function() { o.actions.MediaReady() }, 100) }
        if (v.channels == 1) {
            exist(o.channels) ? o.channels.Close() : '';
            o.channels = new PlugMediaChannels()
        }

        function CreateDASH(x) {
            log("DASH");
            v.preloaddash = 1;
            var dash_config = { bufferLength: 60 };
            if (o.files.length > 1) {
                v.dashquality = 0;
                v.dashquality_off = true
            } else { v.dashquality_off ? v.dashquality = 1 : '' }
            if (o.audiotracks.length > 1) {
                v.dashaudio = 0;
                v.dashaudio_off = true
            } else { v.dashaudio_off ? v.dashaudio = 1 : '' }
            if (exist(v.dashconfig)) { if (exist(v.dashconfig.bufferLength)) { if (v.dashconfig.bufferLength > 600) { v.dashconfig.bufferLength = 600 } } if (typeof v.dashconfig == "object") { for (var key in v.dashconfig) { dash_config[key] = v.dashconfig[key] } } }
            dash = dashjs.MediaPlayer().create();
            js("dash", dash, 1);
            dash.getDebug().setLogToBrowserConsole((v.dashdebug == 1 && !pip));
            dash.initialize(pjstg, url, (v.autoplay == 1 || pip || x));
            dash.setStableBufferTime(dash_config.bufferLength);
            dash.setBufferTimeAtTopQualityLongForm(dash_config.bufferLength);
            dash.enableLastBitrateCaching(false);
            dash.enableLastMediaSettingsCaching(false);
            if (v.dashcookies == 1) { dash.setXHRWithCredentialsForType(undefined, true) }
            if (v.dashlowquality == 1) {
                dash.setAutoSwitchQualityFor("audio", false);
                dash.setAutoSwitchQualityFor("video", false)
            }
            dash.on(dashjs.MediaPlayer.events.STREAM_INITIALIZED, function(data) {
                if (!dash_init) {
                    log("DASH attached");
                    var q = DashQualityLevels();
                    DashAudioTracks();
                    o.dash_subs = false;
                    if (v.dashsubtracks == 1) { _dashsubtracks = new PluginDashSubtitles(dash, pip) }
                    is_live = dash.isDynamic();
                    is_live ? log("Live") : '';
                    if (v.dashquality == 1) {
                        if (v.dashlowquality == 1 || q > 0) {
                            o.current_quality = q;
                            dash.setAutoSwitchQualityFor("audio", false);
                            dash.setAutoSwitchQualityFor("video", false)
                        } else { o.current_quality = dash.getBitrateInfoListFor("video").length - 1 }
                        o.controls.QualityChangedNoHand(o.current_quality);
                        dash.setQualityFor("video", o.current_quality);
                        dash.setQualityFor("audio", o.current_quality)
                    }
                    o.actions.MediaReady();
                    dash_init = true
                }
            });
            dash.on(dashjs.MediaPlayer.events.PLAYBACK_PLAYING, function(data) {
                if (!dash_play) {
                    var track = parseInt(o.current_audiotrack);
                    if (track > 0 && v.dashaudio == 1) { dash.setCurrentTrack(dash.getTracksFor("audio")[track]) }
                    dash_play = true
                }
            });
            dash.on(dashjs.MediaPlayer.events.PLAYBACK_TIME_UPDATED, function(data) { if (is_live) { o.actions.Duration(dash.time(), dash.duration()) } });
            dash.on(dashjs.MediaPlayer.events.TEXT_TRACKS_ADDED, function(data) { dash.setTextTrack(-1) });
            dash.on(dashjs.MediaPlayer.events.QUALITY_CHANGE_REQUESTED, function(data) {
                if (data.mediaType == "video" && data.oldQuality != data.newQuality && v.dashquality == 1) {
                    o.current_quality = data.newQuality;
                    o.controls.QualityChangedNoHand(o.current_quality);
                    log("DASH Level " + o.current_quality)
                }
            });
            dash.on(dashjs.MediaPlayer.events.FRAGMENT_LOADING_COMPLETED, function(data) { if (exist(data.request)) { if (data.request.type == "MediaSegment") { js("fragment", data.request.url) } } });
            dash.on(dashjs.MediaPlayer.events.ERROR, function(data) {
                console.log(data);
                o.dasherror = data;
                if (data.error == "manifestError") {
                    error = "DASH " + data.error + ": " + data.event.message + ", " + data.event.event;
                    log(error);
                    o.media.onError()
                } else if (data.error == "capability" || data.error == "mediasource") {
                    error = "DASH " + data.error + " error: " + data.event;
                    log(error);
                    o.media.onError()
                } else if (data.error == "key_session" || data.error == "key_message") {
                    error = "DASH " + data.error + " error: " + data.event;
                    log(error);
                    o.media.onError()
                } else if (data.error == "download") {
                    error = "DASH fatal network error encountered";
                    log(error);
                    o.media.onError()
                }
            });
            dash_created = true
        }

        function CreateHLS(x) {
            log("HLS");
            if (o.files.length > 1) {
                v.hlsquality = 0;
                v.hlsquality_off = true
            } else { v.hlsquality_off ? v.hlsquality = 1 : '' }
            if (o.audiotracks.length > 1) {
                v.hlsaudio = 0;
                v.hlsaudio_off = true
            } else { v.hlsaudio_off ? v.hlsaudio = 1 : '' }
            o.hls_subs = false;
            var dontstart = false;
            if (v.preroll && v.hlsvastwait == 1) { dontstart = true }
            var hls_config = { debug: (v.hlsdebug == 1 && !pip), autoStartLoad: (v.preload == 1 || v.autoplay == 1 || pip || x) && !dontstart, maxBufferLength: 60, maxMaxBufferLength: 60, manifestLoadingTimeOut: 40000, fragLoadingTimeOut: 40000, enableWorker: false };
            if (v.hlscookies == 1) { hls_config['xhrSetup'] = function(xhr, url) { xhr.withCredentials = true } }
            if (exist(v.hlsconfig)) {
                if (exist(v.hlsconfig.maxBufferLength)) {
                    if (v.hlsconfig.maxBufferLength > 600) { v.hlsconfig.maxBufferLength = 600 }
                    v.hlsconfig.maxMaxBufferLength = v.hlsconfig.maxBufferLength
                }
                if (exist(v.hlsconfig.customBuffer)) { v.hlsconfig.maxMaxBufferLength = v.hlsconfig.maxBufferLength = v.hlsconfig.customBuffer }
                if (typeof v.hlsconfig == "object") { for (var key in v.hlsconfig) { hls_config[key] = v.hlsconfig[key] } }
            }
            hls = new Hls(hls_config);
            js("hls", hls, 1);
            hls.loadSource(url);
            hls.attachMedia(pjstg);
            hls.on(Hls.Events.MEDIA_ATTACHED, function() { log("HLS attached") });
            hls.on(Hls.Events.MANIFEST_LOADED, function(event, data) {!pip ? o.actions.MediaReady() : '' });
            hls.on(Hls.Events.MANIFEST_PARSED, function(event, data) {
                if (!pip && v.hlsquality == 1 && HlsLevelsLength() > 1) {
                    HlsQualityLevels();
                    o.controls ? o.controls.QualityChangedNoHand(o.current_quality) : ''
                }
            });
            hls.on(Hls.Events.LEVEL_SWITCH, function(event, data) {
                if (!pip && v.hlsquality == 1 && HlsLevelsLength() > 1) {
                    o.current_quality = hls.loadLevel;
                    o.controls ? o.controls.QualityChangedNoHand(o.current_quality) : '';
                    log("HLS Level " + o.current_quality)
                }
            });
            hls.on(Hls.Events.LEVEL_LOADED, function(event, data) {
                if (!pip) {
                    if (data.details.live != is_live) {
                        is_live = data.details.live;
                        o.controls.refresh()
                    }
                    is_live = data.details.live;
                    if (is_live) {
                        log("Live");
                        o.dvr = url.indexOf("?DVR") > -1;
                        if (pjstg.duration > 0 && pjstg.currentTime > 0) {
                            if (pjstg.duration - pjstg.currentTime < 10) {
                                if (o.hls_stuck_time > 0) {
                                    if (o.hls_stuck_time == pjstg.currentTime && o.hls_stuck_duration == pjstg.duration) {
                                        o.stuck++;
                                        if (o.stuck > 2) {
                                            o.stuck = 0;
                                            o.hls_stuck_time = -1;
                                            hls.destroy();
                                            CreateHLS(true);
                                            onEnded()
                                        }
                                    } else { o.hls_stuck_time = -1 }
                                } else {
                                    o.hls_stuck_time = pjstg.currentTime;
                                    o.hls_stuck_duration = pjstg.duration
                                }
                            }
                        }
                    }
                }
                if (v.hlsquality == 1) {
                    o.current_quality = hls.loadLevel;
                    o.controls ? o.controls.QualityChangedNoHand(o.current_quality) : ''
                }
            });
            hls.on(Hls.Events.FRAG_CHANGED, function(event, data) {
                if (exist(data.frag) && !pip) { js("fragment", data.frag.relurl) }
                hls_started = true;
                hlsTextTracks()
            });
            hls.on(Hls.Events.FRAG_PARSING_METADATA, function(event, data) { js("fragdata", data, 1) });
            hls.on(Hls.Events.AUDIO_TRACKS_UPDATED, function(event, data) {!pip && v.hlsaudio == 1 ? HlsAudioTracks() : '' });
            hls.on(Hls.Events.AUDIO_TRACK_SWITCHING, function(event, data) {!pip && v.hlsaudio == 1 ? HlsAudioTrack() : '' });
            if (v.hlssubtracks == 1) { _hlssubtracks = new PluginHlsSubtitles(hls, pip) }
            hls.on(Hls.Events.ERROR, function(event, data) {
                v.log == 1 ? console.log(data) : '';
                o.hlserror = data;
                if (data.fatal) {
                    switch (data.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            if (v.livewakeup == 1) {
                                log("sleep");
                                var playing = o.play;
                                !pip && playing ? o.actions.Pause() : '';
                                o.actions.ShowPoster();
                                is_sleep = 1;
                                HlsSleep(playing)
                            } else {
                                error = data.details;
                                o.seekto > 0 || pip || v.live == 1 || is_ws ? '' : o.seekto = Time();
                                hls.destroy();
                                if (!pip) { o.media.onError() }
                            }
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            HlsRecoverMediaError();
                            break;
                        default:
                            error = "HLS fatal error, destroy";
                            hls.destroy();
                            !pip ? o.media.onError() : '';
                            break
                    }
                } else {
                    log("HLS ", data.type, data.details, (data.response ? data.response.code : ''));
                    js("hls_error", (data.response ? data.response.code : ''));
                    if (is_sleep > 0) {
                        is_sleep = 2;
                        HlsSleep()
                    }
                }
            });
            hls_created = true
        }

        function CreateWS() {
            if (exist(window.FlussonicMsePlayer)) {
                if (MseIsSupported()) {
                    if (!exist(o.ws)) { o.ws = new PluginWS() }
                    ws = new FlussonicMsePlayer(pjstg, url, { debug: true });
                    ws_created = true
                } else {
                    is_ws = false;
                    log("not supported")
                }
            }
        }

        function hlsTextTracks() { Captions() };
        this.captions = function() { Captions() };

        function Captions() {
            if (pjstg.textTracks.length > 0) {
                if (v.captions == 1) { pjstg.textTracks[pjstg.textTracks.length - 1].mode = "showing" } else { pjstg.textTracks[pjstg.textTracks.length - 1].mode = "hidden" }
                if (!o.captions) {
                    o.captions = true;
                    o.controls.refresh()
                }
            } else {
                if (o.captions) {
                    o.captions = false;
                    o.controls.refresh()
                }
            }
        }

        function HlsSleep(x) {
            if (is_sleep > 0) {
                clearTimeout(sleep_timeout);
                sleep_timeout = setTimeout(HlsLiveWaiting, v.livewakeuptime * 1000)
            }
        }

        function HlsLiveWaiting() {
            if (is_sleep > 0) { log("watching") }
            if (is_sleep == 1) { hls.loadSource(url) }
            if (is_sleep == 2) {
                hls.destroy();
                CreateHLS(true);
                pjstg.play()
            }
        }
        var recover_decoding_error_date = 0;
        var recover_swap_audio_codec_date = 0;

        function HlsRecoverMediaError() {
            var now = performance.now();
            if (!recover_decoding_error_date || (now - recover_decoding_error_date) > 3000) {
                recover_decoding_error_date = performance.now();
                log("HLS fatal media error, try to recover");
                hls.recoverMediaError();
                hls.startLoad();
                TagPlay()
            } else {
                if (!recover_swap_audio_codec_date || (now - recover_swap_audio_codec_date) > 3000) {
                    recover_swap_audio_codec_date = performance.now();
                    log("HLS fatal media error, try to recover");
                    hls.swapAudioCodec();
                    hls.recoverMediaError()
                } else { log("HLS fatal media error, recovery failed") }
            }
        }
        pjstg.addEventListener('loadstart', onLoadStart);
        pjstg.addEventListener('error', onTagError);
        pjstg.addEventListener('ended', onEnded);
        pjstg.addEventListener('play', onPlay);
        pjstg.addEventListener('pause', onPause);
        pjstg.addEventListener('timeupdate', onTimeupdate);
        pjstg.addEventListener('seeking', onSeeking);
        pjstg.addEventListener('seeked', onSeeked);
        pjstg.addEventListener('loadedmetadata', onMeta);
        pjstg.addEventListener('volumechange', onVolume);
        pjstg.addEventListener('waiting', onWaiting);
        pjstg.addEventListener('durationchange', onDuration);
        pjstg.addEventListener('loadeddata', onLoadedData);
        pjstg.addEventListener('enterpictureinpicture', onPipEnter);
        pjstg.addEventListener('leavepictureinpicture', onPipLeave);

        function onLoadStart() { if (!is_hls && !is_dash) {!pip ? o.actions.MediaReady() : '' } }

        function onTagError() {
            if (!is_hls && !is_dash) {
                if (pjstg.error) {
                    log(pjstg.error, pjstg.error.code, pjstg.error.message);
                    var x = pjstg.error.code;
                    error = undefined;
                    if (x == 1) { error = "aborted" }
                    if (x == 2) { error = "network" }
                    if (x == 3) { error = "decode" }
                    if (x == 4) { error = "not found" }
                    log("Video Error: ", error)
                }
                if (error != undefined) { onError() }
            }
        }

        function onError() {!pip ? o.media.onError() : '' }

        function onEnded() {!pip ? o.media.onEnded() : '' }

        function onPlay() {
            if (is_hls && is_sleep > 0) {} else {
                if (!pip) {
                    if (pause_before_vast == -1) {
                        var x = false;
                        if (is_hls) {
                            if (exist(o.vast) || exist(o.vastloader)) {
                                pause();
                                x = true
                            }
                        }
                        if (!x) { o.media.onPlay() }
                    }
                }
            }
        }

        function onPause() {!pip ? o.media.onPause() : '' }

        function onTimeupdate() {
            !pip ? o.media.onTimeupdate() : '';
            if (pause_before_vast > -1) {
                if (Time() > pause_before_vast) {
                    pause();
                    pause_before_vast = -1
                }
            }
        }

        function onSeeking() {!pip ? o.media.onSeeking() : '' }

        function onSeeked() {!pip ? o.media.onSeeked() : '' }

        function onMeta() {
            if (pip) { PipSize() } else {
                o.media.onMeta();
                PlayerSize();
                if (is_hls && is_sleep > 0) {
                    is_sleep = 0;
                    log("wake up");
                    hls.startLoad();
                    TagPlay();
                    o.controls.Play()
                }
                if (exist(v.ratio)) { Resize() }
            }
        }

        function PipSize() { if (pjstg.videoHeight > 0) { css(container, { "height": container.offsetWidth / (pjstg.videoWidth / pjstg.videoHeight) - parseInt(v.pip.border) }) } }

        function PlayerSize() {
            if (v.changeheight == 1) {
                clearInterval(o.heightInterval);
                o.heightInterval = setInterval(WaitSize, 100);
                WaitSize()
            }
        }

        function WaitSize() {
            if (pjstg.videoHeight > 0) {
                o.actions.changeAspect(pjstg.videoWidth / pjstg.videoHeight);
                clearInterval(o.heightInterval)
            }
        }

        function onDuration() {!pip && !is_ws ? o.media.onDuration() : '' }

        function onVolume() {!pip ? o.media.onVolume() : '' }

        function onWaiting() { if (is_hls && is_sleep > 0) {} else {!pip ? o.media.onWaiting() : '' } }

        function onLoadedData() { o.actions.LoadedData() }

        function MseIsSupported() { var mediaSource = window.MediaSource = window.MediaSource || window.WebKitMediaSource; var sourceBuffer = window.SourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer; var isTypeSupported = mediaSource && typeof mediaSource.isTypeSupported === 'function' && mediaSource.isTypeSupported(mimeCodec); var sourceBufferValidAPI = !sourceBuffer || sourceBuffer.prototype && typeof sourceBuffer.prototype.appendBuffer === 'function' && typeof sourceBuffer.prototype.remove === 'function'; return isTypeSupported && sourceBufferValidAPI }

        function DashQualityLevels() {
            var q = 0;
            if (!pip && v.dashquality == 1) {
                var x = dash.getBitrateInfoListFor("video");
                if (x.length > 1) {
                    var y = '';
                    for (var i = 0; i < x.length; i++) {
                        o.files_quality[i] = exist(x[i].height) ? MseRenameQualities(x[i], v.nameofdashquality) : i;
                        if (o.files_quality[i] == y) {
                            y = o.files_quality[i];
                            if (exist(x[i].bitrate)) {
                                o.files_quality[i] += " " + span05 + " &nbsp;" + parseInt(x[i].bitrate / 1000) + ' ' + Lang('kbps') + '</span>';
                                o.files_quality[i - 1] += " " + span05 + " &nbsp;" + parseInt(x[i - 1].bitrate / 1000) + ' ' + Lang('kbps') + '</span>';
                                y = ''
                            }
                        } else { y = o.files_quality[i] }
                        if (exist(v.default_quality) && q == 0) { if (v.default_quality == o.files_quality[i]) { q = i } }
                        if (exist(o.default_quality)) { if (o.default_quality == o.files_quality[i]) { q = i } }
                    }
                    o.files_quality[x.length] = Lang("auto")
                }
                o.reverse_quality = true
            }
            return q
        }

        function DashAudioTracks() {
            if (!pip && v.dashaudio == 1) {
                o.current_audiotrack = 0;
                var x = dash.getTracksFor("audio");
                if (x.length > 1) { for (var i = 0; i < x.length; i++) { o.files_audiotrack[i] = i; if (exist(x[i].lang)) { o.files_audiotrack[i] = RenameTracks(x[i].lang) } else { if (exist(x[i].index)) { o.files_audiotrack[i] = Lang("audiotrack") + " " + x[i].index } } if (exist(o.default_audio)) { if (o.default_audio == o.files_audiotrack[i]) { o.current_audiotrack = i } } } }
                log("DASH AudioTrack ", o.current_audiotrack);
                o.controls.AudioTrackChangedNoHand(o.current_audiotrack)
            }
        }
        var span05 = "<span style='opacity:0.5'>";

        function HlsQualityLevels() {
            if (!pip && v.hlsquality == 1) {
                var x = hls.levels;
                var q = 0;
                if (x.length > 1) {
                    for (var i = 0; i < x.length; i++) {
                        if (exist(x[i].height)) {
                            var y = MseRenameQualities(x[i], v.nameofhlsquality);
                            if (o.files_quality.indexOf(y) > -1) {
                                if (exist(x[i].bitrate)) {
                                    var yi = o.files_quality.indexOf(y);
                                    o.files_quality[yi] += " " + span05 + " &nbsp;" + parseInt(x[yi].bitrate / 1000) + ' ' + Lang('kbps') + '</span>';
                                    o.files_quality[i] = y + " " + span05 + " &nbsp;" + parseInt(x[i].bitrate / 1000) + ' ' + Lang('kbps') + '</span>'
                                }
                            } else { o.files_quality[i] = y }
                        } else if (exist(x[i].name)) { o.files_quality[i] = x[i].name } else { o.files_quality[i] = i }
                        if (exist(v.default_quality) && q == 0) { if (v.default_quality == o.files_quality[i]) { q = i } }
                        if (exist(o.default_quality)) { if (o.default_quality == o.files_quality[i]) { q = i } }
                    }
                    if (v.hlsautoquality == 1) { o.files_quality[x.length] = Lang("auto") } else {
                        hls.autoLevelEnabled = 0;
                        hls.autoLevelCapping = 0
                    }
                    if (v.hlslowquality == 1 || q > 0) { hls.autoLevelCapping = 0; if (v.hlschangequality == "next" || (!o.start && v.preload == 0)) { hls.nextLevel = q } else { if (v.hlschangequality == "current") { hls.currentLevel = q } } } else { v.hlsautoquality == 1 ? o.current_quality = hls.levels.length - 1 : o.current_quality = hls.firstLevel }
                }
                o.reverse_quality = true
            }
        }

        function HlsAudioTracks() {
            if (!pip && v.hlsaudio == 1) {
                var x = hls.audioTracks;
                if (x.length > 1) {
                    for (var i = 0; i < x.length; i++) {
                        o.files_audiotrack[i] = exist(x[i].name) ? RenameTracks(x[i].name) : i;
                        if (exist(v.default_audio)) {
                            if (v.default_audio == o.files_audiotrack[i]) {
                                o.current_audiotrack = i;
                                hls.audioTrack = i
                            }
                        }
                    }
                }
            }
        }

        function HlsAudioTrack() {
            if (!pip) {
                o.current_audiotrack = hls.audioTrack;
                log("HLS AudioTrack ", o.current_audiotrack);
                o.controls.AudioTrackChangedNoHand(o.current_audiotrack)
            }
        };

        function RenameTracks(x) { var r = x.toLowerCase(); if (r == "eng" || r == "en") { x = "English" } else if (r == "rus" || r == "ru") { x = "Русский" } return x };

        function MseRenameQualities(x, y) { var r = x.height + 'p'; if (x.height < 200) { r = '160p' } else if (x.height >= 200 && x.height <= 300) { r = '240p' } else if (x.height > 300 && x.height <= 400) { r = '360p' } else if (x.height > 400 && x.height <= 500) { r = '480p' } else if (x.height > 500 && x.height <= 600) { r = '540p' } else if (x.height > 600 && x.height <= 900) { r = '720p' } else if (x.height > 900 && x.height <= 1200) { r = '1080p' } else if (x.height > 1200 && x.height <= 1800) { r = '1440p' } else if (x.height > 1800) { r = '2160p' } if (x.width == 426 && x.height <= 240) { r = '240p' } else if (x.width == 640 && x.height <= 360) { r = '360p' } else if (x.width == 854 && x.height <= 480) { r = '480p' } else if (x.width == 1280 && x.height <= 720) { r = '720p' } else if (x.width == 1920 && x.height <= 1080) { r = '1080p' } else if (x.width == 2560 && x.height <= 1440) { r = '1440p' } else if (x.width == 3840 && x.height <= 2160) { r = '2160p' } if (v.settings.customqualities == 1 && exist(v.settings['name' + r])) { r = v.settings['name' + r] } else { if (y == 1) { r = Lang(r) } if (y == 2 && exist(x.bitrate)) { r = parseInt(x.bitrate / 1000) + ' ' + Lang('kbps') } } return r };

        function Time() { if (is_dash) { return dash_created ? dash.time() : 0 } else { return pjstg.currentTime } };
        this.Play = function() {
            var p = true;
            if (is_hls && !hls_started) {
                if (!hls_created) { CreateHLS(true) }
                hls.startLoad()
            }
            if (is_dash && !dash_created) {
                CreateDASH(true);
                p = false
            }
            if (is_ws) {
                if (!ws_created) { CreateWS() }
                ws.play();
                p = false
            }
            if (pjstg.style.top == "-2000px") { this.AfterVast() }
            p ? TagPlay() : ''
        };
        var playtry;

        function TagPlay() {
            if (url != "none") {
                var playPromise = pjstg.play();
                if (playPromise !== undefined) {
                    playPromise.then(function() {}).catch(function(error) {
                        log("playError", error.message);
                        if (error.message.indexOf('source') == -1 && error.message.indexOf('interrupted by') == -1) {
                            if (!o.system.mobile || error.message.indexOf('user denied permission') == -1) {
                                if (v.autoplaymute == 1 && !o.muted) {
                                    o.actions.Mute();
                                    pjstg.play()
                                } else {
                                    o.controls.Pause();
                                    o.actions.ShowPoster()
                                }
                            } else {
                                o.controls.Pause();
                                o.actions.ShowPoster();
                                js("autoplay_denied")
                            }
                        }
                    })
                }
            }
        }
        this.BeforeVast = function() {
            if (o.vastloader || o.vast) {
                if (o.ispipkit) { PipWebkit() }
                if (!o.airplayed && o.system.mobile && o.system.webkit) {
                    if (!pjstg.muted) {
                        pjstg.muted = true;
                        unmuteplease = true
                    }
                    css(pjstg, { "position": "absolute", "left": -2000, "top": -2000 });
                    pause_before_vast = Time();
                    if (!is_ws) { pjstg.play() }
                    if (pause_before_vast == 0 && o.seekto > 0) { _seekaftervast = o.seekto }
                }
            }
        };
        this.AfterVast = function() {
            if (!o.airplayed && (o.system.mobile || o.system.webkit)) {
                css(pjstg, { "position": "static", "left": 0, "top": 0 });
                if (unmuteplease) {
                    !o.muted ? pjstg.muted = false : '';
                    unmuteplease = false
                }
                if (_seekaftervast > 0) {
                    o.seekto = _seekaftervast;
                    _seekaftervast = 0
                }
                pause_before_vast = -1
            }
        };
        this.Pause = function() { pause() };

        function pause() { if (is_ws) { ws.pause() } else { pjstg.pause() } };
        this.Toggle = function() {!pjstg.paused ? Pause() : TagPlay() };
        this.Seek = function(x) { if (is_dash && dash_created) { dash.seek(x) } else { pjstg.currentTime = x } };
        this.Mute = function() { pjstg.muted = true };
        this.Unmute = function() { pjstg.muted = false };
        this.Volume = function(x) { pjstg.volume = x };
        this.Gain = function() {
            if (o.gainedsource != pjstg) {
                window.AudioContext = window.AudioContext || window.webkitAudioContext;
                var ctx = new AudioContext();
                var source = ctx.createMediaElementSource(pjstg);
                var gain = ctx.createGain();
                gain.gain.value = v.volumegain;
                source.connect(gain);
                gain.connect(ctx.destination);
                o.gained = true;
                o.gainedsource = pjstg
            }
        };
        this.isPlaying = function() { return !pjstg.paused };
        this.isLive = function() { return v.live == 1 || is_ws ? true : is_live };
        this.tag = function() { return pjstg };
        this.nativeControls = function() { attr(pjstg, { 'controls': '1' }); return true };
        this.preload = function() { attr(pjstg, { 'preload': 'metadata' }); if (is_hls && !hls_created) { CreateHLS(false) } if (is_dash && !dash_created) { CreateDASH(false) } };
        this.status = function() { var state = "playing"; if (pjstg.paused) { state = "paused" } if (pjstg.ended) { state = "ended" } return state };
        this.ChangePip = function(x, y) {
            pip = x;
            y.appendChild(pjstg);
            container = y;
            if (x) {
                pjstg.muted = true;
                PipSize();
                if (o.files_quality.length > 0) {
                    if (is_hls) {
                        pip_quality = o.current_quality;
                        hls.autoLevelCapping = 0;
                        hls.currentLevel = 0
                    }
                }
            } else {
                if (!o.muted) { pjstg.muted = false }
                pjstg.volume = v.volume;
                PlayerSize();
                if (o.files_quality.length > 0) { if (is_hls) { hls.autoLevelCapping = -1; if (pip_quality > -1) { hls.nextLevel = pip_quality } } }
            }
        };
        this.time = function() { return Time() };
        this.duration = function() { var x = pjstg.duration; if (is_dash && dash_created) { x = dash.duration() } if (exist(v.end)) { x = v.end } return x != Infinity && !isNaN(x) ? x : 0 };
        this.loaded = function() {
            var x = 0;
            if (pjstg.buffered) {
                if (pjstg.buffered.length > 0) {
                    var y = Time();
                    for (var i = 0; i < pjstg.buffered.length; i++) { if ((y >= pjstg.buffered.start(i) || y >= pjstg.buffered.start(i) - 100) && y <= pjstg.buffered.end(i)) { x = pjstg.buffered.end(i) } }
                    x == 0 ? x = pjstg.buffered.end(pjstg.buffered.length - 1) : ''
                }
            }
            if (exist(v.end)) { x > v.end ? x = v.end : '' }
            return x
        };
        this.auto = function() { var x = false; if (is_hls) { if (hls_created) { x = hls.autoLevelEnabled } } else if (is_dash) { if (dash_created) { x = dash.getAutoSwitchQualityFor("video") } } return x };
        this.size = function() { return { "width": pjstg.videoWidth, "height": pjstg.videoHeight } };
        this.src = function(x) {
            url = x;
            onplay = false;
            o.media_error != 2 ? o.media_error = false : '';
            if (is_hls) {
                is_hls && hls ? hls.destroy() : '';
                CreateHLS(true);
                CheckPip()
            } else {
                attr(pjstg, { 'src': x, 'autoplay': 0 });
                tagSrc();
                pause()
            }
        };

        function tagSrc() {
            if (o.system.safari) {
                var y = pjstg.textTracks;
                if (y) { for (var i = 0; i < y.length; i++) { y[i].mode = "disabled" } }
                y = pjstg.audioTracks;
                if (y) { for (i = 0; i < y.length; i++) { y[i].enabled = (i == 0 ? 1 : 0) } }
                if (window.WebKitPlaybackTargetAvailabilityEvent) { pjstg.addEventListener('webkitplaybacktargetavailabilitychanged', function(event) { o.airplay = event.availability == "available";!pip ? o.actions.AirplayChanged() : '' }) }
            }
            CheckPip()
        }
        this.airplay = function() { pjstg.webkitShowPlaybackTargetPicker() };
        this.pipwebkit = function() { PipWebkit() };

        function CheckPip() { if (o.system.webkit) { if (exist(pjstg.webkitSupportsPresentationMode) && !o.system.iphone) { o.pipwebkit = true } if (document.pictureInPictureEnabled && !pjstg.disablePictureInPicture) { o.pipwebkit = true } } }

        function PipWebkit() {
            if (o.system.safari) {
                if (pjstg.webkitPresentationMode === "picture-in-picture") {
                    pjstg.webkitSetPresentationMode("inline");
                    o.ispipkit = false
                } else {
                    pjstg.webkitSetPresentationMode("picture-in-picture");
                    o.ispipkit = true
                }
            } else { if (!document.pictureInPictureElement) { eval('pjstg.requestPictureInPicture().then(p => {o.ispipkit = true;}).catch(error => {o.ispipkit = false;});') } else { eval('document.exitPictureInPicture().then(ok =>{o.ispipkit = false;}).catch(error => {});') } }
        };

        function onPipEnter() { o.ispipkit = true };

        function onPipLeave() { o.ispipkit = false };
        this.setDashQuality = function(x) {
            if (dash_created) {
                var x = parseInt(x);
                if (x == dash.getBitrateInfoListFor("video").length) {
                    o.current_quality = dash.getQualityFor('video');
                    dash.setAutoSwitchQualityFor("audio", true);
                    dash.setAutoSwitchQualityFor("video", true)
                } else {
                    dash.setAutoSwitchQualityFor("audio", false);
                    dash.setAutoSwitchQualityFor("video", false);
                    dash.setQualityFor('video', x);
                    dash.setQualityFor('audio', x)
                }
            }
        };
        this.setWsQuality = function(x) { if (o.ws) { o.ws.setTracks(ws, x, -1) } };
        this.setWsAudioTrack = function(x) { if (o.ws) { o.ws.setTracks(ws, -1, x) } };
        this.setDashAudioTrack = function(x) { if (dash_created) { if (pjstg.buffered.length > 0) { dash.setCurrentTrack(dash.getTracksFor('audio')[parseInt(x)]) } } };
        this.setHlsQuality = function(x) {
            if (hls_created) {
                var y = parseInt(x);
                if (x == hls.levels.length) {
                    y = -1;
                    hls.autoLevelCapping = -1
                }
                if (v.hlschangequality == "current") {
                    setTimeout(onWaiting, 500);
                    hls.currentLevel = y
                }
                if (v.hlschangequality == "next") {
                    log("HLS next level " + y);
                    hls.nextLevel = y
                }
                if (y == -1) { o.current_quality = hls.loadLevel }
            }
        };
        this.getHLS = function() { return hls };
        this.getDASH = function() { return dash };
        this.HlsLevelsLength = function() { return HlsLevelsLength() };

        function HlsLevelsLength() { var x = 0; if (hls_created) { if (hls.levels) { x = hls.levels.length } } return x }
        this.DashLevelsLength = function() { return DashLevelsLength() };
        this.resize = function() { Resize() };

        function Resize() { var x = pjstg.videoWidth / pjstg.videoHeight; if (x) { x = (x).toFixed(2); var z = eval(v.ratio).toFixed(2); if (z != x) { if (o.screen_w > o.screen_h) { css(pjstg, { 'object-fit': 'fill', 'height': '100%', 'width': o.screen_h * z }) } else { css(pjstg, { 'object-fit': 'fill', 'width': '100%', "height": (o.screen_w / z), "position": "absolute", "top": "50%", "left": "50%", "transform": "translate(-50%, -50%)" }) } } } }

        function DashLevelsLength() { var x = 0; if (dash_created) { x = dash.getBitrateInfoListFor("video").length } return x }
        this.setHlsAudioTrack = function(x) { if (hls_created) { hls.audioTrack = parseInt(x) } };
        this.setHlsSubTrack = function(x) { if (hls_created && _hlssubtracks) { _hlssubtracks.HlsSubTrack(x) } };
        this.setDashSubTrack = function(x) { if (dash_created && _dashsubtracks) { _dashsubtracks.DashSubTrack(x) } };
        this.setSpeed = function(x) { pjstg.playbackRate = x };
        this.removeTracks = function() {
            var x = pjstg.textTracks;
            for (var y = 0; y < x.length; y++) {
                x[y].mode = "disabled";
                x[y].removeEventListener("load", iOSTrackLoaded);
                pjstg.removeChild(pjstg.children[0])
            }
        };
        this.addTrack = function(x, y, z) {
            var track = document.createElement('track');
            track.setAttribute('src', x);
            track.setAttribute('label', y);
            track.setAttribute('kind', 'subtitles');
            if (z) { track.setAttribute('default', '') }
            pjstg.appendChild(track);
            track.addEventListener("load", iOSTrackLoaded)
        };

        function iOSTrackLoaded(e) { if (e.target.label) { for (var i = 0; i < o.files_subtitle.length; i++) { if (o.files_subtitle[i] == e.target.label) { o.actions.SetSubtitle(i) } } } };
        this.errorMessage = function() { return error };
        this.Remove = function() {
            is_hls && hls ? hls.destroy() : '';
            is_dash && dash ? dash.reset() : '';
            is_ws && ws ? ws.stop() : '';
            pjstg.removeEventListener('error', onTagError);
            pjstg.removeEventListener('ended', onEnded);
            pjstg.removeEventListener('play', onPlay);
            pjstg.removeEventListener('pause', onPause);
            pjstg.removeEventListener('timeupdate', onTimeupdate);
            pjstg.removeEventListener('seeking', onSeeking);
            pjstg.removeEventListener('seeked', onSeeked);
            pjstg.removeEventListener('loadedmetadata', onMeta);
            pjstg.removeEventListener('volumechange', onVolume);
            pjstg.removeEventListener('waiting', onWaiting);
            pjstg.removeEventListener('durationchange', onDuration);
            pjstg.removeEventListener('enterpictureinpicture', onPipEnter);
            pjstg.removeEventListener('leavepictureinpicture', onPipLeave);
            pjstg.src = '';
            if (container.tagName == "IFRAME") { container.contentDocument.body.removeChild(pjstg) } else { container.removeChild(pjstg) }
            pjstg = null
        }
    };
    var MediaYoutube = function(url, parentcontainer) {
        var intro = false;
        if (url.indexOf('intro') == 0) {
            intro = true;
            url = url.substr(5)
        }
        var youtube_id = YoutubeID(url);
        var error;
        var player;
        var created = false;
        var ready = false;
        var started = false;
        var vastonmobile = false;
        var auto = true;
        var _set_quality = [];
        var _speed = 1;
        var _wait = false;
        var startwait_t;
        var _start = 0;
        var _readyonplay = 0;
        var quality_received = false;
        var container_id = 'pljs_yt_' + v.id + (intro ? 'intro' : '');
        var container = createElement('div');
        container.setAttribute('id', container_id);
        parentcontainer.appendChild(container);
        o.airplay = false;
        !intro ? o.actions.AirplayChanged() : '';
        if (o.system.mobile) { v.preload = 1 }
        if (v.youtubecontrols != 1) {
            var layer = createElement('div');
            parentcontainer.appendChild(layer);
            css(layer, { position: "absolute", top: 0, left: 0, "background-color": "#ff0000", height: "100%", width: "100%", "opacity": 0 });
            layer.addEventListener("dblclick", function(event) { event.cancelBubble = true });
            if (o.system.mobile) {
                layer.addEventListener("touchstart", function(event) { event.cancelBubble = true });
                layer.addEventListener("click", function(event) { event.cancelBubble = true });
                layer.addEventListener("touchend", function(event) {
                    event.cancelBubble = true;
                    ScreenClick(event);
                    if (v.screenclick == 1) {
                        setTimeout(HideLayer, 100);
                        setTimeout(ShowLayer, 1000)
                    }
                })
            } else {
                layer.addEventListener("mousemove", function(event) {
                    var x = true;
                    if (v.vast == 1) { if (exist(v.preroll) && !started) { x = false } if (exist(v.playroll) && Status() == "paused" && time() > 0) { x = false } }
                    if (x && v.screenclick == 1 && v.youtubelayer == 1 && v.ytcl != 1) {
                        hide2(this);
                        setTimeout(ShowLayer, 2000)
                    }
                })
            }
            v.screenclick == 1 ? hide2(layer) : ''
        }

        function ShowLayer() { show2(layer) }

        function HideLayer() { if (v.ytcl != 1) { hide2(layer) } }
        if (v.preload == 1 && v.autoplay == 0) { onWaiting() }
        if (!window['YT']) {
            window.onYouTubeIframeAPIReady = function() { YouTubeIframeAPIReady(); for (var i = 0; i < pljssglobal.length; i++) { if (pljssglobal[i].api("id") != v.id) { if (pljssglobal[i].api('isyoutube')) { pljssglobal[i].api('youtubeready') } } } };
            if (!Scripted("youtube.com/iframe_api")) {
                var tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                tag.name = "youtube_iframe_api";
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                tag.onerror = function(e) {
                    o.actions.MediaReady();
                    if (v.yterrors != 1) {
                        error = 'YouTube API Error';
                        o.media.onError()
                    }
                }
            }
        } else { YouTubeIframeAPIReady() }

        function YouTubeIframeAPIReady() { if (v.preload == 1 || intro) {!created ? Init() : '' } else { o.actions.MediaReady() } }

        function Init() {
            if ("YT" in window) {
                if (exist(YT.Player) && !created) {
                    log("Youtube Init");
                    var cntrls = 0;
                    if (v.youtubecontrols == 1) { cntrls = 1 }
                    o.seekto > 0 ? _start = parseInt(o.seekto) : '';
                    player = new YT.Player(container_id, { height: o.container_h, width: o.container_w, videoId: youtube_id, playerVars: { enablejsapi: 1, playerapiid: container_id, html5: 1, disablekb: 1, autohide: 1, playsinline: ((v.playsinlineonmobile == 0 || (v.playsinlineonmobileiphone != 1 && o.system.iphone)) && o.system.mobile ? 0 : 1), iv_load_policy: 3, controls: cntrls, showinfo: 0, modestbranding: 1, rel: 0, autoplay: 0, loop: 0 }, events: { 'onReady': onYtPlayerReady, 'onStateChange': onYtPlayerStateChange, 'onError': onError, 'onPlaybackQualityChange': onQualityChanged } });
                    if (o.seekto > 0) { o.seekto = undefined }
                    Resize();
                    created = true
                } else { setTimeout(Init, 500) }
            } else { setTimeout(Init, 500) }
        }
        var _play_i;

        function onYtPlayerReady() {
            log("Youtube Ready");
            ready = true;
            clearTimeout(startwait_t);
            o.actions.StopWaiting();
            if (intro) {
                if (o.system.mutedautoplay) { o.actions.Mute() }
                player.playVideo();
                o.vast.ytReady()
            } else {
                if (v.autoplay == 1 && o.system.mutedautoplay && !o.acted) {
                    o.actions.Mute();
                    if (o.system.mobile) {
                        clearInterval(_play_i);
                        _play_i = setInterval(PlayingChecker, 300)
                    }
                }
                if (v.preload == 0) { player.playVideo() } else { o.actions.MediaReady() }
                o.media.onDuration();
                if (_speed != 1) { SetSpeed(_speed) }
                onMeta();
                Resize()
            }
        }

        function PlayingChecker() {
            var x = player.getPlayerState();
            if (x == 2 || x == -1) {
                o.controls.Pause();
                o.controls.StopWaiting();
                clearInterval(_play_i)
            }
            if (x == 1) { clearInterval(_play_i) }
        }

        function onYtPlayerStateChange(event) {
            if (intro) { if (event.data == YT.PlayerState.ENDED) { o.vast.ytEnded() } if (event.data == YT.PlayerState.PLAYING) {} } else {
                if (event.data == YT.PlayerState.PLAYING) {
                    if (_readyonplay == 1) {
                        _readyonplay = 0;
                        onYtPlayerReady()
                    }
                    if (!o.start) { o.actions.Play() }
                    if (_start > 0) {
                        player.seekTo(_start, true);
                        _start = 0
                    }
                    ShowLayer();
                    started = true;
                    ready = true;
                    if (vastonmobile) { player.pauseVideo() } else {
                        o.media.onPlay();
                        o.media.onTimeupdate()
                    }
                    Qualities();
                    if (exist(v.default_quality)) {
                        for (var i = 0; i < o.files_quality.length; i++) { if (v.default_quality == o.files_quality[i]) { SetQuality(i) } }
                        v.default_quality = null
                    } else {
                        if (exist(o.default_quality)) {
                            for (var i = 0; i < o.files_quality.length; i++) { if (o.default_quality == o.files_quality[i]) { SetQuality(i) } }
                            o.default_quality = null
                        }
                    }
                    _wait = false
                }
                if (event.data == -1 && _wait && o.play) {
                    o.actions.StopWaiting();
                    _wait = false;
                    onPause()
                }
                if (event.data == YT.PlayerState.PAUSED) { onPause() }
                if (event.data == YT.PlayerState.ENDED) { onEnded() }
                if (event.data == YT.PlayerState.BUFFERING) {
                    _wait = true;
                    onWaiting()
                }
                if (event.data == YT.PlayerState.CUED) {}
            }
        }

        function onError(event) { if (intro) { o.vast.ytError() } else { if (event.data == 2) { error = "wrong youtube id" } if (event.data == 5) { error = "network empty" } if (event.data == 101 || event.data == 150 || event.data == 100) { error = "this video is unavailable" } if (v.customyterrors == 1) { exist(v.customyterror) ? error = v.customyterror : '' } if (v.yterrors != 1) { o.media.onError() } } }

        function onEnded() {
            v.start > 0 ? _start = v.start : '';
            o.media.onEnded();
            o.media.onDuration()
        }

        function onPause() { o.media.onPause() }

        function onTimeupdate() { o.media.onTimeupdate() }

        function onMeta() {
            o.media.onMeta();
            o.actions.LoadedData()
        }

        function onDuration() { o.media.onDuration() }

        function onVolume() { o.media.onVolume() }

        function onWaiting() { if (o.media) { o.media.onWaiting() } else { startwait_t = setTimeout(onWaiting, 100) } }

        function onQualityChanged(event) { SetCurrentQuality(event.data) }

        function Qualities() {
            if (!quality_received) {
                var x = player.getAvailableQualityLevels() + '';
                if (x != '' && x != undefined) {
                    o.files_quality = x.split(',');
                    if (v.ytautoquality == 0) { var y = o.files_quality.indexOf('auto'); if (y > -1) { o.files_quality.splice(y, 1) } }
                    for (var i = 0; i < o.files_quality.length; i++) { o.files_quality[i] = RenameQualities(o.files_quality[i]) }
                    quality_received = true;
                    SetCurrentQuality(player.getPlaybackQuality())
                }
            }
        }

        function SetCurrentQuality(x) {
            o.current_quality = o.files_quality.indexOf(RenameQualities(x + ''));
            o.controls.QualityChanged(o.current_quality)
        }
        this.size = function() { return { "width": 0, "height": 0 } };

        function Status() {
            var state = -1;
            if (ready) { state = player.getPlayerState() }
            var x = '';
            if (state == -1) { x = "paused" }
            if (state == 1 || state == 3) { x = "playing" }
            if (state == 2) {
                x = "paused";
                if (o.play) {
                    o.controls.Pause();
                    o.actions.StopWaiting()
                }
            }
            if (state == 5) { x = "paused" }
            if (state == 0) { x = "ended" }
            return x
        }

        function Resize() { player ? player.setSize(o.screen_w, o.screen_h) : '' }

        function RenameQualities(x) {
            var y = x;
            if (x == "tiny") { y = "160p" }
            if (x == "small") { y = "240p" }
            if (x == "medium") { y = "360p" }
            if (x == "large") { y = "480p" }
            if (x == "hd720") { y = "720p" }
            if (x == "hd1080") { y = "1080p" }
            if (v.nameofyoutubequality == 1) { y = Lang(y) }
            if (x == "auto") { y = Lang("auto") }
            _set_quality[y] = x;
            return y
        }

        function time() { return ready ? player.getCurrentTime() : 0 };

        function SetSpeed(x) {
            player ? player.setPlaybackRate(x) : '';
            _speed = x
        };
        this.YoutubeReady = function() { YouTubeIframeAPIReady() };
        this.Play = function() { if (ready) { player.playVideo() } else { if (!created) { Init() } else {} } };
        this.Pause = function() { if (ready) { player.pauseVideo() } };
        this.Toggle = function() { if (ready) { Status() == 'playing' ? player.pauseVideo() : player.playVideo() } };
        this.Seek = function(x) { ready ? player.seekTo(x, true) : '' };
        this.tag = function() { return false };
        this.Mute = function() { ready ? player.mute() : '' };
        this.Unmute = function() { ready ? player.unMute() : '' };
        this.Volume = function(x) { ready ? player.setVolume(x * 100) : '' };
        this.isPlaying = function() { return Status() == 'playing' };
        this.isLive = function() { return false };
        this.setQuality = function(x) { SetQuality(x) };

        function SetQuality(x) {
            if (ready) {
                if (exist(o.files_quality[x])) {
                    var y = _set_quality[o.files_quality[x]];
                    auto = y == 'auto';
                    var z = time();
                    player.setPlaybackQuality(y)
                }
            }
        }
        this.setSpeed = function(x) { SetSpeed(x) };
        this.ready = function() { return ready };
        this.status = function() { return Status() };
        this.time = function() { return time() };
        this.duration = function() { var x = ready ? player.getDuration() : 0; if (exist(v.end)) { x = v.end } return x };
        this.loaded = function() { var x = 0; if (ready) { x = player.getVideoLoadedFraction() * player.getDuration() } return x };
        this.resize = function() { Resize() };
        this.errorMessage = function() { return error };
        this.auto = function() { return v.ytautoquality == 1 ? auto : false };
        this.playId = function(x) {
            if (player) {
                _readyonplay = 1;
                player.loadVideoById(x, 0)
            }
        };
        this.BeforeVast = function() {
            if (o.system.mobile && o.system.android) {
                this.Play();
                vastonmobile = true
            } else { if (Status() == "playing") { this.Pause() } }
        };
        this.AfterVast = function() { vastonmobile = false };
        this.nativeControls = function() { return true };
        this.Remove = function() {
            ready ? player.destroy() : '';
            ready = false;
            quality_received = false;
            try {
                if (container) { parentcontainer.removeChild(container) }
                parentcontainer.removeChild(layer)
            } catch (e) {}
        }
    };
    var Controls = function() {
        var b = [];
        var butNames = [];
        var butPosition = [];
        var waiting = false;
        var toolbarHidden = false;
        var settings;
        var playlist;
        o.files_speed = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2];
        if (v.settings.customspeeds == 1 && exist(v.settings.speeds)) { o.files_speed = v.settings.speeds.split(",") }
        o.speed1 = o.files_speed.indexOf('1') > -1 ? o.files_speed.indexOf('1') : o.files_speed.indexOf(1);
        o.current_speed == 3 ? o.current_speed = o.speed1 : '';
        !exist(v.settings.scale) ? v.settings.scale = 5 : '';
        o.files_scale = ['+ ' + v.settings.scale + '%', '&ndash; ' + v.settings.scale + '%', '100%'];
        var resizeonwidth = false;
        var stretch_width = 0;
        var stretch_width_last = 0;
        var stretch_with_volume = false;
        var firstly = true;
        var bg = new ControlsBg();
        var settings;
        var order = [];
        var _rights = false;
        var _move_rights = false;
        var _max_order = 0;
        var _rb = [];
        if (v.control_line.position == "controls-right") { v.control_line.position = "controls" }
        for (var y in v) {
            if (v.hasOwnProperty(y)) {
                if (y.indexOf("control_") == 0 && v[y]) {
                    !exist(v[y].order0) ? v[y].order0 = v[y].order : v[y].order = v[y].order0;
                    order[v[y].order] = y;
                    if (v.control_line.position != "controls") {
                        if (v[y].position == "controls-right") {
                            _rb.push([y, v[y].order]);
                            _rights = true
                        } else { if (v[y].position == "controls" || v[y].position == undefined) { _rights ? _move_rights = true : '' } }
                    }
                    _max_order < v[y].order ? _max_order = v[y].order : ''
                }
            }
        }
        if (_move_rights) {
            _rb.sort(function(a, b) { return a[1] - b[1] });
            for (var i = 0; i < _rb.length; i++) {
                order[v[_rb[i][0]].order] = null;
                v[_rb[i][0]].order = _max_order + 1;
                _max_order++;
                order[v[_rb[i][0]].order] = _rb[i][0]
            }
        }
        if (v.hotkey.seeksides == 1) {}
        if (v.toolbar.hide == 1 && v.toolbar.hidedown == 1) {
            o.toolbar = createElement("div");
            o.frame.appendChild(o.toolbar);
            css(o.toolbar, { 'position': 'absolute', 'left': 0, 'top': 0, 'width': '100%', 'height': '100%', 'transition': 'top 0.3s ease-out', 'pointer-events': 'none' })
        }
        var bg2 = createElement("div");
        if (v.toolbar.hide == 1 && v.toolbar.hidedown == 1) { o.toolbar.appendChild(bg2) } else { o.frame.appendChild(bg2) }
        css(bg2, { 'position': 'absolute', 'left': 0, 'bottom': 0, 'width': '100%', 'height': v.toolbar.h });
        bg2.onclick = function() {!o.system.mobile ? o.actions.ControlsBgClick() : '' };
        for (var i = 1; i < order.length; i++) {
            if (order[i]) {
                var y = order[i];
                if (y) {
                    if (o.system.mobile) { if (v[y].action == "volume" || (v[y].action == "fullscreen" && v.nativemobile)) { v[y].on = 0 } }
                    if (v[y].on == 1) {
                        var action = v[y].action;
                        if (action == "line" || action == "volume") {
                            b[y] = new ControlLine(y, action);
                            b[y].Resize(b[y].s("w"))
                        } else { b[y] = new Control(y) }
                        butNames.push(y);
                        if (b[y].g("action") == "title") { if (b[y].s("text") == '') { if (b[y].s("var") != '') { if (!exist(v[b[y].s("var")])) { b[y].set("display", false) } } else { b[y].set("display", false) } } }
                        b[y].set("scale", b[y].s("scale"))
                    }
                }
            }
        }
        if (exist(v.settings)) {
            settings = new Settings("settings");
            v.settings.always == 1 ? settings.show() : settings.hide()
        }
        if (exist(v.playlist)) { playlist = new Settings("playlist"); if (exist(o.playlist)) { playlist.updatePlaylist(o.playlist); if (v.playlist.openplaylistbefore == 0 || !exist(v.playlist.openplaylistbefore)) { v.playlist.always == 0 ? playlist.hide() : '' } else { playlist.show() } } else { playlist.hide(1) } }
        if (exist(v.control_share)) { if (v.control_share.on == 1) { o.share = new Share() } }
        PlaylistControls();
        Resize(true);
        ShowOrHide();
        firstly = false;

        function ControlX(but) {
            var x = 0;
            var to_right = false;
            if (but) {
                if (but.g("action") == 'line') { x = butPosition.left + but.s("marginleft"); if (butPosition.rightbs != null) {} else { butPosition.rightbs = [] } } else {
                    if (butPosition.rightbs != null) {
                        var but_space = but.g("width") + but.s("marginright") + but.s("marginleft");
                        if (HideProof(but)) { but_space = 0 }
                        if (but.s("hidden") == 1 && !but.g("show")) { but_space = 0 }
                        if (but.s("vertical") > 0) { but_space = 0 }
                        x = bg.g("w") - v.toolbar.leftandrightpadding * 1 - but_space + but.g("width") / 2 + but.s("marginleft");
                        var i = 0;
                        butPosition.right -= but_space;
                        for (i = 0; i < butPosition.rightbs.length; i++) {
                            var but2 = b[butPosition.rightbs[i]];
                            if (but2.s("vertical") > 0) { css(but2.c(), { "left": (but2.g("x0") - but_space) }) } else { css(but2.c(), { "left": (but2.g("x") - but_space) }) }
                            but2.set("x0", but2.g("x"))
                        }
                        butPosition.rightbs.push(but.g("key"));
                        but.set('rightside', 1)
                    } else {
                        if (but.s("hidden") == 1 && !but.g("show")) {
                            if (but.g("action") == "volume") {
                                if (but.s("hide") == 1 && but.s("hideoutmute") == 1 && stretch_with_volume) {
                                    stretch_width += but.g("width") + but.s("marginleft") + but.s("marginright");
                                    stretch_with_volume = false
                                }
                            }
                        } else {
                            if (but.s("vertical") > 0) { x = butPosition.left + but.s("marginleft") + but.s("marginright") } else {
                                var stop = false;
                                if (but.g("action") == "volume") {
                                    if (but.s("hide") == 1 && but.s("hideoutmute") == 1) {
                                        if (!o.hidden_volume_over_process && !o.hidden_volume_over) {
                                            stop = true;
                                            stretch_with_volume = false
                                        } else {
                                            if (!stretch_with_volume) {
                                                stretch_width -= but.g("width") + but.s("marginleft") + but.s("marginright");
                                                stretch_with_volume = true
                                            }
                                        }
                                    }
                                }
                                if (HideProof(but)) { stop = true }
                                if (!stop) {
                                    butPosition.left += but.g("width") / 2 + but.s("marginleft");
                                    x = butPosition.left;
                                    butPosition.left += but.g("width") / 2 + but.s("marginright")
                                } else { x = butPosition.left }
                            }
                        }
                    }
                }
            }
            return x
        }

        function ControlCoordinate(but) {
            var width = o.fullscreen && v.toolbar.stretchonfullscreen == 0 ? o.normal_w : o.screen_w;
            var height = o.screen_h;
            var but_x = 0;
            if (but != bg) { but_x = width / 2 + but.s("marginleft") - but.s("marginright") }
            var but_y = height / 2;
            var but_w = but.g("width");
            var but_h = but.g("height");
            var position = but.s("position");
            if (position.indexOf("center") > -1) { but_x = o.screen_w / 2 + but.s("marginleft") - but.s("marginright") }
            if (position.indexOf("top") == 0) { but_y = but_h / 2 + (but.s("marginproctop") * o.screen_h / 100) }
            if (position.indexOf("bottom") == 0) { but_y = o.screen_h - (but == bg ? but_h : but_h / 2) - (but.s("marginprocbottom") * o.screen_h / 100) }
            if (position.indexOf("right") > -1) { but_x = o.screen_w - but_w / 2 + but.s("marginleft") - but.s("marginright") - (but.s("marginprocright") * o.screen_w / 100) }
            if (position.indexOf("left") > -1) { but_x = but_w / 2 + but.s("marginleft") - but.s("marginright") + (but.s("marginprocleft") * o.screen_w / 100) }
            if (position == "timeline") {
                but_x = -o.timeline_w / 2 + (but.s("marginprocleft") * o.timeline_w / 100) + but.s("marginleft") - but.s("marginright");
                but_y = -o.timeline_h / 2 - (but.s("marginprocbottom") * o.timeline_h / 100) + (but.s("marginproctop") * o.timeline_h / 100)
            }
            if (position.indexOf("controls") > -1) {
                var cx = ControlX(but);
                but_x = (bg ? (bg.c() ? int(bg.c().offsetLeft) : 0) : 0) + cx;
                if (position == "controls-right") { but_x += stretch_width }
                if (v.toolbar.position == "top") { but_y = v.toolbar.h / 2 } else { but_y = height - v.toolbar.h / 2 }
            }
            return { x: but_x, y: but_y + but.s("margintop") - but.s("marginbottom") }
        }

        function Resize(all) {
            var w = o.fullscreen && v.toolbar.stretchonfullscreen == 0 ? o.normal_w : o.screen_w;
            var h = o.screen_h;
            css(bg.c(), { 'top': (v.toolbar.position == "top" ? 0 : o.screen_h - v.toolbar.h) - v.toolbar_margintop });
            bg.set("y0", (o.screen_h - v.toolbar.h - v.toolbar_margintop));
            if (v.toolbar.stretchonfullscreen == 0 && bg) {
                css(bg.c(), { 'width': w, 'left': 0, 'margin-left': 0 });
                bg.set("w", w);
                if (o.fullscreen) { css(bg.c(), { 'left': '50%', 'margin-left': -w / 2 }) }
            }
            butPosition = { "left": v.toolbar.leftandrightpadding * 1, "right": (bg.g("w") - v.toolbar.leftandrightpadding * 1) };
            var bg_hide = false;
            if (!bg.g("show")) {
                bg.set("display", true);
                bg_hide = true
            }
            var key;
            for (var i = 0; i < butNames.length; i++) {
                key = butNames[i];
                if (b[key]) {
                    var cc = ControlCoordinate(b[key]);
                    if (cc) {
                        b[key].set("x0", cc.x);
                        b[key].set("y0", cc.y);
                        if (b[key].s("hidden") == 1 && !b[key].g("show") && !all) { HidePositionControl(b[key]) } else { css(b[key].c(), { "position": "absolute", "left": b[key].g("x0"), "top": b[key].g("y0") }) }
                    }
                }
            }
            if (bg_hide) { bg.set("display", false) }
            stretch_width = 0;
            for (key in b) {
                if (b.hasOwnProperty(key)) {
                    if (b[key].s("position") == "controls-right" && b[key].g("action") != "line" && stretch_width > -1) { stretch_width = butPosition.right - butPosition.left }
                    if (b[key].g("action") == "line" && bg) {
                        var line_width;
                        if (b[key].s("customwidth") == 1) { line_width = b[key].s("w") } else {
                            if (b[key].s("position").indexOf("controls") > -1) {
                                line_width = butPosition.right - butPosition.left - b[key].s("marginleft") - b[key].s("marginright");
                                css(b[key].c(), { "left": (int(bg.c().offsetLeft) + butPosition.left + b[key].s("marginleft") + line_width / 2) });
                                stretch_width = -1
                            } else {
                                line_width = bg.g("w") - b[key].s("marginleft") - b[key].s("marginright");
                                css(b[key].c(), { "left": (int(bg.c().offsetLeft) + b[key].s("marginleft") + line_width / 2) })
                            }
                        }
                        b[key].set("x0", b[key].g("x"));
                        b[key].Resize(line_width)
                    }
                }
            }
            if (settings) { ResizeSettings(settings) }
            if (exist(v.playlist)) { ResizeSettings(playlist) }
            resizeonwidth || o.fullscreen || stretch_width_last != stretch_width ? ShowOrHide() : ''
        }

        function HidePositionControl(b) { var left = 0; var top = 0; if (b.s("position").indexOf("right") > -1 && b.s("position").indexOf("controls") == -1) { left = o.screen_w + b.g("width") + 10 } if (b.s("position").indexOf("left") > -1) { left = -b.g("width") - 10 } if (b.s("position").indexOf("top") > -1) { top = -b.g("height") * 2 } if (b.s("position").indexOf("bottom") > -1 || b.s("position").indexOf("controls") > -1) { top = o.screen_h + b.g("height") + b.g("width") + 10 } if (left > 0) { css(b.c(), { "left": left }) } if (top > 0) { css(b.c(), { "top": top }) } }

        function ResizeSettings(x) {
            var top = -2000;
            x.resizePlaylist();
            var y = o.screen_h - v.toolbar.h * (x.s("position").indexOf("top") > -1 ? 1 : 2);
            var ymax = y - (o.fullscreen && !o.system.mobile ? (100 + x.s("hmaxk") * 1) : x.s("hmaxk"));
            ymax < 100 ? ymax = 100 : '';
            css(x.c(), { 'max-height': ymax });
            x.co() ? css(x.co(), { 'max-height': ymax }) : '';
            if (x.g("show")) {
                top = o.screen_h / 2 - x.g("height") / 2 + x.s("margintop") - x.s("marginbottom");
                if (x.s("position").indexOf("top") > -1) { top = x.s("margintop") - x.s("marginbottom") }
                if (x.s("position").indexOf("bottom") > -1) { top = o.screen_h - v.toolbar.h - x.g("height") + x.s("margintop") - x.s("marginbottom") }
                top < 0 ? top = 0 : ''
            }
            if (x.s("position").indexOf("right") > -1) { css(x.c(), { "position": "absolute", "right": x.s("marginright") - x.s("scrollwidth"), "top": top }) } else if (x.s("position").indexOf("left") > -1) { css(x.c(), { "position": "absolute", "left": x.s("marginleft"), "top": top }) } else { if (x.g("key") == "playlist" && x.s("floatleft") == 1) { css(x.c(), { "position": "absolute", "left": o.screen_w / 2 - x.g("width") / 2 + x.s("marginleft") / 2 - x.s("marginright") / 2, "top": top }) } else { css(x.c(), { "position": "absolute", "left": o.screen_w / 2 - x.g("width") / 2 + x.s("marginleft") - x.s("marginright"), "top": top }) } }
            x.Arrows()
        };
        this.ControlClick = function(key) {
            var but = b[key];
            var action = but.g("action");
            if (action) {
                var d = new Date();
                o.clicktime = d.getTime();
                if (action && action != "") { Action(but) }
            }
        };
        this.toggleControl = function(x, y) { for (var key in b) { if (b.hasOwnProperty(key)) { if (b[key].g("action") == x) { b[key].set(y ? "show2" : "hide2") } } } };
        this.butById = function(x) { var y; for (var key in b) { if (b.hasOwnProperty(key)) { if (b[key].s("dom") == x) { y = b[key] } } } return y };

        function Action(but) {
            o.acted = true;
            var a = but.g("action");
            if (a == "play") { o.actions.Play() } else {
                if (a == "pause") { o.actions.Pause() }
                if (a == "stop") {
                    v.preload = 0;
                    v.autoplay = 0;
                    o.media.Recover();
                    o.actions.Stop()
                }
            }
            if (a == "back") { o.actions.Seek(0, false) }
            if (a == "fullscreen") {!o.casting ? o.actions.Fullscreen() : '' } else { if (a == "normalscreen") { o.actions.Normalscreen() } }
            if (a == "line") {
                if (v.seekwindow > 0) { if (v.seekwindow / (o.media.duration()) <= 1 - but.g("click")) { return } }
                o.actions.Seek(but.g("click") * o.media.duration(), true);
                if (o.continue) {
                    o.continue.write(but.g("click") * o.media.duration(), o.media.duration());
                    o.seekto > 0 ? o.seekto = undefined : ''
                }
            }
            if (a == "volume") {
                var x = but.g("click");
                x < 0.02 ? x = 0 : '';
                x > 1 ? x = 1 : '';
                if (o.storage && v.volumestore == 1) { localStorage.setItem("pljsvolume", x); if (but.g("click") > 0 || o.system.iphone || v.mutestore == 0) { localStorage.removeItem("pljsmute") } else { localStorage.setItem("pljsmute", 1) } }
                o.actions.Volume(x)
            }
            if (a == "mute") {
                if (o.storage && !o.system.iphone && v.mutestore == 1) { localStorage.setItem("pljsmute", 1) }
                o.actions.Mute()
            } else {
                if (a == "unmute") {
                    if (o.storage) { localStorage.removeItem("pljsmute") }
                    o.actions.Unmute()
                }
            }
            if (a.indexOf("time") == 0) { but.isOn() ? but.Off() : but.On() }
            if (a == "rotate") { o.media.Rotate() }
            if (a == "scale+") { o.media.Scale(0.1) }
            if (a == "scale-") { o.media.Scale(-0.1) }
            if (a == "scale") { o.media.Scale(0) }
            if (a == "live") {
                api("restart");
                but.set("iconopacity", 1);
                but.set("saturate", 1)
            }
            if (a == "share") {
                js("share");
                ShowShare()
            }
            if (a == "settings") { if (settings) { if (!settings.g("show")) { settings.show() } else { settings.hide() } } }
            if (a == "playlist") { if (exist(v.playlist)) { if (playlist.g("show")) { playlist.hide() } else { setTimeout(function() { playlist.show() }, 100) } } }
            if (a == "next") { o.controls.PlaylistNext() }
            if (a == "prev") { o.controls.PlaylistPrev() }
            if (a == "custom") {
                if (but.s("link") == 1 && but.s("linkurl") != "") {
                    var x = but.s("linkurl");
                    if (x.indexOf('{time}') > -1) { x = x.replace('{time}', (exist(o.continue) ? o.continue.flag().t : o.media.time())) }
                    if (x.indexOf('{file}') > -1) { x = x.replace('{file}', o.media.currentFile()) }
                    if (x.indexOf('{title}') > -1) { x = x.replace('{title}', v.title.replace(/,/ig, " ")) }
                    if (x == "airplay") { o.media.Airplay() }
                    if (x == "seektome") { o.actions.Seek(but.s("marginprocleft") * o.media.duration() / 100);!o.play ? o.actions.Play() : '' }
                    but.s("linkpause") == 1 ? o.actions.Pause() : '';
                    var y = x.split(",");
                    if (x.indexOf("api:") == 0) {
                        var z = x.substr(4).split(";");
                        for (var i = 0; i < z.length; i++) {
                            y = z[i].split(",");
                            if (y.length > 1) { api(y[0], y[1], but) } else {
                                if (y[0] == "screenshot" && v.ssfly == 1) {
                                    var ss = api(y[0]);
                                    if (ss) {
                                        if (ss.indexOf("data") > -1) {
                                            var img = document.createElement('img');
                                            img.setAttribute('src', ss);
                                            css(img, { position: "fixed", right: (exist(v.ssflyp) ? v.ssflyp : 20), bottom: (exist(v.ssflyp) ? v.ssflyp : 20), width: 0, transition: "width 0.5s cubic-bezier(.75,-0.5,0,1.75)" });
                                            img.style.zIndex = 1001;
                                            document.body.appendChild(img);
                                            setTimeout(function() { css(img, { width: (exist(v.ssflyw) ? v.ssflyw : 200) }) }, 1);
                                            img.onclick = function() { this.parentNode.removeChild(this) }
                                        }
                                    } else { log(y[0] + " error") }
                                } else { api(y[0]) }
                            }
                        }
                    } else {
                        if (x.indexOf("js:") == 0) { eval(y[0].substr(3) + '(' + (exist(y[1]) ? '"' + y[1] + '"' : '') + (exist(y[2]) ? ',"' + y[2] + '"' : '') + ')') }
                        if (x.indexOf("http") == 0 || x.indexOf("/") == 0 || x.indexOf("?") == 0 || x.indexOf("url:") == 0) {
                            x.indexOf("url:") == 0 ? x = x.substr(4) : '';
                            window.open(x, but.s("linktarget"))
                        }
                        if (x.indexOf("download") == 0) { o.actions.Download() }
                        if (x == "api:pipwebkit") { o.media.PipWebkit() }
                    }
                }
            }
            for (var i = 0; i < 10; i++) {
                if (but.s("linkurl") == "settings#" + i) {
                    if (settings) {
                        if (settings.g("show") && settings.g("open") == i) { settings.hide() } else {
                            settings.show();
                            settings.open(i)
                        }
                    }
                }
            }
        };
        this.title = function(t) {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "title") {
                        if (b[x].s("var") == t) {
                            if (v[t] != '' || b[x].s("icon") != '') { b[x].set("display", true) } else { b[x].set("display", false) }
                            b[x].UpdateText(v[t])
                        }
                    }
                }
            }
            TitlePl()
        };
        this.titlepl = function() { TitlePl() };
        this.resizetext = function() { for (var x in b) { if (b.hasOwnProperty(x)) { if (b[x].g("action") == "custom") { if (b[x].s("type") == "text") { b[x].ResizeText() } } } } };

        function TitlePl() { for (var x in b) { if (b.hasOwnProperty(x)) { if (b[x].g("action") == "custom") { if (b[x].s("type") == "text") { b[x].RenewFromTitle(true) } } } } }

        function ShowShare() { if (exist(o.share)) { o.share.Show() } }
        this.showShare = function() { ShowShare() };
        this.updateTitle = function() {
            if (v.title != '') {
                for (var x in b) {
                    if (b.hasOwnProperty(x)) {
                        if (b[x].g("action") == "title") {
                            var y = false;
                            if (!b[x].g("show")) {
                                y = true;
                                b[x].set("display", true)
                            }
                            b[x].UpdateText(v.title);
                            if (y) { b[x].set("display", false) }
                        }
                    }
                }
            }
        };
        this.customText = function(y, z) {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "custom" && b[x].s("type") == "text") {
                        if (b[x].s("dom") == y) {
                            if (!b[x].g("show")) { b[x].set("display", true) }
                            b[x].UpdateText(z)
                        }
                    }
                }
            }
        };
        this.resize = function() { Resize() };
        this.resize2 = function() { Resize(true) };
        this.resizeSettings = function() { ResizeSettings(settings) };
        this.resizePlaylist = function() { ResizeSettings(playlist) };
        this.Play = function() {
            for (var x in b) { if (b.hasOwnProperty(x)) { if (b[x].g("action") == "play") { b[x].On() } } }
            if (this.PlaylistVisible() && v.playlist.autohide == 1) { this.Playlist() }
            o.play = true;
            ShowOrHide()
        };
        this.Pause = function() {
            for (var x in b) { if (b.hasOwnProperty(x)) { if (b[x].g("action") == "pause" || b[x].g("action") == "stop") { b[x].Off() } } }
            if (playlist) { if (v.playlist.openplaylistpause == 1 && !playlist.empty()) { playlist.show() } }
            o.play = false;
            ShowOrHide();
            if (v.toolbar.hide == 1 && v.toolbar.hideonpause == 1) { HideForce(true) }
        };
        this.Mute = function() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "mute") { b[x].On() }
                    this.Volume(0)
                }
            }
            ShowOrHide()
        };
        this.Unmute = function() {
            for (var x in b) { if (b.hasOwnProperty(x)) { if (b[x].g("action") == "unmute") { b[x].Off() } } }
            if (v.volume < 0.1) {
                v.volume = 0.5;
                o.actions.Volume(v.volume)
            } else { this.Volume(v.volume) }
            ShowOrHide()
        };
        this.Volume = function(volume, y) {
            for (var x in b) { if (b.hasOwnProperty(x)) { if (b[x].g("action") == "volume") { b[x].UpdatePlay(volume, 1, (y == "no" ? y : true)) } if (b[x].g("action") == "mute") { b[x].UpdateVolume(volume) } } }
            ShowOrHide()
        };
        this.Fullscreen = function() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "fullscreen") {
                        b[x].On();
                        b[x].set("scale", b[x].s("scale"))
                    }
                }
            }
            ShowOrHide();
            resizeonwidth ? setTimeout(ShowOrHide, 500) : '';
            HideInterval()
        };
        this.Normalscreen = function() {
            for (var x in b) { if (b.hasOwnProperty(x)) { if (b[x].g("action") == "normalscreen") { b[x].Off() } } }
            Resize();
            clearInterval(o.toolbarInterval);
            ShowOrHide()
        };
        this.onEnded = function() { for (var x in b) { if (b.hasOwnProperty(x)) { if (b[x].g("action") == "play") { b[x].ReplayIcon() } } } };
        this.Review = function() { ShowOrHide() };

        function ShowOrHide() {
            for (var x in b) { if (b.hasOwnProperty(x)) { if (b[x].g("action") != "buffer") { ShowOrHideProcessor(b[x]) } } }
            ShowOrHideProcessor(bg);
            if (stretch_width_last != stretch_width) {
                stretch_width_last = stretch_width;
                Resize()
            }
            if (v.toolbar.hide == 1 && v.toolbar.hidedown == 1) { ToolbarDown(!o.starttimeout && !o.mouseHere && !o.fullscreen && o.play && v.toolbar.hidejustfull != 1 && !o.casting) }
        };

        function ShowForce() {
            var show = toolbarHidden && v.toolbar.hidewithoutmoving == 1;
            if (!o.play && v.toolbar.hide == 1 && v.toolbar.hideonpause == 1) { show = false }
            if (show) {
                for (var x in b) { if (b.hasOwnProperty(x)) { if (b[x].g("action") != "buffer") { ShowOrHideProcessor(b[x], false) } } }
                css(o.frame, { "cursor": "default" });
                o.fcdef = true;
                ShowOrHideProcessor(bg, false);
                if (bg.g("show")) { ToolbarShow() }
                ToolbarDown(false)
            }
        }

        function HideForce() {
            var hide = o.play && v.toolbar.hidewithoutmoving == 1 && !o.mouseDown && !o.controlover;
            if (!o.play && v.toolbar.hide == 1 && v.toolbar.hideonpause == 1) { hide = true }
            if (hide) {
                for (var x in b) { if (b.hasOwnProperty(x)) { if (b[x].g("action") != "buffer") { ShowOrHideProcessor(b[x], true) } } }
                ShowOrHideProcessor(bg, true);
                if (!bg.g("show")) {
                    toolbarHidden = true;
                    o.media.ToolbarHide();
                    if (o.play) {
                        css(o.frame, { "cursor": "none" });
                        o.fcdef = false
                    }
                }
                ToolbarDown(true)
            }
        }

        function HideInterval() {
            if (v.toolbar.hidewithoutmoving == 1) {
                if (v.toolbar.hidejustfull == 1 && !o.fullscreen && !o.fullscreen_process) {} else {
                    clearInterval(o.toolbarInterval);
                    o.toolbarInterval = setInterval(HideForce, ((v.toolbar.hideleavetimeout > 0 ? v.toolbar.hideleavetimeout : v.toolbar.hidetimeout) * 1000))
                }
            }
        }

        function ShowOrHideProcessor(but, forcehide) {
            var hide = false;
            var show = false;
            var toolbar_hide = false;
            if (v.toolbar.hide == 1) {
                if (!o.starttimeout && !o.mouseHere && !o.fullscreen && o.play && v.toolbar.hidejustfull != 1 && !o.casting) {
                    hide = true;
                    show = false;
                    toolbar_hide = true
                } else {
                    hide = false;
                    show = true
                }
                if (exist(forcehide) && !o.casting) {
                    hide = forcehide;
                    show = !hide
                }
                if (v.toolbar.hide == 1 && v.toolbar.hidedown == 1 && (but.s("position").indexOf("controls") == 0 || but.s("action") == "line")) {
                    hide = false;
                    show = true
                }
                if (v.toolbar.hideonpause == 1 && !o.play) {
                    hide = true;
                    show = false;
                    toolbar_hide = false
                }
            } else { if (but.s("hide") != 1) { show = true } }
            if (show && !o.fcdef) {
                css(o.frame, { "cursor": "default" });
                o.fcdef = true
            }
            if (but.s("action") == "custom" && but.s("position").indexOf("controls") == -1) {
                hide = false;
                show = true
            }
            if (o.casting) {
                if (but.s("action") == "line") {
                    if (o.media.duration() == -1) {
                        hide = true;
                        show = false
                    }
                }
            }
            var re_y = false;
            var hp = HideProof(but);
            if (but.s("hide") == 1) { if (but.s("hideonleaveandplay") == 1) { toolbar_hide || forcehide ? hp = true : '' } if (but.s("hideonwidth") == 1 || but.s("hideoverwidth") == 1) { resizeonwidth = true } }
            if (hp) {
                hide = true;
                show = false
            } else {!hide ? show = true : '' }
            if (but.s("action") == "volume") {
                if (but.s("hide") == 1 && but.s("hideoutmute") == 1) {
                    hide = true;
                    show = false;
                    if (!toolbar_hide && (o.hidden_volume_over || o.hidden_volume_over_process) && !forcehide && but.s("hiddenwidth") != 1) {
                        hide = false;
                        show = true
                    } else { re_y = true }
                }
            }
            if (o.nativecontrols || (!o.start && v.toolbar.hide == 1 && v.toolbar.hideuntilstarted == 1) || (!o.metadata && v.toolbar.hide == 1 && v.toolbar.hideuntilmeta == 1)) {
                if (but.s("position").indexOf("controls") > -1 || but.s("position").indexOf("bottom") > -1) {
                    hide = true;
                    show = false
                }
                if (v.toolbar.hidejustfull == 1 && !o.fullscreen) {
                    hide = false;
                    show = true
                }
            }
            if (settings) {
                if (settings.g("show") && v.settings.always != 1) {
                    toolbar_hide = false;
                    forcehide = false
                }
            }
            if (but.g("action") == "share") {
                if (exist(o.share)) {
                    if (o.share.empty()) {
                        hide = true;
                        show = false;
                        but.set("animation", "none")
                    }
                }
            }
            if (but.g("action") == "playlist" || but.g("action") == "next" || but.g("action") == "prev" || but.s("hidewithoutplaylist") == 1) {
                if (playlist.empty() && but.s("hidewithoutplaylist") != 0) {
                    hide = true;
                    show = false;
                    but.set("animation", "none")
                }
            }
            if (re_y) {
                var cc = ControlCoordinate(but);
                if (cc) {
                    cc.y > 0 ? but.set("y0", cc.y) : '';
                    css(but.c(), { "position": "absolute", "top": but.g("y0") })
                }
            }
            if (hide) { HideControl(but, (firstly ? true : false)) }
            if (show) { ShowControl(but) }
            if (but == bg) {
                if (!hide && show) {
                    ToolbarShow();
                    show2(bg2);
                    toolbarHidden = false
                }
                if (hide && !show) {
                    o.media.ToolbarHide();
                    hide2(bg2);
                    toolbarHidden = true
                }
                if (playlist) { if (v.playlist.always == 1 && !playlist.empty()) { if (show || o.nativecontrols) { if (v.playlist.alwaysnotfullscreen == 1 && o.fullscreen) {} else { if (!playlist.g("show")) { if (v.playlist.alwaysjustpause == 1) {!o.play ? playlist.show() : '' } else { playlist.show() } } } } else { if (hide && playlist.g("show")) { playlist.hide() } } } }
            }
        };

        function HideProof(but) {
            var x = false;
            if (but.s("hide") == 1) {
                if (but.s("hideonplay") == 1) { o.play ? x = true : '' }
                if (but.s("hideonpause") == 1) {!o.play ? x = true : '' }
                if (but.s("hideondesktop") == 1) { o.system.desktop ? x = true : '' }
                if (but.s("hideonmobile") == 1) { o.system.mobile ? x = true : '' }
                if (but.s("hideoverwidth") == 1) {
                    if (o.screen_w > but.s("hideoverwidthlimit")) {
                        but.set("hiddenwidth", 1);
                        x = true
                    } else { but.set("hiddenwidth", 0) }
                }
                if (but.s("hideonwidth") == 1) {
                    if (o.screen_w <= but.s("hideonwidthlimit")) {
                        but.set("hiddenwidth", 1);
                        x = true
                    } else { but.set("hiddenwidth", 0) }
                }
                if (but.s("hideafterstart") == 1) { o.start ? x = true : '' }
                if (but.s("hide0timestore") == 1) { if (o.start || !o.continue || o.media.isLive()) { x = true } if (o.continue) { if (o.continue.flag().t == 0) { x = true } } }
                if (but.s("hideuntilstarted") == 1) {!o.start ? x = true : '' }
                if (but.s("hideuntilended") == 1) {!o.media.ended() ? x = true : '' }
                if (but.s("hideonvod") == 1) {!o.media.isLive() ? x = true : '' }
                if (but.s("hideonleave") == 1) {!o.mouseHere ? x = true : '' }
                if (but.s("hidenormscreen") == 1) {!o.fullscreen ? x = true : '' }
                if (but.s("hideonfullscreen") == 1) { o.fullscreen ? x = true : '' }
                if (but.s("hideonunmute") == 1) {!o.muted ? x = true : '' }
                if (but.s("hideonlive") == 1) { o.media.isLive() && o.media.currentFile().indexOf("?DVR") == -1 ? x = true : '' }
                if (but.s("hidewithposter") == 1) { isVisible(o.poster) ? x = true : '' }
                if (but.s("hideuntilmeta") == 1) {!o.metadata ? x = true : '' }
                if (but.s("hidemini") == 1) { o.mini ? x = true : '' }
                if (but.s("hidenomini") == 1) {!o.mini ? x = true : '' }
                if (but.s("hideafterclick") == 1) { if (but.g("clicked")) { x = true } }
                if (but.s("hidenoab") == 1) {!o.ab ? x = true : '' }
                if (but.s("hideab") == 1) { o.ab ? x = true : '' }
                if (but.s("hideonyoutube") == 1) { if (v.preload == 1 && v.screenclick == 1) { if (o.file_type == "youtube" && !exist(v.poster) && v.youtubeposter == 0) { if (!o.start || o.media.status() == "ended") { if (v.poster == '') {} else { x = true } } } } }
            }
            if (but.g("action") == "custom") { if (but.s("linkurl")) { if (but.s("linkurl") == "api:airplay" || but.s("linkurl") == "airplay") { if (!o.airplay && !o.airplayed) { x = true } } if (but.s("linkurl") == "api:pipwebkit") { if (!o.pipwebkit || (!o.start && v.preload == 0)) { x = true } } if (but.s("linkurl") == "api:unfixing") { if (!o.mini) { x = true } } if (but.s("linkurl").indexOf("captions") > -1) { if (!o.captions) { x = true } } } }
            if (but.g("action") == "playlist" || but.g("action") == "next" || but.g("action") == "prev") { if (playlist.empty()) { x = true } }
            if (but.g("action") == "settings") {
                if (settings.empty()) {
                    x = true;
                    but.set("animation", "none")
                }
            }
            if (but.g("type") == "text") { if (but.g("length") == 0) { x = true } }
            if (but.g("settings#")) { if (!but.g("set#visible")) { x = true } }
            if (but.s("chromecast") == 1) { var cb = document.getElementById("pjs_cast_button_" + v.id); if ((o.media.duration() == 0 && o.media.time() == 0) || !o.tagvideo || !isVisible(cb) || !o.cast_available) { x = true } }
            if (but.g("action") == "duration") { if (o.media.isLive()) { x = true } }
            if (but.g("key") == "control_start" && o.system.mobile) { if (o.nativecontrols && o.system.android) { x = true } }
            if (but.s("customjscontrol") == 1) { x = true }
            return x
        }

        function HideControl(but, quick) {
            if (but.g("show")) {
                if (o.fullscreen_process || but.s("animation") == "none" || quick) { but.set("display", false) } else { HideAnimate(but) }
                but.set("show", false)
            }
        };

        function ShowControl(but) {
            if (!but.g("show")) {
                if (but.s("animation") == "none" || o.fullscreen_process) { but.set("display", true); if (o.fullscreen_process) { but.s("animation") == "alpha" ? but.set("opacity", 1) : '' } if (but.g("action") == "volume") { if (o.hidden_volume) { HidePositionControl(but) } } } else { ShowAnimate(but) }
                if (but.s("action") == "volume") { o.controls.Volume(o.muted ? 0 : v.volume) }
                if (but.s("action") == "line") { o.actions.Loading() }
                but.set("show", true)
            }
        };

        function HideAnimate(but) {
            killMotion(but.g("key"));
            var m_type = "alpha|";
            var m_to = "0|";
            var hide = 1;
            var a = but.s("animation");
            var p = but.s("position");
            if (a == "scale") {
                m_type += "scale|";
                m_to += "0|"
            }
            if (a == "position") {
                if (p.indexOf("right") > -1 && p.indexOf("controls") == -1) {
                    m_type += "x|";
                    m_to += int(o.screen_w + but.g("width")) + "|"
                }
                if (p.indexOf("left") > -1) {
                    m_type += "x|";
                    m_to += int(-but.g("width")) + "|"
                }
                if (p.indexOf("top") > -1) {
                    m_type += "alpha|y|";
                    m_to += "0|" + (-but.g("height")) + "|"
                }
                if (p.indexOf("bottom") > -1 || p.indexOf("controls") > -1 || p == "timeline") { m_type += "y|"; if (but.g("action") == "line" || but.g("action") == "volume") { m_to += int(o.screen_h + but.s("h") + (but.s("h") < 20 ? 20 - but.s("h") : 0)) + "|" } else { m_to += int(o.screen_h + but.g("height")) + "|" } }
                if (p == "center") {
                    m_type += "scale|";
                    m_to += "0|"
                }
            }
            var m = new Motion({ "mc": but, "me": but.g("key"), "type": m_type.substr(0, m_type.length - 1), "to": m_to.substr(0, m_to.length - 1), "hide": hide })
        };

        function ShowAnimate(but) {
            killMotion(but.g("key"));
            var m_type = "";
            var m_to = "";
            var a = but.s("animation");
            var p = but.s("position");
            if (but.g("opacity") != 1) {
                m_type = "alpha|";
                m_to = (but.g("key") == 'bg' ? v.toolbar.a : "1") + "|"
            }
            if (a == "scale") {
                if (but.g("scaleX") != but.s("scale")) {
                    but.set("scale", 0);
                    m_type += "scale|";
                    m_to += but.s("scale") + "|"
                }
            }
            if (a == "position") {
                if (p == "center") {
                    if (but.g("scaleX") != but.s("scale")) {
                        m_type += "scale|";
                        m_to += but.s("scale") + "|"
                    }
                } else {
                    if (p.indexOf("controls") > -1) {
                        if (but.g("y") != but.g("y0")) {
                            m_type += "y|";
                            m_to += but.g("y0") + "|"
                        }
                    } else {
                        m_type += "x|y|";
                        m_to += but.g("x0") + "|" + but.g("y0") + "|"
                    }
                }
            }
            if (m_type != "" && m_to != "") { var m = new Motion({ mc: but, me: but.g("key"), type: m_type.substr(0, m_type.length - 1), to: m_to.substr(0, m_to.length - 1), show: 1 }) } else { but.set("display", true) }
        };
        this.Mouse = function(key, type, quick) {
            var resize = false;
            var stop = false;
            var but = b[key];
            var action = but.g("action");
            if (type == "over") {
                if (o.hidden_volume) {
                    if (action == "volume" || action == "mute" || action == "unmute") {
                        o.hidden_volume_over = true;
                        o.hidden_volume_over_process = true;
                        resize = true;
                        ShowOrHide()
                    }
                }
                if (v.settings.showovercontrol == 1 && (action == "settings" || but.s("linkurl").indexOf("setting") == 0)) { clearTimeout(o.settingsovertimer);!settings.g("show") ? settings.show() : '' }
            }
            if (type == "out") {
                if (o.hidden_volume) {
                    if (action == "volume" || action == "mute" || action == "unmute") {
                        o.hidden_volume_over = false;
                        o.hidden_volume_over_process = true;
                        setTimeout(function() {
                            if (!o.hidden_volume_over) {
                                o.hidden_volume_over_process = false;
                                for (var x in b) {
                                    if (b.hasOwnProperty(x)) {
                                        if (b[x].g("action") == "volume") {
                                            HideControl(b[x]);
                                            Resize()
                                        }
                                    }
                                }
                            }
                        }, 500)
                    }
                }
                if (v.settings.showovercontrol == 1 && (action == "settings" || but.s("linkurl").indexOf("setting") == 0)) {
                    clearTimeout(o.settingsovertimer);
                    o.settingsovertimer = setTimeout(function() { if (!o.mouseDown) { settings.g("show") ? settings.hide() : '' } }, 1000)
                }
            }
            if (resize) { setTimeout(Resize, 10) }
        };
        this.StageLeave = function() {
            if (o.volumewheel && !o.fullscreen) {
                o.actions.volumewheel(false);
                o.volumewheel = false
            }
            if (o.poster) { if (v.poster_aover > -1 && isVisible(o.poster)) { css(o.poster, { opacity: v.poster_a }) } }
            if (o.play && v.playonhover == 1) { o.actions.Pause() }
            if (v.toolbar.hideleavetimeout > 0) {
                clearTimeout(o.leavetimeout);
                o.leavetimeout = setTimeout(ShowOrHide, v.toolbar.hideleavetimeout * 1000)
            } else { ShowOrHide() }
        };
        this.StageOver = function() {
            if (o.poster) { if (v.poster_aover > -1 && isVisible(o.poster)) { css(o.poster, { opacity: v.poster_aover }) } }
            if (!o.play && v.playonhover == 1) { o.actions.Play() }
            ShowOrHide();
            ToolbarDown(false)
        };
        this.StageMove = function(stage_x, stage_y) { for (var x in b) { if (b.hasOwnProperty(x)) { if (b[x].g("action") == "line" || b[x].g("action") == "volume") { b[x].StageMove(stage_x, stage_y) } } } };
        this.StageMove2 = function() {
            if (v.toolbar.hide == 1) {
                if (v.toolbar.hidejustfull == 1 && !o.fullscreen) { return }
                if (!o.mouseHere && o.media.status() == "playing") {
                    o.mouseHere = true;
                    ShowOrHide()
                }
                if (v.toolbar.hidewithoutmoving == 1) {
                    ShowForce();
                    HideInterval()
                }
                ToolbarDown(false)
            }
        };
        this.StageMouseUp = function(stage_x, stage_y) { for (var x in b) { if (b.hasOwnProperty(x)) { if (b[x].g("action") == "line" || b[x].g("action") == "volume") { b[x].StageMouseUp(stage_x, stage_y) } } } };
        this.Played = function(time, duration) { for (var x in b) { if (b.hasOwnProperty(x)) { if (b[x].g("action") == "line") { b[x].UpdatePlay(time, duration) } if (b[x].g("action") == "time") { UpdateTime(b[x], time, duration) } if (b[x].s("rotateplaying") == 1) { b[x].Rotate() } } } };

        function ToolbarDown(x) {
            x ? SettingsClose() : '';
            if (v.toolbar.hide == 1 && v.toolbar.hidedown == 1) {
                if (!o.play && v.toolbar.hideonpause == 1) { x = true }
                if (x && !o.toolbarisdown) { css(o.toolbar, { "top": bg.h() }) }
                if (!x && o.toolbarisdown) { css(o.toolbar, { "top": 0 }) }
                o.toolbarisdown = x
            }
        }

        function ToolbarShow() {
            toolbarHidden = false;
            o.media.ToolbarShow();
            if (o.resizeonmouse) {
                o.resizeonmouse = false;
                Resize();
                setTimeout(Resize, 300)
            }
        }

        function UpdateTime(x, time, duration) {
            var y = Time(time);
            if (x.s("inversetime") == "1") { y = Time(duration - time) }
            if (x.s("showduration") == "1") { if (x.s("showboth") == "1") { y = y + (duration > 0 ? ' ' + Lang(x.s("separator")) + ' ' + Time(duration) : '') } else { time == 0 ? y = Time(duration) : '' } }
            x.UpdateText(y)
        }
        this.Loaded = function(time, duration) { for (var x in b) { if (b.hasOwnProperty(x)) { if (b[x].g("action") == "line") { b[x].UpdateLoad(time, duration) } } } };
        this.Waiting = function() {
            if (!waiting) {
                js("buffering");
                for (var x in b) {
                    if (b.hasOwnProperty(x)) {
                        if (b[x].g("action") == "buffer") {
                            b[x].Buffer();
                            waiting = true
                        }
                    }
                }
            }
        };
        this.HideElement = function(y) { for (var x in b) { if (x == y) { b[x].set("hide2") } } };
        this.StopWaiting = function(time, duration) {
            if (waiting) {
                js("buffered");
                for (var x in b) {
                    if (b.hasOwnProperty(x)) {
                        if (b[x].g("action") == "buffer") {
                            b[x].BufferStop();
                            waiting = false
                        }
                    }
                }
            }
        };
        this.volumescroll = function() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].s("linkurl") == "volume scroll") {
                        b[x].set("show2");
                        b[x].UpdateText(Lang('volume') + ' ' + (o.muted ? 0 : Math.ceil(v.volume * 100)) + '%');
                        clearTimeout(o.volumescroll);
                        o.volumescroll = setTimeout(Volumescrolled, 1000)
                    }
                }
            }
        };

        function Volumescrolled() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].s("linkurl") == "volume scroll") {
                        b[x].UpdateText('');
                        b[x].set("hide2");
                        clearTimeout(o.volumescroll)
                    }
                }
            }
        }
        this.Seek = function(time, duration) {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "line") {
                        duration > 0 ? b[x].set("click", time / duration) : '';
                        b[x].UpdatePlaySeek()
                    }
                    if (b[x].g("action") == "time") { UpdateTime(b[x], time, duration) }
                    if (b[x].g("action") == "live") {
                        b[x].set("iconopacity", 0.5);
                        b[x].set("saturate", 0)
                    }
                }
            }
        };
        this.Duration = function(time, duration) {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "duration") { b[x].UpdateText(Time(duration)) }
                    if (b[x].g("action") == "line") {
                        b[x].UpdatePlay(time, duration);
                        b[x].PlacePoints(duration)
                    }
                    if (b[x].g("action") == "time") { UpdateTime(b[x], time, duration) }
                }
            }
        };
        this.Settings = function() { settings.g("show") ? settings.hide() : settings.show() };
        this.SettingsVisible = function() { if (settings) { return settings.g("show") ? true : false } else { return false } };
        this.SettingsScale = function() { if (settings) { settings.Scale() } };
        this.SettingsClose = function() { SettingsClose() };
        this.SettingsTimer = function(x) { if (settings) { settings.UpdateTimer(x) } };

        function SettingsClose() { if (settings) { settings.g("show") ? settings.hide() : '' } };
        this.Playlist = function() { if (playlist) { if (playlist.g("show")) { playlist.hide(1) } else { playlist.show() } } };
        this.PlaylistShow = function() { if (playlist) { setTimeout(function() { playlist.show() }, 100) } };
        this.PlaylistVisible = function() { if (playlist) { return playlist.g("show") ? true : false } else { return false } };

        function PlaylistClose() { if (playlist) { playlist.g("show") ? playlist.hide(1) : '' } };
        this.PlaylistG = function(x) { return playlist ? playlist.g(x) : '' };
        this.UpdatePlaylist = function(x) { if (playlist) { playlist.updatePlaylist(x) } };
        this.PlaylistNext = function() { if (playlist) { playlist.PlaylistNext() } };
        this.PlaylistHere = function() { if (playlist) { playlist.PlaylistHere() } };
        this.PlaylistControls = function() { PlaylistControls() };

        function PlaylistControls() { for (var x in b) { if (b.hasOwnProperty(x)) { if (b[x].g("action") == "next") { css(b[x].c(), { "opacity": (!playlist.PlaylistNextExist() ? 0.5 : 1) }) } if (b[x].g("action") == "prev") { css(b[x].c(), { "opacity": (!playlist.PlaylistPrevExist() ? 0.5 : 1) }) } } } }
        this.PlaylistNextExist = function() { if (playlist) { return playlist.PlaylistNextExist() } else { return false } };
        this.PlaylistExist = function() { if (playlist) { return playlist.PlaylistExist() } else { return false } };
        this.PlaylistRewind = function() { if (playlist) { playlist.PlaylistRewind() } };
        this.PlaylistPrev = function() { if (playlist) { playlist.PlaylistPrev() } };
        this.PlaylistPlayId = function(x) { if (x && playlist) { playlist.playById(x) } };
        this.PlaylistOpenId = function(x) { if (x && playlist) { playlist.openById(x) } };
        this.PlaylistMove = function(x) {
            if (x && playlist) {
                css(playlist.co(), { "maxHeight": "none" });
                document.getElementById(x).appendChild(playlist.co());
                hide2(playlist.c())
            }
        };
        this.ShowSettingsBut = function() {};
        this.QualityChanged = function(x) {
            if (settings) {
                settings.SetQuality();
                settings.g("show") ? setTimeout(function() { settings.hide() }, 200) : ''
            }
        };
        this.QualityChangedNoHand = function(x) { if (settings) { settings.SetQuality() } };
        this.AirplayChanged = function(x) {
            if (settings) { settings.Airplay() }
            Resize();
            ShowOrHide()
        };
        this.SettingChanged = function(x) {
            if (settings) {
                settings.SetSetting(x);
                settings.g("show") ? settings.hide() : ''
            }
        };
        this.AudioTrackChangedNoHand = function(x) { if (settings) { settings.SetSetting("audiotrack") } };
        this.SubtitleChanged = function() {
            if (settings) {
                settings.SetSubtitle();
                settings.g("show") ? setTimeout(function() { settings.hide() }, 200) : ''
            }
        };
        this.SettingsN = function(num, display, val) {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "settings") { if (b[x].s("hdicon") == 1) { b[x].HdIcon() } }
                    if (b[x].g("action_settings") == "settings#" + num) {
                        b[x].set("set#visible", display);
                        if (b[x].g("type") == "text") { if (val) { b[x].UpdateText(val) } } else {
                            if (v.settings['settings' + num + 'action'] == "subtitle") { if (val == Lang("off")) { b[x].CustomSwitch(0) } else { b[x].CustomSwitch(1) } }
                            Resize()
                        }
                        ShowOrHideProcessor(b[x])
                    }
                }
            }
        };
        this.UpdateSettings = function() {
            if (settings) {
                settings.SetQuality();
                settings.SetSetting("audiotrack");
                settings.SetSetting("download")
            }
        };
        this.RenewPoints = function() { for (var x in b) { if (b.hasOwnProperty(x)) { if (b[x].g("action") == "line") { b[x].RenewPoints() } } } };
        this.resize = function() { Resize(); if (toolbarHidden) { o.resizeonmouse = true } };
        this.resizeFromText = function(x) {
            if (!toolbarHidden || x == 1) {
                Resize();
                ShowOrHide()
            } else { v.toolbar.resizeme = true }
        };
        this.refresh = function() {
            ShowOrHide();
            Resize();
            ShowOrHide();
            if (o.nativecontrols) { hide2(bg2) } else {!toolbarHidden ? show2(bg2) : '' }
        };
        this.KeyDown = function(event) {
            if (pljssglobalid == v.id && v.hotkey.on == 1) {
                var x = event.which;
                if (x == undefined) { x = event.keyCode }
                if (exist(o.vast) || exist(o.pass)) { return false }
                if (v.hotkey.space == 1 && x == 32 && (o.focus || o.mouseHere)) {
                    o.actions.Toggle();
                    event.preventDefault();
                    return false
                }
                if (v.hotkey.enter == 1 && x == 13 && (o.focus || o.mouseHere)) {
                    o.actions.Toggle();
                    event.preventDefault();
                    return false
                }!v.hotkey.vol ? v.hotkey.vol = 0.2 : '';
                !v.hotkey.scale ? v.hotkey.scale = 5 : '';
                if (v.hotkey.nums == 1 && o.focus) { if (o.media.duration() > 0) { for (var i = 48; i < 58; i++) { if (x == i) { o.actions.Seek((o.media.duration() * (x - 48) * 10) / 100, true) } } } }
                if (x == 39 && o.focus) { KeyPlusUp(v.hotkey.leftright) }
                if (x == 37 && o.focus) { KeyPlusDown(v.hotkey.leftright) }
                if (x == 38 && o.focus) { KeyPlusUp(v.hotkey.updown) }
                if (x == 40 && o.focus) { KeyPlusDown(v.hotkey.updown) }
                if (x == 187 && o.focus) { KeyPlusUp(v.hotkey.plusminus) }
                if (x == 189 && o.focus) { KeyPlusDown(v.hotkey.plusminus) }
            }
        };

        function KeyPlusUp(x) {
            if (x == "seek") { if (o.media.duration() > 0) { if (o.media.time() + parseFloat(v.hotkey.seek) < o.media.duration()) { o.actions.Seek(o.media.time() + parseFloat(v.hotkey.seek), true) } } }
            if (x == "volume") {
                o.actions.Volume(parseFloat(v.volume) + parseFloat(v.hotkey.vol));
                event.preventDefault()
            }
            if (x == "scale") {
                o.media.scale(v.hotkey.scale / 100);
                event.preventDefault()
            }
        }

        function KeyPlusDown(x) {
            if (x == "seek") { if (o.media.duration() > 0 && o.start) { o.actions.Seek((o.media.time() - v.hotkey.seek >= 0 ? o.media.time() - v.hotkey.seek : 0), true) } }
            if (x == "volume") {
                o.actions.Volume(parseFloat(v.volume) - parseFloat(v.hotkey.vol));
                event.preventDefault()
            }
            if (x == "scale") {
                o.media.scale(-v.hotkey.scale / 100);
                event.preventDefault()
            }
        };
        this.KeyUp = function(event) { if (pljssglobalid == v.id) { var x = event.which; if (x == undefined) { x = event.keyCode } if (x == 57) { if (v.log == 1) {} } if (o.fullscreen && x == 27) { o.actions.Normalscreen() } if (exist(o.vast) || exist(o.pass)) { return false } if (v.hotkey.f == 1 && x == 70 && (o.focus || o.mouseHere)) { o.fullscreen ? o.actions.Normalscreen() : o.actions.Fullscreen() } if (v.hotkey.m == 1 && x == 77 && (o.focus || o.mouseHere)) { o.muted ? o.actions.Unmute() : o.actions.Mute() } } };
        this.Remove = function() {
            clearInterval(o.toolbarInterval);
            for (var i = 0; i < butNames.length; i++) { key = butNames[i]; if (b[key]) { b[key].Remove() } }
            if (settings) { settings.Remove() }
            if (playlist) { playlist.Remove() }
            bg.Remove();
            if (bg2.parentNode == o.frame) { o.frame.removeChild(bg2) } else { o.toolbar ? o.toolbar.removeChild(bg2) : '' }
        };
        this.ShowForce = function() { ShowForce() };
        this.HideForce = function() {
            HideForce();
            ShowOrHide()
        };
        this.HideInterval = function() { HideInterval() };
        this.ToolbarHidden = function() { return toolbarHidden }
    };
    var Control = function(key) {
        var i;
        var style = [];
        var w;
        var h;
        var last_text_w = 0;
        var bg;
        var bgcontainer;
        var area;
        var angle = 0;
        var visible = true;
        var selectOpen = false;
        var scaleX = 1;
        var scaleY = 1;
        var tip;
        var tipbg;
        var tiptext;
        var tipcrn;
        var action;
        var action_settings = '';
        var x0;
        var y0;
        var on;
        var over = false;
        var touchmove = false;
        var iconangle = 0;
        var bufferInterval;
        var bufferDeg = 0;
        var rightside = 0;
        var topside = 0;
        var bottomside = 0;
        var noclick = false;
        var clicked = false;
        var hdicon;
        var settingsNumberVisible = false;
        style = UpdateObject(style, default_style.but);
        style = UpdateObject(style, v[key]);
        var actions = [style.action];
        action = actions[0];
        exist(style.action2) ? actions[1] = style.action2 : '';
        exist(style.opposite) ? actions[1] = style.opposite : '';
        exist(style.title) ? style.text = style.title : '';
        if (exist(style.linkurl)) { if (style.linkurl.indexOf("settings#") == 0) { action_settings = style.linkurl; if (style.tiptext == '') { style.tiptext = Lang(v.settings['settings' + action_settings.substr(9) + 'action']) } } }
        var tips = style.tiptext.split("///");
        var _currentIcon = 0;
        var icons = new Array();
        var icon = new Array();
        var iconsover = new Array();
        var iconspress = new Array();
        var iconreplay = 0;
        var replay;
        if (style.type == "text") {
            if (exist(style.text)) {
                icons[0] = trim(style.text);
                style.lngth = style.text.length;
                if (style.text.indexOf("/") == 0) { style.slash4time = 1 }
                if (style.text.indexOf("|") == 0) { style.line4time = 1 }
                if (style.text.indexOf("-") == 0) { style.minus4time = 1 }
                if (action == "time" || action == "duration") { if (style.text.split(":").length == 3) { style.with_hours = true } }
                if (style.inversetime == 1 && style.text.indexOf("-") == 0) { style.minus4back = 1 }
                if (style.text.indexOf("///") > 0 && action == "custom") {
                    style.texts = style.text.split("///");
                    style.text = icons[0] = style.texts[0]
                }
            }
            if (v.fonts == 1) {
                setTimeout(ResizeText, 100);
                setTimeout(ResizeText, 500);
                setTimeout(ResizeText, 1000)
            }
        } else {
            if (exist(style.icon)) {
                icons[0] = style.icon;
                if (icons[0].indexOf("///") > 0 && icons[0].indexOf("base64") == -1) { icons = style.icon.split("///") }
                if (exist(style.icon2)) { icons[1] = style.icon2 }
                if (style.iconsreplay == 1) {
                    if (exist(style.icon3)) {
                        if (style.icon3 != '') {
                            icons.push(style.icon3);
                            iconreplay = icons.length - 1
                        }
                    }
                }
            }
        }
        if (action == "custom") { if (style.link2 == 1 && exist(style.linkurl2)) { style.linkurl0 = style.linkurl } }
        var control = createElement("div");
        if (style.position == 'timeline') { o.timeline.appendChild(control) } else { if (style.position.indexOf('controls') > -1 && v.toolbar.hide == 1 && v.toolbar.hidedown == 1) { o.toolbar.appendChild(control) } else { o.frame.appendChild(control) } }
        var bgcontainer = createElement("div");
        control.appendChild(bgcontainer);
        css(control, { "position": "absolute", "left": 0, "top": 0, "opacity": 1, "fontSize": "14px", "lineHeight": "1em" });
        if (exist(style.dom)) { if (style.dom != '') { attr(control, { "id": (v.id + "_control_" + style.dom) }) } }
        if (style.rotateplaying == 1) { css(control, { "transition": "transform 0.2s linear" }) }
        if (icons.length > 0) {
            for (i = 0; i < icons.length; i++) {
                icon[i] = createElement("div");
                css(icon[i], { "position": "absolute", "top": 0, "left": 0, "pointerEvents": "none", "opacity": style.a, "transition": "opacity 0.1s linear,transform 0.1s linear" });
                if (style.type == "pic" && style.src != '') {
                    if (style.src.indexOf(".png") > -1 || style.src.indexOf(".jpg") > -1 || style.src.indexOf("base64") > -1) {
                        style.src.indexOf("//") == -1 && style.src.indexOf("base64") == -1 ? style.src = '//' + style.src : '';
                        var z = createElement("img");
                        style.loading = 1;
                        z.addEventListener("load", imageLoaded);
                        z.src = style.src;
                        icon[i].appendChild(z);
                        style.w = icon[i].offsetWidth;
                        style.h = icon[i].offsetHeight;
                        if (exist(style.dom)) { if (style.dom != '') { attr(icon[i], { "id": (v.id + "_control_" + style.dom + "_icon") }) } }
                    }
                }
                if (style.type == "text") {
                    css(icon[i], { "color": (style.color), "fontFamily": style.font, "fontSize": style.fontsize, "letter-spacing": style.letterspacing + 'px', "padding": "0 3px 0 3px", "white-space": "nowrap" });
                    if (style.click == 1) { if (style.text.indexOf("<a ") > -1 || key == "control_title") { css(icon[i], { "pointerEvents": "auto" }) } }
                    if (style.bold == 1) { css(icon[i], { "font-weight": "bold" }) }
                    icons[i] == 'live' ? icons[i] = Lang("live") : '';
                    icon[i].innerHTML = Places(icons[i]);
                    setTimeout(Marquee, 100);
                    style.w = icon[i].offsetWidth;
                    style.h = icon[i].offsetHeight;
                    if (exist(style.dom)) { if (style.dom != '') { attr(icon[i], { "id": (v.id + "_control_" + style.dom + "_text") }) } }
                }
                if (style.type == "css") { controlCSS(icons[i], style.color, icon[i]) }
                var icn = icons[i].toString();
                var isvg = icn.indexOf('<svg') > -1 || icn.indexOf('<SVG') > -1;
                if (style.type == "svg" && (icn.indexOf('<g>') > -1 || isvg)) {
                    icon[i].innerHTML = (!isvg ? "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" : '') + icn + (!isvg ? "</svg>" : '');
                    icon[i].offsetWidth > 20 ? style.w = icon[i].offsetWidth : '';
                    icon[i].offsetHeight > 20 ? style.h = icon[i].offsetHeight : '';
                    css(icon[i], { "width": style.w, "height": style.h });
                    if (style.iconscolor != -1) { IconsColor(icon, style.iconscolor) }
                    if (exist(style.dom)) { if (style.dom != '') { attr(icon[i], { "id": (v.id + "_control_" + style.dom + "_icon" + i) }) } }
                }
                control.appendChild(icon[i]);
                i > 0 ? hide(icon[i]) : ''
            }
            Background();
            if (style.linkurl == "chromecast") {
                style.chromecast = 1;
                style.hide = 1;
                o.chromecast ? icon[0].innerHTML = o.chromecast.button(style.iconscolor != -1 ? style.iconscolor : '#ffffff') : '';
                icon[0].onmouseover = onOver;
                icon[0].onmouseout = onOut;
                icon[0].onmousemove = onMove
            } else {
                if ((bg.offsetWidth * style.scale < 35 || bg.offsetHeight * style.scale < 35) && style.type != 'text') {
                    ClickArea();
                    Clickable(area)
                } else { Clickable(bg) }
            }
            if (action == "custom") {
                if (style.link == 1 && exist(style.linkurl)) {
                    if (style.linkurl.indexOf("api:") == 0) {
                        var tmp = style.linkurl.substr(4).split(",");
                        if (tmp.length == 2) {
                            var tmp2 = tmp[1].split("/");
                            if (tmp2.length == 2) {
                                tmp[0] == 'hd' ? tmp[0] = "default_quality" : '';
                                if (v[tmp[0]] == tmp2[1]) {
                                    style.a = 1;
                                    css(icon[0], { "opacity": style.a })
                                }
                            }
                        }
                    }
                }
            }
            if (action == "settings" && style.hdicon == 1) { hdicon = new PluginHdIcon(control, bg) }
            if (style.click == 0) { css(control, { "pointerEvents": "none" }) }
            if (style.loading == 1) { hide(bg) }
            if (style.tip == 1) { CreateTip() }
            if (style.position.indexOf("right") > -1) { rightside = 1 }
            if (style.position.indexOf("top") > -1) { topside = 1 }
            if (style.position.indexOf("bottom") > -1 || style.position.indexOf("control") > -1) { bottomside = 1 }
            Resize();
            var t = '';
            if (style.rotation != 0) { t += "rotate(" + style.rotation + "deg)" }
            if (style.flipx == 1) { t += " scaleX(-1)" }
            if (style.flipy == 1) { t += " scaleY(-1)" }
            if (t != '') { css(control, { "transform": t }) }
            if (action == "buffer") { BufferStop() }
            var tmp = [];
            var i;
            if (action == "playlist") { tmp = ['autoplaylist', 'openplaylistafter', 'openplaylistbefore', 'openplaylistpause', 'openplaylistroot', 'playlistrewind']; for (i = 0; i < tmp.length; i++) { if (exist(style[tmp[i]]) && !exist(v.playlist[tmp[i]])) { v.playlist[tmp[i]] = style[tmp[i]] } } }
            if (action == "title") { tmp = ['showtitleplaylist', 'addtitleplaylist', 'addtitleplaylistbr']; for (i = 0; i < tmp.length; i++) { if (exist(style[tmp[i]]) && !exist(options[tmp[i]])) { v[tmp[i]] = style[tmp[i]] } } }
            style.tipalways == 1 ? Tip() : '';
            if (action == "custom" && style.on == 0) { hide2(control) }
        }

        function ClickArea() {
            if (area) { area.parentNode.removeChild(area) }
            area = createElement("div");
            css(area, { "position": "absolute", "top": 0, "left": 0, "width": style.type == "pic" ? bg.offsetWidth : (bg.offsetWidth > 35 ? bg.offsetWidth : 35) * style.clickscalex, "height": style.type == "pic" ? bg.offsetHeight : (bg.offsetHeight > 35 ? bg.offsetHeight : 35) * style.clickscaley });
            style = MarginPadding(style, 'clickmargin', 'clickmargin');
            if (v.toolbar.clickarea == 1 || style.clickarea == 1) { css(area, { "background-color": "#ff0000", "opacity": 0.5 }) }
            control.appendChild(area)
        }

        function Clickable(x) {
            if (action.indexOf("time") == 0 && actions.length == 1) { style.click = 0 }
            if (action == "custom" && style.link == 0) { style.click = 0 }
            if (style.click == 1) {
                if (style.hand == 1) { css(x, { "cursor": "pointer" }) }
                css(x, { "pointerEvents": "auto" });
                if (o.system.mobile) {
                    x.addEventListener("touchmove", function(event) {
                        event.stopPropagation();
                        touchmove = true
                    });
                    if (action == "fullscreen") {
                        x.addEventListener("click", function(event) {
                            event.stopPropagation();
                            onClick(event)
                        });
                        x.addEventListener("touchend", function(event) {
                            event.stopPropagation();
                            touchmove = false
                        })
                    } else {
                        x.addEventListener("touchend", function(event) {
                            event.stopPropagation();
                            if (!touchmove) { onClick(event) }
                            touchmove = false
                        })
                    }
                } else { x.onclick = onClick }
            } else { css(x, { "cursor": "default" }) }
            if (!o.system.mobile) {
                x.onmouseover = onOver;
                x.onmouseout = onOut
            }
            if (style.hidden == 1 || style.tip == 1) { x.onmousemove = onMove }
        }

        function Background() {
            if (bg) { bg.parentNode.removeChild(bg) }
            bg = createElement("div");
            css(bg, { "position": "absolute", "top": 0, "left": 0 });
            if (exist(style.dom)) { if (style.dom != '') { attr(bg, { "id": (v.id + "_control_" + style.dom + "_bg") }) } }
            w = style.w;
            h = style.h;
            style = MarginPadding(style, 'margin', 'margin');
            style = MarginPadding(style, 'marginproc', 'marginproc');
            if (style.type == "text") {
                w = icon[_currentIcon].offsetWidth;
                h = icon[_currentIcon].offsetHeight
            }
            style = MarginPadding(style, 'bgpadding', 'bgpadding');
            style = MarginPadding(style, 'iconmargin', 'iconmargin');
            if (o.system.safari) {
                style.iconmarginleft /= style.scale;
                style.iconmarginright /= style.scale;
                style.iconmargintop /= style.scale;
                style.iconmarginbottom /= style.scale
            }
            if (exist(style.dom) && exist(v.custom) && style.action == "custom") { if (style.dom != '' && typeof(v.custom) == 'object') { for (var i = 0; i < Object.keys(v.custom).length; i++) { if (v.custom[i][style.dom]) { if (v.custom[i][style.dom] == "off") { style.on = 0 } else { var tmp = v.custom[i][style.dom].split(":"); if (tmp[0] == "margin-left") { if (tmp[1].indexOf("%") > 0) { style.marginprocleft = parseInt(tmp[1]) } else { style.marginleft = parseInt(tmp[1]) } } } } } } }
            style.h = h;
            style.w = w;
            if (style.bg == 1) {
                h = h + style.bgpaddingtop + style.bgpaddingbottom;
                w = w + style.bgpaddingleft + style.bgpaddingright;
                style.h = h;
                style.w = w;
                if (style.type == "text") { style.bgh = icon[0].offsetHeight }
            } else { style.bga = 0 }
            css(bg, { "width": (style.bgstretch == 1 ? 5000 : w), "height": h, "borderRadius": (style.bgo * h) / 2, "background": style.bgcolor, "opacity": style.bga, "transition": "opacity .1s linear, background .1s linear, transform .1s linear" });
            if (style.type == "pic") { css(bg, { "width": w, "height": h, "borderRadius": (style.bgo * h / style.scale) / 2, }) }
            if (style.bgborder == 1) { css(bg, { "border": "1px solid " + style.bgbordercolor }) }
            bgcontainer.appendChild(bg)
        }

        function Resize() {
            css(bg, { "top": (-bg.offsetHeight / 2), "left": (-bg.offsetWidth / 2) });
            if (area) {
                var x = style.type == "pic" ? bg.offsetWidth : (bg.offsetWidth > 35 ? bg.offsetWidth : 35);
                var y = style.type == "pic" ? bg.offsetHeight : (bg.offsetHeight > 35 ? bg.offsetHeight : 35);
                css(area, { "top": (-y / 2) + style.clickmargintop - style.clickmarginbottom, "left": (-x / 2) + style.clickmarginleft - style.clickmarginright })
            }
            for (i = 0; i < icons.length; i++) { if (style.type == "svg") { css(icon[i], { "top": -Math.round(parseInt(icon[i].style.height)) / 2, "left": -parseInt(icon[i].style.width) / 2 }) } else { css(icon[i], { "top": -Math.round(icon[i].offsetHeight) / 2, "left": -icon[i].offsetWidth / 2 }) } if (bg) { css(icon[i], { "top": (int(icon[i].style.top) + style.bgpaddingtop / 2 - style.bgpaddingbottom / 2 + style.iconmargintop / 2 + style.iconmarginbottom / 2), "left": (int(icon[i].style.left) + style.bgpaddingleft / 2 - style.bgpaddingright / 2 + style.iconmarginleft / 2 + style.iconmarginright / 2) }) } }
        }

        function onOver() {
            var i;
            over = true;
            if (style.iconsover == 1) {
                if (on && exist(style.icon2)) { i = 1 } else { i = 0 }
                if (replay && iconsover.length > 2) { i = 2 }
                if (iconsover[i]) {
                    hideAllIcons();
                    show(icon[iconsover[i]])
                }
            }
            if (style.bg == 1) { if (style.bgaover != -1) { css(bg, { "opacity": style.bgaover }) } if (style.bgcolorover != -1) { css(bg, { "background": style.bgcolorover }) } }
            if (style.aover > -1 && !selectOpen) { for (i = 0; i < icons.length; i++) { if (icon[i].style.visibility != "hidden") { css(icon[i], { "opacity": style.aover }) } } }
            if (style.iconscolorover != -1) { IconsColor(icon, style.iconscolorover) }
            if (style.rotateonhover == 1) {
                iconangle = iconangle + 45;
                css(icon[0], { "transform": "rotate(" + iconangle + "deg)" })
            }
            if (style.scaleover > style.scale && style.scaleover > -1) { scale(style.scaleover) }
            if (action == "settings" && o.controls.SettingsVisible()) {} else {
                if (style.tip == 1 && style.tipalways != 1) {
                    show(tip);
                    css(tip, { "opacity": 1 })
                }
            }
            if (action == "mute") {
                o.actions.volumewheel(true);
                o.volumewheel = true
            }
            o.controlover = true;
            o.controls.Mouse(key, "over")
        }

        function onOut() {
            over = false;
            var i;
            if (style.iconsover == 1) {
                if (on && exist(style.icon2)) { i = 1 } else { i = 0 }
                if (replay && iconsover.length > 2) { i = 2 }
                hideAllIcons();
                show(icon[i])
            }
            if (style.bg == 1) { if (style.bgaover != -1) { css(bg, { "opacity": style.bga }) } if (style.bgcolorover != -1) { css(bg, { "background": style.bgcolor }) } }
            if (style.aover > -1) { for (i = 0; i < icons.length; i++) { if (icon[i].style.visibility != "hidden") { css(icon[i], { "opacity": style.a }) } } }
            if (style.scaleover > -1) { scale(style.scale) }
            if (style.iconscolorover != -1) { IconsColor(icon, (style.iconscolor == -1 ? '#ffffff' : style.iconscolor)) }
            if (action == "mute" && !o.fullscreen) {
                o.actions.volumewheel(false);
                o.volumewheel = false
            }
            if (style.tip == 1 && style.tipalways != 1) {
                hide(tip);
                css(tip, { "opacity": 0 })
            }
            o.controlover = false;
            o.controls ? o.controls.Mouse(key, "out") : ''
        }

        function onClick(event) {
            event.cancelBubble = true;
            if (!noclick) {
                o.controls.ControlClick(key);
                if (action == "custom") { CustomToogle() }
                if (style.tip == 1 && style.tipalways != 1) {
                    hide(tip);
                    css(tip, { "opacity": 0 })
                }
                if (style.rotateonclick == 1) {
                    iconangle = iconangle + 45;
                    css(icon[0], { "transform": "rotate(" + iconangle + "deg)" })
                }
                clicked = true;
                if (style.hideafterclick == 1 || (key == "control_start" && style.hide == 1 && style.hideonplay == 1)) { o.controls.refresh() }
            }
        }

        function CustomToogle() {
            if (icons) {
                if (icons.length > 1) {
                    if (on == true) {
                        show(icon[0]);
                        hide(icon[1])
                    } else {
                        show(icon[1]);
                        hide(icon[0])
                    }
                }
                if (style.tip == 1 && tips.length > 1) {
                    tiptext.innerHTML = (on == true ? tips[0] : tips[1]);
                    Tip()
                }
            }
            if (exist(style.linkurl0)) { if (on == true) { style.linkurl = style.linkurl0 } else { style.linkurl = style.linkurl2 } }
            if (exist(style.texts)) { if (style.texts.length > 1) { if (on == true) { UpdateText(style.texts[0]) } else { UpdateText(style.texts[1]) } } }
            on = on != true;
            if (style.bg == 1 && exist(style.bgcolorlink2)) {
                if (style.bgcolorlink2 != -1) {
                    if (on) {
                        style.bgcolorlink0 = style.bgcolor;
                        style.bgcolor = style.bgcolorlink2
                    } else { style.bgcolor = style.bgcolorlink0 }
                    Background();
                    Clickable(bg);
                    Resize();
                    if (style.type == "text") { ResizeText() } else { scale(style.scale) }
                }
            }
        }

        function ReplayIcon(event) {
            event.cancelBubble = true;
            o.controls.ControlClick(key)
        }

        function hideAllIcons() {
            for (var i = 0; i < icons.length; i++) {
                if (icon[i].style.visibility != "hidden") {
                    css(icon[i], { "opacity": style.a });
                    hide(icon[i])
                }
            }
        }

        function Marquee(text) {
            // console.log(icon);
            //if(icon[0] != null){
            if (icon[0].offsetWidth > o.screen_w) {
                if (style.marquee == 1) {
                    if (!text) { text = icon[0].innerHTML }
                    icon[0].innerHTML = '<marquee>' + text + '</marquee>'
                } else { css(icon[0], { "white-space": "normal" }) }
                css(icon[0], { "width": o.screen_w - style.marginleft - style.marginright - style.bgpaddingleft - style.bgpaddingright })
            }
            //}
        }

        function imageLoaded() {
            style.loading = 0;
            hide(bg);
            if (icon[0]) {
                style.w = icon[0].offsetWidth * style.scale;
                style.h = icon[0].offsetHeight * style.scale;
                if (style.picheight > 0) {
                    style.h = style.picheight * style.scale;
                    css(icon[0], { height: style.picheight })
                }
                scale(style.scale)
            }
            style.loaded = 0;
            Background();
            ClickArea();
            Clickable(area);
            show(bg);
            Resize();
            o.controls.resize();
            if (!isVisible(control)) { hide2(control) }
        }

        function CancelBubble(event) { event.cancelBubble = true }

        function onMove() { Tip() }

        function scale(x) {
            if (x > 0) {
                if (o.system.safari && style.tipalways != 1) { css(bg, { "zoom": x + "" }) } else { css(bg, { "transform": "scale(" + x + ")" }) }
                for (i = 0; i < icons.length; i++) { if (o.system.safari && style.tipalways != 1) { css(icon[i], { "zoom": x + "" }) } else { css(icon[i], { "transform": "scale(" + x + ")" }) } }
                scaleX = x;
                scaleY = x
            }
        }

        function CreateTip() {
            tip = createElement("div");
            css(tip, { 'position': 'absolute', 'left': 0, 'top': 0, 'height': 'auto', "opacity": 0, "transition": "opacity 0.1s linear" });
            tipbg = createElement("div");
            style = MarginPadding(style, 'tippadding', 'tippadding');
            style = MarginPadding(style, 'tipmargin', 'tipmargin');
            css(tipbg, { 'position': 'absolute', 'left': 0, 'top': 0, 'width': '100%', 'height': 30, 'background-color': style.tipbgcolor, 'opacity': style.tipbga, 'border-radius': style.tipbgrounding });
            tiptext = createElement("div");
            css(tiptext, { 'position': 'absolute', 'left': style.tippaddingright, 'top': style.tippaddingtop, 'color': style.tipcolor, 'font-family': style.tipfont, 'font-size': style.tipfontsize, "letter-spacing": style.tipletterspacing + 'px', 'opacity': style.tipa, "line-height": "1", 'white-space': 'nowrap' });
            if (style.tippointer == 1) {
                tipcrn = createElement("div");
                tipcrn.innerHTML = '<svg width="8px" height="6px" viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon id="Rectangle" stroke="none" fill="#' + style.tipbgcolor.replace("#", "") + '" fill-rule="evenodd" points="0 0 8 0 4 6"></polygon></svg>'
            }
            if (style.tipalways == 1) {
                css(tip, { "opacity": 1 });
                Clickable(tip)
            } else { css(tip, { "pointerEvents": "none" }) }
            control.appendChild(tip);
            tiptext.innerHTML = style.tiptext == '' ? Lang(action) : tips[0];
            tip.appendChild(tipbg);
            tip.appendChild(tiptext);
            if (style.tippointer == 1) {
                tip.appendChild(tipcrn);
                var btm = o.doctype ? '-8px' : '-6px';
                var ps = style.tippointeralign;
                if (!exist(ps)) { ps = '' }
                var tp = ps.indexOf("top") > -1;
                if (tp) { css(tipcrn, { "transform": "rotate(-180deg)" }) }
                css(tipcrn, { 'position': 'absolute', 'right': (ps.indexOf("right") > -1 ? 10 * style.scale : 'auto'), 'left': (ps.indexOf("left") > -1 ? 10 * style.scale : (ps == '' || ps == 'top' ? '50%' : 'auto')), 'margin-left': (ps == '' || ps == 'top' ? '-4px' : 0), 'bottom': (tp ? 'auto' : btm), 'top': (tp ? btm : 'auto'), 'opacity': style.tipbga })
            }
            Tip()
        }

        function Tip() {
            if (style.tip == 1) {
                css(tip, { "top": (bottomside == 1 ? -h - tip.offsetHeight + 3 : -tip.offsetHeight / 2) + style.tipmargintop - style.tipmarginbottom, "left": (rightside == 1 ? -tiptext.offsetWidth : (bottomside == 1 ? -w / 2 : +tiptext.offsetWidth)) - (bottomside == 1 ? 0 : tiptext.offsetWidth / 2 + 5) + style.tipmarginleft - style.tipmarginright, "height": style.tippaddingtop + style.tipfontsize + style.tippaddingbottom, "width": style.tippaddingleft + tiptext.offsetWidth + style.tippaddingright });
                css(tipbg, { 'height': tip.offsetHeight });
                tip.style.zIndex = "1000"
            }
        }
        this.c = function() { return control };
        this.s = function(x) { return style[x] };
        this.ss = function(x, x2) { return exist(style[x]) ? style[x][x2] : false };
        this.g = function(x) {
            switch (x) {
                case "width":
                    return w;
                    break;
                case "height":
                    return h;
                    break;
                case "x":
                    return int(control.style.left);
                    break;
                case "y":
                    return int(control.style.top);
                    break;
                case "opacity":
                    return control.style.opacity ? control.style.opacity : 1;
                    break;
                case "show":
                    return visible;
                    break;
                case "scaleX":
                    return scaleX;
                    break;
                case "scaleY":
                    return scaleY;
                    break;
                case "action":
                    return action;
                    break;
                case "action_settings":
                    return action_settings;
                    break;
                case "clicked":
                    return clicked;
                    break;
                case "type":
                    return style.type;
                    break;
                case "length":
                    return style.lngth ? style.lngth : 0;
                    break;
                case "key":
                    return key;
                    break;
                case "x0":
                    return x0;
                    break;
                case "y0":
                    return y0;
                    break;
                case "over":
                    return over;
                    break;
                case "settings#":
                    return action_settings.indexOf("settings#") == 0;
                    break;
                case "set#visible":
                    return settingsNumberVisible;
                    break;
                default:
                    return false
            }
        };
        this.set = function(k, x) {
            switch (k) {
                case "show":
                    over ? onOut() : '';
                    visible = x;
                    break;
                case "display":
                    DisplayControl(x);
                    break;
                case "show2":
                    show2(control);
                    break;
                case "hide2":
                    hide2(control);
                    break;
                case "scale":
                    scale(x);
                    break;
                case "scaleX":
                    css(control, { "transform": "scaleX(" + x + ")" });
                    scaleX = x;
                    break;
                case "scaleY":
                    css(control, { "transform": "scaleY(" + x + ")" });
                    scaleY = x;
                    break;
                case "opacity":
                    css(control, { "opacity": x });
                    break;
                case "iconopacity":
                    css(icon[0], { "opacity": x });
                    break;
                case "saturate":
                    css(icon[0], { "filter": "saturate(" + x + ")" });
                    break;
                case "left":
                    css(control, { "left": x });
                    break;
                case "top":
                    css(control, { "top": x });
                    break;
                case "width":
                    css(control, { "width": x });
                    break;
                case "height":
                    css(control, { "height": x });
                    break;
                case "over_final":
                    style.over_final = x;
                    break;
                case "rightside":
                    rightside = x;
                    break;
                case "set#visible":
                    settingsNumberVisible = x;
                    break;
                case "x":
                    css(control, { "left": x });
                    break;
                case "y":
                    css(control, { "top": x });
                    break;
                case "animation":
                    style.animation = x;
                    break;
                case "x0":
                    x0 = x;
                    break;
                case "y0":
                    y0 = x;
                    break;
                default:
                    return false
            }
        };

        function DisplayControl(x) {
            if (x && o.system.mobile) {
                noclick = true;
                setTimeout(noClickTimeout, 300)
            }
            if (!x) {
                if (style.iconsreplay == 1 && replay) {
                    hide(icon[iconreplay]);
                    show(icon[0]);
                    replay = false
                }
            }
            if (style.loading == 1) { x ? show(control) : hide(control) } else {
                if (key == "control_time" || key == "control_duration") { x ? show(control) : hide(control) } else { css(control, { "display": (x ? "block" : "none") }) }
                visible = x;
                x ? show(control) : ''
            }
        }

        function noClickTimeout() { noclick = false }
        this.UpdateText = function(text) {
            UpdateText(text);
            style.text33 = text
        };
        this.Rotate = function() {
            css(control, { "transform": "rotate(" + angle + "deg)" });
            angle += 20
        };
        this.RenewFromTitle = function(x) { if (style.text.indexOf("{title") > -1) { UpdateText(style.text) } };
        this.CustomToogle = function() { CustomToogle() };

        function UpdateText(text) {
            if (style.type == "text") {
                if (exist(text)) {
                    if (style.with_hours) { if (text.length == 4) { text = '00:0' + text } if (text.length == 5) { text = '00:' + text } }
                    style.lngth = text.length
                }
                text = (style.line4time == 1 ? '| ' : '') + (style.slash4time == 1 ? '/ ' : '') + (style.minus4back == 1 ? '-' : (style.minus4time == 1 ? '- ' : '')) + text;
                var prevorius_default_w = icon[0].offsetWidth + (style.bg == 1 ? style.bgpaddingtop + style.bgpaddingbottom : 0);
                var prevorius_default_h = icon[0].offsetHeight + (style.bg == 1 ? style.bgpaddingtop + style.bgpaddingbottom : 0);
                icon[0].innerHTML = (action == "custom" ? Places(text) : text);
                if (style.triangle == 1) { icon[0].innerHTML += '<span style="display:inline-block;width:10px"></span><span style="border-top: 3px solid #fff;border-left: 3px solid transparent;border-right: 3px solid transparent;position: absolute;right:3px;top: 50%;margin-top: -1px;"></span>' }
                if (action == "title") {
                    css(icon[0], { "width": "auto", "white-space": "nowrap" });
                    console.log(text);
                    Marquee(text);
                }
                style.w = icon[0].offsetWidth + (style.bg == 1 ? style.bgpaddingtop + style.bgpaddingbottom : 0);
                style.h = icon[0].offsetHeight + (style.bg == 1 ? style.bgpaddingtop + style.bgpaddingbottom : 0);
                if (prevorius_default_w != style.w || prevorius_default_h != style.h || (style.w > 0 && last_text_w == 0)) { ResizeText() }
                if (icon[0].offsetWidth > 0) { last_text_w = style.w } else { if (text != '') { setTimeout(ResizeText, 100) } }
            }
        }
        this.ResizeText = function() { ResizeText() };

        function ResizeText() {
            if (style.type == "text") {
                if (icon[0]) {
                    if (icon[0].offsetWidth > 0) {
                        w = style.w = icon[0].offsetWidth;
                        h = style.h = icon[0].offsetHeight;
                        Background();
                        Clickable(bg);
                        Resize();
                        o.controls.resizeFromText()
                    }
                }
            }
        }
        this.UpdateVolume = function(x) {
            if (style.displayvolume == 1 && !o.system.mobile) {
                var l1 = document.getElementById('pjs_volume_element1');
                var l2 = document.getElementById('pjs_volume_element2');
                var l3 = document.getElementById('pjs_volume_element3');
                if (l1) {
                    if (x <= 0.2) {
                        l3 ? hide(l3) : '';
                        l2 ? hide(l2) : '';
                        l1 ? hide(l1) : ''
                    }
                    if (x > 0.2 && x <= 0.5) {
                        l3 ? hide(l3) : '';
                        l2 ? hide(l2) : ''
                    }
                    if (x > 0.2) { l1 ? show(l1) : '' }
                    if (x > 0.5) { l2 ? show(l2) : '' }
                    if (x > 0.5 && x <= 0.8) { l3 ? hide(l3) : '' }
                    if (x > 0.8) { l3 ? show(l3) : '' }
                }
            }
        };
        this.On = function() {
            if (!on) {
                if (icons) {
                    if (icons.length > 1 && actions.length > 1) {
                        hide(icon[0]);
                        show(icon[1])
                    }
                }
                if (actions.length > 1) {
                    action = actions[1];
                    if (style.tip == 1) {
                        tiptext.innerHTML = style.tiptext == '' ? Lang(actions[1]) : (tips.length > 1 ? tips[1] : tips[0]);
                        Tip()
                    }
                }
                if (style.iconsreplay == 1 && replay) {
                    hide(icon[iconreplay]);
                    replay = false
                }
                on = true
            }
        };
        this.CustomSwitch = function(x) {
            if (x == 1) { style.a = 1 } else { style.a = 0.5 }
            css(icon[0], { "opacity": style.a })
        };
        this.Off = function() {
            if (on) {
                if (icons) {
                    if (icons.length > 1 && actions.length > 1) {
                        show(icon[0]);
                        hide(icon[1])
                    }
                }
                action = actions[0];
                if (actions.length > 1) {
                    if (style.tip == 1) {
                        tiptext.innerHTML = style.tiptext == '' ? Lang(actions[0]) : tips[0];
                        Tip()
                    }
                }
                on = false;
                replay = false
            }
        };
        this.ReplayIcon = function() {
            if (style.iconsreplay == 1) {
                hideAllIcons();
                show(icon[iconreplay]);
                replay = true
            }
        };
        this.Buffer = function() {
            var stop = false;
            if (style.hide == 1 && style.hidewithposter == 1) { if (isVisible(o.poster)) { stop = true } }
            if (!stop) {
                show2(control);
                var items = control.getElementsByTagName("*");
                for (var i = items.length; i--;) { css(items[i], { "animation-play-state": "running" }) }
                visible = true
            }
        };
        this.BufferStop = function() { BufferStop() };

        function BufferStop() {
            hide2(control);
            var items = control.getElementsByTagName("*");
            for (var i = items.length; i--;) { css(items[i], { "animation-play-state": "paused" }) }
            visible = false
        }
        this.Remove = function() {
            if (icons.length > 0) {
                for (i = 0; i < icons.length; i++) {
                    control.removeChild(icon[i]);
                    icon[i] = null
                }
            }
            if (bg) {
                bg.removeAttribute("onclick");
                bg.removeAttribute("onmouseover");
                bg.removeAttribute("onmouseout");
                bg.parentNode.removeChild(bg);
                bg = null
            }
            if (style.position == 'timeline') { o.timeline.removeChild(control) } else { if (control.parentNode == o.frame) { o.frame.removeChild(control) } else { if (o.toolbar) { if (control.parentNode == o.toolbar) { o.toolbar.removeChild(control) } } } }
            if (tip) { control.removeChild(tip) }
            control = null
        };
        this.HdIcon = function() { hdicon ? hdicon.toggle() : '' };

        function Places(x) {
            var z = x + '';
            if (x.indexOf('{time}') > -1 && exist(o.continue)) { x = x.replace('{time}', timeFormat(o.continue.flag().t)) }
            if (x.indexOf('{title') > -1) {
                var y = o.titlestore ? o.titlestore : (v.title ? v.title : '');
                if (x.indexOf('{title2}') > -1 && o.controls) { x = x.replace('{title2}', o.controls.PlaylistG('title2')) }
                if (o.butplstart && o.controls) { y = o.controls.PlaylistG('butplstart') }
                x = x.replace('{title}', y);
                if (o.butplstart && !o.controls) { setTimeout(UpdateText, 100, z) }
            }
            return x
        }

        function IconsColor(icon, clr) { for (var i = 0; i < icon.length; i++) { var x = ["path", "polygon", "polyline", "rect", "ellipse"]; for (var y = 0; y < x.length; y++) { var z = icon[i].querySelectorAll("svg " + x[y]); if (z.length > 0) { for (var y2 = 0; y2 < z.length; y2++) { z[y2].style.fill = clr } } } } if (style.linkurl == "chromecast") { if (o.chromecast) { o.chromecast.Color(icon[0], clr) } } }
    };
    var ControlLine = function(key, action) {
        var i;
        var style = [];
        var w;
        var h;
        var bg;
        var visible = true;
        var x0;
        var y0;
        var scaleX = 1;
        var scaleY = 1;
        var topBg = 0;
        var leftBg = 0;
        var alphas;
        var mouseDown;
        var mouseUp;
        var click;
        var handle;
        var _duration_load;
        var _duration_play;
        var _time_load;
        var _time_play;
        var tip;
        var tipbg;
        var tiptext;
        var tipcrn;
        var points = [];
        var thumb;
        var current_thumb = -1;
        var lastTouch;
        var over;
        var onup_to;
        for (i in default_style.but) { style[i] = default_style.but[i] }
        var action = v[key].action;
        var type = v[key].type;
        for (i in default_style[action]) { style[i] = default_style[action][i] }
        for (i in v[key]) { style[i] = v[key][i] }
        style.w = parseInt(style.w);
        style.h = parseInt(style.h);
        style = MarginPadding(style, 'margin', 'margin');
        style = MarginPadding(style, 'marginproc', 'marginproc');
        var control = createElement("div");
        if (v.toolbar.hidedown == 1 && v.toolbar.hide == 1) { o.toolbar.appendChild(control) } else { o.frame.appendChild(control) }
        action == "line" ? o.timeline = control : '';
        css(control, { "position": "absolute", "top": 0, "left": 0, "opacity": 1, "fontSize": "14px", "lineHeight": "1em" });
        if (style.ontop == 1) { control.style.zIndex = 5 }
        Background();
        var lines = createElement("div");
        css(lines, { "position": "absolute", "bottom": Math.round(-style.h / 2), "left": Math.round(-style.w / 2), "transition": "transform 0.2s ease-in-out" });
        if (style.roundout == 1) { css(lines, { "border-radius": style.rounding * style.h / 2, "height": style.h, "overflow": "hidden", "pointer-events": "none" }) }
        if (exist(style.dom)) { if (style.dom != '') { attr(control, { "id": (v.id + "_control_" + style.dom) }) } }
        control.appendChild(lines);
        if (action == 'line' && v.thumbs == 1) { CreateThumb() }
        if (style.tip == 1) { CreateTip() }
        var line0 = createElement("div");
        StyleLine(line0, 0.3, (style.gradient == 1 ? "linear-gradient(#" + style.gradientcolorbg + ", #" + style.colorbg + ")" : style.colorbg), style.w, style.abg);
        if (style.customdesign == 1 && exist(style.customdesignsvg)) {
            var svg0 = createElement("div");
            svg0.innerHTML = style.customdesignsvg.replace(/\#FFFFFF/g, "#" + style.colorbg);
            line0.appendChild(svg0);
            css(svg0, { "position": "absolute", "bottom": -Math.round(style.h / 2), "left": 0, "pointer-events": "none" });
            css(line0, { "overflow": "hidden", "background": "none" });
            var x = ["path", "polygon", "polyline", "rect", "ellipse"];
            for (var y = 0; y < x.length; y++) { var z = svg0.querySelectorAll("svg " + x[y]); if (z.length > 0) { for (var y2 = 0; y2 < z.length; y2++) { z[y2].style.fill = style.colorbg } } }
        }
        lines.appendChild(line0);
        var lines1 = [];
        var line1 = createElement("div");
        StyleLine(line1, style.linespeed1, (style.gradient == 1 ? "linear-gradient(#" + style.gradientcolorload + ", #" + style.colorload + ")" : style.colorload), 0, style.aload);
        lines.appendChild(line1);
        if (style.aover > 0) {
            var line2 = createElement("div");
            StyleLine(line2, style.linespeed2, style.colorover, 0, style.aover);
            lines.appendChild(line2)
        }
        var line3 = createElement("div");
        StyleLine(line3, style.linespeed3, (style.gradient == 1 ? "linear-gradient(#" + style.gradientcolor + ", #" + style.color + ")" : style.color), 0, style.a);
        if (style.customdesign == 1 && exist(style.customdesignsvg)) {
            var svg3 = createElement("div");
            svg3.innerHTML = style.customdesignsvg.replace(/\#FFFFFF/g, "#" + style.color);
            css(svg3, { "position": "absolute", "bottom": -Math.round(style.h / 2), "left": 0, "pointer-events": "none" });
            css(line3, { "overflow": "hidden", "background": "none" });
            line3.appendChild(svg3)
        }
        if (style.value == 1) {
            var line3value = createElement("div");
            style = MarginPadding(style, 'valuepadding', 'valuepadding');
            style = MarginPadding(style, 'valuemargin', 'valuemargin');
            css(line3value, { "position": "absolute", "bottom": style.h / 2, "right": 0, "pointer-events": "none", "font-size": (style.valuesize + "px"), "color": style.valuecolor, "line-height": "100%", "padding-top": style.valuepaddingtop, "padding-bottom": style.valuepaddingbottom, "padding-left": style.valuepaddingleft, "padding-right": style.valuepaddingright, "margin-top": style.valuemargintop, "margin-bottom": style.valuemarginbottom, "margin-left": style.valuemarginleft, "margin-right": style.valuemarginright, "border-radius": (style.valuerounding + "px"), "display": "none" });
            if (style.valuebg == 1) { css(line3value, { "background": "#" + style.valuebgcolor }) }
            line3.appendChild(line3value);
            var l3v_show = false;
            var l3v_left = false
        }
        o.timeline_h = style.h;
        lines.appendChild(line3);
        if (style.pointed == 1) {
            v.pointed = 1;
            var pointscontrol = createElement("div");
            css(pointscontrol, { "position": "absolute", "top": 0, "left": 0 });
            control.appendChild(pointscontrol);
            exist(v.points) ? UpdatePoints(v.points) : ''
        }
        if (style.handle == 1) {
            if (style.handleicon.toString().indexOf('<svg') > -1) {
                handle = createElement("div");
                handle.innerHTML = style.handleicon.toString();
                style = MarginPadding(style, 'handlemargin', 'handlemargin');
                css(handle, { "position": "absolute", "top": -10 + style.handlemargintop - style.handlemarginbottom, "left": -1000, "pointer-events": "none", "height": 20, "width": style.handle_width, "opacity": style.handlea, "transition": "transform 0.1s linear, opacity 0.1s linear" });
                if (style.handlehide == 1 || style.handlehideinit == 1) { css(handle, { "transform": "scale(0)" }) } else { if (style.handlescale != 1) { css(handle, { "transform": "scale(" + style.handlescale + ")" }) } }
                control.appendChild(handle);
                if (style.handlecolor != -1) { var x = ["path", "rect", "ellipse"]; for (var y = 0; y < x.length; y++) { var z = handle.querySelectorAll("svg " + x[y]); if (z.length > 0) { for (var y2 = 0; y2 < z.length; y2++) { z[y2].style.fill = "#" + style.handlecolor } } } }
                style.handlewidth = handle.offsetWidth
            } else { style.handle = 0 }
        }
        if (style.rotation != 0) { css(control, { "transform": "rotate(" + style.rotation + "deg)" }) }
        if (style.hidden == 1) {
            hide(control);
            visible = false
        }
        if (action == "volume") {
            if (style.hide == 1 && style.hideoutmute == 1) {
                o.hidden_volume = true;
                style.hidden = true
            } else { o.hidden_volume = false }
        }
        style.vertical = 0;
        if (style.rotation != 0) { style.rotation2 = Math.abs(style.rotation); if (style.rotation2 > 45 && style.rotation2 < 135) { style.vertical = 90 } if (style.rotation2 > 225 && style.rotation2 < 315) { style.vertical = 270 } }

        function StyleLine(x, y, z, _w, _a) { css(x, { "position": "absolute", "bottom": 0, "left": 0, "width": _w, "height": style.h, "background": z ? (z.indexOf("linear") > -1 ? z : '#' + z) : '', "border-radius": (style.roundout == 1 ? 1 : style.rounding * style.h / 2), "opacity": _a, "pointer-events": "none", }) }

        function Background() {
            bg = createElement("div");
            style = MarginPadding(style, 'bgpadding', 'bgpadding');
            var bgh = style.h + style.bgpaddingtop + style.bgpaddingbottom;
            var bgw = style.w + style.bgpaddingleft + style.bgpaddingright;
            if (style.bg == 1) {} else { style.bga = 0 }
            style = MarginPadding(style, 'clickmargin', 'clickmargin');
            if (v.toolbar.clickarea == 1 || style.clickarea == 1) {
                style.bgcolor = '#ff0000';
                style.bg = 1;
                style.bga = 0.5
            }
            css(bg, { "position": "absolute", "top": 0, "left": 0, "width": bgw, "height": bgh * style.clickscaley, "borderRadius": (style.bgo * bgh) / 2, "backgroundColor": style.bgcolor, "opacity": style.bga, "pointerEvents": "auto", "transition": "opacity .1s linear, background .1s linear" });
            if (style.bgborder == 1) { css(bg, { "border": "1px solid #" + style.bgbordercolor }) }
            css(bg, { "top": -style.h / 2 - style.bgpaddingtop + style.clickmargintop - style.clickmarginbottom });
            if (style.click == 1) {
                if (style.hand == 1) { css(bg, { "cursor": "pointer" }) }
                if (!o.system.mobile) {
                    bg.onclick = onClick;
                    bg.onmouseup = onUp;
                    bg.onmousedown = onDown;
                    bg.onmousemove = onMove
                }
            } else { css(bg, { "cursor": "default" }) }
            if (!o.system.mobile) {
                bg.onmouseover = onOver;
                bg.onmousemove = onMove;
                bg.onmouseout = onOut
            }
            if (o.system.mobile) {
                bg.addEventListener("touchstart", function(event) {
                    event.cancelBubble = true;
                    if (!exist(event.clientX) && event.touches.length > 0) {
                        event.clientX = event.touches[0].pageX;
                        event.clientY = event.touches[0].pageY
                    }
                    lastTouch = event;
                    onOver(event);
                    onDown(event)
                });
                bg.addEventListener("touchend", function(event) {
                    event.cancelBubble = true;
                    onOut(event);
                    onUp(lastTouch)
                });
                bg.addEventListener("click", function(event) { event.cancelBubble = true });
                bg.addEventListener("touchmove", function(event) {
                    if (!exist(event.clientX) && event.touches.length > 0) {
                        event.clientX = event.touches[0].pageX;
                        event.clientY = event.touches[0].pageY
                    }
                    lastTouch = event;
                    onMove(event)
                })
            }
            css(bg, { "left": -style.w / 2 - style.bgpaddingleft });
            css(bg, { "top": -style.h / 2 - style.bgpaddingtop + style.clickmargintop - style.clickmarginbottom });
            control.appendChild(bg)
        }

        function Resize(width) {
            if (width != w) {
                w = width;
                o.timeline_w = w;
                var delta = w / line0.offsetWidth;
                css(bg, { "width": (w + style.bgpaddingleft + style.bgpaddingright), "left": -w / 2 - style.bgpaddingleft, });
                css(lines, { "left": -w / 2 });
                css(line0, { "width": w });
                css(lines, { "width": w });
                var xx = line1.offsetWidth * delta;
                if (xx > line0.offsetWidth) { xx = line0.offsetWidth }
                css(line1, { "width": xx });
                var wp = line3.offsetWidth * delta;
                css(line3, { "width": wp });
                HandleWidth(wp, false);
                if (action == "line") { Continue() }
                if (style.pointed == 1) { PlacePoints() }
            }
        }

        function HandleWidth(x, none) {
            if (style.handle == 1) {
                if (x < style.handlewidth / 2 && style.handle_width != 20) { x = style.handlewidth / 2 }
                if (x > w - style.handlewidth / 2 && style.handle_width != 20) { x = w - style.handlewidth / 2 }
                var y = x - w / 2 - style.handlewidth / 2 + style.handlemarginleft - style.handlemarginright;
                css(handle, { "left": y })
            }
        }

        function ShowHandle() { css(handle, { "transform": "scale(" + style.handlescale + ")" }) }

        function onOver(event) {
            o.controls.Mouse(key, "over");
            if (style.bg == 1) { if (style.bgaover != -1) { var m = new Motion({ "mc": bg, "type": "alpha_div", "to": style.bgaover, "time": 0.1, "me": (key + "bg") }) } if (exist(style.bgcolorover)) { if (style.bgcolorover != -1) { css(bg, { "background-color": style.bgcolorover }) } } }
            if (exist(style.coloroverplay)) { if (style.coloroverplay != -1) { css(line3, { "background-color": style.coloroverplay }) } }
            if (style.handle == 1) { if (style.handleiconsover == 1 && exist(style.handleiconover)) { if (style.handleiconspress == 1 && mouseDown) {} else { handle.innerHTML = "<svg width='" + style.handle_width + "' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" + style.handleiconover.toString() + "</svg>" } } if (style.handlehide == 1) { if (style.handlehideinit == 1 && !o.start) {} else { ShowHandle() } } else { if (style.handleaover != -1) { var m2 = new Motion({ "mc": handle, "type": "alpha_div", "to": style.handleaover, "time": 0.1, "me": (key + "handle") }) } } }
            if (style.tip == 1 && (o.media.duration() > 0 || action == "volume")) {
                show(tip);
                css(tip, { "opacity": 1 })
            }
            if (style.expand > 0) {
                css(bg, { "transform": "scaleY(" + ((style.expand - 1) / 5 + 1) + ")" });
                css(lines, { "transform": "scaleY(" + style.expand + ")" })
            }
            if (action == "volume") {
                o.actions.volumewheel(true);
                o.volumewheel = true
            }
            o.controlover = true
        }

        function onOut() {
            if (!mouseUp) {
                if (style.aover > 0) { css(line2, { "width": 0 }) }
                if (exist(style.coloroverplay)) { if (style.coloroverplay != -1) { css(line3, { "background-color": style.color }) } }
                if (style.bg == 1) { if (style.bgaover != -1) { var m = new Motion({ "mc": bg, "type": "alpha_div", "to": style.bga, "time": 0.1, "me": (key + "bg") }) } if (exist(style.bgcolorover)) { if (style.bgcolorover != -1) { css(bg, { "background-color": style.bgcolor }) } } }
                if (style.handle == 1) { if (style.handleiconsover == 1 && exist(style.handleiconover)) { if (style.handleiconspress == 1 && mouseDown) {} else { handle.innerHTML = "<svg width='" + style.handle_width + "' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" + style.handleicon.toString() + "</svg>" } } if (style.handlehide == 1) { css(handle, { "transform": "scale(0)" }) } else { if (style.handleaover != -1) { var m2 = new Motion({ "mc": handle, "type": "alpha_div", "to": style.handlea, "time": 0.1, "me": (key + "handle") }) } } }
                if (style.expand > 0) {
                    css(bg, { "transform": "scaleY(1)" });
                    css(lines, { "transform": "scaleY(1)" })
                }
                if (action == "volume" && !o.fullscreen) {
                    o.actions.volumewheel(false);
                    o.volumewheel = false
                }
                o.controls.Mouse(key, "out")
            }
            if (style.tip == 1 && (o.media.duration() > 0 || action == "volume")) {
                hide(tip);
                css(tip, { "opacity": 0 })
            }
            if (o.thumbs_on && action == "line") {
                hide2(thumb);
                current_thumb = -1
            }
            o.controlover = false
        }

        function onClick(event) { event.cancelBubble = true }

        function CancelBubble(event) { event.cancelBubble = true }

        function onUp(event) {
            if (action == "volume") {
                if (o.hidden_volume_over) {
                    mouseUp = true;
                    clearTimeout(onup_to);
                    onup_to = setTimeout(function() {
                        mouseUp = false;
                        onOut()
                    }, 1000)
                }
            }
            EndMove();
            o.mouseDown = false;
            if (style.handle == 1) { if (style.handleiconspress == 1 && exist(style.handleiconpress)) { handle.innerHTML = "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" + style.handleicon.toString() + "</svg>" } }
            CalculateClick(event.clientX, event.clientY);
            o.controls.ControlClick(key);
            o.controls.StageMouseUp(event.clientX, event.clientY);
            event.cancelBubble = true
        }

        function onDown(event) {
            mouseDown = true;
            if (style.handle == 1) { if (style.handleiconspress == 1 && exist(style.handleiconpress)) { handle.innerHTML = "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" + style.handleiconpress.toString() + "</svg>" } }
            topBg = findTop(bg);
            leftBg = findLeft(bg);
            CalculateClick(event.clientX, event.clientY);
            UpdatePlay(click, 1, "no")
        }

        function CalculateClick(event_x, event_y) {
            var x;
            var xOffset = document.documentElement.scrollLeft;
            var yOffset = document.documentElement.scrollTop;
            event_y = event_y + yOffset;
            event_x = event_x + xOffset;
            if (style.vertical > 0) {
                x = event_y - topBg - style.bgpaddingright;
                click = x / w;
                if (style.vertical == 270) {
                    x = event_y - topBg - style.bgpaddingleft;
                    click = x / w;
                    click = (click - 1) * -1
                }
            } else {
                x = event_x - leftBg - style.bgpaddingleft;
                click = x / w;
                if (style.rotation > 134 && style.rotation < 235) {
                    x = event_x - leftBg - style.bgpaddingright;
                    click = x / w;
                    click = (click - 1) * -1
                }
            }
            click > 1 ? click = 1 : '';
            click < 0 ? click = 0 : ''
        }
        this.PlacePoints = function() { PlacePoints() };
        this.RenewPoints = function() { UpdatePoints() };

        function UpdatePoints() {
            if (points) { for (var i = 0; i < points.length; i++) { pointscontrol.removeChild(points[i]) } }
            points = [];
            if (v.points) {
                for (var i = 0; i < Object.keys(v.points).length; i++) {
                    if (v.points[i].time) {
                        points[i] = createElement("div");
                        css(points[i], { 'position': 'absolute', 'left': 0, 'top': -style.h / 2, 'width': (exist(v.points[i].width) ? v.points[i].width : style.pointw), 'height': style.h, 'opacity': (exist(v.points[i].opacity) ? v.points[i].opacity : style.pointa), 'pointer-events': 'none', 'display': 'none', 'background-color': (exist(v.points[i].color) ? v.points[i].color : style.pointcolor) });
                        points[i].time = v.points[i].time;
                        pointscontrol.appendChild(points[i])
                    }
                }
                PlacePoints()
            }
        }

        function PlacePoints() { var x = o.media.duration(); for (var i = 0; i < points.length; i++) { if (x > 0) { css(points[i], { 'left': w * (points[i].time / x) - w / 2, 'display': 'block' }) } else { hide2(points[i]) } } }

        function EndMove() { mouseDown = false }

        function onMove(event) {
            if (style.aover > 0) { if (o.start || action != 'line') { css(line2, { "width": event.clientX - leftBg }) } }
            if (style.tip == 1 && (o.media.duration() > 0 || action == "volume")) {
                !isVisible(tip) ? show(tip) : '';
                topBg = findTop(bg);
                leftBg = findLeft(bg);
                CalculateClick(event.clientX, event.clientY);
                if (action == "line") { if (v.hlsdvrtime == 1) { if (o.media.isLive() && o.media.currentFile().indexOf("?DVR") > 0) { tiptext.innerHTML = '- ' + timeFormat((1 - click) * o.media.duration(true)) } else { tiptext.innerHTML = timeFormat(click * o.media.duration()) } } else { tiptext.innerHTML = timeFormat(click * o.media.duration()) } }
                if (action == "volume") { tiptext.innerHTML = Math.round(click * 100) }
                css(tip, { "top": (-tiptext.offsetHeight * 2 - style.linetipmarginbottom * 1) - (style.toptip == 1 ? (style.h / 2) * (style.expand > 0 ? style.expand : 1) : 0), "left": (-w / 2 + (event.clientX + document.documentElement.scrollLeft - leftBg) - tip.offsetWidth / 2), "height": style.tippaddingtop + style.tipfontsize + style.tippaddingbottom, "width": style.tippaddingleft + tiptext.offsetWidth + style.tippaddingright, });
                css(tipbg, { 'height': tip.offsetHeight });
                tip.style.zIndex = "1000"
            }
            if (o.thumbs_on && action == "line") {
                if (o.media.duration() > 0) {
                    if (style.tip == 0) {
                        topBg = findTop(bg);
                        leftBg = findLeft(bg);
                        CalculateClick(event.clientX, event.clientY)
                    }
                    var left = (-w / 2 + (event.clientX - leftBg) - v.thumb_width / 2);
                    left > w / 2 - v.thumb_width ? left = w / 2 - v.thumb_width : '';
                    css(thumb, { "top": (-v.thumb_height - 5 - v.thumb_border), "left": (left < -w / 2 ? -w / 2 : left) });
                    ThumbsTime(click * o.media.duration())
                }
            }
        }
        this.c = function() { return control };
        this.s = function(key) { return style[key] };
        this.ss = function(x, x2) { return style[x][x2] };
        this.g = function(x) {
            switch (x) {
                case "width":
                    return w;
                    break;
                case "offsetwidth":
                    return line0.offsetWidth;
                    break;
                case "height":
                    return style.h;
                    break;
                case "x":
                    return int(control.style.left);
                    break;
                case "y":
                    return int(control.style.top);
                    break;
                case "opacity":
                    return control.style.opacity ? control.style.opacity : 1;
                    break;
                case "show":
                    return visible;
                    break;
                case "scaleX":
                    return scaleX;
                    break;
                case "scaleY":
                    return scaleY;
                    break;
                case "action":
                    return action;
                    break;
                case "key":
                    return key;
                    break;
                case "x0":
                    return x0;
                    break;
                case "y0":
                    return y0;
                    break;
                case "click":
                    return click;
                    break;
                default:
                    return false
            }
        };
        this.set = function(key, x) {
            switch (key) {
                case "show":
                    visible = x;
                    break;
                case "mouseDown":
                    mouseDown = x;
                    break;
                case "display":
                    action == "line" || style.hide == 1 ? css(control, { "visibility": (x ? "visible" : "hidden") }) : css(control, { "display": (x ? "block" : "none") });
                    visible = x;
                    break;
                case "scaleX":
                    css(control, { "transform": "scaleX(" + x + ")" });
                    scaleX = x;
                    break;
                case "scaleY":
                    css(control, { "transform": "scaleY(" + x + ")" });
                    scaleY = x;
                    break;
                case "opacity":
                    css(control, { "opacity": x });
                    break;
                case "left":
                    css(control, { "left": x });
                    break;
                case "top":
                    css(control, { "top": x });
                    break;
                case "click":
                    click = x;
                    break;
                case "hiddenwidth":
                    style.hiddenwidth = x;
                    break;
                case "width":
                    css(control, { "width": x });
                    break;
                case "height":
                    css(control, { "height": x });
                    break;
                case "over_final":
                    style.roundingver_final = x;
                    break;
                case "x":
                    css(control, { "left": x });
                    break;
                case "y":
                    css(control, { "top": x });
                    break;
                case "x0":
                    x0 = x;
                    break;
                case "y0":
                    y0 = x;
                    break
            }
        };
        this.Resize = function(x) { Resize(x) };
        this.StageLeave = function(x) {};
        this.StageMove = function(stage_x, stage_y) {
            if (mouseDown) {
                if (action == "volume") {
                    CalculateClick(stage_x, stage_y);
                    o.controls.ControlClick(key);
                    o.hidden_volume_over = true
                }
                CalculateClick(stage_x, stage_y);
                UpdatePlay(click, 1, "no")
            }
        };
        this.StageMouseUp = function(stage_x, stage_y) {
            if (mouseDown) {
                EndMove();
                mouseDown = false;
                CalculateClick(stage_x, stage_y);
                o.controls.ControlClick(key);
                UpdatePlay(click, 1, "no")
            }
        };

        function UpdatePlay(time, duration, animate) {
            time < 0 ? time = 0 : '';
            if (style.handle == 1 && style.handlehideinit == 1 && style.handlehide != 1) {
                if (!style.handleinit && time > 0) {
                    ShowHandle();
                    style.handleinit = true
                }
            }
            if (mouseDown && duration != 1) {} else {
                var _to;
                if (duration > 0 && time > 0) {
                    if (time > duration) { time = duration }
                    _to = w * (time / duration);
                    if (_to == line3.offsetWidth) { _to = -1 }
                } else { _to = 0 }
                if (_to >= 0) {
                    css(line3, { "width": _to });
                    HandleWidth(_to, true)
                }
                if (exist(line3value)) {
                    if (duration < 2 && action == "line") {
                        if (l3v_show) {
                            hide2(line3value);
                            l3v_show = false
                        }
                    } else {
                        if (!l3v_show) {
                            show2(line3value);
                            l3v_show = true
                        }
                        line3value.innerHTML = action == "line" ? Time(time == 0 ? duration : time) : Math.ceil(time * 100);
                        if (_to < line3value.clientWidth + style.valuemarginright + style.valuemarginleft) {
                            if (!l3v_left) {
                                css(line3value, { "left": 0, "right": "auto" });
                                l3v_left = true
                            }
                        } else {
                            if (l3v_left) {
                                css(line3value, { "right": 0, "left": "auto" });
                                l3v_left = false
                            }
                        }
                    }
                }
            }
        };
        this.UpdatePlay = function(time, duration, animate) { if (duration != _duration_play || time != _time_play) { UpdatePlay(time, duration, animate) } };
        this.UpdatePlaySeek = function() {
            click > 1 ? click = 1 : '';
            click < 0 ? click = 0 : '';
            css(line3, { "width": (click * w) })
        };
        this.UpdateLoad = function(time, duration) {
            if (duration > 0 && time > 0) {
                var _to = w * (time / duration);
                css(line1, { "width": int(_to) });
                _duration_load = duration;
                _time_load = time
            } else {
                _time_load = 0;
                css(line1, { "width": 0 })
            }
        };

        function ThumbsTime(x) {
            if (v.thumbs == 1) {
                if (o.thumbs_on) {
                    var y = -1;
                    if (exist(o.thumbs)) { if (o.thumbs.length > 0) { for (var i = o.thumbs.length - 1; i >= 0; i--) { if (x >= o.thumbs[i].t1 && x <= o.thumbs[i].t2) { y = i; break } } } }
                    if (y != -1 && current_thumb != y) {
                        if (exist(o.thumbs[y])) {
                            if (exist(o.thumbs[y].url)) {
                                var z = o.thumbs[y].url;
                                if (z.indexOf('.') > -1) {
                                    !isVisible(thumb) ? show2(thumb) : '';
                                    css(thumb, { 'background-image': 'url(' + o.thumbs[y].url + ')' });
                                    if (z.indexOf('xywh') > 0) {
                                        var xy = z.substr(z.indexOf('xywh') + 5);
                                        var xywh = xy.split(',');
                                        if (xywh.length == 4) {
                                            css(thumb, { 'background-position-y': "-" + parseInt(xywh[1]) + 'px', 'background-position-x': "-" + parseInt(xywh[0]) + 'px', 'width': parseInt(xywh[2]) + 'px', 'height': parseInt(xywh[3]) + 'px', 'background-size': 'auto' });
                                            v.thumb_width = xywh[2];
                                            v.thumb_height = xywh[3]
                                        }
                                    } else { css(thumb, { 'background-size': 'cover' }) }
                                }
                            } else { hide2(thumb) }
                        }
                    } else { y == -1 ? hide2(thumb) : '' }
                    current_thumb = y
                }
            }
        }

        function CreateThumb() {
            thumb = createElement("div");
            css(thumb, { 'position': 'absolute', 'left': 0, 'top': 0, 'width': v.thumb_width, 'height': v.thumb_height, 'overflow': 'hidden', "pointer-events": "none", "background-color": "#000", "border-radius": v.thumb_radius + 'px', "display": "none" });
            if (v.thumb_border == 1) { css(thumb, { "border": v.thumb_borderwidth + "px solid #" + v.thumb_bordercolor }) }
            if (v.thumb_shadow == 1) { css(thumb, { "box-shadow": "0px 1px 5px rgba(0,0,0,0.5)" }) }
            thumb.style.zIndex = "999";
            control.appendChild(thumb)
        }

        function CreateTip() {
            tip = createElement("div");
            css(tip, { 'position': 'absolute', 'left': 0, 'top': 0, 'height': 'auto', "pointer-events": "none", "opacity": 0, "transition": "opacity 0.1s linear" });
            tipbg = createElement("div");
            style = MarginPadding(style, 'tippadding', 'tippadding');
            css(tipbg, { 'position': 'absolute', 'left': 0, 'top': 0, 'width': '100%', 'height': 30, 'background-color': style.tipbgcolor, 'opacity': style.tipbga, 'border-radius': style.tipbgrounding });
            tiptext = createElement("div");
            css(tiptext, { 'position': 'absolute', 'left': style.tippaddingright, 'top': style.tippaddingtop, 'color': style.tipcolor, 'font-family': style.tipfont, 'font-size': style.tipfontsize, "letter-spacing": style.tipletterspacing + 'px', "line-height": "1", 'opacity': style.tipa });
            style.tippointer = style.linetippointer;
            if (style.tippointer == 1) {
                tipcrn = createElement("div");
                tipcrn.innerHTML = '<svg width="8px" height="6px" viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon id="Rectangle" stroke="none" fill="#' + style.tipbgcolor + '" fill-rule="evenodd" points="0 0 8 0 4 6"></polygon></svg>'
            }
            control.appendChild(tip);
            tip.appendChild(tipbg);
            tip.appendChild(tiptext);
            if (style.tippointer == 1) {
                tip.appendChild(tipcrn);
                css(tipcrn, { 'position': 'absolute', 'left': '50%', 'margin-left': '-4px', 'bottom': (o.doctype ? '-8px' : '-6px'), 'opacity': style.tipbga })
            }
        };

        function Continue() { if (o.continue && v.timestore == 1) { var f = o.continue.flag(); if (f.t && f.d) { UpdatePlay(f.t, f.d) } } };
        this.Remove = function() {
            control.removeChild(lines);
            if (bg) {
                bg.removeAttribute("onclick");
                bg.removeAttribute("onmouseover");
                bg.removeAttribute("onmouseout");
                bg.parentNode.removeChild(bg);
                bg = null
            }
            if (handle) { control.removeChild(handle) }
            if (control.parentNode == o.frame) { o.frame.removeChild(control) } else { if (o.toolbar) { if (control.parentNode == o.toolbar) { o.toolbar.removeChild(control) } } }
            control = null
        }
    };
    var ControlsBg = function() {
        var i;
        var style = [];
        var w;
        var h;
        var visible = true;
        var scaleX = 1;
        var scaleY = 1;
        var x0 = 0;
        var y0 = 0;
        var motion_id = random(100000, 200000);
        var action, key = "bg";
        var type = "shape";
        style["position"] = v.toolbar.position;
        for (var k in v.toolbar) { if (v.toolbar.hasOwnProperty(k)) { style[k] = v.toolbar[k] } }
        if (style.show == 0) {
            v.toolbar.h = style.h = 0;
            style.padding = style.margin = "0 0 0 0";
            style.gradient = 0
        }
        style["scale"] = 1;
        style = MarginPadding(style, 'margin', 'margin');
        style = MarginPadding(style, 'marginproc', 'marginproc');
        if (exist(style.paddingtop)) { if (style.paddingtop != 20 && style.margin == "-20 0 0 0") { style.margintop = style.paddingtop } }
        var control = createElement("div");
        css(control, { 'position': 'absolute', 'left': 0, 'top': 0, 'width': (style.stretchonfullscreen == 1 ? '100%' : o.normal_w), 'height': style.h - style.margintop, 'opacity_': style.a, 'pointer-events': 'none', 'fontSize': '14px', 'lineHeight': '1em' });
        o.frame.appendChild(control);
        var bg = createElement("div");
        css(bg, { 'position_': 'absolute', 'left_': 0, 'top_': 0, 'width_': '100%', 'height': style.h - style.marginbottom - style.margintop, 'opacity': style.a, 'display': 'block', 'margin-left': style.marginleft, 'margin-right': style.marginright, 'border-radius': style.rounding });
        control.appendChild(bg);
        w = control.offsetWidth;
        v.toolbar_margintop = -style.margintop;
        if (style.gradient == 1) {
            if (style.color == '000000' || v.toolbar.image != '') {
                v.toolbar_margintop = 98 - style.h;
                var img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==';
                if (v.toolbar.image.indexOf("data:image") > -1) { img = v.toolbar.image }
                css(bg, { 'height': style.h + v.toolbar_margintop, 'background': 'url(' + img + ') repeat-x 50% 100%', 'background-size': 'auto' })
            } else {
                var bgg = 'to bottom, rgba(' + hexToRgb(style.color) + ',0), rgba(' + hexToRgb(style.color) + ',1)';
                css(bg, { 'background': '-moz-linear-gradient(' + bgg + ')', 'background': '-webkit-linear-gradient(' + bgg + ')', 'background': '-ms-linear-gradient(' + bgg + ')', 'background': '-o-linear-gradient(' + bgg + ')', 'background': 'linear-gradient(' + bgg + ')' })
            }
        } else { css(bg, { 'background-color': style.color }) }
        this.h = function() { return style.h - style.margintop };
        this.c = function() { return control };
        this.s = function(key) { return style[key] };
        this.g = function(x) {
            if (control) {
                switch (x) {
                    case "w":
                        control.offsetWidth > 0 ? w = control.offsetWidth : '';
                        return w;
                        break;
                    case "width":
                        return control.offsetWidth;
                        break;
                    case "height":
                        return control.offsetHeight;
                        break;
                    case "x":
                        return int(control.style.left);
                        break;
                    case "y":
                        return int(control.style.top);
                        break;
                    case "opacity":
                        return control.style.opacity ? control.style.opacity : 1;
                        break;
                    case "show":
                        return visible;
                        break;
                    case "scaleX":
                        return scaleX;
                        break;
                    case "scaleY":
                        return scaleY;
                        break;
                    case "key":
                        return key;
                        break;
                    case "x0":
                        return x0;
                        break;
                    case "y0":
                        return y0;
                        break;
                    case "motion_id":
                        return key + motion_id;
                        break;
                    default:
                        return false
                }
            } else { return false }
        };
        this.set = function(key, x) {
            switch (key) {
                case "show":
                    visible = x;
                    break;
                case "w":
                    w = x;
                    break;
                case "display":
                    css(control, { "display": (x ? "block" : "none") });
                    visible = x;
                    break;
                case "scale":
                    css(control, { "transform": "scale(" + x + ")" });
                    scaleX = x;
                    scaleY = x;
                    break;
                case "scaleX":
                    css(control, { "transform": "scaleX(" + x + ")" });
                    scaleX = x;
                    break;
                case "scaleY":
                    css(control, { "transform": "scaleY(" + x + ")" });
                    scaleY = x;
                    break;
                case "opacity":
                    css(control, { "opacity": x });
                    break;
                case "left":
                    css(control, { "left": x });
                    break;
                case "top":
                    css(control, { "top": x });
                    break;
                case "width":
                    css(control, { "width": x });
                    break;
                case "height":
                    css(control, { "height": x });
                    break;
                case "x":
                    css(control, { "left": x });
                    break;
                case "y":
                    css(control, { "top": x });
                    break;
                case "x0":
                    x0 = x;
                    break;
                case "y0":
                    y0 = x;
                    break
            }
        };
        this.Remove = function() {
            o.frame.removeChild(control);
            control = null
        }
    };
    var Settings = function(is) {
        var i;
        var style = [];
        var f = [];
        var fbg = [];
        var fimg = [];
        var ftitle = [];
        var fvalue = [];
        var faction = [];
        var f2 = [];
        var f2bg = [];
        var f2img = [];
        var f2title = [];
        var f2value = [];
        var f2action = [];
        var stout = [];
        var is_visible = false;
        var open_action;
        var open_settings = -1;
        var empty = true;
        var key = is;
        var playlist;
        var shuffle = [];
        var shuffle_ = [];
        var plid = '';
        var plfolder = '';
        var plx = -1;
        var sub_settings_on = false;
        var sub_settings = false;
        var autonextopenfolder = false;
        var autoprevopenfolder = false;
        var justshow = false;
        var removed = false;
        var showinterval;
        var arrinterval;
        var wheelinterval;
        var hidetimeout;
        var scale_i = -1;
        style = UpdateObject(style, v[is]);
        style = MarginPadding(v[is], 'margin', 'margin');
        if (style.marginbg == 0) { style.marginbgpadding = "0 0 0 0" }
        style = MarginPadding(v[is], 'bgpadding', 'marginbgpadding');
        style = MarginPadding(v[is], 'padding', 'padding');
        style.scrollwidth = 0;
        var _activeIcon = "<svg width='" + style.activeiconsize * 2 + "' height='" + (style.activeiconsize * 2 > style.valuefontsize ? (style.activeiconsize * 2) : style.valuefontsize) + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><ellipse ry='" + (style.activeiconsize) + "' rx='" + style.activeiconsize + "' cy='" + (style.activeiconsize * 2 > style.valuefontsize ? (style.activeiconsize) : (style.valuefontsize / 2)) + "' cx='" + style.activeiconsize + "' fill='#" + style.valuecolor + "'/></g></svg>";
        var _xIcon = "<svg width='" + style.activeiconsize * 2 + "' height='" + style.valuefontsize + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' ><g><ellipse ry='" + (style.activeiconsize - 1) + "' rx='" + (style.activeiconsize - 1) + "' cy='" + (style.valuefontsize / 2 + 2) + "' cx='" + style.activeiconsize + "' stroke='#" + style.valuecolor + "' stroke='1' fill-opacity='0'/></g></svg>";
        var xx = 4;
        var _nextIcon = "<svg width='" + (xx + 2) + "' height='" + (style.valuefontsize) + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><line x1='1' y1='" + (style.valuefontsize / 2 - xx) + "' x2='" + xx + "' y2='" + (style.valuefontsize / 2) + "' stroke='#" + style.color + "' stroke-width='1' stroke-linecap='round'/><line x1='" + xx + "' y1='" + (style.valuefontsize / 2) + "' x2='1' y2='" + (style.valuefontsize / 2 + xx) + "' stroke='#" + style.color + "' stroke-width='1' stroke-linecap='round'/></g></svg>";
        var _prevIcon = "<svg width='" + (xx + 2) + "' height='" + (style.valuefontsize + 2) + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><line x1='1' y1='" + (style.valuefontsize / 2 + 2) + "' x2='" + xx + "' y2='" + (style.valuefontsize / 2 - xx + 2) + "' stroke='#" + style.color + "' stroke-width='1' stroke-linecap='round'/><line x1='1' y1='" + (style.valuefontsize / 2 + 2) + "' x2='" + xx + "' y2='" + (style.valuefontsize / 2 + xx + 2) + "' stroke='#" + style.color + "' stroke-width='1' stroke-linecap='round'/></g></svg>";
        var container = createElement("div");
        o.frame.appendChild(container);
        css(container, { 'overflow': 'hidden', 'display': 'block', 'opacity': 0, 'border-radius': style.rounding });
        if (is == "settings") { container.style.zIndex = 100 } else { container.style.zIndex = 99 }
        var control = createElement("div");
        css(control, { 'position': 'relative', 'top': 0, 'left': 0, 'display': 'block', 'width': '100%', 'padding-top': style.bgpaddingtop, 'padding-right': style.bgpaddingright + 20, 'padding-bottom': style.bgpaddingbottom, 'padding-left': style.bgpaddingleft, 'color': style.color, 'font-size': style.fontsize, 'font-family': style.font, 'letter-spacing': style.letterspacing + 'px' });
        if (o.system.safari) { css(control, { 'min-width': 220 }) }
        if (is !== "playlist") { css(control, { 'overflow-y': 'scroll' }) }
        container.appendChild(control);
        if (style.floatleft != 1) {
            var control2 = createElement("div");
            css(control2, { 'display': 'block', 'overflow': 'hidden', 'border-radius': style.rounding });
            if (style.floatleft != 1) { if (o.system.safari) { css(control2, { 'min-width': 220 }) } }
            control.appendChild(control2)
        }
        if (is == "playlist") {
            attr(control, { id: (v.id + "_" + is) });
            if (style.floatleft == 1) {
                css(control, { 'width': '100%', 'padding-right': style.bgpaddingright, 'padding-bottom': style.bgpaddingbottom + 20, 'overflow-x': 'scroll', 'white-space': 'nowrap' });
                css(container, { 'width': o.screen_w - style.marginright - style.marginleft, 'height': style.floatheight + style.bgpaddingtop + style.bgpaddingbottom })
            } else { css(control, { 'overflow-y': 'scroll' }); if (style.width100 == 1) { ResizePlaylist() } }
            if (style.marginbg == 1) { css(container, { 'background-color': style.marginbgcolor }) }
            if (v.playlist.droplist == 1) { hide2(container) }
        }
        if (style.scrollarrows == 1) {
            var arr_up = createElement("div");
            var scrollbgcolor = hexToRgb(style.marginbg == 1 ? style.marginbgcolor : style.bgcolor);
            if (style.floatleft == 1) { StyleArrow(arr_up, 'to right, rgba(' + scrollbgcolor + ',' + (style.bga * 1 + 0.3) + '), rgba(' + scrollbgcolor + ',0)', 'left', 12, 5, 7, 10, 7, 10, 12, 15); if (o.system.mobile) { arr_up.addEventListener("touchstart", ScrollLeft) } else { arr_up.addEventListener("click", ScrollLeft) } } else { StyleArrow(arr_up, 'to bottom, rgba(' + scrollbgcolor + ',' + (style.bga * 1 + 0.3) + '), rgba(' + scrollbgcolor + ',0)', 'top', 5, 12, 10, 7, 10, 7, 15, 12); if (o.system.mobile) { arr_up.addEventListener("touchstart", ScrollUp) } else { arr_up.addEventListener("click", ScrollUp) } }
            var arr_down = createElement("div");
            if (style.floatleft == 1) { StyleArrow(arr_down, 'to left, rgba(' + scrollbgcolor + ',' + (style.bga * 1 + 0.3) + '), rgba(' + scrollbgcolor + ',0)', 'right', 8, 5, 13, 10, 13, 10, 8, 15); if (o.system.mobile) { arr_down.addEventListener("touchstart", ScrollRight) } else { arr_down.addEventListener("click", ScrollRight) } } else { StyleArrow(arr_down, 'to bottom, rgba(' + scrollbgcolor + ',0), rgba(' + scrollbgcolor + ',' + (style.bga * 1 + 0.3) + ')', 'bottom', 5, 8, 10, 13, 10, 13, 15, 8); if (o.system.mobile) { arr_down.addEventListener("touchstart", ScrollDown) } else { arr_down.addEventListener("click", ScrollDown) } }
            control.addEventListener("wheel", Wheel, { passive: true });
            arr_up.addEventListener("mouseup", onMouseUp);
            arr_down.addEventListener("mouseup", onMouseUp);
            container.appendChild(arr_up);
            container.appendChild(arr_down);
            clearInterval(arrinterval);
            arrinterval = setInterval(ArrowsInterval, 1000)
        }
        if (o.system.mobile) {
            control.ontouchstart = ControlOver;
            control.ontouchend = ControlOut
        } else {
            control.onmouseover = ControlOver;
            control.onmouseout = ControlOut
        }
        if (is == "settings") {
            for (var i = 1; i < 11; i++) {
                if (exist(v["control_" + is][is + i])) { v.settings[is + i] = v["control_" + is][is + i]; if (exist(v["control_" + is][is + i + "title"])) { v.settings[is + i + "title"] = v["control_" + is][is + i + "title"] } if (exist(v["control_" + is][is + i + "action"])) { v.settings[is + i + "action"] = v["control_" + is][is + i + "action"] } }
                if (exist(v.settings[is + i])) {
                    if (v.settings[is + i] == 1) {
                        CreateItem('f', i);
                        StyleItem(f[i], fbg[i], ftitle[i], fvalue[i]);
                        ftitle[i].innerHTML = Lang(v.settings[is + i + "action"]);
                        if (exist(v.settings[is + i + "title"])) { if (v.settings[is + i + "title"] != '') { ftitle[i].innerHTML = v.settings[is + i + "title"] } }
                        if (exist(v.settings[is + i + "action"])) {
                            faction[i] = v.settings[is + i + "action"];
                            Value(i);
                            if (faction[i] == 'scale') { scale_i = i }
                        }
                        if (o.system.mobile) {
                            f[i].addEventListener("touchstart", onOver);
                            f[i].addEventListener("touchend", onOut)
                        } else {
                            f[i].addEventListener("mouseover", onOver);
                            f[i].addEventListener("mouseout", onOut)
                        }
                        f[i].addEventListener("click", onClick);
                        f[i].addEventListener("mouseup", onMouseUp);
                        if (v.settings[is + i + "hide"] == 1) { hide(f[i]) }
                    }
                }
            }
        }

        function Wheel() {
            clearInterval(wheelinterval);
            wheelinterval = setInterval(ControlOut, 3000)
        }

        function ControlOver() { o.mouseDown = true }

        function ControlOut() {
            if (style.showovercontrol == 1) {
                clearTimeout(o.settingsovertimer);
                o.settingsovertimer = setTimeout(function() { if (!o.mouseDown) { HideControl() } }, 1000)
            }
            o.mouseDown = false
        }

        function onOver(event) {
            if (o.fullscreen) { o.volumewheel ? o.actions.volumewheel(false) : '' }
            var i = event.target.getAttribute('fid');
            var x;
            if (i) { x = 'f' } else {
                if (event.target.getAttribute('f2id')) {
                    i = event.target.getAttribute('f2id');
                    x = 'f2'
                }
            }
            if (i) {
                i = parseInt(i);
                var opn = false;
                if (exist(eval(x)[i])) {
                    if (style.bgaover > -1) { css(eval(x + 'bg')[i], { 'opacity': style.bgaover }) }
                    if (style.aover > -1) {
                        css(eval(x + 'title')[i], { 'opacity': style.aover });
                        css(eval(x + 'value')[i], { 'opacity': style.aover })
                    }
                    if (is == "playlist") {
                        if (faction[i].indexOf("playlist") == 0) {
                            var id = faction[i].substr(8);
                            if (plid == id || plfolder == id) {
                                css(eval(x + 'title')[i], { 'color': style.valuecolor });
                                css(eval(x + 'value')[i], { 'color': style.valuecolor });
                                opn = true
                            } else { css(eval(x + 'title')[i], { 'color': style.color }) }
                        }
                    }
                    if (style.playbgcolored == 1 && exist(style.playbgcolor) && opn) {} else { css(eval(x + 'bg')[i], { 'backgroundColor': style.bgcolorover }) }
                }
            }
        };

        function onOut(event) {
            if (o.fullscreen) { o.volumewheel ? o.actions.volumewheel(true) : '' }
            var i = event.target.getAttribute('fid');
            var x;
            var opn = false;
            if (i) { x = 'f' } else {
                if (event.target.getAttribute('f2id')) {
                    i = event.target.getAttribute('f2id');
                    x = 'f2'
                }
            }
            if (i) {
                if (exist(eval(x)[i])) {
                    if (style.bgaover > -1) { css(eval(x + 'bg')[i], { 'opacity': style.bga, "transition": "opacity 0.1s linear" }) }
                    if (style.aover > -1) {
                        css(eval(x + 'title')[i], { 'opacity': style.a, "transition": "opacity 0.1s linear" });
                        css(eval(x + 'value')[i], { 'opacity': style.a, "transition": "opacity 0.1s linear" })
                    }
                    if (is == "playlist") {
                        if (faction[i].indexOf("playlist") == 0) {
                            var id = faction[i].substr(8);
                            if (plid == id || plfolder == id) {
                                css(eval(x + 'title')[i], { 'color': style.valuecolor });
                                css(eval(x + 'value')[i], { 'color': style.valuecolor });
                                opn = true
                            } else { if (exist(o.plhistory[id])) { HistoryPlaylist(i) } else { css(eval(x + 'title')[i], { 'color': style.color }) } }
                        }
                    }
                    if (style.playbgcolored == 1 && exist(style.playbgcolor) && opn) {} else { css(eval(x + 'bg')[i], { 'backgroundColor': style.bgcolor }) }
                }
            }
        }

        function onClick(event) {
            if (!justshow) {
                var d = new Date();
                o.clicktime = d.getTime();
                var i = event.target.getAttribute('fid');
                if (i) { if (exist(f[i])) { if (exist(faction[i])) { Action(i) } } }
            }
        }

        function onMouseUp(event) { event.cancelBubble = true }

        function onClick2(event) {
            if (!justshow) {
                var d = new Date();
                o.clicktime = d.getTime();
                var i = event.target.getAttribute('f2id');
                if (i) { if (i == 0) { Home() } else { if (exist(f2action[i])) { Action2(i) } } }
            }
        }

        function onClickSubtitle(event) { var x = event.target.getAttribute('setupx'); if (x) { ActionSubtitle(x) } }

        function onClickSubtitle2(event) {
            var i = event.target.getAttribute('f2id');
            if (exist(f2action[i])) {
                if (f2action[i].indexOf("=") > 0) {
                    var x = f2action[i].substr(0, f2action[i].indexOf("="));
                    var y = f2action[i].substr(f2action[i].indexOf("=") + 1);
                    v[x] = y;
                    if (o.storage && v.sub_designstore == 1) { localStorage.setItem("pljs" + x, y) }
                    o.actions.RenewSubtitle();
                    ActionSubtitle(x)
                }
            }
        }

        function Value(i) {
            if (exist(faction[i])) {
                var _hide = false;
                var _show = false;
                var _value = '';
                if (is == "settings") {
                    if (faction[i] == "quality") { _value = o.media.getQuality() }
                    if (faction[i] == "audiotrack") { _value = o.media.getAudioTrack() }
                    if (faction[i] == "channel") { if (o.channels) { _value = o.files_channel[o.current_channel] } }
                    if (faction[i] == "audiotrack" || faction[i] == "channel" || faction[i] == "quality") { if (o['files_' + faction[i]].length == 0) { _hide = true } else { if (o['files_' + faction[i]].length == 1 && (style.show1value != 1 || o['files_' + faction[i]][0] == 1)) { _hide = true } else { _show = true } } }
                    if (faction[i] == "airplay") { if (!o.airplay) { _hide = true } else { _show = true } }
                    if (faction[i] == "download") { if (o.file_type != 'native' && !v.download) { _hide = true } else { _show = true } }
                    if (faction[i] == "subtitle") {
                        if (exist(o.subs)) {
                            _show = true;
                            if (o.subtitle_on || v.sub_off == 1) { _value = o.files_subtitle[!o.subtitle_on ? o.files_subtitle.length - 1 : o.current_subtitle] } else { _value = '' }
                            var sxs = false;
                            for (var s = 0; s < o.subs.length; s++) { if (o.subs[s] != '') { sxs = true; break } }
                            if (!sxs) {
                                _hide = true;
                                _show = false
                            }
                        } else { _hide = true }
                    }
                    if (faction[i] == "speed") {
                        _value = o.files_speed[o.current_speed];
                        _show = true;
                        if (o.file_type == "vimeo" || (o.media.isLive() && v.speed4live != 1)) {
                            _hide = true;
                            _show = false
                        }
                    }
                    if (faction[i] == "scale") {
                        _value = Math.round(o.mediascale.x * 100) + '%';
                        _show = true
                    }
                    if (faction[i].indexOf("timer") > 0) {
                        _value = exist(o['pjs' + faction[i] + v.id]) ? o['pjs' + faction[i] + v.id] : Lang("off");
                        _show = true
                    }
                }
                fvalue[i].innerHTML = _value + (_value != '' && style.hidearrow != 1 ? ' &nbsp;<svg width="5px" height="7px" viewBox="-1 -1 5 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polyline stroke="#' + style.valuecolor + '" stroke-width="1" fill="none" points="0 0 3 3 0 6"></polyline></svg>' : '');
                if (_hide) {
                    hide(f[i]);
                    if (is == "settings") { stout[i] ? clearTimeout(stout[i]) : ''; if (o.controls) { o.controls.SettingsN(i, false, _value) } else { stout[i] = setTimeout(function() { o.controls.SettingsN(i, false, _value) }, 200) } }
                    css(f[i], { 'position': 'absolute', 'right': 0, 'top': -100 })
                }
                if (_show) {
                    if (style.floatleft == 1) { css(f[i], { 'display': 'inline-block' }) } else { show(f[i]) }
                    if (is == "settings") { stout[i] ? clearTimeout(stout[i]) : ''; if (o.controls) { o.controls.SettingsN(i, true, _value) } else { stout[i] = setTimeout(function() { o.controls.SettingsN(i, true, _value) }, 500) } }
                    css(f[i], { 'position': 'relative', 'right': 0, 'top': 0 })
                }
                Resize()
            }
            for (var j = 1; j < f.length; j++) {
                if (f[j]) {
                    if (isVisible(f[j])) {
                        var refresh = false;
                        empty ? refresh = true : '';
                        empty = false;
                        refresh && o.controls ? o.controls.refresh() : ''
                    }
                }
            }
        };

        function Action(i) {
            if (exist(faction[i])) {
                var x = VisibleItems();
                if (open_action != faction[i]) {
                    open_action = faction[i];
                    if (open_action == 'quality' || open_action == 'audiotrack' || open_action == 'subtitle' || open_action == 'speed' || open_action == 'channel' || open_action == 'scale' || open_action.indexOf("timer") > 0) {
                        open_settings = i;
                        var files_query = [];
                        if (exist(Object.assign)) { files_query = Object.assign([], o['files_' + open_action]) } else { for (var key in o['files_' + open_action]) { if (o['files_' + open_action].hasOwnProperty(key)) { files_query[key] = o['files_' + open_action][key] } } }
                        if (open_action.indexOf("timer") > 0) { files_query = [open_action, Lang("off")] }
                        var current = o['current_' + open_action];
                        var pressed = o['pressed_' + open_action];
                        for (var j = 1; j < f.length; j++) { if (f[j]) { f[j].style.display = "none" } }
                        f2 = [];
                        CreateItem('f2', 0);
                        StyleItem(f2[0], f2bg[0], f2title[0], f2value[0]);
                        css(f2[0], { "border-bottom": "1px solid " + (style.bordercolored == 1 ? "#" + style.bordercolor.replace("#", "") : "rgba(100,100,100,0.7)") });
                        f2title[0].innerHTML = (x[0] > 1 && style.noprevicon != 1 ? _prevIcon + '&nbsp;' : '') + (v.settings[is + i + "title"] && v.settings[is + i + "title"] != '' ? v.settings[is + i + "title"] : Lang(v.settings[is + i + "action"]));
                        if (open_action == 'subtitle' && !o.hls_subs && !o.dash_subs) {
                            f2value[0].innerHTML = Lang("options");
                            css(f2value[0], { 'color': style.color, 'text-decoration': 'underline', 'pointerEvents': 'auto', 'cursor': 'pointer' });
                            f2value[0].addEventListener("click", SubtitleSettings);
                            if (sub_settings_on) { for (j = 0; j < o.sub_options.length; j++) { if (v.sub_all == 0 && o.sub_options[j] == "sub_color2") {} else { files_query.push("pjslng_" + o.sub_options[j]) } } }
                        }
                        if (open_action == 'scale') {
                            Scale();
                            css(f2value[0], { 'width': style.valuefontsize * 2.5, 'text-align': 'right' })
                        }
                        css(f2title[0], { 'font-size': style.headfontsize });
                        f2action[0] = "home";
                        if (x[0] > 1) {
                            if (o.system.mobile) {
                                f2[0].addEventListener("touchstart", onOver);
                                f2[0].addEventListener("touchend", onOut)
                            } else {
                                f2[0].addEventListener("mouseover", onOver);
                                f2[0].addEventListener("mouseout", onOut)
                            }
                            f2[0].addEventListener("click", onClick2);
                            f2[0].addEventListener("mouseup", onMouseUp)
                        } else { css(f2[0], { "cursor": 'default' }) }
                        if (style.nohead == 1) { hide2(f2[0]) }
                        if (exist(files_query)) {
                            for (j = 0; j < files_query.length; j++) {
                                var y = j + 1;
                                var totheend = false;
                                var off = false;
                                if (trim(files_query[j]) != '') {
                                    if (open_action == 'quality') { if (files_query[j] == Lang("auto")) { totheend = true } }
                                    CreateItem('f2', y, totheend);
                                    StyleItem(f2[y], f2bg[y], f2title[y], f2value[y], faction[i]);
                                    if (typeof(files_query[j]) == 'string') {
                                        if (files_query[j].indexOf("<<<") == 0) {
                                            files_query[j] = files_query[j].replace('<<<', '');
                                            off = true
                                        }
                                        if (files_query[j].indexOf('timer') > 0) {
                                            var tmp = 'pjs' + files_query[j] + v.id;
                                            o[tmp + '_i'] = i;
                                            files_query[j] = (v[files_query[j] + '_text'] ? v[files_query[j] + '_text'] : '') + " <input type='time' " + (files_query[j].indexOf("offset") > -1 ? "step='1'" : "") + " value='" + (o[tmp] ? o[tmp] : '') + "' id='" + tmp + "' style='border:0;background:transparent;color:#" + style.valuecolor + "'/>";
                                            css(f2title[y], { "pointer-events": "auto" });
                                            hide2(f2value[y])
                                        }
                                        if (files_query[j].indexOf("pjslng") == 0) { f2title[y].innerHTML = Lang(files_query[j].substr(7)); if (files_query[j] == 'pjslng_sub_sizeproc') { css(f2[y], { "border-top": "1px solid rgba(100,100,100,0.7)" }) } } else { f2title[y].innerHTML = files_query[j] }
                                    } else { f2title[y].innerHTML = files_query[j] }
                                    f2action[y] = open_action + j;
                                    if (current == j || pressed == j) {
                                        f2value[y].innerHTML = current == j ? _activeIcon : _xIcon;
                                        current == j ? css(f2title[y], { 'color': style.valuecolor }) : ''
                                    }
                                    if (typeof(files_query[j]) == 'string') { if (files_query[j].indexOf("pjslng") == 0) { var t = files_query[j].substr(7); if (t.indexOf("color") > 0) { f2value[y].innerHTML = "<div style='" + (v[t] == "000000" ? 'border:1px solid #999;height:8px;width:8px;' : 'height:10px;width:10px;') + ";background-color:" + (v[t].indexOf("#") == -1 ? '#' : '') + v[t] + ";border-radius:10px;'></div>" } else { f2value[y].innerHTML = v[files_query[j].substr(7)] } } }
                                    if (open_action == 'quality') { if (files_query[j] == Lang("auto") && o.media.autoQuality()) { css(f2title[y], { 'color': style.valuecolor }) } if (exist(v.forbidden_quality)) { if (v.forbidden_quality.indexOf(files_query[j]) > -1) { hide2(f2[y]) } } }
                                    var clck = "";
                                    if (typeof(files_query[j]) == 'string') {
                                        if (files_query[j].indexOf("pjslng") == 0) {
                                            attr(f2[y], { 'f2parent': i, 'setupx': files_query[j].substr(7) });
                                            clck = "onClickSubtitle"
                                        }
                                    }
                                    if (!off) {
                                        if (o.system.mobile) {
                                            f2[y].addEventListener("touchstart", onOver);
                                            f2[y].addEventListener("touchend", onOut)
                                        } else {
                                            f2[y].addEventListener("mouseover", onOver);
                                            f2[y].addEventListener("mouseout", onOut)
                                        }
                                        if (clck == "onClickSubtitle") { f2[y].addEventListener("click", onClickSubtitle) } else { f2[y].addEventListener("click", onClick2) }
                                        f2[y].addEventListener("mouseup", onMouseUp);
                                        if (open_action.indexOf("timer") > 0) { document.getElementById("pjs" + open_action + v.id).addEventListener("change", SetTimer) }
                                    } else { css(f2[y], { "cursor": "default" }) }
                                }
                            }
                        }
                        Resize()
                    }
                    if (faction[i] == 'download') { o.actions.Download() }
                    if (faction[i].indexOf('playlist') > -1) {
                        var id = faction[i].substr(8);
                        if (exist(o.playlist_dic[id])) {
                            if (exist(o.playlist_dic[id]['file'])) {
                                o.seekto = undefined;
                                ActionPlaylist(i);
                                if (exist(o.playlist_dic[id]['start'])) { v.start = o.seekto = o.playlist_dic[id]['start'] }
                                SettingsTimers("offset");
                                if (exist(o.playlist_dic[id]['redirect']) && v.redirect == 1 && v.redirectplaylist == 1) { redirect(o.playlist_dic[id]['redirect']) } else {
                                    o.actions.NewFile(o.playlist_dic[id]['file']);
                                    v.playlist.always == 0 && v.playlist.autohide == 1 ? setTimeout(HideControl, 200) : '';
                                    autonextopenfolder = false;
                                    autoprevopenfolder = false;
                                    UpdateVars(id)
                                }
                            } else { if (exist(o.playlist_dic[id]['folder'])) { UpdatePlaylist(id); if (autonextopenfolder) { plx == -1 ? Action(0) : '' } else if (autoprevopenfolder) { plx == -1 ? Action(parseInt(f.length) - 2) : '' } } }
                        }
                        if (o.droplist) { o.droplist.Update() }
                    }
                    if (faction[i] == 'airplay') { o.media.Airplay() }
                }
            }
        };

        function SetTimer() {
            o[this.id] = this.value;
            Value(o[this.id + '_i']);
            SettingsTimers("offsetwrite")
        };
        this.UpdateTimer = function(x) { Value(o[x + '_i']) };

        function ActionSubtitle(x) {
            for (var i = 0; i < f2.length; i++) { if (f2[i]) { f2[i].style.display = "none" } }
            f2 = [];
            CreateItem('f2', 0);
            StyleItem(f2[0], f2bg[0], f2title[0], f2value[0]);
            css(f2[0], { "border-bottom": "1px solid " + (style.bordercolored == 1 ? "#" + style.bordercolor.replace("#", "") : "rgba(100,100,100,0.7)") });
            f2title[0].innerHTML = Lang(x);
            css(f2title[0], { 'font-size': style.headfontsize });
            if (o.system.mobile) {
                f2[0].addEventListener("touchstart", onOver);
                f2[0].addEventListener("touchend", onOut)
            } else {
                f2[0].addEventListener("mouseover", onOver);
                f2[0].addEventListener("mouseout", onOut)
            }
            f2[0].addEventListener("click", SubtitleSettingsMenu);
            f2[0].addEventListener("mouseup", onMouseUp);
            var values = [];
            var valuefromlang = false;
            if (x.indexOf("size") > 0) { values = ['50%', '75%', '100%', '125%', '150%', '175%', '200%', '250%', '300%', '400%'] }
            if (x.indexOf("bga") > 0) { values = ['0', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1'] }
            if (x.indexOf("weight") > 0) { values = [200, 400, 600] }
            if (x.indexOf("bottom") > 0) { for (i = 0; i < 21; i++) { values[i] = i * 10 } }
            if (x.indexOf("shadow") > 0) {
                valuefromlang = true;
                values = [0, 1]
            }
            if (x.indexOf("color") > 0) { values = ['ffffff', 'ffeeab', '72ccf8', '62de50', 'faed54', 'feba54', 'e8bbff', 'ffc7d1', 'aaaaaa', 'd9bb8c', 'b3fee8', '4bd9ac', 'FEF370', 'D90000', '073DA0', '409829', '644082', '000000']; var vx = v[x].replace("#", ""); if (values.indexOf(vx) == -1) { values[8] = vx } }
            for (y = 1; y <= values.length; y++) {
                CreateItem('f2', y, false);
                StyleItem(f2[y], f2bg[y], f2title[y], f2value[y]);
                css(f2value[y], { 'padding-left': 0 });
                if (x.indexOf("color") > 0 || x.indexOf("bottom") > 0) {
                    y % 3 != 0 ? css(f2[y], { 'float': 'left' }) : '';
                    css(f2[y], { 'width': '33.3%' });
                    if (x.indexOf("color") > 0) {
                        f2title[y].innerHTML = "<div style='" + (values[y - 1] == "000000" ? 'border:1px solid #999;height:18px;width:18px;' : 'height:20px;width:20px;') + ";background-color:#" + values[y - 1] + ";border-radius:20px;'></div>";
                        css(f2[y], { 'line-height': 1 })
                    } else { f2title[y].innerHTML = values[y - 1] }
                } else {
                    if (x.indexOf("weight") > 0) { f2title[y].innerHTML = values[y - 1] } else {
                        y % 2 != 0 ? css(f2[y], { 'float': 'left' }) : '';
                        css(f2[y], { 'width': '50%' });
                        if (valuefromlang) { f2title[y].innerHTML = Lang(values[y - 1] + 'val') } else { f2title[y].innerHTML = values[y - 1] }
                    }
                }
                f2action[y] = x + '=' + values[y - 1];
                if (values[y - 1] == v[x] || v[x] == '#' + values[y - 1]) {
                    f2value[y].innerHTML = _activeIcon;
                    css(f2title[y], { 'color': style.valuecolor })
                }
                if (o.system.mobile) {
                    f2[y].addEventListener("touchstart", onOver);
                    f2[y].addEventListener("touchend", onOut)
                } else {
                    f2[y].addEventListener("mouseover", onOver);
                    f2[y].addEventListener("mouseout", onOut)
                }
                f2[y].addEventListener("click", onClickSubtitle2);
                f2[y].addEventListener("mouseup", onMouseUp)
            }
            Resize()
        }

        function UpdateVars(id) {
            if (exist(o.playlist_dic[id]['poster'])) {
                v.poster = o.playlist_dic[id]['poster'];
                exist(v.poster) ? o.media.Poster(v.poster) : ''
            }
            if (exist(o.playlist_dic[id]['thumbnails'])) { v.thumbnails = o.playlist_dic[id]['thumbnails'] }
            if (exist(o.playlist_dic[id]['title'])) {
                o.titlestore = o.playlist_dic[id]['title'];
                if (v.showtitleplaylist == 1) {
                    if (o.actions.TitleTemplate(o.playlist_dic[id])) {} else { v.title = (v.addtitleplaylist == 1 && exist(o.maintitle) ? o.maintitle + (v.addtitleplaylistbr == 1 ? '<br>' : ' ') : '') + o.playlist_dic[id]['title'] }
                    o.actions.Title('title')
                }
            }
            if (v.pointed == 1) {
                if (exist(o.playlist_dic[id]['points'])) { v.points = o.playlist_dic[id]['points'] } else { v.points = [] }
                o.controls.RenewPoints()
            }
            v.remove = undefined;
            var xv = ['url', 'vars', 'embed', 'end', 'remove', 'heartbeat', 'download', 'title2'];
            for (var i = 0; i < xv.length; i++) { if (exist(o.playlist_dic[id][xv[i]])) { v[xv[i]] = o.playlist_dic[id][xv[i]] } }
            v.start = 0;
            if (exist(o.playlist_dic[id]['start'])) { v.start = o.seekto = o.playlist_dic[id]['start'] }
            if (exist(o.playlist_dic[id]['sub'])) { o.playlist_dic[id]['subtitle'] = o.playlist_dic[id]['sub'] }
            if (exist(o.playlist_dic[id]['subtitle'])) { o.media.SubtitleStart(o.playlist_dic[id]['subtitle']) }
            if (exist(o.playlist_dic[id]['design'])) { apiProcessor('design', o.playlist_dic[id]['design']) }
        }

        function ActionPlaylist(x) {
            if (plx == 0 && !o.start) {
                css(ftitle[plx], { 'color': style.color });
                css(fbg[plx], { 'backgroundColor': style.bgcolor });
                fvalue[plx].innerHTML = ''
            } else {
                o.plopenid = x;
                if (plx > -1) { HistoryPlaylist(plx) }
                if (plid != '') {
                    o.plhistory[plid] = true;
                    shuffle[plid] = null
                }
            }
            var id = faction[x].substr(8);
            fvalue[x].innerHTML = _activeIcon;
            css(ftitle[x], { 'color': style.valuecolor, 'text-decoration': 'none', 'opacity': style.a });
            if (style.playbgcolored == 1 && exist(style.playbgcolor)) { css(fbg[x], { 'backgroundColor': style.playbgcolor }) }
            plx = x;
            plid = id;
            o.plid = plid;
            v.plstart = plid;
            o.playlist_title = ftitle[x].innerHTML;
            o.plopenid = plid;
            plfolder = o.playlist_dic[id]['pjs_parent'];
            if (o.controls) { o.controls.PlaylistControls() }
        }

        function UpdatePlaylist(id) {
            var x = id == 0 ? o.playlist : o.playlist_dic[id];
            o.plopenid = id;
            for (var i = 0; i < f.length; i++) {
                if (style.floatleft == 1) { control.removeChild(f[i]) } else { control2.removeChild(f[i]) }
                f[i] = null
            }
            f = [];
            plx = -1;
            if (exist(x['folder'])) {
                var y = Object.keys(x['folder']).length;
                CreateItem('f', y);
                faction[y] = "playlistfolder";
                StyleItem(f[y], fbg[y], ftitle[y], fvalue[y]);
                if (style.floatleft == 1) { css(f[y], { "width": (style.floatlimitwidth == 1 ? style.floatwidth : "auto"), "height": style.floatheight }) }
                if (style.borderbottom == 1) { if (style.floatleft == 1) { css(f[y], { "borderRight": "1px solid #" + style.headbordercolor }) } else { css(f[y], { "borderBottom": "1px solid #" + style.headbordercolor }) } }
                var tmp = x.title;
                if (style.noprevicon != 1) {
                    if (tmp.indexOf(" ") > -1) { tmp = '<pjsdiv style="white-space:nowrap">' + _prevIcon + ' ' + tmp.substr(0, tmp.indexOf(" ")) + '</pjsdiv> ' + tmp.substr(tmp.indexOf(" ")) } else {
                        tmp = _prevIcon + ' ' + tmp;
                        css(ftitle[y], { 'white-space': 'nowrap' })
                    }
                }
                ftitle[y].innerHTML = tmp;
                css(ftitle[y], { 'font-size': style.headfontsize });
                var p = x['pjs_parent'];
                if (o.system.mobile) {
                    f[y].addEventListener("touchstart", onOver);
                    f[y].addEventListener("touchend", onOut)
                } else {
                    f[y].addEventListener("mouseover", onOver);
                    f[y].addEventListener("mouseout", onOut)
                }
                f[y].addEventListener("click", function() { PlaylistBack(p) });
                x = x['folder']
            }
            var y = Object.keys(x).length;
            shuffle = [];
            shuffle_ = [];
            for (var i = 0; i < y; i++) {
                CreateItem('f', i);
                faction[i] = "playlist" + x[i].id;
                if (!exist(o.plhistory[x[i].id]) && !exist(x[i].folder)) {
                    shuffle[x[i].id] = i;
                    shuffle_[x[i].id] = i
                }
                StyleItem(f[i], fbg[i], ftitle[i], fvalue[i]);
                if (style.floatleft == 1) {
                    if (style.activeiconsize == 0) {
                        css(ftitle[i], { 'width': style.floatwidth - style.paddingleft - style.paddingright });
                        hide2(fvalue[i])
                    }
                    css(f[i], { "width": (style.floatlimitwidth == 1 ? style.floatwidth : "auto"), "height": style.floatheight })
                }
                if (style.borderbottom == 1 && i < y - 1) {
                    var brd = createElement("div");
                    f[i].appendChild(brd);
                    if (style.floatleft == 1) { css(brd, { "position": "absolute", "top": 0, "right": 0, "width": 1, "height": "100%", "background": "#" + style.bordercolor }) } else { css(brd, { "position": "absolute", "bottom": 0, "left": 0, "width": "100%", "height": 1, "background": "#" + style.bordercolor }) }
                }
                ftitle[i].innerHTML = x[i].title ? x[i].title : '&nbsp;';
                if (v.timestore == 1 && v.playedstore == 1 && x[i].id) { if (o.playedstored) { if (o.playedstored.indexOf(x[i].id) > -1) { x[i].played = 1 } } }
                if (exist(x[i].played)) {
                    if (x[i].played == 1) {
                        o.plhistory[x[i].id] = true;
                        HistoryPlaylist(i)
                    }
                }
                if (exist(x[i].folder)) {
                    fvalue[i].innerHTML = _nextIcon;
                    css(fvalue[i], { "color": style.color })
                }
                if (o.system.mobile) {
                    f[i].addEventListener("touchstart", onOver);
                    f[i].addEventListener("touchend", onOut)
                } else {
                    f[i].addEventListener("mouseover", onOver);
                    f[i].addEventListener("mouseout", onOut)
                }
                f[i].addEventListener("click", onClick);
                f[i].addEventListener("mouseup", onMouseUp);
                if (exist(o.plhistory[x[i].id])) { HistoryPlaylist(i) }
                if (plid == x[i].id) { ActionPlaylist(i) }
                if (plfolder == x[i].id) {
                    css(ftitle[i], { 'color': style.valuecolor });
                    css(fvalue[i], { 'color': style.valuecolor })
                }
            }
            Resize();
            empty = false;
            o.controls ? o.controls.refresh() : ''
        }

        function StyleArrow(x, y, z, x1, y1, x2, y2, x3, y3, x4, y4) {
            var ww = (style.floatleft == 1 ? '40px' : '100%');
            var hh = (style.floatleft == 1 ? '100%' : '40px');
            css(x, { 'position': 'absolute', 'display': 'inline-block', 'width': ww, 'height': hh, 'text-align': 'center' });
            if (style.scrollarrowgradient == 1) { css(x, { 'background': '-moz-linear-gradient(' + y + ')', 'background': '-webkit-linear-gradient(' + y + ')', 'background': '-ms-linear-gradient(' + y + ')', 'background': '-o-linear-gradient(' + y + ')', 'background': 'linear-gradient(' + y + ')', }) }
            if (style.floatleft == 1 || o.system.mobile) { css(x, { 'cursor': 'pointer' }) } else { css(x, { 'pointer-events': 'none' }) }
            if (style.limitwidth == 1) { css(x, { 'max-width': style.limitmaxwidth + 'px!important' }) }
            if (z == "top") { css(x, { 'top': -1, 'left': 0 }) }
            if (z == "bottom") { css(x, { 'bottom': -1, 'left': 0 }) }
            if (z == "left") { css(x, { 'top': 0, 'left': 0 }) }
            if (z == "right") { css(x, { 'top': 0, 'right': 0 }) }
            if (z == "right" || z == "left") { css(x, { 'text-align': 'left', 'padding-top': container.offsetHeight / 2 - 10 }) }
            x.innerHTML = "<center><div " + (style.scrollarrowbgover == 1 ? "onMouseOver='this.style.backgroundColor=\"#" + style.scrollarrowbgovercolor + "\"' onMouseOut='" + (style.scrollarrowbg == 1 ? "this.style.backgroundColor=\"#" + style.scrollarrowbgcolor : "this.style.background=\"none") + "\"'" : "") + " style='pointer-events:auto;cursor:pointer;width:20px;height:20px;border-radius:20px;" + (style.scrollarrowbg == 1 ? "background-color:#" + style.scrollarrowbgcolor + ";" : "") + (z == "top" ? "margin-top:10px;" : "") + (z == "bottom" ? "margin-top:10px;" : "") + (z == "right" ? "margin-left:0px;" : "") + (z == "left" ? "margin-right:0px;" : "") + "'><svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><line x1='" + x1 + "' y1='" + y1 + "' x2='" + x2 + "' y2='" + y2 + "' stroke='#" + style.scrollarrowcolor + "' stroke-width='" + style.scrollarrowsize + "' stroke-linecap='round'/><line x1='" + x3 + "' y1='" + y3 + "' x2='" + x4 + "' y2='" + y4 + "' stroke='#" + style.scrollarrowcolor + "' stroke-width='" + style.scrollarrowsize + "' stroke-linecap='round'/></g></svg></div></center>"
        }
        this.Arrows = function() { if (style.scrollarrows == 1) { Arrows() } };

        function ArrowsInterval() { if (is_visible) { Arrows() } }

        function Arrows(e) {
            if (style.scrollarrows == 1 && !removed) {
                if (style.floatleft == 1) { var h = control.scrollWidth; var m = container.offsetWidth + style.bgpaddingleft + style.bgpaddingright; var t = control.scrollLeft } else { var h = control.scrollHeight; var m = container.offsetHeight; var t = control.scrollTop }
                if (h > m) { if (t > 0) { if (!isVisible(arr_up)) { show(arr_up); var m1 = new Motion({ "mc": arr_up, "type": "alpha_div", "to": 1, "time": 0.3, "me": "arr_up" }) } } else { if (isVisible(arr_up)) { var m2 = new Motion({ "mc": arr_up, "type": "alpha_div", "to": 0, "time": 0.3, "me": "arr_up", "hide": true }) } if (e) { e.deltaY < 0 ? e.preventDefault() : '' } } if (t < h - m - 10) { if (!isVisible(arr_down)) { show(arr_down); var m3 = new Motion({ "mc": arr_down, "type": "alpha_div", "to": 1, "time": 0.3, "me": "arr_down" }) } } else { if (isVisible(arr_down)) { var m4 = new Motion({ "mc": arr_down, "type": "alpha_div", "to": 0, "time": 0.3, "me": "arr_down", "hide": true }) } if (e) { e.deltaY > 0 ? e.preventDefault() : '' } } } else {
                    hide(arr_up);
                    hide(arr_down)
                }
            }
        }

        function ScrollDown() {
            var x = control.scrollTop + container.offsetHeight - 60;
            var m = new Motion({ "mc": control, "type": "scroll", "to": x, "time": 0.3, "me": "scroll_down", "ease": "cubic" });
            setTimeout(Arrows, 1000)
        }

        function ScrollUp() {
            var x = control.scrollTop - container.offsetHeight + 60;
            var m = new Motion({ "mc": control, "type": "scroll", "to": x, "time": 0.3, "me": "scroll_up", "ease": "cubic" });
            setTimeout(Arrows, 1000)
        }

        function ScrollRight() {
            var x = control.scrollLeft + (container.offsetWidth + style.bgpaddingleft + style.bgpaddingright) - 60;
            var m = new Motion({ "mc": control, "type": "scrollleft", "to": x, "time": 0.3, "me": "scroll_right", "ease": "cubic" });
            setTimeout(Arrows, 1000)
        }

        function ScrollLeft() {
            var x = control.scrollLeft - (container.offsetWidth + style.bgpaddingleft + style.bgpaddingright) + 60;
            var m = new Motion({ "mc": control, "type": "scrollleft", "to": x, "time": 0.3, "me": "scroll_left", "ease": "cubic" });
            setTimeout(Arrows, 1000)
        }

        function PlaylistBack(x) {
            if (x == '') { UpdatePlaylist(0) } else { if (exist(o.playlist_dic[x])) { UpdatePlaylist(x) } }
            open_action = ''
        }

        function HistoryPlaylist(x) {
            fvalue[x].innerHTML = '';
            css(ftitle[x], { 'color': style.historycolor });
            if (style.historytitlestrike == 1) { css(ftitle[x], { 'text-decoration': 'line-through' }) }
            if (style.historytitlea > -1) { css(ftitle[x], { 'opacity': style.historytitlea }) }
            css(fbg[x], { 'backgroundColor': style.historybgcolor });
            if (style.historybga > -1) { css(fbg[x], { 'opacity': style.historybga }) }
        }

        function Action2(i) {
            if (exist(f2action[i])) {
                if (f2action[i].indexOf("quality") == 0) { o.actions.SetQuality(f2action[i].substr(7)) }
                if (f2action[i].indexOf("audiotrack") == 0) { o.actions.SetAudioTrack(f2action[i].substr(10)) }
                if (f2action[i].indexOf("subtitle") == 0) { o.actions.SetSubtitle(f2action[i].substr(8)) }
                if (f2action[i].indexOf("channel") == 0 && v.channels == 1) { o.channels.SetChannel(f2action[i].substr(7)) }
                if (f2action[i].indexOf("scale") == 0) { if (f2action[i] == 'scale0') { o.media.scale(style.scale / 100) } if (f2action[i] == 'scale1') { o.media.scale('-' + style.scale / 100) } if (f2action[i] == 'scale2') { o.media.normalscale() } }
                if (f2action[i].indexOf("timer") > 0) {
                    if (f2action[i].indexOf("timer1") > 0) {
                        var tmp = 'pjs' + f2action[i].slice(0, -1) + v.id;
                        o[tmp] = undefined;
                        Value(o[tmp + '_i']);
                        if (f2action[i].indexOf("offset") > -1) { SettingsTimers("offsetwrite") }
                        Home()
                    }
                }
                if (f2action[i].indexOf("speed") == 0) {
                    o.actions.SetSpeed(f2action[i].substr(5));
                    for (var i = 0; i < faction.length; i++) {
                        if (faction[i] == "speed") {
                            Value(i);
                            if (open_action == 'speed') {
                                Remove2();
                                Action(i)
                            }
                        }
                    }
                    setTimeout(HideControl, 200)
                }
            }
        };

        function CreateItem(x, i, totheend) {
            if (exist(eval(x))) {
                eval(x)[i] = createElement("div");
                if (i < 2 || x == "f" || open_action != 'quality' || totheend) { if (style.floatleft == 1) { control.appendChild(eval(x)[i]) } else { control2.appendChild(eval(x)[i]) } } else { if (style.floatleft == 1) { control.insertBefore(eval(x)[i], eval(x)[i - 1]) } else { control2.insertBefore(eval(x)[i], eval(x)[i - 1]) } }
                if (x == 'f') { attr(eval(x)[i], { 'fid': i }) }
                if (x == 'f2') { attr(eval(x)[i], { 'f2id': i }) }
                eval(x + 'bg')[i] = createElement("div");
                eval(x)[i].appendChild(eval(x + 'bg')[i]);
                eval(x + 'img')[i] = createElement("div");
                eval(x)[i].appendChild(eval(x + 'img')[i]);
                css(eval(x + 'img')[i], { 'position': 'absolute', 'right': 0, 'top': 0, 'width': '100%', 'height': '100%', 'pointerEvents': 'none' });
                eval(x + 'title')[i] = createElement("div");
                eval(x)[i].appendChild(eval(x + 'title')[i]);
                eval(x + 'value')[i] = createElement("div");
                eval(x)[i].appendChild(eval(x + 'value')[i]);
                if (x == "f2" && is == "settings" && style.activeicon == 0) { hide2(eval(x + 'value')[i]) }
            }
        };

        function StyleItem(x, xbg, xtitle, xvalue, actn) {
            css(x, { 'position': 'relative', 'right': 0, 'top': 0, 'cursor': 'pointer', 'height': 'auto', 'width': '100%', 'overflow': 'hidden', 'display': 'block', 'line-height': '1.5em' });
            if (style.floatmarginright && style.floatleft == 1) { css(x, { 'marginRight': style.floatmarginright }) }
            if (style.floatleft == 1) { css(x, { 'display': 'inline-block', 'vertical-align': 'top', 'white-space': 'normal' }) }
            css(xbg, { 'position': 'absolute', 'right': 0, 'top': 0, 'width': '100%', 'height': '100%', 'backgroundColor': style.bgcolor, 'opacity': style.bga, 'pointerEvents': 'none', 'transition': 'opacity 0.2s linear,background .2s linear' });
            css(xtitle, { 'position': 'relative', 'right': 0, 'top': 0, 'float': 'left', 'color': style.color, 'padding-top': style.paddingtop, 'padding-right': style.paddingright, 'padding-bottom': style.paddingbottom, 'padding-left': style.paddingleft, 'pointerEvents': 'none', 'opacity': style.a, 'transition': 'opacity 0.2s linear,color 0.2s linear' });
            css(xvalue, { 'position': 'relative', 'right': 0, 'top': 0, 'float': 'right', 'padding-top': style.paddingtop + (style.valuefontsize < style.fontsize ? (style.fontsize - style.valuefontsize) / 2 : 0), 'padding-right': style.paddingright, 'padding-left': style.paddingleft, 'pointerEvents': 'none', 'font-size': style.valuefontsize, 'opacity': style.a, 'color': style.valuecolor, 'transition': 'opacity 0.2s linear,color 0.2s linear' });
            if (style.limitwidth == 1) {
                css(x, { 'max-width': style.limitmaxwidth + 'px!important' });
                css(xtitle, { 'max-width': (style.limitmaxwidth - 70) + 'px!important' })
            } else {
                if (style.floatleft == 1) {
                    if (style.floatlimitwidth == 1) {
                        css(x, { 'width': style.floatwidth });
                        css(xtitle, { 'width': style.floatwidth - 70 })
                    }
                } else {
                    css(xtitle, { 'white-space': 'nowrap' });
                    css(xvalue, { 'white-space': 'nowrap' })
                }
            }
        }

        function Home() {
            for (var i = 1; i < f.length; i++) { if (exist(f[i])) { if (style.floatleft == 1) { f[i].style.display = "inline-block" } else { f[i].style.display = "block" } } }
            Remove2();
            Resize();
            open_action = '';
            open_settings = -1
        };

        function Remove2() {
            for (var j = 0; j < f2.length; j++) {
                if (f2[j]) {
                    if (style.floatleft == 1) { control.removeChild(f2[j]) } else { control2.removeChild(f2[j]) }
                    f2[j] = null
                }
            }
            f2 = [];
            open_action = ''
        }

        function Width() { return control.offsetWidth };
        this.resizePlaylist = function() { ResizePlaylist() };

        function ResizePlaylist() {
            if (is == "playlist") {
                if (style.floatleft == 1 || style.width100 == 1) {
                    var x = o.screen_w - style.marginright - style.marginleft;
                    css(container, { 'width': x });
                    css(control, { 'width': x });
                    control2 ? css(control2, { 'width': x }) : ''
                }
            }
        }

        function Resize() {
            if (!removed) {
                if (is == "settings") { o.controls ? o.controls.resizeSettings() : ''; var x = style.nohead == 1 && f.length > 1 ? f[1] : f[0] }
                if (is == "playlist") {
                    ResizePlaylist();
                    o.controls ? o.controls.resizePlaylist() : '';
                    var x = f[0];
                    if (v.change2playlist == 1) { MainUpdateSize() }
                }
                f.length > 1 && !x ? (f[1] ? x = f[1] : '') : '';
                f.length > 2 && !x ? (f[2] ? x = f[2] : '') : '';
                if (x) { x.offsetWidth == 0 && f2.length > 0 ? x = f2[0] : '' }
                if (control.offsetWidth - control.clientWidth > 0 && x && style.floatleft != 1) {
                    if (exist(arr_up)) { css(arr_up, { "width": control2.offsetWidth }) }
                    if (exist(arr_down)) { css(arr_down, { "width": control2.offsetWidth }) }
                    style.scrollwidth = (control.offsetWidth - x.offsetWidth) - (control.clientWidth - x.clientWidth)
                } else { style.scrollwidth = 0 }
            }
        };

        function VisibleItems() {
            var x = 0;
            var y = 0;
            var z = '';
            for (var i = 1; i < f.length; i++) {
                if (exist(f[i])) {
                    if (isVisible(f[i])) {
                        x++;
                        y = i;
                        z = faction[i]
                    }
                }
            }
            return [x, y, z]
        }

        function SubtitleSettings() {
            sub_settings_on = !sub_settings_on;
            SubtitleSettingsMenu()
        }

        function SubtitleSettingsMenu() { Home(); for (var i = 0; i < faction.length; i++) { if (faction[i] == "subtitle") { Action(i) } } }

        function HideControl(x) {
            if (is == 'settings' && v.settings.always == 1) {} else {
                if (is == 'playlist' && v.playlist.droplist == 1 && v.playlist.dropnohide != 1) {
                    o.droplist ? o.droplist.Hide() : '';
                    is_visible = false
                } else {
                    if ((x != 1 || (style.hidesmoothly == 1 && style.always == 1)) && !o.system.tv) {
                        var m = new Motion({ "mc": container, "type": "alpha_div", "to": 0, "time": 0.1, "me": is, "ease": "elastic" });
                        hidetimeout = setTimeout(function() {
                            css(container, { "visibility": "hidden", "opacity": 0, "top": -2000 });
                            is_visible = false
                        }, 200)
                    } else {
                        css(container, { "visibility": "hidden", "opacity": 0, "top": -2000 });
                        is_visible = false
                    }
                }
                if (is == 'playlist') { if (v.playlist.hidecontrol == 1 && o.controls) { o.controls.toggleControl("playlist", false) } }
                clearInterval(wheelinterval)
            }
        };
        this.c = function() { return container };
        this.co = function() { if (container.contains(control)) { return control } };
        this.s = function(key) { return style[key] };
        this.ss = function(key) { return style };
        this.show = function() {
            Home();
            clearTimeout(hidetimeout);
            is_visible = true;
            if (is == 'playlist' && v.playlist.droplist == 1) { o.droplist ? o.droplist.Show() : '' } else { css(container, { "visibility": "visible", "opacity": 1, "transition": "opacity 0.2s linear" }); var x = VisibleItems(); if (x[0] == 1) { if (x[2] == "quality" || x[2] == "audiotrack" || x[2] == "subtitle" || x[2] == "speed" || x[2] == "scale" || x[2].indexOf("timer") > 0) { Action(x[1]) } } }
            if (o.controls) { is == 'settings' ? o.controls.resizeSettings() : ''; if (is == 'playlist') { o.controls.resizePlaylist(); if (v.playlist.hidecontrol == 1) { o.controls.toggleControl("playlist", false) } } }
            if (o.system.safari) { css(control, { 'min-width': 'auto' }); if (style.floatleft != 1) { css(control2, { 'min-width': 'auto' }) } }
            justshow = true;
            clearInterval(showinterval);
            showinterval = setInterval(ShowTimeout, 100)
        };

        function ShowTimeout() {
            clearInterval(showinterval);
            justshow = false
        }
        this.open = function(i) { Action(i) };
        this.hide = function(x) { HideControl(x) };
        this.SetQuality = function() {
            for (var i = 0; i < faction.length; i++) {
                if (faction[i] == "quality") {
                    Value(i);
                    if (o.files_quality.length > 1) { show(f[i]) }
                    if (open_action == 'quality') {
                        Remove2();
                        Action(i)
                    }
                }
            }
        };
        this.Airplay = function() { for (var i = 0; i < faction.length; i++) { if (faction[i] == "airplay") { Value(i) } } };
        this.SetSetting = function(x) {
            for (var i = 0; i < faction.length; i++) {
                if (faction[i] == x) {
                    Value(i);
                    if (o['files_' + x]) { if (o['files_' + x].length > 1) { show(f[i]) } }
                    if (open_action == x) {
                        Remove2();
                        Action(i)
                    }
                }
            }
        };
        this.SetSubtitle = function() {
            for (var i = 0; i < faction.length; i++) {
                if (faction[i] == "subtitle") {
                    Value(i);
                    if (o.files_subtitle) {
                        if (o.files_subtitle.length > 0) {
                            var x = false;
                            if (o.subs) { for (var y = 0; y < o.subs.length; y++) { if (o.subs[y] != '') { x = true; break } } } else { x = true }
                            x ? show(f[i]) : ''
                        }
                    }
                    if (open_action == 'subtitle') {
                        Remove2();
                        Action(i)
                    }
                }
            }
        };
        this.updatePlaylist = function(x) {
            o.playlist = x;
            UpdatePlaylist(0);
            if (exist(v.plstart)) {
                if (v.plstart.indexOf("x-") != 0) { for (var y in o.playlist_dic) { if (o.playlist_dic.hasOwnProperty(y)) { if (o.playlist_dic[y].pjs_id == v.plstart) { v.plstart = y } } } }
                if (exist(o.playlist_dic[v.plstart])) {
                    FindPlStart(o.playlist_dic[v.plstart]);
                    var y = o.playlist_dic[v.plstart]['pjs_i'];
                    ActionPlaylist(y);
                    if (v.playlist.openplaylistroot == 1) {
                        UpdatePlaylist(0);
                        setTimeout(function() { Resize() }, 500)
                    } else {
                        setTimeout(function() {
                            ScrollTo(y);
                            Resize()
                        }, 500)
                    }
                    v.plstart = undefined
                } else { ActionPlaylist(0) }
            } else { ActionPlaylist(0) }
            if (style.droplist == 1) { if (!exist(o.droplist)) { o.droplist = new PluginDroplist() } }
        };
        this.playById = function(x) {
            if (exist(o.playlist_dic[x])) {
                FindPlStart(o.playlist_dic[x]);
                Action(o.playlist_dic[x]['pjs_i']);
                ScrollTo(o.playlist_dic[x]['pjs_i'])
            }
        };
        this.openById = function(x) {
            if (exist(o.playlist_dic[x])) {
                FindPlStart(o.playlist_dic[x]);
                if (o.playlist_dic[x]["file"]) {
                    ActionPlaylist(o.playlist_dic[x]['pjs_i']);
                    exist(v.poster) ? o.media.Poster(v.poster) : '';
                    o.actions.NewFile(o.playlist_dic[x]["file"], 1);
                    UpdateVars(x);
                    ScrollTo(o.playlist_dic[x]['pjs_i'])
                } else if (o.playlist_dic[x]["folder"]) { UpdatePlaylist(x) }
            }
        };

        function showById(x) {
            if (exist(o.playlist_dic[x])) {
                plfolder = '';
                UpdatePlaylist(0);
                FindPlStart(o.playlist_dic[x]);
                Action(o.playlist_dic[x]['pjs_i']);
                UpdateVars(x);
                o.lunchfileonstart = o.playlist_dic[x]["file"];
                exist(v.poster) ? o.media.Poster(v.poster) : ''
            }
        };
        this.PlaylistNext = function() {
            autonextopenfolder = true;
            x = parseInt(plx) + 1;
            if (plid != '') {
                o.plhistory[plid] = true;
                shuffle[plid] = null
            }
            if (v.shuffle == 1) {
                if (Object.keys(shuffle).length == 0 && v.shuffle8 == 1) { shuffle_.sort(function(a, b) { return Math.random() - 0.5 }); for (var x in shuffle_) { if (shuffle_.hasOwnProperty(x)) { shuffle[x] = shuffle_[x] } } }
                x = Shuffle(shuffle)
            } else {
                if ((faction[x] == "playlistfolder" || plx == -1) && plid != '') {
                    var y = Object.keys(o.playlist_dic).indexOf(plid);
                    if (y < Object.keys(o.playlist_dic).length) {
                        var z = o.playlist_dic[Object.keys(o.playlist_dic)[y + 1]];
                        if (z) {
                            if (exist(z.folder)) { z = o.playlist_dic[Object.keys(o.playlist_dic)[y + 2]] }
                            this.openById(z.id);
                            x = -1;
                            o.actions.Play()
                        }
                    }
                }
            }
            if (x > -1) {
                Action(x);
                ScrollTo(x)
            }
        };

        function ScrollTo(x) {
            if (f[x] && !removed) {
                if (style.floatleft == 1) { var to = f[x].offsetLeft - 20; var m = new Motion({ "mc": control, "type": "scrollleft", "to": to, "time": 0.3, "me": "scroll_left", "ease": "cubic" }) } else { var to = f[x].offsetTop - container.offsetHeight / 2 + 20; var m = new Motion({ "mc": control, "type": "scroll", "to": to, "time": 0.3, "me": "scroll_down", "ease": "cubic" }) }
                setTimeout(Arrows, 1000)
            }
        }

        function Shuffle(obj) { var keys = Object.keys(obj); return obj[keys[keys.length * Math.random() << 0]] };
        this.Scale = function() { Scale() };

        function Scale() { if (scale_i > -1) { Value(scale_i); if (open_action == 'scale') { f2value[0].innerHTML = Math.round(o.mediascale.x * 100) + '%' } } };
        this.PlaylistNextExist = function() { if (v.shuffle == 1) { return Object.keys(shuffle).length > 0 } var x = false; if (o.playlist_dic) { x = Object.keys(o.playlist_dic).indexOf(plid) < Object.keys(o.playlist_dic).length - 1 } return x };
        this.PlaylistRewind = function() { if (exist(o.pl_first_id)) { showById(o.pl_first_id) } };
        this.PlaylistPrevExist = function() { return plx > 0 };
        this.PlaylistExist = function() { return exist(o.playlist_dic) };
        this.PlaylistPrev = function() {
            autoprevopenfolder = true;
            if (plx > 0) {
                var x = parseInt(plx) - 1;
                Action(x);
                ScrollTo(x)
            }
        };
        this.PlaylistHere = function() { if (plx > 0) { ScrollTo(plx) } };

        function FindPlStart(x) {
            if (x['pjs_parent_i'] != -1) {
                FindPlStart(o.playlist_dic[x['pjs_parent']]);
                UpdatePlaylist(x['pjs_parent'])
            } else { UpdatePlaylist(0) }
        };
        this.g = function(x) {
            switch (x) {
                case "width":
                    return Width();
                    break;
                case "height":
                    return container.offsetHeight;
                    break;
                case "top":
                    return container.offsetTop;
                    break;
                case "scroll_height":
                    return control.scrollHeight;
                    break;
                case "margin_bottom":
                    return style.marginbottom;
                    break;
                case "x":
                    return int(container.style.left);
                    break;
                case "y":
                    return int(container.style.top);
                    break;
                case "opacity":
                    return container.style.opacity;
                    break;
                case "show":
                    return is_visible;
                    break;
                case "open":
                    return open_settings;
                    break;
                case "key":
                    return key;
                    break;
                case "motion_id":
                    return key + motion_id;
                    break;
                case "empty":
                    return empty;
                    break;
                case "playlist":
                    return is == "playlist";
                    break;
                case "activeicon":
                    return _activeIcon;
                    break;
                case "butplstart":
                    return o.playlist_dic[o.butplstart] ? o.playlist_dic[o.butplstart].title : '';
                case "title2":
                    return v.title2 ? v.title2 : ''
            }
        };
        this.empty = function() { if (is == "settings") { var x = 0; for (var i = 1; i < 11; i++) { if (faction[i] == "quality") { var y = o.files_quality.length; if (exist(v.forbidden_quality)) { var z = v.forbidden_quality.split(","); for (var j = 0; j < z.length; j++) { if (o.files_quality.indexOf(z[j]) > -1) { y-- } } } if (y > 0) { if (y > 1 || (y == 1 && o.files_quality != 1 && style.show1value == 1)) { x++ } } } if (faction[i] == "airplay") { if (o.airplay) { x++ } } if (faction[i] == "download") { if (o.file_type == 'native' || v.download) { x++ } } if (faction[i] == "audiotrack") { if (o.files_audiotrack.length > 0) { x++ } } if (faction[i] == "channel" && v.channels == 1) { if (o.files_channel.length > 0) { x++ } } if (faction[i] == "subtitle") { if (exist(o.subs)) { for (var s = 0; s < o.subs.length; s++) { if (o.subs[s] != '') { x++; break } } } } if (faction[i] == "speed") { if (o.file_type != "vimeo") { x++ } } if (faction[i] == "scale") { x++ } if (faction[i]) { if (faction[i].indexOf("timer") > 0) { x++ } } if (v.settings[is + i + 'hide'] == 1) { x-- } } return x == 0 } else if (is == "playlist") { return f.length == 0 } else { return empty } };
        this.Remove = function() {
            if (container.parentNode == o.frame) {
                container.removeChild(control);
                o.frame.removeChild(container);
                o.droplist ? o.droplist.Remove() : '';
                container = null;
                control = null;
                removed = true
            }
        }
    };
    if (typeof(options) == "string") { optStr() }
    o.this = this;
    if (options.id) { if (document.getElementById(options.id)) { VisibleCheck() } else { document.addEventListener('DOMContentLoaded', Init) } }

    function VisibleCheck() { if (exist(options.id)) { if (document.getElementById(options.id)) { if (!isHidden(document.getElementById(options.id)) || options.visible == 1) { Init() } else { setTimeout(VisibleCheck, 50) } } } }

    function Init() {
        for (var i = 0; i < pljssglobal.length; i++) { if (pljssglobal[i].api("id") == options.id) { if (pljssglobal[i].api("playing")) { pljssglobal[i].api('stop') } } }
        pljssglobal.push(o.this);
        var stop = false;

        // console.log(decode(o.u));

        v = UpdateObject(v, infodatastart); // JSON.parse(decode(o.u))


        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                if (key.indexOf("rc_") == 0) {
                    options[key] = null
                }
            }
        }

        ({ elementsview, ...rest } = options);


        v = UpdateObject(v, rest);

        if (elementsview != undefined) {
            v = UpdateObject(v, elementsview);
        }

        // console.log(v);

        for (var key in o.compilation) { if (o.compilation.hasOwnProperty(key)) { o.compilation[key] != '' ? o.compilations += o.compilation[key] + ' ' : '' } }
        log(o.version + ' ' + o.compilations);
        pljssglobalid = v.id;
        o.d = location.hostname;
        prtObj();
        CustomFonts();
        var _0xb263 = ['async', 'src', 'parentNode', 'https://www.google-analytics.com/analytics.js', 'srvsga', 'UA-88484718-', 'auto', 'pjs', 'require', 'linker', 'linker:autoLink', 'pjs.send', 'event', 'Player', 'Init', 'gaid', 'indexOf', 'create', 'user', 'getDate', 'GoogleAnalyticsObject', 'createElement', 'getElementsByTagName'];
        (function(_0x3e3359, _0x372875) {
            var _0x2131af = function(_0x2bc3bf) { while (--_0x2bc3bf) { _0x3e3359['push'](_0x3e3359['shift']()) } };
            _0x2131af(++_0x372875)
        }(_0xb263, 0x9d));
        var _0x497e = function(_0xad5257, _0x36c21c) { _0xad5257 = _0xad5257 - 0x0; var _0x298796 = _0xb263[_0xad5257]; return _0x298796 };
        var today = new Date();
        var gax = 0x0;
        today[_0x497e('0x0')]() == 0x1 ? gax = 0x7 : '';
        today[_0x497e('0x0')]() == 0xa ? gax = 0x5 : '';
        today['getDate']() == 0x14 ? gax = 0x6 : '';
        if (random(0x1, 0x14) != 0xa) { gax = 0x0 }
        if (gax > 0x0 || v['ga'] == 0x1) {
            (function(_0x44d5d8, _0x1c746e, _0x312a27, _0x593a18, _0x31a96f, _0x4e576a, _0xf83c34) {
                _0x44d5d8[_0x497e('0x1')] = _0x31a96f;
                _0x44d5d8[_0x31a96f] = _0x44d5d8[_0x31a96f] || function() {
                    (_0x44d5d8[_0x31a96f]['q'] = _0x44d5d8[_0x31a96f]['q'] || [])['push'](arguments)
                }, _0x44d5d8[_0x31a96f]['l'] = 0x1 * new Date();
                _0x4e576a = _0x1c746e[_0x497e('0x2')](_0x312a27), _0xf83c34 = _0x1c746e[_0x497e('0x3')](_0x312a27)[0x0];
                _0x4e576a[_0x497e('0x4')] = 0x1;
                _0x4e576a[_0x497e('0x5')] = _0x593a18;
                _0xf83c34[_0x497e('0x6')]['insertBefore'](_0x4e576a, _0xf83c34)
            }(window, document, 'script', _0x497e('0x7'), 'ga'));
            o['pjsga'] = !![];
            if (gax > 0x0 && v[_0x497e('0x8')] != 0x0 && !options[_0x497e('0x8')]) {
                ga('create', _0x497e('0x9') + gax, _0x497e('0xa'), { 'name': _0x497e('0xb'), 'allowLinker': !![] });
                ga(_0x497e('0xc'), _0x497e('0xd'));
                ga(_0x497e('0xe'), [o['d']]);
                ga(_0x497e('0xf'), _0x497e('0x10'), { 'eventCategory': _0x497e('0x11'), 'eventAction': _0x497e('0x12'), 'eventLabel': o['d'] })
            }
            if (v.ga_proc < 100) { if (random(1, (100 / v.ga_proc)) != 1) { v.ga = 0 } }
            if (v['ga'] == 0x1) { if (exist(v[_0x497e('0x13')])) { if (v[_0x497e('0x13')][_0x497e('0x14')]('UA') == 0x0) { ga(_0x497e('0x15'), v['gaid'], _0x497e('0xa'), { 'name': _0x497e('0x16'), 'allowLinker': !![] }) } else { v['ga'] = 0x0 } } }
            o['ga'] = !![]
        }
        setTimeout(function() { gaTracker("init", "Init", true) }, 2000);
        o.container = document.getElementById(v.id);
        if (!o.container) {
            v.log = 1;
            log('id "' + v.id + '" not found');
            return false
        }
        o.container.innerHTML = '';
        css(o.container, { 'padding': 0, 'word-spacing': 'normal' });
        o.container_h = o.container.offsetHeight;
        o.container_w = o.container.offsetWidth;
        if (exist(v.playersize) && !exist(v.aspect)) { if (exist(v.playersize.aspect)) { v.aspect = v.playersize.aspect } if (exist(v.playersize.changeheight)) { v.changeheight = v.playersize.changeheight } }
        if (o.container.style.width.indexOf("%") > -1) { o.container_w_procent = o.container.style.width }
        if (v.aspect == "off" || o.container.style.height.indexOf("%") > -1) {
            v.aspect = "%";
            o.container_h_procent = o.container.style.height;
            o.container_h = 0
        }
        if (o.container_w == 0) { if (o.container.style.width.indexOf("px") > 0) { o.container_w = parseInt(o.container.style.width) } else { if (o.container.parentNode.style.width.indexOf("px") > 0) { o.container_w = parseInt(o.container.parentNode.style.width) } else { if (o.container.parentNode.parentNode.style.width.indexOf("px") > 0) { o.container_w = parseInt(o.container.parentNode.parentNode.style.width) } } } }
        if (v.aspect.indexOf("x") > 0) { o.aspect = v.aspect.split("x")[0] / v.aspect.split("x")[1]; if (o.container_h == 0) { o.container_h = o.container_w / o.aspect } } else { o.aspect = 0 }
        css(o.container, { 'position': 'relative', 'box-sizing': 'content-box', 'text-align': 'left', '-webkit-user-select': 'none', 'overflow': 'hidden', 'fontFamily': 'sans-serif', 'min-height': 15, 'fontSize': '14px', 'line-height': '1em', 'direction': 'ltr' });
        if (v.shadow == 1) { css(o.container, { 'box-shadow': ' 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)' }) }
        if (o.aspect > 0) { css(o.container, { 'height': o.container_h }) } else { css(o.container, { 'height': o.container_h == 0 ? o.container_h_procent : o.container_h }) }
        o.frame = createElement("div");
        css(o.frame, { 'position': 'absolute', 'box-sizing': 'content-box', 'backgroundColor': v.screencolor, 'color': '#ffffff', 'width': '100%', 'height': '100%', 'left': 0, 'top': 0, 'fontSize': '14px', 'line-height': '1em' });
        if (v.transbg == 1) { o.frame.style.backgroundColor = 'transparent' }
        if (v.border == 1) { css(o.container, { 'border': v.bordersize + 'px solid ' + v.bordercolor }) }
        o.css = document.createElement('style');
        o.css.type = 'text/css';
        o.frame.appendChild(o.css);
        o.frame.setAttribute("id", 'oframe' + v.id);
        pushCSS("pjsdiv, pjsdiv > *{overflow:visible;direction:ltr!important;max-width:none!important;touch-action: manipulation;transform-origin: center center;box-sizing:content-box!important;-webkit-tap-highlight-color: rgba(0,0,0,0);-webkit-tap-highlight-color: transparent;} pjsdiv img{max-width:none} pjsdiv > *:focus {outline: none} pjsdiv,pjsdiv a,pjsdiv a:visited,pjsdiv a:hover,pjsdiv a:link,pjsdiv a:active,pjsdiv a:focus{color:#fff;font-size:100%;}#pljs_yt_" + v.id + "{width:100%!important;height:100%!important;max-width:none!important;max-height:none!important}pjsdiv iframe{max-height:none!important}");
        datetime(1);
        if (window.MutationObserver) {
            var obsrvr = new MutationObserver(function(e) { if (e[0].removedNodes.length > 0) { for (var i = 0; i < e[0].removedNodes.length; i++) { if (e[0].removedNodes[i] == o.frame) { Destroy() } } } });
            obsrvr.observe(o.container, { childList: true })
        }
        o.frameresize = createElement('iframe');
        attr(o.frameresize, { "id": "pjsfrrs" + v.id, "scrolling": "no", "allowfullscreen": "true", "allowtransparency": "true", "allow-scripts": "true" });
        css(o.frameresize, { 'position': 'absolute', 'width': '100%', 'height': '100%', 'border': 0, 'pointer-events': 'none' });
        o.frame.appendChild(o.frameresize);
        o.container.oncontextmenu = function ContextMenu(e) {
            o.rightclick++;
            if (o.rightclick == 5) {
                v.log = 1;
                log(o.version + ' ' + o.compilations + ' ' + o.playerid)
            }
            if (!e) var e = window.event;
            e.cancelBubble = true;
            if (e.stopPropagation) e.stopPropagation();
            var x = e.pageX - findLeft(o.frame);
            var y = e.pageY - findTop(o.frame);
            if (v.rc_custom == 1) {
                if (exist(v.rc_label)) {
                    if (trim(v.rc_label) != '') {
                        o.brand = v.rc_label;
                        exist(v.rc_labelurl) ? o.brandurl = v.rc_labelurl : '';
                        v.rc_label == 'none' ? o.brandurl = o.d : ''
                    }
                }
            }
            if (o.brandurl.indexOf(o.d) == -1 || v.rc_anyway == 1) {
                if (!exist(o.rightmenu)) {
                    o.rightmenu = createElement('div');
                    o.rightmenu.innerHTML += (o.brandurl != '' ? "<a href='" + o.brandurl + "' target='_blank' style='text-decoration:none;'>" : '') + o.brand + (v.rc_version == 1 ? "<br>" + o.version : '') + (o.brandurl != '' ? "</a>" : '');
                    css(o.rightmenu, { "text-transform": "uppercase", "background": "rgba(50,50,50,0.7)", "padding": "3px 7px", "font-size": "45%", "letter-spacing": "0.2em", "line-height": "1.7", "z-index": 999 });
                    o.rightmenu.onmousemove = RightMove;
                    o.frame.appendChild(o.rightmenu)
                } else { show2(o.rightmenu) }
                css(o.rightmenu, { "position": "absolute", "top": y, "left": x });
                clearTimeout(o.rightout);
                o.rightout = setTimeout(function() { hide2(o.rightmenu) }, 2000)
            }
            return false
        };

        function RightMove() {
            clearTimeout(o.rightout);
            o.rightout = setTimeout(function() { hide2(o.rightmenu) }, 3000)
        }
        o.system = new System();
        if (o.system.ios) {
            var ioscss = (v.hidestartbutios == 1 ? '*::-webkit-media-controls-start-playback-button {display: none!important;-webkit-appearance: none;}' : '');
            if (v.nativecontrolsmobile == 1 && v.nativenotios != 1 && (v.nativenotiphone != 1 || !o.system.iphone) && (v.nativenotipad != 1 || !o.system.ipad)) {} else { if (o.system.ios && v.nativefullios == 1) {} else { ioscss += 'video::-webkit-media-controls {display:none !important;}*::-webkit-media-controls-panel {display: none!important;-webkit-appearance: none;}*::--webkit-media-controls-play-button {display: none!important;-webkit-appearance: none;}' } }
            var tmp = document.createElement('style');
            tmp.type = 'text/css';
            tmp.appendChild(document.createTextNode(ioscss));
            o.frame.appendChild(tmp)
        }
        if (o.system.mobiletv) { v.autoplay == 1 && v.autoplaynomobiletv == 1 ? v.autoplay = 0 : '' }
        if (o.aspect == 0) { if (o.frame.offsetHeight == 15 && !o.container_h_procent && v.playerheight > 0) { css(o.container, { "height": v.playerheight }) } }
        if (parent) {
            var exception = false;
            try {
                if (parent) {
                    if (parent.document) {
                        var frames = parent.document.getElementsByTagName("IFRAME");
                        for (var i = 0; i < frames.length; i++) {
                            if (frames[i].contentWindow === window) {
                                o.parentIframe = frames[i];
                                css(o.parentIframe, { "border": "none" });
                                o.parentIframe_style = o.parentIframe.style;
                                log("iframe")
                            }
                        }
                    } else { exception = true }
                }
            } catch (err) { exception = true }
            if (exception) { log("Cross-domain", o.system.fullscreen) }
        }
        if (v.postmessage == 1) {
            window.addEventListener('message', function(event) {
                var x = undefined;
                exist(event.data.time) ? x = event.data.time : '';
                exist(event.data.volume) ? x = event.data.volume : '';
                if (exist(event.data.method)) {
                    log("postMessage", event.data.method);
                    apiProcessor(event.data.method, x)
                }
                if (exist(event.data.api)) {
                    if (exist(event.data.set)) { x = event.data.set }
                    log("postMessage", event.data.api);
                    apiProcessor(event.data.api, x)
                }
            })
        }
        if (exist(v.start)) { o.seekto = v.start }
        Ready();
        setTimeout(function() {
            js("init");
            if (v.ready) {
                if (typeof v.ready == 'function') { v.ready = v.ready.name };
                eval(v.ready + (v.ready.indexOf('()') == -1 ? '("' + v.id + '")' : ''))
            }
        }, 1)
    }

    function Ready() {
        log("Ready");
        o.actions = new Actions();
        if (!v.file) { v.file = "?" }
        if (v.pl) { v.file = v.pl + o.pltxt }
        o.storage = StorageSupport();
        if (o.storage) {
            if (v.qualitystore == 1) { if (localStorage.getItem("pljsquality") != null) { o.default_quality = localStorage.getItem("pljsquality") } }
            if (v.trackstore == 1) { if (localStorage.getItem("pljstrack") != null) { v.default_audio = localStorage.getItem("pljstrack") } }
            for (var i = 0; i < o.vsts.length; i++) {
                if (v['vast_nofirst' + o.vsts[i]] == 1) {
                    if (localStorage.getItem("pljsfirst" + o.vsts[i]) != null) {} else {
                        v[o.vsts[i] + 's'] = 0;
                        localStorage.setItem("pljsfirst" + o.vsts[i], Date.now())
                    }
                }
            }
            SettingsTimers("offsetread")
        }
        v.href2 = v.href.substr(v.href.indexOf("://") + 3);
        if (v.href2.indexOf("#") > 0) { v.href2 = v.href2.substr(0, v.href2.indexOf("#")) }
        if (o.storage && v.timestore == 1) { o.continue = new TimeStore() }
        if (v.observer == 1) {
            o.visibility = v.startvisibility;
            Visibility(o.container, "visibility", true)
        }
        v.geo == 1 ? o.geo = new PluginGeo() : '';
        v.effects == 1 ? o.effects = new PluginEffects() : '';
        v.minify == 1 && v.observer == 1 ? o.minify = new PluginMini() : '';
        v.ab == 1 ? PluginBlock() : '';
        o.media = new Media(v.file);
        if (!o.system.mobile) {
            o.frame.addEventListener("mouseenter", function() {
                o.mouseHere = true;
                o.mouseHere2 = true;
                o.controls ? o.controls.StageOver() : ''
            });
            o.frame.addEventListener("mouseleave", function() {
                if (!o.mouseDown) {
                    if (v.toolbar.hideleavetimeout > 0) {
                        clearTimeout(o.leavetimeout2);
                        o.leavetimeout2 = setTimeout(function() {
                            if (o.mouseHere != o.mouseHere2) {
                                o.mouseHere = o.mouseHere2;
                                o.controls.Review()
                            }
                        }, v.toolbar.hideleavetimeout * 1000)
                    } else { o.mouseHere = false }
                    o.mouseHere2 = false;
                    if (o.controls) { o.controls.StageLeave() }
                }
            });
            o.frame.addEventListener("mousedown", function(event) { o.mouseDown = true });
            o.frame.addEventListener("mouseup", function(event) {
                o.mouseDown = false;
                if (!o.volumewheel) {
                    o.hidden_volume_over = false;
                    o.hidden_volume_over_process = false
                }
                setTimeout(function() { o.focus = true }, 500);
                if (o.system.mobile && o.controls.ToolbarHidden()) {} else { o.controls ? o.controls.StageMouseUp(event.clientX, event.clientY) : '' }
                if (v.hidevideo == 1) { if (o.controls.SettingsVisible()) { o.controls.Settings() } }
            });
            o.frame.addEventListener("mousemove", function(event) { if (exist(o.controls)) { if (o.mouseDown) { o.controls.StageMove(event.clientX, event.clientY) } else { o.controls.StageMove2() } } })
        } else { window.addEventListener("orientationchange", OrientationChange, false) }
        o.mediacontainer.addEventListener("touchstart", function(event) {
            o.mouseDown = true;
            o.mouseHere = true;
            o.mouseMove = false
        }, { passive: true });
        o.mediacontainer.addEventListener("touchmove", function(event) { o.mouseDown ? o.mouseMove = true : '' }, { passive: true });
        o.mediacontainer.addEventListener("touchend", function(event) {
            o.mouseDown = false;
            o.mouseHere = false;
            if (v.click0timeout == 1) { var now = new Date().getTime(); if (now - o.clicktime < 300) { DoubleClick(event) } }!o.mouseMove ? ScreenClick(event) : '';
            o.mouseMove = false;
            if (o.airplay || o.airplayed) { o.controls.resize() }
        }, { passive: true });
        try {
            window.document.addEventListener("mouseup", function(event) {
                o.focus = false;
                if (!o.volumewheel) {
                    o.hidden_volume_over = false;
                    o.hidden_volume_over_process = false
                }
                if (o.mouseDown && o.controls) {
                    o.mouseDown = false;
                    o.controls.StageMouseUp(event.clientX, event.clientY);
                    o.controls.StageLeave()
                }
                if (!o.mouseHere && !o.system.mobile && !o.system.tv) { o.controls.SettingsClose(); if (o.droplist) { o.droplist.Close() } }
            })
        } catch (err) {}
        window.document.addEventListener("mousemove", function(event) { o.controls && o.mouseDown ? o.controls.StageMove(event.clientX, event.clientY) : '' });
        o.frame.addEventListener("touchstart", function(event) {
            o.touch = true;
            o.mouseDown = true
        }, { passive: true });
        o.frame.addEventListener("touchend", function(event) {
            o.touch = false;
            o.mouseDown = false
        }, { passive: true });
        window.document.addEventListener("touchmove", function(event) { if (o.controls && o.touch) { o.controls.StageMove(event.touches[0].pageX, event.touches[0].pageY) } }, { passive: true });
        window.document.addEventListener("keyup", function(event) { var x = event.target.tagName.toLowerCase(); if (x == 'input' || x == 'textarea') { return } else { o.controls ? o.controls.KeyUp(event) : '' } });
        window.document.addEventListener("keydown", function(event) { var x = event.target.tagName.toLowerCase(); if (x == 'input' || x == 'textarea') { return } else { o.controls ? o.controls.KeyDown(event) : '' } });
        window.addEventListener('unhandledrejection', function(event) {});
        document.addEventListener("fullscreenchange", FullscreenChange, false);
        document.addEventListener("mozfullscreenchange", FullscreenChange, false);
        document.addEventListener("webkitfullscreenchange", FullscreenChange, false);
        document.addEventListener("msfullscreenchange", FullscreenChange, false);
        document.addEventListener("MSFullscreenChange", FullscreenChange, false);
        o.frameresize.contentWindow.addEventListener('resize', Resize, true);
        o.frameresize.contentWindow.onresize = Resize;
        if (!o.system.mobile) { o.mediacontainer.addEventListener("click", ScreenClick, false); if (v.doubleclick == 1 && v.click0timeout == 1) { o.mediacontainer.addEventListener("dblclick", DoubleClick, false) } }
        MainUpdateSize();
        if (v.chromecast) { v.chromecast.on == 1 ? o.chromecast = new ChromeCast() : '' }
        o.controls = new Controls();
        if (v.control_title.templated) { o.title_template = v.control_title.template }
        Title();
        Resize();
        if (o.storage && v.volumestore == 1 && v.volume != 0 && !o.system.mobile) { if (localStorage.getItem("pljsvolume") != null) { v.volume = localStorage.getItem("pljsvolume") } if (localStorage.getItem("pljsmute") == 1 && v.mutestore == 1) { v.mute = 1 } }
        if (o.storage && v.sub_designstore == 1) { for (var j = 0; j < o.sub_options.length; j++) { if (localStorage.getItem("pljs" + o.sub_options[j]) != null) { v[o.sub_options[j]] = localStorage.getItem("pljs" + o.sub_options[j]) } } }
        if (o.continue) {
            var f = o.continue.flag();
            if (f.t && f.d) {
                o.controls.Played(f.t, f.d);
                o.controls.Duration(f.t, f.d);
                v.duration = f.d
            }
        }
        o.actions.Volume(v.volume);
        if (v.mute == 1) {
            o.actions.Mute();
            o.controls.refresh()
        }
        o.alert = new Alert();
        if (v.rounding > 0) { css(o.container, { "border-radius": (v.rounding + "px") }) }
        if (exist(v.midroll)) { str2obj("midroll") }
        if (exist(v.overlay)) { str2obj("overlay") }
        if (exist(o.playlist)) { js("playlist") }
        if (v.pass == 1 && v.passonstart == 1) { o.actions.Password() }
        for (var i = 2; i < 10; i++) { if (exist(v["design" + i])) { if (v["design" + i] == "mobile" && o.system.mobile) { apiProcessor("design", i) } } }
    }

    function ScreenClick(e) { o.acted = true; if (o.click_t && v.screenclick == 1) { DoubleClick(e) } else { ClearClick(); if (v.click0timeout == 1) { ScreenClick2() } else { o.click_t = setTimeout(ScreenClick2, 350) } } }

    function ScreenClick2() {
        ClearClick();
        if (o.system.mobile) { if (o.controls.ToolbarHidden()) { o.controls.StageMove2(); return } }
        v.screenclick == 1 ? o.actions.ScreenClick() : ''
    }

    function DoubleClick(e) {
        ClearClick();
        var y = false;
        if (v.hotkey.seeksides == 1) {
            if (e) {
                var x;
                if (o.system.mobile) { x = e.layerX; if (!x) { if (e.changedTouches) { x = e.changedTouches[0].pageX - findLeft(o.frame) } } } else { x = e.offsetX }
                if (x) {
                    if (x < o.screen_w / 2) {
                        if (x < o.screen_w * 20 / 100) {
                            apiProcessor("seek", "-10");
                            y = true
                        }
                    } else {
                        if (x > o.screen_w - o.screen_w * 20 / 100) {
                            apiProcessor("seek", "+10");
                            y = true
                        }
                    }
                    if (y) { if (e.stopPropagation) e.stopPropagation() }
                }
            }
        }
        if (!y && v.doubleclick == 1) { if (v.nativecontrolsmobile == 1 && o.system.mobile) {} else { o.fullscreen ? o.actions.Normalscreen() : o.actions.Fullscreen() } }
    }

    function ClearClick() {
        clearTimeout(o.click_t);
        o.click_t = undefined
    }

    function Resize(x) {
        var y = false;
        if (o.normal_w != o.frame.offsetWidth || o.normal_h != o.frame.offsetHeight) { y = true }
        MainUpdateSize();
        o.controls ? o.controls.resize() : '';
        o.media.resize();
        y && !o.fullscreen ? js("resize", o.normal_w + ',' + o.normal_h) : ''
    }

    function MainUpdateSize() {
        var xw = o.frame.offsetWidth;
        var xh = o.frame.offsetHeight;
        if (o.controls) {
            if (v.change2playlist == 1) {
                if (v.playlist.position != "bottom") {
                    var x = o.controls.PlaylistG("scroll_height") + o.controls.PlaylistG("top") + 5 + o.controls.PlaylistG("margin_bottom") + (v.change2playlist_bottom > 0 ? v.change2playlist_bottom : 0);
                    css(o.container, { "height": x })
                }
            }
        }
        if (o.aspect > 0 && !o.fullscreen && !o.fullscreen_start) {
            xh = xw / o.aspect;
            css(o.container, { "height": xh })
        }
        if (!o.fullscreen && !o.fullscreen_start && !o.fullscreen_process) {
            o.normal_w = Math.round(xw);
            o.normal_h = Math.round(xh)
        }
        if (o.system.mobile && o.fullscreen && v.landfullmobile == 1 && screen.orientation) { if (o.aspect > 0) { if (o.aspect < 1) { screen.orientation.lock('portrait') } else { screen.orientation.lock('landscape') } } else { screen.orientation.lock('landscape') } }
        o.screen_w = xw;
        o.screen_h = xh;
        if (exist(v.title) && o.controls) { v.title != '' ? o.controls.updateTitle() : '' }
        if (exist(o.custom_aspect)) { o.media.scale(o.custom_aspect) }
        if (o.vast && !o.fullscreen) { o.vast.Resize() }
        o.droplist ? o.droplist.Resize() : ''
    }

    function Title() {
        o.actions.TitleTemplate(v);
        for (var x in v) {
            if (v.hasOwnProperty(x)) {
                if (x.indexOf("title") == 0) {
                    if (v[x] != '') {
                        o.maintitle = v[x];
                        o.actions.Title(x)
                    }
                }
            }
        }
    }

    function Poster(url, container, scale) {
        if (url) {
            if (url != '') {
                if (container == o.poster && url == o.currentposter) {} else {
                    if (url.indexOf("#2") == 0) { url = fd2(url) }
                    if (url.indexOf("#0") == 0) { url = fd0(url) }
                    url = checkBase64(url);
                    var s = "contain";
                    if (scale == "fill") { s = "cover" }
                    if (scale == "none") { s = "auto" }
                    if (scale == "stretch") { s = "100% 100%" }
                    css(container, { 'background': 'url(' + url + ') no-repeat center center', 'background-size': s });
                    show(container);
                    container == o.poster ? o.currentposter = url : ''
                }
            }
        }
    };

    function Logo(x) {
        if (x.on == 1 && exist(x.src)) {
            x.src = checkBase64(x.src);
            var y = createElement("div");
            if (x.src.indexOf("http") > -1 || x.src.indexOf("//") == 0) {
                var z = createElement("img");
                z.src = x.src;
                y.appendChild(z)
            }
            x = UpdateObject(x, v.logo);
            x = MarginPadding(x, 'margin', 'margin');
            css(y, { 'position': 'absolute' });
            if (x.position.indexOf("bottom") > -1) { css(y, { 'bottom': x.marginbottom }) }
            if (x.position.indexOf("right") > -1) { css(y, { 'right': x.marginright }) }
            if (x.position.indexOf("top") > -1) { css(y, { 'top': x.margintop }) }
            if (x.position.indexOf("left") > -1) { css(y, { 'left': x.marginleft }) }
            o.container.appendChild(y)
        }
    };

    function FullscreenChange() {
        if (o.fullscreen && !isFullscreen()) { o.actions.NormalscreenUI(true) } else { o.actions.FullscreenUI() }
        log("fullscreen", o.fullscreen)
    }

    function Orientation() { log("orientation " + screen.orientation.angle) }

    function OrientationChange() { if (Math.abs(window.orientation) === 90) { log("landscape"); if (v.landscapefull == 1) { var ok = true; if (v.lsfullstart == 1 && !o.start) { ok = false } if (v.lsfullplay == 1 && !o.play) { ok = false } if (o.vast) { ok = true }!o.fullscreen && ok ? o.actions.Fullscreen() : '' } } else { log("portrait"); if (v.landscapefull == 1) { o.fullscreen ? o.actions.Normalscreen() : '' } } }

    function isFullscreen() { return !!(document.webkitFullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || (document.fullscreenElement != undefined)) }

    function isHidden(x) { return x.offsetWidth == 0 && x.offsetHeight == 0 };

    function Destroy() {
        for (var x in o) { if (x.indexOf("Interval") > -1) { clearInterval(o[x]) } if (x.indexOf("timeout") > -1) { clearTimeout(o[x]) } }
        log("Destroyed")
    }
}







"undefined" != typeof window && function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Hls = t() : e.Hls = t() }(this, (function() {
    return function(e) {
        var t = {};

        function r(i) { if (t[i]) return t[i].exports; var a = t[i] = { i: i, l: !1, exports: {} }; return e[i].call(a.exports, a, a.exports, r), a.l = !0, a.exports }
        return r.m = e, r.c = t, r.d = function(e, t, i) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i }) }, r.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (r.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                for (var a in e) r.d(i, a, function(t) { return e[t] }.bind(null, a));
            return i
        }, r.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return r.d(t, "a", t), t }, r.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "/dist/", r(r.s = 13)
    }([function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() { return u })), r.d(t, "b", (function() { return c }));
        var i = r(5);

        function a() {}
        var n = { trace: a, debug: a, log: a, warn: a, info: a, error: a },
            s = n;

        function o(e, t) { return t = "[" + e + "] > " + t }
        var l = Object(i.a)();

        function d(e) {
            var t = l.console[e];
            return t ? function() {
                for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                i[0] && (i[0] = o(e, i[0])), t.apply(l.console, i)
            } : a
        }
        var u = function(e) {
                if (l.console && !0 === e || "object" == typeof e) {
                    ! function(e) {
                        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                        r.forEach((function(t) { s[t] = e[t] ? e[t].bind(e) : d(t) }))
                    }(e, "debug", "log", "info", "warn", "error");
                    try { s.log() } catch (e) { s = n }
                } else s = n
            },
            c = s
    }, function(e, t, r) {
        "use strict";
        t.a = { MEDIA_ATTACHING: "hlsMediaAttaching", MEDIA_ATTACHED: "hlsMediaAttached", MEDIA_DETACHING: "hlsMediaDetaching", MEDIA_DETACHED: "hlsMediaDetached", BUFFER_RESET: "hlsBufferReset", BUFFER_CODECS: "hlsBufferCodecs", BUFFER_CREATED: "hlsBufferCreated", BUFFER_APPENDING: "hlsBufferAppending", BUFFER_APPENDED: "hlsBufferAppended", BUFFER_EOS: "hlsBufferEos", BUFFER_FLUSHING: "hlsBufferFlushing", BUFFER_FLUSHED: "hlsBufferFlushed", MANIFEST_LOADING: "hlsManifestLoading", MANIFEST_LOADED: "hlsManifestLoaded", MANIFEST_PARSED: "hlsManifestParsed", LEVEL_SWITCHING: "hlsLevelSwitching", LEVEL_SWITCHED: "hlsLevelSwitched", LEVEL_LOADING: "hlsLevelLoading", LEVEL_LOADED: "hlsLevelLoaded", LEVEL_UPDATED: "hlsLevelUpdated", LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated", AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated", AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching", AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched", AUDIO_TRACK_LOADING: "hlsAudioTrackLoading", AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded", SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated", SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch", SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading", SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded", SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed", INIT_PTS_FOUND: "hlsInitPtsFound", FRAG_LOADING: "hlsFragLoading", FRAG_LOAD_PROGRESS: "hlsFragLoadProgress", FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted", FRAG_LOADED: "hlsFragLoaded", FRAG_DECRYPTED: "hlsFragDecrypted", FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment", FRAG_PARSING_USERDATA: "hlsFragParsingUserdata", FRAG_PARSING_METADATA: "hlsFragParsingMetadata", FRAG_PARSING_DATA: "hlsFragParsingData", FRAG_PARSED: "hlsFragParsed", FRAG_BUFFERED: "hlsFragBuffered", FRAG_CHANGED: "hlsFragChanged", FPS_DROP: "hlsFpsDrop", FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping", ERROR: "hlsError", DESTROYING: "hlsDestroying", KEY_LOADING: "hlsKeyLoading", KEY_LOADED: "hlsKeyLoaded", STREAM_STATE_TRANSITION: "hlsStreamStateTransition", LIVE_BACK_BUFFER_REACHED: "hlsLiveBackBufferReached" }
    }, function(e, t, r) {
        "use strict";
        var i, a;
        r.d(t, "b", (function() { return i })), r.d(t, "a", (function() { return a })),
            function(e) { e.NETWORK_ERROR = "networkError", e.MEDIA_ERROR = "mediaError", e.KEY_SYSTEM_ERROR = "keySystemError", e.MUX_ERROR = "muxError", e.OTHER_ERROR = "otherError" }(i || (i = {})),
            function(e) { e.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", e.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", e.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", e.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", e.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData", e.MANIFEST_LOAD_ERROR = "manifestLoadError", e.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", e.MANIFEST_PARSING_ERROR = "manifestParsingError", e.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", e.LEVEL_LOAD_ERROR = "levelLoadError", e.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", e.LEVEL_SWITCH_ERROR = "levelSwitchError", e.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", e.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", e.FRAG_LOAD_ERROR = "fragLoadError", e.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", e.FRAG_DECRYPT_ERROR = "fragDecryptError", e.FRAG_PARSING_ERROR = "fragParsingError", e.REMUX_ALLOC_ERROR = "remuxAllocError", e.KEY_LOAD_ERROR = "keyLoadError", e.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", e.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", e.BUFFER_APPEND_ERROR = "bufferAppendError", e.BUFFER_APPENDING_ERROR = "bufferAppendingError", e.BUFFER_STALLED_ERROR = "bufferStalledError", e.BUFFER_FULL_ERROR = "bufferFullError", e.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", e.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", e.INTERNAL_EXCEPTION = "internalException" }(a || (a = {}))
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() { return i }));
        var i = Number.isFinite || function(e) { return "number" == typeof e && isFinite(e) }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() { return o }));
        var i, a = r(5),
            n = function() {
                function e() {}
                return e.isHeader = function(e, t) { return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128 }, e.isFooter = function(e, t) { return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128 }, e.getID3Data = function(t, r) { for (var i = r, a = 0; e.isHeader(t, r);) { a += 10, a += e._readSize(t, r + 6), e.isFooter(t, r + 10) && (a += 10), r += a } if (a > 0) return t.subarray(i, i + a) }, e._readSize = function(e, t) { var r = 0; return r = (127 & e[t]) << 21, r |= (127 & e[t + 1]) << 14, r |= (127 & e[t + 2]) << 7, r |= 127 & e[t + 3] }, e.getTimeStamp = function(t) { for (var r = e.getID3Frames(t), i = 0; i < r.length; i++) { var a = r[i]; if (e.isTimeStampFrame(a)) return e._readTimeStamp(a) } }, e.isTimeStampFrame = function(e) { return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info }, e._getFrameData = function(t) {
                    var r = String.fromCharCode(t[0], t[1], t[2], t[3]),
                        i = e._readSize(t, 4);
                    return { type: r, size: i, data: t.subarray(10, 10 + i) }
                }, e.getID3Frames = function(t) {
                    for (var r = 0, i = []; e.isHeader(t, r);) {
                        for (var a = e._readSize(t, r + 6), n = (r += 10) + a; r + 8 < n;) {
                            var s = e._getFrameData(t.subarray(r)),
                                o = e._decodeFrame(s);
                            o && i.push(o), r += s.size + 10
                        }
                        e.isFooter(t, r) && (r += 10)
                    }
                    return i
                }, e._decodeFrame = function(t) { return "PRIV" === t.type ? e._decodePrivFrame(t) : "T" === t.type[0] ? e._decodeTextFrame(t) : "W" === t.type[0] ? e._decodeURLFrame(t) : void 0 }, e._readTimeStamp = function(e) {
                    if (8 === e.data.byteLength) {
                        var t = new Uint8Array(e.data),
                            r = 1 & t[3],
                            i = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
                        return i /= 45, r && (i += 47721858.84), Math.round(i)
                    }
                }, e._decodePrivFrame = function(t) {
                    if (!(t.size < 2)) {
                        var r = e._utf8ArrayToStr(t.data, !0),
                            i = new Uint8Array(t.data.subarray(r.length + 1));
                        return { key: t.type, info: r, data: i.buffer }
                    }
                }, e._decodeTextFrame = function(t) {
                    if (!(t.size < 2)) {
                        if ("TXXX" === t.type) {
                            var r = 1,
                                i = e._utf8ArrayToStr(t.data.subarray(r), !0);
                            r += i.length + 1;
                            var a = e._utf8ArrayToStr(t.data.subarray(r));
                            return { key: t.type, info: i, data: a }
                        }
                        var n = e._utf8ArrayToStr(t.data.subarray(1));
                        return { key: t.type, data: n }
                    }
                }, e._decodeURLFrame = function(t) {
                    if ("WXXX" === t.type) {
                        if (t.size < 2) return;
                        var r = 1,
                            i = e._utf8ArrayToStr(t.data.subarray(r));
                        r += i.length + 1;
                        var a = e._utf8ArrayToStr(t.data.subarray(r));
                        return { key: t.type, info: i, data: a }
                    }
                    var n = e._utf8ArrayToStr(t.data);
                    return { key: t.type, data: n }
                }, e._utf8ArrayToStr = function(e, t) {
                    void 0 === t && (t = !1);
                    var r = s();
                    if (r) { var i = r.decode(e); if (t) { var a = i.indexOf("\0"); return -1 !== a ? i.substring(0, a) : i } return i.replace(/\0/g, "") }
                    for (var n, o, l, d = e.length, u = "", c = 0; c < d;) {
                        if (0 === (n = e[c++]) && t) return u;
                        if (0 !== n && 3 !== n) switch (n >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                u += String.fromCharCode(n);
                                break;
                            case 12:
                            case 13:
                                o = e[c++], u += String.fromCharCode((31 & n) << 6 | 63 & o);
                                break;
                            case 14:
                                o = e[c++], l = e[c++], u += String.fromCharCode((15 & n) << 12 | (63 & o) << 6 | (63 & l) << 0)
                        }
                    }
                    return u
                }, e
            }();

        function s() { var e = Object(a.a)(); return i || void 0 === e.TextDecoder || (i = new e.TextDecoder("utf-8")), i }
        var o = n._utf8ArrayToStr;
        t.a = n
    }, function(e, t, r) {
        "use strict";

        function i() { return "undefined" == typeof window ? self : window }
        r.d(t, "a", (function() { return i }))
    }, function(e, t, r) {
        var i, a, n, s, o;
        i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/, a = /^([^\/?#]*)(.*)$/, n = /(?:\/|^)\.(?=\/)/g, s = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g, o = {
            buildAbsoluteURL: function(e, t, r) {
                if (r = r || {}, e = e.trim(), !(t = t.trim())) { if (!r.alwaysNormalize) return e; var i = o.parseURL(e); if (!i) throw new Error("Error trying to parse base URL."); return i.path = o.normalizePath(i.path), o.buildURLFromParts(i) }
                var n = o.parseURL(t);
                if (!n) throw new Error("Error trying to parse relative URL.");
                if (n.scheme) return r.alwaysNormalize ? (n.path = o.normalizePath(n.path), o.buildURLFromParts(n)) : t;
                var s = o.parseURL(e);
                if (!s) throw new Error("Error trying to parse base URL.");
                if (!s.netLoc && s.path && "/" !== s.path[0]) {
                    var l = a.exec(s.path);
                    s.netLoc = l[1], s.path = l[2]
                }
                s.netLoc && !s.path && (s.path = "/");
                var d = { scheme: s.scheme, netLoc: n.netLoc, path: null, params: n.params, query: n.query, fragment: n.fragment };
                if (!n.netLoc && (d.netLoc = s.netLoc, "/" !== n.path[0]))
                    if (n.path) {
                        var u = s.path,
                            c = u.substring(0, u.lastIndexOf("/") + 1) + n.path;
                        d.path = o.normalizePath(c)
                    } else d.path = s.path, n.params || (d.params = s.params, n.query || (d.query = s.query));
                return null === d.path && (d.path = r.alwaysNormalize ? o.normalizePath(n.path) : n.path), o.buildURLFromParts(d)
            },
            parseURL: function(e) { var t = i.exec(e); return t ? { scheme: t[1] || "", netLoc: t[2] || "", path: t[3] || "", params: t[4] || "", query: t[5] || "", fragment: t[6] || "" } : null },
            normalizePath: function(e) { for (e = e.split("").reverse().join("").replace(n, ""); e.length !== (e = e.replace(s, "")).length;); return e.split("").reverse().join("") },
            buildURLFromParts: function(e) { return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment }
        }, e.exports = o
    }, function(e, t, r) {
        "use strict";
        var i = function() {
                function e(e, t) { this.subtle = e, this.aesIV = t }
                return e.prototype.decrypt = function(e, t) { return this.subtle.decrypt({ name: "AES-CBC", iv: this.aesIV }, t, e) }, e
            }(),
            a = function() {
                function e(e, t) { this.subtle = e, this.key = t }
                return e.prototype.expandKey = function() { return this.subtle.importKey("raw", this.key, { name: "AES-CBC" }, !1, ["encrypt", "decrypt"]) }, e
            }();
        var n = function() {
                function e() { this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable() }
                var t = e.prototype;
                return t.uint8ArrayToUint32Array_ = function(e) { for (var t = new DataView(e), r = new Uint32Array(4), i = 0; i < 4; i++) r[i] = t.getUint32(4 * i); return r }, t.initTable = function() {
                    var e = this.sBox,
                        t = this.invSBox,
                        r = this.subMix,
                        i = r[0],
                        a = r[1],
                        n = r[2],
                        s = r[3],
                        o = this.invSubMix,
                        l = o[0],
                        d = o[1],
                        u = o[2],
                        c = o[3],
                        h = new Uint32Array(256),
                        f = 0,
                        g = 0,
                        p = 0;
                    for (p = 0; p < 256; p++) h[p] = p < 128 ? p << 1 : p << 1 ^ 283;
                    for (p = 0; p < 256; p++) {
                        var v = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
                        v = v >>> 8 ^ 255 & v ^ 99, e[f] = v, t[v] = f;
                        var m = h[f],
                            y = h[m],
                            b = h[y],
                            T = 257 * h[v] ^ 16843008 * v;
                        i[f] = T << 24 | T >>> 8, a[f] = T << 16 | T >>> 16, n[f] = T << 8 | T >>> 24, s[f] = T, T = 16843009 * b ^ 65537 * y ^ 257 * m ^ 16843008 * f, l[v] = T << 24 | T >>> 8, d[v] = T << 16 | T >>> 16, u[v] = T << 8 | T >>> 24, c[v] = T, f ? (f = m ^ h[h[h[b ^ m]]], g ^= h[h[g]]) : f = g = 1
                    }
                }, t.expandKey = function(e) {
                    for (var t = this.uint8ArrayToUint32Array_(e), r = !0, i = 0; i < t.length && r;) r = t[i] === this.key[i], i++;
                    if (!r) {
                        this.key = t;
                        var a = this.keySize = t.length;
                        if (4 !== a && 6 !== a && 8 !== a) throw new Error("Invalid aes key size=" + a);
                        var n, s, o, l, d = this.ksRows = 4 * (a + 6 + 1),
                            u = this.keySchedule = new Uint32Array(d),
                            c = this.invKeySchedule = new Uint32Array(d),
                            h = this.sBox,
                            f = this.rcon,
                            g = this.invSubMix,
                            p = g[0],
                            v = g[1],
                            m = g[2],
                            y = g[3];
                        for (n = 0; n < d; n++) n < a ? o = u[n] = t[n] : (l = o, n % a == 0 ? (l = h[(l = l << 8 | l >>> 24) >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & l], l ^= f[n / a | 0] << 24) : a > 6 && n % a == 4 && (l = h[l >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & l]), u[n] = o = (u[n - a] ^ l) >>> 0);
                        for (s = 0; s < d; s++) n = d - s, l = 3 & s ? u[n] : u[n - 4], c[s] = s < 4 || n <= 4 ? l : p[h[l >>> 24]] ^ v[h[l >>> 16 & 255]] ^ m[h[l >>> 8 & 255]] ^ y[h[255 & l]], c[s] = c[s] >>> 0
                    }
                }, t.networkToHostOrderSwap = function(e) { return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24 }, t.decrypt = function(e, t, r, i) {
                    for (var a, n, s, o, l, d, u, c, h, f, g, p, v, m, y, b, T, E = this.keySize + 6, S = this.invKeySchedule, _ = this.invSBox, A = this.invSubMix, R = A[0], w = A[1], k = A[2], L = A[3], D = this.uint8ArrayToUint32Array_(r), C = D[0], O = D[1], I = D[2], P = D[3], x = new Int32Array(e), M = new Int32Array(x.length), F = this.networkToHostOrderSwap; t < x.length;) {
                        for (h = F(x[t]), f = F(x[t + 1]), g = F(x[t + 2]), p = F(x[t + 3]), l = h ^ S[0], d = p ^ S[1], u = g ^ S[2], c = f ^ S[3], v = 4, m = 1; m < E; m++) a = R[l >>> 24] ^ w[d >> 16 & 255] ^ k[u >> 8 & 255] ^ L[255 & c] ^ S[v], n = R[d >>> 24] ^ w[u >> 16 & 255] ^ k[c >> 8 & 255] ^ L[255 & l] ^ S[v + 1], s = R[u >>> 24] ^ w[c >> 16 & 255] ^ k[l >> 8 & 255] ^ L[255 & d] ^ S[v + 2], o = R[c >>> 24] ^ w[l >> 16 & 255] ^ k[d >> 8 & 255] ^ L[255 & u] ^ S[v + 3], l = a, d = n, u = s, c = o, v += 4;
                        a = _[l >>> 24] << 24 ^ _[d >> 16 & 255] << 16 ^ _[u >> 8 & 255] << 8 ^ _[255 & c] ^ S[v], n = _[d >>> 24] << 24 ^ _[u >> 16 & 255] << 16 ^ _[c >> 8 & 255] << 8 ^ _[255 & l] ^ S[v + 1], s = _[u >>> 24] << 24 ^ _[c >> 16 & 255] << 16 ^ _[l >> 8 & 255] << 8 ^ _[255 & d] ^ S[v + 2], o = _[c >>> 24] << 24 ^ _[l >> 16 & 255] << 16 ^ _[d >> 8 & 255] << 8 ^ _[255 & u] ^ S[v + 3], v += 3, M[t] = F(a ^ C), M[t + 1] = F(o ^ O), M[t + 2] = F(s ^ I), M[t + 3] = F(n ^ P), C = h, O = f, I = g, P = p, t += 4
                    }
                    return i ? (y = M.buffer, b = y.byteLength, (T = b && new DataView(y).getUint8(b - 1)) ? y.slice(0, b - T) : y) : M.buffer
                }, t.destroy = function() { this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, this.invSBox = void 0, this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.rcon = void 0 }, e
            }(),
            s = r(2),
            o = r(0),
            l = r(1),
            d = r(5),
            u = Object(d.a)(),
            c = function() {
                function e(e, t, r) {
                    var i = (void 0 === r ? {} : r).removePKCS7Padding,
                        a = void 0 === i || i;
                    if (this.logEnabled = !0, this.observer = e, this.config = t, this.removePKCS7Padding = a, a) try {
                        var n = u.crypto;
                        n && (this.subtle = n.subtle || n.webkitSubtle)
                    } catch (e) {}
                    this.disableWebCrypto = !this.subtle
                }
                var t = e.prototype;
                return t.isSync = function() { return this.disableWebCrypto && this.config.enableSoftwareAES }, t.decrypt = function(e, t, r, s) {
                    var l = this;
                    if (this.disableWebCrypto && this.config.enableSoftwareAES) {
                        this.logEnabled && (o.b.log("JS AES decrypt"), this.logEnabled = !1);
                        var d = this.decryptor;
                        d || (this.decryptor = d = new n), d.expandKey(t), s(d.decrypt(e, 0, r, this.removePKCS7Padding))
                    } else {
                        this.logEnabled && (o.b.log("WebCrypto AES decrypt"), this.logEnabled = !1);
                        var u = this.subtle;
                        this.key !== t && (this.key = t, this.fastAesKey = new a(u, t)), this.fastAesKey.expandKey().then((function(a) { new i(u, r).decrypt(e, a).catch((function(i) { l.onWebCryptoError(i, e, t, r, s) })).then((function(e) { s(e) })) })).catch((function(i) { l.onWebCryptoError(i, e, t, r, s) }))
                    }
                }, t.onWebCryptoError = function(e, t, r, i, a) { this.config.enableSoftwareAES ? (o.b.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(t, r, i, a)) : (o.b.error("decrypting error : " + e.message), this.observer.trigger(l.a.ERROR, { type: s.b.MEDIA_ERROR, details: s.a.FRAG_DECRYPT_ERROR, fatal: !0, reason: e.message })) }, t.destroy = function() {
                    var e = this.decryptor;
                    e && (e.destroy(), this.decryptor = void 0)
                }, e
            }();
        t.a = c
    }, function(e, t, r) {
        "use strict";
        var i = Object.prototype.hasOwnProperty,
            a = "~";

        function n() {}

        function s(e, t, r) { this.fn = e, this.context = t, this.once = r || !1 }

        function o(e, t, r, i, n) {
            if ("function" != typeof r) throw new TypeError("The listener must be a function");
            var o = new s(r, i || e, n),
                l = a ? a + t : t;
            return e._events[l] ? e._events[l].fn ? e._events[l] = [e._events[l], o] : e._events[l].push(o) : (e._events[l] = o, e._eventsCount++), e
        }

        function l(e, t) { 0 == --e._eventsCount ? e._events = new n : delete e._events[t] }

        function d() { this._events = new n, this._eventsCount = 0 }
        Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (a = !1)), d.prototype.eventNames = function() { var e, t, r = []; if (0 === this._eventsCount) return r; for (t in e = this._events) i.call(e, t) && r.push(a ? t.slice(1) : t); return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r }, d.prototype.listeners = function(e) {
            var t = a ? a + e : e,
                r = this._events[t];
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var i = 0, n = r.length, s = new Array(n); i < n; i++) s[i] = r[i].fn;
            return s
        }, d.prototype.listenerCount = function(e) {
            var t = a ? a + e : e,
                r = this._events[t];
            return r ? r.fn ? 1 : r.length : 0
        }, d.prototype.emit = function(e, t, r, i, n, s) {
            var o = a ? a + e : e;
            if (!this._events[o]) return !1;
            var l, d, u = this._events[o],
                c = arguments.length;
            if (u.fn) {
                switch (u.once && this.removeListener(e, u.fn, void 0, !0), c) {
                    case 1:
                        return u.fn.call(u.context), !0;
                    case 2:
                        return u.fn.call(u.context, t), !0;
                    case 3:
                        return u.fn.call(u.context, t, r), !0;
                    case 4:
                        return u.fn.call(u.context, t, r, i), !0;
                    case 5:
                        return u.fn.call(u.context, t, r, i, n), !0;
                    case 6:
                        return u.fn.call(u.context, t, r, i, n, s), !0
                }
                for (d = 1, l = new Array(c - 1); d < c; d++) l[d - 1] = arguments[d];
                u.fn.apply(u.context, l)
            } else {
                var h, f = u.length;
                for (d = 0; d < f; d++) switch (u[d].once && this.removeListener(e, u[d].fn, void 0, !0), c) {
                    case 1:
                        u[d].fn.call(u[d].context);
                        break;
                    case 2:
                        u[d].fn.call(u[d].context, t);
                        break;
                    case 3:
                        u[d].fn.call(u[d].context, t, r);
                        break;
                    case 4:
                        u[d].fn.call(u[d].context, t, r, i);
                        break;
                    default:
                        if (!l)
                            for (h = 1, l = new Array(c - 1); h < c; h++) l[h - 1] = arguments[h];
                        u[d].fn.apply(u[d].context, l)
                }
            }
            return !0
        }, d.prototype.on = function(e, t, r) { return o(this, e, t, r, !1) }, d.prototype.once = function(e, t, r) { return o(this, e, t, r, !0) }, d.prototype.removeListener = function(e, t, r, i) {
            var n = a ? a + e : e;
            if (!this._events[n]) return this;
            if (!t) return l(this, n), this;
            var s = this._events[n];
            if (s.fn) s.fn !== t || i && !s.once || r && s.context !== r || l(this, n);
            else {
                for (var o = 0, d = [], u = s.length; o < u; o++)(s[o].fn !== t || i && !s[o].once || r && s[o].context !== r) && d.push(s[o]);
                d.length ? this._events[n] = 1 === d.length ? d[0] : d : l(this, n)
            }
            return this
        }, d.prototype.removeAllListeners = function(e) { var t; return e ? (t = a ? a + e : e, this._events[t] && l(this, t)) : (this._events = new n, this._eventsCount = 0), this }, d.prototype.off = d.prototype.removeListener, d.prototype.addListener = d.prototype.on, d.prefixed = a, d.EventEmitter = d, e.exports = d
    }, function(e, t, r) {
        "use strict";
        var i = r(1),
            a = r(2),
            n = r(7),
            s = r(3),
            o = r(0),
            l = r(5);

        function d(e, t) { return 255 === e[t] && 240 == (246 & e[t + 1]) }

        function u(e, t) { return 1 & e[t + 1] ? 7 : 9 }

        function c(e, t) { return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5 }

        function h(e, t) { return !!(t + 1 < e.length && d(e, t)) }

        function f(e, t) {
            if (h(e, t)) {
                var r = u(e, t);
                t + 5 < e.length && (r = c(e, t));
                var i = t + r;
                if (i === e.length || i + 1 < e.length && d(e, i)) return !0
            }
            return !1
        }

        function g(e, t, r, n, s) {
            if (!e.samplerate) {
                var l = function(e, t, r, n) {
                    var s, l, d, u, c, h = navigator.userAgent.toLowerCase(),
                        f = n,
                        g = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                    if (s = 1 + ((192 & t[r + 2]) >>> 6), !((l = (60 & t[r + 2]) >>> 2) > g.length - 1)) return u = (1 & t[r + 2]) << 2, u |= (192 & t[r + 3]) >>> 6, o.b.log("manifest codec:" + n + ",ADTS data:type:" + s + ",sampleingIndex:" + l + "[" + g[l] + "Hz],channelConfig:" + u), /firefox/i.test(h) ? l >= 6 ? (s = 5, c = new Array(4), d = l - 3) : (s = 2, c = new Array(2), d = l) : -1 !== h.indexOf("android") ? (s = 2, c = new Array(2), d = l) : (s = 5, c = new Array(4), n && (-1 !== n.indexOf("mp4a.40.29") || -1 !== n.indexOf("mp4a.40.5")) || !n && l >= 6 ? d = l - 3 : ((n && -1 !== n.indexOf("mp4a.40.2") && (l >= 6 && 1 === u || /vivaldi/i.test(h)) || !n && 1 === u) && (s = 2, c = new Array(2)), d = l)), c[0] = s << 3, c[0] |= (14 & l) >> 1, c[1] |= (1 & l) << 7, c[1] |= u << 3, 5 === s && (c[1] |= (14 & d) >> 1, c[2] = (1 & d) << 7, c[2] |= 8, c[3] = 0), { config: c, samplerate: g[l], channelCount: u, codec: "mp4a.40." + s, manifestCodec: f };
                    e.trigger(i.a.ERROR, { type: a.b.MEDIA_ERROR, details: a.a.FRAG_PARSING_ERROR, fatal: !0, reason: "invalid ADTS sampling index:" + l })
                }(t, r, n, s);
                e.config = l.config, e.samplerate = l.samplerate, e.channelCount = l.channelCount, e.codec = l.codec, e.manifestCodec = l.manifestCodec, o.b.log("parsed codec:" + e.codec + ",rate:" + l.samplerate + ",nb channel:" + l.channelCount)
            }
        }

        function p(e) { return 9216e4 / e }

        function v(e, t, r, i, a) {
            var n = function(e, t, r, i, a) { var n, s, o = e.length; if (n = u(e, t), s = c(e, t), (s -= n) > 0 && t + n + s <= o) return { headerLength: n, frameLength: s, stamp: r + i * a } }(t, r, i, a, p(e.samplerate));
            if (n) {
                var s = n.stamp,
                    o = n.headerLength,
                    l = n.frameLength,
                    d = { unit: t.subarray(r + o, r + o + l), pts: s, dts: s };
                return e.samples.push(d), { sample: d, length: l + o }
            }
        }
        var m = r(4),
            y = function() {
                function e(e, t, r) { this.observer = e, this.config = r, this.remuxer = t }
                var t = e.prototype;
                return t.resetInitSegment = function(e, t, r, i) { this._audioTrack = { container: "audio/adts", type: "audio", id: 0, sequenceNumber: 0, isAAC: !0, samples: [], len: 0, manifestCodec: t, duration: i, inputTimeScale: 9e4 } }, t.resetTimeStamp = function() {}, e.probe = function(e) {
                    if (!e) return !1;
                    for (var t = (m.a.getID3Data(e, 0) || []).length, r = e.length; t < r; t++)
                        if (f(e, t)) return o.b.log("ADTS sync word found !"), !0;
                    return !1
                }, t.append = function(e, t, r, i) {
                    for (var a = this._audioTrack, n = m.a.getID3Data(e, 0) || [], l = m.a.getTimeStamp(n), d = Object(s.a)(l) ? 90 * l : 9e4 * t, u = 0, c = d, f = e.length, p = n.length, y = [{ pts: c, dts: c, data: n }]; p < f - 1;)
                        if (h(e, p) && p + 5 < f) {
                            g(a, this.observer, e, p, a.manifestCodec);
                            var b = v(a, e, p, d, u);
                            if (!b) { o.b.log("Unable to parse AAC frame"); break }
                            p += b.length, c = b.sample.pts, u++
                        } else m.a.isHeader(e, p) ? (n = m.a.getID3Data(e, p), y.push({ pts: c, dts: c, data: n }), p += n.length) : p++;
                    this.remuxer.remux(a, { samples: [] }, { samples: y, inputTimeScale: 9e4 }, { samples: [] }, t, r, i)
                }, t.destroy = function() {}, e
            }(),
            b = r(10),
            T = {
                BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
                SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
                SamplesCoefficients: [
                    [0, 72, 144, 12],
                    [0, 0, 0, 0],
                    [0, 72, 144, 12],
                    [0, 144, 144, 12]
                ],
                BytesInSlot: [0, 1, 1, 4],
                appendFrame: function(e, t, r, i, a) {
                    if (!(r + 24 > t.length)) {
                        var n = this.parseHeader(t, r);
                        if (n && r + n.frameLength <= t.length) {
                            var s = i + a * (9e4 * n.samplesPerFrame / n.sampleRate),
                                o = { unit: t.subarray(r, r + n.frameLength), pts: s, dts: s };
                            return e.config = [], e.channelCount = n.channelCount, e.samplerate = n.sampleRate, e.samples.push(o), { sample: o, length: n.frameLength }
                        }
                    }
                },
                parseHeader: function(e, t) {
                    var r = e[t + 1] >> 3 & 3,
                        i = e[t + 1] >> 1 & 3,
                        a = e[t + 2] >> 4 & 15,
                        n = e[t + 2] >> 2 & 3,
                        s = e[t + 2] >> 1 & 1;
                    if (1 !== r && 0 !== a && 15 !== a && 3 !== n) {
                        var o = 3 === r ? 3 - i : 3 === i ? 3 : 4,
                            l = 1e3 * T.BitratesMap[14 * o + a - 1],
                            d = 3 === r ? 0 : 2 === r ? 1 : 2,
                            u = T.SamplingRateMap[3 * d + n],
                            c = e[t + 3] >> 6 == 3 ? 1 : 2,
                            h = T.SamplesCoefficients[r][i],
                            f = T.BytesInSlot[i],
                            g = 8 * h * f;
                        return { sampleRate: u, channelCount: c, frameLength: parseInt(h * l / u + s, 10) * f, samplesPerFrame: g }
                    }
                },
                isHeaderPattern: function(e, t) { return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1]) },
                isHeader: function(e, t) { return !!(t + 1 < e.length && this.isHeaderPattern(e, t)) },
                probe: function(e, t) {
                    if (t + 1 < e.length && this.isHeaderPattern(e, t)) {
                        var r = this.parseHeader(e, t),
                            i = 4;
                        r && r.frameLength && (i = r.frameLength);
                        var a = t + i;
                        if (a === e.length || a + 1 < e.length && this.isHeaderPattern(e, a)) return !0
                    }
                    return !1
                }
            },
            E = T,
            S = function() {
                function e(e) { this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0 }
                var t = e.prototype;
                return t.loadWord = function() {
                    var e = this.data,
                        t = this.bytesAvailable,
                        r = e.byteLength - t,
                        i = new Uint8Array(4),
                        a = Math.min(4, t);
                    if (0 === a) throw new Error("no bytes available");
                    i.set(e.subarray(r, r + a)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = 8 * a, this.bytesAvailable -= a
                }, t.skipBits = function(e) {
                    var t;
                    this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, e -= (t = e >> 3) >> 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e)
                }, t.readBits = function(e) {
                    var t = Math.min(this.bitsAvailable, e),
                        r = this.word >>> 32 - t;
                    return e > 32 && o.b.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0 ? this.word <<= t : this.bytesAvailable > 0 && this.loadWord(), (t = e - t) > 0 && this.bitsAvailable ? r << t | this.readBits(t) : r
                }, t.skipLZ = function() {
                    var e;
                    for (e = 0; e < this.bitsAvailable; ++e)
                        if (0 != (this.word & 2147483648 >>> e)) return this.word <<= e, this.bitsAvailable -= e, e;
                    return this.loadWord(), e + this.skipLZ()
                }, t.skipUEG = function() { this.skipBits(1 + this.skipLZ()) }, t.skipEG = function() { this.skipBits(1 + this.skipLZ()) }, t.readUEG = function() { var e = this.skipLZ(); return this.readBits(e + 1) - 1 }, t.readEG = function() { var e = this.readUEG(); return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1) }, t.readBoolean = function() { return 1 === this.readBits(1) }, t.readUByte = function() { return this.readBits(8) }, t.readUShort = function() { return this.readBits(16) }, t.readUInt = function() { return this.readBits(32) }, t.skipScalingList = function(e) {
                    var t, r = 8,
                        i = 8;
                    for (t = 0; t < e; t++) 0 !== i && (i = (r + this.readEG() + 256) % 256), r = 0 === i ? r : i
                }, t.readSPS = function() {
                    var e, t, r, i, a, n, s, o = 0,
                        l = 0,
                        d = 0,
                        u = 0,
                        c = this.readUByte.bind(this),
                        h = this.readBits.bind(this),
                        f = this.readUEG.bind(this),
                        g = this.readBoolean.bind(this),
                        p = this.skipBits.bind(this),
                        v = this.skipEG.bind(this),
                        m = this.skipUEG.bind(this),
                        y = this.skipScalingList.bind(this);
                    if (c(), e = c(), h(5), p(3), c(), m(), 100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e) {
                        var b = f();
                        if (3 === b && p(1), m(), m(), p(1), g())
                            for (n = 3 !== b ? 8 : 12, s = 0; s < n; s++) g() && y(s < 6 ? 16 : 64)
                    }
                    m();
                    var T = f();
                    if (0 === T) f();
                    else if (1 === T)
                        for (p(1), v(), v(), t = f(), s = 0; s < t; s++) v();
                    m(), p(1), r = f(), i = f(), 0 === (a = h(1)) && p(1), p(1), g() && (o = f(), l = f(), d = f(), u = f());
                    var E = [1, 1];
                    if (g() && g()) switch (c()) {
                        case 1:
                            E = [1, 1];
                            break;
                        case 2:
                            E = [12, 11];
                            break;
                        case 3:
                            E = [10, 11];
                            break;
                        case 4:
                            E = [16, 11];
                            break;
                        case 5:
                            E = [40, 33];
                            break;
                        case 6:
                            E = [24, 11];
                            break;
                        case 7:
                            E = [20, 11];
                            break;
                        case 8:
                            E = [32, 11];
                            break;
                        case 9:
                            E = [80, 33];
                            break;
                        case 10:
                            E = [18, 11];
                            break;
                        case 11:
                            E = [15, 11];
                            break;
                        case 12:
                            E = [64, 33];
                            break;
                        case 13:
                            E = [160, 99];
                            break;
                        case 14:
                            E = [4, 3];
                            break;
                        case 15:
                            E = [3, 2];
                            break;
                        case 16:
                            E = [2, 1];
                            break;
                        case 255:
                            E = [c() << 8 | c(), c() << 8 | c()]
                    }
                    return { width: Math.ceil(16 * (r + 1) - 2 * o - 2 * l), height: (2 - a) * (i + 1) * 16 - (a ? 2 : 4) * (d + u), pixelRatio: E }
                }, t.readSliceType = function() { return this.readUByte(), this.readUEG(), this.readUEG() }, e
            }(),
            _ = function() {
                function e(e, t, r, i) { this.decryptdata = r, this.discardEPB = i, this.decrypter = new n.a(e, t, { removePKCS7Padding: !1 }) }
                var t = e.prototype;
                return t.decryptBuffer = function(e, t) { this.decrypter.decrypt(e, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, t) }, t.decryptAacSample = function(e, t, r, i) {
                    var a = e[t].unit,
                        n = a.subarray(16, a.length - a.length % 16),
                        s = n.buffer.slice(n.byteOffset, n.byteOffset + n.length),
                        o = this;
                    this.decryptBuffer(s, (function(n) { n = new Uint8Array(n), a.set(n, 16), i || o.decryptAacSamples(e, t + 1, r) }))
                }, t.decryptAacSamples = function(e, t, r) { for (;; t++) { if (t >= e.length) return void r(); if (!(e[t].unit.length < 32)) { var i = this.decrypter.isSync(); if (this.decryptAacSample(e, t, r, i), !i) return } } }, t.getAvcEncryptedData = function(e) { for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, r = new Int8Array(t), i = 0, a = 32; a <= e.length - 16; a += 160, i += 16) r.set(e.subarray(a, a + 16), i); return r }, t.getAvcDecryptedUnit = function(e, t) { t = new Uint8Array(t); for (var r = 0, i = 32; i <= e.length - 16; i += 160, r += 16) e.set(t.subarray(r, r + 16), i); return e }, t.decryptAvcSample = function(e, t, r, i, a, n) {
                    var s = this.discardEPB(a.data),
                        o = this.getAvcEncryptedData(s),
                        l = this;
                    this.decryptBuffer(o.buffer, (function(o) { a.data = l.getAvcDecryptedUnit(s, o), n || l.decryptAvcSamples(e, t, r + 1, i) }))
                }, t.decryptAvcSamples = function(e, t, r, i) { for (;; t++, r = 0) { if (t >= e.length) return void i(); for (var a = e[t].units; !(r >= a.length); r++) { var n = a[r]; if (!(n.length <= 48 || 1 !== n.type && 5 !== n.type)) { var s = this.decrypter.isSync(); if (this.decryptAvcSample(e, t, r, i, n, s), !s) return } } } }, e
            }(),
            A = { video: 1, audio: 2, id3: 3, text: 4 },
            R = function() {
                function e(e, t, r, i) { this.observer = e, this.config = r, this.typeSupported = i, this.remuxer = t, this.sampleAes = null }
                var t = e.prototype;
                return t.setDecryptData = function(e) { null != e && null != e.key && "SAMPLE-AES" === e.method ? this.sampleAes = new _(this.observer, this.config, e, this.discardEPB) : this.sampleAes = null }, e.probe = function(t) { var r = e._syncOffset(t); return !(r < 0) && (r && o.b.warn("MPEG2-TS detected but first sync word found @ offset " + r + ", junk ahead ?"), !0) }, e._syncOffset = function(e) {
                    for (var t = Math.min(1e3, e.length - 564), r = 0; r < t;) {
                        if (71 === e[r] && 71 === e[r + 188] && 71 === e[r + 376]) return r;
                        r++
                    }
                    return -1
                }, e.createTrack = function(e, t) { return { container: "video" === e || "audio" === e ? "video/mp2t" : void 0, type: e, id: A[e], pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], dropped: "video" === e ? 0 : void 0, isAAC: "audio" === e || void 0, duration: "audio" === e ? t : void 0 } }, t.resetInitSegment = function(t, r, i, a) { this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = e.createTrack("video", a), this._audioTrack = e.createTrack("audio", a), this._id3Track = e.createTrack("id3", a), this._txtTrack = e.createTrack("text", a), this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = r, this.videoCodec = i, this._duration = a }, t.resetTimeStamp = function() {}, t.append = function(t, r, n, s) {
                    var l, d, u, c, h, f = t.length,
                        g = !1;
                    this.contiguous = n;
                    var p = this.pmtParsed,
                        v = this._avcTrack,
                        m = this._audioTrack,
                        y = this._id3Track,
                        b = v.pid,
                        T = m.pid,
                        E = y.pid,
                        S = this._pmtId,
                        _ = v.pesData,
                        A = m.pesData,
                        R = y.pesData,
                        w = this._parsePAT,
                        k = this._parsePMT,
                        L = this._parsePES,
                        D = this._parseAVCPES.bind(this),
                        C = this._parseAACPES.bind(this),
                        O = this._parseMPEGPES.bind(this),
                        I = this._parseID3PES.bind(this),
                        P = e._syncOffset(t);
                    for (f -= (f + P) % 188, l = P; l < f; l += 188)
                        if (71 === t[l]) {
                            if (d = !!(64 & t[l + 1]), u = ((31 & t[l + 1]) << 8) + t[l + 2], (48 & t[l + 3]) >> 4 > 1) { if ((c = l + 5 + t[l + 4]) === l + 188) continue } else c = l + 4;
                            switch (u) {
                                case b:
                                    d && (_ && (h = L(_)) && void 0 !== h.pts && D(h, !1), _ = { data: [], size: 0 }), _ && (_.data.push(t.subarray(c, l + 188)), _.size += l + 188 - c);
                                    break;
                                case T:
                                    d && (A && (h = L(A)) && void 0 !== h.pts && (m.isAAC ? C(h) : O(h)), A = { data: [], size: 0 }), A && (A.data.push(t.subarray(c, l + 188)), A.size += l + 188 - c);
                                    break;
                                case E:
                                    d && (R && (h = L(R)) && void 0 !== h.pts && I(h), R = { data: [], size: 0 }), R && (R.data.push(t.subarray(c, l + 188)), R.size += l + 188 - c);
                                    break;
                                case 0:
                                    d && (c += t[c] + 1), S = this._pmtId = w(t, c);
                                    break;
                                case S:
                                    d && (c += t[c] + 1);
                                    var x = k(t, c, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
                                    (b = x.avc) > 0 && (v.pid = b), (T = x.audio) > 0 && (m.pid = T, m.isAAC = x.isAAC), (E = x.id3) > 0 && (y.pid = E), g && !p && (o.b.log("reparse from beginning"), g = !1, l = P - 188), p = this.pmtParsed = !0;
                                    break;
                                case 17:
                                case 8191:
                                    break;
                                default:
                                    g = !0
                            }
                        } else this.observer.trigger(i.a.ERROR, { type: a.b.MEDIA_ERROR, details: a.a.FRAG_PARSING_ERROR, fatal: !1, reason: "TS packet did not start with 0x47" });
                    _ && (h = L(_)) && void 0 !== h.pts ? (D(h, !0), v.pesData = null) : v.pesData = _, A && (h = L(A)) && void 0 !== h.pts ? (m.isAAC ? C(h) : O(h), m.pesData = null) : (A && A.size && o.b.log("last AAC PES packet truncated,might overlap between fragments"), m.pesData = A), R && (h = L(R)) && void 0 !== h.pts ? (I(h), y.pesData = null) : y.pesData = R, null == this.sampleAes ? this.remuxer.remux(m, v, y, this._txtTrack, r, n, s) : this.decryptAndRemux(m, v, y, this._txtTrack, r, n, s)
                }, t.decryptAndRemux = function(e, t, r, i, a, n, s) {
                    if (e.samples && e.isAAC) {
                        var o = this;
                        this.sampleAes.decryptAacSamples(e.samples, 0, (function() { o.decryptAndRemuxAvc(e, t, r, i, a, n, s) }))
                    } else this.decryptAndRemuxAvc(e, t, r, i, a, n, s)
                }, t.decryptAndRemuxAvc = function(e, t, r, i, a, n, s) {
                    if (t.samples) {
                        var o = this;
                        this.sampleAes.decryptAvcSamples(t.samples, 0, 0, (function() { o.remuxer.remux(e, t, r, i, a, n, s) }))
                    } else this.remuxer.remux(e, t, r, i, a, n, s)
                }, t.destroy = function() { this._initPTS = this._initDTS = void 0, this._duration = 0 }, t._parsePAT = function(e, t) { return (31 & e[t + 10]) << 8 | e[t + 11] }, t._parsePMT = function(e, t, r, i) {
                    var a, n, s = { audio: -1, avc: -1, id3: -1, isAAC: !0 };
                    for (a = t + 3 + ((15 & e[t + 1]) << 8 | e[t + 2]) - 4, t += 12 + ((15 & e[t + 10]) << 8 | e[t + 11]); t < a;) {
                        switch (n = (31 & e[t + 1]) << 8 | e[t + 2], e[t]) {
                            case 207:
                                if (!i) { o.b.log("unknown stream type:" + e[t]); break }
                            case 15:
                                -1 === s.audio && (s.audio = n);
                                break;
                            case 21:
                                -1 === s.id3 && (s.id3 = n);
                                break;
                            case 219:
                                if (!i) { o.b.log("unknown stream type:" + e[t]); break }
                            case 27:
                                -1 === s.avc && (s.avc = n);
                                break;
                            case 3:
                            case 4:
                                r ? -1 === s.audio && (s.audio = n, s.isAAC = !1) : o.b.log("MPEG audio found, not supported in this browser for now");
                                break;
                            case 36:
                                o.b.warn("HEVC stream type found, not supported for now");
                                break;
                            default:
                                o.b.log("unknown stream type:" + e[t])
                        }
                        t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4])
                    }
                    return s
                }, t._parsePES = function(e) {
                    var t, r, i, a, n, s, l, d, u = 0,
                        c = e.data;
                    if (!e || 0 === e.size) return null;
                    for (; c[0].length < 19 && c.length > 1;) {
                        var h = new Uint8Array(c[0].length + c[1].length);
                        h.set(c[0]), h.set(c[1], c[0].length), c[0] = h, c.splice(1, 1)
                    }
                    if (1 === ((t = c[0])[0] << 16) + (t[1] << 8) + t[2]) {
                        if ((i = (t[4] << 8) + t[5]) && i > e.size - 6) return null;
                        if (192 & (r = t[7]) && ((s = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2) > 4294967295 && (s -= 8589934592), 64 & r ? ((l = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2) > 4294967295 && (l -= 8589934592), s - l > 54e5 && (o.b.warn(Math.round((s - l) / 9e4) + "s delta between PTS and DTS, align them"), s = l)) : l = s), d = (a = t[8]) + 9, e.size <= d) return null;
                        e.size -= d, n = new Uint8Array(e.size);
                        for (var f = 0, g = c.length; f < g; f++) {
                            var p = (t = c[f]).byteLength;
                            if (d) {
                                if (d > p) { d -= p; continue }
                                t = t.subarray(d), p -= d, d = 0
                            }
                            n.set(t, u), u += p
                        }
                        return i && (i -= a + 3), { data: n, pts: s, dts: l, len: i }
                    }
                    return null
                }, t.pushAccesUnit = function(e, t) {
                    if (e.units.length && e.frame) {
                        var r = t.samples,
                            i = r.length;
                        !this.config.forceKeyFrameOnDiscontinuity || !0 === e.key || t.sps && (i || this.contiguous) ? (e.id = i, r.push(e)) : t.dropped++
                    }
                    e.debug.length && o.b.log(e.pts + "/" + e.dts + ":" + e.debug)
                }, t._parseAVCPES = function(e, t) {
                    var r, i, a, n = this,
                        s = this._avcTrack,
                        o = this._parseAVCNALu(e.data),
                        l = this.avcSample,
                        d = !1,
                        u = this.pushAccesUnit.bind(this),
                        c = function(e, t, r, i) { return { key: e, pts: t, dts: r, units: [], debug: i } };
                    e.data = null, l && o.length && !s.audFound && (u(l, s), l = this.avcSample = c(!1, e.pts, e.dts, "")), o.forEach((function(t) {
                        switch (t.type) {
                            case 1:
                                i = !0, l || (l = n.avcSample = c(!0, e.pts, e.dts, "")), l.frame = !0;
                                var o = t.data;
                                if (d && o.length > 4) {
                                    var h = new S(o).readSliceType();
                                    2 !== h && 4 !== h && 7 !== h && 9 !== h || (l.key = !0)
                                }
                                break;
                            case 5:
                                i = !0, l || (l = n.avcSample = c(!0, e.pts, e.dts, "")), l.key = !0, l.frame = !0;
                                break;
                            case 6:
                                i = !0, (r = new S(n.discardEPB(t.data))).readUByte();
                                for (var f = 0, g = 0, p = !1, v = 0; !p && r.bytesAvailable > 1;) {
                                    f = 0;
                                    do { f += v = r.readUByte() } while (255 === v);
                                    g = 0;
                                    do { g += v = r.readUByte() } while (255 === v);
                                    if (4 === f && 0 !== r.bytesAvailable) {
                                        if (p = !0, 181 === r.readUByte())
                                            if (49 === r.readUShort())
                                                if (1195456820 === r.readUInt())
                                                    if (3 === r.readUByte()) {
                                                        var y = r.readUByte(),
                                                            b = 31 & y,
                                                            T = [y, r.readUByte()];
                                                        for (a = 0; a < b; a++) T.push(r.readUByte()), T.push(r.readUByte()), T.push(r.readUByte());
                                                        n._insertSampleInOrder(n._txtTrack.samples, { type: 3, pts: e.pts, bytes: T })
                                                    }
                                    } else if (5 === f && 0 !== r.bytesAvailable) {
                                        if (p = !0, g > 16) {
                                            var E = [];
                                            for (a = 0; a < 16; a++) E.push(r.readUByte().toString(16)), 3 !== a && 5 !== a && 7 !== a && 9 !== a || E.push("-");
                                            var _ = g - 16,
                                                A = new Uint8Array(_);
                                            for (a = 0; a < _; a++) A[a] = r.readUByte();
                                            n._insertSampleInOrder(n._txtTrack.samples, { pts: e.pts, payloadType: f, uuid: E.join(""), userDataBytes: A, userData: Object(m.b)(A.buffer) })
                                        }
                                    } else if (g < r.bytesAvailable)
                                        for (a = 0; a < g; a++) r.readUByte()
                                }
                                break;
                            case 7:
                                if (i = !0, d = !0, !s.sps) {
                                    var R = (r = new S(t.data)).readSPS();
                                    s.width = R.width, s.height = R.height, s.pixelRatio = R.pixelRatio, s.sps = [t.data], s.duration = n._duration;
                                    var w = t.data.subarray(1, 4),
                                        k = "avc1.";
                                    for (a = 0; a < 3; a++) {
                                        var L = w[a].toString(16);
                                        L.length < 2 && (L = "0" + L), k += L
                                    }
                                    s.codec = k
                                }
                                break;
                            case 8:
                                i = !0, s.pps || (s.pps = [t.data]);
                                break;
                            case 9:
                                i = !1, s.audFound = !0, l && u(l, s), l = n.avcSample = c(!1, e.pts, e.dts, "");
                                break;
                            case 12:
                                i = !1;
                                break;
                            default:
                                i = !1, l && (l.debug += "unknown NAL " + t.type + " ")
                        }
                        l && i && l.units.push(t)
                    })), t && l && (u(l, s), this.avcSample = null)
                }, t._insertSampleInOrder = function(e, t) {
                    var r = e.length;
                    if (r > 0) {
                        if (t.pts >= e[r - 1].pts) e.push(t);
                        else
                            for (var i = r - 1; i >= 0; i--)
                                if (t.pts < e[i].pts) { e.splice(i, 0, t); break }
                    } else e.push(t)
                }, t._getLastNalUnit = function() {
                    var e, t = this.avcSample;
                    if (!t || 0 === t.units.length) {
                        var r = this._avcTrack.samples;
                        t = r[r.length - 1]
                    }
                    if (t) {
                        var i = t.units;
                        e = i[i.length - 1]
                    }
                    return e
                }, t._parseAVCNALu = function(e) {
                    var t, r, i, a, n = 0,
                        s = e.byteLength,
                        o = this._avcTrack,
                        l = o.naluState || 0,
                        d = l,
                        u = [],
                        c = -1;
                    for (-1 === l && (c = 0, a = 31 & e[0], l = 0, n = 1); n < s;)
                        if (t = e[n++], l)
                            if (1 !== l)
                                if (t)
                                    if (1 === t) {
                                        if (c >= 0) i = { data: e.subarray(c, n - l - 1), type: a }, u.push(i);
                                        else {
                                            var h = this._getLastNalUnit();
                                            if (h && (d && n <= 4 - d && h.state && (h.data = h.data.subarray(0, h.data.byteLength - d)), (r = n - l - 1) > 0)) {
                                                var f = new Uint8Array(h.data.byteLength + r);
                                                f.set(h.data, 0), f.set(e.subarray(0, r), h.data.byteLength), h.data = f
                                            }
                                        }
                                        n < s ? (c = n, a = 31 & e[n], l = 0) : l = -1
                                    } else l = 0;
                    else l = 3;
                    else l = t ? 0 : 2;
                    else l = t ? 0 : 1;
                    if (c >= 0 && l >= 0 && (i = { data: e.subarray(c, s), type: a, state: l }, u.push(i)), 0 === u.length) {
                        var g = this._getLastNalUnit();
                        if (g) {
                            var p = new Uint8Array(g.data.byteLength + e.byteLength);
                            p.set(g.data, 0), p.set(e, g.data.byteLength), g.data = p
                        }
                    }
                    return o.naluState = l, u
                }, t.discardEPB = function(e) {
                    for (var t, r, i = e.byteLength, a = [], n = 1; n < i - 2;) 0 === e[n] && 0 === e[n + 1] && 3 === e[n + 2] ? (a.push(n + 2), n += 2) : n++;
                    if (0 === a.length) return e;
                    t = i - a.length, r = new Uint8Array(t);
                    var s = 0;
                    for (n = 0; n < t; s++, n++) s === a[0] && (s++, a.shift()), r[n] = e[s];
                    return r
                }, t._parseAACPES = function(e) {
                    var t, r, n, s, l, d, u, c = this._audioTrack,
                        f = e.data,
                        m = e.pts,
                        y = this.aacOverFlow,
                        b = this.aacLastPTS;
                    if (y) {
                        var T = new Uint8Array(y.byteLength + f.byteLength);
                        T.set(y, 0), T.set(f, y.byteLength), f = T
                    }
                    for (n = 0, l = f.length; n < l - 1 && !h(f, n); n++);
                    if (n && (n < l - 1 ? (d = "AAC PES did not start with ADTS header,offset:" + n, u = !1) : (d = "no ADTS header found in AAC PES", u = !0), o.b.warn("parsing error:" + d), this.observer.trigger(i.a.ERROR, { type: a.b.MEDIA_ERROR, details: a.a.FRAG_PARSING_ERROR, fatal: u, reason: d }), u)) return;
                    if (g(c, this.observer, f, n, this.audioCodec), r = 0, t = p(c.samplerate), y && b) {
                        var E = b + t;
                        Math.abs(E - m) > 1 && (o.b.log("AAC: align PTS for overlapping frames by " + Math.round((E - m) / 90)), m = E)
                    }
                    for (; n < l;)
                        if (h(f, n) && n + 5 < l) {
                            var S = v(c, f, n, m, r);
                            if (!S) break;
                            n += S.length, s = S.sample.pts, r++
                        } else n++;
                    y = n < l ? f.subarray(n, l) : null, this.aacOverFlow = y, this.aacLastPTS = s
                }, t._parseMPEGPES = function(e) {
                    for (var t = e.data, r = t.length, i = 0, a = 0, n = e.pts; a < r;)
                        if (E.isHeader(t, a)) {
                            var s = E.appendFrame(this._audioTrack, t, a, n, i);
                            if (!s) break;
                            a += s.length, i++
                        } else a++
                }, t._parseID3PES = function(e) { this._id3Track.samples.push(e) }, e
            }(),
            w = function() {
                function e(e, t, r) { this.observer = e, this.config = r, this.remuxer = t }
                var t = e.prototype;
                return t.resetInitSegment = function(e, t, r, i) { this._audioTrack = { container: "audio/mpeg", type: "audio", id: -1, sequenceNumber: 0, isAAC: !1, samples: [], len: 0, manifestCodec: t, duration: i, inputTimeScale: 9e4 } }, t.resetTimeStamp = function() {}, e.probe = function(e) {
                    var t, r, i = m.a.getID3Data(e, 0);
                    if (i && void 0 !== m.a.getTimeStamp(i))
                        for (t = i.length, r = Math.min(e.length - 1, t + 100); t < r; t++)
                            if (E.probe(e, t)) return o.b.log("MPEG Audio sync word found !"), !0;
                    return !1
                }, t.append = function(e, t, r, i) {
                    for (var a = m.a.getID3Data(e, 0), n = m.a.getTimeStamp(a), s = n ? 90 * n : 9e4 * t, o = a.length, l = e.length, d = 0, u = 0, c = this._audioTrack, h = [{ pts: s, dts: s, data: a }]; o < l;)
                        if (E.isHeader(e, o)) {
                            var f = E.appendFrame(c, e, o, s, d);
                            if (!f) break;
                            o += f.length, u = f.sample.pts, d++
                        } else m.a.isHeader(e, o) ? (a = m.a.getID3Data(e, o), h.push({ pts: u, dts: u, data: a }), o += a.length) : o++;
                    this.remuxer.remux(c, { samples: [] }, { samples: h, inputTimeScale: 9e4 }, { samples: [] }, t, r, i)
                }, t.destroy = function() {}, e
            }(),
            k = function() {
                function e() {}
                return e.getSilentFrame = function(e, t) {
                    switch (e) {
                        case "mp4a.40.2":
                            if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                            if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                            if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                            if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                            if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                            if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                            break;
                        default:
                            if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                            if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                            if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                    }
                    return null
                }, e
            }(),
            L = Math.pow(2, 32) - 1,
            D = function() {
                function e() {}
                return e.init = function() {
                    var t;
                    for (t in e.types = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], ".mp3": [], mvex: [], mvhd: [], pasp: [], sdtp: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [], smhd: [] }, e.types) e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
                    var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                        i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                    e.HDLR_TYPES = { video: r, audio: i };
                    var a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                        n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                    e.STTS = e.STSC = e.STCO = n, e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                    var s = new Uint8Array([105, 115, 111, 109]),
                        o = new Uint8Array([97, 118, 99, 49]),
                        l = new Uint8Array([0, 0, 0, 1]);
                    e.FTYP = e.box(e.types.ftyp, s, l, s, o), e.DINF = e.box(e.types.dinf, e.box(e.types.dref, a))
                }, e.box = function(e) { for (var t, r = Array.prototype.slice.call(arguments, 1), i = 8, a = r.length, n = a; a--;) i += r[a].byteLength; for ((t = new Uint8Array(i))[0] = i >> 24 & 255, t[1] = i >> 16 & 255, t[2] = i >> 8 & 255, t[3] = 255 & i, t.set(e, 4), a = 0, i = 8; a < n; a++) t.set(r[a], i), i += r[a].byteLength; return t }, e.hdlr = function(t) { return e.box(e.types.hdlr, e.HDLR_TYPES[t]) }, e.mdat = function(t) { return e.box(e.types.mdat, t) }, e.mdhd = function(t, r) {
                    r *= t;
                    var i = Math.floor(r / (L + 1)),
                        a = Math.floor(r % (L + 1));
                    return e.box(e.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 85, 196, 0, 0]))
                }, e.mdia = function(t) { return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t)) }, e.mfhd = function(t) { return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t])) }, e.minf = function(t) { return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t)) }, e.moof = function(t, r, i) { return e.box(e.types.moof, e.mfhd(t), e.traf(i, r)) }, e.moov = function(t) { for (var r = t.length, i = []; r--;) i[r] = e.trak(t[r]); return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(i).concat(e.mvex(t))) }, e.mvex = function(t) { for (var r = t.length, i = []; r--;) i[r] = e.trex(t[r]); return e.box.apply(null, [e.types.mvex].concat(i)) }, e.mvhd = function(t, r) {
                    r *= t;
                    var i = Math.floor(r / (L + 1)),
                        a = Math.floor(r % (L + 1)),
                        n = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                    return e.box(e.types.mvhd, n)
                }, e.sdtp = function(t) {
                    var r, i, a = t.samples || [],
                        n = new Uint8Array(4 + a.length);
                    for (i = 0; i < a.length; i++) r = a[i].flags, n[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
                    return e.box(e.types.sdtp, n)
                }, e.stbl = function(t) { return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO)) }, e.avc1 = function(t) {
                    var r, i, a, n = [],
                        s = [];
                    for (r = 0; r < t.sps.length; r++) a = (i = t.sps[r]).byteLength, n.push(a >>> 8 & 255), n.push(255 & a), n = n.concat(Array.prototype.slice.call(i));
                    for (r = 0; r < t.pps.length; r++) a = (i = t.pps[r]).byteLength, s.push(a >>> 8 & 255), s.push(255 & a), s = s.concat(Array.prototype.slice.call(i));
                    var o = e.box(e.types.avcC, new Uint8Array([1, n[3], n[4], n[5], 255, 224 | t.sps.length].concat(n).concat([t.pps.length]).concat(s))),
                        l = t.width,
                        d = t.height,
                        u = t.pixelRatio[0],
                        c = t.pixelRatio[1];
                    return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, d >> 8 & 255, 255 & d, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), e.box(e.types.pasp, new Uint8Array([u >> 24, u >> 16 & 255, u >> 8 & 255, 255 & u, c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c])))
                }, e.esds = function(e) { var t = e.config.length; return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2])) }, e.mp4a = function(t) { var r = t.samplerate; return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), e.box(e.types.esds, e.esds(t))) }, e.mp3 = function(t) { var r = t.samplerate; return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0])) }, e.stsd = function(t) { return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t)) }, e.tkhd = function(t) {
                    var r = t.id,
                        i = t.duration * t.timescale,
                        a = t.width,
                        n = t.height,
                        s = Math.floor(i / (L + 1)),
                        o = Math.floor(i % (L + 1));
                    return e.box(e.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, a >> 8 & 255, 255 & a, 0, 0, n >> 8 & 255, 255 & n, 0, 0]))
                }, e.traf = function(t, r) {
                    var i = e.sdtp(t),
                        a = t.id,
                        n = Math.floor(r / (L + 1)),
                        s = Math.floor(r % (L + 1));
                    return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s])), e.trun(t, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
                }, e.trak = function(t) { return t.duration = t.duration || 4294967295, e.box(e.types.trak, e.tkhd(t), e.mdia(t)) }, e.trex = function(t) { var r = t.id; return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1])) }, e.trun = function(t, r) {
                    var i, a, n, s, o, l, d = t.samples || [],
                        u = d.length,
                        c = 12 + 16 * u,
                        h = new Uint8Array(c);
                    for (r += 8 + c, h.set([0, 0, 15, 1, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), i = 0; i < u; i++) n = (a = d[i]).duration, s = a.size, o = a.flags, l = a.cts, h.set([n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i);
                    return e.box(e.types.trun, h)
                }, e.initSegment = function(t) { e.types || e.init(); var r, i = e.moov(t); return (r = new Uint8Array(e.FTYP.byteLength + i.byteLength)).set(e.FTYP), r.set(i, e.FTYP.byteLength), r }, e
            }();

        function C(e, t, r, i) { void 0 === r && (r = 1), void 0 === i && (i = !1); var a = e * t * r; return i ? Math.round(a) : a }

        function O(e, t) { return void 0 === t && (t = !1), C(e, 1e3, 1 / 9e4, t) }

        function I(e, t) { return void 0 === t && (t = 1), C(e, 9e4, 1 / t) }
        var P, x = I(10),
            M = I(.2),
            F = function() {
                function e(e, t, r, i) {
                    this.observer = e, this.config = t, this.typeSupported = r;
                    var a = navigator.userAgent;
                    this.isSafari = i && i.indexOf("Apple") > -1 && a && !a.match("CriOS"), this.ISGenerated = !1
                }
                var t = e.prototype;
                return t.destroy = function() {}, t.resetTimeStamp = function(e) { this._initPTS = this._initDTS = e }, t.resetInitSegment = function() { this.ISGenerated = !1 }, t.remux = function(e, t, r, a, n, s, l) {
                    if (this.ISGenerated || this.generateIS(e, t, n), this.ISGenerated) {
                        var d = e.samples.length,
                            u = t.samples.length,
                            c = n,
                            h = n;
                        if (d && u) {
                            var f = (e.samples[0].pts - t.samples[0].pts) / t.inputTimeScale;
                            c += Math.max(0, f), h += Math.max(0, -f)
                        }
                        if (d) { e.timescale || (o.b.warn("regenerate InitSegment as audio detected"), this.generateIS(e, t, n)); var g, p = this.remuxAudio(e, c, s, l); if (u) p && (g = p.endPTS - p.startPTS), t.timescale || (o.b.warn("regenerate InitSegment as video detected"), this.generateIS(e, t, n)), this.remuxVideo(t, h, s, g, l) } else if (u) {
                            var v = this.remuxVideo(t, h, s, 0, l);
                            v && e.codec && this.remuxEmptyAudio(e, c, s, v)
                        }
                    }
                    r.samples.length && this.remuxID3(r, n), a.samples.length && this.remuxText(a, n), this.observer.trigger(i.a.FRAG_PARSED)
                }, t.generateIS = function(e, t, r) {
                    var n, s, l = this.observer,
                        d = e.samples,
                        u = t.samples,
                        c = this.typeSupported,
                        h = "audio/mp4",
                        f = {},
                        g = { tracks: f },
                        p = void 0 === this._initPTS;
                    if (p && (n = s = 1 / 0), e.config && d.length && (e.timescale = e.samplerate, o.b.log("audio sampling rate : " + e.samplerate), e.isAAC || (c.mpeg ? (h = "audio/mpeg", e.codec = "") : c.mp3 && (e.codec = "mp3")), f.audio = { container: h, codec: e.codec, initSegment: !e.isAAC && c.mpeg ? new Uint8Array : D.initSegment([e]), metadata: { channelCount: e.channelCount } }, p && (n = s = d[0].pts - e.inputTimeScale * r)), t.sps && t.pps && u.length) {
                        var v = t.inputTimeScale;
                        t.timescale = v, f.video = { container: "video/mp4", codec: t.codec, initSegment: D.initSegment([t]), metadata: { width: t.width, height: t.height } }, p && (n = Math.min(n, u[0].pts - v * r), s = Math.min(s, u[0].dts - v * r), this.observer.trigger(i.a.INIT_PTS_FOUND, { initPTS: n }))
                    }
                    Object.keys(f).length ? (l.trigger(i.a.FRAG_PARSING_INIT_SEGMENT, g), this.ISGenerated = !0, p && (this._initPTS = n, this._initDTS = s)) : l.trigger(i.a.ERROR, { type: a.b.MEDIA_ERROR, details: a.a.FRAG_PARSING_ERROR, fatal: !1, reason: "no audio/video samples found" })
                }, t.remuxVideo = function(e, t, r, n, s) {
                    var l, d, u, c, h, f, g, p = 8,
                        v = e.timescale,
                        m = e.samples,
                        y = [],
                        b = m.length,
                        T = this._PTSNormalize,
                        E = this._initPTS,
                        S = this.nextAvcDts,
                        _ = this.isSafari;
                    if (0 !== b) {
                        _ && (r |= m.length && S && (s && Math.abs(t - S / v) < .1 || Math.abs(m[0].pts - S - E) < v / 5)), r || (S = t * v), m.forEach((function(e) { e.pts = T(e.pts - E, S), e.dts = T(e.dts - E, S) })), m.sort((function(e, t) {
                            var r = e.dts - t.dts,
                                i = e.pts - t.pts;
                            return r || i || e.id - t.id
                        }));
                        var A = m.reduce((function(e, t) { return Math.max(Math.min(e, t.pts - t.dts), -1 * M) }), 0);
                        if (A < 0) { o.b.warn("PTS < DTS detected in video samples, shifting DTS by " + O(A, !0) + " ms to overcome this issue"); for (var R = 0; R < m.length; R++) m[R].dts += A }
                        var w = m[0];
                        h = Math.max(w.dts, 0), c = Math.max(w.pts, 0);
                        var k = h - S;
                        r && k && (k > 1 ? o.b.log("AVC: " + O(k, !0) + " ms hole between fragments detected,filling it") : k < -1 && o.b.log("AVC: " + O(-k, !0) + " ms overlapping between fragments detected"), h = S, m[0].dts = h, c = Math.max(c - k, S), m[0].pts = c, o.b.log("Video: PTS/DTS adjusted: " + O(c, !0) + "/" + O(h, !0) + ", delta: " + O(k, !0) + " ms")), w = m[m.length - 1], g = Math.max(w.dts, 0), f = Math.max(w.pts, 0, g), _ && (l = Math.round((g - h) / (m.length - 1)));
                        for (var L = 0, C = 0, I = 0; I < b; I++) {
                            for (var P = m[I], x = P.units, F = x.length, U = 0, N = 0; N < F; N++) U += x[N].data.length;
                            C += U, L += F, P.length = U, P.dts = _ ? h + I * l : Math.max(P.dts, h), P.pts = Math.max(P.pts, P.dts)
                        }
                        var B = C + 4 * L + 8;
                        try { d = new Uint8Array(B) } catch (e) { return void this.observer.trigger(i.a.ERROR, { type: a.b.MUX_ERROR, details: a.a.REMUX_ALLOC_ERROR, fatal: !1, bytes: B, reason: "fail allocating video mdat " + B }) }
                        var G = new DataView(d.buffer);
                        G.setUint32(0, B), d.set(D.types.mdat, 4);
                        for (var K = 0; K < b; K++) {
                            for (var j = m[K], H = j.units, V = 0, Y = void 0, W = 0, q = H.length; W < q; W++) {
                                var z = H[W],
                                    X = z.data,
                                    Q = z.data.byteLength;
                                G.setUint32(p, Q), p += 4, d.set(X, p), p += Q, V += 4 + Q
                            }
                            if (_) Y = Math.max(0, l * Math.round((j.pts - j.dts) / l));
                            else {
                                if (K < b - 1) l = m[K + 1].dts - j.dts;
                                else {
                                    var $ = this.config,
                                        J = j.dts - m[K > 0 ? K - 1 : K].dts;
                                    if ($.stretchShortVideoTrack) {
                                        var Z = $.maxBufferHole,
                                            ee = Math.floor(Z * v),
                                            te = (n ? c + n * v : this.nextAudioPts) - j.pts;
                                        te > ee ? ((l = te - J) < 0 && (l = J), o.b.log("It is approximately " + O(te, !1) + " ms to the next segment; using duration " + O(l, !1) + " ms for the last video frame.")) : l = J
                                    } else l = J
                                }
                                Y = Math.round(j.pts - j.dts)
                            }
                            y.push({ size: V, duration: l, cts: Y, flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: j.key ? 2 : 1, isNonSync: j.key ? 0 : 1 } })
                        }
                        this.nextAvcDts = g + l;
                        var re = e.dropped;
                        if (e.nbNalu = 0, e.dropped = 0, y.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                            var ie = y[0].flags;
                            ie.dependsOn = 2, ie.isNonSync = 0
                        }
                        e.samples = y, u = D.moof(e.sequenceNumber++, h, e), e.samples = [];
                        var ae = { data1: u, data2: d, startPTS: c / v, endPTS: (f + l) / v, startDTS: h / v, endDTS: this.nextAvcDts / v, type: "video", hasAudio: !1, hasVideo: !0, nb: y.length, dropped: re };
                        return this.observer.trigger(i.a.FRAG_PARSING_DATA, ae), ae
                    }
                }, t.remuxAudio = function(e, t, r, n) {
                    var s, l, d, u, c, h, f = e.inputTimeScale,
                        g = e.timescale,
                        p = f / g,
                        v = (e.isAAC ? 1024 : 1152) * p,
                        m = this._PTSNormalize,
                        y = this._initPTS,
                        b = !e.isAAC && this.typeSupported.mpeg,
                        T = b ? 0 : 8,
                        E = e.samples,
                        S = [],
                        _ = this.nextAudioPts;
                    if (r |= E.length && _ && (n && Math.abs(t - _ / f) < .1 || Math.abs(E[0].pts - _ - y) < 20 * v), E.forEach((function(e) { e.pts = e.dts = m(e.pts - y, t * f) })), 0 !== (E = E.filter((function(e) { return e.pts >= 0 }))).length) {
                        if (r || (_ = n ? t * f : E[0].pts), e.isAAC)
                            for (var A = this.config.maxAudioFramesDrift, R = 0, w = _; R < E.length;) {
                                var L, C = E[R];
                                if ((L = C.pts - w) <= -A * v) o.b.warn("Dropping 1 audio frame @ " + O(w, !0) + " ms due to " + O(L, !0) + " ms overlap."), E.splice(R, 1);
                                else if (L >= A * v && L < x && w) {
                                    var I = Math.round(L / v);
                                    o.b.warn("Injecting " + I + " audio frames @ " + O(w, !0) + " ms due to " + O(w, !0) + " ms gap.");
                                    for (var P = 0; P < I; P++) {
                                        var M = Math.max(w, 0);
                                        (l = k.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (o.b.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), l = C.unit.subarray()), E.splice(R, 0, { unit: l, pts: M, dts: M }), w += v, R++
                                    }
                                    C.pts = C.dts = w, w += v, R++
                                } else Math.abs(L), C.pts = C.dts = w, w += v, R++
                            }
                        for (var F = E.length, U = 0; F--;) U += E[F].unit.byteLength;
                        for (var N = 0, B = E.length; N < B; N++) {
                            var G = E[N],
                                K = G.unit,
                                j = G.pts;
                            if (void 0 !== h) s.duration = Math.round((j - h) / p);
                            else {
                                var H = j - _,
                                    V = 0;
                                if (r && e.isAAC && H) {
                                    if (H > 0 && H < x) V = Math.round((j - _) / v), o.b.log(O(H, !0) + " ms hole between AAC samples detected,filling it"), V > 0 && ((l = k.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (l = K.subarray()), U += V * l.length);
                                    else if (H < -12) { o.b.log("drop overlapping AAC sample, expected/parsed/delta: " + O(_, !0) + " ms / " + O(j, !0) + " ms / " + O(-H, !0) + " ms"), U -= K.byteLength; continue }
                                    j = _
                                }
                                if (c = j, !(U > 0)) return;
                                U += T;
                                try { d = new Uint8Array(U) } catch (e) { return void this.observer.trigger(i.a.ERROR, { type: a.b.MUX_ERROR, details: a.a.REMUX_ALLOC_ERROR, fatal: !1, bytes: U, reason: "fail allocating audio mdat " + U }) }
                                b || (new DataView(d.buffer).setUint32(0, U), d.set(D.types.mdat, 4));
                                for (var Y = 0; Y < V; Y++)(l = k.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (o.b.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), l = K.subarray()), d.set(l, T), T += l.byteLength, s = { size: l.byteLength, cts: 0, duration: 1024, flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: 1 } }, S.push(s)
                            }
                            d.set(K, T);
                            var W = K.byteLength;
                            T += W, s = { size: W, cts: 0, duration: 0, flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: 1 } }, S.push(s), h = j
                        }
                        var q = 0;
                        if ((F = S.length) >= 2 && (q = S[F - 2].duration, s.duration = q), F) {
                            this.nextAudioPts = _ = h + p * q, e.samples = S, u = b ? new Uint8Array : D.moof(e.sequenceNumber++, c / p, e), e.samples = [];
                            var z = c / f,
                                X = _ / f,
                                Q = { data1: u, data2: d, startPTS: z, endPTS: X, startDTS: z, endDTS: X, type: "audio", hasAudio: !0, hasVideo: !1, nb: F };
                            return this.observer.trigger(i.a.FRAG_PARSING_DATA, Q), Q
                        }
                        return null
                    }
                }, t.remuxEmptyAudio = function(e, t, r, i) {
                    var a = e.inputTimeScale,
                        n = a / (e.samplerate ? e.samplerate : a),
                        s = this.nextAudioPts,
                        l = (void 0 !== s ? s : i.startDTS * a) + this._initDTS,
                        d = i.endDTS * a + this._initDTS,
                        u = 1024 * n,
                        c = Math.ceil((d - l) / u),
                        h = k.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
                    if (o.b.warn("remux empty Audio"), h) {
                        for (var f = [], g = 0; g < c; g++) {
                            var p = l + g * u;
                            f.push({ unit: h, pts: p, dts: p })
                        }
                        e.samples = f, this.remuxAudio(e, t, r)
                    } else o.b.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")
                }, t.remuxID3 = function(e) {
                    var t, r = e.samples.length,
                        a = e.inputTimeScale,
                        n = this._initPTS,
                        s = this._initDTS;
                    if (r) {
                        for (var o = 0; o < r; o++)(t = e.samples[o]).pts = (t.pts - n) / a, t.dts = (t.dts - s) / a;
                        this.observer.trigger(i.a.FRAG_PARSING_METADATA, { samples: e.samples })
                    }
                    e.samples = []
                }, t.remuxText = function(e) {
                    e.samples.sort((function(e, t) { return e.pts - t.pts }));
                    var t, r = e.samples.length,
                        a = e.inputTimeScale,
                        n = this._initPTS;
                    if (r) {
                        for (var s = 0; s < r; s++)(t = e.samples[s]).pts = (t.pts - n) / a;
                        this.observer.trigger(i.a.FRAG_PARSING_USERDATA, { samples: e.samples })
                    }
                    e.samples = []
                }, t._PTSNormalize = function(e, t) { var r; if (void 0 === t) return e; for (r = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;) e += r; return e }, e
            }(),
            U = function() {
                function e(e) { this.observer = e }
                var t = e.prototype;
                return t.destroy = function() {}, t.resetTimeStamp = function() {}, t.resetInitSegment = function() {}, t.remux = function(e, t, r, a, n, s, o, l) {
                    var d = this.observer,
                        u = "";
                    e && (u += "audio"), t && (u += "video"), d.trigger(i.a.FRAG_PARSING_DATA, { data1: l, startPTS: n, startDTS: n, type: u, hasAudio: !!e, hasVideo: !!t, nb: 1, dropped: 0 }), d.trigger(i.a.FRAG_PARSED)
                }, e
            }(),
            N = Object(l.a)();
        try { P = N.performance.now.bind(N.performance) } catch (e) { o.b.debug("Unable to use Performance API on this environment"), P = N.Date.now }
        var B = function() {
            function e(e, t, r, i) { this.observer = e, this.typeSupported = t, this.config = r, this.vendor = i }
            var t = e.prototype;
            return t.destroy = function() {
                var e = this.demuxer;
                e && e.destroy()
            }, t.push = function(e, t, r, a, s, o, l, d, u, c, h, f) {
                var g = this;
                if (e.byteLength > 0 && null != t && null != t.key && "AES-128" === t.method) {
                    var p = this.decrypter;
                    null == p && (p = this.decrypter = new n.a(this.observer, this.config));
                    var v = P();
                    p.decrypt(e, t.key.buffer, t.iv.buffer, (function(e) {
                        var n = P();
                        g.observer.trigger(i.a.FRAG_DECRYPTED, { stats: { tstart: v, tdecrypt: n } }), g.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), a, s, o, l, d, u, c, h, f)
                    }))
                } else this.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), a, s, o, l, d, u, c, h, f)
            }, t.pushDecrypted = function(e, t, r, n, s, o, l, d, u, c, h, f) {
                var g = this.demuxer;
                if (!g || (l || d) && !this.probe(e)) {
                    for (var p = this.observer, v = this.typeSupported, m = this.config, T = [{ demux: R, remux: F }, { demux: b.a, remux: U }, { demux: y, remux: F }, { demux: w, remux: F }], E = 0, S = T.length; E < S; E++) {
                        var _ = T[E],
                            A = _.demux.probe;
                        if (A(e)) {
                            var k = this.remuxer = new _.remux(p, m, v, this.vendor);
                            g = new _.demux(p, k, m, v), this.probe = A;
                            break
                        }
                    }
                    if (!g) return void p.trigger(i.a.ERROR, { type: a.b.MEDIA_ERROR, details: a.a.FRAG_PARSING_ERROR, fatal: !0, reason: "no demux matching with content found" });
                    this.demuxer = g
                }
                var L = this.remuxer;
                (l || d) && (g.resetInitSegment(r, n, s, c), L.resetInitSegment()), l && (g.resetTimeStamp(f), L.resetTimeStamp(f)), "function" == typeof g.setDecryptData && g.setDecryptData(t), g.append(e, o, u, h)
            }, e
        }();
        t.a = B
    }, function(e, t, r) {
        "use strict";
        var i = r(0),
            a = r(1),
            n = Math.pow(2, 32) - 1,
            s = function() {
                function e(e, t) { this.observer = e, this.remuxer = t }
                var t = e.prototype;
                return t.resetTimeStamp = function(e) { this.initPTS = e }, t.resetInitSegment = function(t, r, i, n) {
                    if (t && t.byteLength) {
                        var s = this.initData = e.parseInitSegment(t);
                        null == r && (r = "mp4a.40.5"), null == i && (i = "avc1.42e01e");
                        var o = {};
                        s.audio && s.video ? o.audiovideo = { container: "video/mp4", codec: r + "," + i, initSegment: n ? t : null } : (s.audio && (o.audio = { container: "audio/mp4", codec: r, initSegment: n ? t : null }), s.video && (o.video = { container: "video/mp4", codec: i, initSegment: n ? t : null })), this.observer.trigger(a.a.FRAG_PARSING_INIT_SEGMENT, { tracks: o })
                    } else r && (this.audioCodec = r), i && (this.videoCodec = i)
                }, e.probe = function(t) { return e.findBox({ data: t, start: 0, end: Math.min(t.length, 16384) }, ["moof"]).length > 0 }, e.bin2str = function(e) { return String.fromCharCode.apply(null, e) }, e.readUint16 = function(e, t) { e.data && (t += e.start, e = e.data); var r = e[t] << 8 | e[t + 1]; return r < 0 ? 65536 + r : r }, e.readUint32 = function(e, t) { e.data && (t += e.start, e = e.data); var r = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]; return r < 0 ? 4294967296 + r : r }, e.writeUint32 = function(e, t, r) { e.data && (t += e.start, e = e.data), e[t] = r >> 24, e[t + 1] = r >> 16 & 255, e[t + 2] = r >> 8 & 255, e[t + 3] = 255 & r }, e.findBox = function(t, r) { var i, a, n, s, o, l, d = []; if (t.data ? (o = t.start, n = t.end, t = t.data) : (o = 0, n = t.byteLength), !r.length) return null; for (i = o; i < n;) l = (a = e.readUint32(t, i)) > 1 ? i + a : n, e.bin2str(t.subarray(i + 4, i + 8)) === r[0] && (1 === r.length ? d.push({ data: t, start: i + 8, end: l }) : (s = e.findBox({ data: t, start: i + 8, end: l }, r.slice(1))).length && (d = d.concat(s))), i = l; return d }, e.parseSegmentIndex = function(t) {
                    var r, i = e.findBox(t, ["moov"])[0],
                        a = i ? i.end : null,
                        n = 0,
                        s = e.findBox(t, ["sidx"]);
                    if (!s || !s[0]) return null;
                    r = [];
                    var o = (s = s[0]).data[0];
                    n = 0 === o ? 8 : 16;
                    var l = e.readUint32(s, n);
                    n += 4;
                    n += 0 === o ? 8 : 16, n += 2;
                    var d = s.end + 0,
                        u = e.readUint16(s, n);
                    n += 2;
                    for (var c = 0; c < u; c++) {
                        var h = n,
                            f = e.readUint32(s, h);
                        h += 4;
                        var g = 2147483647 & f;
                        if (1 === (2147483648 & f) >>> 31) return void console.warn("SIDX has hierarchical references (not supported)");
                        var p = e.readUint32(s, h);
                        h += 4, r.push({ referenceSize: g, subsegmentDuration: p, info: { duration: p / l, start: d, end: d + g - 1 } }), d += g, n = h += 4
                    }
                    return { earliestPresentationTime: 0, timescale: l, version: o, referencesCount: u, references: r, moovEndOffset: a }
                }, e.parseInitSegment = function(t) {
                    var r = [];
                    return e.findBox(t, ["moov", "trak"]).forEach((function(t) {
                        var a = e.findBox(t, ["tkhd"])[0];
                        if (a) {
                            var n = a.data[a.start],
                                s = 0 === n ? 12 : 20,
                                o = e.readUint32(a, s),
                                l = e.findBox(t, ["mdia", "mdhd"])[0];
                            if (l) {
                                s = 0 === (n = l.data[l.start]) ? 12 : 20;
                                var d = e.readUint32(l, s),
                                    u = e.findBox(t, ["mdia", "hdlr"])[0];
                                if (u) {
                                    var c = { soun: "audio", vide: "video" }[e.bin2str(u.data.subarray(u.start + 8, u.start + 12))];
                                    if (c) {
                                        var h = e.findBox(t, ["mdia", "minf", "stbl", "stsd"]);
                                        if (h.length) {
                                            h = h[0];
                                            var f = e.bin2str(h.data.subarray(h.start + 12, h.start + 16));
                                            i.b.log("MP4Demuxer:" + c + ":" + f + " found")
                                        }
                                        r[o] = { timescale: d, type: c }, r[c] = { timescale: d, id: o }
                                    }
                                }
                            }
                        }
                    })), r
                }, e.getStartDTS = function(t, r) { var i, a, n; return i = e.findBox(r, ["moof", "traf"]), a = [].concat.apply([], i.map((function(r) { return e.findBox(r, ["tfhd"]).map((function(i) { var a, n; return a = e.readUint32(i, 4), n = t[a].timescale || 9e4, e.findBox(r, ["tfdt"]).map((function(t) { var r, i; return r = t.data[t.start], i = e.readUint32(t, 4), 1 === r && (i *= Math.pow(2, 32), i += e.readUint32(t, 8)), i }))[0] / n })) }))), n = Math.min.apply(null, a), isFinite(n) ? n : 0 }, e.offsetStartDTS = function(t, r, i) {
                    e.findBox(r, ["moof", "traf"]).map((function(r) {
                        return e.findBox(r, ["tfhd"]).map((function(a) {
                            var s = e.readUint32(a, 4),
                                o = t[s].timescale || 9e4;
                            e.findBox(r, ["tfdt"]).map((function(t) {
                                var r = t.data[t.start],
                                    a = e.readUint32(t, 4);
                                if (0 === r) e.writeUint32(t, 4, a - i * o);
                                else {
                                    a *= Math.pow(2, 32), a += e.readUint32(t, 8), a -= i * o, a = Math.max(a, 0);
                                    var s = Math.floor(a / (n + 1)),
                                        l = Math.floor(a % (n + 1));
                                    e.writeUint32(t, 4, s), e.writeUint32(t, 8, l)
                                }
                            }))
                        }))
                    }))
                }, t.append = function(t, r, i, n) {
                    var s = this.initData;
                    s || (this.resetInitSegment(t, this.audioCodec, this.videoCodec, !1), s = this.initData);
                    var o, l = this.initPTS;
                    if (void 0 === l) {
                        var d = e.getStartDTS(s, t);
                        this.initPTS = l = d - r, this.observer.trigger(a.a.INIT_PTS_FOUND, { initPTS: l })
                    }
                    e.offsetStartDTS(s, t, l), o = e.getStartDTS(s, t), this.remuxer.remux(s.audio, s.video, null, null, o, i, n, t)
                }, t.destroy = function() {}, e
            }();
        t.a = s
    }, function(e, t, r) {
        function i(e) {
            var t = {};

            function r(i) { if (t[i]) return t[i].exports; var a = t[i] = { i: i, l: !1, exports: {} }; return e[i].call(a.exports, a, a.exports, r), a.l = !0, a.exports }
            r.m = e, r.c = t, r.i = function(e) { return e }, r.d = function(e, t, i) { r.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: i }) }, r.r = function(e) { Object.defineProperty(e, "__esModule", { value: !0 }) }, r.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return r.d(t, "a", t), t }, r.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "/", r.oe = function(e) { throw console.error(e), e };
            var i = r(r.s = ENTRY_MODULE);
            return i.default || i
        }
        var a = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)";

        function n(e) { return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&") }

        function s(e, t, i) {
            var s = {};
            s[i] = [];
            var o = t.toString(),
                l = o.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
            if (!l) return s;
            for (var d, u = l[1], c = new RegExp("(\\\\n|\\W)" + n(u) + a, "g"); d = c.exec(o);) "dll-reference" !== d[3] && s[i].push(d[3]);
            for (c = new RegExp("\\(" + n(u) + '\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)' + a, "g"); d = c.exec(o);) e[d[2]] || (s[i].push(d[1]), e[d[2]] = r(d[1]).m), s[d[2]] = s[d[2]] || [], s[d[2]].push(d[4]);
            for (var h, f = Object.keys(s), g = 0; g < f.length; g++)
                for (var p = 0; p < s[f[g]].length; p++) h = s[f[g]][p], isNaN(1 * h) || (s[f[g]][p] = 1 * s[f[g]][p]);
            return s
        }

        function o(e) { return Object.keys(e).reduce((function(t, r) { return t || e[r].length > 0 }), !1) }
        e.exports = function(e, t) {
            t = t || {};
            var a = { main: r.m },
                n = t.all ? { main: Object.keys(a.main) } : function(e, t) {
                    for (var r = { main: [t] }, i = { main: [] }, a = { main: {} }; o(r);)
                        for (var n = Object.keys(r), l = 0; l < n.length; l++) {
                            var d = n[l],
                                u = r[d].pop();
                            if (a[d] = a[d] || {}, !a[d][u] && e[d][u]) { a[d][u] = !0, i[d] = i[d] || [], i[d].push(u); for (var c = s(e, e[d][u], d), h = Object.keys(c), f = 0; f < h.length; f++) r[h[f]] = r[h[f]] || [], r[h[f]] = r[h[f]].concat(c[h[f]]) }
                        }
                    return i
                }(a, e),
                l = "";
            Object.keys(n).filter((function(e) { return "main" !== e })).forEach((function(e) {
                for (var t = 0; n[e][t];) t++;
                n[e].push(t), a[e][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", l = l + "var " + e + " = (" + i.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + n[e].map((function(t) { return JSON.stringify(t) + ": " + a[e][t].toString() })).join(",") + "});\n"
            })), l = l + "new ((" + i.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + n.main.map((function(e) { return JSON.stringify(e) + ": " + a.main[e].toString() })).join(",") + "}))(self);";
            var d = new window.Blob([l], { type: "text/javascript" });
            if (t.bare) return d;
            var u = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(d),
                c = new window.Worker(u);
            return c.objectURL = u, c
        }
    }, function(e, t, r) {
        "use strict";
        r.r(t);
        var i = r(9),
            a = r(1),
            n = r(0),
            s = r(8);
        t.default = function(e) {
            var t = new s.EventEmitter;
            t.trigger = function(e) {
                for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                t.emit.apply(t, [e, e].concat(i))
            }, t.off = function(e) {
                for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                t.removeListener.apply(t, [e].concat(i))
            };
            var r = function(t, r) { e.postMessage({ event: t, data: r }) };
            e.addEventListener("message", (function(a) {
                var s = a.data;
                switch (s.cmd) {
                    case "init":
                        var o = JSON.parse(s.config);
                        e.demuxer = new i.a(t, s.typeSupported, o, s.vendor), Object(n.a)(o.debug), r("init", null);
                        break;
                    case "demux":
                        e.demuxer.push(s.data, s.decryptdata, s.initSegment, s.audioCodec, s.videoCodec, s.timeOffset, s.discontinuity, s.trackSwitch, s.contiguous, s.duration, s.accurateTimeOffset, s.defaultInitPTS)
                }
            })), t.on(a.a.FRAG_DECRYPTED, r), t.on(a.a.FRAG_PARSING_INIT_SEGMENT, r), t.on(a.a.FRAG_PARSED, r), t.on(a.a.ERROR, r), t.on(a.a.FRAG_PARSING_METADATA, r), t.on(a.a.FRAG_PARSING_USERDATA, r), t.on(a.a.INIT_PTS_FOUND, r), t.on(a.a.FRAG_PARSING_DATA, (function(t, r) {
                var i = [],
                    a = { event: t, data: r };
                r.data1 && (a.data1 = r.data1.buffer, i.push(r.data1.buffer), delete r.data1), r.data2 && (a.data2 = r.data2.buffer, i.push(r.data2.buffer), delete r.data2), e.postMessage(a, i)
            }))
        }
    }, function(e, t, r) {
        "use strict";
        r.r(t);
        var i = {};
        r.r(i), r.d(i, "newCue", (function() { return vt }));
        var a, n, s = r(6),
            o = r(2),
            l = r(3),
            d = r(1),
            u = r(0),
            c = { hlsEventGeneric: !0, hlsHandlerDestroying: !0, hlsHandlerDestroyed: !0 },
            h = function() {
                function e(e) {
                    this.hls = void 0, this.handledEvents = void 0, this.useGenericHandler = void 0, this.hls = e, this.onEvent = this.onEvent.bind(this);
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                    this.handledEvents = r, this.useGenericHandler = !0, this.registerListeners()
                }
                var t = e.prototype;
                return t.destroy = function() { this.onHandlerDestroying(), this.unregisterListeners(), this.onHandlerDestroyed() }, t.onHandlerDestroying = function() {}, t.onHandlerDestroyed = function() {}, t.isEventHandler = function() { return "object" == typeof this.handledEvents && this.handledEvents.length && "function" == typeof this.onEvent }, t.registerListeners = function() {
                    this.isEventHandler() && this.handledEvents.forEach((function(e) {
                        if (c[e]) throw new Error("Forbidden event-name: " + e);
                        this.hls.on(e, this.onEvent)
                    }), this)
                }, t.unregisterListeners = function() { this.isEventHandler() && this.handledEvents.forEach((function(e) { this.hls.off(e, this.onEvent) }), this) }, t.onEvent = function(e, t) { this.onEventGeneric(e, t) }, t.onEventGeneric = function(e, t) {
                    try {
                        (function(e, t) { var r = "on" + e.replace("hls", ""); if ("function" != typeof this[r]) throw new Error("Event " + e + " has no generic handler in this " + this.constructor.name + " class (tried " + r + ")"); return this[r].bind(this, t) }).call(this, e, t).call()
                    } catch (t) { u.b.error("An internal error happened while handling event " + e + '. Error message: "' + t.message + '". Here is a stacktrace:', t), this.hls.trigger(d.a.ERROR, { type: o.b.OTHER_ERROR, details: o.a.INTERNAL_EXCEPTION, fatal: !1, event: e, err: t }) }
                }, e
            }();
        ! function(e) { e.MANIFEST = "manifest", e.LEVEL = "level", e.AUDIO_TRACK = "audioTrack", e.SUBTITLE_TRACK = "subtitleTrack" }(a || (a = {})),
        function(e) { e.MAIN = "main", e.AUDIO = "audio", e.SUBTITLE = "subtitle" }(n || (n = {}));
        var f = r(10);

        function g(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var p, v = function() {
            function e(e, t) { this._uri = null, this.baseuri = void 0, this.reluri = void 0, this.method = null, this.key = null, this.iv = null, this.baseuri = e, this.reluri = t }
            var t, r, i;
            return t = e, (r = [{ key: "uri", get: function() { return !this._uri && this.reluri && (this._uri = Object(s.buildAbsoluteURL)(this.baseuri, this.reluri, { alwaysNormalize: !0 })), this._uri } }]) && g(t.prototype, r), i && g(t, i), e
        }();

        function m(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }! function(e) { e.AUDIO = "audio", e.VIDEO = "video" }(p || (p = {}));
        var y = function() {
            function e() {
                var e;
                this._url = null, this._byteRange = null, this._decryptdata = null, this._elementaryStreams = ((e = {})[p.AUDIO] = !1, e[p.VIDEO] = !1, e), this.deltaPTS = 0, this.rawProgramDateTime = null, this.programDateTime = null, this.title = null, this.tagList = [], this.cc = void 0, this.type = void 0, this.relurl = void 0, this.baseurl = void 0, this.duration = void 0, this.start = void 0, this.sn = 0, this.urlId = 0, this.level = 0, this.levelkey = void 0, this.loader = void 0
            }
            var t, r, i, a = e.prototype;
            return a.setByteRange = function(e, t) {
                var r = e.split("@", 2),
                    i = [];
                1 === r.length ? i[0] = t ? t.byteRangeEndOffset : 0 : i[0] = parseInt(r[1]), i[1] = parseInt(r[0]) + i[0], this._byteRange = i
            }, a.addElementaryStream = function(e) { this._elementaryStreams[e] = !0 }, a.hasElementaryStream = function(e) { return !0 === this._elementaryStreams[e] }, a.createInitializationVector = function(e) { for (var t = new Uint8Array(16), r = 12; r < 16; r++) t[r] = e >> 8 * (15 - r) & 255; return t }, a.setDecryptDataFromLevelKey = function(e, t) { var r = e; return e && e.method && e.uri && !e.iv && ((r = new v(e.baseuri, e.reluri)).method = e.method, r.iv = this.createInitializationVector(t)), r }, t = e, (r = [{ key: "url", get: function() { return !this._url && this.relurl && (this._url = Object(s.buildAbsoluteURL)(this.baseurl, this.relurl, { alwaysNormalize: !0 })), this._url }, set: function(e) { this._url = e } }, { key: "byteRange", get: function() { return this._byteRange ? this._byteRange : [] } }, { key: "byteRangeStartOffset", get: function() { return this.byteRange[0] } }, { key: "byteRangeEndOffset", get: function() { return this.byteRange[1] } }, { key: "decryptdata", get: function() { if (!this.levelkey && !this._decryptdata) return null; if (!this._decryptdata && this.levelkey) { var e = this.sn; "number" != typeof e && (this.levelkey && "AES-128" === this.levelkey.method && !this.levelkey.iv && u.b.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), e = 0), this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, e) } return this._decryptdata } }, { key: "endProgramDateTime", get: function() { if (null === this.programDateTime) return null; if (!Object(l.a)(this.programDateTime)) return null; var e = Object(l.a)(this.duration) ? this.duration : 0; return this.programDateTime + 1e3 * e } }, { key: "encrypted", get: function() { return !(!this.decryptdata || null === this.decryptdata.uri || null !== this.decryptdata.key) } }]) && m(t.prototype, r), i && m(t, i), e
        }();

        function b(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var T = function() {
                function e(e) { this.endCC = 0, this.endSN = 0, this.fragments = [], this.initSegment = null, this.live = !0, this.needSidxRanges = !1, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = e, this.version = null }
                var t, r, i;
                return t = e, (r = [{ key: "hasProgramDateTime", get: function() { return !(!this.fragments[0] || !Object(l.a)(this.fragments[0].programDateTime)) } }]) && b(t.prototype, r), i && b(t, i), e
            }(),
            E = /^(\d+)x(\d+)$/,
            S = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
            _ = function() {
                function e(t) { for (var r in "string" == typeof t && (t = e.parseAttrList(t)), t) t.hasOwnProperty(r) && (this[r] = t[r]) }
                var t = e.prototype;
                return t.decimalInteger = function(e) { var t = parseInt(this[e], 10); return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t }, t.hexadecimalInteger = function(e) {
                    if (this[e]) {
                        var t = (this[e] || "0x").slice(2);
                        t = (1 & t.length ? "0" : "") + t;
                        for (var r = new Uint8Array(t.length / 2), i = 0; i < t.length / 2; i++) r[i] = parseInt(t.slice(2 * i, 2 * i + 2), 16);
                        return r
                    }
                    return null
                }, t.hexadecimalIntegerAsNumber = function(e) { var t = parseInt(this[e], 16); return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t }, t.decimalFloatingPoint = function(e) { return parseFloat(this[e]) }, t.enumeratedString = function(e) { return this[e] }, t.decimalResolution = function(e) { var t = E.exec(this[e]); if (null !== t) return { width: parseInt(t[1], 10), height: parseInt(t[2], 10) } }, e.parseAttrList = function(e) {
                    var t, r = {};
                    for (S.lastIndex = 0; null !== (t = S.exec(e));) {
                        var i = t[2];
                        0 === i.indexOf('"') && i.lastIndexOf('"') === i.length - 1 && (i = i.slice(1, -1)), r[t[1]] = i
                    }
                    return r
                }, e
            }(),
            A = { audio: { a3ds: !0, "ac-3": !0, "ac-4": !0, alac: !0, alaw: !0, dra1: !0, "dts+": !0, "dts-": !0, dtsc: !0, dtse: !0, dtsh: !0, "ec-3": !0, enca: !0, g719: !0, g726: !0, m4ae: !0, mha1: !0, mha2: !0, mhm1: !0, mhm2: !0, mlpa: !0, mp4a: !0, "raw ": !0, Opus: !0, samr: !0, sawb: !0, sawp: !0, sevc: !0, sqcp: !0, ssmv: !0, twos: !0, ulaw: !0 }, video: { avc1: !0, avc2: !0, avc3: !0, avc4: !0, avcp: !0, drac: !0, dvav: !0, dvhe: !0, encv: !0, hev1: !0, hvc1: !0, mjp2: !0, mp4v: !0, mvc1: !0, mvc2: !0, mvc3: !0, mvc4: !0, resv: !0, rv60: !0, s263: !0, svc1: !0, svc2: !0, "vc-1": !0, vp08: !0, vp09: !0 } };

        function R(e, t) { return MediaSource.isTypeSupported((t || "video") + '/mp4;codecs="' + e + '"') }
        var w = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,
            k = /#EXT-X-MEDIA:(.*)/g,
            L = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)([\S+ ?]+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
            D = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
            C = /\.(mp4|m4s|m4v|m4a)$/i,
            O = function() {
                function e() {}
                return e.findGroup = function(e, t) { for (var r = 0; r < e.length; r++) { var i = e[r]; if (i.id === t) return i } }, e.convertAVC1ToAVCOTI = function(e) { var t, r = e.split("."); return r.length > 2 ? (t = r.shift() + ".", t += parseInt(r.shift()).toString(16), t += ("000" + parseInt(r.shift()).toString(16)).substr(-4)) : t = e, t }, e.resolve = function(e, t) { return s.buildAbsoluteURL(t, e, { alwaysNormalize: !0 }) }, e.parseMasterPlaylist = function(t, r) {
                    var i, a = [];

                    function n(e, t) {
                        ["video", "audio"].forEach((function(r) {
                            var i = e.filter((function(e) { return function(e, t) { var r = A[t]; return !!r && !0 === r[e.slice(0, 4)] }(e, r) }));
                            if (i.length) {
                                var a = i.filter((function(e) { return 0 === e.lastIndexOf("avc1", 0) || 0 === e.lastIndexOf("mp4a", 0) }));
                                t[r + "Codec"] = a.length > 0 ? a[0] : i[0], e = e.filter((function(e) { return -1 === i.indexOf(e) }))
                            }
                        })), t.unknownCodecs = e
                    }
                    for (w.lastIndex = 0; null != (i = w.exec(t));) {
                        var s = {},
                            o = s.attrs = new _(i[1]);
                        s.url = e.resolve(i[2], r);
                        var l = o.decimalResolution("RESOLUTION");
                        l && (s.width = l.width, s.height = l.height), s.bitrate = o.decimalInteger("AVERAGE-BANDWIDTH") || o.decimalInteger("BANDWIDTH"), s.name = o.NAME, n([].concat((o.CODECS || "").split(/[ ,]+/)), s), s.videoCodec && -1 !== s.videoCodec.indexOf("avc1") && (s.videoCodec = e.convertAVC1ToAVCOTI(s.videoCodec)), a.push(s)
                    }
                    return a
                }, e.parseMasterPlaylistMedia = function(t, r, i, a) {
                    var n;
                    void 0 === a && (a = []);
                    var s = [],
                        o = 0;
                    for (k.lastIndex = 0; null !== (n = k.exec(t));) {
                        var l = new _(n[1]);
                        if (l.TYPE === i) {
                            var d = { id: o++, groupId: l["GROUP-ID"], name: l.NAME || l.LANGUAGE, type: i, default: "YES" === l.DEFAULT, autoselect: "YES" === l.AUTOSELECT, forced: "YES" === l.FORCED, lang: l.LANGUAGE };
                            if (l.URI && (d.url = e.resolve(l.URI, r)), a.length) {
                                var u = e.findGroup(a, d.groupId);
                                d.audioCodec = u ? u.codec : a[0].codec
                            }
                            s.push(d)
                        }
                    }
                    return s
                }, e.parseLevelPlaylist = function(e, t, r, i, a) {
                    var n, s, o, d = 0,
                        c = 0,
                        h = new T(t),
                        f = 0,
                        g = null,
                        p = new y,
                        m = null;
                    for (L.lastIndex = 0; null !== (n = L.exec(e));) {
                        var b = n[1];
                        if (b) {
                            p.duration = parseFloat(b);
                            var E = (" " + n[2]).slice(1);
                            p.title = E || null, p.tagList.push(E ? ["INF", b, E] : ["INF", b])
                        } else if (n[3]) {
                            if (Object(l.a)(p.duration)) {
                                var S = d++;
                                p.type = i, p.start = c, o && (p.levelkey = o), p.sn = S, p.level = r, p.cc = f, p.urlId = a, p.baseurl = t, p.relurl = (" " + n[3]).slice(1), I(p, g), h.fragments.push(p), g = p, c += p.duration, p = new y
                            }
                        } else if (n[4]) {
                            var A = (" " + n[4]).slice(1);
                            g ? p.setByteRange(A, g) : p.setByteRange(A)
                        } else if (n[5]) p.rawProgramDateTime = (" " + n[5]).slice(1), p.tagList.push(["PROGRAM-DATE-TIME", p.rawProgramDateTime]), null === m && (m = h.fragments.length);
                        else {
                            if (!(n = n[0].match(D))) { u.b.warn("No matches on slow regex match for level playlist!"); continue }
                            for (s = 1; s < n.length && void 0 === n[s]; s++);
                            var R = (" " + n[s + 1]).slice(1),
                                w = (" " + n[s + 2]).slice(1);
                            switch (n[s]) {
                                case "#":
                                    p.tagList.push(w ? [R, w] : [R]);
                                    break;
                                case "PLAYLIST-TYPE":
                                    h.type = R.toUpperCase();
                                    break;
                                case "MEDIA-SEQUENCE":
                                    d = h.startSN = parseInt(R);
                                    break;
                                case "TARGETDURATION":
                                    h.targetduration = parseFloat(R);
                                    break;
                                case "VERSION":
                                    h.version = parseInt(R);
                                    break;
                                case "EXTM3U":
                                    break;
                                case "ENDLIST":
                                    h.live = !1;
                                    break;
                                case "DIS":
                                    f++, p.tagList.push(["DIS"]);
                                    break;
                                case "DISCONTINUITY-SEQ":
                                    f = parseInt(R);
                                    break;
                                case "KEY":
                                    var k = new _(R),
                                        O = k.enumeratedString("METHOD"),
                                        P = k.URI,
                                        x = k.hexadecimalInteger("IV");
                                    O && (o = new v(t, P), P && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(O) >= 0 && (o.method = O, o.key = null, o.iv = x));
                                    break;
                                case "START":
                                    var M = new _(R).decimalFloatingPoint("TIME-OFFSET");
                                    Object(l.a)(M) && (h.startTimeOffset = M);
                                    break;
                                case "MAP":
                                    var F = new _(R);
                                    p.relurl = F.URI, F.BYTERANGE && p.setByteRange(F.BYTERANGE), p.baseurl = t, p.level = r, p.type = i, p.sn = "initSegment", h.initSegment = p, (p = new y).rawProgramDateTime = h.initSegment.rawProgramDateTime;
                                    break;
                                default:
                                    u.b.warn("line parsed but not handled: " + n)
                            }
                        }
                    }
                    return (p = g) && !p.relurl && (h.fragments.pop(), c -= p.duration), h.totalduration = c, h.averagetargetduration = c / h.fragments.length, h.endSN = d - 1, h.startCC = h.fragments[0] ? h.fragments[0].cc : 0, h.endCC = f, !h.initSegment && h.fragments.length && h.fragments.every((function(e) { return C.test(e.relurl) })) && (u.b.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), (p = new y).relurl = h.fragments[0].relurl, p.baseurl = t, p.level = r, p.type = i, p.sn = "initSegment", h.initSegment = p, h.needSidxRanges = !0), m && function(e, t) {
                        for (var r = e[t], i = t - 1; i >= 0; i--) {
                            var a = e[i];
                            a.programDateTime = r.programDateTime - 1e3 * a.duration, r = a
                        }
                    }(h.fragments, m), h
                }, e
            }();

        function I(e, t) { e.rawProgramDateTime ? e.programDateTime = Date.parse(e.rawProgramDateTime) : t && t.programDateTime && (e.programDateTime = t.endProgramDateTime), Object(l.a)(e.programDateTime) || (e.programDateTime = null, e.rawProgramDateTime = null) }
        var P = window.performance,
            x = function(e) {
                var t, r;

                function i(t) { var r; return (r = e.call(this, t, d.a.MANIFEST_LOADING, d.a.LEVEL_LOADING, d.a.AUDIO_TRACK_LOADING, d.a.SUBTITLE_TRACK_LOADING) || this).loaders = {}, r }
                r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, i.canHaveQualityLevels = function(e) { return e !== a.AUDIO_TRACK && e !== a.SUBTITLE_TRACK }, i.mapContextToLevelType = function(e) {
                    switch (e.type) {
                        case a.AUDIO_TRACK:
                            return n.AUDIO;
                        case a.SUBTITLE_TRACK:
                            return n.SUBTITLE;
                        default:
                            return n.MAIN
                    }
                }, i.getResponseUrl = function(e, t) { var r = e.url; return void 0 !== r && 0 !== r.indexOf("data:") || (r = t.url), r };
                var s = i.prototype;
                return s.createInternalLoader = function(e) {
                    var t = this.hls.config,
                        r = t.pLoader,
                        i = t.loader,
                        a = new(r || i)(t);
                    return e.loader = a, this.loaders[e.type] = a, a
                }, s.getInternalLoader = function(e) { return this.loaders[e.type] }, s.resetInternalLoader = function(e) { this.loaders[e] && delete this.loaders[e] }, s.destroyInternalLoaders = function() {
                    for (var e in this.loaders) {
                        var t = this.loaders[e];
                        t && t.destroy(), this.resetInternalLoader(e)
                    }
                }, s.destroy = function() { this.destroyInternalLoaders(), e.prototype.destroy.call(this) }, s.onManifestLoading = function(e) { this.load({ url: e.url, type: a.MANIFEST, level: 0, id: null, responseType: "text" }) }, s.onLevelLoading = function(e) { this.load({ url: e.url, type: a.LEVEL, level: e.level, id: e.id, responseType: "text" }) }, s.onAudioTrackLoading = function(e) { this.load({ url: e.url, type: a.AUDIO_TRACK, level: null, id: e.id, responseType: "text" }) }, s.onSubtitleTrackLoading = function(e) { this.load({ url: e.url, type: a.SUBTITLE_TRACK, level: null, id: e.id, responseType: "text" }) }, s.load = function(e) {
                    var t = this.hls.config;
                    u.b.debug("Loading playlist of type " + e.type + ", level: " + e.level + ", id: " + e.id);
                    var r, i, n, s, o = this.getInternalLoader(e);
                    if (o) {
                        var l = o.context;
                        if (l && l.url === e.url) return u.b.trace("playlist request ongoing"), !1;
                        u.b.warn("aborting previous loader for type: " + e.type), o.abort()
                    }
                    switch (e.type) {
                        case a.MANIFEST:
                            r = t.manifestLoadingMaxRetry, i = t.manifestLoadingTimeOut, n = t.manifestLoadingRetryDelay, s = t.manifestLoadingMaxRetryTimeout;
                            break;
                        case a.LEVEL:
                            r = 0, s = 0, n = 0, i = t.levelLoadingTimeOut;
                            break;
                        default:
                            r = t.levelLoadingMaxRetry, i = t.levelLoadingTimeOut, n = t.levelLoadingRetryDelay, s = t.levelLoadingMaxRetryTimeout
                    }
                    o = this.createInternalLoader(e);
                    var d = { timeout: i, maxRetry: r, retryDelay: n, maxRetryDelay: s },
                        c = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this) };
                    return u.b.debug("Calling internal loader delegate for URL: " + e.url), o.load(e, d, c), !0
                }, s.loadsuccess = function(e, t, r, i) {
                    if (void 0 === i && (i = null), r.isSidxRequest) return this._handleSidxRequest(e, r), void this._handlePlaylistLoaded(e, t, r, i);
                    if (this.resetInternalLoader(r.type), "string" != typeof e.data) throw new Error('expected responseType of "text" for PlaylistLoader');
                    var a = e.data;
                    t.tload = P.now(), 0 === a.indexOf("#EXTM3U") ? a.indexOf("#EXTINF:") > 0 || a.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this._handleTrackOrLevelPlaylist(e, t, r, i) : this._handleMasterPlaylist(e, t, r, i) : this._handleManifestParsingError(e, r, "no EXTM3U delimiter", i)
                }, s.loaderror = function(e, t, r) { void 0 === r && (r = null), this._handleNetworkError(t, r, !1, e) }, s.loadtimeout = function(e, t, r) { void 0 === r && (r = null), this._handleNetworkError(t, r, !0) }, s._handleMasterPlaylist = function(e, t, r, a) {
                    var n = this.hls,
                        s = e.data,
                        o = i.getResponseUrl(e, r),
                        l = O.parseMasterPlaylist(s, o);
                    if (l.length) {
                        var c = l.map((function(e) { return { id: e.attrs.AUDIO, codec: e.audioCodec } })),
                            h = O.parseMasterPlaylistMedia(s, o, "AUDIO", c),
                            f = O.parseMasterPlaylistMedia(s, o, "SUBTITLES");
                        if (h.length) {
                            var g = !1;
                            h.forEach((function(e) { e.url || (g = !0) })), !1 === g && l[0].audioCodec && !l[0].attrs.AUDIO && (u.b.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), h.unshift({ type: "main", name: "main", default: !1, autoselect: !1, forced: !1, id: -1 }))
                        }
                        n.trigger(d.a.MANIFEST_LOADED, { levels: l, audioTracks: h, subtitles: f, url: o, stats: t, networkDetails: a })
                    } else this._handleManifestParsingError(e, r, "no level found in manifest", a)
                }, s._handleTrackOrLevelPlaylist = function(e, t, r, n) {
                    var s = this.hls,
                        o = r.id,
                        u = r.level,
                        c = r.type,
                        h = i.getResponseUrl(e, r),
                        f = Object(l.a)(o) ? o : 0,
                        g = Object(l.a)(u) ? u : f,
                        p = i.mapContextToLevelType(r),
                        v = O.parseLevelPlaylist(e.data, h, g, p, f);
                    if (v.tload = t.tload, c === a.MANIFEST) {
                        var m = { url: h, details: v };
                        s.trigger(d.a.MANIFEST_LOADED, { levels: [m], audioTracks: [], url: h, stats: t, networkDetails: n })
                    }
                    if (t.tparsed = P.now(), v.needSidxRanges) {
                        var y = v.initSegment.url;
                        this.load({ url: y, isSidxRequest: !0, type: c, level: u, levelDetails: v, id: o, rangeStart: 0, rangeEnd: 2048, responseType: "arraybuffer" })
                    } else r.levelDetails = v, this._handlePlaylistLoaded(e, t, r, n)
                }, s._handleSidxRequest = function(e, t) {
                    if ("string" == typeof e.data) throw new Error("sidx request must be made with responseType of array buffer");
                    var r = f.a.parseSegmentIndex(new Uint8Array(e.data));
                    if (r) {
                        var i = r.references,
                            a = t.levelDetails;
                        i.forEach((function(e, t) {
                            var r = e.info;
                            if (a) {
                                var i = a.fragments[t];
                                0 === i.byteRange.length && i.setByteRange(String(1 + r.end - r.start) + "@" + String(r.start))
                            }
                        })), a && a.initSegment.setByteRange(String(r.moovEndOffset) + "@0")
                    }
                }, s._handleManifestParsingError = function(e, t, r, i) { this.hls.trigger(d.a.ERROR, { type: o.b.NETWORK_ERROR, details: o.a.MANIFEST_PARSING_ERROR, fatal: !0, url: e.url, reason: r, networkDetails: i }) }, s._handleNetworkError = function(e, t, r, i) {
                    var n, s;
                    void 0 === r && (r = !1), void 0 === i && (i = null), u.b.info("A network error occured while loading a " + e.type + "-type playlist");
                    var l = this.getInternalLoader(e);
                    switch (e.type) {
                        case a.MANIFEST:
                            n = r ? o.a.MANIFEST_LOAD_TIMEOUT : o.a.MANIFEST_LOAD_ERROR, s = !0;
                            break;
                        case a.LEVEL:
                            n = r ? o.a.LEVEL_LOAD_TIMEOUT : o.a.LEVEL_LOAD_ERROR, s = !1;
                            break;
                        case a.AUDIO_TRACK:
                            n = r ? o.a.AUDIO_TRACK_LOAD_TIMEOUT : o.a.AUDIO_TRACK_LOAD_ERROR, s = !1;
                            break;
                        default:
                            s = !1
                    }
                    l && (l.abort(), this.resetInternalLoader(e.type));
                    var c = { type: o.b.NETWORK_ERROR, details: n, fatal: s, url: e.url, loader: l, context: e, networkDetails: t };
                    i && (c.response = i), this.hls.trigger(d.a.ERROR, c)
                }, s._handlePlaylistLoaded = function(e, t, r, n) {
                    var s = r.type,
                        o = r.level,
                        l = r.id,
                        u = r.levelDetails;
                    if (u && u.targetduration)
                        if (i.canHaveQualityLevels(r.type)) this.hls.trigger(d.a.LEVEL_LOADED, { details: u, level: o || 0, id: l || 0, stats: t, networkDetails: n });
                        else switch (s) {
                            case a.AUDIO_TRACK:
                                this.hls.trigger(d.a.AUDIO_TRACK_LOADED, { details: u, id: l, stats: t, networkDetails: n });
                                break;
                            case a.SUBTITLE_TRACK:
                                this.hls.trigger(d.a.SUBTITLE_TRACK_LOADED, { details: u, id: l, stats: t, networkDetails: n })
                        } else this._handleManifestParsingError(e, r, "invalid target duration", n)
                }, i
            }(h);
        var M = function(e) {
            var t, r;

            function i(t) { var r; return (r = e.call(this, t, d.a.FRAG_LOADING) || this).loaders = {}, r }
            r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
            var a = i.prototype;
            return a.destroy = function() {
                var t = this.loaders;
                for (var r in t) {
                    var i = t[r];
                    i && i.destroy()
                }
                this.loaders = {}, e.prototype.destroy.call(this)
            }, a.onFragLoading = function(e) {
                var t = e.frag,
                    r = t.type,
                    i = this.loaders,
                    a = this.hls.config,
                    n = a.fLoader,
                    s = a.loader;
                t.loaded = 0;
                var o, d, c, h = i[r];
                h && (u.b.warn("abort previous fragment loader for type: " + r), h.abort()), h = i[r] = t.loader = a.fLoader ? new n(a) : new s(a), o = { url: t.url, frag: t, responseType: "arraybuffer", progressData: !1 };
                var f = t.byteRangeStartOffset,
                    g = t.byteRangeEndOffset;
                Object(l.a)(f) && Object(l.a)(g) && (o.rangeStart = f, o.rangeEnd = g), d = { timeout: a.fragLoadingTimeOut, maxRetry: 0, retryDelay: 0, maxRetryDelay: a.fragLoadingMaxRetryTimeout }, c = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this), onProgress: this.loadprogress.bind(this) }, h.load(o, d, c)
            }, a.loadsuccess = function(e, t, r, i) {
                void 0 === i && (i = null);
                var a = e.data,
                    n = r.frag;
                n.loader = void 0, this.loaders[n.type] = void 0, this.hls.trigger(d.a.FRAG_LOADED, { payload: a, frag: n, stats: t, networkDetails: i })
            }, a.loaderror = function(e, t, r) {
                void 0 === r && (r = null);
                var i = t.frag,
                    a = i.loader;
                a && a.abort(), this.loaders[i.type] = void 0, this.hls.trigger(d.a.ERROR, { type: o.b.NETWORK_ERROR, details: o.a.FRAG_LOAD_ERROR, fatal: !1, frag: t.frag, response: e, networkDetails: r })
            }, a.loadtimeout = function(e, t, r) {
                void 0 === r && (r = null);
                var i = t.frag,
                    a = i.loader;
                a && a.abort(), this.loaders[i.type] = void 0, this.hls.trigger(d.a.ERROR, { type: o.b.NETWORK_ERROR, details: o.a.FRAG_LOAD_TIMEOUT, fatal: !1, frag: t.frag, networkDetails: r })
            }, a.loadprogress = function(e, t, r, i) {
                void 0 === i && (i = null);
                var a = t.frag;
                a.loaded = e.loaded, this.hls.trigger(d.a.FRAG_LOAD_PROGRESS, { frag: a, stats: e, networkDetails: i })
            }, i
        }(h);
        var F = function(e) {
            var t, r;

            function i(t) { var r; return (r = e.call(this, t, d.a.KEY_LOADING) || this).loaders = {}, r.decryptkey = null, r.decrypturl = null, r }
            r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
            var a = i.prototype;
            return a.destroy = function() {
                for (var t in this.loaders) {
                    var r = this.loaders[t];
                    r && r.destroy()
                }
                this.loaders = {}, e.prototype.destroy.call(this)
            }, a.onKeyLoading = function(e) {
                var t = e.frag,
                    r = t.type,
                    i = this.loaders[r];
                if (t.decryptdata) {
                    var a = t.decryptdata.uri;
                    if (a !== this.decrypturl || null === this.decryptkey) {
                        var n = this.hls.config;
                        if (i && (u.b.warn("abort previous key loader for type:" + r), i.abort()), !a) return void u.b.warn("key uri is falsy");
                        t.loader = this.loaders[r] = new n.loader(n), this.decrypturl = a, this.decryptkey = null;
                        var s = { url: a, frag: t, responseType: "arraybuffer" },
                            o = { timeout: n.fragLoadingTimeOut, maxRetry: 0, retryDelay: n.fragLoadingRetryDelay, maxRetryDelay: n.fragLoadingMaxRetryTimeout },
                            l = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this) };
                        t.loader.load(s, o, l)
                    } else this.decryptkey && (t.decryptdata.key = this.decryptkey, this.hls.trigger(d.a.KEY_LOADED, { frag: t }))
                } else u.b.warn("Missing decryption data on fragment in onKeyLoading")
            }, a.loadsuccess = function(e, t, r) {
                var i = r.frag;
                i.decryptdata ? (this.decryptkey = i.decryptdata.key = new Uint8Array(e.data), i.loader = void 0, delete this.loaders[i.type], this.hls.trigger(d.a.KEY_LOADED, { frag: i })) : u.b.error("after key load, decryptdata unset")
            }, a.loaderror = function(e, t) {
                var r = t.frag,
                    i = r.loader;
                i && i.abort(), delete this.loaders[r.type], this.hls.trigger(d.a.ERROR, { type: o.b.NETWORK_ERROR, details: o.a.KEY_LOAD_ERROR, fatal: !1, frag: r, response: e })
            }, a.loadtimeout = function(e, t) {
                var r = t.frag,
                    i = r.loader;
                i && i.abort(), delete this.loaders[r.type], this.hls.trigger(d.a.ERROR, { type: o.b.NETWORK_ERROR, details: o.a.KEY_LOAD_TIMEOUT, fatal: !1, frag: r })
            }, i
        }(h);
        var U = "NOT_LOADED",
            N = "APPENDING",
            B = "PARTIAL",
            G = "OK",
            K = function(e) {
                var t, r;

                function i(t) { var r; return (r = e.call(this, t, d.a.BUFFER_APPENDED, d.a.FRAG_BUFFERED, d.a.FRAG_LOADED) || this).bufferPadding = .2, r.fragments = Object.create(null), r.timeRanges = Object.create(null), r.config = t.config, r }
                r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                var a = i.prototype;
                return a.destroy = function() { this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.config = null, h.prototype.destroy.call(this), e.prototype.destroy.call(this) }, a.getBufferedFrag = function(e, t) {
                    var r = this.fragments,
                        i = Object.keys(r).filter((function(i) { var a = r[i]; if (a.body.type !== t) return !1; if (!a.buffered) return !1; var n = a.body; return n.startPTS <= e && e <= n.endPTS }));
                    if (0 === i.length) return null;
                    var a = i.pop();
                    return r[a].body
                }, a.detectEvictedFragments = function(e, t) {
                    var r, i, a = this;
                    Object.keys(this.fragments).forEach((function(n) {
                        var s = a.fragments[n];
                        if (!0 === s.buffered) {
                            var o = s.range[e];
                            if (o) {
                                r = o.time;
                                for (var l = 0; l < r.length; l++)
                                    if (i = r[l], !1 === a.isTimeBuffered(i.startPTS, i.endPTS, t)) { a.removeFragment(s.body); break }
                            }
                        }
                    }))
                }, a.detectPartialFragments = function(e) {
                    var t = this,
                        r = this.getFragmentKey(e),
                        i = this.fragments[r];
                    i && (i.buffered = !0, Object.keys(this.timeRanges).forEach((function(r) {
                        if (e.hasElementaryStream(r)) {
                            var a = t.timeRanges[r];
                            i.range[r] = t.getBufferedTimes(e.startPTS, e.endPTS, a)
                        }
                    })))
                }, a.getBufferedTimes = function(e, t, r) {
                    for (var i, a, n = [], s = !1, o = 0; o < r.length; o++) {
                        if (i = r.start(o) - this.bufferPadding, a = r.end(o) + this.bufferPadding, e >= i && t <= a) { n.push({ startPTS: Math.max(e, r.start(o)), endPTS: Math.min(t, r.end(o)) }); break }
                        if (e < a && t > i) n.push({ startPTS: Math.max(e, r.start(o)), endPTS: Math.min(t, r.end(o)) }), s = !0;
                        else if (t <= i) break
                    }
                    return { time: n, partial: s }
                }, a.getFragmentKey = function(e) { return e.type + "_" + e.level + "_" + e.urlId + "_" + e.sn }, a.getPartialFragment = function(e) {
                    var t, r, i, a = this,
                        n = null,
                        s = 0;
                    return Object.keys(this.fragments).forEach((function(o) {
                        var l = a.fragments[o];
                        a.isPartial(l) && (r = l.body.startPTS - a.bufferPadding, i = l.body.endPTS + a.bufferPadding, e >= r && e <= i && (t = Math.min(e - r, i - e), s <= t && (n = l.body, s = t)))
                    })), n
                }, a.getState = function(e) {
                    var t = this.getFragmentKey(e),
                        r = this.fragments[t],
                        i = U;
                    return void 0 !== r && (i = r.buffered ? !0 === this.isPartial(r) ? B : G : N), i
                }, a.isPartial = function(e) { return !0 === e.buffered && (void 0 !== e.range.video && !0 === e.range.video.partial || void 0 !== e.range.audio && !0 === e.range.audio.partial) }, a.isTimeBuffered = function(e, t, r) { for (var i, a, n = 0; n < r.length; n++) { if (i = r.start(n) - this.bufferPadding, a = r.end(n) + this.bufferPadding, e >= i && t <= a) return !0; if (t <= i) return !1 } return !1 }, a.onFragLoaded = function(e) {
                    var t = e.frag;
                    Object(l.a)(t.sn) && !t.bitrateTest && (this.fragments[this.getFragmentKey(t)] = { body: t, range: Object.create(null), buffered: !1 })
                }, a.onBufferAppended = function(e) {
                    var t = this;
                    this.timeRanges = e.timeRanges, Object.keys(this.timeRanges).forEach((function(e) {
                        var r = t.timeRanges[e];
                        t.detectEvictedFragments(e, r)
                    }))
                }, a.onFragBuffered = function(e) { this.detectPartialFragments(e.frag) }, a.hasFragment = function(e) { var t = this.getFragmentKey(e); return void 0 !== this.fragments[t] }, a.removeFragment = function(e) {
                    var t = this.getFragmentKey(e);
                    delete this.fragments[t]
                }, a.removeAllFragments = function() { this.fragments = Object.create(null) }, i
            }(h),
            j = {
                search: function(e, t) {
                    for (var r = 0, i = e.length - 1, a = null, n = null; r <= i;) {
                        var s = t(n = e[a = (r + i) / 2 | 0]);
                        if (s > 0) r = a + 1;
                        else {
                            if (!(s < 0)) return n;
                            i = a - 1
                        }
                    }
                    return null
                }
            },
            H = function() {
                function e() {}
                return e.isBuffered = function(e, t) {
                    try {
                        if (e)
                            for (var r = e.buffered, i = 0; i < r.length; i++)
                                if (t >= r.start(i) && t <= r.end(i)) return !0
                    } catch (e) {}
                    return !1
                }, e.bufferInfo = function(e, t, r) {
                    try {
                        if (e) {
                            var i, a = e.buffered,
                                n = [];
                            for (i = 0; i < a.length; i++) n.push({ start: a.start(i), end: a.end(i) });
                            return this.bufferedInfo(n, t, r)
                        }
                    } catch (e) {}
                    return { len: 0, start: t, end: t, nextStart: void 0 }
                }, e.bufferedInfo = function(e, t, r) {
                    e.sort((function(e, t) { var r = e.start - t.start; return r || t.end - e.end }));
                    var i = [];
                    if (r)
                        for (var a = 0; a < e.length; a++) {
                            var n = i.length;
                            if (n) {
                                var s = i[n - 1].end;
                                e[a].start - s < r ? e[a].end > s && (i[n - 1].end = e[a].end) : i.push(e[a])
                            } else i.push(e[a])
                        } else i = e;
                    for (var o, l = 0, d = t, u = t, c = 0; c < i.length; c++) {
                        var h = i[c].start,
                            f = i[c].end;
                        if (t + r >= h && t < f) d = h, l = (u = f) - t;
                        else if (t + r < h) { o = h; break }
                    }
                    return { len: l, start: d, end: u, nextStart: o }
                }, e
            }(),
            V = r(8),
            Y = r(11),
            W = r(9);

        function q() { return window.MediaSource || window.WebKitMediaSource }
        var z = r(5);
        var X = function(e) {
                var t, r;

                function i() { return e.apply(this, arguments) || this }
                return r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, i.prototype.trigger = function(e) {
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                    this.emit.apply(this, [e, e].concat(r))
                }, i
            }(V.EventEmitter),
            Q = Object(z.a)(),
            $ = q() || { isTypeSupported: function() { return !1 } },
            J = function() {
                function e(e, t) {
                    var r = this;
                    this.hls = e, this.id = t;
                    var i = this.observer = new X,
                        a = e.config,
                        n = function(t, i) {
                            (i = i || {}).frag = r.frag, i.id = r.id, e.trigger(t, i)
                        };
                    i.on(d.a.FRAG_DECRYPTED, n), i.on(d.a.FRAG_PARSING_INIT_SEGMENT, n), i.on(d.a.FRAG_PARSING_DATA, n), i.on(d.a.FRAG_PARSED, n), i.on(d.a.ERROR, n), i.on(d.a.FRAG_PARSING_METADATA, n), i.on(d.a.FRAG_PARSING_USERDATA, n), i.on(d.a.INIT_PTS_FOUND, n);
                    var s = { mp4: $.isTypeSupported("video/mp4"), mpeg: $.isTypeSupported("audio/mpeg"), mp3: $.isTypeSupported('audio/mp4; codecs="mp3"') },
                        l = navigator.vendor;
                    if (a.enableWorker && "undefined" != typeof Worker) {
                        var c;
                        u.b.log("demuxing in webworker");
                        try { c = this.w = Y(12), this.onwmsg = this.onWorkerMessage.bind(this), c.addEventListener("message", this.onwmsg), c.onerror = function(t) { e.trigger(d.a.ERROR, { type: o.b.OTHER_ERROR, details: o.a.INTERNAL_EXCEPTION, fatal: !0, event: "demuxerWorker", err: { message: t.message + " (" + t.filename + ":" + t.lineno + ")" } }) }, c.postMessage({ cmd: "init", typeSupported: s, vendor: l, id: t, config: JSON.stringify(a) }) } catch (e) { u.b.warn("Error in worker:", e), u.b.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"), c && Q.URL.revokeObjectURL(c.objectURL), this.demuxer = new W.a(i, s, a, l), this.w = void 0 }
                    } else this.demuxer = new W.a(i, s, a, l)
                }
                var t = e.prototype;
                return t.destroy = function() {
                    var e = this.w;
                    if (e) e.removeEventListener("message", this.onwmsg), e.terminate(), this.w = null;
                    else {
                        var t = this.demuxer;
                        t && (t.destroy(), this.demuxer = null)
                    }
                    var r = this.observer;
                    r && (r.removeAllListeners(), this.observer = null)
                }, t.push = function(e, t, r, i, a, n, s, o) {
                    var d = this.w,
                        c = Object(l.a)(a.startPTS) ? a.startPTS : a.start,
                        h = a.decryptdata,
                        f = this.frag,
                        g = !(f && a.cc === f.cc),
                        p = !(f && a.level === f.level),
                        v = f && a.sn === f.sn + 1,
                        m = !p && v;
                    if (g && u.b.log(this.id + ":discontinuity detected"), p && u.b.log(this.id + ":switch detected"), this.frag = a, d) d.postMessage({ cmd: "demux", data: e, decryptdata: h, initSegment: t, audioCodec: r, videoCodec: i, timeOffset: c, discontinuity: g, trackSwitch: p, contiguous: m, duration: n, accurateTimeOffset: s, defaultInitPTS: o }, e instanceof ArrayBuffer ? [e] : []);
                    else {
                        var y = this.demuxer;
                        y && y.push(e, h, t, r, i, c, g, p, m, n, s, o)
                    }
                }, t.onWorkerMessage = function(e) {
                    var t = e.data,
                        r = this.hls;
                    switch (t.event) {
                        case "init":
                            Q.URL.revokeObjectURL(this.w.objectURL);
                            break;
                        case d.a.FRAG_PARSING_DATA:
                            t.data.data1 = new Uint8Array(t.data1), t.data2 && (t.data.data2 = new Uint8Array(t.data2));
                        default:
                            t.data = t.data || {}, t.data.frag = this.frag, t.data.id = this.id, r.trigger(t.event, t.data)
                    }
                }, e
            }();

        function Z(e, t, r) {
            switch (t) {
                case "audio":
                    e.audioGroupIds || (e.audioGroupIds = []), e.audioGroupIds.push(r);
                    break;
                case "text":
                    e.textGroupIds || (e.textGroupIds = []), e.textGroupIds.push(r)
            }
        }

        function ee(e, t, r) {
            var i = e[t],
                a = e[r],
                n = a.startPTS;
            Object(l.a)(n) ? r > t ? (i.duration = n - i.start, i.duration < 0 && u.b.warn("negative duration computed for frag " + i.sn + ",level " + i.level + ", there should be some duration drift between playlist and fragment!")) : (a.duration = i.start - n, a.duration < 0 && u.b.warn("negative duration computed for frag " + a.sn + ",level " + a.level + ", there should be some duration drift between playlist and fragment!")) : a.start = r > t ? i.start + i.duration : Math.max(i.start - a.duration, 0)
        }

        function te(e, t, r, i, a, n) {
            var s = r;
            if (Object(l.a)(t.startPTS)) {
                var o = Math.abs(t.startPTS - r);
                Object(l.a)(t.deltaPTS) ? t.deltaPTS = Math.max(o, t.deltaPTS) : t.deltaPTS = o, s = Math.max(r, t.startPTS), r = Math.min(r, t.startPTS), i = Math.max(i, t.endPTS), a = Math.min(a, t.startDTS), n = Math.max(n, t.endDTS)
            }
            var d = r - t.start;
            t.start = t.startPTS = r, t.maxStartPTS = s, t.endPTS = i, t.startDTS = a, t.endDTS = n, t.duration = i - r;
            var u, c, h, f = t.sn;
            if (!e || f < e.startSN || f > e.endSN) return 0;
            for (u = f - e.startSN, (c = e.fragments)[u] = t, h = u; h > 0; h--) ee(c, h, h - 1);
            for (h = u; h < c.length - 1; h++) ee(c, h, h + 1);
            return e.PTSKnown = !0, d
        }

        function re(e, t) {
            t.initSegment && e.initSegment && (t.initSegment = e.initSegment);
            var r, i = 0;
            if (ie(e, t, (function(e, a) { i = e.cc - a.cc, Object(l.a)(e.startPTS) && (a.start = a.startPTS = e.startPTS, a.endPTS = e.endPTS, a.duration = e.duration, a.backtracked = e.backtracked, a.dropped = e.dropped, r = a), t.PTSKnown = !0 })), t.PTSKnown) {
                if (i) { u.b.log("discontinuity sliding from playlist, take drift into account"); for (var a = t.fragments, n = 0; n < a.length; n++) a[n].cc += i }
                r ? te(t, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS) : function(e, t) {
                    var r = t.startSN - e.startSN,
                        i = e.fragments,
                        a = t.fragments;
                    if (r < 0 || r > i.length) return;
                    for (var n = 0; n < a.length; n++) a[n].start += i[r].start
                }(e, t), t.PTSKnown = e.PTSKnown
            }
        }

        function ie(e, t, r) {
            if (e && t)
                for (var i = Math.max(e.startSN, t.startSN) - t.startSN, a = Math.min(e.endSN, t.endSN) - t.startSN, n = t.startSN - e.startSN, s = i; s <= a; s++) {
                    var o = e.fragments[n + s],
                        l = t.fragments[s];
                    if (!o || !l) break;
                    r(o, l, s)
                }
        }

        function ae(e, t, r) {
            var i = 1e3 * (t.averagetargetduration ? t.averagetargetduration : t.targetduration),
                a = i / 2;
            return e && t.endSN === e.endSN && (i = a), r && (i = Math.max(a, i - (window.performance.now() - r))), Math.round(i)
        }
        var ne = { toString: function(e) { for (var t = "", r = e.length, i = 0; i < r; i++) t += "[" + e.start(i).toFixed(3) + "," + e.end(i).toFixed(3) + "]"; return t } };

        function se(e, t) {
            t.fragments.forEach((function(t) {
                if (t) {
                    var r = t.start + e;
                    t.start = t.startPTS = r, t.endPTS = r + t.duration
                }
            })), t.PTSKnown = !0
        }

        function oe(e, t, r) {
            ! function(e, t, r) {
                if (function(e, t, r) { var i = !1; return t && t.details && r && (r.endCC > r.startCC || e && e.cc < r.startCC) && (i = !0), i }(e, r, t)) {
                    var i = function(e, t) {
                        var r = e.fragments,
                            i = t.fragments;
                        if (i.length && r.length) {
                            var a = function(e, t) { for (var r = null, i = 0; i < e.length; i += 1) { var a = e[i]; if (a && a.cc === t) { r = a; break } } return r }(r, i[0].cc);
                            if (a && (!a || a.startPTS)) return a;
                            u.b.log("No frag in previous level to align on")
                        } else u.b.log("No fragments to align")
                    }(r.details, t);
                    i && (u.b.log("Adjusting PTS using last level due to CC increase within current level"), se(i.start, t))
                }
            }(e, r, t), !r.PTSKnown && t && function(e, t) {
                if (t && t.fragments.length) {
                    if (!e.hasProgramDateTime || !t.hasProgramDateTime) return;
                    var r = t.fragments[0].programDateTime,
                        i = (e.fragments[0].programDateTime - r) / 1e3 + t.fragments[0].start;
                    Object(l.a)(i) && (u.b.log("adjusting PTS using programDateTime delta, sliding:" + i.toFixed(3)), se(i, e))
                }
            }(r, t.details)
        }

        function le(e, t, r) {
            if (null === t || !Array.isArray(e) || !e.length || !Object(l.a)(t)) return null;
            if (t < (e[0].programDateTime || 0)) return null;
            if (t >= (e[e.length - 1].endProgramDateTime || 0)) return null;
            r = r || 0;
            for (var i = 0; i < e.length; ++i) { var a = e[i]; if (ce(t, r, a)) return a }
            return null
        }

        function de(e, t, r, i) { void 0 === r && (r = 0), void 0 === i && (i = 0); var a = e ? t[e.sn - t[0].sn + 1] : null; return a && !ue(r, i, a) ? a : j.search(t, ue.bind(null, r, i)) }

        function ue(e, t, r) { void 0 === e && (e = 0), void 0 === t && (t = 0); var i = Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0)); return r.start + r.duration - i <= e ? 1 : r.start - i > e && r.start ? -1 : 0 }

        function ce(e, t, r) { var i = 1e3 * Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0)); return (r.endProgramDateTime || 0) - i > e }
        var he = function() {
            function e(e, t, r, i) { this.config = e, this.media = t, this.fragmentTracker = r, this.hls = i, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1 }
            var t = e.prototype;
            return t.poll = function(e) {
                var t = this.config,
                    r = this.media,
                    i = this.stalled,
                    a = r.currentTime,
                    n = r.seeking,
                    s = this.seeking && !n,
                    o = !this.seeking && n;
                if (this.seeking = n, a === e) {
                    if ((o || s) && (this.stalled = null), !r.paused && !r.ended && 0 !== r.playbackRate && r.buffered.length) {
                        var l = H.bufferInfo(r, a, 0),
                            d = l.len > 0,
                            c = l.nextStart || 0;
                        if (d || c) {
                            if (n) {
                                if (l.len > 2 || (!c || c - a > 2)) return;
                                this.moved = !1
                            }
                            if (!this.moved && this.stalled) { var h = Math.max(c, l.start || 0) - a; if (h > 0 && h <= 2) return void this._trySkipBufferHole(null) }
                            var f = self.performance.now();
                            if (null !== i) {
                                var g = f - i;
                                !n && g >= 250 && this._reportStall(l.len);
                                var p = H.bufferInfo(r, a, t.maxBufferHole);
                                this._tryFixBufferStall(p, g)
                            } else this.stalled = f
                        }
                    }
                } else if (this.moved = !0, null !== i) {
                    if (this.stallReported) {
                        var v = self.performance.now() - i;
                        u.b.warn("playback not stuck anymore @" + a + ", after " + Math.round(v) + "ms"), this.stallReported = !1
                    }
                    this.stalled = null, this.nudgeRetry = 0
                }
            }, t._tryFixBufferStall = function(e, t) {
                var r = this.config,
                    i = this.fragmentTracker,
                    a = this.media.currentTime,
                    n = i.getPartialFragment(a);
                if (n && this._trySkipBufferHole(n)) return;
                e.len > r.maxBufferHole && t > 1e3 * r.highBufferWatchdogPeriod && (u.b.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer())
            }, t._reportStall = function(e) {
                var t = this.hls,
                    r = this.media;
                this.stallReported || (this.stallReported = !0, u.b.warn("Playback stalling at @" + r.currentTime + " due to low buffer"), t.trigger(d.a.ERROR, { type: o.b.MEDIA_ERROR, details: o.a.BUFFER_STALLED_ERROR, fatal: !1, buffer: e }))
            }, t._trySkipBufferHole = function(e) {
                for (var t = this.config, r = this.hls, i = this.media, a = i.currentTime, n = 0, s = 0; s < i.buffered.length; s++) {
                    var l = i.buffered.start(s);
                    if (a + t.maxBufferHole >= n && a < l) { var c = Math.max(l + .05, i.currentTime + .1); return u.b.warn("skipping hole, adjusting currentTime from " + a + " to " + c), this.moved = !0, this.stalled = null, i.currentTime = c, e && r.trigger(d.a.ERROR, { type: o.b.MEDIA_ERROR, details: o.a.BUFFER_SEEK_OVER_HOLE, fatal: !1, reason: "fragment loaded with buffer holes, seeking from " + a + " to " + c, frag: e }), c }
                    n = i.buffered.end(s)
                }
                return 0
            }, t._tryNudgeBuffer = function() {
                var e = this.config,
                    t = this.hls,
                    r = this.media,
                    i = r.currentTime,
                    a = (this.nudgeRetry || 0) + 1;
                if (this.nudgeRetry = a, a < e.nudgeMaxRetry) {
                    var n = i + a * e.nudgeOffset;
                    u.b.warn("Nudging 'currentTime' from " + i + " to " + n), r.currentTime = n, t.trigger(d.a.ERROR, { type: o.b.MEDIA_ERROR, details: o.a.BUFFER_NUDGE_ON_STALL, fatal: !1 })
                } else u.b.error("Playhead still not moving while enough data buffered @" + i + " after " + e.nudgeMaxRetry + " nudges"), t.trigger(d.a.ERROR, { type: o.b.MEDIA_ERROR, details: o.a.BUFFER_STALLED_ERROR, fatal: !0 })
            }, e
        }();

        function fe(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }
        var ge = function(e) {
            var t, r;

            function i(t) { for (var r, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) a[n - 1] = arguments[n]; return (r = e.call.apply(e, [this, t].concat(a)) || this)._boundTick = void 0, r._tickTimer = null, r._tickInterval = null, r._tickCallCount = 0, r._boundTick = r.tick.bind(fe(r)), r }
            r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
            var a = i.prototype;
            return a.onHandlerDestroying = function() { this.clearNextTick(), this.clearInterval() }, a.hasInterval = function() { return !!this._tickInterval }, a.hasNextTick = function() { return !!this._tickTimer }, a.setInterval = function(e) { return !this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, e), !0) }, a.clearInterval = function() { return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, !0) }, a.clearNextTick = function() { return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0) }, a.tick = function() { this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && (this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0)), this._tickCallCount = 0) }, a.doTick = function() {}, i
        }(h);
        var pe = "STOPPED",
            ve = "STARTING",
            me = "IDLE",
            ye = "PAUSED",
            be = "KEY_LOADING",
            Te = "FRAG_LOADING",
            Ee = "FRAG_LOADING_WAITING_RETRY",
            Se = "WAITING_TRACK",
            _e = "PARSING",
            Ae = "PARSED",
            Re = "BUFFER_FLUSHING",
            we = "ENDED",
            ke = "ERROR",
            Le = "WAITING_INIT_PTS",
            De = "WAITING_LEVEL",
            Ce = function(e) {
                var t, r;

                function i() { return e.apply(this, arguments) || this }
                r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                var a = i.prototype;
                return a.doTick = function() {}, a.startLoad = function() {}, a.stopLoad = function() {
                    var e = this.fragCurrent;
                    e && (e.loader && e.loader.abort(), this.fragmentTracker.removeFragment(e)), this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = pe
                }, a._streamEnded = function(e, t) {
                    var r = this.fragCurrent,
                        i = this.fragmentTracker;
                    if (!t.live && r && !r.backtracked && r.sn === t.endSN && !e.nextStart) { var a = i.getState(r); return a === B || a === G }
                    return !1
                }, a.onMediaSeeking = function() {
                    var e = this.config,
                        t = this.media,
                        r = this.mediaBuffer,
                        i = this.state,
                        a = t ? t.currentTime : null,
                        n = H.bufferInfo(r || t, a, this.config.maxBufferHole);
                    if (Object(l.a)(a) && u.b.log("media seeking to " + a.toFixed(3)), i === Te) {
                        var s = this.fragCurrent;
                        if (0 === n.len && s) {
                            var o = e.maxFragLookUpTolerance,
                                d = s.start - o,
                                c = s.start + s.duration + o;
                            a < d || a > c ? (s.loader && (u.b.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), s.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = me) : u.b.log("seeking outside of buffer but within currently loaded fragment range")
                        }
                    } else i === we && (0 === n.len && (this.fragPrevious = null, this.fragCurrent = null), this.state = me);
                    t && (this.lastCurrentTime = a), this.loadedmetadata || (this.nextLoadPosition = this.startPosition = a), this.tick()
                }, a.onMediaEnded = function() { this.startPosition = this.lastCurrentTime = 0 }, a.onHandlerDestroying = function() { this.stopLoad(), e.prototype.onHandlerDestroying.call(this) }, a.onHandlerDestroyed = function() { this.state = pe, this.fragmentTracker = null }, a.computeLivePosition = function(e, t) { var r = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * t.targetduration; return e + Math.max(0, t.totalduration - r) }, i
            }(ge);

        function Oe(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var Ie = function(e) {
            var t, r;

            function i(t, r) { var i; return (i = e.call(this, t, d.a.MEDIA_ATTACHED, d.a.MEDIA_DETACHING, d.a.MANIFEST_LOADING, d.a.MANIFEST_PARSED, d.a.LEVEL_LOADED, d.a.KEY_LOADED, d.a.FRAG_LOADED, d.a.FRAG_LOAD_EMERGENCY_ABORTED, d.a.FRAG_PARSING_INIT_SEGMENT, d.a.FRAG_PARSING_DATA, d.a.FRAG_PARSED, d.a.ERROR, d.a.AUDIO_TRACK_SWITCHING, d.a.AUDIO_TRACK_SWITCHED, d.a.BUFFER_CREATED, d.a.BUFFER_APPENDED, d.a.BUFFER_FLUSHED) || this).fragmentTracker = r, i.config = t.config, i.audioCodecSwap = !1, i._state = pe, i.stallReported = !1, i.gapController = null, i.altAudio = !1, i }
            r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
            var a, s, c, h = i.prototype;
            return h.startLoad = function(e) {
                if (this.levels) {
                    var t = this.lastCurrentTime,
                        r = this.hls;
                    if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) { var i = r.startLevel; - 1 === i && (i = 0, this.bitrateTest = !0), this.level = r.nextLoadLevel = i, this.loadedmetadata = !1 }
                    t > 0 && -1 === e && (u.b.log("override startPosition with lastCurrentTime @" + t.toFixed(3)), e = t), this.state = me, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick()
                } else this.forceStartLoad = !0, this.state = pe
            }, h.stopLoad = function() { this.forceStartLoad = !1, e.prototype.stopLoad.call(this) }, h.doTick = function() {
                switch (this.state) {
                    case Re:
                        this.fragLoadError = 0;
                        break;
                    case me:
                        this._doTickIdle();
                        break;
                    case De:
                        var e = this.levels[this.level];
                        e && e.details && (this.state = me);
                        break;
                    case Ee:
                        var t = window.performance.now(),
                            r = this.retryDate;
                        (!r || t >= r || this.media && this.media.seeking) && (u.b.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = me)
                }
                this._checkBuffer(), this._checkFragmentChanged()
            }, h._doTickIdle = function() {
                var e = this.hls,
                    t = e.config,
                    r = this.media;
                if (void 0 !== this.levelLastLoaded && (r || !this.startFragRequested && t.startFragPrefetch)) {
                    var i;
                    i = this.loadedmetadata ? r.currentTime : this.nextLoadPosition;
                    var a = e.nextLoadLevel,
                        n = this.levels[a];
                    if (n) {
                        var s, o = n.bitrate;
                        s = o ? Math.max(8 * t.maxBufferSize / o, t.maxBufferLength) : t.maxBufferLength, s = Math.min(s, t.maxMaxBufferLength);
                        var l = H.bufferInfo(this.mediaBuffer ? this.mediaBuffer : r, i, t.maxBufferHole),
                            c = l.len;
                        if (!(c >= s)) {
                            u.b.trace("buffer length of " + c.toFixed(3) + " is below max of " + s.toFixed(3) + ". checking for more payload ..."), this.level = e.nextLoadLevel = a;
                            var h = n.details;
                            if (!h || h.live && this.levelLastLoaded !== a) this.state = De;
                            else {
                                if (this._streamEnded(l, h)) { var f = {}; return this.altAudio && (f.type = "video"), this.hls.trigger(d.a.BUFFER_EOS, f), void(this.state = we) }
                                this._fetchPayloadOrEos(i, l, h)
                            }
                        }
                    }
                }
            }, h._fetchPayloadOrEos = function(e, t, r) {
                var i = this.fragPrevious,
                    a = this.level,
                    n = r.fragments,
                    s = n.length;
                if (0 !== s) {
                    var o, l = n[0].start,
                        d = n[s - 1].start + n[s - 1].duration,
                        c = t.end;
                    if (r.initSegment && !r.initSegment.data) o = r.initSegment;
                    else if (r.live) { var h = this.config.initialLiveManifestSize; if (s < h) return void u.b.warn("Can not start playback of a level, reason: not enough fragments " + s + " < " + h); if (null === (o = this._ensureFragmentAtLivePoint(r, c, l, d, i, n, s))) return } else c < l && (o = n[0]);
                    o || (o = this._findFragment(l, i, s, n, c, d, r)), o && (o.encrypted ? (u.b.log("Loading key for " + o.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + a), this._loadKey(o)) : (u.b.log("Loading " + o.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + a + ", currentTime:" + e.toFixed(3) + ",bufferEnd:" + c.toFixed(3)), this._loadFragment(o)))
                }
            }, h._ensureFragmentAtLivePoint = function(e, t, r, i, a, n, s) {
                var o, l = this.hls.config,
                    d = this.media,
                    c = void 0 !== l.liveMaxLatencyDuration ? l.liveMaxLatencyDuration : l.liveMaxLatencyDurationCount * e.targetduration;
                if (t < Math.max(r - l.maxFragLookUpTolerance, i - c)) {
                    var h = this.liveSyncPosition = this.computeLivePosition(r, e);
                    u.b.log("buffer end: " + t.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + h.toFixed(3)), t = h, d && !d.paused && d.readyState && d.duration > h && (d.currentTime = h), this.nextLoadPosition = h
                }
                if (e.PTSKnown && t > i && d && d.readyState) return null;
                if (this.startFragRequested && !e.PTSKnown) {
                    if (a)
                        if (e.hasProgramDateTime) u.b.log("live playlist, switching playlist, load frag with same PDT: " + a.programDateTime), o = le(n, a.endProgramDateTime, l.maxFragLookUpTolerance);
                        else {
                            var f = a.sn + 1;
                            if (f >= e.startSN && f <= e.endSN) {
                                var g = n[f - e.startSN];
                                a.cc === g.cc && (o = g, u.b.log("live playlist, switching playlist, load frag with next SN: " + o.sn))
                            }
                            o || (o = j.search(n, (function(e) { return a.cc - e.cc }))) && u.b.log("live playlist, switching playlist, load frag with same CC: " + o.sn)
                        }
                    o || (o = n[Math.min(s - 1, Math.round(s / 2))], u.b.log("live playlist, switching playlist, unknown, load middle frag : " + o.sn))
                }
                return o
            }, h._findFragment = function(e, t, r, i, a, n, s) {
                var o, l = this.hls.config;
                a < n ? o = de(t, i, a, a > n - l.maxFragLookUpTolerance ? 0 : l.maxFragLookUpTolerance) : o = i[r - 1];
                if (o) {
                    var d = o.sn - s.startSN,
                        c = t && o.level === t.level,
                        h = i[d - 1],
                        f = i[d + 1];
                    if (t && o.sn === t.sn)
                        if (c && !o.backtracked)
                            if (o.sn < s.endSN) {
                                var g = t.deltaPTS;
                                g && g > l.maxBufferHole && t.dropped && d ? (o = h, u.b.warn("Previous fragment was dropped with large PTS gap between audio and video. Maybe fragment is not starting with a keyframe? Loading previous one to try to overcome this")) : (o = f, u.b.log("Re-loading fragment with SN: " + o.sn))
                            } else o = null;
                    else o.backtracked && (f && f.backtracked ? (u.b.warn("Already backtracked from fragment " + f.sn + ", will not backtrack to fragment " + o.sn + ". Loading fragment " + f.sn), o = f) : (u.b.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), o.dropped = 0, h ? (o = h).backtracked = !0 : d && (o = null)))
                }
                return o
            }, h._loadKey = function(e) { this.state = be, this.hls.trigger(d.a.KEY_LOADING, { frag: e }) }, h._loadFragment = function(e) {
                var t = this.fragmentTracker.getState(e);
                this.fragCurrent = e, "initSegment" !== e.sn && (this.startFragRequested = !0), Object(l.a)(e.sn) && !e.bitrateTest && (this.nextLoadPosition = e.start + e.duration), e.backtracked || t === U || t === B ? (e.autoLevel = this.hls.autoLevelEnabled, e.bitrateTest = this.bitrateTest, this.hls.trigger(d.a.FRAG_LOADING, { frag: e }), this.demuxer || (this.demuxer = new J(this.hls, "main")), this.state = Te) : t === N && this._reduceMaxBufferLength(e.duration) && this.fragmentTracker.removeFragment(e)
            }, h.getBufferedFrag = function(e) { return this.fragmentTracker.getBufferedFrag(e, n.MAIN) }, h.followingBufferedFrag = function(e) { return e ? this.getBufferedFrag(e.endPTS + .5) : null }, h._checkFragmentChanged = function() {
                var e, t, r = this.media;
                if (r && r.readyState && !1 === r.seeking && ((t = r.currentTime) > this.lastCurrentTime && (this.lastCurrentTime = t), H.isBuffered(r, t) ? e = this.getBufferedFrag(t) : H.isBuffered(r, t + .1) && (e = this.getBufferedFrag(t + .1)), e)) {
                    var i = e;
                    if (i !== this.fragPlaying) {
                        this.hls.trigger(d.a.FRAG_CHANGED, { frag: i });
                        var a = i.level;
                        this.fragPlaying && this.fragPlaying.level === a || this.hls.trigger(d.a.LEVEL_SWITCHED, { level: a }), this.fragPlaying = i
                    }
                }
            }, h.immediateLevelSwitch = function() {
                if (u.b.log("immediateLevelSwitch"), !this.immediateSwitch) {
                    this.immediateSwitch = !0;
                    var e, t = this.media;
                    t ? (e = t.paused, t.pause()) : e = !0, this.previouslyPaused = e
                }
                var r = this.fragCurrent;
                r && r.loader && r.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
            }, h.immediateLevelSwitchEnd = function() {
                var e = this.media;
                e && e.buffered.length && (this.immediateSwitch = !1, H.isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4), this.previouslyPaused || e.play())
            }, h.nextLevelSwitch = function() {
                var e = this.media;
                if (e && e.readyState) {
                    var t, r, i;
                    if ((r = this.getBufferedFrag(e.currentTime)) && r.startPTS > 1 && this.flushMainBuffer(0, r.startPTS - 1), e.paused) t = 0;
                    else {
                        var a = this.hls.nextLoadLevel,
                            n = this.levels[a],
                            s = this.fragLastKbps;
                        t = s && this.fragCurrent ? this.fragCurrent.duration * n.bitrate / (1e3 * s) + 1 : 0
                    }
                    if ((i = this.getBufferedFrag(e.currentTime + t)) && (i = this.followingBufferedFrag(i))) {
                        var o = this.fragCurrent;
                        o && o.loader && o.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(i.maxStartPTS, Number.POSITIVE_INFINITY)
                    }
                }
            }, h.flushMainBuffer = function(e, t) {
                this.state = Re;
                var r = { startOffset: e, endOffset: t };
                this.altAudio && (r.type = "video"), this.hls.trigger(d.a.BUFFER_FLUSHING, r)
            }, h.onMediaAttached = function(e) {
                var t = this.media = this.mediaBuffer = e.media;
                this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("seeked", this.onvseeked), t.addEventListener("ended", this.onvended);
                var r = this.config;
                this.levels && r.autoStartLoad && this.hls.startLoad(r.startPosition), this.gapController = new he(r, t, this.fragmentTracker, this.hls)
            }, h.onMediaDetaching = function() {
                var e = this.media;
                e && e.ended && (u.b.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
                var t = this.levels;
                t && t.forEach((function(e) { e.details && e.details.fragments.forEach((function(e) { e.backtracked = void 0 })) })), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("seeked", this.onvseeked), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.fragmentTracker.removeAllFragments(), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad()
            }, h.onMediaSeeked = function() {
                var e = this.media,
                    t = e ? e.currentTime : void 0;
                Object(l.a)(t) && u.b.log("media seeked to " + t.toFixed(3)), this.tick()
            }, h.onManifestLoading = function() { u.b.log("trigger BUFFER_RESET"), this.hls.trigger(d.a.BUFFER_RESET), this.fragmentTracker.removeAllFragments(), this.stalled = !1, this.startPosition = this.lastCurrentTime = 0 }, h.onManifestParsed = function(e) {
                var t, r = !1,
                    i = !1;
                e.levels.forEach((function(e) {
                    (t = e.audioCodec) && (-1 !== t.indexOf("mp4a.40.2") && (r = !0), -1 !== t.indexOf("mp4a.40.5") && (i = !0))
                })), this.audioCodecSwitch = r && i, this.audioCodecSwitch && u.b.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.altAudio = e.altAudio, this.levels = e.levels, this.startFragRequested = !1;
                var a = this.config;
                (a.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(a.startPosition)
            }, h.onLevelLoaded = function(e) {
                var t = e.details,
                    r = e.level,
                    i = this.levels[this.levelLastLoaded],
                    a = this.levels[r],
                    n = t.totalduration,
                    s = 0;
                if (u.b.log("level " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + n), t.live) {
                    var o = a.details;
                    o && t.fragments.length > 0 ? (re(o, t), s = t.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(s, o), t.PTSKnown && Object(l.a)(s) ? u.b.log("live playlist sliding:" + s.toFixed(3)) : (u.b.log("live playlist - outdated PTS, unknown sliding"), oe(this.fragPrevious, i, t))) : (u.b.log("live playlist - first load, unknown sliding"), t.PTSKnown = !1, oe(this.fragPrevious, i, t))
                } else t.PTSKnown = !1;
                if (a.details = t, this.levelLastLoaded = r, this.hls.trigger(d.a.LEVEL_UPDATED, { details: t, level: r }), !1 === this.startFragRequested) {
                    if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
                        var c = t.startTimeOffset;
                        Object(l.a)(c) ? (c < 0 && (u.b.log("negative start time offset " + c + ", count from end of last fragment"), c = s + n + c), u.b.log("start time offset found in playlist, adjust startPosition to " + c), this.startPosition = c) : t.live ? (this.startPosition = this.computeLivePosition(s, t), u.b.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0, this.lastCurrentTime = this.startPosition
                    }
                    this.nextLoadPosition = this.startPosition
                }
                this.state === De && (this.state = me), this.tick()
            }, h.onKeyLoaded = function() { this.state === be && (this.state = me, this.tick()) }, h.onFragLoaded = function(e) {
                var t = this.fragCurrent,
                    r = this.hls,
                    i = this.levels,
                    a = this.media,
                    n = e.frag;
                if (this.state === Te && t && "main" === n.type && n.level === t.level && n.sn === t.sn) {
                    var s = e.stats,
                        o = i[t.level],
                        l = o.details;
                    if (this.bitrateTest = !1, this.stats = s, u.b.log("Loaded " + t.sn + " of [" + l.startSN + " ," + l.endSN + "],level " + t.level), n.bitrateTest && r.nextLoadLevel) this.state = me, this.startFragRequested = !1, s.tparsed = s.tbuffered = window.performance.now(), r.trigger(d.a.FRAG_BUFFERED, { stats: s, frag: t, id: "main" }), this.tick();
                    else if ("initSegment" === n.sn) this.state = me, s.tparsed = s.tbuffered = window.performance.now(), l.initSegment.data = e.payload, r.trigger(d.a.FRAG_BUFFERED, { stats: s, frag: t, id: "main" }), this.tick();
                    else {
                        u.b.log("Parsing " + t.sn + " of [" + l.startSN + " ," + l.endSN + "],level " + t.level + ", cc " + t.cc), this.state = _e, this.pendingBuffering = !0, this.appended = !1, n.bitrateTest && (n.bitrateTest = !1, this.fragmentTracker.onFragLoaded({ frag: n }));
                        var c = !(a && a.seeking) && (l.PTSKnown || !l.live),
                            h = l.initSegment ? l.initSegment.data : [],
                            f = this._getAudioCodec(o);
                        (this.demuxer = this.demuxer || new J(this.hls, "main")).push(e.payload, h, f, o.videoCodec, t, l.totalduration, c)
                    }
                }
                this.fragLoadError = 0
            }, h.onFragParsingInitSegment = function(e) {
                var t = this.fragCurrent,
                    r = e.frag;
                if (t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === _e) {
                    var i, a, n = e.tracks;
                    if (n.audio && this.altAudio && delete n.audio, a = n.audio) {
                        var s = this.levels[this.level].audioCodec,
                            o = navigator.userAgent.toLowerCase();
                        s && this.audioCodecSwap && (u.b.log("swapping playlist audio codec"), s = -1 !== s.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), this.audioCodecSwitch && 1 !== a.metadata.channelCount && -1 === o.indexOf("firefox") && (s = "mp4a.40.5"), -1 !== o.indexOf("android") && "audio/mpeg" !== a.container && (s = "mp4a.40.2", u.b.log("Android: force audio codec to " + s)), a.levelCodec = s, a.id = e.id
                    }
                    for (i in (a = n.video) && (a.levelCodec = this.levels[this.level].videoCodec, a.id = e.id), this.hls.trigger(d.a.BUFFER_CODECS, n), n) {
                        a = n[i], u.b.log("main track:" + i + ",container:" + a.container + ",codecs[level/parsed]=[" + a.levelCodec + "/" + a.codec + "]");
                        var l = a.initSegment;
                        l && (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(d.a.BUFFER_APPENDING, { type: i, data: l, parent: "main", content: "initSegment" }))
                    }
                    this.tick()
                }
            }, h.onFragParsingData = function(e) {
                var t = this,
                    r = this.fragCurrent,
                    i = e.frag;
                if (r && "main" === e.id && i.sn === r.sn && i.level === r.level && ("audio" !== e.type || !this.altAudio) && this.state === _e) {
                    var a = this.levels[this.level],
                        n = r;
                    if (Object(l.a)(e.endPTS) || (e.endPTS = e.startPTS + r.duration, e.endDTS = e.startDTS + r.duration), !0 === e.hasAudio && n.addElementaryStream(p.AUDIO), !0 === e.hasVideo && n.addElementaryStream(p.VIDEO), u.b.log("Parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb + ",dropped:" + (e.dropped || 0)), "video" === e.type)
                        if (n.dropped = e.dropped, n.dropped)
                            if (n.backtracked) u.b.warn("Already backtracked on this fragment, appending with the gap", n.sn);
                            else {
                                var s = a.details;
                                if (!s || n.sn !== s.startSN) return u.b.warn("missing video frame(s), backtracking fragment", n.sn), this.fragmentTracker.removeFragment(n), n.backtracked = !0, this.nextLoadPosition = e.startPTS, this.state = me, this.fragPrevious = n, void this.tick();
                                u.b.warn("missing video frame(s) on first frag, appending with gap", n.sn)
                            }
                    else n.backtracked = !1;
                    var o = te(a.details, n, e.startPTS, e.endPTS, e.startDTS, e.endDTS),
                        c = this.hls;
                    c.trigger(d.a.LEVEL_PTS_UPDATED, { details: a.details, level: this.level, drift: o, type: e.type, start: e.startPTS, end: e.endPTS }), [e.data1, e.data2].forEach((function(r) { r && r.length && t.state === _e && (t.appended = !0, t.pendingBuffering = !0, c.trigger(d.a.BUFFER_APPENDING, { type: e.type, data: r, parent: "main", content: "data" })) })), this.tick()
                }
            }, h.onFragParsed = function(e) {
                var t = this.fragCurrent,
                    r = e.frag;
                t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === _e && (this.stats.tparsed = window.performance.now(), this.state = Ae, this._checkAppendedParsed())
            }, h.onAudioTrackSwitching = function(e) {
                var t = !!e.url,
                    r = e.id;
                if (!t) {
                    if (this.mediaBuffer !== this.media) {
                        u.b.log("switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                        var i = this.fragCurrent;
                        i.loader && (u.b.log("switching to main audio track, cancel main fragment load"), i.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = me
                    }
                    var a = this.hls;
                    a.trigger(d.a.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: "audio" }), a.trigger(d.a.AUDIO_TRACK_SWITCHED, { id: r }), this.altAudio = !1
                }
            }, h.onAudioTrackSwitched = function(e) {
                var t = e.id,
                    r = !!this.hls.audioTracks[t].url;
                if (r) {
                    var i = this.videoBuffer;
                    i && this.mediaBuffer !== i && (u.b.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = i)
                }
                this.altAudio = r, this.tick()
            }, h.onBufferCreated = function(e) {
                var t, r, i = e.tracks,
                    a = !1;
                for (var n in i) { var s = i[n]; "main" === s.id ? (r = n, t = s, "video" === n && (this.videoBuffer = i[n].buffer)) : a = !0 }
                a && t ? (u.b.log("alternate track found, use " + r + ".buffered to schedule main fragment loading"), this.mediaBuffer = t.buffer) : this.mediaBuffer = this.media
            }, h.onBufferAppended = function(e) {
                if ("main" === e.parent) {
                    var t = this.state;
                    t !== _e && t !== Ae || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed())
                }
            }, h._checkAppendedParsed = function() {
                if (!(this.state !== Ae || this.appended && this.pendingBuffering)) {
                    var e = this.fragCurrent;
                    if (e) {
                        var t = this.mediaBuffer ? this.mediaBuffer : this.media;
                        u.b.log("main buffered : " + ne.toString(t.buffered)), this.fragPrevious = e;
                        var r = this.stats;
                        r.tbuffered = window.performance.now(), this.fragLastKbps = Math.round(8 * r.total / (r.tbuffered - r.tfirst)), this.hls.trigger(d.a.FRAG_BUFFERED, { stats: r, frag: e, id: "main" }), this.state = me
                    }
                    this.tick()
                }
            }, h.onError = function(e) {
                var t = e.frag || this.fragCurrent;
                if (!t || "main" === t.type) {
                    var r = !!this.media && H.isBuffered(this.media, this.media.currentTime) && H.isBuffered(this.media, this.media.currentTime + .5);
                    switch (e.details) {
                        case o.a.FRAG_LOAD_ERROR:
                        case o.a.FRAG_LOAD_TIMEOUT:
                        case o.a.KEY_LOAD_ERROR:
                        case o.a.KEY_LOAD_TIMEOUT:
                            if (!e.fatal)
                                if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
                                    var i = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
                                    u.b.warn("mediaController: frag loading failed, retry in " + i + " ms"), this.retryDate = window.performance.now() + i, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.fragLoadError++, this.state = Ee
                                } else u.b.error("mediaController: " + e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.state = ke;
                            break;
                        case o.a.LEVEL_LOAD_ERROR:
                        case o.a.LEVEL_LOAD_TIMEOUT:
                            this.state !== ke && (e.fatal ? (this.state = ke, u.b.warn("streamController: " + e.details + ",switch to " + this.state + " state ...")) : e.levelRetry || this.state !== De || (this.state = me));
                            break;
                        case o.a.BUFFER_FULL_ERROR:
                            "main" !== e.parent || this.state !== _e && this.state !== Ae || (r ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = me) : (u.b.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)))
                    }
                }
            }, h._reduceMaxBufferLength = function(e) { var t = this.config; return t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2, u.b.warn("main:reduce max buffer length to " + t.maxMaxBufferLength + "s"), !0) }, h._checkBuffer = function() { var e = this.media; if (e && 0 !== e.readyState) { var t = (this.mediaBuffer ? this.mediaBuffer : e).buffered;!this.loadedmetadata && t.length ? (this.loadedmetadata = !0, this._seekToStartPos()) : this.immediateSwitch ? this.immediateLevelSwitchEnd() : this.gapController.poll(this.lastCurrentTime, t) } }, h.onFragLoadEmergencyAborted = function() { this.state = me, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tick() }, h.onBufferFlushed = function() {
                var e = this.mediaBuffer ? this.mediaBuffer : this.media;
                e && this.fragmentTracker.detectEvictedFragments(p.VIDEO, e.buffered), this.state = me, this.fragPrevious = null
            }, h.swapAudioCodec = function() { this.audioCodecSwap = !this.audioCodecSwap }, h._seekToStartPos = function() {
                var e = this.media,
                    t = e.currentTime,
                    r = e.seeking ? t : this.startPosition;
                t !== r && r >= 0 && (u.b.log("target start position not buffered, seek to buffered.start(0) " + r + " from current time " + t + " "), e.currentTime = r)
            }, h._getAudioCodec = function(e) { var t = this.config.defaultAudioCodec || e.audioCodec; return this.audioCodecSwap && (u.b.log("swapping playlist audio codec"), t && (t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")), t }, a = i, (s = [{
                key: "state",
                set: function(e) {
                    if (this.state !== e) {
                        var t = this.state;
                        this._state = e, u.b.log("main stream-controller: " + t + "->" + e), this.hls.trigger(d.a.STREAM_STATE_TRANSITION, { previousState: t, nextState: e })
                    }
                },
                get: function() { return this._state }
            }, { key: "currentLevel", get: function() { var e = this.media; if (e) { var t = this.getBufferedFrag(e.currentTime); if (t) return t.level } return -1 } }, { key: "nextBufferedFrag", get: function() { var e = this.media; return e ? this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)) : null } }, { key: "nextLevel", get: function() { var e = this.nextBufferedFrag; return e ? e.level : -1 } }, { key: "liveSyncPosition", get: function() { return this._liveSyncPosition }, set: function(e) { this._liveSyncPosition = e } }]) && Oe(a.prototype, s), c && Oe(a, c), i
        }(Ce);

        function Pe(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        window.performance;
        var xe, Me = function(e) {
                var t, r;

                function i(t) { var r; return (r = e.call(this, t, d.a.MANIFEST_LOADED, d.a.LEVEL_LOADED, d.a.AUDIO_TRACK_SWITCHED, d.a.FRAG_LOADED, d.a.ERROR) || this).canload = !1, r.currentLevelIndex = null, r.manualLevelIndex = -1, r.timer = null, xe = /chrome|firefox/.test(navigator.userAgent.toLowerCase()), r }
                r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                var a, n, s, l = i.prototype;
                return l.onHandlerDestroying = function() { this.clearTimer(), this.manualLevelIndex = -1 }, l.clearTimer = function() { null !== this.timer && (clearTimeout(this.timer), this.timer = null) }, l.startLoad = function() {
                    var e = this._levels;
                    this.canload = !0, this.levelRetryCount = 0, e && e.forEach((function(e) {
                        e.loadError = 0;
                        var t = e.details;
                        t && t.live && (e.details = void 0)
                    })), null !== this.timer && this.loadLevel()
                }, l.stopLoad = function() { this.canload = !1 }, l.onManifestLoaded = function(e) {
                    var t, r = [],
                        i = [],
                        a = {},
                        n = null,
                        s = !1,
                        l = !1;
                    if (e.levels.forEach((function(e) {
                            var t = e.attrs;
                            e.loadError = 0, e.fragmentError = !1, s = s || !!e.videoCodec, l = l || !!e.audioCodec, xe && e.audioCodec && -1 !== e.audioCodec.indexOf("mp4a.40.34") && (e.audioCodec = void 0), (n = a[e.bitrate]) ? n.url.push(e.url) : (e.url = [e.url], e.urlId = 0, a[e.bitrate] = e, r.push(e)), t && (t.AUDIO && (l = !0, Z(n || e, "audio", t.AUDIO)), t.SUBTITLES && Z(n || e, "text", t.SUBTITLES))
                        })), s && l && (r = r.filter((function(e) { return !!e.videoCodec }))), r = r.filter((function(e) {
                            var t = e.audioCodec,
                                r = e.videoCodec;
                            return (!t || R(t, "audio")) && (!r || R(r, "video"))
                        })), e.audioTracks && (i = e.audioTracks.filter((function(e) { return !e.audioCodec || R(e.audioCodec, "audio") }))).forEach((function(e, t) { e.id = t })), r.length > 0) {
                        t = r[0].bitrate, r.sort((function(e, t) { return e.bitrate - t.bitrate })), this._levels = r;
                        for (var c = 0; c < r.length; c++)
                            if (r[c].bitrate === t) { this._firstLevel = c, u.b.log("manifest loaded," + r.length + " level(s) found, first bitrate:" + t); break }
                        this.hls.trigger(d.a.MANIFEST_PARSED, { levels: r, audioTracks: i, firstLevel: this._firstLevel, stats: e.stats, audio: l, video: s, altAudio: i.some((function(e) { return !!e.url })) })
                    } else this.hls.trigger(d.a.ERROR, { type: o.b.MEDIA_ERROR, details: o.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR, fatal: !0, url: this.hls.url, reason: "no level with compatible codecs found in manifest" })
                }, l.setLevelInternal = function(e) {
                    var t = this._levels,
                        r = this.hls;
                    if (e >= 0 && e < t.length) {
                        if (this.clearTimer(), this.currentLevelIndex !== e) {
                            u.b.log("switching to level " + e), this.currentLevelIndex = e;
                            var i = t[e];
                            i.level = e, r.trigger(d.a.LEVEL_SWITCHING, i)
                        }
                        var a = t[e],
                            n = a.details;
                        if (!n || n.live) {
                            var s = a.urlId;
                            r.trigger(d.a.LEVEL_LOADING, { url: a.url[s], level: e, id: s })
                        }
                    } else r.trigger(d.a.ERROR, { type: o.b.OTHER_ERROR, details: o.a.LEVEL_SWITCH_ERROR, level: e, fatal: !1, reason: "invalid level idx" })
                }, l.onError = function(e) {
                    if (e.fatal) e.type === o.b.NETWORK_ERROR && this.clearTimer();
                    else {
                        var t, r = !1,
                            i = !1;
                        switch (e.details) {
                            case o.a.FRAG_LOAD_ERROR:
                            case o.a.FRAG_LOAD_TIMEOUT:
                            case o.a.KEY_LOAD_ERROR:
                            case o.a.KEY_LOAD_TIMEOUT:
                                t = e.frag.level, i = !0;
                                break;
                            case o.a.LEVEL_LOAD_ERROR:
                            case o.a.LEVEL_LOAD_TIMEOUT:
                                t = e.context.level, r = !0;
                                break;
                            case o.a.REMUX_ALLOC_ERROR:
                                t = e.level, r = !0
                        }
                        void 0 !== t && this.recoverLevel(e, t, r, i)
                    }
                }, l.recoverLevel = function(e, t, r, i) {
                    var a, n, s, o = this,
                        l = this.hls.config,
                        d = e.details,
                        c = this._levels[t];
                    if (c.loadError++, c.fragmentError = i, r) {
                        if (!(this.levelRetryCount + 1 <= l.levelLoadingMaxRetry)) return u.b.error("level controller, cannot recover from " + d + " error"), this.currentLevelIndex = null, this.clearTimer(), void(e.fatal = !0);
                        n = Math.min(Math.pow(2, this.levelRetryCount) * l.levelLoadingRetryDelay, l.levelLoadingMaxRetryTimeout), this.timer = setTimeout((function() { return o.loadLevel() }), n), e.levelRetry = !0, this.levelRetryCount++, u.b.warn("level controller, " + d + ", retry in " + n + " ms, current retry count is " + this.levelRetryCount)
                    }(r || i) && ((a = c.url.length) > 1 && c.loadError < a ? (c.urlId = (c.urlId + 1) % a, c.details = void 0, u.b.warn("level controller, " + d + " for level " + t + ": switching to redundant URL-id " + c.urlId)) : -1 === this.manualLevelIndex ? (s = 0 === t ? this._levels.length - 1 : t - 1, u.b.warn("level controller, " + d + ": switch to " + s), this.hls.nextAutoLevel = this.currentLevelIndex = s) : i && (u.b.warn("level controller, " + d + ": reload a fragment"), this.currentLevelIndex = null))
                }, l.onFragLoaded = function(e) {
                    var t = e.frag;
                    if (void 0 !== t && "main" === t.type) {
                        var r = this._levels[t.level];
                        void 0 !== r && (r.fragmentError = !1, r.loadError = 0, this.levelRetryCount = 0)
                    }
                }, l.onLevelLoaded = function(e) {
                    var t = this,
                        r = e.level,
                        i = e.details;
                    if (r === this.currentLevelIndex) {
                        var a = this._levels[r];
                        if (a.fragmentError || (a.loadError = 0, this.levelRetryCount = 0), i.live) {
                            var n = ae(a.details, i, e.stats.trequest);
                            u.b.log("live playlist, reload in " + Math.round(n) + " ms"), this.timer = setTimeout((function() { return t.loadLevel() }), n)
                        } else this.clearTimer()
                    }
                }, l.onAudioTrackSwitched = function(e) {
                    var t = this.hls.audioTracks[e.id].groupId,
                        r = this.hls.levels[this.currentLevelIndex];
                    if (r && r.audioGroupIds) {
                        for (var i = -1, a = 0; a < r.audioGroupIds.length; a++)
                            if (r.audioGroupIds[a] === t) { i = a; break }
                        i !== r.urlId && (r.urlId = i, this.startLoad())
                    }
                }, l.loadLevel = function() {
                    if (u.b.debug("call to loadLevel"), null !== this.currentLevelIndex && this.canload) {
                        var e = this._levels[this.currentLevelIndex];
                        if ("object" == typeof e && e.url.length > 0) {
                            var t = this.currentLevelIndex,
                                r = e.urlId,
                                i = e.url[r];
                            u.b.log("Attempt loading level index " + t + " with URL-id " + r), this.hls.trigger(d.a.LEVEL_LOADING, { url: i, level: t, id: r })
                        }
                    }
                }, a = i, (n = [{ key: "levels", get: function() { return this._levels } }, {
                    key: "level",
                    get: function() { return this.currentLevelIndex },
                    set: function(e) {
                        var t = this._levels;
                        t && (e = Math.min(e, t.length - 1), this.currentLevelIndex === e && t[e].details || this.setLevelInternal(e))
                    }
                }, { key: "manualLevel", get: function() { return this.manualLevelIndex }, set: function(e) { this.manualLevelIndex = e, void 0 === this._startLevel && (this._startLevel = e), -1 !== e && (this.level = e) } }, { key: "firstLevel", get: function() { return this._firstLevel }, set: function(e) { this._firstLevel = e } }, { key: "startLevel", get: function() { if (void 0 === this._startLevel) { var e = this.hls.config.startLevel; return void 0 !== e ? e : this._firstLevel } return this._startLevel }, set: function(e) { this._startLevel = e } }, { key: "nextLoadLevel", get: function() { return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel }, set: function(e) { this.level = e, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e) } }]) && Pe(a.prototype, n), s && Pe(a, s), i
            }(h),
            Fe = r(4);

        function Ue(e, t) {
            var r;
            try { r = new Event("addtrack") } catch (e) {
                (r = document.createEvent("Event")).initEvent("addtrack", !1, !1)
            }
            r.track = e, t.dispatchEvent(r)
        }

        function Ne(e) {
            if (e && e.cues)
                for (; e.cues.length > 0;) e.removeCue(e.cues[0])
        }
        var Be = function(e) {
            var t, r;

            function i(t) { var r; return (r = e.call(this, t, d.a.MEDIA_ATTACHED, d.a.MEDIA_DETACHING, d.a.FRAG_PARSING_METADATA, d.a.LIVE_BACK_BUFFER_REACHED) || this).id3Track = void 0, r.media = void 0, r }
            r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
            var a = i.prototype;
            return a.destroy = function() { h.prototype.destroy.call(this) }, a.onMediaAttached = function(e) { this.media = e.media, this.media }, a.onMediaDetaching = function() { Ne(this.id3Track), this.id3Track = void 0, this.media = void 0 }, a.getID3Track = function(e) { for (var t = 0; t < e.length; t++) { var r = e[t]; if ("metadata" === r.kind && "id3" === r.label) return Ue(r, this.media), r } return this.media.addTextTrack("metadata", "id3") }, a.onFragParsingMetadata = function(e) {
                var t = e.frag,
                    r = e.samples;
                this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
                for (var i = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, a = 0; a < r.length; a++) {
                    var n = Fe.a.getID3Frames(r[a].data);
                    if (n) {
                        var s = r[a].pts,
                            o = a < r.length - 1 ? r[a + 1].pts : t.endPTS;
                        s === o ? o += 1e-4 : s > o && (u.b.warn("detected an id3 sample with endTime < startTime, adjusting endTime to (startTime + 0.25)"), o = s + .25);
                        for (var l = 0; l < n.length; l++) {
                            var d = n[l];
                            if (!Fe.a.isTimeStampFrame(d)) {
                                var c = new i(s, o, "");
                                c.value = d, this.id3Track.addCue(c)
                            }
                        }
                    }
                }
            }, a.onLiveBackBufferReached = function(e) {
                var t = e.bufferEnd,
                    r = this.id3Track;
                if (r && r.cues && r.cues.length) {
                    var i = function(e, t) {
                        if (t < e[0].endTime) return e[0];
                        if (t > e[e.length - 1].endTime) return e[e.length - 1];
                        for (var r = 0, i = e.length - 1; r <= i;) {
                            var a = Math.floor((i + r) / 2);
                            if (t < e[a].endTime) i = a - 1;
                            else {
                                if (!(t > e[a].endTime)) return e[a];
                                r = a + 1
                            }
                        }
                        return e[r].endTime - t < t - e[i].endTime ? e[r] : e[i]
                    }(r.cues, t);
                    if (i)
                        for (; r.cues[0] !== i;) r.removeCue(r.cues[0])
                }
            }, i
        }(h);
        var Ge = function() {
                function e(e) { this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0, this.estimate_ = 0, this.totalWeight_ = 0 }
                var t = e.prototype;
                return t.sample = function(e, t) {
                    var r = Math.pow(this.alpha_, e);
                    this.estimate_ = t * (1 - r) + r * this.estimate_, this.totalWeight_ += e
                }, t.getTotalWeight = function() { return this.totalWeight_ }, t.getEstimate = function() { if (this.alpha_) { var e = 1 - Math.pow(this.alpha_, this.totalWeight_); return this.estimate_ / e } return this.estimate_ }, e
            }(),
            Ke = function() {
                function e(e, t, r, i) { this.hls = void 0, this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.hls = e, this.defaultEstimate_ = i, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new Ge(t), this.fast_ = new Ge(r) }
                var t = e.prototype;
                return t.sample = function(e, t) {
                    var r = (e = Math.max(e, this.minDelayMs_)) / 1e3,
                        i = 8 * t / r;
                    this.fast_.sample(r, i), this.slow_.sample(r, i)
                }, t.canEstimate = function() { var e = this.fast_; return e && e.getTotalWeight() >= this.minWeight_ }, t.getEstimate = function() { return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_ }, t.destroy = function() {}, e
            }();

        function je(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var He = window.performance,
            Ve = function(e) {
                var t, r;

                function i(t) { var r; return (r = e.call(this, t, d.a.FRAG_LOADING, d.a.FRAG_LOADED, d.a.FRAG_BUFFERED, d.a.ERROR) || this).lastLoadedFragLevel = 0, r._nextAutoLevel = -1, r.hls = t, r.timer = null, r._bwEstimator = null, r.onCheck = r._abandonRulesCheck.bind(function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(r)), r }
                r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                var a, n, s, c = i.prototype;
                return c.destroy = function() { this.clearTimer(), h.prototype.destroy.call(this) }, c.onFragLoading = function(e) {
                    var t = e.frag;
                    if ("main" === t.type && (this.timer || (this.fragCurrent = t, this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator)) {
                        var r, i, a = this.hls,
                            n = a.config,
                            s = t.level;
                        a.levels[s].details.live ? (r = n.abrEwmaFastLive, i = n.abrEwmaSlowLive) : (r = n.abrEwmaFastVoD, i = n.abrEwmaSlowVoD), this._bwEstimator = new Ke(a, i, r, n.abrEwmaDefaultEstimate)
                    }
                }, c._abandonRulesCheck = function() {
                    var e = this.hls,
                        t = e.media,
                        r = this.fragCurrent;
                    if (r) {
                        var i = r.loader,
                            a = e.minAutoLevel;
                        if (!i || i.stats && i.stats.aborted) return u.b.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), void(this._nextAutoLevel = -1);
                        var n = i.stats;
                        if (t && n && (!t.paused && 0 !== t.playbackRate || !t.readyState) && r.autoLevel && r.level) {
                            var s = He.now() - n.trequest,
                                o = Math.abs(t.playbackRate);
                            if (s > 500 * r.duration / o) {
                                var l = e.levels,
                                    c = Math.max(1, n.bw ? n.bw / 8 : 1e3 * n.loaded / s),
                                    h = l[r.level],
                                    f = h.realBitrate ? Math.max(h.realBitrate, h.bitrate) : h.bitrate,
                                    g = n.total ? n.total : Math.max(n.loaded, Math.round(r.duration * f / 8)),
                                    p = t.currentTime,
                                    v = (g - n.loaded) / c,
                                    m = (H.bufferInfo(t, p, e.config.maxBufferHole).end - p) / o;
                                if (m < 2 * r.duration / o && v > m) {
                                    var y;
                                    for (y = r.level - 1; y > a; y--) { var b = l[y].realBitrate ? Math.max(l[y].realBitrate, l[y].bitrate) : l[y].bitrate; if (r.duration * b / (6.4 * c) < m) break }
                                    void 0 < v && (u.b.warn("loading too slow, abort fragment loading and switch to level " + y + ":fragLoadedDelay[" + y + "]<fragLoadedDelay[" + (r.level - 1) + "];bufferStarvationDelay:" + (void 0).toFixed(1) + "<" + v.toFixed(1) + ":" + m.toFixed(1)), e.nextLoadLevel = y, this._bwEstimator.sample(s, n.loaded), i.abort(), this.clearTimer(), e.trigger(d.a.FRAG_LOAD_EMERGENCY_ABORTED, { frag: r, stats: n }))
                                }
                            }
                        }
                    }
                }, c.onFragLoaded = function(e) {
                    var t = e.frag;
                    if ("main" === t.type && Object(l.a)(t.sn)) {
                        if (this.clearTimer(), this.lastLoadedFragLevel = t.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                            var r = this.hls.levels[t.level],
                                i = (r.loaded ? r.loaded.bytes : 0) + e.stats.loaded,
                                a = (r.loaded ? r.loaded.duration : 0) + e.frag.duration;
                            r.loaded = { bytes: i, duration: a }, r.realBitrate = Math.round(8 * i / a)
                        }
                        if (e.frag.bitrateTest) {
                            var n = e.stats;
                            n.tparsed = n.tbuffered = n.tload, this.onFragBuffered(e)
                        }
                    }
                }, c.onFragBuffered = function(e) {
                    var t = e.stats,
                        r = e.frag;
                    if (!0 !== t.aborted && "main" === r.type && Object(l.a)(r.sn) && (!r.bitrateTest || t.tload === t.tbuffered)) {
                        var i = t.tparsed - t.trequest;
                        u.b.log("latency/loading/parsing/append/kbps:" + Math.round(t.tfirst - t.trequest) + "/" + Math.round(t.tload - t.tfirst) + "/" + Math.round(t.tparsed - t.tload) + "/" + Math.round(t.tbuffered - t.tparsed) + "/" + Math.round(8 * t.loaded / (t.tbuffered - t.trequest))), this._bwEstimator.sample(i, t.loaded), t.bwEstimate = this._bwEstimator.getEstimate(), r.bitrateTest ? this.bitrateTestDelay = i / 1e3 : this.bitrateTestDelay = 0
                    }
                }, c.onError = function(e) {
                    switch (e.details) {
                        case o.a.FRAG_LOAD_ERROR:
                        case o.a.FRAG_LOAD_TIMEOUT:
                            this.clearTimer()
                    }
                }, c.clearTimer = function() { clearInterval(this.timer), this.timer = null }, c._findBestLevel = function(e, t, r, i, a, n, s, o, l) {
                    for (var d = a; d >= i; d--) {
                        var c = l[d];
                        if (c) {
                            var h = c.details,
                                f = h ? h.totalduration / h.fragments.length : t,
                                g = !!h && h.live,
                                p = void 0;
                            p = d <= e ? s * r : o * r;
                            var v = l[d].realBitrate ? Math.max(l[d].realBitrate, l[d].bitrate) : l[d].bitrate,
                                m = v * f / p;
                            if (u.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + d + "/" + Math.round(p) + "/" + v + "/" + f + "/" + n + "/" + m), p > v && (!m || g && !this.bitrateTestDelay || m < n)) return d
                        }
                    }
                    return -1
                }, a = i, (n = [{
                    key: "nextAutoLevel",
                    get: function() {
                        var e = this._nextAutoLevel,
                            t = this._bwEstimator;
                        if (!(-1 === e || t && t.canEstimate())) return e;
                        var r = this._nextABRAutoLevel;
                        return -1 !== e && (r = Math.min(e, r)), r
                    },
                    set: function(e) { this._nextAutoLevel = e }
                }, {
                    key: "_nextABRAutoLevel",
                    get: function() {
                        var e = this.hls,
                            t = e.maxAutoLevel,
                            r = e.levels,
                            i = e.config,
                            a = e.minAutoLevel,
                            n = e.media,
                            s = this.lastLoadedFragLevel,
                            o = this.fragCurrent ? this.fragCurrent.duration : 0,
                            l = n ? n.currentTime : 0,
                            d = n && 0 !== n.playbackRate ? Math.abs(n.playbackRate) : 1,
                            c = this._bwEstimator ? this._bwEstimator.getEstimate() : i.abrEwmaDefaultEstimate,
                            h = (H.bufferInfo(n, l, i.maxBufferHole).end - l) / d,
                            f = this._findBestLevel(s, o, c, a, t, h, i.abrBandWidthFactor, i.abrBandWidthUpFactor, r);
                        if (f >= 0) return f;
                        u.b.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
                        var g = o ? Math.min(o, i.maxStarvationDelay) : i.maxStarvationDelay,
                            p = i.abrBandWidthFactor,
                            v = i.abrBandWidthUpFactor;
                        if (0 === h) {
                            var m = this.bitrateTestDelay;
                            m && (g = (o ? Math.min(o, i.maxLoadingDelay) : i.maxLoadingDelay) - m, u.b.trace("bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * g) + " ms"), p = v = 1)
                        }
                        return f = this._findBestLevel(s, o, c, a, t, h + g, p, v, r), Math.max(f, 0)
                    }
                }]) && je(a.prototype, n), s && je(a, s), i
            }(h);
        var Ye = q(),
            We = function(e) {
                var t, r;

                function i(t) {
                    var r;
                    return (r = e.call(this, t, d.a.MEDIA_ATTACHING, d.a.MEDIA_DETACHING, d.a.MANIFEST_PARSED, d.a.BUFFER_RESET, d.a.BUFFER_APPENDING, d.a.BUFFER_CODECS, d.a.BUFFER_EOS, d.a.BUFFER_FLUSHING, d.a.LEVEL_PTS_UPDATED, d.a.LEVEL_UPDATED) || this)._msDuration = null, r._levelDuration = null, r._levelTargetDuration = 10, r._live = null, r._objectUrl = null, r._needsFlush = !1, r._needsEos = !1, r.config = void 0, r.audioTimestampOffset = void 0, r.bufferCodecEventsExpected = 0, r._bufferCodecEventsTotal = 0, r.media = null, r.mediaSource = null, r.segments = [], r.parent = void 0, r.appending = !1, r.appended = 0, r.appendError = 0, r.flushBufferCounter = 0, r.tracks = {}, r.pendingTracks = {}, r.sourceBuffer = {}, r.flushRange = [], r._onMediaSourceOpen = function() {
                        u.b.log("media source opened"), r.hls.trigger(d.a.MEDIA_ATTACHED, { media: r.media });
                        var e = r.mediaSource;
                        e && e.removeEventListener("sourceopen", r._onMediaSourceOpen), r.checkPendingTracks()
                    }, r._onMediaSourceClose = function() { u.b.log("media source closed") }, r._onMediaSourceEnded = function() { u.b.log("media source ended") }, r._onSBUpdateEnd = function() {
                        if (r.audioTimestampOffset && r.sourceBuffer.audio) {
                            var e = r.sourceBuffer.audio;
                            u.b.warn("change mpeg audio timestamp offset from " + e.timestampOffset + " to " + r.audioTimestampOffset), e.timestampOffset = r.audioTimestampOffset, delete r.audioTimestampOffset
                        }
                        r._needsFlush && r.doFlush(), r._needsEos && r.checkEos(), r.appending = !1;
                        var t = r.parent,
                            i = r.segments.reduce((function(e, r) { return r.parent === t ? e + 1 : e }), 0),
                            a = {},
                            n = r.sourceBuffer;
                        for (var s in n) {
                            var o = n[s];
                            if (!o) throw Error("handling source buffer update end error: source buffer for " + s + " uninitilized and unable to update buffered TimeRanges.");
                            a[s] = o.buffered
                        }
                        r.hls.trigger(d.a.BUFFER_APPENDED, { parent: t, pending: i, timeRanges: a }), r._needsFlush || r.doAppending(), r.updateMediaElementDuration(), 0 === i && r.flushLiveBackBuffer()
                    }, r._onSBUpdateError = function(e) { u.b.error("sourceBuffer error:", e), r.hls.trigger(d.a.ERROR, { type: o.b.MEDIA_ERROR, details: o.a.BUFFER_APPENDING_ERROR, fatal: !1 }) }, r.config = t.config, r
                }
                r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                var a = i.prototype;
                return a.destroy = function() { h.prototype.destroy.call(this) }, a.onLevelPtsUpdated = function(e) {
                    var t = e.type,
                        r = this.tracks.audio;
                    if ("audio" === t && r && "audio/mpeg" === r.container) {
                        var i = this.sourceBuffer.audio;
                        if (!i) throw Error("Level PTS Updated and source buffer for audio uninitalized");
                        if (Math.abs(i.timestampOffset - e.start) > .1) {
                            var a = i.updating;
                            try { i.abort() } catch (e) { u.b.warn("can not abort audio buffer: " + e) }
                            a ? this.audioTimestampOffset = e.start : (u.b.warn("change mpeg audio timestamp offset from " + i.timestampOffset + " to " + e.start), i.timestampOffset = e.start)
                        }
                    }
                }, a.onManifestParsed = function(e) { this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = e.altAudio ? 2 : 1, u.b.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected") }, a.onMediaAttaching = function(e) {
                    var t = this.media = e.media;
                    if (t && Ye) {
                        var r = this.mediaSource = new Ye;
                        r.addEventListener("sourceopen", this._onMediaSourceOpen), r.addEventListener("sourceended", this._onMediaSourceEnded), r.addEventListener("sourceclose", this._onMediaSourceClose), t.src = window.URL.createObjectURL(r), this._objectUrl = t.src
                    }
                }, a.onMediaDetaching = function() {
                    u.b.log("media source detaching");
                    var e = this.mediaSource;
                    if (e) {
                        if ("open" === e.readyState) try { e.endOfStream() } catch (e) { u.b.warn("onMediaDetaching:" + e.message + " while calling endOfStream") }
                        e.removeEventListener("sourceopen", this._onMediaSourceOpen), e.removeEventListener("sourceended", this._onMediaSourceEnded), e.removeEventListener("sourceclose", this._onMediaSourceClose), this.media && (this._objectUrl && window.URL.revokeObjectURL(this._objectUrl), this.media.src === this._objectUrl ? (this.media.removeAttribute("src"), this.media.load()) : u.b.warn("media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                    }
                    this.hls.trigger(d.a.MEDIA_DETACHED)
                }, a.checkPendingTracks = function() {
                    var e = this.bufferCodecEventsExpected,
                        t = this.pendingTracks,
                        r = Object.keys(t).length;
                    (r && !e || 2 === r) && (this.createSourceBuffers(t), this.pendingTracks = {}, this.doAppending())
                }, a.onBufferReset = function() {
                    var e = this.sourceBuffer;
                    for (var t in e) { var r = e[t]; try { r && (this.mediaSource && this.mediaSource.removeSourceBuffer(r), r.removeEventListener("updateend", this._onSBUpdateEnd), r.removeEventListener("error", this._onSBUpdateError)) } catch (e) {} }
                    this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                }, a.onBufferCodecs = function(e) {
                    var t = this;
                    Object.keys(this.sourceBuffer).length || (Object.keys(e).forEach((function(r) { t.pendingTracks[r] = e[r] })), this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks())
                }, a.createSourceBuffers = function(e) {
                    var t = this.sourceBuffer,
                        r = this.mediaSource;
                    if (!r) throw Error("createSourceBuffers called when mediaSource was null");
                    for (var i in e)
                        if (!t[i]) {
                            var a = e[i];
                            if (!a) throw Error("source buffer exists for track " + i + ", however track does not");
                            var n = a.levelCodec || a.codec,
                                s = a.container + ";codecs=" + n;
                            u.b.log("creating sourceBuffer(" + s + ")");
                            try {
                                var l = t[i] = r.addSourceBuffer(s);
                                l.addEventListener("updateend", this._onSBUpdateEnd), l.addEventListener("error", this._onSBUpdateError), this.tracks[i] = { buffer: l, codec: n, id: a.id, container: a.container, levelCodec: a.levelCodec }
                            } catch (e) { u.b.error("error while trying to add sourceBuffer:" + e.message), this.hls.trigger(d.a.ERROR, { type: o.b.MEDIA_ERROR, details: o.a.BUFFER_ADD_CODEC_ERROR, fatal: !1, err: e, mimeType: s }) }
                        }
                    this.hls.trigger(d.a.BUFFER_CREATED, { tracks: this.tracks })
                }, a.onBufferAppending = function(e) { this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e], this.doAppending()) }, a.onBufferEos = function(e) {
                    for (var t in this.sourceBuffer)
                        if (!e.type || e.type === t) {
                            var r = this.sourceBuffer[t];
                            r && !r.ended && (r.ended = !0, u.b.log(t + " sourceBuffer now EOS"))
                        }
                    this.checkEos()
                }, a.checkEos = function() {
                    var e = this.sourceBuffer,
                        t = this.mediaSource;
                    if (t && "open" === t.readyState) {
                        for (var r in e) { var i = e[r]; if (i) { if (!i.ended) return; if (i.updating) return void(this._needsEos = !0) } }
                        u.b.log("all media data are available, signal endOfStream() to MediaSource and stop loading fragment");
                        try { t.endOfStream() } catch (e) { u.b.warn("exception while calling mediaSource.endOfStream()") }
                        this._needsEos = !1
                    } else this._needsEos = !1
                }, a.onBufferFlushing = function(e) { e.type ? this.flushRange.push({ start: e.startOffset, end: e.endOffset, type: e.type }) : (this.flushRange.push({ start: e.startOffset, end: e.endOffset, type: "video" }), this.flushRange.push({ start: e.startOffset, end: e.endOffset, type: "audio" })), this.flushBufferCounter = 0, this.doFlush() }, a.flushLiveBackBuffer = function() {
                    if (this._live) {
                        var e = this.config.liveBackBufferLength;
                        if (isFinite(e) && !(e < 0))
                            if (this.media)
                                for (var t = this.media.currentTime, r = this.sourceBuffer, i = Object.keys(r), a = t - Math.max(e, this._levelTargetDuration), n = i.length - 1; n >= 0; n--) {
                                    var s = i[n],
                                        o = r[s];
                                    if (o) {
                                        var l = o.buffered;
                                        l.length > 0 && a > l.start(0) && this.removeBufferRange(s, o, 0, a) && this.hls.trigger(d.a.LIVE_BACK_BUFFER_REACHED, { bufferEnd: a })
                                    }
                                } else u.b.error("flushLiveBackBuffer called without attaching media")
                    }
                }, a.onLevelUpdated = function(e) {
                    var t = e.details;
                    t.fragments.length > 0 && (this._levelDuration = t.totalduration + t.fragments[0].start, this._levelTargetDuration = t.averagetargetduration || t.targetduration || 10, this._live = t.live, this.updateMediaElementDuration())
                }, a.updateMediaElementDuration = function() {
                    var e, t = this.config;
                    if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
                        for (var r in this.sourceBuffer) { var i = this.sourceBuffer[r]; if (i && !0 === i.updating) return }
                        e = this.media.duration, null === this._msDuration && (this._msDuration = this.mediaSource.duration), !0 === this._live && !0 === t.liveDurationInfinity ? (u.b.log("Media Source duration is set to Infinity"), this._msDuration = this.mediaSource.duration = 1 / 0) : (this._levelDuration > this._msDuration && this._levelDuration > e || !Object(l.a)(e)) && (u.b.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)), this._msDuration = this.mediaSource.duration = this._levelDuration)
                    }
                }, a.doFlush = function() {
                    for (; this.flushRange.length;) {
                        var e = this.flushRange[0];
                        if (!this.flushBuffer(e.start, e.end, e.type)) return void(this._needsFlush = !0);
                        this.flushRange.shift(), this.flushBufferCounter = 0
                    }
                    if (0 === this.flushRange.length) {
                        this._needsFlush = !1;
                        var t = 0,
                            r = this.sourceBuffer;
                        try {
                            for (var i in r) {
                                var a = r[i];
                                a && (t += a.buffered.length)
                            }
                        } catch (e) { u.b.error("error while accessing sourceBuffer.buffered") }
                        this.appended = t, this.hls.trigger(d.a.BUFFER_FLUSHED)
                    }
                }, a.doAppending = function() {
                    var e = this.config,
                        t = this.hls,
                        r = this.segments,
                        i = this.sourceBuffer;
                    if (Object.keys(i).length) {
                        if (!this.media || this.media.error) return this.segments = [], void u.b.error("trying to append although a media error occured, flush segment and abort");
                        if (!this.appending) {
                            var a = r.shift();
                            if (a) try {
                                var n = i[a.type];
                                if (!n) return void this._onSBUpdateEnd();
                                if (n.updating) return void r.unshift(a);
                                n.ended = !1, this.parent = a.parent, n.appendBuffer(a.data), this.appendError = 0, this.appended++, this.appending = !0
                            } catch (i) {
                                u.b.error("error while trying to append buffer:" + i.message), r.unshift(a);
                                var s = { type: o.b.MEDIA_ERROR, parent: a.parent, details: "", fatal: !1 };
                                22 === i.code ? (this.segments = [], s.details = o.a.BUFFER_FULL_ERROR) : (this.appendError++, s.details = o.a.BUFFER_APPEND_ERROR, this.appendError > e.appendErrorMaxRetry && (u.b.log("fail " + e.appendErrorMaxRetry + " times to append segment in sourceBuffer"), this.segments = [], s.fatal = !0)), t.trigger(d.a.ERROR, s)
                            }
                        }
                    }
                }, a.flushBuffer = function(e, t, r) { var i = this.sourceBuffer; if (!Object.keys(i).length) return !0; var a = "null"; if (this.media && (a = this.media.currentTime.toFixed(3)), u.b.log("flushBuffer,pos/start/end: " + a + "/" + e + "/" + t), this.flushBufferCounter >= this.appended) return u.b.warn("abort flushing too many retries"), !0; var n = i[r]; if (n) { if (n.ended = !1, n.updating) return u.b.warn("cannot flush, sb updating in progress"), !1; if (this.removeBufferRange(r, n, e, t)) return this.flushBufferCounter++, !1 } return u.b.log("buffer flushed"), !0 }, a.removeBufferRange = function(e, t, r, i) {
                    try {
                        for (var a = 0; a < t.buffered.length; a++) {
                            var n = t.buffered.start(a),
                                s = t.buffered.end(a),
                                o = Math.max(n, r),
                                l = Math.min(s, i);
                            if (Math.min(l, s) - o > .5) { var d = "null"; return this.media && (d = this.media.currentTime.toString()), u.b.log("sb remove " + e + " [" + o + "," + l + "], of [" + n + "," + s + "], pos:" + d), t.remove(o, l), !0 }
                        }
                    } catch (e) { u.b.warn("removeBufferRange failed", e) }
                    return !1
                }, i
            }(h);

        function qe(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var ze = function(e) {
            var t, r;

            function i(t) { var r; return (r = e.call(this, t, d.a.FPS_DROP_LEVEL_CAPPING, d.a.MEDIA_ATTACHING, d.a.MANIFEST_PARSED, d.a.BUFFER_CODECS, d.a.MEDIA_DETACHING) || this).autoLevelCapping = Number.POSITIVE_INFINITY, r.firstLevel = null, r.levels = [], r.media = null, r.restrictedLevels = [], r.timer = null, r }
            r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
            var a, n, s, o = i.prototype;
            return o.destroy = function() { this.hls.config.capLevelToPlayerSize && (this.media = null, this.stopCapping()) }, o.onFpsDropLevelCapping = function(e) { i.isLevelAllowed(e.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(e.droppedLevel) }, o.onMediaAttaching = function(e) { this.media = e.media instanceof window.HTMLVideoElement ? e.media : null }, o.onManifestParsed = function(e) {
                var t = this.hls;
                this.restrictedLevels = [], this.levels = e.levels, this.firstLevel = e.firstLevel, t.config.capLevelToPlayerSize && e.video && this.startCapping()
            }, o.onBufferCodecs = function(e) { this.hls.config.capLevelToPlayerSize && e.video && this.startCapping() }, o.onLevelsUpdated = function(e) { this.levels = e.levels }, o.onMediaDetaching = function() { this.stopCapping() }, o.detectPlayerSize = function() {
                if (this.media) {
                    var e = this.levels ? this.levels.length : 0;
                    if (e) {
                        var t = this.hls;
                        t.autoLevelCapping = this.getMaxLevel(e - 1), t.autoLevelCapping > this.autoLevelCapping && t.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping
                    }
                }
            }, o.getMaxLevel = function(e) { var t = this; if (!this.levels) return -1; var r = this.levels.filter((function(r, a) { return i.isLevelAllowed(a, t.restrictedLevels) && a <= e })); return i.getMaxLevelByMediaSize(r, this.mediaWidth, this.mediaHeight) }, o.startCapping = function() { this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize()) }, o.stopCapping = function() { this.restrictedLevels = [], this.firstLevel = null, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer), this.timer = null) }, i.isLevelAllowed = function(e, t) { return void 0 === t && (t = []), -1 === t.indexOf(e) }, i.getMaxLevelByMediaSize = function(e, t, r) { if (!e || e && !e.length) return -1; for (var i, a, n = e.length - 1, s = 0; s < e.length; s += 1) { var o = e[s]; if ((o.width >= t || o.height >= r) && (i = o, !(a = e[s + 1]) || i.width !== a.width || i.height !== a.height)) { n = s; break } } return n }, a = i, s = [{ key: "contentScaleFactor", get: function() { var e = 1; try { e = window.devicePixelRatio } catch (e) {} return e } }], (n = [{ key: "mediaWidth", get: function() { var e, t = this.media; return t && (e = t.width || t.clientWidth || t.offsetWidth, e *= i.contentScaleFactor), e } }, { key: "mediaHeight", get: function() { var e, t = this.media; return t && (e = t.height || t.clientHeight || t.offsetHeight, e *= i.contentScaleFactor), e } }]) && qe(a.prototype, n), s && qe(a, s), i
        }(h);
        var Xe = window.performance,
            Qe = function(e) {
                var t, r;

                function i(t) { return e.call(this, t, d.a.MEDIA_ATTACHING) || this }
                r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                var a = i.prototype;
                return a.destroy = function() { this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1 }, a.onMediaAttaching = function(e) {
                    var t = this.hls.config;
                    t.capLevelOnFPSDrop && ("function" == typeof(this.video = e.media instanceof window.HTMLVideoElement ? e.media : null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), t.fpsDroppedMonitoringPeriod))
                }, a.checkFPS = function(e, t, r) {
                    var i = Xe.now();
                    if (t) {
                        if (this.lastTime) {
                            var a = i - this.lastTime,
                                n = r - this.lastDroppedFrames,
                                s = t - this.lastDecodedFrames,
                                o = 1e3 * n / a,
                                l = this.hls;
                            if (l.trigger(d.a.FPS_DROP, { currentDropped: n, currentDecoded: s, totalDroppedFrames: r }), o > 0 && n > l.config.fpsDroppedMonitoringThreshold * s) {
                                var c = l.currentLevel;
                                u.b.warn("drop FPS ratio greater than max allowed value for currentLevel: " + c), c > 0 && (-1 === l.autoLevelCapping || l.autoLevelCapping >= c) && (c -= 1, l.trigger(d.a.FPS_DROP_LEVEL_CAPPING, { level: c, droppedLevel: l.currentLevel }), l.autoLevelCapping = c, l.streamController.nextLevelSwitch())
                            }
                        }
                        this.lastTime = i, this.lastDroppedFrames = r, this.lastDecodedFrames = t
                    }
                }, a.checkFPSInterval = function() {
                    var e = this.video;
                    if (e)
                        if (this.isVideoPlaybackQualityAvailable) {
                            var t = e.getVideoPlaybackQuality();
                            this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames)
                        } else this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount)
                }, i
            }(h),
            $e = window,
            Je = $e.performance,
            Ze = $e.XMLHttpRequest,
            et = function() {
                function e(e) { e && e.xhrSetup && (this.xhrSetup = e.xhrSetup) }
                var t = e.prototype;
                return t.destroy = function() { this.abort(), this.loader = null }, t.abort = function() {
                    var e = this.loader;
                    e && 4 !== e.readyState && (this.stats.aborted = !0, e.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null
                }, t.load = function(e, t, r) { this.context = e, this.config = t, this.callbacks = r, this.stats = { trequest: Je.now(), retry: 0 }, this.retryDelay = t.retryDelay, this.loadInternal() }, t.loadInternal = function() {
                    var e, t = this.context;
                    e = this.loader = new Ze;
                    var r = this.stats;
                    r.tfirst = 0, r.loaded = 0;
                    var i = this.xhrSetup;
                    try {
                        if (i) try { i(e, t.url) } catch (r) { e.open("GET", t.url, !0), i(e, t.url) }
                        e.readyState || e.open("GET", t.url, !0)
                    } catch (r) { return void this.callbacks.onError({ code: e.status, text: r.message }, t, e) }
                    t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), e.send()
                }, t.readystatechange = function(e) {
                    var t = e.currentTarget,
                        r = t.readyState,
                        i = this.stats,
                        a = this.context,
                        n = this.config;
                    if (!i.aborted && r >= 2)
                        if (window.clearTimeout(this.requestTimeout), 0 === i.tfirst && (i.tfirst = Math.max(Je.now(), i.trequest)), 4 === r) {
                            var s = t.status;
                            if (s >= 200 && s < 300) {
                                var o, l;
                                i.tload = Math.max(i.tfirst, Je.now()), l = "arraybuffer" === a.responseType ? (o = t.response).byteLength : (o = t.responseText).length, i.loaded = i.total = l;
                                var d = { url: t.responseURL, data: o };
                                this.callbacks.onSuccess(d, i, a, t)
                            } else i.retry >= n.maxRetry || s >= 400 && s < 499 ? (u.b.error(s + " while loading " + a.url), this.callbacks.onError({ code: s, text: t.statusText }, a, t)) : (u.b.warn(s + " while loading " + a.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, n.maxRetryDelay), i.retry++)
                        } else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), n.timeout)
                }, t.loadtimeout = function() { u.b.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context, null) }, t.loadprogress = function(e) {
                    var t = e.currentTarget,
                        r = this.stats;
                    r.loaded = e.loaded, e.lengthComputable && (r.total = e.total);
                    var i = this.callbacks.onProgress;
                    i && i(r, this.context, null, t)
                }, e
            }();

        function tt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var rt = function(e) {
            var t, r;

            function i(t) { var r; return (r = e.call(this, t, d.a.MANIFEST_LOADING, d.a.MANIFEST_PARSED, d.a.AUDIO_TRACK_LOADED, d.a.AUDIO_TRACK_SWITCHED, d.a.LEVEL_LOADED, d.a.ERROR) || this)._trackId = -1, r._selectDefaultTrack = !0, r.tracks = [], r.trackIdBlacklist = Object.create(null), r.audioGroupId = null, r }
            r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
            var a, n, s, l = i.prototype;
            return l.onManifestLoading = function() { this.tracks = [], this._trackId = -1, this._selectDefaultTrack = !0 }, l.onManifestParsed = function(e) {
                var t = this.tracks = e.audioTracks || [];
                this.hls.trigger(d.a.AUDIO_TRACKS_UPDATED, { audioTracks: t })
            }, l.onAudioTrackLoaded = function(e) {
                if (e.id >= this.tracks.length) u.b.warn("Invalid audio track id:", e.id);
                else {
                    if (u.b.log("audioTrack " + e.id + " loaded"), this.tracks[e.id].details = e.details, e.details.live && !this.hasInterval()) {
                        var t = 1e3 * e.details.targetduration;
                        this.setInterval(t)
                    }!e.details.live && this.hasInterval() && this.clearInterval()
                }
            }, l.onAudioTrackSwitched = function(e) {
                var t = this.tracks[e.id].groupId;
                t && this.audioGroupId !== t && (this.audioGroupId = t)
            }, l.onLevelLoaded = function(e) {
                var t = this.hls.levels[e.level];
                if (t.audioGroupIds) {
                    var r = t.audioGroupIds[t.urlId];
                    this.audioGroupId !== r && (this.audioGroupId = r, this._selectInitialAudioTrack())
                }
            }, l.onError = function(e) { e.type === o.b.NETWORK_ERROR && (e.fatal && this.clearInterval(), e.details === o.a.AUDIO_TRACK_LOAD_ERROR && (u.b.warn("Network failure on audio-track id:", e.context.id), this._handleLoadError())) }, l._setAudioTrack = function(e) {
                if (this._trackId === e && this.tracks[this._trackId].details) u.b.debug("Same id as current audio-track passed, and track details available -> no-op");
                else if (e < 0 || e >= this.tracks.length) u.b.warn("Invalid id passed to audio-track controller");
                else {
                    var t = this.tracks[e];
                    u.b.log("Now switching to audio-track index " + e), this.clearInterval(), this._trackId = e;
                    var r = t.url,
                        i = t.type,
                        a = t.id;
                    this.hls.trigger(d.a.AUDIO_TRACK_SWITCHING, { id: a, type: i, url: r }), this._loadTrackDetailsIfNeeded(t)
                }
            }, l.doTick = function() { this._updateTrack(this._trackId) }, l._selectInitialAudioTrack = function() {
                var e = this,
                    t = this.tracks;
                if (t.length) {
                    var r = this.tracks[this._trackId],
                        i = null;
                    if (r && (i = r.name), this._selectDefaultTrack) {
                        var a = t.filter((function(e) { return e.default }));
                        a.length ? t = a : u.b.warn("No default audio tracks defined")
                    }
                    var n = !1,
                        s = function() { t.forEach((function(t) { n || e.audioGroupId && t.groupId !== e.audioGroupId || i && i !== t.name || (e._setAudioTrack(t.id), n = !0) })) };
                    s(), n || (i = null, s()), n || (u.b.error("No track found for running audio group-ID: " + this.audioGroupId), this.hls.trigger(d.a.ERROR, { type: o.b.MEDIA_ERROR, details: o.a.AUDIO_TRACK_LOAD_ERROR, fatal: !0 }))
                }
            }, l._needsTrackLoading = function(e) {
                var t = e.details,
                    r = e.url;
                return !(t && !t.live) && !!r
            }, l._loadTrackDetailsIfNeeded = function(e) {
                if (this._needsTrackLoading(e)) {
                    var t = e.url,
                        r = e.id;
                    u.b.log("loading audio-track playlist for id: " + r), this.hls.trigger(d.a.AUDIO_TRACK_LOADING, { url: t, id: r })
                }
            }, l._updateTrack = function(e) {
                if (!(e < 0 || e >= this.tracks.length)) {
                    this.clearInterval(), this._trackId = e, u.b.log("trying to update audio-track " + e);
                    var t = this.tracks[e];
                    this._loadTrackDetailsIfNeeded(t)
                }
            }, l._handleLoadError = function() {
                this.trackIdBlacklist[this._trackId] = !0;
                var e = this._trackId,
                    t = this.tracks[e],
                    r = t.name,
                    i = t.language,
                    a = t.groupId;
                u.b.warn("Loading failed on audio track id: " + e + ", group-id: " + a + ', name/language: "' + r + '" / "' + i + '"');
                for (var n = e, s = 0; s < this.tracks.length; s++) {
                    if (!this.trackIdBlacklist[s])
                        if (this.tracks[s].name === r) { n = s; break }
                }
                n !== e ? (u.b.log("Attempting audio-track fallback id:", n, "group-id:", this.tracks[n].groupId), this._setAudioTrack(n)) : u.b.warn('No fallback audio-track found for name/language: "' + r + '" / "' + i + '"')
            }, a = i, (n = [{ key: "audioTracks", get: function() { return this.tracks } }, { key: "audioTrack", get: function() { return this._trackId }, set: function(e) { this._setAudioTrack(e), this._selectDefaultTrack = !1 } }]) && tt(a.prototype, n), s && tt(a, s), i
        }(ge);

        function it(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var at = window.performance,
            nt = function(e) {
                var t, r;

                function i(t, r) { var i; return (i = e.call(this, t, d.a.MEDIA_ATTACHED, d.a.MEDIA_DETACHING, d.a.AUDIO_TRACKS_UPDATED, d.a.AUDIO_TRACK_SWITCHING, d.a.AUDIO_TRACK_LOADED, d.a.KEY_LOADED, d.a.FRAG_LOADED, d.a.FRAG_PARSING_INIT_SEGMENT, d.a.FRAG_PARSING_DATA, d.a.FRAG_PARSED, d.a.ERROR, d.a.BUFFER_RESET, d.a.BUFFER_CREATED, d.a.BUFFER_APPENDED, d.a.BUFFER_FLUSHED, d.a.INIT_PTS_FOUND) || this).fragmentTracker = r, i.config = t.config, i.audioCodecSwap = !1, i._state = pe, i.initPTS = [], i.waitingFragment = null, i.videoTrackCC = null, i }
                r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                var a, n, s, c = i.prototype;
                return c.onInitPtsFound = function(e) {
                    var t = e.id,
                        r = e.frag.cc,
                        i = e.initPTS;
                    "main" === t && (this.initPTS[r] = i, this.videoTrackCC = r, u.b.log("InitPTS for cc: " + r + " found from video track: " + i), this.state === Le && this.tick())
                }, c.startLoad = function(e) {
                    if (this.tracks) {
                        var t = this.lastCurrentTime;
                        this.stopLoad(), this.setInterval(100), this.fragLoadError = 0, t > 0 && -1 === e ? (u.b.log("audio:override startPosition with lastCurrentTime @" + t.toFixed(3)), this.state = me) : (this.lastCurrentTime = this.startPosition ? this.startPosition : e, this.state = ve), this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick()
                    } else this.startPosition = e, this.state = pe
                }, c.doTick = function() {
                    var e, t, r, i = this.hls,
                        a = i.config;
                    switch (this.state) {
                        case ke:
                        case ye:
                        case Re:
                            break;
                        case ve:
                            this.state = Se, this.loadedmetadata = !1;
                            break;
                        case me:
                            var n = this.tracks;
                            if (!n) break;
                            if (!this.media && (this.startFragRequested || !a.startFragPrefetch)) break;
                            if (this.loadedmetadata) e = this.media.currentTime;
                            else if (void 0 === (e = this.nextLoadPosition)) break;
                            var s = this.mediaBuffer ? this.mediaBuffer : this.media,
                                o = this.videoBuffer ? this.videoBuffer : this.media,
                                c = H.bufferInfo(s, e, a.maxBufferHole),
                                h = H.bufferInfo(o, e, a.maxBufferHole),
                                f = c.len,
                                g = c.end,
                                p = this.fragPrevious,
                                v = Math.min(a.maxBufferLength, a.maxMaxBufferLength),
                                m = Math.max(v, h.len),
                                y = this.audioSwitch,
                                b = this.trackId;
                            if ((f < m || y) && b < n.length) {
                                if (void 0 === (r = n[b].details)) { this.state = Se; break }
                                if (!y && this._streamEnded(c, r)) return this.hls.trigger(d.a.BUFFER_EOS, { type: "audio" }), void(this.state = we);
                                var T, E = r.fragments,
                                    S = E.length,
                                    _ = E[0].start,
                                    A = E[S - 1].start + E[S - 1].duration;
                                if (y)
                                    if (r.live && !r.PTSKnown) u.b.log("switching audiotrack, live stream, unknown PTS,load first fragment"), g = 0;
                                    else if (g = e, r.PTSKnown && e < _) {
                                    if (!(c.end > _ || c.nextStart)) return;
                                    u.b.log("alt audio track ahead of main track, seek to start of alt audio track"), this.media.currentTime = _ + .05
                                }
                                if (r.initSegment && !r.initSegment.data) T = r.initSegment;
                                else if (g <= _) { if (T = E[0], null !== this.videoTrackCC && T.cc !== this.videoTrackCC && (T = function(e, t) { return j.search(e, (function(e) { return e.cc < t ? 1 : e.cc > t ? -1 : 0 })) }(E, this.videoTrackCC)), r.live && T.loadIdx && T.loadIdx === this.fragLoadIdx) { var R = c.nextStart ? c.nextStart : _; return u.b.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (R + .05)), void(this.media.currentTime = R + .05) } } else {
                                    var w, k = a.maxFragLookUpTolerance,
                                        L = p ? E[p.sn - E[0].sn + 1] : void 0,
                                        D = function(e) { var t = Math.min(k, e.duration); return e.start + e.duration - t <= g ? 1 : e.start - t > g && e.start ? -1 : 0 };
                                    g < A ? (g > A - k && (k = 0), w = L && !D(L) ? L : j.search(E, D)) : w = E[S - 1], w && (T = w, _ = w.start, p && T.level === p.level && T.sn === p.sn && (T.sn < r.endSN ? (T = E[T.sn + 1 - r.startSN], u.b.log("SN just loaded, load next one: " + T.sn)) : T = null))
                                }
                                T && (T.encrypted ? (u.b.log("Loading key for " + T.sn + " of [" + r.startSN + " ," + r.endSN + "],track " + b), this.state = be, i.trigger(d.a.KEY_LOADING, { frag: T })) : (u.b.log("Loading " + T.sn + ", cc: " + T.cc + " of [" + r.startSN + " ," + r.endSN + "],track " + b + ", currentTime:" + e + ",bufferEnd:" + g.toFixed(3)), this.fragCurrent = T, (y || this.fragmentTracker.getState(T) === U) && ("initSegment" !== T.sn && (this.startFragRequested = !0), Object(l.a)(T.sn) && (this.nextLoadPosition = T.start + T.duration), i.trigger(d.a.FRAG_LOADING, { frag: T }), this.state = Te)))
                            }
                            break;
                        case Se:
                            (t = this.tracks[this.trackId]) && t.details && (this.state = me);
                            break;
                        case Ee:
                            var C = at.now(),
                                O = this.retryDate,
                                I = (s = this.media) && s.seeking;
                            (!O || C >= O || I) && (u.b.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = me);
                            break;
                        case Le:
                            var P = this.videoTrackCC;
                            if (void 0 === this.initPTS[P]) break;
                            var x = this.waitingFragment;
                            if (x) {
                                var M = x.frag.cc;
                                P !== M ? (t = this.tracks[this.trackId]).details && t.details.live && (u.b.warn("Waiting fragment CC (" + M + ") does not match video track CC (" + P + ")"), this.waitingFragment = null, this.state = me) : (this.state = Te, this.onFragLoaded(this.waitingFragment), this.waitingFragment = null)
                            } else this.state = me
                    }
                }, c.onMediaAttached = function(e) {
                    var t = this.media = this.mediaBuffer = e.media;
                    this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("ended", this.onvended);
                    var r = this.config;
                    this.tracks && r.autoStartLoad && this.startLoad(r.startPosition)
                }, c.onMediaDetaching = function() {
                    var e = this.media;
                    e && e.ended && (u.b.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad()
                }, c.onAudioTracksUpdated = function(e) { u.b.log("audio tracks updated"), this.tracks = e.audioTracks }, c.onAudioTrackSwitching = function(e) {
                    var t = !!e.url;
                    this.trackId = e.id, this.fragCurrent = null, this.state = ye, this.waitingFragment = null, t ? this.setInterval(100) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null), t && (this.audioSwitch = !0, this.state = me), this.tick()
                }, c.onAudioTrackLoaded = function(e) {
                    var t = e.details,
                        r = e.id,
                        i = this.tracks[r],
                        a = t.totalduration,
                        n = 0;
                    if (u.b.log("track " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + a), t.live) {
                        var s = i.details;
                        s && t.fragments.length > 0 ? (re(s, t), n = t.fragments[0].start, t.PTSKnown ? u.b.log("live audio playlist sliding:" + n.toFixed(3)) : u.b.log("live audio playlist - outdated PTS, unknown sliding")) : (t.PTSKnown = !1, u.b.log("live audio playlist - first load, unknown sliding"))
                    } else t.PTSKnown = !1;
                    if (i.details = t, !this.startFragRequested) {
                        if (-1 === this.startPosition) {
                            var o = t.startTimeOffset;
                            Object(l.a)(o) ? (u.b.log("start time offset found in playlist, adjust startPosition to " + o), this.startPosition = o) : t.live ? (this.startPosition = this.computeLivePosition(n, t), u.b.log("compute startPosition for audio-track to " + this.startPosition)) : this.startPosition = 0
                        }
                        this.nextLoadPosition = this.startPosition
                    }
                    this.state === Se && (this.state = me), this.tick()
                }, c.onKeyLoaded = function() { this.state === be && (this.state = me, this.tick()) }, c.onFragLoaded = function(e) {
                    var t = this.fragCurrent,
                        r = e.frag;
                    if (this.state === Te && t && "audio" === r.type && r.level === t.level && r.sn === t.sn) {
                        var i = this.tracks[this.trackId],
                            a = i.details,
                            n = a.totalduration,
                            s = t.level,
                            o = t.sn,
                            l = t.cc,
                            c = this.config.defaultAudioCodec || i.audioCodec || "mp4a.40.2",
                            h = this.stats = e.stats;
                        if ("initSegment" === o) this.state = me, h.tparsed = h.tbuffered = at.now(), a.initSegment.data = e.payload, this.hls.trigger(d.a.FRAG_BUFFERED, { stats: h, frag: t, id: "audio" }), this.tick();
                        else {
                            this.state = _e, this.appended = !1, this.demuxer || (this.demuxer = new J(this.hls, "audio"));
                            var f = this.initPTS[l],
                                g = a.initSegment ? a.initSegment.data : [];
                            if (a.initSegment || void 0 !== f) {
                                this.pendingBuffering = !0, u.b.log("Demuxing " + o + " of [" + a.startSN + " ," + a.endSN + "],track " + s);
                                this.demuxer.push(e.payload, g, c, null, t, n, !1, f)
                            } else u.b.log("unknown video PTS for continuity counter " + l + ", waiting for video PTS before demuxing audio frag " + o + " of [" + a.startSN + " ," + a.endSN + "],track " + s), this.waitingFragment = e, this.state = Le
                        }
                    }
                    this.fragLoadError = 0
                }, c.onFragParsingInitSegment = function(e) {
                    var t = this.fragCurrent,
                        r = e.frag;
                    if (t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === _e) {
                        var i, a = e.tracks;
                        if (a.video && delete a.video, i = a.audio) {
                            i.levelCodec = i.codec, i.id = e.id, this.hls.trigger(d.a.BUFFER_CODECS, a), u.b.log("audio track:audio,container:" + i.container + ",codecs[level/parsed]=[" + i.levelCodec + "/" + i.codec + "]");
                            var n = i.initSegment;
                            if (n) {
                                var s = { type: "audio", data: n, parent: "audio", content: "initSegment" };
                                this.audioSwitch ? this.pendingData = [s] : (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(d.a.BUFFER_APPENDING, s))
                            }
                            this.tick()
                        }
                    }
                }, c.onFragParsingData = function(e) {
                    var t = this,
                        r = this.fragCurrent,
                        i = e.frag;
                    if (r && "audio" === e.id && "audio" === e.type && i.sn === r.sn && i.level === r.level && this.state === _e) {
                        var a = this.trackId,
                            n = this.tracks[a],
                            s = this.hls;
                        Object(l.a)(e.endPTS) || (e.endPTS = e.startPTS + r.duration, e.endDTS = e.startDTS + r.duration), r.addElementaryStream(p.AUDIO), u.b.log("parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb), te(n.details, r, e.startPTS, e.endPTS);
                        var c = this.audioSwitch,
                            h = this.media,
                            f = !1;
                        if (c)
                            if (h && h.readyState) {
                                var g = h.currentTime;
                                u.b.log("switching audio track : currentTime:" + g), g >= e.startPTS && (u.b.log("switching audio track : flushing all audio"), this.state = Re, s.trigger(d.a.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: "audio" }), f = !0, this.audioSwitch = !1, s.trigger(d.a.AUDIO_TRACK_SWITCHED, { id: a }))
                            } else this.audioSwitch = !1, s.trigger(d.a.AUDIO_TRACK_SWITCHED, { id: a });
                        var v = this.pendingData;
                        if (!v) return u.b.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"), void s.trigger(d.a.ERROR, { type: o.b.MEDIA_ERROR, details: null, fatal: !0 });
                        this.audioSwitch || ([e.data1, e.data2].forEach((function(t) { t && t.length && v.push({ type: e.type, data: t, parent: "audio", content: "data" }) })), !f && v.length && (v.forEach((function(e) { t.state === _e && (t.pendingBuffering = !0, t.hls.trigger(d.a.BUFFER_APPENDING, e)) })), this.pendingData = [], this.appended = !0)), this.tick()
                    }
                }, c.onFragParsed = function(e) {
                    var t = this.fragCurrent,
                        r = e.frag;
                    t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === _e && (this.stats.tparsed = at.now(), this.state = Ae, this._checkAppendedParsed())
                }, c.onBufferReset = function() { this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1 }, c.onBufferCreated = function(e) {
                    var t = e.tracks.audio;
                    t && (this.mediaBuffer = t.buffer, this.loadedmetadata = !0), e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
                }, c.onBufferAppended = function(e) {
                    if ("audio" === e.parent) {
                        var t = this.state;
                        t !== _e && t !== Ae || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed())
                    }
                }, c._checkAppendedParsed = function() {
                    if (!(this.state !== Ae || this.appended && this.pendingBuffering)) {
                        var e = this.fragCurrent,
                            t = this.stats,
                            r = this.hls;
                        if (e) {
                            this.fragPrevious = e, t.tbuffered = at.now(), r.trigger(d.a.FRAG_BUFFERED, { stats: t, frag: e, id: "audio" });
                            var i = this.mediaBuffer ? this.mediaBuffer : this.media;
                            i && u.b.log("audio buffered : " + ne.toString(i.buffered)), this.audioSwitch && this.appended && (this.audioSwitch = !1, r.trigger(d.a.AUDIO_TRACK_SWITCHED, { id: this.trackId })), this.state = me
                        }
                        this.tick()
                    }
                }, c.onError = function(e) {
                    var t = e.frag;
                    if (!t || "audio" === t.type) switch (e.details) {
                        case o.a.FRAG_LOAD_ERROR:
                        case o.a.FRAG_LOAD_TIMEOUT:
                            var r = e.frag;
                            if (r && "audio" !== r.type) break;
                            if (!e.fatal) {
                                var i = this.fragLoadError;
                                i ? i++ : i = 1;
                                var a = this.config;
                                if (i <= a.fragLoadingMaxRetry) {
                                    this.fragLoadError = i;
                                    var n = Math.min(Math.pow(2, i - 1) * a.fragLoadingRetryDelay, a.fragLoadingMaxRetryTimeout);
                                    u.b.warn("AudioStreamController: frag loading failed, retry in " + n + " ms"), this.retryDate = at.now() + n, this.state = Ee
                                } else u.b.error("AudioStreamController: " + e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.state = ke
                            }
                            break;
                        case o.a.AUDIO_TRACK_LOAD_ERROR:
                        case o.a.AUDIO_TRACK_LOAD_TIMEOUT:
                        case o.a.KEY_LOAD_ERROR:
                        case o.a.KEY_LOAD_TIMEOUT:
                            this.state !== ke && (this.state = e.fatal ? ke : me, u.b.warn("AudioStreamController: " + e.details + " while loading frag, now switching to " + this.state + " state ..."));
                            break;
                        case o.a.BUFFER_FULL_ERROR:
                            if ("audio" === e.parent && (this.state === _e || this.state === Ae)) {
                                var s = this.mediaBuffer,
                                    l = this.media.currentTime;
                                if (s && H.isBuffered(s, l) && H.isBuffered(s, l + .5)) {
                                    var c = this.config;
                                    c.maxMaxBufferLength >= c.maxBufferLength && (c.maxMaxBufferLength /= 2, u.b.warn("AudioStreamController: reduce max buffer length to " + c.maxMaxBufferLength + "s")), this.state = me
                                } else u.b.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, this.state = Re, this.hls.trigger(d.a.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: "audio" })
                            }
                    }
                }, c.onBufferFlushed = function() {
                    var e = this,
                        t = this.pendingData;
                    t && t.length ? (u.b.log("AudioStreamController: appending pending audio data after buffer flushed"), t.forEach((function(t) { e.hls.trigger(d.a.BUFFER_APPENDING, t) })), this.appended = !0, this.pendingData = [], this.state = Ae) : (this.state = me, this.fragPrevious = null, this.tick())
                }, a = i, (n = [{
                    key: "state",
                    set: function(e) {
                        if (this.state !== e) {
                            var t = this.state;
                            this._state = e, u.b.log("audio stream:" + t + "->" + e)
                        }
                    },
                    get: function() { return this._state }
                }]) && it(a.prototype, n), s && it(a, s), i
            }(Ce),
            st = function() {
                if ("undefined" != typeof window && window.VTTCue) return window.VTTCue;
                var e = { "": !0, lr: !0, rl: !0 },
                    t = { start: !0, middle: !0, end: !0, left: !0, right: !0 };

                function r(e) { return "string" == typeof e && (!!t[e.toLowerCase()] && e.toLowerCase()) }

                function i(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var i in r) e[i] = r[i] } return e }

                function a(t, a, n) {
                    var s = this,
                        o = { enumerable: !0 };
                    s.hasBeenReset = !1;
                    var l = "",
                        d = !1,
                        u = t,
                        c = a,
                        h = n,
                        f = null,
                        g = "",
                        p = !0,
                        v = "auto",
                        m = "start",
                        y = 50,
                        b = "middle",
                        T = 50,
                        E = "middle";
                    Object.defineProperty(s, "id", i({}, o, { get: function() { return l }, set: function(e) { l = "" + e } })), Object.defineProperty(s, "pauseOnExit", i({}, o, { get: function() { return d }, set: function(e) { d = !!e } })), Object.defineProperty(s, "startTime", i({}, o, {
                        get: function() { return u },
                        set: function(e) {
                            if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
                            u = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "endTime", i({}, o, {
                        get: function() { return c },
                        set: function(e) {
                            if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
                            c = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "text", i({}, o, { get: function() { return h }, set: function(e) { h = "" + e, this.hasBeenReset = !0 } })), Object.defineProperty(s, "region", i({}, o, { get: function() { return f }, set: function(e) { f = e, this.hasBeenReset = !0 } })), Object.defineProperty(s, "vertical", i({}, o, {
                        get: function() { return g },
                        set: function(t) {
                            var r = function(t) { return "string" == typeof t && (!!e[t.toLowerCase()] && t.toLowerCase()) }(t);
                            if (!1 === r) throw new SyntaxError("An invalid or illegal string was specified.");
                            g = r, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "snapToLines", i({}, o, { get: function() { return p }, set: function(e) { p = !!e, this.hasBeenReset = !0 } })), Object.defineProperty(s, "line", i({}, o, {
                        get: function() { return v },
                        set: function(e) {
                            if ("number" != typeof e && "auto" !== e) throw new SyntaxError("An invalid number or illegal string was specified.");
                            v = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "lineAlign", i({}, o, {
                        get: function() { return m },
                        set: function(e) {
                            var t = r(e);
                            if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                            m = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "position", i({}, o, {
                        get: function() { return y },
                        set: function(e) {
                            if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
                            y = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "positionAlign", i({}, o, {
                        get: function() { return b },
                        set: function(e) {
                            var t = r(e);
                            if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                            b = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "size", i({}, o, {
                        get: function() { return T },
                        set: function(e) {
                            if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
                            T = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "align", i({}, o, {
                        get: function() { return E },
                        set: function(e) {
                            var t = r(e);
                            if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                            E = t, this.hasBeenReset = !0
                        }
                    })), s.displayState = void 0
                }
                return a.prototype.getCueAsHTML = function() { return window.WebVTT.convertCueToDOMTree(window, this.text) }, a
            }(),
            ot = function() { return { decode: function(e) { if (!e) return ""; if ("string" != typeof e) throw new Error("Error - expected string data."); return decodeURIComponent(encodeURIComponent(e)) } } };

        function lt() { this.window = window, this.state = "INITIAL", this.buffer = "", this.decoder = new ot, this.regionList = [] }

        function dt() { this.values = Object.create(null) }

        function ut(e, t, r, i) {
            var a = i ? e.split(i) : [e];
            for (var n in a)
                if ("string" == typeof a[n]) { var s = a[n].split(r); if (2 === s.length) t(s[0], s[1]) }
        }
        dt.prototype = {
            set: function(e, t) { this.get(e) || "" === t || (this.values[e] = t) },
            get: function(e, t, r) { return r ? this.has(e) ? this.values[e] : t[r] : this.has(e) ? this.values[e] : t },
            has: function(e) { return e in this.values },
            alt: function(e, t, r) {
                for (var i = 0; i < r.length; ++i)
                    if (t === r[i]) { this.set(e, t); break }
            },
            integer: function(e, t) { /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10)) },
            percent: function(e, t) { return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t), !0) }
        };
        var ct = new st(0, 0, 0),
            ht = "middle" === ct.align ? "middle" : "center";

        function ft(e, t, r) {
            var i = e;

            function a() {
                var t = function(e) {
                    function t(e, t, r, i) { return 3600 * (0 | e) + 60 * (0 | t) + (0 | r) + (0 | i) / 1e3 }
                    var r = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
                    return r ? r[3] ? t(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? t(r[1], r[2], 0, r[4]) : t(0, r[1], r[2], r[4]) : null
                }(e);
                if (null === t) throw new Error("Malformed timestamp: " + i);
                return e = e.replace(/^[^\sa-zA-Z-]+/, ""), t
            }

            function n() { e = e.replace(/^\s+/, "") }
            if (n(), t.startTime = a(), n(), "--\x3e" !== e.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + i);
            e = e.substr(3), n(), t.endTime = a(), n(),
                function(e, t) {
                    var i = new dt;
                    ut(e, (function(e, t) {
                        switch (e) {
                            case "region":
                                for (var a = r.length - 1; a >= 0; a--)
                                    if (r[a].id === t) { i.set(e, r[a].region); break }
                                break;
                            case "vertical":
                                i.alt(e, t, ["rl", "lr"]);
                                break;
                            case "line":
                                var n = t.split(","),
                                    s = n[0];
                                i.integer(e, s), i.percent(e, s) && i.set("snapToLines", !1), i.alt(e, s, ["auto"]), 2 === n.length && i.alt("lineAlign", n[1], ["start", ht, "end"]);
                                break;
                            case "position":
                                n = t.split(","), i.percent(e, n[0]), 2 === n.length && i.alt("positionAlign", n[1], ["start", ht, "end", "line-left", "line-right", "auto"]);
                                break;
                            case "size":
                                i.percent(e, t);
                                break;
                            case "align":
                                i.alt(e, t, ["start", ht, "end", "left", "right"])
                        }
                    }), /:/, /\s/), t.region = i.get("region", null), t.vertical = i.get("vertical", "");
                    var a = i.get("line", "auto");
                    "auto" === a && -1 === ct.line && (a = -1), t.line = a, t.lineAlign = i.get("lineAlign", "start"), t.snapToLines = i.get("snapToLines", !0), t.size = i.get("size", 100), t.align = i.get("align", ht);
                    var n = i.get("position", "auto");
                    "auto" === n && 50 === ct.position && (n = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50), t.position = n
                }(e, t)
        }

        function gt(e) { return e.replace(/<br(?: \/)?>/gi, "\n") }
        lt.prototype = {
            parse: function(e) {
                var t = this;

                function r() {
                    var e = t.buffer,
                        r = 0;
                    for (e = gt(e); r < e.length && "\r" !== e[r] && "\n" !== e[r];) ++r;
                    var i = e.substr(0, r);
                    return "\r" === e[r] && ++r, "\n" === e[r] && ++r, t.buffer = e.substr(r), i
                }
                e && (t.buffer += t.decoder.decode(e, { stream: !0 }));
                try {
                    var i;
                    if ("INITIAL" === t.state) {
                        if (!/\r\n|\n/.test(t.buffer)) return this;
                        var a = (i = r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                        if (!a || !a[0]) throw new Error("Malformed WebVTT signature.");
                        t.state = "HEADER"
                    }
                    for (var n = !1; t.buffer;) {
                        if (!/\r\n|\n/.test(t.buffer)) return this;
                        switch (n ? n = !1 : i = r(), t.state) {
                            case "HEADER":
                                /:/.test(i) ? ut(i, (function(e, t) {}), /:/) : i || (t.state = "ID");
                                continue;
                            case "NOTE":
                                i || (t.state = "ID");
                                continue;
                            case "ID":
                                if (/^NOTE($|[ \t])/.test(i)) { t.state = "NOTE"; break }
                                if (!i) continue;
                                if (t.cue = new st(0, 0, ""), t.state = "CUE", -1 === i.indexOf("--\x3e")) { t.cue.id = i; continue }
                            case "CUE":
                                try { ft(i, t.cue, t.regionList) } catch (e) { t.cue = null, t.state = "BADCUE"; continue }
                                t.state = "CUETEXT";
                                continue;
                            case "CUETEXT":
                                var s = -1 !== i.indexOf("--\x3e");
                                if (!i || s && (n = !0)) { t.oncue && t.oncue(t.cue), t.cue = null, t.state = "ID"; continue }
                                t.cue.text && (t.cue.text += "\n"), t.cue.text += i;
                                continue;
                            case "BADCUE":
                                i || (t.state = "ID");
                                continue
                        }
                    }
                } catch (e) { "CUETEXT" === t.state && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = "INITIAL" === t.state ? "BADWEBVTT" : "BADCUE" }
                return this
            },
            flush: function() { try { if (this.buffer += this.decoder.decode(), (this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state) throw new Error("Malformed WebVTT signature.") } catch (e) { throw e } return this.onflush && this.onflush(), this }
        };
        var pt = lt;

        function vt(e, t, r, i) {
            for (var a, n, s, o, l, d = window.VTTCue || TextTrackCue, u = 0; u < i.rows.length; u++)
                if (s = !0, o = 0, l = "", !(a = i.rows[u]).isEmpty()) {
                    for (var c = 0; c < a.chars.length; c++) a.chars[c].uchar.match(/\s/) && s ? o++ : (l += a.chars[c].uchar, s = !1);
                    a.cueStartTime = t, t === r && (r += 1e-4), n = new d(t, r, gt(l.trim())), o >= 16 ? o-- : o++, navigator.userAgent.match(/Firefox\//) ? n.line = u + 1 : n.line = u > 7 ? u - 2 : u + 1, n.align = "left", n.position = Math.max(0, Math.min(100, o / 32 * 100)), e.addCue(n)
                }
        }
        var mt, yt = { 42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 128: 174, 129: 176, 130: 189, 131: 191, 132: 8482, 133: 162, 134: 163, 135: 9834, 136: 224, 137: 32, 138: 232, 139: 226, 140: 234, 141: 238, 142: 244, 143: 251, 144: 193, 145: 201, 146: 211, 147: 218, 148: 220, 149: 252, 150: 8216, 151: 161, 152: 42, 153: 8217, 154: 9473, 155: 169, 156: 8480, 157: 8226, 158: 8220, 159: 8221, 160: 192, 161: 194, 162: 199, 163: 200, 164: 202, 165: 203, 166: 235, 167: 206, 168: 207, 169: 239, 170: 212, 171: 217, 172: 249, 173: 219, 174: 171, 175: 187, 176: 195, 177: 227, 178: 205, 179: 204, 180: 236, 181: 210, 182: 242, 183: 213, 184: 245, 185: 123, 186: 125, 187: 92, 188: 94, 189: 95, 190: 124, 191: 8764, 192: 196, 193: 228, 194: 214, 195: 246, 196: 223, 197: 165, 198: 164, 199: 9475, 200: 197, 201: 229, 202: 216, 203: 248, 204: 9487, 205: 9491, 206: 9495, 207: 9499 },
            bt = function(e) { var t = e; return yt.hasOwnProperty(e) && (t = yt[e]), String.fromCharCode(t) },
            Tt = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 },
            Et = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 },
            St = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 },
            _t = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 },
            At = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
        ! function(e) { e[e.ERROR = 0] = "ERROR", e[e.TEXT = 1] = "TEXT", e[e.WARNING = 2] = "WARNING", e[e.INFO = 2] = "INFO", e[e.DEBUG = 3] = "DEBUG", e[e.DATA = 3] = "DATA" }(mt || (mt = {}));
        var Rt = {
                verboseFilter: { DATA: 3, DEBUG: 3, INFO: 2, WARNING: 2, TEXT: 1, ERROR: 0 },
                time: null,
                verboseLevel: 0,
                setTime: function(e) { this.time = e },
                log: function(e, t) {
                    this.verboseFilter[e];
                    this.verboseLevel
                }
            },
            wt = function(e) { for (var t = [], r = 0; r < e.length; r++) t.push(e[r].toString(16)); return t },
            kt = function() {
                function e(e, t, r, i, a) { this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = e || "white", this.underline = t || !1, this.italics = r || !1, this.background = i || "black", this.flash = a || !1 }
                var t = e.prototype;
                return t.reset = function() { this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1 }, t.setStyles = function(e) {
                    for (var t = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < t.length; r++) {
                        var i = t[r];
                        e.hasOwnProperty(i) && (this[i] = e[i])
                    }
                }, t.isDefault = function() { return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash }, t.equals = function(e) { return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash }, t.copy = function(e) { this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash }, t.toString = function() { return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash }, e
            }(),
            Lt = function() {
                function e(e, t, r, i, a, n) { this.uchar = void 0, this.penState = void 0, this.uchar = e || " ", this.penState = new kt(t, r, i, a, n) }
                var t = e.prototype;
                return t.reset = function() { this.uchar = " ", this.penState.reset() }, t.setChar = function(e, t) { this.uchar = e, this.penState.copy(t) }, t.setPenState = function(e) { this.penState.copy(e) }, t.equals = function(e) { return this.uchar === e.uchar && this.penState.equals(e.penState) }, t.copy = function(e) { this.uchar = e.uchar, this.penState.copy(e.penState) }, t.isEmpty = function() { return " " === this.uchar && this.penState.isDefault() }, e
            }(),
            Dt = function() {
                function e() {
                    this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.chars = [];
                    for (var e = 0; e < 100; e++) this.chars.push(new Lt);
                    this.pos = 0, this.currPenState = new kt
                }
                var t = e.prototype;
                return t.equals = function(e) {
                    for (var t = !0, r = 0; r < 100; r++)
                        if (!this.chars[r].equals(e.chars[r])) { t = !1; break }
                    return t
                }, t.copy = function(e) { for (var t = 0; t < 100; t++) this.chars[t].copy(e.chars[t]) }, t.isEmpty = function() {
                    for (var e = !0, t = 0; t < 100; t++)
                        if (!this.chars[t].isEmpty()) { e = !1; break }
                    return e
                }, t.setCursor = function(e) { this.pos !== e && (this.pos = e), this.pos < 0 ? (Rt.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > 100 && (Rt.log("ERROR", "Too large cursor position " + this.pos), this.pos = 100) }, t.moveCursor = function(e) {
                    var t = this.pos + e;
                    if (e > 1)
                        for (var r = this.pos + 1; r < t + 1; r++) this.chars[r].setPenState(this.currPenState);
                    this.setCursor(t)
                }, t.backSpace = function() { this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState) }, t.insertChar = function(e) {
                    e >= 144 && this.backSpace();
                    var t = bt(e);
                    this.pos >= 100 ? Rt.log("ERROR", "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1))
                }, t.clearFromPos = function(e) { var t; for (t = e; t < 100; t++) this.chars[t].reset() }, t.clear = function() { this.clearFromPos(0), this.pos = 0, this.currPenState.reset() }, t.clearToEndOfRow = function() { this.clearFromPos(this.pos) }, t.getTextString = function() { for (var e = [], t = !0, r = 0; r < 100; r++) { var i = this.chars[r].uchar; " " !== i && (t = !1), e.push(i) } return t ? "" : e.join("") }, t.setPenStyles = function(e) { this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState) }, e
            }(),
            Ct = function() {
                function e() {
                    this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.rows = [];
                    for (var e = 0; e < 15; e++) this.rows.push(new Dt);
                    this.currRow = 14, this.nrRollUpRows = null, this.reset()
                }
                var t = e.prototype;
                return t.reset = function() {
                    for (var e = 0; e < 15; e++) this.rows[e].clear();
                    this.currRow = 14
                }, t.equals = function(e) {
                    for (var t = !0, r = 0; r < 15; r++)
                        if (!this.rows[r].equals(e.rows[r])) { t = !1; break }
                    return t
                }, t.copy = function(e) { for (var t = 0; t < 15; t++) this.rows[t].copy(e.rows[t]) }, t.isEmpty = function() {
                    for (var e = !0, t = 0; t < 15; t++)
                        if (!this.rows[t].isEmpty()) { e = !1; break }
                    return e
                }, t.backSpace = function() { this.rows[this.currRow].backSpace() }, t.clearToEndOfRow = function() { this.rows[this.currRow].clearToEndOfRow() }, t.insertChar = function(e) { this.rows[this.currRow].insertChar(e) }, t.setPen = function(e) { this.rows[this.currRow].setPenStyles(e) }, t.moveCursor = function(e) { this.rows[this.currRow].moveCursor(e) }, t.setCursor = function(e) { Rt.log("INFO", "setCursor: " + e), this.rows[this.currRow].setCursor(e) }, t.setPAC = function(e) {
                    Rt.log("INFO", "pacData = " + JSON.stringify(e));
                    var t = e.row - 1;
                    if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
                        for (var r = 0; r < 15; r++) this.rows[r].clear();
                        var i = this.currRow + 1 - this.nrRollUpRows,
                            a = this.lastOutputScreen;
                        if (a) {
                            var n = a.rows[i].cueStartTime;
                            if (n && Rt.time && n < Rt.time)
                                for (var s = 0; s < this.nrRollUpRows; s++) this.rows[t - this.nrRollUpRows + s + 1].copy(a.rows[i + s])
                        }
                    }
                    this.currRow = t;
                    var o = this.rows[this.currRow];
                    if (null !== e.indent) {
                        var l = e.indent,
                            d = Math.max(l - 1, 0);
                        o.setCursor(e.indent), e.color = o.chars[d].penState.foreground
                    }
                    var u = { foreground: e.color, underline: e.underline, italics: e.italics, background: "black", flash: !1 };
                    this.setPen(u)
                }, t.setBkgData = function(e) { Rt.log("INFO", "bkgData = " + JSON.stringify(e)), this.backSpace(), this.setPen(e), this.insertChar(32) }, t.setRollUpRows = function(e) { this.nrRollUpRows = e }, t.rollUp = function() {
                    if (null !== this.nrRollUpRows) {
                        Rt.log("TEXT", this.getDisplayText());
                        var e = this.currRow + 1 - this.nrRollUpRows,
                            t = this.rows.splice(e, 1)[0];
                        t.clear(), this.rows.splice(this.currRow, 0, t), Rt.log("INFO", "Rolling up")
                    } else Rt.log("DEBUG", "roll_up but nrRollUpRows not set yet")
                }, t.getDisplayText = function(e) {
                    e = e || !1;
                    for (var t = [], r = "", i = -1, a = 0; a < 15; a++) {
                        var n = this.rows[a].getTextString();
                        n && (i = a + 1, e ? t.push("Row " + i + ": '" + n + "'") : t.push(n.trim()))
                    }
                    return t.length > 0 && (r = e ? "[" + t.join(" | ") + "]" : t.join("\n")), r
                }, t.getTextAndFormat = function() { return this.rows }, e
            }(),
            Ot = function() {
                function e(e, t) { this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.lastCueEndTime = void 0, this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new Ct, this.nonDisplayedMemory = new Ct, this.lastOutputScreen = new Ct, this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null }
                var t = e.prototype;
                return t.reset = function() { this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null }, t.getHandler = function() { return this.outputFilter }, t.setHandler = function(e) { this.outputFilter = e }, t.setPAC = function(e) { this.writeScreen.setPAC(e) }, t.setBkgData = function(e) { this.writeScreen.setBkgData(e) }, t.setMode = function(e) { e !== this.mode && (this.mode = e, Rt.log("INFO", "MODE=" + e), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e) }, t.insertChars = function(e) {
                    for (var t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]);
                    var r = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                    Rt.log("INFO", r + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (Rt.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
                }, t.ccRCL = function() { Rt.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON") }, t.ccBS = function() { Rt.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate()) }, t.ccAOF = function() {}, t.ccAON = function() {}, t.ccDER = function() { Rt.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate() }, t.ccRU = function(e) { Rt.log("INFO", "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e) }, t.ccFON = function() { Rt.log("INFO", "FON - Flash On"), this.writeScreen.setPen({ flash: !0 }) }, t.ccRDC = function() { Rt.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON") }, t.ccTR = function() { Rt.log("INFO", "TR"), this.setMode("MODE_TEXT") }, t.ccRTD = function() { Rt.log("INFO", "RTD"), this.setMode("MODE_TEXT") }, t.ccEDM = function() { Rt.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0) }, t.ccCR = function() { Rt.log("INFO", "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0) }, t.ccENM = function() { Rt.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset() }, t.ccEOC = function() {
                    if (Rt.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                        var e = this.displayedMemory;
                        this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, Rt.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
                    }
                    this.outputDataUpdate(!0)
                }, t.ccTO = function(e) { Rt.log("INFO", "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e) }, t.ccMIDROW = function(e) {
                    var t = { flash: !1 };
                    if (t.underline = e % 2 == 1, t.italics = e >= 46, t.italics) t.foreground = "white";
                    else {
                        var r = Math.floor(e / 2) - 16;
                        t.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][r]
                    }
                    Rt.log("INFO", "MIDROW: " + JSON.stringify(t)), this.writeScreen.setPen(t)
                }, t.outputDataUpdate = function(e) {
                    void 0 === e && (e = !1);
                    var t = Rt.time;
                    null !== t && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t) : this.cueStartTime = t, this.lastOutputScreen.copy(this.displayedMemory))
                }, t.cueSplitAtTime = function(e) { this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e)) }, e
            }(),
            It = function() {
                function e(e, t, r) { this.field = void 0, this.outputs = void 0, this.channels = void 0, this.currChNr = void 0, this.lastCmdA = void 0, this.lastCmdB = void 0, this.lastTime = void 0, this.dataCounters = void 0, this.field = e || 1, this.outputs = [t, r], this.channels = [new Ot(1, t), new Ot(2, r)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.lastTime = null, this.dataCounters = { padding: 0, char: 0, cmd: 0, other: 0 } }
                var t = e.prototype;
                return t.getHandler = function(e) { return this.channels[e].getHandler() }, t.setHandler = function(e, t) { this.channels[e].setHandler(t) }, t.addData = function(e, t) {
                    var r, i, a, n = !1;
                    this.lastTime = e, Rt.setTime(e);
                    for (var s = 0; s < t.length; s += 2)
                        if (i = 127 & t[s], a = 127 & t[s + 1], 0 !== i || 0 !== a) {
                            if (Rt.log("DATA", "[" + wt([t[s], t[s + 1]]) + "] -> (" + wt([i, a]) + ")"), (r = this.parseCmd(i, a)) || (r = this.parseMidrow(i, a)), r || (r = this.parsePAC(i, a)), r || (r = this.parseBackgroundAttributes(i, a)), !r)
                                if (n = this.parseChars(i, a))
                                    if (this.currChNr && this.currChNr >= 0) this.channels[this.currChNr - 1].insertChars(n);
                                    else Rt.log("WARNING", "No channel found yet. TEXT-MODE?");
                            r ? this.dataCounters.cmd += 2 : n ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, Rt.log("WARNING", "Couldn't parse cleaned data " + wt([i, a]) + " orig: " + wt([t[s], t[s + 1]])))
                        } else this.dataCounters.padding += 2
                }, t.parseCmd = function(e, t) {
                    var r = null;
                    if (!((20 === e || 28 === e) && t >= 32 && t <= 47) && !((23 === e || 31 === e) && t >= 33 && t <= 35)) return !1;
                    if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, Rt.log("DEBUG", "Repeated command (" + wt([e, t]) + ") is dropped"), !0;
                    r = 20 === e || 23 === e ? 1 : 2;
                    var i = this.channels[r - 1];
                    return 20 === e || 28 === e ? 32 === t ? i.ccRCL() : 33 === t ? i.ccBS() : 34 === t ? i.ccAOF() : 35 === t ? i.ccAON() : 36 === t ? i.ccDER() : 37 === t ? i.ccRU(2) : 38 === t ? i.ccRU(3) : 39 === t ? i.ccRU(4) : 40 === t ? i.ccFON() : 41 === t ? i.ccRDC() : 42 === t ? i.ccTR() : 43 === t ? i.ccRTD() : 44 === t ? i.ccEDM() : 45 === t ? i.ccCR() : 46 === t ? i.ccENM() : 47 === t && i.ccEOC() : i.ccTO(t - 32), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = r, !0
                }, t.parseMidrow = function(e, t) { var r = null; return (17 === e || 25 === e) && t >= 32 && t <= 47 && ((r = 17 === e ? 1 : 2) !== this.currChNr ? (Rt.log("ERROR", "Mismatch channel in midrow parsing"), !1) : (this.channels[r - 1].ccMIDROW(t), Rt.log("DEBUG", "MIDROW (" + wt([e, t]) + ")"), !0)) }, t.parsePAC = function(e, t) {
                    var r, i = null;
                    if (!((e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127) && !((16 === e || 24 === e) && t >= 64 && t <= 95)) return !1;
                    if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, !0;
                    r = e <= 23 ? 1 : 2, i = t >= 64 && t <= 95 ? 1 === r ? Tt[e] : St[e] : 1 === r ? Et[e] : _t[e];
                    var a = this.interpretPAC(i, t);
                    return this.channels[r - 1].setPAC(a), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = r, !0
                }, t.interpretPAC = function(e, t) {
                    var r = t,
                        i = { color: null, italics: !1, indent: null, underline: !1, row: e };
                    return r = t > 95 ? t - 96 : t - 64, i.underline = 1 == (1 & r), r <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (i.italics = !0, i.color = "white") : i.indent = 4 * Math.floor((r - 16) / 2), i
                }, t.parseChars = function(e, t) {
                    var r = null,
                        i = null,
                        a = null;
                    if (e >= 25 ? (r = 2, a = e - 8) : (r = 1, a = e), a >= 17 && a <= 19) {
                        var n = t;
                        n = 17 === a ? t + 80 : 18 === a ? t + 112 : t + 144, Rt.log("INFO", "Special char '" + bt(n) + "' in channel " + r), i = [n]
                    } else e >= 32 && e <= 127 && (i = 0 === t ? [e] : [e, t]);
                    if (i) {
                        var s = wt(i);
                        Rt.log("DEBUG", "Char codes =  " + s.join(",")), this.lastCmdA = null, this.lastCmdB = null
                    }
                    return i
                }, t.parseBackgroundAttributes = function(e, t) { var r, i, a; return ((16 === e || 24 === e) && t >= 32 && t <= 47 || (23 === e || 31 === e) && t >= 45 && t <= 47) && (r = {}, 16 === e || 24 === e ? (i = Math.floor((t - 32) / 2), r.background = At[i], t % 2 == 1 && (r.background = r.background + "_semi")) : 45 === t ? r.background = "transparent" : (r.foreground = "black", 47 === t && (r.underline = !0)), a = e < 24 ? 1 : 2, this.channels[a - 1].setBkgData(r), this.lastCmdA = null, this.lastCmdB = null, !0) }, t.reset = function() {
                    for (var e = 0; e < this.channels.length; e++) this.channels[e] && this.channels[e].reset();
                    this.lastCmdA = null, this.lastCmdB = null
                }, t.cueSplitAtTime = function(e) { for (var t = 0; t < this.channels.length; t++) this.channels[t] && this.channels[t].cueSplitAtTime(e) }, e
            }(),
            Pt = function() {
                function e(e, t) { this.timelineController = void 0, this.trackName = void 0, this.startTime = void 0, this.endTime = void 0, this.screen = void 0, this.timelineController = e, this.trackName = t, this.startTime = null, this.endTime = null, this.screen = null }
                var t = e.prototype;
                return t.dispatchCue = function() { null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen), this.startTime = null) }, t.newCue = function(e, t, r) {
                    (null === this.startTime || this.startTime > e) && (this.startTime = e), this.endTime = t, this.screen = r, this.timelineController.createCaptionsTrack(this.trackName)
                }, e
            }(),
            xt = function(e, t, r) { return e.substr(r || 0, t.length) === t },
            Mt = function(e) { for (var t = 5381, r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r); return (t >>> 0).toString() },
            Ft = {
                parse: function(e, t, r, i, a, n) {
                    var s, o = Object(Fe.b)(new Uint8Array(e)).trim().replace(/\r\n|\n\r|\n|\r/g, "\n").split("\n"),
                        d = "00:00.000",
                        u = 0,
                        c = 0,
                        h = 0,
                        f = [],
                        g = !0,
                        p = !1,
                        v = new pt;
                    v.oncue = function(e) {
                        var t = r[i],
                            a = r.ccOffset;
                        t && t.new && (void 0 !== c ? a = r.ccOffset = t.start : function(e, t, r) {
                            var i = e[t],
                                a = e[i.prevCC];
                            if (!a || !a.new && i.new) return e.ccOffset = e.presentationOffset = i.start, void(i.new = !1);
                            for (; a && a.new;) e.ccOffset += i.start - a.start, i.new = !1, a = e[(i = a).prevCC];
                            e.presentationOffset = r
                        }(r, i, h)), h && (a = h - r.presentationOffset), p && (e.startTime += a - c, e.endTime += a - c), e.id = Mt(e.startTime.toString()) + Mt(e.endTime.toString()) + Mt(e.text), e.text = decodeURIComponent(encodeURIComponent(e.text)), e.endTime > 0 && f.push(e)
                    }, v.onparsingerror = function(e) { s = e }, v.onflush = function() { s && n ? n(s) : a(f) }, o.forEach((function(e) {
                        if (g) {
                            if (xt(e, "X-TIMESTAMP-MAP=")) {
                                g = !1, p = !0, e.substr(16).split(",").forEach((function(e) { xt(e, "LOCAL:") ? d = e.substr(6) : xt(e, "MPEGTS:") && (u = parseInt(e.substr(7))) }));
                                try {
                                    t + (9e4 * r[i].start || 0) < 0 && (t += 8589934592), u -= t, c = function(e) {
                                        var t = parseInt(e.substr(-3)),
                                            r = parseInt(e.substr(-6, 2)),
                                            i = parseInt(e.substr(-9, 2)),
                                            a = e.length > 9 ? parseInt(e.substr(0, e.indexOf(":"))) : 0;
                                        if (!(Object(l.a)(t) && Object(l.a)(r) && Object(l.a)(i) && Object(l.a)(a))) throw Error("Malformed X-TIMESTAMP-MAP: Local:" + e);
                                        return t += 1e3 * r, t += 6e4 * i, t += 36e5 * a
                                    }(d) / 1e3, h = u / 9e4
                                } catch (e) { p = !1, s = e }
                                return
                            }
                            "" === e && (g = !1)
                        }
                        v.parse(e + "\n")
                    })), v.flush()
                }
            };

        function Ut(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

        function Nt(e, t) { return e && e.label === t.name && !(e.textTrack1 || e.textTrack2) }
        var Bt = function(e) {
            var t, r;

            function i(t) {
                var r;
                if ((r = e.call(this, t, d.a.MEDIA_ATTACHING, d.a.MEDIA_DETACHING, d.a.FRAG_PARSING_USERDATA, d.a.FRAG_DECRYPTED, d.a.MANIFEST_LOADING, d.a.MANIFEST_LOADED, d.a.FRAG_LOADED, d.a.INIT_PTS_FOUND) || this).media = null, r.config = void 0, r.enabled = !0, r.Cues = void 0, r.textTracks = [], r.tracks = [], r.initPTS = [], r.unparsedVttFrags = [], r.cueRanges = [], r.captionsTracks = {}, r.captionsProperties = void 0, r.cea608Parser = void 0, r.lastSn = -1, r.prevCC = -1, r.vttCCs = null, r.hls = t, r.config = t.config, r.Cues = t.config.cueHandler, r.captionsProperties = { textTrack1: { label: r.config.captionsTextTrack1Label, languageCode: r.config.captionsTextTrack1LanguageCode }, textTrack2: { label: r.config.captionsTextTrack2Label, languageCode: r.config.captionsTextTrack2LanguageCode } }, r.config.enableCEA708Captions) {
                    var i = new Pt(Ut(r), "textTrack1"),
                        a = new Pt(Ut(r), "textTrack2");
                    r.cea608Parser = new It(0, i, a)
                }
                return r
            }
            r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
            var a = i.prototype;
            return a.addCues = function(e, t, r, i) {
                for (var a, n, s, o, l = this.cueRanges, d = !1, u = l.length; u--;) {
                    var c = l[u],
                        h = (a = c[0], n = c[1], s = t, o = r, Math.min(n, o) - Math.max(a, s));
                    if (h >= 0 && (c[0] = Math.min(c[0], t), c[1] = Math.max(c[1], r), d = !0, h / (r - t) > .5)) return
                }
                d || l.push([t, r]), this.Cues.newCue(this.captionsTracks[e], t, r, i)
            }, a.onInitPtsFound = function(e) {
                var t = this,
                    r = e.frag,
                    i = e.id,
                    a = e.initPTS,
                    n = this.unparsedVttFrags;
                "main" === i && (this.initPTS[r.cc] = a), n.length && (this.unparsedVttFrags = [], n.forEach((function(e) { t.onFragLoaded(e) })))
            }, a.getExistingTrack = function(e) {
                var t = this.media;
                if (t)
                    for (var r = 0; r < t.textTracks.length; r++) { var i = t.textTracks[r]; if (i[e]) return i }
                return null
            }, a.createCaptionsTrack = function(e) {
                var t = this.captionsProperties,
                    r = this.captionsTracks,
                    i = this.media,
                    a = t[e],
                    n = a.label,
                    s = a.languageCode;
                if (!r[e]) {
                    var o = this.getExistingTrack(e);
                    if (o) r[e] = o, Ne(r[e]), Ue(r[e], i);
                    else {
                        var l = this.createTextTrack("captions", n, s);
                        l && (l[e] = !0, r[e] = l)
                    }
                }
            }, a.createTextTrack = function(e, t, r) { var i = this.media; if (i) return i.addTextTrack(e, t, r) }, a.destroy = function() { e.prototype.destroy.call(this) }, a.onMediaAttaching = function(e) { this.media = e.media, this._cleanTracks() }, a.onMediaDetaching = function() {
                var e = this.captionsTracks;
                Object.keys(e).forEach((function(t) { Ne(e[t]), delete e[t] }))
            }, a.onManifestLoading = function() { this.lastSn = -1, this.prevCC = -1, this.vttCCs = { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: !1 } }, this._cleanTracks() }, a._cleanTracks = function() {
                var e = this.media;
                if (e) {
                    var t = e.textTracks;
                    if (t)
                        for (var r = 0; r < t.length; r++) Ne(t[r])
                }
            }, a.onManifestLoaded = function(e) {
                var t = this;
                if (this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.cueRanges = [], this.config.enableWebVTT) {
                    this.tracks = e.subtitles || [];
                    var r = this.media ? this.media.textTracks : [];
                    this.tracks.forEach((function(e, i) {
                        var a;
                        if (i < r.length) {
                            for (var n = null, s = 0; s < r.length; s++)
                                if (Nt(r[s], e)) { n = r[s]; break }
                            n && (a = n)
                        }
                        a || (a = t.createTextTrack("subtitles", e.name, e.lang)), e.default ? a.mode = t.hls.subtitleDisplay ? "showing" : "hidden" : a.mode = "disabled", t.textTracks.push(a)
                    }))
                }
            }, a.onFragLoaded = function(e) {
                var t = e.frag,
                    r = e.payload,
                    i = this.cea608Parser,
                    a = this.initPTS,
                    n = this.lastSn,
                    s = this.unparsedVttFrags;
                if ("main" === t.type) {
                    var o = t.sn;
                    t.sn !== n + 1 && i && i.reset(), this.lastSn = o
                } else if ("subtitle" === t.type)
                    if (r.byteLength) {
                        if (!Object(l.a)(a[t.cc])) return s.push(e), void(a.length && this.hls.trigger(d.a.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: t }));
                        var u = t.decryptdata;
                        null != u && null != u.key && "AES-128" === u.method || this._parseVTTs(t, r)
                    } else this.hls.trigger(d.a.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: t })
            }, a._parseVTTs = function(e, t) {
                var r = this.hls,
                    i = this.prevCC,
                    a = this.textTracks,
                    n = this.vttCCs;
                n[e.cc] || (n[e.cc] = { start: e.start, prevCC: i, new: !0 }, this.prevCC = e.cc), Ft.parse(t, this.initPTS[e.cc], n, e.cc, (function(t) {
                    var i = a[e.level];
                    "disabled" !== i.mode ? (t.forEach((function(e) {
                        if (!i.cues.getCueById(e.id)) try { if (i.addCue(e), !i.cues.getCueById(e.id)) throw new Error("addCue is failed for: " + e) } catch (r) {
                            u.b.debug("Failed occurred on adding cues: " + r);
                            var t = new window.TextTrackCue(e.startTime, e.endTime, e.text);
                            t.id = e.id, i.addCue(t)
                        }
                    })), r.trigger(d.a.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: e })) : r.trigger(d.a.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: e })
                }), (function(t) { u.b.log("Failed to parse VTT cue: " + t), r.trigger(d.a.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: e }) }))
            }, a.onFragDecrypted = function(e) {
                var t = e.frag,
                    r = e.payload;
                if ("subtitle" === t.type) {
                    if (!Object(l.a)(this.initPTS[t.cc])) return void this.unparsedVttFrags.push(e);
                    this._parseVTTs(t, r)
                }
            }, a.onFragParsingUserdata = function(e) {
                if (this.enabled && this.cea608Parser)
                    for (var t = 0; t < e.samples.length; t++) {
                        var r = e.samples[t].bytes;
                        if (r) {
                            var i = this.extractCea608Data(r);
                            this.cea608Parser.addData(e.samples[t].pts, i)
                        }
                    }
            }, a.extractCea608Data = function(e) { for (var t, r, i, a = 31 & e[0], n = 2, s = [], o = 0; o < a; o++) t = e[n++], r = 127 & e[n++], i = 127 & e[n++], 0 === r && 0 === i || 0 != (4 & t) && 0 === (3 & t) && (s.push(r), s.push(i)); return s }, i
        }(h);

        function Gt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function Kt(e) { for (var t = [], r = 0; r < e.length; r++) { var i = e[r]; "subtitles" === i.kind && i.label && t.push(e[r]) } return t }
        var jt = function(e) {
                var t, r;

                function i(t) { var r; return (r = e.call(this, t, d.a.MEDIA_ATTACHED, d.a.MEDIA_DETACHING, d.a.MANIFEST_LOADED, d.a.SUBTITLE_TRACK_LOADED) || this).tracks = [], r.trackId = -1, r.media = null, r.stopped = !0, r.subtitleDisplay = !0, r.queuedDefaultTrack = null, r }
                r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                var a, n, s, o = i.prototype;
                return o.destroy = function() { h.prototype.destroy.call(this) }, o.onMediaAttached = function(e) {
                    var t = this;
                    this.media = e.media, this.media && (Object(l.a)(this.queuedDefaultTrack) && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = null), this.trackChangeListener = this._onTextTracksChanged.bind(this), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval((function() { t.trackChangeListener() }), 500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
                }, o.onMediaDetaching = function() { this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener), Object(l.a)(this.subtitleTrack) && (this.queuedDefaultTrack = this.subtitleTrack), Kt(this.media.textTracks).forEach((function(e) { Ne(e) })), this.subtitleTrack = -1, this.media = null) }, o.onManifestLoaded = function(e) {
                    var t = this,
                        r = e.subtitles || [];
                    this.tracks = r, this.hls.trigger(d.a.SUBTITLE_TRACKS_UPDATED, { subtitleTracks: r }), r.forEach((function(e) { e.default && (t.media ? t.subtitleTrack = e.id : t.queuedDefaultTrack = e.id) }))
                }, o.onSubtitleTrackLoaded = function(e) {
                    var t = this,
                        r = e.id,
                        i = e.details,
                        a = this.trackId,
                        n = this.tracks,
                        s = n[a];
                    if (r >= n.length || r !== a || !s || this.stopped) this._clearReloadTimer();
                    else if (u.b.log("subtitle track " + r + " loaded"), i.live) {
                        var o = ae(s.details, i, e.stats.trequest);
                        u.b.log("Reloading live subtitle playlist in " + o + "ms"), this.timer = setTimeout((function() { t._loadCurrentTrack() }), o)
                    } else this._clearReloadTimer()
                }, o.startLoad = function() { this.stopped = !1, this._loadCurrentTrack() }, o.stopLoad = function() { this.stopped = !0, this._clearReloadTimer() }, o._clearReloadTimer = function() { this.timer && (clearTimeout(this.timer), this.timer = null) }, o._loadCurrentTrack = function() {
                    var e = this.trackId,
                        t = this.tracks,
                        r = this.hls,
                        i = t[e];
                    e < 0 || !i || i.details && !i.details.live || (u.b.log("Loading subtitle track " + e), r.trigger(d.a.SUBTITLE_TRACK_LOADING, { url: i.url, id: e }))
                }, o._toggleTrackModes = function(e) {
                    var t = this.media,
                        r = this.subtitleDisplay,
                        i = this.trackId;
                    if (t) {
                        var a = Kt(t.textTracks);
                        if (-1 === e)[].slice.call(a).forEach((function(e) { e.mode = "disabled" }));
                        else {
                            var n = a[i];
                            n && (n.mode = "disabled")
                        }
                        var s = a[e];
                        s && (s.mode = r ? "showing" : "hidden")
                    }
                }, o._setSubtitleTrackInternal = function(e) {
                    var t = this.hls,
                        r = this.tracks;
                    !Object(l.a)(e) || e < -1 || e >= r.length || (this.trackId = e, u.b.log("Switching to subtitle track " + e), t.trigger(d.a.SUBTITLE_TRACK_SWITCH, { id: e }), this._loadCurrentTrack())
                }, o._onTextTracksChanged = function() {
                    if (this.media) {
                        for (var e = -1, t = Kt(this.media.textTracks), r = 0; r < t.length; r++)
                            if ("hidden" === t[r].mode) e = r;
                            else if ("showing" === t[r].mode) { e = r; break }
                        this.subtitleTrack = e
                    }
                }, a = i, (n = [{ key: "subtitleTracks", get: function() { return this.tracks } }, { key: "subtitleTrack", get: function() { return this.trackId }, set: function(e) { this.trackId !== e && (this._toggleTrackModes(e), this._setSubtitleTrackInternal(e)) } }]) && Gt(a.prototype, n), s && Gt(a, s), i
            }(h),
            Ht = r(7);
        var Vt, Yt = window.performance,
            Wt = function(e) {
                var t, r;

                function i(t, r) { var i; return (i = e.call(this, t, d.a.MEDIA_ATTACHED, d.a.MEDIA_DETACHING, d.a.ERROR, d.a.KEY_LOADED, d.a.FRAG_LOADED, d.a.SUBTITLE_TRACKS_UPDATED, d.a.SUBTITLE_TRACK_SWITCH, d.a.SUBTITLE_TRACK_LOADED, d.a.SUBTITLE_FRAG_PROCESSED, d.a.LEVEL_UPDATED) || this).fragmentTracker = r, i.config = t.config, i.state = pe, i.tracks = [], i.tracksBuffered = [], i.currentTrackId = -1, i.decrypter = new Ht.a(t, t.config), i.lastAVStart = 0, i._onMediaSeeking = i.onMediaSeeking.bind(function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(i)), i }
                r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                var a = i.prototype;
                return a.onSubtitleFragProcessed = function(e) {
                    var t = e.frag,
                        r = e.success;
                    if (this.fragPrevious = t, this.state = me, r) {
                        var i = this.tracksBuffered[this.currentTrackId];
                        if (i) {
                            for (var a, n = t.start, s = 0; s < i.length; s++)
                                if (n >= i[s].start && n <= i[s].end) { a = i[s]; break }
                            var o = t.start + t.duration;
                            a ? a.end = o : (a = { start: n, end: o }, i.push(a))
                        }
                    }
                }, a.onMediaAttached = function(e) {
                    var t = e.media;
                    this.media = t, t.addEventListener("seeking", this._onMediaSeeking), this.state = me
                }, a.onMediaDetaching = function() {
                    var e = this;
                    this.media && (this.media.removeEventListener("seeking", this._onMediaSeeking), this.fragmentTracker.removeAllFragments(), this.currentTrackId = -1, this.tracks.forEach((function(t) { e.tracksBuffered[t.id] = [] })), this.media = null, this.state = pe)
                }, a.onError = function(e) {
                    var t = e.frag;
                    t && "subtitle" === t.type && (this.state = me)
                }, a.onSubtitleTracksUpdated = function(e) {
                    var t = this;
                    u.b.log("subtitle tracks updated"), this.tracksBuffered = [], this.tracks = e.subtitleTracks, this.tracks.forEach((function(e) { t.tracksBuffered[e.id] = [] }))
                }, a.onSubtitleTrackSwitch = function(e) {
                    if (this.currentTrackId = e.id, this.tracks && this.tracks.length && -1 !== this.currentTrackId) {
                        var t = this.tracks[this.currentTrackId];
                        t && t.details && this.setInterval(500)
                    } else this.clearInterval()
                }, a.onSubtitleTrackLoaded = function(e) {
                    var t = e.id,
                        r = e.details,
                        i = this.currentTrackId,
                        a = this.tracks,
                        n = a[i];
                    t >= a.length || t !== i || !n || (r.live && function(e, t, r) {
                        void 0 === r && (r = 0);
                        var i = -1;
                        ie(e, t, (function(e, t, r) { t.start = e.start, i = r }));
                        var a = t.fragments;
                        if (i < 0) a.forEach((function(e) { e.start += r }));
                        else
                            for (var n = i + 1; n < a.length; n++) a[n].start = a[n - 1].start + a[n - 1].duration
                    }(n.details, r, this.lastAVStart), n.details = r, this.setInterval(500))
                }, a.onKeyLoaded = function() { this.state === be && (this.state = me) }, a.onFragLoaded = function(e) {
                    var t = this.fragCurrent,
                        r = e.frag.decryptdata,
                        i = e.frag,
                        a = this.hls;
                    if (this.state === Te && t && "subtitle" === e.frag.type && t.sn === e.frag.sn && e.payload.byteLength > 0 && r && r.key && "AES-128" === r.method) {
                        var n = Yt.now();
                        this.decrypter.decrypt(e.payload, r.key.buffer, r.iv.buffer, (function(e) {
                            var t = Yt.now();
                            a.trigger(d.a.FRAG_DECRYPTED, { frag: i, payload: e, stats: { tstart: n, tdecrypt: t } })
                        }))
                    }
                }, a.onLevelUpdated = function(e) {
                    var t = e.details.fragments;
                    this.lastAVStart = t.length ? t[0].start : 0
                }, a.doTick = function() {
                    if (this.media) switch (this.state) {
                        case me:
                            var e = this.config,
                                t = this.currentTrackId,
                                r = this.fragmentTracker,
                                i = this.media,
                                a = this.tracks;
                            if (!a || !a[t] || !a[t].details) break;
                            var n, s = e.maxBufferHole,
                                o = e.maxFragLookUpTolerance,
                                l = Math.min(e.maxBufferLength, e.maxMaxBufferLength),
                                c = H.bufferedInfo(this._getBuffered(), i.currentTime, s),
                                h = c.end,
                                f = c.len,
                                g = a[t].details,
                                p = g.fragments,
                                v = p.length,
                                m = p[v - 1].start + p[v - 1].duration;
                            if (f > l) return;
                            var y = this.fragPrevious;
                            h < m ? (y && g.hasProgramDateTime && (n = le(p, y.endProgramDateTime, o)), n || (n = de(y, p, h, o))) : n = p[v - 1], n && n.encrypted ? (u.b.log("Loading key for " + n.sn), this.state = be, this.hls.trigger(d.a.KEY_LOADING, { frag: n })) : n && r.getState(n) === U && (this.fragCurrent = n, this.state = Te, this.hls.trigger(d.a.FRAG_LOADING, { frag: n }))
                    } else this.state = me
                }, a.stopLoad = function() { this.lastAVStart = 0, e.prototype.stopLoad.call(this) }, a._getBuffered = function() { return this.tracksBuffered[this.currentTrackId] || [] }, a.onMediaSeeking = function() { this.fragPrevious = null }, i
            }(Ce);
        ! function(e) { e.WIDEVINE = "com.widevine.alpha", e.PLAYREADY = "com.microsoft.playready" }(Vt || (Vt = {}));
        var qt = "undefined" != typeof window && window.navigator && window.navigator.requestMediaKeySystemAccess ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator) : null;

        function zt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var Xt = function(e) {
            var t, r;

            function i(t) { var r; return (r = e.call(this, t, d.a.MEDIA_ATTACHED, d.a.MEDIA_DETACHED, d.a.MANIFEST_PARSED) || this)._widevineLicenseUrl = void 0, r._licenseXhrSetup = void 0, r._emeEnabled = void 0, r._requestMediaKeySystemAccess = void 0, r._config = void 0, r._mediaKeysList = [], r._media = null, r._hasSetMediaKeys = !1, r._requestLicenseFailureCount = 0, r._onMediaEncrypted = function(e) { u.b.log('Media is encrypted using "' + e.initDataType + '" init data type'), r._attemptSetMediaKeys(), r._generateRequestWithPreferredKeySession(e.initDataType, e.initData) }, r._config = t.config, r._widevineLicenseUrl = r._config.widevineLicenseUrl, r._licenseXhrSetup = r._config.licenseXhrSetup, r._emeEnabled = r._config.emeEnabled, r._requestMediaKeySystemAccess = r._config.requestMediaKeySystemAccessFunc, r }
            r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
            var a, n, s, l = i.prototype;
            return l.getLicenseServerUrl = function(e) {
                switch (e) {
                    case Vt.WIDEVINE:
                        if (!this._widevineLicenseUrl) break;
                        return this._widevineLicenseUrl
                }
                throw new Error('no license server URL configured for key-system "' + e + '"')
            }, l._attemptKeySystemAccess = function(e, t, r) {
                var i = this,
                    a = function(e, t, r) {
                        switch (e) {
                            case Vt.WIDEVINE:
                                return function(e, t) { var r = { videoCapabilities: [] }; return t.forEach((function(e) { r.videoCapabilities.push({ contentType: 'video/mp4; codecs="' + e + '"' }) })), [r] }(0, r);
                            default:
                                throw new Error("Unknown key-system: " + e)
                        }
                    }(e, 0, r);
                u.b.log("Requesting encrypted media key-system access"), this.requestMediaKeySystemAccess(e, a).then((function(t) { i._onMediaKeySystemAccessObtained(e, t) })).catch((function(t) { u.b.error('Failed to obtain key-system "' + e + '" access:', t) }))
            }, l._onMediaKeySystemAccessObtained = function(e, t) {
                var r = this;
                u.b.log('Access for key-system "' + e + '" obtained');
                var i = { mediaKeysSessionInitialized: !1, mediaKeySystemAccess: t, mediaKeySystemDomain: e };
                this._mediaKeysList.push(i), t.createMediaKeys().then((function(t) { i.mediaKeys = t, u.b.log('Media-keys created for key-system "' + e + '"'), r._onMediaKeysCreated() })).catch((function(e) { u.b.error("Failed to create media-keys:", e) }))
            }, l._onMediaKeysCreated = function() {
                var e = this;
                this._mediaKeysList.forEach((function(t) { t.mediaKeysSession || (t.mediaKeysSession = t.mediaKeys.createSession(), e._onNewMediaKeySession(t.mediaKeysSession)) }))
            }, l._onNewMediaKeySession = function(e) {
                var t = this;
                u.b.log("New key-system session " + e.sessionId), e.addEventListener("message", (function(r) { t._onKeySessionMessage(e, r.message) }), !1)
            }, l._onKeySessionMessage = function(e, t) { u.b.log("Got EME message event, creating license request"), this._requestLicense(t, (function(t) { u.b.log("Received license data (length: " + (t ? t.byteLength : t) + "), updating key-session"), e.update(t) })) }, l._attemptSetMediaKeys = function() {
                if (!this._media) throw new Error("Attempted to set mediaKeys without first attaching a media element");
                if (!this._hasSetMediaKeys) {
                    var e = this._mediaKeysList[0];
                    if (!e || !e.mediaKeys) return u.b.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), void this.hls.trigger(d.a.ERROR, { type: o.b.KEY_SYSTEM_ERROR, details: o.a.KEY_SYSTEM_NO_KEYS, fatal: !0 });
                    u.b.log("Setting keys for encrypted media"), this._media.setMediaKeys(e.mediaKeys), this._hasSetMediaKeys = !0
                }
            }, l._generateRequestWithPreferredKeySession = function(e, t) {
                var r = this,
                    i = this._mediaKeysList[0];
                if (!i) return u.b.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), void this.hls.trigger(d.a.ERROR, { type: o.b.KEY_SYSTEM_ERROR, details: o.a.KEY_SYSTEM_NO_ACCESS, fatal: !0 });
                if (i.mediaKeysSessionInitialized) u.b.warn("Key-Session already initialized but requested again");
                else {
                    var a = i.mediaKeysSession;
                    if (!a) return u.b.error("Fatal: Media is encrypted but no key-session existing"), void this.hls.trigger(d.a.ERROR, { type: o.b.KEY_SYSTEM_ERROR, details: o.a.KEY_SYSTEM_NO_SESSION, fatal: !0 });
                    if (!t) return u.b.warn("Fatal: initData required for generating a key session is null"), void this.hls.trigger(d.a.ERROR, { type: o.b.KEY_SYSTEM_ERROR, details: o.a.KEY_SYSTEM_NO_INIT_DATA, fatal: !0 });
                    u.b.log('Generating key-session request for "' + e + '" init data type'), i.mediaKeysSessionInitialized = !0, a.generateRequest(e, t).then((function() { u.b.debug("Key-session generation succeeded") })).catch((function(e) { u.b.error("Error generating key-session request:", e), r.hls.trigger(d.a.ERROR, { type: o.b.KEY_SYSTEM_ERROR, details: o.a.KEY_SYSTEM_NO_SESSION, fatal: !1 }) }))
                }
            }, l._createLicenseXhr = function(e, t, r) {
                var i = new XMLHttpRequest,
                    a = this._licenseXhrSetup;
                try {
                    if (a) try { a(i, e) } catch (t) { i.open("POST", e, !0), a(i, e) }
                    i.readyState || i.open("POST", e, !0)
                } catch (e) { throw new Error("issue setting up KeySystem license XHR " + e) }
                return i.responseType = "arraybuffer", i.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, i, e, t, r), i
            }, l._onLicenseRequestReadyStageChange = function(e, t, r, i) {
                switch (e.readyState) {
                    case 4:
                        if (200 === e.status) this._requestLicenseFailureCount = 0, u.b.log("License request succeeded"), "arraybuffer" !== e.responseType && u.b.warn("xhr response type was not set to the expected arraybuffer for license request"), i(e.response);
                        else {
                            if (u.b.error("License Request XHR failed (" + t + "). Status: " + e.status + " (" + e.statusText + ")"), this._requestLicenseFailureCount++, this._requestLicenseFailureCount > 3) return void this.hls.trigger(d.a.ERROR, { type: o.b.KEY_SYSTEM_ERROR, details: o.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED, fatal: !0 });
                            var a = 3 - this._requestLicenseFailureCount + 1;
                            u.b.warn("Retrying license request, " + a + " attempts left"), this._requestLicense(r, i)
                        }
                }
            }, l._generateLicenseRequestChallenge = function(e, t) {
                switch (e.mediaKeySystemDomain) {
                    case Vt.WIDEVINE:
                        return t
                }
                throw new Error("unsupported key-system: " + e.mediaKeySystemDomain)
            }, l._requestLicense = function(e, t) {
                u.b.log("Requesting content license for key-system");
                var r = this._mediaKeysList[0];
                if (!r) return u.b.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), void this.hls.trigger(d.a.ERROR, { type: o.b.KEY_SYSTEM_ERROR, details: o.a.KEY_SYSTEM_NO_ACCESS, fatal: !0 });
                try {
                    var i = this.getLicenseServerUrl(r.mediaKeySystemDomain),
                        a = this._createLicenseXhr(i, e, t);
                    u.b.log("Sending license request to URL: " + i);
                    var n = this._generateLicenseRequestChallenge(r, e);
                    a.send(n)
                } catch (e) { u.b.error("Failure requesting DRM license: " + e), this.hls.trigger(d.a.ERROR, { type: o.b.KEY_SYSTEM_ERROR, details: o.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED, fatal: !0 }) }
            }, l.onMediaAttached = function(e) {
                if (this._emeEnabled) {
                    var t = e.media;
                    this._media = t, t.addEventListener("encrypted", this._onMediaEncrypted)
                }
            }, l.onMediaDetached = function() { this._media && (this._media.removeEventListener("encrypted", this._onMediaEncrypted), this._media = null) }, l.onManifestParsed = function(e) {
                if (this._emeEnabled) {
                    var t = e.levels.map((function(e) { return e.audioCodec })),
                        r = e.levels.map((function(e) { return e.videoCodec }));
                    this._attemptKeySystemAccess(Vt.WIDEVINE, t, r)
                }
            }, a = i, (n = [{ key: "requestMediaKeySystemAccess", get: function() { if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured"); return this._requestMediaKeySystemAccess } }]) && zt(a.prototype, n), s && zt(a, s), i
        }(h);

        function Qt(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }
        var $t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter((function(e) { return Object.getOwnPropertyDescriptor(r, e).enumerable })))), i.forEach((function(t) { Qt(e, t, r[t]) }))
            }
            return e
        }({ autoStartLoad: !0, startPosition: -1, defaultAudioCodec: void 0, debug: !1, capLevelOnFPSDrop: !1, capLevelToPlayerSize: !1, initialLiveManifestSize: 1, maxBufferLength: 30, maxBufferSize: 6e7, maxBufferHole: .5, lowBufferWatchdogPeriod: .5, highBufferWatchdogPeriod: 3, nudgeOffset: .1, nudgeMaxRetry: 3, maxFragLookUpTolerance: .25, liveSyncDurationCount: 3, liveMaxLatencyDurationCount: 1 / 0, liveSyncDuration: void 0, liveMaxLatencyDuration: void 0, liveDurationInfinity: !1, liveBackBufferLength: 1 / 0, maxMaxBufferLength: 600, enableWorker: !0, enableSoftwareAES: !0, manifestLoadingTimeOut: 1e4, manifestLoadingMaxRetry: 1, manifestLoadingRetryDelay: 1e3, manifestLoadingMaxRetryTimeout: 64e3, startLevel: void 0, levelLoadingTimeOut: 1e4, levelLoadingMaxRetry: 4, levelLoadingRetryDelay: 1e3, levelLoadingMaxRetryTimeout: 64e3, fragLoadingTimeOut: 2e4, fragLoadingMaxRetry: 6, fragLoadingRetryDelay: 1e3, fragLoadingMaxRetryTimeout: 64e3, startFragPrefetch: !1, fpsDroppedMonitoringPeriod: 5e3, fpsDroppedMonitoringThreshold: .2, appendErrorMaxRetry: 3, loader: et, fLoader: void 0, pLoader: void 0, xhrSetup: void 0, licenseXhrSetup: void 0, abrController: Ve, bufferController: We, capLevelController: ze, fpsController: Qe, stretchShortVideoTrack: !1, maxAudioFramesDrift: 1, forceKeyFrameOnDiscontinuity: !0, abrEwmaFastLive: 3, abrEwmaSlowLive: 9, abrEwmaFastVoD: 3, abrEwmaSlowVoD: 9, abrEwmaDefaultEstimate: 5e5, abrBandWidthFactor: .95, abrBandWidthUpFactor: .7, abrMaxWithRealBitrate: !1, maxStarvationDelay: 4, maxLoadingDelay: 4, minAutoBitrate: 0, emeEnabled: !1, widevineLicenseUrl: void 0, requestMediaKeySystemAccessFunc: qt }, function() { 0; return { cueHandler: i, enableCEA708Captions: !0, enableWebVTT: !0, captionsTextTrack1Label: "English", captionsTextTrack1LanguageCode: "en", captionsTextTrack2Label: "Spanish", captionsTextTrack2LanguageCode: "es" } }(), { subtitleStreamController: Wt, subtitleTrackController: jt, timelineController: Bt, audioStreamController: nt, audioTrackController: rt, emeController: Xt });

        function Jt(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }

        function Zt(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

        function er(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function tr(e, t, r) { return t && er(e.prototype, t), r && er(e, r), e }
        r.d(t, "default", (function() { return rr }));
        var rr = function(e) {
            var t, r;

            function i(t) {
                var r;
                void 0 === t && (t = {}), (r = e.call(this) || this).config = void 0, r._autoLevelCapping = void 0, r.abrController = void 0, r.capLevelController = void 0, r.levelController = void 0, r.streamController = void 0, r.networkControllers = void 0, r.audioTrackController = void 0, r.subtitleTrackController = void 0, r.emeController = void 0, r.coreComponents = void 0, r.media = null, r.url = null;
                var a = i.DefaultConfig;
                if ((t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) && (t.liveSyncDuration || t.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                r.config = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter((function(e) { return Object.getOwnPropertyDescriptor(r, e).enumerable })))), i.forEach((function(t) { Jt(e, t, r[t]) }))
                    }
                    return e
                }({}, a, t);
                var n = Zt(r).config;
                if (void 0 !== n.liveMaxLatencyDurationCount && n.liveMaxLatencyDurationCount <= n.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
                if (void 0 !== n.liveMaxLatencyDuration && (void 0 === n.liveSyncDuration || n.liveMaxLatencyDuration <= n.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
                Object(u.a)(n.debug), r._autoLevelCapping = -1;
                var s = r.abrController = new n.abrController(Zt(r)),
                    o = new n.bufferController(Zt(r)),
                    l = r.capLevelController = new n.capLevelController(Zt(r)),
                    d = new n.fpsController(Zt(r)),
                    c = new x(Zt(r)),
                    h = new M(Zt(r)),
                    f = new F(Zt(r)),
                    g = new Be(Zt(r)),
                    p = r.levelController = new Me(Zt(r)),
                    v = new K(Zt(r)),
                    m = [p, r.streamController = new Ie(Zt(r), v)],
                    y = n.audioStreamController;
                y && m.push(new y(Zt(r), v)), r.networkControllers = m;
                var b = [c, h, f, s, o, l, d, g, v];
                if (y = n.audioTrackController) {
                    var T = new y(Zt(r));
                    r.audioTrackController = T, b.push(T)
                }
                if (y = n.subtitleTrackController) {
                    var E = new y(Zt(r));
                    r.subtitleTrackController = E, m.push(E)
                }
                if (y = n.emeController) {
                    var S = new y(Zt(r));
                    r.emeController = S, b.push(S)
                }
                return (y = n.subtitleStreamController) && m.push(new y(Zt(r), v)), (y = n.timelineController) && b.push(new y(Zt(r))), r.coreComponents = b, r
            }
            r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, i.isSupported = function() {
                return function() {
                    var e = q();
                    if (!e) return !1;
                    var t = self.SourceBuffer || self.WebKitSourceBuffer,
                        r = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                        i = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
                    return !!r && !!i
                }()
            }, tr(i, null, [{ key: "version", get: function() { return "0.13.1" } }, { key: "Events", get: function() { return d.a } }, { key: "ErrorTypes", get: function() { return o.b } }, { key: "ErrorDetails", get: function() { return o.a } }, { key: "DefaultConfig", get: function() { return i.defaultConfig ? i.defaultConfig : $t }, set: function(e) { i.defaultConfig = e } }]);
            var a = i.prototype;
            return a.destroy = function() { u.b.log("destroy"), this.trigger(d.a.DESTROYING), this.detachMedia(), this.coreComponents.concat(this.networkControllers).forEach((function(e) { e.destroy() })), this.url = null, this.removeAllListeners(), this._autoLevelCapping = -1 }, a.attachMedia = function(e) { u.b.log("attachMedia"), this.media = e, this.trigger(d.a.MEDIA_ATTACHING, { media: e }) }, a.detachMedia = function() { u.b.log("detachMedia"), this.trigger(d.a.MEDIA_DETACHING), this.media = null }, a.loadSource = function(e) { e = s.buildAbsoluteURL(window.location.href, e, { alwaysNormalize: !0 }), u.b.log("loadSource:" + e), this.url = e, this.trigger(d.a.MANIFEST_LOADING, { url: e }) }, a.startLoad = function(e) { void 0 === e && (e = -1), u.b.log("startLoad(" + e + ")"), this.networkControllers.forEach((function(t) { t.startLoad(e) })) }, a.stopLoad = function() { u.b.log("stopLoad"), this.networkControllers.forEach((function(e) { e.stopLoad() })) }, a.swapAudioCodec = function() { u.b.log("swapAudioCodec"), this.streamController.swapAudioCodec() }, a.recoverMediaError = function() {
                u.b.log("recoverMediaError");
                var e = this.media;
                this.detachMedia(), e && this.attachMedia(e)
            }, tr(i, [{ key: "levels", get: function() { return this.levelController.levels } }, { key: "currentLevel", get: function() { return this.streamController.currentLevel }, set: function(e) { u.b.log("set currentLevel:" + e), this.loadLevel = e, this.streamController.immediateLevelSwitch() } }, { key: "nextLevel", get: function() { return this.streamController.nextLevel }, set: function(e) { u.b.log("set nextLevel:" + e), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch() } }, { key: "loadLevel", get: function() { return this.levelController.level }, set: function(e) { u.b.log("set loadLevel:" + e), this.levelController.manualLevel = e } }, { key: "nextLoadLevel", get: function() { return this.levelController.nextLoadLevel }, set: function(e) { this.levelController.nextLoadLevel = e } }, { key: "firstLevel", get: function() { return Math.max(this.levelController.firstLevel, this.minAutoLevel) }, set: function(e) { u.b.log("set firstLevel:" + e), this.levelController.firstLevel = e } }, { key: "startLevel", get: function() { return this.levelController.startLevel }, set: function(e) { u.b.log("set startLevel:" + e), -1 !== e && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e } }, {
                key: "capLevelToPlayerSize",
                set: function(e) {
                    var t = !!e;
                    t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t)
                }
            }, { key: "autoLevelCapping", get: function() { return this._autoLevelCapping }, set: function(e) { u.b.log("set autoLevelCapping:" + e), this._autoLevelCapping = e } }, { key: "bandwidthEstimate", get: function() { var e = this.abrController._bwEstimator; return e ? e.getEstimate() : NaN } }, { key: "autoLevelEnabled", get: function() { return -1 === this.levelController.manualLevel } }, { key: "manualLevel", get: function() { return this.levelController.manualLevel } }, { key: "minAutoLevel", get: function() { for (var e = this.levels, t = this.config.minAutoBitrate, r = e ? e.length : 0, i = 0; i < r; i++) { if ((e[i].realBitrate ? Math.max(e[i].realBitrate, e[i].bitrate) : e[i].bitrate) > t) return i } return 0 } }, {
                key: "maxAutoLevel",
                get: function() {
                    var e = this.levels,
                        t = this.autoLevelCapping;
                    return -1 === t && e && e.length ? e.length - 1 : t
                }
            }, { key: "nextAutoLevel", get: function() { return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel) }, set: function(e) { this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, e) } }, { key: "audioTracks", get: function() { var e = this.audioTrackController; return e ? e.audioTracks : [] } }, {
                key: "audioTrack",
                get: function() { var e = this.audioTrackController; return e ? e.audioTrack : -1 },
                set: function(e) {
                    var t = this.audioTrackController;
                    t && (t.audioTrack = e)
                }
            }, { key: "liveSyncPosition", get: function() { return this.streamController.liveSyncPosition } }, { key: "subtitleTracks", get: function() { var e = this.subtitleTrackController; return e ? e.subtitleTracks : [] } }, {
                key: "subtitleTrack",
                get: function() { var e = this.subtitleTrackController; return e ? e.subtitleTrack : -1 },
                set: function(e) {
                    var t = this.subtitleTrackController;
                    t && (t.subtitleTrack = e)
                }
            }, {
                key: "subtitleDisplay",
                get: function() { var e = this.subtitleTrackController; return !!e && e.subtitleDisplay },
                set: function(e) {
                    var t = this.subtitleTrackController;
                    t && (t.subtitleDisplay = e)
                }
            }]), i
        }(X);
        rr.defaultConfig = void 0
    }]).default
}));




export default Playerjs;