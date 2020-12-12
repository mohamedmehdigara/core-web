import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import IsArray from "@mrhenry/core-web/helpers/_ESAbstract.IsArray";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import ArraySpeciesCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArraySpeciesCreate";
import ArrayCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArrayCreate";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import IsConstructor from "@mrhenry/core-web/helpers/_ESAbstract.IsConstructor";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import Construct from "@mrhenry/core-web/helpers/_ESAbstract.Construct";
import OrdinaryCreateFromConstructor from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "@mrhenry/core-web/helpers/_ESAbstract.GetPrototypeFromConstructor";
import HasOwnProperty from "@mrhenry/core-web/helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "@mrhenry/core-web/helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.ToPrimitive";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import OrdinaryToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "@mrhenry/core-web/helpers/_ESAbstract.ToString";
import HasProperty from "@mrhenry/core-web/helpers/_ESAbstract.HasProperty";
import ToBoolean from "@mrhenry/core-web/helpers/_ESAbstract.ToBoolean";
import CreateDataPropertyOrThrow from "@mrhenry/core-web/helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateDataProperty";
import CreateIterResultObject from "@mrhenry/core-web/helpers/_ESAbstract.CreateIterResultObject";
import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import SameValueZero from "@mrhenry/core-web/helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
import IteratorClose from "@mrhenry/core-web/helpers/_ESAbstract.IteratorClose";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";
import SameValue from "@mrhenry/core-web/helpers/_ESAbstract.SameValue";
(function(undefined) {
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("chr").length
)) {
// Intl.DisplayNames.~locale.chr
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"ᎠᏩᎳ","ab":"ᎠᏆᏏᎠᏂ","ace":"ᎠᏥᏂᏏ","ada":"ᎠᏓᎾᎦᎺ","ady":"ᎠᏗᎨ","af":"ᎠᎬᎿᎨᏍᏛ","agq":"ᎠᎨᎹ","ain":"ᎠᏱᏄ","ak":"ᎠᎧᎾ","ale":"ᎠᎵᎤᏘ","alt":"ᏧᎦᎾᏮ ᏗᏜ ᎠᎵᏔᎢ","am":"ᎠᎹᎭᎵᎩ","an":"ᎠᏩᎪᏂᏏ","anp":"ᎠᎾᎩᎧ","ar":"ᎡᎳᏈ","ar-001":"ᎪᎯᏊ ᎢᎬᏥᎩ ᎠᏟᎶᏍᏗ ᎡᎳᏈ","arn":"ᎹᏊᏤ","arp":"ᎠᏩᏈᎰ","as":"ᎠᏌᎻᏏ","asa":"ᎠᏑ","ast":"ᎠᏍᏚᎵᎠᏂ","av":"ᎠᏩᎵᎧ","awa":"ᎠᏩᏗ","ay":"ᎠᏱᎹᎳ","az":"ᎠᏎᏆᏣᏂ","ba":"ᏆᏍᎯᎩᎠ","ban":"ᏆᎵᏁᏏ","bas":"ᏆᏌᎠ","be":"ᏇᎳᎷᏏ","bem":"ᏇᎹᏆ","bez":"ᏇᎾ","bg":"ᏊᎵᎨᎵᎠᏂ","bho":"ᏉᏣᏊᎵ","bi":"ᏈᏍᎳᎹ","bin":"ᏈᏂ","bla":"ᏏᎩᏏᎧ","bm":"ᏆᎻᏆᎳ","bn":"ᏇᏂᎦᎳ","bo":"ᏘᏇᏔᏂ","br":"ᏇᏙᏂ","brx":"ᏉᏙ","bs":"ᏆᏍᏂᎠᏂ","bug":"ᏈᎥᎩᏂᏍ","byn":"ᏟᏂ","ca":"ᎨᏔᎳᏂ","cay":"ᎧᏳᎦ","ccp":"ᏣᎧᎹ","ce":"ᏤᏤᏂ","ceb":"ᏎᏆᏃ","cgg":"ᏥᎦ","ch":"ᏣᎼᎶ","chk":"ᏧᎨᏎ","chm":"ᎹᎵ","cho":"ᎠᏣᏓ","chr":"ᏣᎳᎩ","chy":"ᏣᏰᏂ","ckb":"ᎠᏰᏟ ᎫᏗᏏ","co":"ᎪᎵᏍᎢᎧᏂ","crs":"ᏎᏎᎵᏩ ᏟᏲᎵ ᎠᏂᎦᎸ","cs":"ᏤᎩ","cu":"ᏧᏂᎳᏫᏍᏗ ᏍᎳᏫᎪ","cv":"ᏧᏩᏏ","cy":"ᏪᎵᏏ","da":"ᏕᏂᏍ","dak":"ᏓᎪᏔ","dar":"ᏓᎳᏆ","dav":"ᏔᎢᏔ","de":"ᏙᎢᏥ","de-AT":"ᎠᏟᏯᏂ ᎠᏂᏓᏥ","de-CH":"ᏍᏫᏏ ᎦᎸᎳᏗ ᎠᏂᏓᏥ","dgr":"ᎩᏟ ᎤᏄᎳᏥ","dje":"ᏌᎹ","dsb":"ᎡᎳᏗ ᏐᏈᎠᏂ","dua":"ᏚᎠᎳ","dv":"ᏗᏪᎯ","dyo":"ᏦᎳ-ᏬᏱ","dz":"ᏓᏐᏅᎧ","dzg":"ᏓᏌᎦ","ebu":"ᎡᎻᏊ","ee":"ᎡᏪ","efi":"ᎡᏫᎩ","eka":"ᎨᎧᏧᎧ","el":"ᎠᏂᎪᎢ","en":"ᎩᎵᏏ","en-AU":"ᎡᎳᏗᏜ ᎩᎵᏏ","en-CA":"ᎨᎾᏓ ᎩᎵᏏ","en-GB":"ᎩᎵᏏᏲ ᎩᎵᏏ","en-US":"ᎠᎹᏰᏟ ᎩᎵᏏ","eo":"ᎡᏍᏇᎳᏂᏙ","es":"ᏍᏆᏂ","es-419":"ᏔᏘᏂ ᎠᎹᏰᏟ ᏍᏆᏂ","es-ES":"ᎠᏂᏍᏆᏂᏱ ᏍᏆᏂ","es-MX":"ᏍᏆᏂᏱ ᏍᏆᏂ","et":"ᎡᏍᏙᏂᎠᏂ","eu":"ᏆᏍᎨ","ewo":"ᎡᏬᏂᏙ","fa":"ᏇᏏᎠᏂ","fa-AF":"ᏓᎵ","ff":"ᏊᎳᏂ","fi":"ᏈᏂᏍ","fil":"ᎠᏈᎵᎩ","fj":"ᏫᏥᎠᏂ","fo":"ᏇᎶᎡᏍ","fon":"ᏠᏂ","fr":"ᎦᎸᏥ","fr-CA":"ᎨᎾᏓ ᎦᎸᏥ","fr-CH":"ᏍᏫᏏ ᎦᎸᏥ","frc":"frc","fur":"ᏞᎤᎵᎠᏂ","fy":"ᏭᏕᎵᎬ ᏗᏜ ᏟᏏᎠᏂ","ga":"ᎨᎵᎩ","gaa":"Ꭶ","gd":"ᏍᎦᏗ ᎨᎵᎩ","gez":"ᎩᏏ","gil":"ᎩᏇᏘᏏ","gl":"ᎦᎵᏏᎠᏂ","gn":"ᏆᎳᏂ","gor":"ᎪᎶᏂᏔᏃ","gsw":"ᏍᏫᏏ ᎠᏂᏓᏥ","gu":"ᎫᏣᎳᏘ","guz":"ᎫᏏ","gv":"ᎹᎾᎧᏏ","gwi":"ᏈᏥᏂ","ha":"ᎭᎤᏌ","haw":"ᎭᏩᎼ","he":"ᎠᏂᏈᎷ","hi":"ᎯᏂᏗ","hil":"ᎯᎵᎨᎾᏂ","hmn":"ᎭᎼᏂᎩ","hr":"ᎧᎶᎡᏏᏂ","hsb":"ᎦᎸᎳᏗᎨ ᏐᏈᎠᏂ","ht":"ᎮᏏᎠᏂ ᏟᏲᎵ","hu":"ᎲᏂᎦᎵᎠᏂ","hup":"ᎠᏂᎱᏆ","hy":"ᎠᎳᎻᎠᏂ","hz":"ᎮᎴᎶ","ia":"ᎠᏰᏟ ᎦᏬᏂᎯᏍᏗ","iba":"ᎢᏆᏂ","ibb":"ᎢᏈᏈᎣ","id":"ᎢᏂᏙᏂᏏᎠ","ig":"ᎢᎦᎪ","ii":"ᏏᏧᏩᏂ Ᏹ","ilo":"ᎢᎶᎪ","inh":"ᎢᏂᎫᏏ","io":"ᎢᏙ","is":"ᏧᏁᏍᏓᎸᎯᎢᎩ","it":"ᎬᏩᎵᏲᏥᎢ","iu":"ᎢᏄᎦᏘᏚ","ja":"ᏣᏩᏂᏏ","jbo":"ᎶᏣᏆᏂ","jgo":"ᎾᎪᏆ","jmc":"ᎹᏣᎺ","jv":"ᏆᏌ ᏣᏩ","ka":"ᏦᏥᎠᏂ","kab":"ᎧᏈᎴ","kac":"ᎧᏥᏂ","kaj":"ᏥᏧ","kam":"ᎧᎻᏆ","kbd":"ᎧᏆᏗᎠᏂ","kcg":"ᏔᏯᏆ","kde":"ᎹᎪᏕ","kea":"ᎧᏊᏪᏗᎠᏄ","kfo":"ᎪᎶ","kha":"ᎧᏏ","khq":"ᎪᏱᎳ ᏥᏂ","ki":"ᎩᎫᏳ","kj":"ᎫᏩᏂᎠᎹ","kk":"ᎧᏌᎧ","kkj":"ᎧᎪ","kl":"ᎧᎳᎵᏑᏘ","kln":"ᎧᎴᏂᏥᏂ","km":"ᎩᎻᎷ","kmb":"ᎩᎻᏊᏚ","kn":"ᎧᎾᏓ","ko":"ᎪᎵᎠᏂ","kok":"ᎧᏂᎧᏂ","kpe":"ᏇᎴ","kr":"ᎧᏄᎵ","krc":"ᎧᎳᏣᏱ-ᏆᎵᎧᎵ","krl":"ᎧᎴᎵᎠᏂ","kru":"ᎫᎷᎩ","ks":"ᎧᏏᎻᎵ","ksb":"ᏝᎻᏆᎸ","ksf":"ᏆᏫᎠ","ksh":"ᎪᎶᏂᎠᏂ","ku":"ᎫᏗᏏ","kum":"ᎫᎻᎧ","kv":"ᎪᎻ","kw":"ᏎᎷᎭ","ky":"ᎩᎵᏣᎢᏍ","la":"ᎳᏘᏂ","lad":"ᎳᏗᏃ","lag":"ᎳᏂᎩ","lb":"ᎸᎦᏏᎻᏋᎢᏍ","lez":"ᎴᏏᎦᏂ","lg":"ᎦᏂᏓ","li":"ᎴᎹᏊᎵᏏ","lkt":"ᎳᎪᏓ","ln":"ᎵᏂᎦᎳ","lo":"ᎳᎣ","lou":"lou","loz":"ᎶᏏ","lrc":"ᏧᏴᏢ ᏗᏜ ᎷᎵ","lt":"ᎵᏚᏩᏂᎠᏂ","lu":"ᎷᏆ-ᎧᏔᎦ","lua":"ᎷᏆ-ᎷᎷᎠ","lun":"ᎷᎾᏓ","luo":"ᎷᎣ","lus":"ᎻᏐ","luy":"ᎷᏱᎠ","lv":"ᎳᏘᏫᎠᏂ","mad":"ᎹᏚᎴᏏ","mag":"ᎹᎦᎯ","mai":"ᎹᏟᎵ","mak":"ᎹᎧᏌ","mas":"ᎹᏌᏱ","mdf":"ᎼᎧᏌ","men":"ᎺᎾᏕ","mer":"ᎺᎷ","mfe":"ᎼᎵᏏᎡᏂ","mg":"ᎹᎳᎦᏏ","mgh":"ᎹᎫᏩ-ᎻᏙ","mgo":"ᎺᎳ’","mh":"ᎹᏌᎵᏏ","mi":"ᎹᏫ","mic":"ᎻᎧᎹᎩ","min":"ᎻᎾᎧᏆᎤ","mk":"ᎹᏎᏙᏂᎠᏂ","ml":"ᎹᎳᏯᎳᎻ","mn":"ᎹᏂᎪᎵᎠᏂ","mni":"ᎺᏂᏉᎵ","moh":"ᎼᎭᎩ","mos":"ᎼᏍᏏ","mr":"ᎹᎳᏘ","ms":"ᎹᎴ","mt":"ᎹᎵᏘᏍ","mua":"ᎽᏂᏓᎩ","mul":"ᏧᏈᏍᏗ ᏗᎦᏬᏂᎯᏍᏗ","mus":"ᎠᎫᏌ","mwl":"ᎻᎳᏕᏏ","my":"ᏋᎻᏍ","myv":"ᎡᏏᏯ","mzn":"ᎹᏌᏕᎳᏂ","na":"ᏃᎤᎷ","nap":"ᏂᏯᏆᎵᏔᏂ","naq":"ᎾᎹ","nb":"ᏃᎵᏪᏥᏂ ᏉᎧᎹᎵ","nd":"ᏧᏴᏢ ᏂᏕᏇᎴ","nds":"ᎡᎳᏗ ᎠᏂᏓᏥ","nds-NL":"ᎡᎳᏗ ᏁᏛᎳᏂ","ne":"ᏁᏆᎵ","new":"ᏁᏩᎵ","ng":"ᎾᏙᎦ","nia":"ᏂᎠᏏ","niu":"ᏂᏳᏫᏯᏂ","nl":"ᏛᏥ","nl-BE":"ᏊᎵᏥᎥᎻ ᏛᏥ","nmg":"ᏆᏏᏲ","nn":"ᏃᎵᏪᏥᏂ ᎾᎵᏍᎩ","nnh":"ᎾᏥᏰᎹᏊᏂ","nog":"ᏃᎦᏱ","nqo":"ᎾᎪ","nr":"ᏧᎦᎾᏮ ᏂᏕᏇᎴ","nso":"ᏧᏴᏢ ᏗᏜ ᏐᏠ","nus":"ᏄᏪᎵ","nv":"ᎾᏩᎰ","ny":"ᏂᏯᏂᏣ","nyn":"ᏂᏯᎾᎪᎴ","oc":"ᎠᏏᏔᏂ","om":"ᎣᎶᎼ","or":"ᎣᏗᎠ","os":"ᎣᏎᏘᎧ","pa":"ᏡᏂᏣᏈ","pag":"ᏇᎦᏏᎠᏂ","pam":"ᏆᎹᏆᎾᎦ","pap":"ᏆᏈᏯᎺᎾᏙ","pau":"ᏆᎳᎤᏩᏂ","pcm":"ᎾᎩᎵᎠᏂ ᏈᏥᏂ","pl":"ᏉᎵᏍ","prg":"ᏡᏏᎠᏂ","ps":"ᏆᏍᏙ","pt":"ᏉᏧᎩᏍ","pt-BR":"ᏆᏏᎵᎢ ᏉᏧᎩᏍ","pt-PT":"ᏳᎳᏈ ᏉᏧᎩᏍ","qu":"ᎨᏧᏩ","quc":"ᎩᏤ","rap":"ᎳᏆᏄᏫ","rar":"ᎳᎶᏙᎾᎦᏂ","rm":"ᎠᏂᎶᎺᏂ","rn":"ᎷᏂᏗ","ro":"ᎶᎹᏂᎠᏂ","ro-MD":"ᎹᎵᏙᏫᎠ ᏣᎹᏂᎠᏂ","rof":"ᎶᎹᏉ","root":"ᎤᎾᏍᎦᎸ","ru":"ᏲᏅᎯ","rup":"ᎠᏬᎹᏂᎠᏂ","rw":"ᎩᏂᏯᏩᏂᏓ","rwk":"Ꮖ","sa":"ᏍᏂᏍᎩᏗ","sad":"ᏌᏅᏓᏫ","sah":"ᏌᎧᎾ","saq":"ᏌᎹᏊᎷ","sat":"ᏌᏂᏔᎵ","sba":"ᎾᎦᎹᏇ","sbp":"ᏌᏁᎫ","sc":"ᏌᏗᏂᎠᏂ","scn":"ᏏᏏᎵᎠᏂ","sco":"ᏍᎦᏗ","sd":"ᏏᏂᏗ","se":"ᏧᏴᏢ ᏗᏜ ᏌᎻ","see":"ᏏᏂᎦ","seh":"ᏎᎾ","ses":"ᎪᏱᎳᏈᎶ ᏎᏂ","sg":"ᏌᏂᎪ","shi":"ᏔᏤᎵᎯᏘ","shn":"ᏝᏂ","si":"ᏏᎾᎭᎳ","sk":"ᏍᎶᏩᎩ","sl":"ᏍᎶᏫᏂᎠᏂ","sm":"ᏌᎼᏯᏂ","sma":"ᏧᎦᎾᏮ ᏗᏜ ᏌᎻ","smj":"ᎷᎴ ᏌᎻ","smn":"ᎢᎾᎵ ᏌᎻ","sms":"ᏍᎪᎵᏘ ᏌᎻ","sn":"ᏠᎾ","snk":"ᏐᏂᏂᎨ","so":"ᏐᎹᎵ","sq":"ᎠᎵᏇᏂ","sr":"ᏒᏈᎠᏂ","srn":"ᏏᎳᎾᏂ ᏙᏃᎪ","ss":"ᏍᏩᏘ","ssy":"ᏌᎰ","st":"ᏧᎦᎾᏮ ᏗᏜ ᏐᏠ","su":"ᏑᏂᏓᏂᏏ","suk":"ᏑᎫᎹ","sv":"ᏍᏫᏗᏏ","sw":"ᏍᏩᎯᎵ","sw-CD":"ᎧᏂᎪ ᏍᏩᎯᎵ","swb":"ᎪᎼᎵᎠᏂ","syr":"ᏏᎵᎠᎩ","ta":"ᏔᎻᎵ","te":"ᏖᎷᎦ","tem":"ᏘᎹᏁ","teo":"ᏖᏐ","tet":"ᏖᏚᎼ","tg":"ᏔᏥᎩ","th":"ᏔᏱ","ti":"ᏘᎩᎵᏂᎠ","tig":"ᏢᏓᏥ","tk":"ᎠᏂᎬᎾ","tlh":"ᏟᎦᎾ","tn":"ᏧᏩᎾ","to":"ᏙᎾᎦᏂ","tpi":"ᏙᎩ ᏈᏏᏂ","tr":"ᎠᎬᎾ","trv":"ᏔᎶᎪ","ts":"ᏦᎾᎦ","tt":"ᏔᏔ","tum":"ᏛᎹᏊᎧ","tvl":"ᏚᏩᎷ","twq":"ᏔᏌᏩᎩ","ty":"ᏔᎯᏘᎠᏂ","tyv":"ᏚᏫᏂᎠᏂ","tzm":"ᎠᏰᏟ ᎡᎶᎯ ᏓᏟᎶᏍᏗᏓᏅᎢ ᏔᎹᏏᏘ","udm":"ᎤᏚᎷᏘ","ug":"ᏫᎦ","uk":"ᏳᎧᎴᏂᎠᏂ","umb":"ᎤᎹᏊᏅᏚ","und":"ᏄᏬᎵᏍᏛᎾ ᎦᏬᏂᎯᏍᏗ","ur":"ᎤᎵᏚ","uz":"ᎤᏍᏇᎩ","vai":"ᏩᏱ","ve":"ᏫᏂᏓ","vi":"ᏫᎡᏘᎾᎻᏍ","vo":"ᏬᎳᏊᎩ","vun":"ᏭᎾᏦ","wa":"ᏩᎷᎾ","wae":"ᏩᎵᏎᎵ","wal":"ᏬᎳᏱᏔ","war":"ᏩᎴ","wo":"ᏬᎶᏫ","xal":"ᎧᎳᎻᎧ","xh":"ᏠᏌ","xog":"ᏐᎦ","yav":"ᏰᎾᎦᏇᏂ","ybb":"ᏰᎹᏋ","yi":"ᏱᏗᏍ","yo":"ᏲᏄᏆ","yue":"ᎨᎾᏙᏂᏏ","zgh":"ᎠᏟᎶᏍᏗ ᎼᎶᎪ ᏔᎹᏏᏘ","zh":"ᏓᎶᏂᎨ","zh-Hans":"ᎠᎯᏗᎨ ᏓᎶᏂᎨ","zh-Hant":"ᎤᏦᏍᏗ ᏓᎶᏂᎨ","zu":"ᏑᎷ","zun":"ᏑᏂ","zxx":"Ꮭ ᎦᏬᏂᎯᏍᏗ ᎦᎸᏛᎢ ᏱᎩ","zza":"ᏌᏌ"},"short":{"az":"ᎠᏎᎵ","en-GB":"UK ᎩᎵᏏ","en-US":"US ᎩᎵᏏ"},"narrow":{}},"region":{"long":{"142":"ᏓᎶᎾᎨᏍᏛ","143":"ᎠᏰᏟ ᏓᎶᏂᎨᏍᏛ","145":"ᏭᏕᎵᎬ ᏗᏜ ᏓᎶᏂᎨᏍᏛ","150":"ᏳᎳᏛ","151":"ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏛ","154":"ᏧᏴᏢ ᏗᏜ ᏳᎳᏛ","155":"ᏭᏕᎵᎬ ᏗᏜ ᏳᎳᏛ","202":"ᎭᏫᏂ-ᏌᎭᏩ ᎬᎿᎨᏍᏛ","419":"ᎳᏘᏂ ᎠᎹᏰᏟ","001":"ᎡᎶᎯ","002":"ᎬᎿᎨᏍᏛ","003":"ᏧᏴᏢ ᎠᎹᏰᏟ","005":"ᏧᎦᏃᏮ ᎠᎺᎵᎦ","009":"ᎣᏏᏰᏂᎠ","011":"ᏭᏕᎵᎬ ᏗᏜ ᎬᎿᎨᏍᏛ","013":"ᎠᏰᏟ ᎠᎹᏰᏟ","014":"ᏗᎧᎸᎬ ᏗᏜ ᎬᎿᎨᏍᏛ","015":"ᏧᏴᏢ ᏗᏜ ᎬᎿᎨᏍᏛ","017":"ᎠᏰᏟ ᎬᎿᎨᏍᏛ","018":"ᏧᎦᎾᏮ ᏗᏜ ᎬᎿᎨᏍᏛ","019":"ᎠᎺᎵᎦᎢ","021":"ᏧᏴᏢ ᏗᏜ ᎠᎹᏰᏟ","029":"ᎨᏆᏙᏯ","030":"ᏗᎧᎸᎬ ᏗᏜ ᏓᎶᏂᎨᏍᏛ","034":"ᏧᎦᎾᏮ ᏗᏜ ᏓᎶᏂᎨᏍᏛ","035":"ᏧᎦᎾᏮ ᏗᎧᎸᎬ ᏓᎶᏂᎨᏍᏛ","039":"ᏧᎦᎾᏮ ᏗᏜ ᏳᎳᏛ","053":"ᎠᏍᏔᎴᏏᎠ","054":"ᎺᎳᏁᏏᎠ","057":"ᎠᏰᏟ ᏧᎾᎵᎪᎯ ᎾᎿ ᎹᎢᏉᏂᏏᏯ ᎢᎬᎾᏕᎾ","061":"ᏆᎵᏂᏏᎠ","AC":"ᎤᎵᏌᎳᏓᏅ ᎤᎦᏚᏛᎢ","AD":"ᎠᏂᏙᎳ","AE":"ᏌᏊ ᎢᏳᎾᎵᏍᏔᏅ ᎡᎳᏈ ᎢᎹᎵᏘᏏ","AF":"ᎠᏫᎨᏂᏍᏖᏂ","AG":"ᎤᏪᏘ & ᏆᏊᏓ","AI":"ᎠᏂᎩᎳ","AL":"ᎠᎵᏇᏂᏯ","AM":"ᎠᎵᎻᏂᎠ","AO":"ᎠᏂᎪᎳ","AQ":"ᏧᏁᏍᏓᎸ","AR":"ᎠᏥᏂᏘᏂᎠ","AS":"ᎠᎺᎵᎧ ᏌᎼᎠ","AT":"ᎠᏍᏟᏯ","AU":"ᎡᎳᏗᏜ","AW":"ᎠᎷᏆ","AX":"ᎣᎴᏅᏓ ᏚᎦᏚᏛᎢ","AZ":"ᎠᏎᏆᏣᏂ","BA":"ᏉᏏᏂᎠ & ᎲᏤᎪᏫᎾ","BB":"ᏆᏇᏙᏍ","BD":"ᏆᏂᎦᎵᏕᏍ","BE":"ᏇᎵᏥᎥᎻ","BF":"ᏋᎩᎾ ᏩᏐ","BG":"ᏊᎵᎨᎵᎠ","BH":"ᏆᎭᎴᎢᏂ","BI":"ᏋᎷᏂᏗ","BJ":"ᏆᏂᎢᏂ","BL":"ᎤᏓᏅᏘ ᏆᏕᎳᎻ","BM":"ᏆᏊᏓ","BN":"ᏊᎾᎢ","BO":"ᏉᎵᏫᎠ","BQ":"ᎧᎵᏈᎢᏂᎯ ᎾᏍᎩᏁᏛᎳᏂ","BR":"ᏆᏏᎵ","BS":"ᎾᏍᎩ ᏆᎭᎹᏍ","BT":"ᏊᏔᏂ","BV":"ᏊᏪ ᎤᎦᏚᏛᎢ","BW":"ᏆᏣᏩᎾ","BY":"ᏇᎳᎷᏍ","BZ":"ᏇᎵᏍ","CA":"ᎨᎾᏓ","CC":"ᎪᎪᏍ (ᎩᎵᏂ) ᏚᎦᏚᏛᎢ","CD":"ᎧᏂᎪ - ᎨᏂᏝᏌ","CF":"ᎬᎿᎨᏍᏛ ᎠᏰᏟ ᏍᎦᏚᎩ","CG":"ᎧᏂᎪ - ᏆᏌᏩᎵ","CH":"ᏍᏫᏍ","CI":"ᎢᏬᎵ ᎾᎿ ᎠᎹᏳᎶᏗ","CK":"ᎠᏓᏍᏓᏴᎲᏍᎩ ᏚᎦᏚᏛᎢ","CL":"ᏥᎵ","CM":"ᎧᎹᎷᏂ","CN":"ᏓᎶᏂᎨᏍᏛ","CO":"ᎪᎸᎻᏈᎢᎠ","CP":"ᎦᏂᏴᏔᏅᎣᏓᎸ ᎤᎦᏚᏛᎢ","CR":"ᎪᏍᏓ ᎵᎧ","CU":"ᎫᏆ","CV":"ᎢᎬᎾᏕᎾ ᎢᏤᏳᏍᏗ","CW":"ᎫᎳᎨᎣ","CX":"ᏓᏂᏍᏓᏲᎯᎲ ᎤᎦᏚᏛᎢ","CY":"ᏌᎢᏆᏍ","CZ":"ᏤᎩᎠ","DE":"ᎠᏂᏛᏥ","DG":"ᏗᏰᎪ ᎦᏏᏯ","DJ":"ᏥᏊᏗ","DK":"ᏗᏂᎹᎦ","DM":"ᏙᎻᏂᎧ","DO":"ᏙᎻᏂᎧᏂ ᏍᎦᏚᎩ","DZ":"ᎠᎵᏥᎵᏯ","EA":"ᏑᏔ ᎠᎴ ᎺᎵᏯ","EC":"ᎡᏆᏙᎵ","EE":"ᎡᏍᏙᏂᏯ","EG":"ᎢᏥᏈᎢ","EH":"ᏭᏕᎵᎬ ᏗᏜ ᏌᎮᎳ","ER":"ᎡᎵᏟᏯ","ES":"ᎠᏂᏍᏆᏂᏱ","ET":"ᎢᏗᎣᏈᎠ","EU":"ᏳᎳᏛ ᎠᏂᎤᎾᏓᏡᎬ","EZ":"ᏳᎶᎠᏍᏓᏅᏅ","FI":"ᏫᏂᎦᏙᎯ","FJ":"ᏫᏥ","FK":"ᏩᎩ ᏚᎦᏚᏛᎢ","FM":"ᎹᎢᏉᏂᏏᏯ","FO":"ᏪᎶ ᏚᎦᏚᏛᎢ","FR":"ᎦᎸᏥᏱ","GA":"ᎦᏉᏂ","GB":"ᎩᎵᏏᏲ","GD":"ᏋᎾᏓ","GE":"ᏣᎠᏥᎢ","GF":"ᎠᏂᎦᎸᏥ ᎩᎠ","GG":"ᎬᏂᏏ","GH":"ᎦᎠᎾ","GI":"ᏥᏆᎵᏓ","GL":"ᎢᏤᏍᏛᏱ","GM":"ᎦᎹᏈᎢᎠ","GN":"ᎩᎢᏂ","GP":"ᏩᏓᎷᏇ","GQ":"ᎡᏆᏙᎵᎠᎵ ᎩᎢᏂ","GR":"ᎪᎢᎯ","GS":"ᏧᎦᏃᏮ ᏣᎠᏥᎢ ᎠᎴ ᎾᏍᎩ ᏧᎦᏃᏮ ᎠᏍᏛᎭᏟ ᏚᎦᏚᏛᎢ","GT":"ᏩᏔᎹᎳ","GU":"ᏆᎻ","GW":"ᎩᎢᏂ-ᏈᏌᎤᏫ","GY":"ᎦᏯᎾ","HK":"ᎰᏂᎩ ᎪᏂᎩ ᎤᏓᏤᎵᏓ ᏧᏂᎸᏫᏍᏓᏁᏗ ᎢᎬᎾᏕᎾ ᏓᎶᏂᎨᏍᏛ","HM":"ᎲᏗ ᎤᎦᏚᏛᎢ ᎠᎴ ᎺᎩᏓᎾᎵᏗ ᏚᎦᏚᏛᎢ","HN":"ᎭᏂᏚᎳᏍ","HR":"ᎧᎶᎡᏏᎠ","HT":"ᎮᎢᏘ","HU":"ᎲᏂᎦᎵ","IC":"ᏥᏍᏆ ᏚᎦᏚᏛᎢ","ID":"ᎢᏂᏙᏂᏍᏯ","IE":"ᎠᏲᎳᏂ","IL":"ᎢᏏᎵᏱ","IM":"ᎤᏍᏗ ᎤᎦᏚᏛᎢ ᎾᎿ ᎠᏍᎦᏯ","IN":"ᎢᏅᏗᎾ","IO":"ᏈᏗᏏ ᏴᏫᏯ ᎠᎺᏉ ᎢᎬᎾᏕᏅ","IQ":"ᎢᎳᎩ","IR":"ᎢᎴᏂ","IS":"ᏧᏁᏍᏓᎸᎯ","IT":"ᎢᏔᎵ","JE":"ᏨᎵᏏ","JM":"ᏣᎺᎢᎧ","JO":"ᏦᏓᏂ","JP":"ᏣᏩᏂᏏ","KE":"ᎨᏂᏯ","KG":"ᎩᎵᏣᎢᏍ","KH":"ᎧᎹᏉᏗᎠᏂ","KI":"ᎧᎵᏆᏘ","KM":"ᎪᎼᎳᏍ","KN":"ᎤᏓᏅᏘ ᎨᏘᏏ ᎠᎴ ᏁᏪᏏ","KP":"ᏧᏴᏢ ᎪᎵᎠ","KR":"ᏧᎦᏃᏮ ᎪᎵᎠ","KW":"ᎫᏪᎢᏘ","KY":"ᎨᎢᎹᏂ ᏚᎦᏚᏛᎢ","KZ":"ᎧᏎᎧᏍᏕᏂ","LA":"ᎴᎣᏍ","LB":"ᎴᏆᎾᏂ","LC":"ᎤᏓᏅᏘ ᎷᏏᏯ","LI":"ᎵᎦᏗᏂᏍᏓᏂ","LK":"ᏍᎵ ᎳᏂᎧ","LR":"ᎳᏈᎵᏯ","LS":"ᎴᏐᏙ","LT":"ᎵᏗᏪᏂᎠ","LU":"ᎸᎧᏎᏋᎩ","LV":"ᎳᏘᏫᎠ","LY":"ᎵᏈᏯ","MA":"ᎼᎶᎪ","MC":"ᎹᎾᎪ","MD":"ᎹᎵᏙᏫᎠ","ME":"ᎼᏂᏔᏁᎦᎶ","MF":"ᎤᏓᏅᏘ ᏡᏡ","MG":"ᎹᏓᎦᏍᎧᎵ","MH":"ᎹᏌᎵ ᏚᎦᏚᏛᎢ","MK":"ᏧᏴᏜ ᎹᏎᏙᏂᏯ","ML":"ᎹᎵ","MM":"ᎹᏯᎹᎵ (ᏇᎵᎹ)","MN":"ᎹᏂᎪᎵᎠ","MO":"ᎹᎧᎣ (ᎤᏓᏤᎵᏓ ᏧᏂᎸᏫᏍᏓᏁᏗ ᎢᎬᎾᏕᎾ) ᏣᎢ","MP":"ᏧᏴᏢ ᏗᏜ ᎹᎵᎠᎾ ᏚᎦᏚᏛᎢ","MQ":"ᎹᏘᏂᎨ","MR":"ᎹᏘᎢᏯ","MS":"ᎹᏂᏘᏌᎳᏗ","MT":"ᎹᎵᏔ","MU":"ᎼᎵᏏᎥᏍ","MV":"ᎹᎵᏗᏫᏍ","MW":"ᎹᎳᏫ","MX":"ᎠᏂᏍᏆᏂ","MY":"ᎹᎴᏏᎢᎠ","MZ":"ᎼᏎᎻᏇᎩ","NA":"ᎾᎻᏈᎢᏯ","NC":"ᎢᏤ ᎧᎵᏙᏂᎠᏂ","NE":"ᎾᎢᏨ","NF":"ᏃᎵᏬᎵᎩ ᎤᎦᏚᏛᎢ","NG":"ᏂᏥᎵᏯ","NI":"ᏂᎧᎳᏆ","NL":"ᏁᏛᎳᏂ","NO":"ᏃᏪ","NP":"ᏁᏆᎵ","NR":"ᏃᎤᎷ","NU":"ᏂᏳ","NZ":"ᎢᏤ ᏏᎢᎴᏂᏗ","OM":"ᎣᎺᏂ","PA":"ᏆᎾᎹ","PE":"ᏇᎷ","PF":"ᎠᏂᎦᎸᏥ ᏆᎵᏂᏏᎠ","PG":"ᏆᏇ ᎢᏤ ᎩᎢᏂ","PH":"ᎠᏂᏈᎵᎩᏃ","PK":"ᏆᎩᏍᏖᏂ","PL":"ᏉᎳᏂ","PM":"ᎤᏓᏅᏘ ᏈᏰ ᎠᎴ ᎻᏇᎶᏂ","PN":"ᏈᎧᎵᏂ ᏚᎦᏚᏛᎢ","PR":"ᏇᎡᏙ ᎵᎢᎪ","PS":"ᏆᎴᏍᏗᏂᎠᏂ ᏄᎬᏫᏳᏌᏕᎩ","PT":"ᏉᏥᎦᎳ","PW":"ᏆᎴᎠᏫ","PY":"ᏆᎳᏇᎢᏯ","QA":"ᎧᏔᎵ","QO":"ᎠᏍᏛ ᎣᏏᏰᏂᎠ","RE":"ᎴᏳᏂᎠᏂ","RO":"ᎶᎹᏂᏯ","RS":"ᏒᏈᏯ","RU":"ᏲᏂᎢ","RW":"ᎶᏩᏂᏓ","SA":"ᏌᎤᏗ ᎡᎴᏈᎠ","SB":"ᏐᎶᎹᏂ ᏚᎦᏚᏛᎢ","SC":"ᏏᎡᏥᎵᏍ","SD":"ᏑᏕᏂ","SE":"ᏍᏫᏕᏂ","SG":"ᏏᏂᎦᏉᎵ","SH":"ᎤᏓᏅᏘ ᎮᎵᎾ","SI":"ᏍᎶᏫᏂᎠ","SJ":"ᏍᏩᎵᏆᎵᏗ ᎠᎴ ᏤᏂ ᎹᏰᏂ","SK":"ᏍᎶᏩᎩᎠ","SL":"ᏏᎡᎳ ᎴᎣᏂ","SM":"ᎤᏓᏅᏘ ᎹᎵᎢᏃ","SN":"ᏏᏂᎦᎵ","SO":"ᏐᎹᎵ","SR":"ᏒᎵᎾᎻ","SS":"ᏧᎦᎾᏮ ᏑᏕᏂ","ST":"ᏌᎣ ᏙᎺ ᎠᎴ ᏈᏂᏏᏇ","SV":"ᎡᎵᏌᎵᏆᏙᎵ","SX":"ᏏᏂᏘ ᎹᏘᏂ","SY":"ᏏᎵᎠ","SZ":"ᎡᏍᏩᏘᏂ","TA":"ᏟᏍᏛᏂ Ꮣ ᎫᎾᎭ","TC":"ᎠᏂᏛᎵᎩ ᎠᎴ ᎨᎢᎪ ᏚᎦᏚᏛᎢ","TD":"ᏣᏗ","TF":"ᎠᏂᎦᎸᏥ ᏧᎦᎾᏮ ᎦᏙᎯ ᎤᎵᏍᏛᎢ","TG":"ᏙᎪ","TH":"ᏔᏯᎴᏂ","TJ":"ᏔᏥᎩᏍᏕᏂ","TK":"ᏙᎨᎳᏭ","TL":"ᏘᎼᎵ-ᎴᏍᏖ","TM":"ᏛᎵᎩᎺᏂᏍᏔᏂ","TN":"ᏚᏂᏏᏍᎠ","TO":"ᏙᎾᎦ","TR":"ᎬᏃ","TT":"ᏟᏂᏕᏗ ᎠᎴ ᏙᏆᎪ","TV":"ᏚᏩᎷ","TW":"ᏔᎢᏩᏂ","TZ":"ᏖᏂᏏᏂᏯ","UA":"ᏳᎧᎴᏂ","UG":"ᏳᎦᏂᏓ","UM":"U.S. ᎠᏍᏛ ᏚᎦᏚᏛᎢ","UN":"ᏌᏊ ᎢᏳᎾᎵᏍᏔᏅ ᎠᏰᎵ ᏚᎾᏙᏢᏒ","US":"ᏌᏊ ᎢᏳᎾᎵᏍᏔᏅ ᏍᎦᏚᎩ","UY":"ᏳᎷᏇ","UZ":"ᎤᏍᏇᎩᏍᏖᏂ","VA":"ᎠᏥᎳᏁᏠ ᎦᏚᎲ","VC":"ᎤᏓᏅᏘ ᏫᏂᏏᏂᏗ ᎠᎴ ᎾᏍᎩ ᏇᎾᏗᏁᏍ","VE":"ᏪᏁᏑᏪᎳ","VG":"ᏈᏗᏍ ᎠᏒᏂᎸ ᏂᎨᏒᎾ ᏚᎦᏚᏛᎢ","VI":"U.S. ᎠᏒᏂᎸ ᏂᎨᏒᎾ ᏚᎦᏚᏛᎢ","VN":"ᏫᎡᏘᎾᎻ","VU":"ᏩᏂᎤᏩᏚ","WF":"ᏩᎵᏍ ᎠᎴ ᏊᏚᎾ","WS":"ᏌᎼᎠ","XA":"ᏡᏙ-ᏄᏍᏛᎢᎥᎧᏁᎬᎢ","XB":"ᏡᏙ-ᏈᏗ","XK":"ᎪᏐᏉ","YE":"ᏰᎺᏂ","YT":"ᎺᏯᏖ","ZA":"ᏧᎦᎾᏮ ᎬᎿᎨᏍᏛ","ZM":"ᏌᎻᏈᏯ","ZW":"ᏏᎻᏆᏇ","ZZ":"ᏄᏬᎵᏍᏛᎾ ᎤᏔᏂᏗᎦᏙᎯ"},"short":{"GB":"UK","HK":"ᎰᏂᎩ ᎪᏂᎩ","MO":"ᎹᎧᎣ","PS":"ᏆᎴᏍᏗᏂ","US":"US"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"ᎡᎳᏈᎩ","Aran":"Aran","Armi":"Armi","Armn":"ᎠᎳᎻᎠᏂ","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"ᏇᏂᎦᎠ","Bhks":"Bhks","Bopo":"ᏆᏉᎼᏬ","Brah":"Brah","Brai":"ᏗᏂᎨᏫ ᎤᏃᏪᎶᏙᏗ","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"ᏣᎳᎩ","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"ᏲᏂᎢ ᏗᎪᏪᎵ","Deva":"ᏕᏫᎾᎦᎵ","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"ᎢᏗᏯᏈᎩ","Geor":"ᏦᏥᎠᏂ","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"ᎪᎢ","Gujr":"ᎫᏣᎳᏘ","Guru":"ᎬᎹᎩ","Hanb":"ᎭᏂ ᎾᎿ ᏆᏉᎼᏬ","Hang":"ᎭᏂᎫᎵ","Hani":"ᎭᏂ","Hano":"Hano","Hans":"ᎠᎯᏗᎨ","Hant":"ᎤᏦᏍᏗ","Hatr":"Hatr","Hebr":"ᎠᏂᏈᎵ","Hira":"ᎯᎳᎦᎾ","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"ᏣᏩᏂᏏ ᏧᏃᏴᎩ","Hung":"Hung","Ital":"Ital","Jamo":"ᏣᎼ","Java":"Java","Jpan":"ᏣᏆᏂᏏ","Kali":"Kali","Kana":"ᎧᏔᎧᎾ","Khar":"Khar","Khmr":"ᎩᎻᎷ","Khoj":"Khoj","Kits":"Kits","Knda":"ᎧᎾᏓ","Kore":"ᎪᎵᎠᏂ","Kthi":"Kthi","Lana":"Lana","Laoo":"ᎳᎣ","Latn":"ᎳᏘᏂ","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"ᎹᎳᏯᎳᎻ","Modi":"Modi","Mong":"ᎹᏂᎪᎵᎠᏂ","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"ᎹᎡᏂᎹᎳ","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"ᎣᏗᎠ","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"ᏏᏅᎭᎳ","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"ᏔᎻᎵ","Tang":"Tang","Tavt":"Tavt","Telu":"ᏖᎷᎦ","Tfng":"Tfng","Tglg":"Tglg","Thaa":"ᏔᎠᎾ","Thai":"ᏔᏱ ᏔᏯᎴᏂ","Tibt":"ᏘᏇᏔᏂ","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"ᎠᏰᎦᎴᏴᏫᏍᎩ ᎠᎤᏓᏗᏍᏙᏗ","Zsye":"ᎡᎼᏥ","Zsym":"ᏗᎬᏟᎶᏍᏙᏗ","Zxxx":"ᎪᏪᎳᏅ ᏂᎨᏒᎾ","Zyyy":"ᏯᏃᏉ ᏱᎬᏍᏛᏭ","Zzzz":"ᏄᏬᎵᏍᏛᎾ ᎠᏍᏓᏩᏛᏍᏙᏗ"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"ᏌᏊ ᎢᏳᎾᎵᏍᏔᏅ ᎡᎳᏈ ᎢᎹᎵᏘᏏ ᎠᏕᎳ","AFA":"AFA","AFN":"ᎠᏫᎨᏂᏍᏖᏂ ᎠᏕᎳ","ALK":"ALK","ALL":"ᎠᎵᏇᏂᏯ ᎠᏕᎳ","AMD":"ᎠᎵᎻᏂᎠ ᎠᏕᎳ","ANG":"ᎾᏍᎩᏁᏛᎳᏂ ᎠᏂᏘᎵᏏ ᎠᏕᎳ","AOA":"ᎠᏂᎪᎳ ᎠᏕᎳ","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ᎠᏥᏂᏘᏂᎠ ᎠᏕᎳ","ATS":"ATS","AUD":"ᎡᎳᏗᏜ ᎠᏕᎳ","AWG":"ᎠᎷᏆ ᎠᏕᎳ","AZM":"AZM","AZN":"ᎠᏏᎵᏆᏌᏂ ᎠᏕᎳ","BAD":"BAD","BAM":"ᏉᏏᏂᎠ-ᎲᏤᎪᏫ ᎦᏁᏟᏴᏍᏔᏅ ᎠᏕᎳ","BAN":"BAN","BBD":"ᏆᏇᏙᏍ ᎠᏕᎳ","BDT":"ᏆᏂᎦᎵᏕᏍ ᎠᏕᎳ","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"ᏊᎵᎨᎵᎠ ᎠᏕᎳ","BGO":"BGO","BHD":"ᏆᎭᎴᎢᏂ ᎠᏕᎳ","BIF":"ᏋᎷᏂᏗ ᎠᏕᎳ","BMD":"ᏆᏊᏓ ᎠᏕᎳ","BND":"ᏊᎾᎢ ᎠᏕᎳ","BOB":"ᏉᎵᏫᎠ ᎠᏕᎳ","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"ᏆᏏᎵᎢ ᎠᏕᎳ","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"ᏆᎭᎹ ᎠᏕᎳ","BTN":"ᏊᏔᏂ ᎠᏕᎳ","BUK":"BUK","BWP":"ᏆᏣᏩᎾ ᎠᏕᎳ","BYB":"BYB","BYN":"ᏇᎳᎷᏍ ᎠᏕᎳ","BYR":"ᏇᎳᎷᏍ ᎠᏕᎳ (2000–2016)","BZD":"ᏇᎵᏍ ᎠᏕᎳ","CAD":"ᎨᎾᏓ ᎠᏕᎳ","CDF":"ᎧᏂᎪ ᎠᏕᎳ","CHE":"CHE","CHF":"ᏍᏫᏏ ᎠᏕᎳ","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"ᏥᎵ ᎠᏕᎳ","CNH":"ᏣᏂᏏ ᎠᏕᎳ (ᏓᎹᏳᏟᏗ)","CNX":"CNX","CNY":"ᏓᎶᏂᎨ ᎠᏕᎳ","COP":"ᎪᎸᎻᏈᎢᎠ ᎠᏕᎳ","COU":"COU","CRC":"ᎪᏍᏓᎵᎧ ᎠᏕᎳ","CSD":"CSD","CSK":"CSK","CUC":"ᎫᏆ ᎦᏁᏟᏴᏍᏔᏅ ᎠᏕᎳ","CUP":"ᎫᏆ ᎠᏕᎳ","CVE":"ᎢᎬᎾᏕᎾ ᎢᏤᏳᏍᏗ ᎠᏕᎳ","CYP":"CYP","CZK":"ᏤᎩ ᎠᏕᎳ","DDM":"DDM","DEM":"DEM","DJF":"ᏥᏊᏗ ᎠᏕᎳ","DKK":"ᏕᏂᏍ ᎠᏕᎳ","DOP":"ᏙᎻᏂᎧᏂ ᎠᏕᎳ","DZD":"ᎠᎵᏥᎵᏯ ᎠᏕᎳ","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"ᎢᏥᏈᎢ ᎠᏕᎳ","ERN":"ᎡᎵᏟᏯ ᎠᏕᎳ","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"ᎢᏗᎣᏈᎠ ᎠᏕᎳ","EUR":"ᏳᎳᏛ ᎠᏕᎳ","FIM":"FIM","FJD":"ᏫᎩ ᎠᏕᎳ","FKP":"ᏩᎩᎤ ᏚᎦᏚᏛᎢ ᎠᏕᎳ","FRF":"FRF","GBP":"ᎩᎵᏏᏲ ᎠᏕᎳ","GEK":"GEK","GEL":"ᏣᎠᏥᎢ ᎠᏕᎳ","GHC":"GHC","GHS":"ᎦᎠᎾ ᎠᏕᎳ","GIP":"ᏥᏆᎵᏓ ᎠᏕᎳ","GMD":"ᎦᎹᏈᎢᎠ ᎠᏕᎳ","GNF":"ᎩᎢᏂ ᎠᏕᎳ","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"ᏆᏖᎹᎳ ᎠᏕᎳ","GWE":"GWE","GWP":"GWP","GYD":"ᎦᏯᎾ ᎠᏕᎳ","HKD":"ᎰᏂᎩ ᎪᏂᎩ ᎠᏕᎳ","HNL":"ᎭᏂᏚᎳᏍ ᎠᏕᎳ","HRD":"HRD","HRK":"ᎧᎶᎡᏏᎠ ᎠᏕᎳ","HTG":"ᎮᏘ ᎠᏕᎳ","HUF":"ᎲᏂᎦᎵ ᎠᏕᎳ","IDR":"ᎢᏂᏙᏂᏍᏯ ᎠᏕᎳ","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ᎢᏏᎵᏱ ᎢᏤ ᎠᏕᎳ","INR":"ᎢᏂᏗᎢᎠ ᎠᏕᎳ","IQD":"ᎢᎳᎩ ᎠᏕᎳ","IRR":"ᎢᎴᏂ ᎠᏕᎳ","ISJ":"ISJ","ISK":"ᏧᏁᏍᏓᎸᎯ ᎠᏕᎳ","ITL":"ITL","JMD":"ᏣᎺᎢᎧ ᎠᏕᎳ","JOD":"ᏦᏓᏂ ᎠᏕᎳ","JPY":"ᏣᏩᏂᏏ ᎠᏕᎳ","KES":"ᎨᏂᏯ ᎠᏕᎳ","KGS":"ᎩᎵᏣᎢᏍ ᎠᏕᎳ","KHR":"ᎧᎹᏉᏗᎠᏂ ᎠᏕᎳ","KMF":"ᎪᎼᎳᏍ ᎠᏕᎳ","KPW":"ᏧᏴᏢ ᎪᎵᎠ ᎠᏕᎳ","KRH":"KRH","KRO":"KRO","KRW":"ᏧᎦᎾᏮ ᎪᎵᎠ ᎠᏕᎳ","KWD":"ᎫᏪᎢᏘ ᎠᏕᎳ","KYD":"ᎨᎢᎹᏂ ᏚᎦᏚᏛᎢ ᎠᏕᎳ","KZT":"ᎧᏎᎧᏍᏕᏂ ᎠᏕᎳ","LAK":"ᎳᎣ ᎠᏕᎳ","LBP":"ᎴᏆᎾᏂ ᎠᏕᎳ","LKR":"ᏍᎵ ᎳᏂᎧ ᎠᏕᎳ","LRD":"ᎳᏈᎵᏯ ᎠᏕᎳ","LSL":"LSL","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"ᎵᏈᏯ ᎠᏕᎳ","MAD":"ᎼᎶᎪ ᎠᏕᎳ","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"ᎹᎵᏙᏫᎠ ᎠᏕᎳ","MGA":"ᎹᎳᎦᏏ ᎠᏕᎳ","MGF":"MGF","MKD":"ᎹᏎᏙᏂᎠ ᎠᏕᎳ","MKN":"MKN","MLF":"MLF","MMK":"ᎹᏯᎹᎵ ᎠᏕᎳ","MNT":"ᎹᏂᎪᎵᎠ ᎠᏕᎳ","MOP":"ᎹᎧᎣ ᎠᏕᎳ","MRO":"ᎹᏈᏔᏂᎠ ᎠᏕᎳ (1973–2017)","MRU":"ᎹᏈᏔᏂᎠ ᎠᏕᎳ","MTL":"MTL","MTP":"MTP","MUR":"ᎹᏘᎢᏯ ᎠᏕᎳ","MVP":"MVP","MVR":"ᎹᎵᏗᏫᏍ ᎠᏕᎳ","MWK":"ᎹᎳᏫ ᎠᏕᎳ","MXN":"ᏍᏆᏂ ᎠᏕᎳ","MXP":"MXP","MXV":"MXV","MYR":"ᎹᎴᏏᎢᎠ ᎠᏕᎳ","MZE":"MZE","MZM":"MZM","MZN":"ᎼᏎᎻᏇᎩ ᎠᏕᎳ","NAD":"ᎾᎻᏈᎢᏯ ᎠᏕᎳ","NGN":"ᏂᏥᎵᏯ ᎠᏕᎳ","NIC":"NIC","NIO":"ᏂᎧᎳᏆ ᎠᏕᎳ","NLG":"NLG","NOK":"ᏃᏪ ᎠᏕᎳ","NPR":"ᏁᏆᎵ ᎠᏕᎳ","NZD":"ᎢᏤ ᏏᎢᎴᏂᏗ ᎠᏕᎳ","OMR":"ᎣᎺᏂ ᎠᏕᎳ","PAB":"ᏆᎾᎹ ᎠᏕᎳ","PEI":"PEI","PEN":"ᏇᎷ ᎠᏕᎳ","PES":"PES","PGK":"ᏆᏇ ᎢᏤ ᎩᎢᏂ ᎠᏕᎳ","PHP":"ᎠᏂᏈᎵᎩᏃ ᎠᏕᎳ","PKR":"ᏆᎩᏍᏖᏂ ᎠᏕᎳ","PLN":"ᏉᎳᏂ ᎠᏕᎳ","PLZ":"PLZ","PTE":"PTE","PYG":"ᏆᎳᏇᎢᏯ ᎠᏕᎳ","QAR":"ᎧᏔᎵ ᎠᏕᎳ","RHD":"RHD","ROL":"ROL","RON":"ᎶᎹᏂᏯ ᎠᏕᎳ","RSD":"ᏒᏈᏯ ᎠᏕᎳ","RUB":"ᏲᏂᎢ ᎠᏕᎳ","RUR":"RUR","RWF":"ᎶᏩᏂᏓ ᎠᏕᎳ","SAR":"ᏌᎤᏗ ᎠᏕᎳ","SBD":"ᏐᎶᎹᏂ ᏚᎦᏚᏛᎢ ᎠᏕᎳ","SCR":"ᏏᎡᏥᎵᏍ ᎠᏕᎳ","SDD":"SDD","SDG":"ᏑᏕᏂ ᎠᏕᎳ","SDP":"SDP","SEK":"ᏍᏫᏕᏂ ᎠᏕᎳ","SGD":"ᏏᏂᎦᏉᎵ ᎠᏕᎳ","SHP":"ᎤᏓᏅᏘ ᎮᎵᎾ ᎠᏕᎳ","SIT":"SIT","SKK":"SKK","SLL":"ᏏᎡᎳᎴᎣᏂ ᎠᏕᎳ","SOS":"ᏐᎹᎵ ᎠᏕᎳ","SRD":"ᏒᎵᎾᎻ ᎠᏕᎳ","SRG":"SRG","SSP":"ᏧᎦᎾᏮ ᏑᏕᏂ ᎠᏕᎳ","STD":"ᏌᎣᏙᎺ ᎠᎴ ᏈᏂᏏᏇ ᎠᏕᎳ (1977–2017)","STN":"ᏌᎣᏙᎺ & ᏈᏂᏏᏇ ᎠᏕᎳ","SUR":"SUR","SVC":"SVC","SYP":"ᏏᎵᎠ ᎠᏕᎳ","SZL":"ᏍᏩᏏ ᎠᏕᎳ","THB":"ᏔᏯᎴᏂ ᎠᏕᎳ","TJR":"TJR","TJS":"ᏔᏥᎩᏍᏕᏂ ᎠᏕᎳ","TMM":"TMM","TMT":"ᏛᎵᎩᎺᏂᏍᏔᏂ ᎠᏕᎳ","TND":"ᏚᏂᏏᏍᎠ ᎠᏕᎳ","TOP":"ᏔᏂᎪ ᎠᏕᎳ","TPE":"TPE","TRL":"TRL","TRY":"ᎬᏃ ᎠᏕᎳ","TTD":"ᏟᏂᏕᏗ & ᏙᏆᎪ ᎠᏕᎳ","TWD":"ᎢᏤ ᏔᎢᏩᏂ ᎠᏕᎳ","TZS":"ᏖᏂᏏᏂᏯ ᎠᏕᎳ","UAH":"ᏳᎧᎴᏂ ᎠᏕᎳ","UAK":"UAK","UGS":"UGS","UGX":"ᏳᎦᏂᏓ ᎠᏕᎳ","USD":"US ᎠᏕᎳ","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"ᏳᎷᏇ ᎠᏕᎳ","UYW":"UYW","UZS":"ᎤᏍᏇᎩᏍᏖᏂ ᎠᏕᎳ","VEB":"VEB","VEF":"ᏪᏁᏑᏪ ᎠᏕᎳ (2008–2018)","VES":"ᏪᏁᏑᏪ ᎠᏕᎳ","VND":"ᏫᎡᏘᎾᎻᏍ ᎠᏕᎳ","VNN":"VNN","VUV":"ᏩᏂᎤᏩᏚ ᎠᏕᎳ","WST":"ᏌᎼᎠ ᎠᏕᎳ","XAF":"ᎠᏰᏟ ᎬᎿᎨᏍᏛ CFA ᎠᏕᎳ","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"ᏗᎧᎸᎬ ᎨᏆᏙᏯ ᎠᏕᎳ","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ CFA ᎠᏕᎳ","XPD":"XPD","XPF":"CFP ᎠᏕᎳ","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"ᏄᏬᎵᏍᏛᎾ ᎠᏕᎳ","YDD":"YDD","YER":"ᏰᎺᏂ ᎠᏕᎳ","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"ᏧᎦᎾᏮ ᎬᎿᎨᏍᏛ ᎠᏕᎳ","ZMK":"ZMK","ZMW":"ᏏᎻᏆᏇ ᎠᏕᎳ","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"chr"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
