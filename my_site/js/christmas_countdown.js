function _0x2b0f(){const _0x1edf24=['30448olOOMn','getYear','65531rZRAoD','10825caGMso','568eHNoPa','35820ERKHdm','234612QxswVM','getHours','360hrtMVA','1277154TOLxDS','1990ibldQk','onload','3nNGwBk','getMonth','innerText','getSeconds','length','getDate','118454bqBglA'];_0x2b0f=function(){return _0x1edf24;};return _0x2b0f();}const _0x10c25c=_0x6c6c;(function(_0x3cf11e,_0x4c5f8c){const _0x51fd7e=_0x6c6c,_0x4fbfb9=_0x3cf11e();while(!![]){try{const _0xbfed97=-parseInt(_0x51fd7e(0x178))/0x1+parseInt(_0x51fd7e(0x175))/0x2*(-parseInt(_0x51fd7e(0x16f))/0x3)+-parseInt(_0x51fd7e(0x16b))/0x4*(-parseInt(_0x51fd7e(0x179))/0x5)+-parseInt(_0x51fd7e(0x16c))/0x6+parseInt(_0x51fd7e(0x169))/0x7+-parseInt(_0x51fd7e(0x167))/0x8*(parseInt(_0x51fd7e(0x168))/0x9)+-parseInt(_0x51fd7e(0x16d))/0xa*(-parseInt(_0x51fd7e(0x176))/0xb);if(_0xbfed97===_0x4c5f8c)break;else _0x4fbfb9['push'](_0x4fbfb9['shift']());}catch(_0x3cf297){_0x4fbfb9['push'](_0x4fbfb9['shift']());}}}(_0x2b0f,0x26d19));const date=new Date(),currentYear=date[_0x10c25c(0x177)](),currentMonth=date[_0x10c25c(0x170)]();let countDown=document['querySelector']('#countdown'),monthVal=0x0,totalMonthVal=0x0,months=[0x1f,0x1c,0x1f,0x1e,0x1f,0x1e,0x1f,0x1f,0x1e,0x1f,0x1e,0x19];window[_0x10c25c(0x16e)]=()=>{const _0x2df704=_0x10c25c;for(let _0x1d3641=0x0;_0x1d3641<currentMonth;monthVal+=months[_0x1d3641],_0x1d3641++);for(let _0x44dce1=0x0;_0x44dce1<months[_0x2df704(0x173)];totalMonthVal+=months[_0x44dce1],_0x44dce1++);setInterval(start,0x3e8);};function _0x6c6c(_0x5b87fc,_0x287f2e){const _0x2b0f59=_0x2b0f();return _0x6c6c=function(_0x6c6c5f,_0x11a175){_0x6c6c5f=_0x6c6c5f-0x167;let _0x56e5f2=_0x2b0f59[_0x6c6c5f];return _0x56e5f2;},_0x6c6c(_0x5b87fc,_0x287f2e);}function isLeapYear(_0x12f12c){if(_0x12f12c%0x190==0x0||_0x12f12c%0x4==0x0)return!![];else return![];}function start(){const _0x1e9d03=_0x10c25c;let _0x19b780=new Date(),_0x29cddd=0x3b-_0x19b780[_0x1e9d03(0x172)](),_0x1eaad9=0x3b-_0x19b780['getMinutes'](),_0x915954=0x17-_0x19b780[_0x1e9d03(0x16a)](),_0x17e5dc=_0x19b780[_0x1e9d03(0x174)]();if(isLeapYear(currentYear)==![])_0x17e5dc++;countDown[_0x1e9d03(0x171)]=''+isLessThan(_0x29cddd,_0x1eaad9,_0x915954,totalMonthVal-(monthVal+_0x17e5dc));}function isLessThan(_0x36704a,_0x1db19c,_0x303072,_0x5bb8ba){if(_0x36704a<0xa)_0x36704a='0'+_0x36704a;if(_0x1db19c<0xa)_0x1db19c='0'+_0x1db19c;if(_0x303072<0xa)_0x303072='0'+_0x303072;if(_0x5bb8ba<0xa)_0x5bb8ba='0'+_0x5bb8ba;return _0x5bb8ba+':'+_0x303072+':'+_0x1db19c+':'+_0x36704a;}
