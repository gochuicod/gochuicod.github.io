const _0x4f293f=_0x3141;(function(_0x4777b5,_0x4b9147){const _0x3f4a43=_0x3141,_0xa57c9a=_0x4777b5();while(!![]){try{const _0x3ed019=parseInt(_0x3f4a43(0x16b))/0x1+-parseInt(_0x3f4a43(0x178))/0x2+-parseInt(_0x3f4a43(0x17f))/0x3+-parseInt(_0x3f4a43(0x174))/0x4+-parseInt(_0x3f4a43(0x176))/0x5+parseInt(_0x3f4a43(0x163))/0x6*(parseInt(_0x3f4a43(0x168))/0x7)+-parseInt(_0x3f4a43(0x17b))/0x8*(-parseInt(_0x3f4a43(0x17a))/0x9);if(_0x3ed019===_0x4b9147)break;else _0xa57c9a['push'](_0xa57c9a['shift']());}catch(_0x5ade34){_0xa57c9a['push'](_0xa57c9a['shift']());}}}(_0x171b,0x2e346));let count=0x0,inputTitle=document[_0x4f293f(0x16e)](_0x4f293f(0x17e)),allNotes=document[_0x4f293f(0x16e)](_0x4f293f(0x183));window['onload']=()=>allStorage();function allStorage(){const _0xd0bdaa=_0x4f293f;let _0x347d3b=[],_0x57ff00=Object[_0xd0bdaa(0x188)](localStorage),_0xeef77=_0x57ff00[_0xd0bdaa(0x175)];while(_0xeef77--)_0x347d3b['push'](localStorage[_0xd0bdaa(0x184)](_0x57ff00[_0xeef77]));for(let _0x80d517=0x0;_0x80d517<_0x347d3b[_0xd0bdaa(0x175)];addLocalItem(_0x347d3b[_0x80d517]),_0x80d517++);}function addLocalItem(_0x184768){const _0x3eb7e4=_0x4f293f;let _0xebd96a=_0x184768,_0x366032=document[_0x3eb7e4(0x177)](_0x3eb7e4(0x171)),_0x4c95cc=document[_0x3eb7e4(0x177)]('span'),_0x1896db=document[_0x3eb7e4(0x177)](_0x3eb7e4(0x16a));_0x366032[_0x3eb7e4(0x17c)](_0x3eb7e4(0x185),_0x3eb7e4(0x162)),_0x366032['setAttribute']('id',''+_0x184768),_0x4c95cc[_0x3eb7e4(0x17c)](_0x3eb7e4(0x185),'m-2'),_0x1896db[_0x3eb7e4(0x17c)](_0x3eb7e4(0x185),_0x3eb7e4(0x182)),_0x1896db['setAttribute']('onclick','document.getElementById(\x22notes\x22).removeChild(document.getElementById(\x22'+_0x184768+_0x3eb7e4(0x172)+_0x184768+'\x22)'),_0x4c95cc[_0x3eb7e4(0x165)]=_0x184768,_0x1896db[_0x3eb7e4(0x165)]='x',_0x366032[_0x3eb7e4(0x180)](_0x4c95cc),_0x366032[_0x3eb7e4(0x180)](_0x1896db),notes[_0x3eb7e4(0x180)](_0x366032);}function addItem(){const _0xf139cf=_0x4f293f,_0x1509f4=document[_0xf139cf(0x170)](_0xf139cf(0x169));if(inputTitle[_0xf139cf(0x167)]!=''){let _0x31637d=document[_0xf139cf(0x170)]('title'),_0x44e333=document[_0xf139cf(0x177)](_0xf139cf(0x171)),_0x137f17=document[_0xf139cf(0x177)](_0xf139cf(0x166)),_0x3370b7=document[_0xf139cf(0x177)](_0xf139cf(0x16a));_0x44e333[_0xf139cf(0x17c)](_0xf139cf(0x185),_0xf139cf(0x162)),_0x44e333['setAttribute']('id',''+_0x31637d[_0xf139cf(0x167)]),_0x137f17[_0xf139cf(0x17c)](_0xf139cf(0x185),_0xf139cf(0x181)),_0x3370b7['setAttribute'](_0xf139cf(0x185),_0xf139cf(0x182)),_0x3370b7['setAttribute'](_0xf139cf(0x179),'document.getElementById(\x22notes\x22).removeChild(document.getElementById(\x22'+_0x31637d['value']+_0xf139cf(0x172)+_0x31637d[_0xf139cf(0x167)]+'\x22)'),_0x137f17['innerText']=_0x31637d[_0xf139cf(0x167)],_0x3370b7[_0xf139cf(0x165)]='x',_0x44e333[_0xf139cf(0x180)](_0x137f17),_0x44e333['append'](_0x3370b7),localStorage['setItem'](''+_0x31637d[_0xf139cf(0x167)],''+_0x31637d[_0xf139cf(0x167)]),_0x1509f4[_0xf139cf(0x180)](_0x44e333),count++,_0x31637d[_0xf139cf(0x167)]='';}}function removeAllChildNodes(_0x536b74){const _0x45e4fd=_0x4f293f;while(_0x536b74['firstChild'])_0x536b74[_0x45e4fd(0x16f)](_0x536b74[_0x45e4fd(0x173)]);localStorage[_0x45e4fd(0x16d)]();}function _0x3141(_0x23a5f6,_0x23388a){const _0x171bcf=_0x171b();return _0x3141=function(_0x31414d,_0x56492e){_0x31414d=_0x31414d-0x162;let _0xe25b39=_0x171bcf[_0x31414d];return _0xe25b39;},_0x3141(_0x23a5f6,_0x23388a);}function _0x171b(){const _0x526cc0=['btn\x20fw-light\x20fs-small\x20me-2\x20text-dark','#notes','getItem','class','blur','addEventListener','keys','Escape','d-flex\x20flex-row\x20justify-content-between\x20p-1\x20bg-white\x20text-dark\x20rounded-custom\x20mb-2\x20border\x20border-2\x20border-muted\x20fs-small','18zZwtSy','Enter','innerText','span','value','107303aDkQun','notes','button','12248RCCgwP','keyup','clear','querySelector','removeChild','getElementById','div','\x22));\x20localStorage.removeItem(\x22','firstChild','1308688LXhMjD','length','1480170AHlqLJ','createElement','95460TTRhJz','onclick','72rTRUHS','1152544QHlaBr','setAttribute','key','#title','1051767YSLvZo','append','m-2'];_0x171b=function(){return _0x526cc0;};return _0x171b();}inputTitle[_0x4f293f(0x187)](_0x4f293f(0x16c),function(_0x5f16e6){const _0x133274=_0x4f293f;if(_0x5f16e6[_0x133274(0x17d)]===_0x133274(0x164))addItem();if(_0x5f16e6[_0x133274(0x17d)]===_0x133274(0x189))inputTitle[_0x133274(0x186)]();});
