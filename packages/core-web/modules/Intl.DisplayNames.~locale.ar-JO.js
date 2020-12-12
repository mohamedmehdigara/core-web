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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("ar-JO").length
)) {
// Intl.DisplayNames.~locale.ar-JO
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"الأفارية","ab":"الأبخازية","ace":"الأتشينيزية","ach":"الأكولية","ada":"الأدانجمية","ady":"الأديغة","ae":"الأفستية","af":"الأفريقانية","afh":"الأفريهيلية","agq":"الأغم","ain":"الآينوية","ak":"الأكانية","akk":"الأكادية","ale":"الأليوتية","alt":"الألطائية الجنوبية","am":"الأمهرية","an":"الأراغونية","ang":"الإنجليزية القديمة","anp":"الأنجيكا","ar":"العربية","ar-001":"العربية الفصحى الحديثة","arc":"الآرامية","arn":"المابودونغونية","arp":"الأراباهو","ars":"اللهجة النجدية","arw":"الأراواكية","as":"الأسامية","asa":"الآسو","ast":"الأسترية","av":"الأوارية","awa":"الأوادية","ay":"الأيمارا","az":"الأذربيجانية","ba":"الباشكيرية","bal":"البلوشية","ban":"البالينية","bas":"الباسا","bax":"بامن","bbj":"لغة الغومالا","be":"البيلاروسية","bej":"البيجا","bem":"البيمبا","bez":"بينا","bfd":"لغة البافوت","bg":"البلغارية","bgn":"البلوشية الغربية","bho":"البهوجبورية","bi":"البيسلامية","bik":"البيكولية","bin":"البينية","bkm":"لغة الكوم","bla":"السيكسيكية","bm":"البامبارا","bn":"البنغالية","bo":"التبتية","br":"البريتونية","bra":"البراجية","brx":"البودو","bs":"البوسنية","bss":"أكوس","bua":"البرياتية","bug":"البجينيزية","bum":"لغة البولو","byn":"البلينية","byv":"لغة الميدومبا","ca":"الكتالانية","cad":"الكادو","car":"الكاريبية","cay":"الكايوجية","cch":"الأتسام","ccp":"تشاكما","ce":"الشيشانية","ceb":"السيبيوانية","cgg":"تشيغا","ch":"التشامورو","chb":"التشيبشا","chg":"التشاجاتاي","chk":"التشكيزية","chm":"الماري","chn":"الشينوك جارجون","cho":"الشوكتو","chp":"الشيباوايان","chr":"الشيروكي","chy":"الشايان","ckb":"السورانية الكردية","co":"الكورسيكية","cop":"القبطية","cr":"الكرى","crh":"لغة تتار القرم","crs":"الفرنسية الكريولية السيشيلية","cs":"التشيكية","csb":"الكاشبايان","cu":"سلافية كنسية","cv":"التشوفاشي","cy":"الويلزية","da":"الدانمركية","dak":"الداكوتا","dar":"الدارجوا","dav":"تيتا","de":"الألمانية","de-AT":"الألمانية النمساوية","de-CH":"الألمانية العليا السويسرية","del":"الديلوير","den":"السلافية","dgr":"الدوجريب","din":"الدنكا","dje":"الزارمية","doi":"الدوجرية","dsb":"صوربيا السفلى","dua":"الديولا","dum":"الهولندية الوسطى","dv":"المالديفية","dyo":"جولا فونيا","dyu":"الدايلا","dz":"الزونخاية","dzg":"القرعانية","ebu":"إمبو","ee":"الإيوي","efi":"الإفيك","egy":"المصرية القديمة","eka":"الإكاجك","el":"اليونانية","elx":"الإمايت","en":"الإنجليزية","en-AU":"الإنجليزية الأسترالية","en-CA":"الإنجليزية الكندية","en-GB":"الإنجليزية البريطانية","en-US":"الإنجليزية الأمريكية","enm":"الإنجليزية الوسطى","eo":"الإسبرانتو","es":"الإسبانية","es-419":"الإسبانية أمريكا اللاتينية","es-ES":"الإسبانية الأوروبية","es-MX":"الإسبانية المكسيكية","et":"الإستونية","eu":"الباسكية","ewo":"الإيوندو","fa":"الفارسية","fa-AF":"الدارية","fan":"الفانج","fat":"الفانتي","ff":"الفولانية","fi":"الفنلندية","fil":"الفلبينية","fj":"الفيجية","fo":"الفاروية","fon":"الفون","fr":"الفرنسية","fr-CA":"الفرنسية الكندية","fr-CH":"الفرنسية السويسرية","frc":"الفرنسية الكاجونية","frm":"الفرنسية الوسطى","fro":"الفرنسية القديمة","frr":"الفريزينية الشمالية","frs":"الفريزينية الشرقية","fur":"الفريلايان","fy":"الفريزيان","ga":"الأيرلندية","gaa":"الجا","gag":"الغاغوز","gan":"الغان الصينية","gay":"الجايو","gba":"الجبيا","gd":"الغيلية الأسكتلندية","gez":"الجعزية","gil":"لغة أهل جبل طارق","gl":"الجاليكية","gmh":"الألمانية العليا الوسطى","gn":"الغوارانية","goh":"الألمانية العليا القديمة","gon":"الجندي","gor":"الجورونتالو","got":"القوطية","grb":"الجريبو","grc":"اليونانية القديمة","gsw":"الألمانية السويسرية","gu":"الغوجاراتية","guz":"الغيزية","gv":"المنكية","gwi":"غوتشن","ha":"الهوسا","hai":"الهيدا","hak":"الهاكا الصينية","haw":"لغة هاواي","he":"العبرية","hi":"الهندية","hil":"الهيليجينون","hit":"الحثية","hmn":"الهمونجية","ho":"الهيري موتو","hr":"الكرواتية","hsb":"الصوربية العليا","hsn":"شيانغ الصينية","ht":"الكريولية الهايتية","hu":"الهنغارية","hup":"الهبا","hy":"الأرمنية","hz":"الهيريرو","ia":"اللّغة الوسيطة","iba":"الإيبان","ibb":"الإيبيبيو","id":"الإندونيسية","ie":"الإنترلينج","ig":"الإيجبو","ii":"السيتشيون يي","ik":"الإينبياك","ilo":"الإيلوكو","inh":"الإنجوشية","io":"الإيدو","is":"الأيسلندية","it":"الإيطالية","iu":"الإينكتيتت","ja":"اليابانية","jbo":"اللوجبان","jgo":"نغومبا","jmc":"الماتشامية","jpr":"الفارسية اليهودية","jrb":"العربية اليهودية","jv":"الجاوية","ka":"الجورجية","kaa":"الكارا-كالباك","kab":"القبيلية","kac":"الكاتشين","kaj":"الجو","kam":"الكامبا","kaw":"الكوي","kbd":"الكاباردايان","kbl":"كانمبو","kcg":"التايابية","kde":"ماكونده","kea":"كابوفيرديانو","kfo":"الكورو","kg":"الكونغو","kha":"الكازية","kho":"الخوتانيز","khq":"كويرا تشيني","ki":"الكيكيو","kj":"الكيونياما","kk":"الكازاخستانية","kkj":"لغة الكاكو","kl":"الكالاليست","kln":"كالينجين","km":"الخميرية","kmb":"الكيمبندو","kn":"الكانادا","ko":"الكورية","koi":"كومي-بيرماياك","kok":"الكونكانية","kos":"الكوسراين","kpe":"الكبيل","kr":"الكانوري","krc":"الكاراتشاي-بالكار","krl":"الكاريلية","kru":"الكوروخ","ks":"الكشميرية","ksb":"شامبالا","ksf":"لغة البافيا","ksh":"لغة الكولونيان","ku":"الكردية","kum":"القموقية","kut":"الكتيناي","kv":"الكومي","kw":"الكورنية","ky":"القيرغيزية","la":"اللاتينية","lad":"اللادينو","lag":"لانجي","lah":"اللاهندا","lam":"اللامبا","lb":"اللكسمبورغية","lez":"الليزجية","lg":"الغاندا","li":"الليمبورغية","lkt":"لاكوتا","ln":"اللينجالا","lo":"اللاوية","lol":"منغولى","lou":"الكريولية اللويزيانية","loz":"اللوزي","lrc":"اللرية الشمالية","lt":"الليتوانية","lu":"اللوبا كاتانغا","lua":"اللبا-لؤلؤ","lui":"اللوسينو","lun":"اللوندا","luo":"اللو","lus":"الميزو","luy":"لغة اللويا","lv":"اللاتفية","mad":"المادريز","mag":"الماجا","mai":"المايثيلي","mak":"الماكاسار","man":"الماندينغ","mas":"الماساي","mde":"مابا","mdf":"الموكشا","mdr":"الماندار","men":"الميند","mer":"الميرو","mfe":"المورسيانية","mg":"الملغاشي","mga":"الأيرلندية الوسطى","mgh":"ماخاوا-ميتو","mgo":"ميتا","mh":"المارشالية","mi":"الماورية","mic":"الميكماكيونية","min":"المينانجكاباو","mk":"المقدونية","ml":"المالايالامية","mn":"المنغولية","mnc":"المانشو","mni":"المانيبورية","moh":"الموهوك","mos":"الموسي","mr":"الماراثية","ms":"الماليزية","mt":"المالطية","mua":"مندنج","mul":"لغات متعددة","mus":"الكريك","mwl":"الميرانديز","mwr":"الماروارية","my":"البورمية","myv":"الأرزية","mzn":"المازندرانية","na":"النورو","nan":"مين-نان الصينية","nap":"النابولية","naq":"لغة الناما","nb":"النرويجية بوكمال","nd":"النديبيل الشمالية","nds":"الألمانية السفلى","nds-NL":"السكسونية السفلى","ne":"النيبالية","new":"النوارية","ng":"الندونجا","nia":"النياس","niu":"النيوي","nl":"الهولندية","nl-BE":"الفلمنكية","nmg":"كواسيو","nn":"النرويجية نينورسك","nnh":"لغة النجيمبون","no":"النرويجية","nog":"النوجاي","non":"النورس القديم","nqo":"أنكو","nr":"النديبيل الجنوبي","nso":"السوتو الشمالية","nus":"النوير","nv":"النافاجو","nwc":"النوارية التقليدية","ny":"النيانجا","nym":"النيامويزي","nyn":"النيانكول","nyo":"النيورو","nzi":"النزيما","oc":"الأوكسيتانية","oj":"الأوجيبوا","om":"الأورومية","or":"الأورية","os":"الأوسيتيك","osa":"الأوساج","ota":"التركية العثمانية","pa":"البنجابية","pag":"البانجاسينان","pal":"البهلوية","pam":"البامبانجا","pap":"البابيامينتو","pau":"البالوان","pcm":"البدجنية النيجيرية","peo":"الفارسية القديمة","phn":"الفينيقية","pi":"البالية","pl":"البولندية","pon":"البوهنبيايان","prg":"البروسياوية","pro":"البروفانسية القديمة","ps":"البشتو","pt":"البرتغالية","pt-BR":"البرتغالية البرازيلية","pt-PT":"البرتغالية الأوروبية","qu":"الكويتشوا","quc":"الكيشية","raj":"الراجاسثانية","rap":"الراباني","rar":"الراروتونجاني","rm":"الرومانشية","rn":"الرندي","ro":"الرومانية","ro-MD":"المولدوفية","rof":"الرومبو","rom":"الغجرية","root":"الجذر","ru":"الروسية","rup":"الأرومانيان","rw":"الكينيارواندا","rwk":"الروا","sa":"السنسكريتية","sad":"السانداوي","sah":"الساخيّة","sam":"الآرامية السامرية","saq":"سامبورو","sas":"الساساك","sat":"السانتالية","sba":"نامبي","sbp":"سانغو","sc":"السردينية","scn":"الصقلية","sco":"الأسكتلندية","sd":"السندية","sdh":"الكردية الجنوبية","se":"سامي الشمالية","see":"السنيكا","seh":"سينا","sel":"السيلكب","ses":"كويرابورو سيني","sg":"السانجو","sga":"الأيرلندية القديمة","sh":"صربية-كرواتية","shi":"تشلحيت","shn":"الشان","shu":"العربية التشادية","si":"السنهالية","sid":"السيدامو","sk":"السلوفاكية","sl":"السلوفانية","sm":"الساموائية","sma":"السامي الجنوبي","smj":"اللول سامي","smn":"الإيناري سامي","sms":"السكولت سامي","sn":"الشونا","snk":"السونينك","so":"الصومالية","sog":"السوجدين","sq":"الألبانية","sr":"الصربية","srn":"السرانان تونجو","srr":"السرر","ss":"السواتي","ssy":"لغة الساهو","st":"السوتو الجنوبية","su":"السوندانية","suk":"السوكوما","sus":"السوسو","sux":"السومارية","sv":"السويدية","sw":"السواحلية","sw-CD":"الكونغو السواحلية","swb":"القمرية","syc":"سريانية تقليدية","syr":"السريانية","ta":"التاميلية","te":"التيلوغوية","tem":"التيمن","teo":"تيسو","ter":"التيرينو","tet":"التيتم","tg":"الطاجيكية","th":"التايلاندية","ti":"التغرينية","tig":"التيغرية","tiv":"التيف","tk":"التركمانية","tkl":"التوكيلاو","tl":"التاغالوغية","tlh":"الكلينجون","tli":"التلينغيتية","tmh":"التاماشيك","tn":"التسوانية","to":"التونغية","tog":"تونجا - نياسا","tpi":"التوك بيسين","tr":"التركية","trv":"لغة التاروكو","ts":"السونجا","tsi":"التسيمشيان","tt":"التترية","tum":"التامبوكا","tvl":"التوفالو","tw":"التوي","twq":"تاساواق","ty":"التاهيتية","tyv":"التوفية","tzm":"الأمازيغية وسط الأطلس","udm":"الأدمرت","ug":"الأويغورية","uga":"اليجاريتيك","uk":"الأوكرانية","umb":"الأمبندو","und":"لغة غير معروفة","ur":"الأوردية","uz":"الأوزبكية","vai":"الفاي","ve":"الفيندا","vi":"الفيتنامية","vo":"لغة الفولابوك","vot":"الفوتيك","vun":"الفونجو","wa":"الولونية","wae":"الوالسر","wal":"الولاياتا","war":"الواراي","was":"الواشو","wbp":"وارلبيري","wo":"الولوفية","wuu":"الوو الصينية","xal":"الكالميك","xh":"الخوسا","xog":"السوغا","yao":"الياو","yap":"اليابيز","yav":"يانجبن","ybb":"يمبا","yi":"اليديشية","yo":"اليوروبا","yue":"الكَنْتُونية","za":"الزهيونج","zap":"الزابوتيك","zbl":"رموز المعايير الأساسية","zen":"الزيناجا","zgh":"التمازيغية المغربية القياسية","zh":"الصينية","zh-Hans":"الصينية المبسطة","zh-Hant":"الصينية التقليدية","zu":"الزولو","zun":"الزونية","zxx":"بدون محتوى لغوي","zza":"زازا"},"short":{"az":"الأذرية","en-GB":"الإنجليزية المملكة المتحدة","en-US":"الإنجليزية الولايات المتحدة"},"narrow":{}},"region":{"long":{"142":"آسيا","143":"وسط آسيا","145":"غرب آسيا","150":"أوروبا","151":"شرق أوروبا","154":"شمال أوروبا","155":"غرب أوروبا","202":"أفريقيا جنوب الصحراء الكبرى","419":"أمريكا اللاتينية","001":"العالم","002":"أفريقيا","003":"أمريكا الشمالية","005":"أمريكا الجنوبية","009":"أوقيانوسيا","011":"غرب أفريقيا","013":"أمريكا الوسطى","014":"شرق أفريقيا","015":"شمال أفريقيا","017":"وسط أفريقيا","018":"أفريقيا الجنوبية","019":"الأمريكتان","021":"شمال أمريكا","029":"الكاريبي","030":"شرق آسيا","034":"جنوب آسيا","035":"جنوب شرق آسيا","039":"جنوب أوروبا","053":"أسترالاسيا","054":"ميلانيزيا","057":"الجزر الميكرونيزية","061":"بولينيزيا","AC":"جزيرة أسينشيون","AD":"أندورا","AE":"الإمارات العربية المتحدة","AF":"أفغانستان","AG":"أنتيغوا وبربودا","AI":"أنغويلا","AL":"ألبانيا","AM":"أرمينيا","AO":"أنغولا","AQ":"أنتاركتيكا","AR":"الأرجنتين","AS":"ساموا الأمريكية","AT":"النمسا","AU":"أستراليا","AW":"أروبا","AX":"جزر آلاند","AZ":"أذربيجان","BA":"البوسنة والهرسك","BB":"بربادوس","BD":"بنغلاديش","BE":"بلجيكا","BF":"بوركينا فاسو","BG":"بلغاريا","BH":"البحرين","BI":"بوروندي","BJ":"بنين","BL":"سان بارتليمي","BM":"برمودا","BN":"بروناي","BO":"بوليفيا","BQ":"هولندا الكاريبية","BR":"البرازيل","BS":"جزر البهاما","BT":"بوتان","BV":"جزيرة بوفيه","BW":"بوتسوانا","BY":"بيلاروس","BZ":"بليز","CA":"كندا","CC":"جزر كوكوس (كيلينغ)","CD":"الكونغو - كينشاسا","CF":"جمهورية أفريقيا الوسطى","CG":"الكونغو - برازافيل","CH":"سويسرا","CI":"ساحل العاج","CK":"جزر كوك","CL":"تشيلي","CM":"الكاميرون","CN":"الصين","CO":"كولومبيا","CP":"جزيرة كليبيرتون","CR":"كوستاريكا","CU":"كوبا","CV":"الرأس الأخضر","CW":"كوراساو","CX":"جزيرة كريسماس","CY":"قبرص","CZ":"التشيك","DE":"ألمانيا","DG":"دييغو غارسيا","DJ":"جيبوتي","DK":"الدانمرك","DM":"دومينيكا","DO":"جمهورية الدومينيكان","DZ":"الجزائر","EA":"سيوتا وميليلا","EC":"الإكوادور","EE":"إستونيا","EG":"مصر","EH":"الصحراء الغربية","ER":"إريتريا","ES":"إسبانيا","ET":"إثيوبيا","EU":"الاتحاد الأوروبي","EZ":"منطقة اليورو","FI":"فنلندا","FJ":"فيجي","FK":"جزر فوكلاند","FM":"ميكرونيزيا","FO":"جزر فارو","FR":"فرنسا","GA":"الغابون","GB":"المملكة المتحدة","GD":"غرينادا","GE":"جورجيا","GF":"غويانا الفرنسية","GG":"غيرنزي","GH":"غانا","GI":"جبل طارق","GL":"غرينلاند","GM":"غامبيا","GN":"غينيا","GP":"غوادلوب","GQ":"غينيا الاستوائية","GR":"اليونان","GS":"جورجيا الجنوبية وجزر ساندويتش الجنوبية","GT":"غواتيمالا","GU":"غوام","GW":"غينيا بيساو","GY":"غيانا","HK":"هونغ كونغ الصينية (منطقة إدارية خاصة)","HM":"جزيرة هيرد وجزر ماكدونالد","HN":"هندوراس","HR":"كرواتيا","HT":"هايتي","HU":"هنغاريا","IC":"جزر الكناري","ID":"إندونيسيا","IE":"أيرلندا","IL":"إسرائيل","IM":"جزيرة مان","IN":"الهند","IO":"الإقليم البريطاني في المحيط الهندي","IQ":"العراق","IR":"إيران","IS":"آيسلندا","IT":"إيطاليا","JE":"جيرسي","JM":"جامايكا","JO":"الأردن","JP":"اليابان","KE":"كينيا","KG":"قيرغيزستان","KH":"كمبوديا","KI":"كيريباتي","KM":"جزر القمر","KN":"سانت كيتس ونيفيس","KP":"كوريا الشمالية","KR":"كوريا الجنوبية","KW":"الكويت","KY":"جزر كايمان","KZ":"كازاخستان","LA":"لاوس","LB":"لبنان","LC":"سانت لوسيا","LI":"ليختنشتاين","LK":"سريلانكا","LR":"ليبيريا","LS":"ليسوتو","LT":"ليتوانيا","LU":"لوكسمبورغ","LV":"لاتفيا","LY":"ليبيا","MA":"المغرب","MC":"موناكو","MD":"مولدوفا","ME":"الجبل الأسود","MF":"سان مارتن","MG":"مدغشقر","MH":"جزر مارشال","MK":"مقدونيا الشمالية","ML":"مالي","MM":"ميانمار (بورما)","MN":"منغوليا","MO":"منطقة ماكاو الإدارية الخاصة","MP":"جزر ماريانا الشمالية","MQ":"جزر المارتينيك","MR":"موريتانيا","MS":"مونتسرات","MT":"مالطا","MU":"موريشيوس","MV":"جزر المالديف","MW":"ملاوي","MX":"المكسيك","MY":"ماليزيا","MZ":"موزمبيق","NA":"ناميبيا","NC":"كاليدونيا الجديدة","NE":"النيجر","NF":"جزيرة نورفولك","NG":"نيجيريا","NI":"نيكاراغوا","NL":"هولندا","NO":"النرويج","NP":"نيبال","NR":"ناورو","NU":"نيوي","NZ":"نيوزيلندا","OM":"عُمان","PA":"بنما","PE":"بيرو","PF":"بولينيزيا الفرنسية","PG":"بابوا غينيا الجديدة","PH":"الفلبين","PK":"باكستان","PL":"بولندا","PM":"سان بيير ومكويلون","PN":"جزر بيتكيرن","PR":"بورتوريكو","PS":"الأراضي الفلسطينية","PT":"البرتغال","PW":"بالاو","PY":"باراغواي","QA":"قطر","QO":"أوقيانوسيا النائية","RE":"روينيون","RO":"رومانيا","RS":"صربيا","RU":"روسيا","RW":"رواندا","SA":"المملكة العربية السعودية","SB":"جزر سليمان","SC":"سيشل","SD":"السودان","SE":"السويد","SG":"سنغافورة","SH":"سانت هيلينا","SI":"سلوفينيا","SJ":"سفالبارد وجان ماين","SK":"سلوفاكيا","SL":"سيراليون","SM":"سان مارينو","SN":"السنغال","SO":"الصومال","SR":"سورينام","SS":"جنوب السودان","ST":"ساو تومي وبرينسيبي","SV":"السلفادور","SX":"سانت مارتن","SY":"سوريا","SZ":"إسواتيني","TA":"تريستان دا كونا","TC":"جزر توركس وكايكوس","TD":"تشاد","TF":"الأقاليم الجنوبية الفرنسية","TG":"توغو","TH":"تايلاند","TJ":"طاجيكستان","TK":"توكيلو","TL":"تيمور - ليشتي","TM":"تركمانستان","TN":"تونس","TO":"تونغا","TR":"تركيا","TT":"ترينيداد وتوباغو","TV":"توفالو","TW":"تايوان","TZ":"تنزانيا","UA":"أوكرانيا","UG":"أوغندا","UM":"جزر الولايات المتحدة النائية","UN":"الأمم المتحدة","US":"الولايات المتحدة","UY":"أورغواي","UZ":"أوزبكستان","VA":"الفاتيكان","VC":"سانت فنسنت وجزر غرينادين","VE":"فنزويلا","VG":"جزر فيرجن البريطانية","VI":"جزر فيرجن التابعة للولايات المتحدة","VN":"فيتنام","VU":"فانواتو","WF":"جزر والس وفوتونا","WS":"ساموا","XA":"لكنات تجريبية غير أصلية","XB":"لكنات تجريبية ثنائية الاتجاه","XK":"كوسوفو","YE":"اليمن","YT":"مايوت","ZA":"جنوب أفريقيا","ZM":"زامبيا","ZW":"زيمبابوي","ZZ":"منطقة غير معروفة"},"short":{"GB":"المملكة المتحدة","HK":"هونغ كونغ","MO":"مكاو","PS":"فلسطين","US":"الولايات المتحدة"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"العربية","Aran":"نستعليق","Armi":"Armi","Armn":"الأرمينية","Avst":"Avst","Bali":"البالية","Bamu":"Bamu","Bass":"Bass","Batk":"الباتاك","Beng":"البنغالية","Bhks":"Bhks","Blis":"رموز بليس","Bopo":"البوبوموفو","Brah":"الهندوسية","Brai":"البرايل","Bugi":"البجينيز","Buhd":"البهيدية","Cakm":"Cakm","Cans":"مقاطع كندية أصلية موحدة","Cari":"الكارية","Cham":"التشامية","Cher":"الشيروكي","Chrs":"Chrs","Cirt":"السيرث","Copt":"القبطية","Cprt":"القبرصية","Cyrl":"السيريلية","Cyrs":"السيريلية السلافية الكنسية القديمة","Deva":"الديفاناجاري","Diak":"Diak","Dogr":"Dogr","Dsrt":"الديسيريت","Dupl":"Dupl","Egyd":"الديموطيقية","Egyh":"الهيراطيقية","Egyp":"الهيروغليفية","Elba":"Elba","Elym":"Elym","Ethi":"الأثيوبية","Geok":"الأبجدية الجورجية - أسومتافرلي و نسخري","Geor":"الجورجية","Glag":"الجلاجوليتيك","Gong":"Gong","Gonm":"Gonm","Goth":"القوطية","Gran":"Gran","Grek":"اليونانية","Gujr":"التاغجراتية","Guru":"الجرمخي","Hanb":"هانب","Hang":"الهانغول","Hani":"الهان","Hano":"الهانونو","Hans":"المبسطة","Hant":"التقليدية","Hatr":"Hatr","Hebr":"العبرية","Hira":"الهيراجانا","Hluw":"Hluw","Hmng":"الباهوه همونج","Hmnp":"Hmnp","Hrkt":"أبجدية مقطعية يابانية","Hung":"المجرية القديمة","Inds":"اندس - هارابان","Ital":"الإيطالية القديمة","Jamo":"جامو","Java":"الجاوية","Jpan":"اليابانية","Kali":"الكياه لى","Kana":"الكتكانا","Khar":"الخاروشتى","Khmr":"الخميرية","Khoj":"Khoj","Kits":"Kits","Knda":"الكانادا","Kore":"الكورية","Kthi":"Kthi","Lana":"الانا","Laoo":"اللاو","Latf":"اللاتينية - متغير فراكتر","Latg":"اللاتينية - متغير غيلى","Latn":"اللاتينية","Lepc":"الليبتشا - رونج","Limb":"الليمبو","Lina":"الخطية أ","Linb":"الخطية ب","Lisu":"Lisu","Lyci":"الليسية","Lydi":"الليدية","Mahj":"Mahj","Maka":"Maka","Mand":"المانداينية","Mani":"Mani","Marc":"Marc","Maya":"المايا الهيروغليفية","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"الميرويتيك","Mlym":"الماليالام","Modi":"Modi","Mong":"المغولية","Moon":"مون","Mroo":"Mroo","Mtei":"ميتي ماييك","Mult":"Mult","Mymr":"الميانمار","Nand":"Nand","Narb":"العربية الشمالية القديمة","Nbat":"Nbat","Newa":"Newa","Nkoo":"أنكو","Nshu":"Nshu","Ogam":"الأوجهام","Olck":"أول تشيكي","Orkh":"الأورخون","Orya":"الأوريا","Osge":"Osge","Osma":"الأوسمانيا","Palm":"Palm","Pauc":"Pauc","Perm":"البيرميكية القديمة","Phag":"الفاجسبا","Phli":"Phli","Phlp":"Phlp","Phnx":"الفينيقية","Plrd":"الصوتيات الجماء","Prti":"Prti","Qaag":"زوجيي","Rjng":"Rjng","Rohg":"Rohg","Roro":"رنجورنجو","Runr":"الروني","Samr":"Samr","Sara":"الساراتي","Sarb":"العربية الجنوبية القديمة","Saur":"Saur","Sgnw":"Sgnw","Shaw":"الشواني","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"السينهالا","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"السوندانية","Sylo":"السيلوتي ناغري","Syrc":"السريانية","Syre":"السريانية الأسترنجيلية","Syrj":"السريانية الغربية","Syrn":"السريانية الشرقية","Tagb":"التاجبانوا","Takr":"Takr","Tale":"التاي لي","Talu":"التاى لى الجديد","Taml":"التاميلية","Tang":"Tang","Tavt":"Tavt","Telu":"التيلجو","Teng":"التينجوار","Tfng":"التيفيناغ","Tglg":"التغالوغية","Thaa":"الثعنة","Thai":"التايلاندية","Tibt":"التبتية","Tirh":"Tirh","Ugar":"الأجاريتيكية","Vaii":"الفاي","Visp":"الكلام المرئي","Wara":"Wara","Wcho":"Wcho","Xpeo":"الفارسية القديمة","Xsux":"الكتابة المسمارية الأكدية السومرية","Yezi":"Yezi","Yiii":"اليي","Zanb":"Zanb","Zinh":"الموروث","Zmth":"تدوين رياضي","Zsye":"إيموجي","Zsym":"رموز","Zxxx":"غير مكتوب","Zyyy":"عام","Zzzz":"نظام كتابة غير معروف"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"بيستا أندوري","AED":"درهم إماراتي","AFA":"أفغاني - 1927-2002","AFN":"أفغاني","ALK":"ALK","ALL":"ليك ألباني","AMD":"درام أرميني","ANG":"غيلدر أنتيلي هولندي","AOA":"كوانزا أنغولي","AOK":"كوانزا أنجولي - 1977-1990","AON":"كوانزا أنجولي جديدة - 1990-2000","AOR":"كوانزا أنجولي معدلة - 1995 - 1999","ARA":"استرال أرجنتيني","ARL":"ARL","ARM":"ARM","ARP":"بيزو أرجنتيني - 1983-1985","ARS":"بيزو أرجنتيني","ATS":"شلن نمساوي","AUD":"دولار أسترالي","AWG":"فلورن أروبي","AZM":"مانات أذريبجاني","AZN":"مانات أذربيجان","BAD":"دينار البوسنة والهرسك","BAM":"مارك البوسنة والهرسك قابل للتحويل","BAN":"BAN","BBD":"دولار بربادوسي","BDT":"تاكا بنغلاديشي","BEC":"فرنك بلجيكي قابل للتحويل","BEF":"فرنك بلجيكي","BEL":"فرنك بلجيكي مالي","BGL":"BGL","BGM":"BGM","BGN":"ليف بلغاري","BGO":"BGO","BHD":"دينار بحريني","BIF":"فرنك بروندي","BMD":"دولار برمودي","BND":"دولار بروناي","BOB":"بوليفيانو بوليفي","BOL":"BOL","BOP":"بيزو بوليفي","BOV":"مفدول بوليفي","BRB":"نوفو كروزايرو برازيلي - 1967-1986","BRC":"كروزادو برازيلي","BRE":"كروزايرو برازيلي - 1990-1993","BRL":"ريال برازيلي","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"دولار باهامي","BTN":"نولتوم بوتاني","BUK":"كيات بورمي","BWP":"بولا بتسواني","BYB":"روبل بيلاروسي جديد - 1994-1999","BYN":"روبل بيلاروسي","BYR":"روبل بيلاروسي (٢٠٠٠–٢٠١٦)","BZD":"دولار بليزي","CAD":"دولار كندي","CDF":"فرنك كونغولي","CHE":"CHE","CHF":"فرنك سويسري","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"بيزو تشيلي","CNH":"يوان صيني (في الخارج)","CNX":"CNX","CNY":"يوان صيني","COP":"بيزو كولومبي","COU":"COU","CRC":"كولن كوستاريكي","CSD":"دينار صربي قديم","CSK":"كرونة تشيكوسلوفاكيا","CUC":"بيزو كوبي قابل للتحويل","CUP":"بيزو كوبي","CVE":"اسكودو الرأس الأخضر","CYP":"جنيه قبرصي","CZK":"كرونة تشيكية","DDM":"أوستمارك ألماني شرقي","DEM":"مارك ألماني","DJF":"فرنك جيبوتي","DKK":"كرونة دنماركية","DOP":"بيزو الدومنيكان","DZD":"دينار جزائري","ECS":"ECS","ECV":"ECV","EEK":"كرونة استونية","EGP":"جنيه مصري","ERN":"ناكفا أريتري","ESA":"ESA","ESB":"ESB","ESP":"بيزيتا إسباني","ETB":"بير أثيوبي","EUR":"يورو","FIM":"ماركا فنلندي","FJD":"دولار فيجي","FKP":"جنيه جزر فوكلاند","FRF":"فرنك فرنسي","GBP":"جنيه إسترليني","GEK":"GEK","GEL":"لارى جورجي","GHC":"سيدي غاني","GHS":"سيدي غانا","GIP":"جنيه جبل طارق","GMD":"دلاسي غامبي","GNF":"فرنك غينيا","GNS":"سيلي غينيا","GQE":"اكويل جونينا غينيا الاستوائيّة","GRD":"دراخما يوناني","GTQ":"كوتزال غواتيمالا","GWE":"اسكود برتغالي غينيا","GWP":"بيزو غينيا بيساو","GYD":"دولار غيانا","HKD":"دولار هونغ كونغ","HNL":"ليمبيرا هنداروس","HRD":"دينار كرواتي","HRK":"كونا كرواتي","HTG":"جوردى هايتي","HUF":"فورينت هنغاري","IDR":"روبية إندونيسية","IEP":"جنيه إيرلندي","ILP":"جنيه إسرائيلي","ILR":"ILR","ILS":"شيكل إسرائيلي جديد","INR":"روبية هندي","IQD":"دينار عراقي","IRR":"ريال إيراني","ISJ":"ISJ","ISK":"كرونة أيسلندية","ITL":"ليرة إيطالية","JMD":"دولار جامايكي","JOD":"دينار أردني","JPY":"ين ياباني","KES":"شلن كينيي","KGS":"سوم قيرغستاني","KHR":"رييال كمبودي","KMF":"فرنك جزر القمر","KPW":"وون كوريا الشمالية","KRH":"KRH","KRO":"KRO","KRW":"وون كوريا الجنوبية","KWD":"دينار كويتي","KYD":"دولار جزر كيمن","KZT":"تينغ كازاخستاني","LAK":"كيب لاوسي","LBP":"جنيه لبناني","LKR":"روبية سريلانكية","LRD":"دولار ليبيري","LSL":"لوتي ليسوتو","LTL":"ليتا ليتوانية","LTT":"تالوناس ليتواني","LUC":"فرنك لوكسمبرج قابل للتحويل","LUF":"فرنك لوكسمبرج","LUL":"فرنك لوكسمبرج المالي","LVL":"لاتس لاتفيا","LVR":"روبل لاتفيا","LYD":"دينار ليبي","MAD":"درهم مغربي","MAF":"فرنك مغربي","MCF":"MCF","MDC":"MDC","MDL":"ليو مولدوفي","MGA":"أرياري مدغشقر","MGF":"فرنك مدغشقر","MKD":"دينار مقدوني","MKN":"MKN","MLF":"فرنك مالي","MMK":"كيات ميانمار","MNT":"توغروغ منغولي","MOP":"باتاكا ماكاوي","MRO":"أوقية موريتانية - 1973-2017","MRU":"أوقية موريتانية","MTL":"ليرة مالطية","MTP":"جنيه مالطي","MUR":"روبية موريشيوسية","MVP":"MVP","MVR":"روفيه جزر المالديف","MWK":"كواشا مالاوي","MXN":"بيزو مكسيكي","MXP":"بيزو فضي مكسيكي - 1861-1992","MXV":"MXV","MYR":"رينغيت ماليزي","MZE":"اسكود موزمبيقي","MZM":"MZM","MZN":"متكال موزمبيقي","NAD":"دولار ناميبي","NGN":"نايرا نيجيري","NIC":"كوردوبة نيكاراجوا","NIO":"قرطبة نيكاراغوا","NLG":"جلدر هولندي","NOK":"كرونة نرويجية","NPR":"روبية نيبالي","NZD":"دولار نيوزيلندي","OMR":"ريال عماني","PAB":"بالبوا بنمي","PEI":"PEI","PEN":"سول بيروفي","PES":"PES","PGK":"كينا بابوا غينيا الجديدة","PHP":"بيزو فلبيني","PKR":"روبية باكستاني","PLN":"زلوتي بولندي","PLZ":"زلوتي بولندي - 1950-1995","PTE":"اسكود برتغالي","PYG":"غواراني باراغواي","QAR":"ريال قطري","RHD":"دولار روديسي","ROL":"ليو روماني قديم","RON":"ليو روماني","RSD":"دينار صربي","RUB":"روبل روسي","RUR":"روبل روسي - 1991-1998","RWF":"فرنك رواندي","SAR":"ريال سعودي","SBD":"دولار جزر سليمان","SCR":"روبية سيشيلية","SDD":"دينار سوداني","SDG":"جنيه سوداني","SDP":"جنيه سوداني قديم","SEK":"كرونة سويدية","SGD":"دولار سنغافوري","SHP":"جنيه سانت هيلين","SIT":"تولار سلوفيني","SKK":"كرونة سلوفاكية","SLL":"ليون سيراليوني","SOS":"شلن صومالي","SRD":"دولار سورينامي","SRG":"جلدر سورينامي","SSP":"جنيه جنوب السودان","STD":"دوبرا ساو تومي وبرينسيبي - 1977-2017","STN":"دوبرا ساو تومي وبرينسيبي","SUR":"روبل سوفيتي","SVC":"كولون سلفادوري","SYP":"ليرة سورية","SZL":"ليلانجيني سوازيلندي","THB":"باخت تايلاندي","TJR":"روبل طاجيكستاني","TJS":"سوموني طاجيكستاني","TMM":"مانات تركمنستاني","TMT":"مانات تركمانستان","TND":"دينار تونسي","TOP":"بانغا تونغا","TPE":"اسكود تيموري","TRL":"ليرة تركي","TRY":"ليرة تركية","TTD":"دولار ترينداد وتوباغو","TWD":"دولار تايواني","TZS":"شلن تنزاني","UAH":"هريفنيا أوكراني","UAK":"UAK","UGS":"شلن أوغندي - 1966-1987","UGX":"شلن أوغندي","USD":"دولار أمريكي","USN":"دولار أمريكي (اليوم التالي)‏","USS":"دولار أمريكي (نفس اليوم)‏","UYI":"UYI","UYP":"بيزو أوروجواي - 1975-1993","UYU":"بيزو اوروغواي","UYW":"UYW","UZS":"سوم أوزبكستاني","VEB":"بوليفار فنزويلي - 1871-2008","VEF":"بوليفار فنزويلي - 2008–2018","VES":"بوليفار فنزويلي","VND":"دونج فيتنامي","VNN":"VNN","VUV":"فاتو فانواتو","WST":"تالا ساموا","XAF":"فرنك وسط أفريقي","XAG":"فضة","XAU":"ذهب","XBA":"الوحدة الأوروبية المركبة","XBB":"الوحدة المالية الأوروبية","XBC":"الوحدة الحسابية الأوروبية","XBD":"(XBD)وحدة الحساب الأوروبية","XCD":"دولار شرق الكاريبي","XDR":"حقوق السحب الخاصة","XEU":"وحدة النقد الأوروبية","XFO":"فرنك فرنسي ذهبي","XFU":"(UIC)فرنك فرنسي","XOF":"فرنك غرب أفريقي","XPD":"بالاديوم","XPF":"فرنك سي إف بي","XPT":"البلاتين","XRE":"XRE","XSU":"XSU","XTS":"كود اختبار العملة","XUA":"XUA","XXX":"عملة غير معروفة","YDD":"دينار يمني","YER":"ريال يمني","YUD":"دينار يوغسلافي","YUM":"YUM","YUN":"دينار يوغسلافي قابل للتحويل","YUR":"YUR","ZAL":"راند جنوب أفريقيا -مالي","ZAR":"راند جنوب أفريقيا","ZMK":"كواشا زامبي - 1968-2012","ZMW":"كواشا زامبي","ZRN":"زائير زائيري جديد","ZRZ":"زائير زائيري","ZWD":"دولار زمبابوي","ZWL":"دولار زمبابوي 2009","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"ar-JO"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
