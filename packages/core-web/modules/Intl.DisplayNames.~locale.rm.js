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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("rm").length
)) {
// Intl.DisplayNames.~locale.rm
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"afar","ab":"abchasian","ace":"aceh","ach":"acoli","ada":"andangme","ady":"adygai","ae":"avestic","af":"afrikaans","afh":"afrihili","agq":"agq","ain":"ainu","ak":"akan","akk":"accadic","ale":"aleutic","alt":"altaic dal sid","am":"amaric","an":"aragonais","ang":"englais vegl","anp":"angika","ar":"arab","ar-001":"arab (mund)","arc":"arameic","arn":"araucanic","arp":"arapaho","arw":"arawak","as":"assami","asa":"asa","ast":"asturian","av":"avaric","awa":"awadhi","ay":"aymara","az":"aserbeidschanic","ba":"baschkir","bal":"belutschi","ban":"balinais","bas":"basaa","be":"bieloruss","bej":"bedscha","bem":"bemba","bez":"bez","bg":"bulgar","bho":"bhojpuri","bi":"bislama","bik":"bikol","bin":"bini","bla":"siksika","bm":"bambara","bn":"bengal","bo":"tibetan","br":"breton","bra":"braj","brx":"brx","bs":"bosniac","bua":"buriat","bug":"bugi","byn":"blin","ca":"catalan","cad":"caddo","car":"caribic","cch":"atsam","ccp":"ccp","ce":"tschetschen","ceb":"cebuano","cgg":"cgg","ch":"chamorro","chb":"chibcha","chg":"tschagataic","chk":"chuukais","chm":"mari","chn":"patuà chinook","cho":"choctaw","chp":"chipewyan","chr":"cherokee","chy":"cheyenne","ckb":"ckb","co":"cors","cop":"coptic","cr":"cree","crh":"tirc crimean","cs":"tschec","csb":"kaschubic","cu":"slav da baselgia","cv":"tschuvasch","cy":"kimric","da":"danais","dak":"dakota","dar":"dargwa","dav":"dav","de":"tudestg","de-AT":"tudestg austriac","de-CH":"tudestg (Svizra)","del":"delaware","den":"slavey","dgr":"dogrib","din":"dinka","dje":"dje","doi":"dogri","dsb":"bass sorb","dua":"duala","dum":"ollandais mesaun","dv":"maledivic","dyo":"dyo","dyu":"diula","dz":"dzongkha","ebu":"ebu","ee":"ewe","efi":"efik","egy":"egipzian vegl","eka":"ekajuk","el":"grec","elx":"elamitic","en":"englais","en-AU":"englais australian","en-CA":"englais canadais","en-GB":"englais britannic","en-US":"englais american","enm":"englais mesaun","eo":"esperanto","es":"spagnol","es-419":"spagnol latinamerican","es-ES":"spagnol iberic","es-MX":"spagnol (Mexico)","et":"eston","eu":"basc","ewo":"ewondo","fa":"persian","fa-AF":"persian (Afghanistan)","fan":"fang","fat":"fanti","ff":"fulah","fi":"finlandais","fil":"filippino","fj":"fidschian","fo":"ferrais","fon":"fon","fr":"franzos","fr-CA":"franzos canadais","fr-CH":"franzos svizzer","frc":"frc","frm":"franzos mesaun","fro":"franzos vegl","frr":"fris dal nord","frs":"fris da l’ost","fur":"friulan","fy":"fris","ga":"irlandais","gaa":"ga","gay":"gayo","gba":"gbaya","gd":"gaelic scot","gez":"geez","gil":"gilbertais","gl":"galician","gmh":"tudestg mesaun","gn":"guarani","goh":"vegl tudestg da scrittira","gon":"gondi","gor":"gorontalo","got":"gotic","grb":"grebo","grc":"grec vegl","gsw":"tudestg svizzer","gu":"gujarati","guz":"guz","gv":"manx","gwi":"gwichʼin","ha":"haussa","hai":"haida","haw":"hawaian","he":"ebraic","hi":"hindi","hil":"hiligaynon","hit":"ettitic","hmn":"hmong","ho":"hiri motu","hr":"croat","hsb":"aut sorb","ht":"haitian","hu":"ungarais","hup":"hupa","hy":"armen","hz":"herero","ia":"interlingua","iba":"iban","id":"indonais","ie":"interlingue","ig":"igbo","ii":"sichuan yi","ik":"inupiak","ilo":"ilocano","inh":"ingush","io":"ido","is":"islandais","it":"talian","iu":"inuktitut","ja":"giapunais","jbo":"lojban","jgo":"jgo","jmc":"jmc","jpr":"giudaic-persian","jrb":"giudaic-arab","jv":"javanais","ka":"georgian","kaa":"karakalpak","kab":"kabyle","kac":"kachin","kaj":"jju","kam":"kamba","kaw":"kawi","kbd":"kabardic","kcg":"tyap","kde":"kde","kea":"kea","kfo":"koro","kg":"kongo","kha":"khasi","kho":"khotanais","khq":"khq","ki":"kikuyu","kj":"kuanyama","kk":"casac","kkj":"kkj","kl":"grönlandais","kln":"kln","km":"cambodschan","kmb":"kimbundu","kn":"kannada","ko":"corean","kok":"konkani","kos":"kosraean","kpe":"kpelle","kr":"kanuri","krc":"karachay-balkar","krl":"carelian","kru":"kurukh","ks":"kashmiri","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"curd","kum":"kumuk","kut":"kutenai","kv":"komi","kw":"cornic","ky":"kirghis","la":"latin","lad":"ladino","lag":"lag","lah":"lahnda","lam":"lamba","lb":"luxemburgais","lez":"lezghian","lg":"ganda","li":"limburgais","lkt":"lkt","ln":"lingala","lo":"laot","lol":"lomongo","lou":"lou","loz":"lozi","lrc":"lrc","lt":"lituan","lu":"luba-katanga","lua":"luba-lulua","lui":"luiseno","lun":"lunda","luo":"luo","lus":"lushai","luy":"luy","lv":"letton","mad":"madurais","mag":"magahi","mai":"maithili","mak":"makassar","man":"mandingo","mas":"masai","mdf":"moksha","mdr":"mandar","men":"mende","mer":"mer","mfe":"mfe","mg":"malagassi","mga":"irlandais mesaun","mgh":"mgh","mgo":"mgo","mh":"marschallais","mi":"maori","mic":"micmac","min":"minangkabau","mk":"macedon","ml":"malayalam","mn":"mongolic","mnc":"manchu","mni":"manipuri","moh":"mohawk","mos":"mossi","mr":"marathi","ms":"malaic","mt":"maltais","mua":"mua","mul":"pluriling","mus":"creek","mwl":"mirandais","mwr":"marwari","my":"birman","myv":"erzya","mzn":"mzn","na":"nauru","nap":"neapolitan","naq":"naq","nb":"norvegais bokmål","nd":"ndebele dal nord","nds":"bass tudestg","nds-NL":"bass tudestg (Pajais Bass)","ne":"nepalais","new":"newari","ng":"ndonga","nia":"nias","niu":"niue","nl":"ollandais","nl-BE":"flam","nmg":"nmg","nn":"norvegiais nynorsk","nnh":"nnh","no":"norvegiais","nog":"nogai","non":"nordic vegl","nqo":"n’ko","nr":"ndebele dal sid","nso":"sotho dal nord","nus":"nus","nv":"navajo","nwc":"newari classic","ny":"nyanja","nym":"nyamwezi","nyn":"nyankole","nyo":"nyoro","nzi":"nzima","oc":"occitan","oj":"ojibwa","om":"oromo","or":"oriya","os":"ossetic","osa":"osage","ota":"tirc ottoman","pa":"punjabi","pag":"pangasinan","pal":"pahlavi","pam":"pampanga","pap":"papiamento","pau":"palau","pcm":"pcm","peo":"persian vegl","phn":"fenizian","pi":"pali","pl":"polac","pon":"ponapean","prg":"prg","pro":"provenzal vegl","ps":"paschto","pt":"portugais","pt-BR":"portugais brasilian","pt-PT":"portugais iberian","qu":"quechua","raj":"rajasthani","rap":"rapanui","rar":"rarotonga","rm":"rumantsch","rn":"rundi","ro":"rumen","ro-MD":"moldav","rof":"rof","rom":"romani","root":"root","ru":"russ","rup":"aromunic","rw":"kinyarwanda","rwk":"rwk","sa":"sanscrit","sad":"sandawe","sah":"jakut","sam":"arameic samaritan","saq":"saq","sas":"sasak","sat":"santali","sbp":"sbp","sc":"sard","scn":"sicilian","sco":"scot","sd":"sindhi","se":"sami dal nord","seh":"seh","sel":"selkup","ses":"ses","sg":"sango","sga":"irlandais vegl","sh":"serbo-croat","shi":"shi","shn":"shan","si":"singalais","sid":"sidamo","sk":"slovac","sl":"sloven","sm":"samoan","sma":"sami dal sid","smj":"sami lule","smn":"sami inari","sms":"sami skolt","sn":"shona","snk":"soninke","so":"somali","sog":"sogdian","sq":"albanais","sr":"serb","srn":"sranan tongo","srr":"serer","ss":"swazi","st":"sotho dal sid","su":"sundanais","suk":"sukuma","sus":"susu","sux":"sumeric","sv":"svedais","sw":"suahili","sw-CD":"suahili (Republica Democratica dal Congo)","syc":"siric classic","syr":"siric","ta":"tamil","te":"telugu","tem":"temne","teo":"teo","ter":"tereno","tet":"tetum","tg":"tadjik","th":"tailandais","ti":"tigrinya","tig":"tigre","tiv":"tiv","tk":"turkmen","tkl":"tokelau","tl":"tagalog","tlh":"klingonic","tli":"tlingit","tmh":"tamasheq","tn":"tswana","to":"tonga","tog":"lingua tsonga","tpi":"tok pisin","tr":"tirc","ts":"tsonga","tsi":"tsimshian","tt":"tatar","tum":"tumbuka","tvl":"tuvalu","tw":"twi","twq":"twq","ty":"tahitian","tyv":"tuvinian","tzm":"tzm","udm":"udmurt","ug":"uiguric","uga":"ugaritic","uk":"ucranais","umb":"mbundu","und":"linguas betg determinadas","ur":"urdu","uz":"usbec","vai":"vai","ve":"venda","vi":"vietnamais","vo":"volapuk","vot":"votic","vun":"vun","wa":"vallon","wae":"wae","wal":"walamo","war":"waray","was":"washo","wo":"wolof","xal":"kalmuk","xh":"xhosa","xog":"xog","yao":"yao","yap":"yapais","yav":"yav","yi":"jiddic","yo":"yoruba","yue":"yue","za":"zhuang","zap":"zapotec","zbl":"simbols da Bliss","zen":"zenaga","zgh":"zgh","zh":"chinais","zh-Hans":"chinais simplifitgà","zh-Hant":"chinais tradiziunal","zu":"zulu","zun":"zuni","zxx":"nagins cuntegns linguistics","zza":"zaza"},"short":{"az":"aserbeidschanic","en-GB":"englais britannic","en-US":"englais american"},"narrow":{}},"region":{"long":{"142":"Asia","143":"Asia Centrala","145":"Asia dal Vest","150":"Europa","151":"Europa Orientala","154":"Europa dal Nord","155":"Europa dal Vest","202":"202","419":"America Latina","001":"mund","002":"Africa","003":"America dal Nord","005":"America dal Sid","009":"Oceania","011":"Africa dal Vest","013":"America Centrala","014":"Africa da l’Ost","015":"Africa dal Nord","017":"Africa Centrala","018":"Africa Meridiunala","019":"America dal Nord, America Centrala ed America dal Sid","021":"021","029":"Caribica","030":"Asia da l’Ost","034":"Asia dal Sid","035":"Asia dal Sidost","039":"Europa dal Sid","053":"Australia e Nova Zelanda","054":"Melanesia","057":"Regiun Micronesica","061":"Polinesia","AC":"AC","AD":"Andorra","AE":"Emirats Arabs Unids","AF":"Afghanistan","AG":"Antigua e Barbuda","AI":"Anguilla","AL":"Albania","AM":"Armenia","AO":"Angola","AQ":"Antarctica","AR":"Argentinia","AS":"Samoa Americana","AT":"Austria","AU":"Australia","AW":"Aruba","AX":"Inslas Aland","AZ":"Aserbaidschan","BA":"Bosnia ed Erzegovina","BB":"Barbados","BD":"Bangladesch","BE":"Belgia","BF":"Burkina Faso","BG":"Bulgaria","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BL":"Son Barthélemy","BM":"Bermudas","BN":"Brunei","BO":"Bolivia","BQ":"BQ","BR":"Brasilia","BS":"Bahamas","BT":"Bhutan","BV":"Insla Bouvet","BW":"Botswana","BY":"Bielorussia","BZ":"Belize","CA":"Canada","CC":"Inslas Cocos","CD":"Republica Democratica dal Congo","CF":"Republica Centralafricana","CG":"Congo","CH":"Svizra","CI":"Costa d’Ivur","CK":"Inslas Cook","CL":"Chile","CM":"Camerun","CN":"China","CO":"Columbia","CP":"CP","CR":"Costa Rica","CU":"Cuba","CV":"Cap Verd","CW":"CW","CX":"Insla da Christmas","CY":"Cipra","CZ":"Republica Tscheca","DE":"Germania","DG":"DG","DJ":"Dschibuti","DK":"Danemarc","DM":"Dominica","DO":"Republica Dominicana","DZ":"Algeria","EA":"EA","EC":"Ecuador","EE":"Estonia","EG":"Egipta","EH":"Sahara Occidentala","ER":"Eritrea","ES":"Spagna","ET":"Etiopia","EU":"Uniun europeica","EZ":"EZ","FI":"Finlanda","FJ":"Fidschi","FK":"Inslas dal Falkland","FM":"Micronesia","FO":"Inslas Feroe","FR":"Frantscha","GA":"Gabun","GB":"Reginavel Unì","GD":"Grenada","GE":"Georgia","GF":"Guyana Franzosa","GG":"Guernsey","GH":"Ghana","GI":"Gibraltar","GL":"Grönlanda","GM":"Gambia","GN":"Guinea","GP":"Guadeloupe","GQ":"Guinea Equatoriala","GR":"Grezia","GS":"Georgia dal Sid e las Inslas Sandwich dal Sid","GT":"Guatemala","GU":"Guam","GW":"Guinea-Bissau","GY":"Guyana","HK":"Regiun d’administraziun speziala da Hongkong, China","HM":"Inslas da Heard e da McDonald","HN":"Honduras","HR":"Croazia","HT":"Haiti","HU":"Ungaria","IC":"IC","ID":"Indonesia","IE":"Irlanda","IL":"Israel","IM":"Insla da Man","IN":"India","IO":"Territori Britannic en l’Ocean Indic","IQ":"Irac","IR":"Iran","IS":"Islanda","IT":"Italia","JE":"Jersey","JM":"Giamaica","JO":"Jordania","JP":"Giapun","KE":"Kenia","KG":"Kirghisistan","KH":"Cambodscha","KI":"Kiribati","KM":"Comoras","KN":"Saint Kitts e Nevis","KP":"Corea dal Nord","KR":"Corea dal Sid","KW":"Kuwait","KY":"Inslas Cayman","KZ":"Kasachstan","LA":"Laos","LB":"Libanon","LC":"Saint Lucia","LI":"Liechtenstein","LK":"Sri Lanka","LR":"Liberia","LS":"Lesotho","LT":"Lituania","LU":"Luxemburg","LV":"Lettonia","LY":"Libia","MA":"Maroc","MC":"Monaco","MD":"Moldavia","ME":"Montenegro","MF":"Saint Martin","MG":"Madagascar","MH":"Inslas da Marshall","MK":"MK","ML":"Mali","MM":"Myanmar","MN":"Mongolia","MO":"Regiun d’administraziun speziala Macao, China","MP":"Inslas Mariannas dal Nord","MQ":"Martinique","MR":"Mauretania","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Maldivas","MW":"Malawi","MX":"Mexico","MY":"Malaisia","MZ":"Mosambic","NA":"Namibia","NC":"Nova Caledonia","NE":"Niger","NF":"Insla Norfolk","NG":"Nigeria","NI":"Nicaragua","NL":"Pajais Bass","NO":"Norvegia","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"Nova Zelanda","OM":"Oman","PA":"Panama","PE":"Peru","PF":"Polinesia Franzosa","PG":"Papua Nova Guinea","PH":"Filippinas","PK":"Pakistan","PL":"Pologna","PM":"Saint Pierre e Miquelon","PN":"Pitcairn","PR":"Puerto Rico","PS":"Territori Palestinais","PT":"Portugal","PW":"Palau","PY":"Paraguai","QA":"Katar","QO":"Oceania Periferica","RE":"Réunion","RO":"Rumenia","RS":"Serbia","RU":"Russia","RW":"Ruanda","SA":"Arabia Saudita","SB":"Salomonas","SC":"Seychellas","SD":"Sudan","SE":"Svezia","SG":"Singapur","SH":"Sontg’Elena","SI":"Slovenia","SJ":"Svalbard e Jan Mayen","SK":"Slovachia","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalia","SR":"Surinam","SS":"SS","ST":"São Tomé e Principe","SV":"El Salvador","SX":"SX","SY":"Siria","SZ":"Swaziland","TA":"TA","TC":"Inslas Turks e Caicos","TD":"Tschad","TF":"Territoris Franzos Meridiunals","TG":"Togo","TH":"Tailanda","TJ":"Tadschikistan","TK":"Tokelau","TL":"Timor da l’Ost","TM":"Turkmenistan","TN":"Tunesia","TO":"Tonga","TR":"Tirchia","TT":"Trinidad e Tobago","TV":"Tuvalu","TW":"Taiwan","TZ":"Tansania","UA":"Ucraina","UG":"Uganda","UM":"Inslas pitschnas perifericas dals Stadis Unids da l’America","UN":"UN","US":"Stadis Unids da l’America","UY":"Uruguay","UZ":"Usbekistan","VA":"Citad dal Vatican","VC":"Saint Vincent e las Grenadinas","VE":"Venezuela","VG":"Inslas Virginas Britannicas","VI":"Inslas Virginas Americanas","VN":"Vietnam","VU":"Vanuatu","WF":"Wallis e Futuna","WS":"Samoa","XA":"XA","XB":"XB","XK":"XK","YE":"Jemen","YT":"Mayotte","ZA":"Africa dal Sid","ZM":"Sambia","ZW":"Simbabwe","ZZ":"Regiun betg encouschenta u nunvalaivla"},"short":{"GB":"Reginavel Unì","HK":"Regiun d’administraziun speziala da Hongkong, China","MO":"Regiun d’administraziun speziala Macao, China","PS":"Territori Palestinais","US":"Stadis Unids da l’America"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"arab","Aran":"Aran","Armi":"arameic imperial","Armn":"armen","Avst":"avestic","Bali":"balinais","Bamu":"Bamu","Bass":"Bass","Batk":"batak","Beng":"bengal","Bhks":"Bhks","Blis":"simbols da Bliss","Bopo":"bopomofo","Brah":"brahmi","Brai":"scrittira da Braille","Bugi":"buginais","Buhd":"buhid","Cakm":"chakma","Cans":"simbols autoctons canadais unifitgads","Cari":"carian","Cham":"cham","Cher":"cherokee","Chrs":"Chrs","Cirt":"cirth","Copt":"coptic","Cprt":"cipriot","Cyrl":"cirillic","Cyrs":"slav da baselgia vegl","Deva":"devanagari","Diak":"Diak","Dogr":"Dogr","Dsrt":"deseret","Dupl":"Dupl","Egyd":"egipzian demotic","Egyh":"egipzian ieratic","Egyp":"ieroglifas egipzianas","Elba":"Elba","Elym":"Elym","Ethi":"etiopic","Geok":"kutsuri","Geor":"georgian","Glag":"glagolitic","Gong":"Gong","Gonm":"Gonm","Goth":"gotic","Gran":"Gran","Grek":"grec","Gujr":"gujarati","Guru":"gurmukhi","Hanb":"Hanb","Hang":"hangul","Hani":"han","Hano":"hanunoo","Hans":"scrittira chinaisa simplifitgada","Hant":"scrittira chinaisa tradiziunala","Hatr":"Hatr","Hebr":"ebraic","Hira":"hiragana","Hluw":"Hluw","Hmng":"pahawn hmong","Hmnp":"Hmnp","Hrkt":"katanaka u hiragana","Hung":"ungarais vegl","Inds":"indus","Ital":"italic vegl","Jamo":"Jamo","Java":"javanais","Jpan":"giapunais","Kali":"kayah li","Kana":"katakana","Khar":"kharoshthi","Khmr":"khmer/cambodschan","Khoj":"Khoj","Kits":"Kits","Knda":"kannada","Kore":"corean","Kthi":"kaithi","Lana":"lanna","Laoo":"laot","Latf":"latin (scrittira gotica)","Latg":"latin (scrittira gaelica)","Latn":"latin","Lepc":"lepcha","Limb":"limbu","Lina":"linear A","Linb":"linear B","Lisu":"Lisu","Lyci":"lichic","Lydi":"lidic","Mahj":"Mahj","Maka":"Maka","Mand":"mandaic","Mani":"manicheic","Marc":"Marc","Maya":"ieroglifas maya","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"meroitic","Mlym":"malaisian","Modi":"Modi","Mong":"mongolic","Moon":"moon","Mroo":"Mroo","Mtei":"meetei mayek","Mult":"Mult","Mymr":"burmais","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"n’ko","Nshu":"Nshu","Ogam":"ogham","Olck":"ol chiki","Orkh":"orkhon","Orya":"oriya","Osge":"Osge","Osma":"osman","Palm":"Palm","Pauc":"Pauc","Perm":"permic vegl","Phag":"phags-pa","Phli":"pahlavi dad inscripziuns","Phlp":"pahlavi da psalms","Phlv":"pahlavi da cudeschs","Phnx":"fenizian","Plrd":"fonetica da Pollard","Prti":"partic dad inscripziuns","Qaag":"Qaag","Rjng":"rejang","Rohg":"Rohg","Roro":"rongorongo","Runr":"runic","Samr":"samaritan","Sara":"sarati","Sarb":"Sarb","Saur":"saurashtra","Sgnw":"lingua da segns","Shaw":"shavian","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"singalais","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"sundanais","Sylo":"syloti nagri","Syrc":"siric","Syre":"siric estrangelo","Syrj":"siric dal vest","Syrn":"siric da l’ost","Tagb":"tagbanwa","Takr":"Takr","Tale":"tai le","Talu":"tai lue","Taml":"tamil","Tang":"Tang","Tavt":"tai viet","Telu":"telugu","Teng":"tengwar","Tfng":"tifinagh","Tglg":"tagalog","Thaa":"thaana","Thai":"tailandais","Tibt":"tibetan","Tirh":"Tirh","Ugar":"ugaritic","Vaii":"vaii","Visp":"alfabet visibel","Wara":"Wara","Wcho":"Wcho","Xpeo":"persian vegl","Xsux":"scrittira a cugn sumeric-accadica","Yezi":"Yezi","Yiii":"yi","Zanb":"Zanb","Zinh":"ertà","Zmth":"notaziun matematica","Zsye":"Zsye","Zsym":"simbols","Zxxx":"linguas na scrittas","Zyyy":"betg determinà","Zzzz":"scrittira nunenconuschenta u nunvalaivla"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"peseta andorrana","AED":"dirham dals Emirats Arabs Unids","AFA":"afghani (1927–2002)","AFN":"afghani","ALK":"lek albanais (1947–1961)","ALL":"lek","AMD":"dram armen","ANG":"flurin da las Antillas Olandaisas","AOA":"kwanza angolan","AOK":"kwanza angolan (1977–1990)","AON":"nov kwanza angolan","AOR":"kwanza angolan reajustado","ARA":"austral argentin","ARL":"peso argentin ley","ARM":"peso argentin moneda nacional","ARP":"peso argentin (1983–1985)","ARS":"peso argentin","ATS":"schilling austriac","AUD":"dollar australian","AWG":"flurin da l’Aruba","AZM":"manat aserbaidschanic (1993–2006)","AZN":"manat aserbaidschanic","BAD":"dinar da la Bosnia ed Erzegovina","BAM":"marc convertibel bosniac","BAN":"nov dinar da la Bosnia ed Erzegovina","BBD":"dollar da Barbados","BDT":"taka bangladais","BEC":"franc beltg (convertibel)","BEF":"franc beltg","BEL":"franc beltg (finanzial)","BGL":"lev bulgar","BGM":"lev bulgar socialistic","BGN":"nov lev bulgar","BGO":"vegl lev bulgar","BHD":"dinar dal Bahrain","BIF":"franc dal Burundi","BMD":"dollar da las Bermudas","BND":"dollar dal Brunei","BOB":"boliviano","BOL":"vegl boliviano","BOP":"peso bolivian","BOV":"mvdol bolivian","BRB":"cruzeiro novo brasilian (1967–1986)","BRC":"cruzado brasilian","BRE":"cruzeiro brasilian (1990–1993)","BRL":"real brasilian","BRN":"cruzado novo brasilian","BRR":"cruzeiro brasilian","BRZ":"vegl cruzeiro brasilian","BSD":"dollar da las Bahamas","BTN":"ngultrum butanais","BUK":"Kyat burmais","BWP":"pula da la Botswana","BYB":"nov rubel bieloruss (1994–1999)","BYN":"rubel bieloruss","BYR":"rubel bieloruss (2000–2016)","BZD":"dollar dal Belize","CAD":"dollar canadais","CDF":"franc congolais","CHE":"euro WIR","CHF":"franc svizzer","CHW":"franc WIR","CLE":"escudo chilen","CLF":"unidades de fomento chilenas","CLP":"peso chilen","CNH":"CNH","CNX":"CNX","CNY":"yuan renminbi chinais","COP":"peso columbian","COU":"unidad de valor real","CRC":"colon da la Costa Rica","CSD":"vegl dinar serb","CSK":"cruna tschecoslovaca","CUC":"CUC","CUP":"peso cuban","CVE":"escudo dal Cap Verd","CYP":"glivra cipriota","CZK":"cruna tscheca","DDM":"marc da la Germania da l’Ost","DEM":"marc tudestg","DJF":"franc dal Dschibuti","DKK":"cruna danaisa","DOP":"peso dominican","DZD":"dinar algerian","ECS":"sucre equadorian","ECV":"unitad da scuntrada da l’Ecuador","EEK":"cruna estona","EGP":"glivra egipziana","ERN":"nakfa eritreic","ESA":"peseta spagnola (conto A)","ESB":"peseta spagnola (conto convertibel)","ESP":"peseta spagnola","ETB":"birr etiopic","EUR":"euro","FIM":"marc finlandais","FJD":"dollar dal Fidschi","FKP":"glivra dal Falkland","FRF":"franc franzos","GBP":"glivra sterlina","GEK":"kupon larit georgian","GEL":"lari georgian","GHC":"cedi ghanais (1979–2007)","GHS":"cedi ghanais","GIP":"glivra da Gibraltar","GMD":"dalasi gambic","GNF":"franc da la Guinea","GNS":"syli da la Guinea","GQE":"ekwele da la Guinea Equatoriala","GRD":"drachma greca","GTQ":"quetzal da la Guatemala","GWE":"escudo da la Guinea Portugaisa","GWP":"peso da la Guinea-Bissau","GYD":"dollar da la Guyana","HKD":"dollar da Hongkong","HNL":"lempira hondurian","HRD":"dinar croat","HRK":"kuna croata","HTG":"gourde haitian","HUF":"forint ungarais","IDR":"rupia indonaisa","IEP":"glivra indonaisa","ILP":"glivra israeliana","ILR":"vegl sheqel israelian","ILS":"sheqel","INR":"rupia indica","IQD":"dinar iracais","IRR":"rial iranais","ISJ":"veglia cruna islandaisa","ISK":"cruna islandaisa","ITL":"lira taliana","JMD":"dollar giamaican","JOD":"dinar jordanic","JPY":"yen giapunais","KES":"schilling kenian","KGS":"som kirghis","KHR":"riel cambodschan","KMF":"franc comorian","KPW":"won da la Corea dal Nord","KRH":"hwan da la Corea dal Sid","KRO":"vegl won da la Corea dal Sid","KRW":"won da la Corea dal Sid","KWD":"dinar dal Kuwait","KYD":"dollar da las Inslas Cayman","KZT":"tenge casac","LAK":"kip laot","LBP":"glivra libanaisa","LKR":"rupia da la Sri Lanka","LRD":"dollar liberian","LSL":"loti dal Lesotho","LTL":"litas lituan","LTT":"talonas lituan","LUC":"franc convertibel luxemburgais","LUF":"franc luxemburgais","LUL":"franc finanzial luxemburgais","LVL":"lats letton","LVR":"rubel letton","LYD":"dinar libic","MAD":"dirham marocan","MAF":"franc marocan","MCF":"franc monegas","MDC":"cupon moldav","MDL":"leu moldav","MGA":"ariary madagasc","MGF":"franc madagasc","MKD":"dinar da la Macedonia","MKN":"vegl dinar macedon","MLF":"franc dal Mali","MMK":"Kyat dal Myanmar","MNT":"tugrik mongolic","MOP":"pataca dal Macao","MRO":"ouguiya da la Mauretania (1973–2017)","MRU":"ouguiya da la Mauretania","MTL":"lira maltaisa","MTP":"glivra maltaisa","MUR":"rupia dal Mauritius","MVP":"rupia da las Maledivas","MVR":"rufiyaa da las Maledivas","MWK":"kwacha dal Malawi","MXN":"peso mexican","MXP":"peso d’argient mexican (1861–1992)","MXV":"unidad de inversion mexicana (UDI)","MYR":"ringgit da la Malaisia","MZE":"escudo dal mozambican","MZM":"vegl metical mozambican","MZN":"metical dal mozambican","NAD":"dollar namibian","NGN":"naira nigeriana","NIC":"cordoba nicaraguan","NIO":"cordoba oro nicaraguan","NLG":"flurin ollandais","NOK":"cruna norvegiaisa","NPR":"rupia nepalaisa","NZD":"dollar da la Nova Zelanda","OMR":"rial da l’Oman","PAB":"balboa dal Panama","PEI":"inti peruan","PEN":"sol peruan","PES":"sol peruan (1863–1965)","PGK":"kina da la Papua Nova Guinea","PHP":"peso filippin","PKR":"rupia pakistana","PLN":"zloty polac","PLZ":"zloty polac (1950–1995)","PTE":"escudo portugais","PYG":"guarani paraguaian","QAR":"riyal da Katar","RHD":"dollar rodesian","ROL":"vegl leu rumen","RON":"leu rumen","RSD":"dinar serb","RUB":"rubel russ (nov)","RUR":"rubel russ (vegl)","RWF":"franc ruandais","SAR":"riyal saudit","SBD":"dollar da las Salomonas","SCR":"rupia da las Seychellas","SDD":"dinar sudanais","SDG":"glivra sudanaisa","SDP":"glivra sudanaisa (1956–2007)","SEK":"cruna svedaisa","SGD":"dollar dal Singapur","SHP":"glivra da Sontg’Elena","SIT":"tolar sloven","SKK":"cruna slovaca","SLL":"leone da la Sierra Leone","SOS":"schilling somalian","SRD":"dollar surinam","SRG":"flurin surinam","SSP":"SSP","STD":"dobra da São Tomé e Principe (1977–2017)","STN":"dobra da São Tomé e Principe","SUR":"rubel sovietic","SVC":"colon da l’El Salvador","SYP":"glivra siriana","SZL":"lilangeni dal Swaziland","THB":"baht tailandais","TJR":"rubel dal Tadschikistan","TJS":"somoni dal Tadschikistan","TMM":"manat turkmen","TMT":"TMT","TND":"dinar tunesian","TOP":"pa’anga da Tonga","TPE":"escudo da Timor","TRL":"lira tirca","TRY":"nova lira tirca","TTD":"dollar da Trinidad e Tobago","TWD":"nov dollar taiwanais","TZS":"schilling tansanian","UAH":"hryvnia ucranais","UAK":"karbovanetz ucranais","UGS":"schilling ucranais","UGX":"schilling ugandais","USD":"dollar dals Stadis Unids da l’America","USN":"dollar dals Stadis Unids da l’America (proxim di)","USS":"dollar dals Stadis Unids da l’America (medem di)","UYI":"peso da l’Uruguay (unidades indexadas)","UYP":"nov peso da l’Uruguay (1975–1993)","UYU":"peso da l’Uruguay","UYW":"UYW","UZS":"sum usbec","VEB":"bolivar venezuelan (1871–2008)","VEF":"bolivar venezuelan (2008–2018)","VES":"bolivar venezuelan","VND":"dong vietnamais","VNN":"vegl dong vietnamais","VUV":"vatu dal Vanuatu","WST":"tala da la Samoa","XAF":"franc CFA BEAC","XAG":"argient","XAU":"aur","XBA":"unitad europeica cumponida","XBB":"XBB","XBC":"unitad dal quint europeica (XBC)","XBD":"unitad dal quint europeica (XBD)","XCD":"dollar da la Caribica Orientala","XDR":"dretgs da prelevaziun spezials","XEU":"XEU","XFO":"franc d’aur franzos","XFU":"franc UIC franzos","XOF":"franc CFA BCEAO","XPD":"palladi","XPF":"franc CFP","XPT":"platin","XRE":"fonds RINET","XSU":"XSU","XTS":"code per verifitgar la valuta","XUA":"XUA","XXX":"valuta nunenconuschenta","YDD":"dinar dal Jemen","YER":"rial dal Jemen","YUD":"dinar jugoslav (1966–1990)","YUM":"nov dinar jugoslav","YUN":"dinar jugoslav convertibel","YUR":"dinar jugoslav refurmà","ZAL":"rand sidafrican (finanzial)","ZAR":"rand sidafrican","ZMK":"kwacha da la sambia (1968–2012)","ZMW":"kwacha da la sambia","ZRN":"nov zaire dal Zaire","ZRZ":"zaire dal Zaire","ZWD":"dollar dal Simbabwe","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"rm"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
