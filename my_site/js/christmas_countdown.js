const _0x43beeb=_0x35dc;(function(_0x518b5c,_0x466dd9){const _0xa6ad00=_0x35dc,_0x1b3530=_0x518b5c();while(!![]){try{const _0x2a3649=parseInt(_0xa6ad00(0x1ea))/0x1+parseInt(_0xa6ad00(0x1e2))/0x2*(parseInt(_0xa6ad00(0x1f3))/0x3)+parseInt(_0xa6ad00(0x1e4))/0x4*(-parseInt(_0xa6ad00(0x1e9))/0x5)+-parseInt(_0xa6ad00(0x1ec))/0x6*(parseInt(_0xa6ad00(0x1f2))/0x7)+parseInt(_0xa6ad00(0x1f4))/0x8+parseInt(_0xa6ad00(0x1ed))/0x9*(parseInt(_0xa6ad00(0x1f1))/0xa)+parseInt(_0xa6ad00(0x1ef))/0xb*(-parseInt(_0xa6ad00(0x1e5))/0xc);if(_0x2a3649===_0x466dd9)break;else _0x1b3530['push'](_0x1b3530['shift']());}catch(_0x4681af){_0x1b3530['push'](_0x1b3530['shift']());}}}(_0x5358,0xb8f54));function _0x35dc(_0x45d155,_0x4edc79){const _0x5358ad=_0x5358();return _0x35dc=function(_0x35dc78,_0x1d63a3){_0x35dc78=_0x35dc78-0x1e2;let _0x47f3a3=_0x5358ad[_0x35dc78];return _0x47f3a3;},_0x35dc(_0x45d155,_0x4edc79);}const date=new Date(),current_year=date[_0x43beeb(0x1f6)](),current_month=date[_0x43beeb(0x1f0)](),current_date=date[_0x43beeb(0x1e3)](),current_hour=date['getHours'](),current_minute=date[_0x43beeb(0x1ee)](),current_second=date[_0x43beeb(0x1f5)]();let months=[0x1f,0x1c,0x1f,0x1e,0x1f,0x1e,0x1f,0x1f,0x1e,0x1f,0x1e,0x19],hours=0x18-parseInt(current_hour)-0x1,minutes=0x3c-parseInt(current_minute)-0x1,seconds=0x3c-parseInt(current_second),result=0x0;for(let i=current_month;i<months[_0x43beeb(0x1e6)];result+=months[i],i++);function isLeapYear(_0x54f036){if(_0x54f036%0x190==0x0||_0x54f036%0x4==0x0)month[0x1]=0x1d;if(_0x54f036%0x64==0x0)return![];return![];}function _0x5358(){const _0x85c3d0=['getYear','1200182ylmmzM','getDate','116sofuRc','12VSKVHw','length','countdown','innerText','105245UzZqym','360148JkLcPZ','getElementById','150006yerTsa','9QFazLg','getMinutes','1025981vDfiGB','getMonth','114890cgYppE','133NbDdhD','3zsurpF','7716568oiZOor','getSeconds'];_0x5358=function(){return _0x85c3d0;};return _0x5358();}function christmasCountdown(){const _0x17805c=_0x43beeb;isLeapYear(current_year),start(),document[_0x17805c(0x1eb)]('countdown')[_0x17805c(0x1e8)]=isLessThanTen(result-current_date-0x1,hours,minutes,seconds),setTimeout(christmasCountdown,0x3e8);}function start(){if(result<0x1&&hours<0x1&&minutes<0x1&&seconds<0x1){if(isLeapYear(current_year))result=0x16e-0x6;else result=0x16d-0x6;hours=0x17,minutes=0x3b,seconds=0x3b;}else{if(result>0x0&&hours<0x1&&minutes<0x1&&seconds<0x1)result--,hours=0x17,minutes=0x3b,seconds=0x3b;else{if(result>0x0&&hours>0x0&&minutes<0x1&&seconds<0x1)hours--,minutes=0x3b,seconds=0x3b;else{if(seconds>0x0)seconds--;else seconds=0x3b,minutes--;}}}}function isLessThanTen(_0x516f51,_0x65e289,_0x2c91e7,_0x257897){const _0x425876=_0x43beeb;if(_0x516f51<0xa)_0x516f51='0'+_0x516f51;if(_0x65e289<0xa)_0x65e289='0'+_0x65e289;if(_0x2c91e7<0xa)_0x2c91e7='0'+_0x2c91e7;if(_0x257897<0xa)_0x257897='0'+_0x257897;return document[_0x425876(0x1eb)](_0x425876(0x1e7))[_0x425876(0x1e8)]=_0x516f51+':'+_0x65e289+':'+_0x2c91e7+':'+_0x257897;}
