function _0x5e69(_0x4bc843,_0xcd7433){const _0x5ba75d=_0x5ba7();return _0x5e69=function(_0x5e69f1,_0x5eb87){_0x5e69f1=_0x5e69f1-0x66;let _0x45199f=_0x5ba75d[_0x5e69f1];return _0x45199f;},_0x5e69(_0x4bc843,_0xcd7433);}const _0x3cf22d=_0x5e69;(function(_0x423fd4,_0x4dccf4){const _0x34739e=_0x5e69,_0x401d3f=_0x423fd4();while(!![]){try{const _0x5d4655=-parseInt(_0x34739e(0x83))/0x1*(-parseInt(_0x34739e(0x78))/0x2)+-parseInt(_0x34739e(0x9e))/0x3*(parseInt(_0x34739e(0x97))/0x4)+parseInt(_0x34739e(0x84))/0x5*(parseInt(_0x34739e(0x94))/0x6)+parseInt(_0x34739e(0x90))/0x7*(parseInt(_0x34739e(0x7b))/0x8)+-parseInt(_0x34739e(0x6a))/0x9*(-parseInt(_0x34739e(0x74))/0xa)+parseInt(_0x34739e(0x77))/0xb+-parseInt(_0x34739e(0x68))/0xc;if(_0x5d4655===_0x4dccf4)break;else _0x401d3f['push'](_0x401d3f['shift']());}catch(_0x5e9b73){_0x401d3f['push'](_0x401d3f['shift']());}}}(_0x5ba7,0x27d1c));let weather={'apiKey':_0x3cf22d(0x92),'fetchWeather':function(_0x3a039e){const _0x4bd408=_0x3cf22d;fetch('https://api.openweathermap.org/data/2.5/weather?q='+_0x3a039e+_0x4bd408(0x9f)+this['apiKey'])[_0x4bd408(0x75)](_0x501436=>_0x501436['json']())[_0x4bd408(0x75)](_0x296806=>this[_0x4bd408(0x73)](_0x296806));},'displayWeather':function(_0x2d9f3d){const _0x1f243a=_0x3cf22d,{name:_0x912bf9,clouds:_0x5ee2a9,sys:_0x3ddf24}=_0x2d9f3d,{description:_0x2e8485,icon:_0x4b9451}=_0x2d9f3d[_0x1f243a(0x70)][0x0],{temp:_0x47f642,humidity:_0x4749ef,feels_like:_0x253cac}=_0x2d9f3d[_0x1f243a(0x6b)],{speed:_0x53ed0c}=_0x2d9f3d[_0x1f243a(0xa1)],{lat:_0x17a69b,lon:_0xb005dd}=_0x2d9f3d[_0x1f243a(0x8a)];document[_0x1f243a(0x81)](_0x1f243a(0x96))['innerText']=_0x912bf9,document['querySelector'](_0x1f243a(0x6f))[_0x1f243a(0x8c)]=_0x47f642+'°C',document[_0x1f243a(0x81)](_0x1f243a(0x80))['innerText']=_0x2e8485,document[_0x1f243a(0x81)]('.humidity')[_0x1f243a(0x8c)]=_0x1f243a(0x9c)+_0x4749ef+'%',document['querySelector'](_0x1f243a(0x8e))[_0x1f243a(0x8c)]=_0x1f243a(0x69)+_0x53ed0c+_0x1f243a(0x66),document[_0x1f243a(0x81)]('.weather')[_0x1f243a(0x9a)]['remove'](_0x1f243a(0x8d)),document[_0x1f243a(0x81)](_0x1f243a(0x6c))[_0x1f243a(0x8c)]='Cloud\x20Cover:\x20'+_0x5ee2a9[_0x1f243a(0x6e)]+'%',document[_0x1f243a(0x81)]('.feels_like')[_0x1f243a(0x8c)]=_0x1f243a(0x99)+_0x253cac+'°C',document[_0x1f243a(0x81)]('.icon')[_0x1f243a(0x86)]=_0x1f243a(0x87)+_0x4b9451+_0x1f243a(0x8f);let _0x870945=new Date(_0x3ddf24[_0x1f243a(0x7e)]*0x3e8);document[_0x1f243a(0x81)](_0x1f243a(0x71))['innerText']=_0x1f243a(0x88)+_0x870945[_0x1f243a(0x9b)](),fetch(_0x1f243a(0x93)+_0x17a69b+_0x1f243a(0xa0)+_0xb005dd+_0x1f243a(0x9d)+this[_0x1f243a(0x67)])[_0x1f243a(0x75)](_0x960dd7=>_0x960dd7[_0x1f243a(0x98)]())[_0x1f243a(0x75)](_0xbfba0f=>this[_0x1f243a(0x6d)](_0xbfba0f));},'search':function(){const _0x2bf2b6=_0x3cf22d;this[_0x2bf2b6(0x7c)](document['querySelector']('.search')[_0x2bf2b6(0x89)]);},'displayPollutionData':function(_0x1fab54){const _0x1deade=_0x3cf22d;let _0x411cb3='';const {o3:_0x2ada69}=_0x1fab54[_0x1deade(0x95)][0x0][_0x1deade(0x72)];if(parseInt(_0x2ada69)>-0x1&&parseInt(_0x2ada69)<0x3d)_0x411cb3=_0x1deade(0x7a);else{if(parseInt(_0x2ada69)>0x3b&&parseInt(_0x2ada69)<0x79)_0x411cb3=_0x1deade(0x91);else{if(parseInt(_0x2ada69)>0x77&&parseInt(_0x2ada69)<0xb5)_0x411cb3=_0x1deade(0xa2);else{if(parseInt(_0x2ada69)>0xb3&&parseInt(_0x2ada69)<0x3d)_0x411cb3=_0x1deade(0x82);else{if(parseInt(_0x2ada69)>0xf0)_0x411cb3=_0x1deade(0x85);}}}}document[_0x1deade(0x81)](_0x1deade(0x76))[_0x1deade(0x8c)]=_0x1deade(0x7f)+_0x411cb3;}};function _0x5ba7(){const _0x5eb11c=['Very\x20Poor','src','https://openweathermap.org/img/wn/','Sunset:\x20','value','coord','search','innerText','loading','.windspeed','@2x.png','30191mKdYzt','Fair','f61cce078be10fc170921eecbec33440','https://api.openweathermap.org/data/2.5/air_pollution?lat=','425334yFAEHK','list','.city','4940NuMWXR','json','Feels\x20like:\x20','classList','toLocaleTimeString','Humidity:\x20','&appid=','30rbISQH','&units=metric&appid=','&lon=','wind','Moderate','\x20km/h','apiKey','8405160fLGwdp','Wind\x20Speed:\x20','9atolHX','main','.cloudcover','displayPollutionData','all','.temperature','weather','.sunset','components','displayWeather','2157730PKIFIQ','then','.airquality','2864334NZTULl','2cAJqLd','Cebu','Good','144bRbNot','fetchWeather','.search','sunset','Air\x20Quality:\x20','.description','querySelector','Poor','109412qCNSaD','15vdxQWP'];_0x5ba7=function(){return _0x5eb11c;};return _0x5ba7();}document['querySelector'](_0x3cf22d(0x7d))['addEventListener']('keyup',_0x1de881=>weather[_0x3cf22d(0x8b)]()),weather[_0x3cf22d(0x7c)](_0x3cf22d(0x79));
