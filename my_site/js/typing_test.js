const _0x32e106=_0x22dc;(function(_0x1983b6,_0x3579c8){const _0x2b1259=_0x22dc,_0x8e930f=_0x1983b6();while(!![]){try{const _0x896465=-parseInt(_0x2b1259(0xc9))/0x1*(-parseInt(_0x2b1259(0x104))/0x2)+parseInt(_0x2b1259(0xf1))/0x3+-parseInt(_0x2b1259(0xf3))/0x4*(-parseInt(_0x2b1259(0xfe))/0x5)+-parseInt(_0x2b1259(0xf5))/0x6+-parseInt(_0x2b1259(0xce))/0x7*(parseInt(_0x2b1259(0xcf))/0x8)+parseInt(_0x2b1259(0xd3))/0x9+-parseInt(_0x2b1259(0xe0))/0xa*(parseInt(_0x2b1259(0x10e))/0xb);if(_0x896465===_0x3579c8)break;else _0x8e930f['push'](_0x8e930f['shift']());}catch(_0x5ebcd6){_0x8e930f['push'](_0x8e930f['shift']());}}}(_0x5abb,0xb4e92));let total_characters=0x0,time=0x3c,counter_start,toggle=0x0,lblChars=0x0,lblWpm=0x0,lblAccuracy=0x64[_0x32e106(0xeb)](0x2),lblErrors=0x0,texts=[],givenTexts=[],items=[],txtarea=document['querySelector'](_0x32e106(0xde)),startBtn=document[_0x32e106(0xcb)](_0x32e106(0xef)),characters=document[_0x32e106(0xcb)](_0x32e106(0xe5)),wordsperminute=document[_0x32e106(0xcb)](_0x32e106(0xd9)),lblTime=document['querySelector'](_0x32e106(0xda)),follow=document[_0x32e106(0xcb)](_0x32e106(0xed)),cError=document[_0x32e106(0xcb)](_0x32e106(0xdf)),accuracy=document[_0x32e106(0xcb)](_0x32e106(0xfb)),difficulty=document[_0x32e106(0xcb)](_0x32e106(0xe6)),text;startBtn[_0x32e106(0xe4)]['cursor']=_0x32e106(0x10a),difficulty[_0x32e106(0xe4)][_0x32e106(0xf7)]=_0x32e106(0x10a),(function(){const _0x5b0c73=_0x32e106;text=_0x5b0c73(0xd4),generateTexts();}());function generateTexts(){const _0x1a1eea=_0x32e106;extractGiven();for(let _0x24dfe3=0x0;_0x24dfe3<givenTexts['length'];_0x24dfe3++){let _0x487f51=document[_0x1a1eea(0x103)](_0x1a1eea(0x10b));_0x487f51[_0x1a1eea(0xe9)](_0x1a1eea(0xdd),'p-1'),_0x487f51[_0x1a1eea(0xc8)](givenTexts[_0x24dfe3]+'\x20'),items[_0x1a1eea(0xe7)](_0x487f51),follow[_0x1a1eea(0xc8)](items[_0x24dfe3]);}}function removeTexts(_0xde057a){const _0x1be213=_0x32e106;while(_0xde057a[_0x1be213(0xf0)])_0xde057a[_0x1be213(0xd0)](_0xde057a[_0x1be213(0xf0)]);givenTexts[_0x1be213(0xf6)](0x0,givenTexts[_0x1be213(0xee)]),items[_0x1be213(0xf6)](0x0,items[_0x1be213(0xee)]),reset();}function difficultyToggle(){const _0x4178f7=_0x32e106;toggle++;toggle==0x0&&(removeTexts(follow),difficulty[_0x4178f7(0xf2)]='Easy',difficulty['setAttribute'](_0x4178f7(0xdd),_0x4178f7(0x100)),text=_0x4178f7(0xd4),generateTexts());toggle==0x1&&(removeTexts(follow),difficulty[_0x4178f7(0xf2)]=_0x4178f7(0xdc),difficulty['setAttribute'](_0x4178f7(0xdd),_0x4178f7(0xff)),text=_0x4178f7(0xd6),generateTexts());toggle==0x2&&(removeTexts(follow),difficulty[_0x4178f7(0xf2)]=_0x4178f7(0xd2),difficulty[_0x4178f7(0xe9)](_0x4178f7(0xdd),_0x4178f7(0xe2)),text=_0x4178f7(0xf8),generateTexts());if(toggle>=0x2)toggle=-0x1;}function updateWord(){const _0x4011fe=_0x32e106;let _0xae3563=txtarea['value'],_0x450703=0x0;for(let _0x10f503=0x0;_0x10f503<_0xae3563[_0x4011fe(0xee)];total_characters++,_0x10f503++);getErrors(),visualAspectOn(),characters[_0x4011fe(0xf2)]=''+(lblChars=total_characters),wordsperminute['innerText']=''+(lblWpm=texts[_0x4011fe(0xee)]-lblErrors),cError[_0x4011fe(0xf2)]=''+lblErrors,accuracy[_0x4011fe(0xf2)]=''+(lblAccuracy=((texts[_0x4011fe(0xee)]-lblErrors)/texts[_0x4011fe(0xee)]*0x64)['toFixed'](0x2)),total_characters=0x0,lblErrors=0x0,texts[_0x4011fe(0xf6)](0x0,texts[_0x4011fe(0xee)]),givenTexts[_0x4011fe(0xf6)](0x0,givenTexts[_0x4011fe(0xee)]);}function visualAspectOn(){const _0x3cb1e0=_0x32e106;if(texts[texts[_0x3cb1e0(0xee)]]==givenTexts[givenTexts[_0x3cb1e0(0xee)]])items[texts[_0x3cb1e0(0xee)]-0x1][_0x3cb1e0(0xe9)](_0x3cb1e0(0xdd),_0x3cb1e0(0xfa));for(let _0x755a66=0x0;_0x755a66<texts[_0x3cb1e0(0xee)]-0x1;_0x755a66++){texts[_0x755a66]==givenTexts[_0x755a66]?items[_0x755a66]['setAttribute']('class','text-success\x20p-1'):items[_0x755a66][_0x3cb1e0(0xe9)](_0x3cb1e0(0xdd),'text-danger\x20p-1');}for(let _0x59ecec=items[_0x3cb1e0(0xee)];_0x59ecec>=texts[_0x3cb1e0(0xee)];_0x59ecec--){if(items[_0x59ecec]!=texts[_0x59ecec])items[_0x59ecec]['setAttribute'](_0x3cb1e0(0xdd),'p-1');}}function visualAspectOff(){const _0x5ecc45=_0x32e106;for(let _0x5c579c=0x0;_0x5c579c<items[_0x5ecc45(0xee)];items[_0x5c579c][_0x5ecc45(0xe9)]('class',_0x5ecc45(0x108)),_0x5c579c++);}function _0x22dc(_0x338e22,_0x3f5c7f){const _0x5abb6e=_0x5abb();return _0x22dc=function(_0x22dc33,_0x5643f9){_0x22dc33=_0x22dc33-0xc8;let _0x4eef19=_0x5abb6e[_0x22dc33];return _0x4eef19;},_0x22dc(_0x338e22,_0x3f5c7f);}function getErrors(){extractTextArea(),extractGiven();for(let _0x59d189=0x0;_0x59d189<texts['length'];_0x59d189++){if(texts[_0x59d189]!=givenTexts[_0x59d189])lblErrors++;}}function extractTextArea(){const _0x360f54=_0x32e106;let _0x1255a8=$(txtarea)[_0x360f54(0xea)]()['split'](/\s/);for(let _0x10457b=0x0;_0x10457b<_0x1255a8[_0x360f54(0xee)];_0x10457b++){if(/\S/['test'](_0x1255a8[_0x10457b]))texts[_0x360f54(0xe7)](_0x1255a8[_0x10457b]['trim']());}}function extractGiven(){const _0x3cec21=_0x32e106;let _0x2d7094=text[_0x3cec21(0x10d)](/\s/);for(let _0x120089=0x0;_0x120089<_0x2d7094['length'];_0x120089++){if(/\S/[_0x3cec21(0x101)](_0x2d7094[_0x120089]))givenTexts['push'](_0x2d7094[_0x120089][_0x3cec21(0x105)]());}}function timer(){const _0x421c2a=_0x32e106;time==0x0&&(clearInterval(counter_start),txtarea['disabled']=!![],updateWord());if(time<0x6)lblTime[_0x421c2a(0xe9)](_0x421c2a(0xdd),_0x421c2a(0xd1));lblTime['innerText']=time--+'s';}function start(){const _0x894954=_0x32e106;counter_start=setInterval(timer,0x3e8),txtarea[_0x894954(0xec)]=![],txtarea[_0x894954(0xcd)](),txtarea[_0x894954(0xd5)](),startBtn[_0x894954(0xe9)](_0x894954(0xdd),_0x894954(0x109)),startBtn[_0x894954(0xf2)]=_0x894954(0x102),startBtn['setAttribute'](_0x894954(0x106),_0x894954(0xf4));}function _0x5abb(){const _0x2ae62d=['4492408lGAqhd','removeChild','fw-bold\x20h6\x20text-danger','Hard','7785729YycydP','lie\x20grasp\x20fine\x20write\x20close\x20teach\x20tuck\x20sum\x20fire\x20feed\x20live\x20cheer\x20deal\x20sign\x20mount\x20sort\x20cry\x20kill\x20crush\x20trust\x20love\x20cheer\x20fit\x20shut\x20grant\x20seem\x20bang\x20hurt\x20enter\x20keep\x20shoot\x20suit\x20need\x20state\x20shout\x20show\x20round\x20dip\x20imply\x20snap\x20pin\x20kiss\x20turn\x20urge\x20flee\x20crack\x20peer\x20take\x20shine\x20allow\x20show\x20slip\x20clean\x20lead\x20rush\x20curl\x20term\x20call\x20vote\x20limit\x20break\x20play\x20clear\x20plant\x20sense\x20grip\x20claim\x20born\x20abuse\x20sound\x20wipe\x20creep\x20give\x20ship\x20throw\x20enjoy\x20meet\x20lack\x20go\x20ease\x20ship\x20drag\x20drink\x20equip\x20cater\x20peer\x20scan\x20hunt\x20treat\x20fall\x20fire\x20knock\x20use\x20tend\x20move\x20label\x20weigh\x20point\x20bend\x20build\x20laugh\x20buy\x20marry\x20fetch\x20halt\x20knock\x20get\x20tip\x20fade\x20guard\x20fail\x20sigh\x20cater\x20bid\x20name\x20greet\x20spot\x20spell\x20teach\x20suit\x20last\x20free\x20crush\x20dream\x20know\x20save\x20end\x20spoil\x20state\x20part\x20seal\x20base\x20drain\x20tap\x20solve\x20hire\x20guard\x20crack\x20count\x20deny\x20laugh\x20smash\x20merge\x20nod\x20do\x20be\x20teach\x20sing\x20issue\x20pull\x20adapt\x20dump\x20watch\x20vary\x20tuck\x20eat\x20fail\x20thank\x20breed\x20play\x20enter\x20raise\x20own\x20fill\x20slam\x20flee\x20strip\x20try\x20abuse\x20block','select','Once,\x20there\x20was\x20an\x20old\x20man\x20who\x20had\x20four\x20sons.\x20All\x20four\x20of\x20them\x20were\x20very\x20lazy.\x20One\x20day,\x20the\x20old\x20man\x20fell\x20sick\x20and\x20was\x20counting\x20his\x20last\x20days\x20in\x20bed.\x20He\x20worried\x20a\x20lot\x20about\x20his\x20sons\x27\x20future\x20as\x20the\x20young\x20men\x20hesitated\x20a\x20lot\x20to\x20work.\x20The\x20sons\x20believed\x20that\x20luck\x20would\x20favour\x20them.\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20The\x20old\x20man\x27s\x20health\x20deteriorated\x20every\x20day\x20and\x20he\x20decided\x20to\x20talk\x20to\x20his\x20sons\x20about\x20their\x20future.\x20However,\x20his\x20sons\x20did\x20not\x20listen\x20to\x20him.\x20Finally,\x20the\x20old\x20man\x20decided\x20to\x20play\x20a\x20trick\x20to\x20let\x20his\x20sons\x20realize\x20the\x20importance\x20of\x20work.\x20He\x20called\x20all\x20his\x20sons\x20and\x20let\x20them\x20sit\x20near\x20him\x20on\x20his\x20bed.\x20He\x20said\x20that\x20he\x20had\x20a\x20treasure\x20box\x20with\x20gold\x20coins\x20and\x20expensive\x20gems\x20for\x20them\x20and\x20wanted\x20to\x20share\x20the\x20treasure\x20equally\x20among\x20the\x20four\x20of\x20them.','Click\x20to\x20Start','blur','#wpm','#time','Escape','Medium','class','#txtarea','#cErrors','10rWDacF','altKey','fw-bold\x20link-danger','keyup','style','#characters','#difficulty','push','Enter','setAttribute','val','toFixed','disabled','#follow','length','#start','firstChild','2179140dahODZ','innerText','2933888NTqsEv','reset()','4176450UpyLmc','splice','cursor','Most\x20programming\x20languages\x20support\x20Linux\x20either\x20directly\x20or\x20through\x20third-party\x20community\x20based\x20ports.\x20The\x20original\x20development\x20tools\x20used\x20for\x20building\x20both\x20Linux\x20applications\x20and\x20operating\x20system\x20programs\x20are\x20found\x20within\x20the\x20GNU\x20toolchain,\x20which\x20includes\x20the\x20GNU\x20Compiler\x20Collection\x20(GCC)\x20and\x20the\x20GNU\x20Build\x20System.\x20Amongst\x20others,\x20GCC\x20provides\x20compilers\x20for\x20Ada,\x20C,\x20C++,\x20Go\x20and\x20Fortran.\x20Many\x20programming\x20languages\x20have\x20a\x20cross-platform\x20reference\x20implementation\x20that\x20supports\x20Linux,\x20for\x20example\x20PHP,\x20Perl,\x20Ruby,\x20Python,\x20Java,\x20Go,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20Rust\x20and\x20Haskell.\x20First\x20released\x20in\x202003,\x20the\x20LLVM\x20project\x20provides\x20an\x20alternative\x20cross-platform\x20open-source\x20compiler\x20for\x20many\x20languages.\x20Proprietary\x20compilers\x20for\x20Linux\x20include\x20the\x20Intel\x20C++\x20Compiler,\x20Sun\x20Studio,\x20and\x20IBM\x20XL\x20C/C++\x20Compiler.\x20BASIC\x20in\x20the\x20form\x20of\x20Visual\x20Basic\x20is\x20supported\x20in\x20such\x20forms\x20as\x20Gambas,\x20FreeBASIC,\x20and\x20XBasic,\x20and\x20in\x20terms\x20of\x20terminal\x20programming\x20or\x20QuickBASIC\x20or\x20Turbo\x20BASIC\x20programming\x20in\x20the\x20form\x20of\x20QB64.\x20Most\x20distributions\x20also\x20include\x20support\x20for\x20PHP,\x20Perl,\x20Ruby,\x20Python\x20and\x20other\x20dynamic\x20languages.\x20While\x20not\x20as\x20common,\x20Linux\x20also\x20supports\x20C#\x20(via\x20Mono),\x20Vala,\x20and\x20Scheme.','click','bg-dark\x20text-light\x20rounded-3\x20p-1','#accuracy','key','toLowerCase','5HeiYui','fw-bold\x20link-warning','fw-bold\x20link-success','test','Click\x20to\x20Reset','createElement','939212UQgOkX','trim','onclick','addEventListener','p-1','col-2\x20text-center\x20h6\x20fw-bold\x20link-danger','pointer','span','col-2\x20text-center\x20h6\x20fw-bold\x20link-warning','split','7743538jgKOus','append','2pGYyOT','ctrlKey','querySelector','fw-bold\x20h6\x20dark-mode-color-1','focus','14AxsFlD'];_0x5abb=function(){return _0x2ae62d;};return _0x5abb();}function reset(){const _0x5c8916=_0x32e106;startBtn[_0x5c8916(0xe9)]('class',_0x5c8916(0x10c)),startBtn[_0x5c8916(0xf2)]=_0x5c8916(0xd7),startBtn['setAttribute'](_0x5c8916(0x106),'start()'),txtarea['value']='',txtarea[_0x5c8916(0xec)]=!![],visualAspectOff(),time=0x3c,lblTime[_0x5c8916(0xe9)](_0x5c8916(0xdd),_0x5c8916(0xcc)),characters[_0x5c8916(0xf2)]=''+(total_characters=0x0),wordsperminute['innerText']=''+(lblWpm=0x0),lblTime[_0x5c8916(0xf2)]=(time=0x3c)+'s',accuracy['innerText']=''+(lblAccuracy=0x64[_0x5c8916(0xeb)](0x2)),cError[_0x5c8916(0xf2)]=''+(lblErrors=0x0),lblTime['setAttribute'](_0x5c8916(0xdd),_0x5c8916(0xcc)),clearInterval(counter_start);}txtarea[_0x32e106(0x107)]('keydown',_0x2fd3d7=>{const _0x574520=_0x32e106;if(_0x2fd3d7['key']===_0x574520(0xdb))txtarea[_0x574520(0xd8)]();if(_0x2fd3d7[_0x574520(0xfc)]===_0x574520(0xe8))_0x2fd3d7['preventDefault']();updateWord();}),document[_0x32e106(0x107)](_0x32e106(0xe3),_0x5d03af=>{const _0x4bdb86=_0x32e106;if(_0x5d03af[_0x4bdb86(0xca)]&&_0x5d03af['altKey']&&_0x5d03af[_0x4bdb86(0xfc)][_0x4bdb86(0xfd)]()=='s')startBtn[_0x4bdb86(0xf9)]();if(_0x5d03af[_0x4bdb86(0xca)]&&_0x5d03af[_0x4bdb86(0xe1)]&&_0x5d03af[_0x4bdb86(0xfc)][_0x4bdb86(0xfd)]()=='m')difficultyToggle();});
