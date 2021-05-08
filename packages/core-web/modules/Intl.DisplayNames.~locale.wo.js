import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import IsArray from "@mrhenry/core-web/helpers/_ESAbstract.IsArray";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import ArraySpeciesCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArraySpeciesCreate";
import ArrayCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArrayCreate";
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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("wo").length
)) {
// Intl.DisplayNames.~locale.wo
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"af":"Afrikaans","agq":"agq","ak":"ak","am":"Amharik","ar":"Araab","ar-001":"Araab (001)","as":"Asame","asa":"asa","ast":"ast","az":"Aserbayjane","ba":"Baskir","ban":"Bali","bas":"bas","be":"Belaris","bem":"Bemba","bez":"bez","bg":"Bilgaar","bm":"bm","bn":"Baŋla","bo":"Tibetan","br":"Breton","brx":"brx","bs":"Bosñak","ca":"Katalan","ccp":"ccp","ce":"ce","ceb":"Sibiyanoo","cgg":"cgg","chm":"Mari","chr":"Ceroki","ckb":"Kurdi gu Diggu","co":"Kors","cs":"Cek","cu":"cu","cy":"Wels","da":"Danuwa","dav":"dav","de":"Almaa","de-AT":"Almaa bu Ótiriis","de-CH":"Almaa bu Kawe bu Swis","dje":"dje","doi":"doi","dsb":"Sorab-Suuf","dua":"dua","dv":"Diweyi","dyo":"dyo","dz":"Dsongkaa","ebu":"ebu","ee":"ee","el":"Gereg","en":"Àngale","en-AU":"Àngale bu Óstraali","en-CA":"Àngale bu Kanadaa","en-GB":"Àngale bu Grànd Brëtaañ","en-US":"Àngale bu Amerik","eo":"Esperantoo","es":"Español","es-419":"Español bu Amerik Latin","es-ES":"Español bu Tugël","es-MX":"Español bu Meksik","et":"Estoñiye","eu":"Bask","ewo":"ewo","fa":"Pers","fa-AF":"Pers (Afganistaŋ)","ff":"Pël","fi":"Feylànde","fil":"Filipiye","fo":"Feroos","fr":"Farañse","fr-CA":"Frañse bu Kanadaa","fr-CH":"Frañse bu Swis","frc":"frc","fur":"fur","fy":"fy","ga":"Irlànde","gd":"Galuwaa bu Ekos","gl":"Galisiye","gn":"Garani","gsw":"gsw","gu":"Gujarati","guz":"guz","gv":"gv","ha":"Hawsa","haw":"Hawaye","he":"Ebrë","hi":"Endo","hil":"Hiligaynon","hmn":"hmn","hr":"Krowat","hsb":"Sorab-Kaw","ht":"Kereyolu Ayti","hu":"Ongruwaa","hy":"Armaniye","hz":"Herero","ia":"ia","ibb":"Ibibiyo","id":"Endonesiye","ig":"Igbo","ii":"ii","is":"Islànde","it":"Italiye","iu":"Inuktitit","ja":"Sapone","jgo":"jgo","jmc":"jmc","jv":"jv","ka":"Sorsiye","kab":"kab","kam":"kam","kde":"kde","kea":"kea","kgp":"kgp","khq":"khq","ki":"ki","kk":"Kasax","kkj":"kkj","kl":"kl","kln":"kln","km":"Xmer","kn":"Kannadaa","ko":"Koreye","kok":"Konkani","kr":"Kanuri","kru":"Kuruks","ks":"Kashmiri","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"Kurdi","kw":"kw","ky":"Kirgiis","la":"Latin","lag":"lag","lb":"Liksàmbursuwaa","lg":"lg","lij":"lij","lkt":"lkt","ln":"ln","lo":"Laaw","lou":"lou","lrc":"lrc","lt":"Lituyaniye","lu":"lu","luo":"luo","luy":"luy","lv":"Letoniye","mai":"mai","mas":"mas","men":"Mende","mer":"mer","mfe":"mfe","mg":"Malagasi","mgh":"mgh","mgo":"mgo","mi":"Mawri","mk":"Maseduwaane","ml":"Malayalam","mn":"Mongoliye","mni":"Manipuri","moh":"Mowak","mr":"Marati","ms":"Malay","mt":"Malt","mua":"mua","mul":"mul","my":"Birmes","mzn":"mzn","naq":"naq","nb":"nb","nd":"nd","nds":"nds","nds-NL":"nds (Peyi Baa)","ne":"Nepale","niu":"Niweyan","nl":"Neyerlànde","nl-BE":"Neyerlànde (Belsig)","nmg":"nmg","nn":"nn","nnh":"nnh","no":"Nerwesiye","nus":"nus","nv":"nv","ny":"Sewa","nyn":"nyn","oc":"Ositan","om":"Oromo","or":"Oja","os":"os","pa":"Punjabi","pap":"Papiyamento","pcm":"pcm","pl":"Polone","prg":"prg","ps":"Pasto","pt":"Purtugees","pt-BR":"Purtugees bu Bresil","pt-PT":"Portugees bu Tugël","qu":"Kesuwa","quc":"Kishe","rm":"Romaas","rn":"rn","ro":"Rumaniyee","ro-MD":"Rumaniyee (Moldawi)","rof":"rof","ru":"Rus","rw":"Kinyarwànda","rwk":"rwk","sa":"Sanskrit","sah":"Saxa","saq":"saq","sat":"Santali","sbp":"sbp","sd":"Sindi","se":"Penku Sami","seh":"seh","ses":"ses","sg":"sg","shi":"shi","si":"Sinala","sk":"Eslowaki (Eslowak)","sl":"Esloweniye","sm":"sm","sma":"Sami gu Saalum","smj":"Lule Sami","smn":"Inari Sami","sms":"Eskolt Sami","sn":"sn","so":"Somali (làkk)","sq":"Albane","sr":"Serb","st":"st","su":"su","sv":"Suweduwaa","sw":"sw","sw-CD":"sw (CD)","syr":"Siryak","ta":"Tamil","te":"Telugu","teo":"teo","tg":"Tajis","th":"Tay","ti":"Tigriña","tk":"Tirkmen","to":"Tongan","tr":"Tirk","tt":"Tatar","twq":"twq","tzm":"Tamasis gu Digg Atlaas","ug":"Uygur","uk":"Ikreniye","und":"Làkk wuñ xamul","ur":"Urdu","uz":"Usbek","vai":"vai","ve":"Wenda","vi":"Wiyetnaamiye","vo":"vo","vun":"vun","wae":"wae","wo":"Wolof","xh":"xh","xog":"xog","yav":"yav","yi":"Yidis","yo":"Yoruba","yue":"yue","zgh":"zgh","zh":"Sinuwaa","zh-Hans":"Sinuwaa buñ woyofal","zh-Hant":"Sinuwaa bu cosaan","zu":"zu","zxx":"zxx"},"short":{"az":"Aserbayjane","en-GB":"Àngale (RI)","en-US":"Àngale (ES)"},"narrow":{}},"region":{"long":{"142":"142","143":"143","145":"145","150":"150","151":"151","154":"154","155":"155","202":"202","419":"419","001":"001","002":"002","003":"003","005":"005","009":"009","011":"011","013":"013","014":"014","015":"015","017":"017","018":"018","019":"019","021":"021","029":"029","030":"030","034":"034","035":"035","039":"039","053":"053","054":"054","057":"057","061":"061","AC":"AC","AD":"Andoor","AE":"Emira Arab Ini","AF":"Afganistaŋ","AG":"Antiguwa ak Barbuda","AI":"Angiiy","AL":"Albani","AM":"Armeni","AO":"Àngolaa","AQ":"Antarktik","AR":"Arsàntin","AS":"Samowa bu Amerig","AT":"Ótiriis","AU":"Ostarali","AW":"Aruba","AX":"Duni Aalànd","AZ":"Aserbayjaŋ","BA":"Bosni Ersegowin","BB":"Barbad","BD":"Bengalades","BE":"Belsig","BF":"Burkina Faaso","BG":"Bilgari","BH":"Bahreyin","BI":"Burundi","BJ":"Benee","BL":"Saŋ Bartalemi","BM":"Bermid","BN":"Burney","BO":"Boliwi","BQ":"BQ","BR":"Beresil","BS":"Bahamas","BT":"Butaŋ","BV":"Dunu Buwet","BW":"Botswana","BY":"Belaris","BZ":"Belis","CA":"Kanadaa","CC":"Duni Koko (Kilin)","CD":"CD","CF":"Repiblik Sàntar Afrik","CG":"CG","CH":"Siwis","CI":"Kodiwaar","CK":"Duni Kuuk","CL":"Sili","CM":"Kamerun","CN":"Siin","CO":"Kolombi","CP":"CP","CR":"Kosta Rika","CU":"Kuba","CV":"Kabo Werde","CW":"Kursawo","CX":"Dunu Kirismas","CY":"Siipar","CZ":"Réewum Cek","DE":"Almaañ","DG":"DG","DJ":"Jibuti","DK":"Danmàrk","DM":"Dominik","DO":"Repiblik Dominiken","DZ":"Alseri","EA":"EA","EC":"Ekwaatër","EE":"Estoni","EG":"Esipt","EH":"EH","ER":"Eritere","ES":"Españ","ET":"Ecopi","EU":"EU","EZ":"EZ","FI":"Finlànd","FJ":"Fijji","FK":"Duni Falkland","FM":"Mikoronesi","FO":"Duni Faro","FR":"Faraans","GA":"Gaboŋ","GB":"Ruwaayom Ini","GD":"Garanad","GE":"Seworsi","GF":"Guyaan Farañse","GG":"Gernase","GH":"Gana","GI":"Sibraltaar","GL":"Girinlànd","GM":"Gàmbi","GN":"Gine","GP":"Guwaadelup","GQ":"Gine Ekuwatoriyal","GR":"Gerees","GS":"Seworsi di Sid ak Duni Sàndwiis di Sid","GT":"Guwatemala","GU":"Guwam","GW":"Gine-Bisaawóo","GY":"Giyaan","HK":"HK","HM":"Duni Hërd ak Duni MakDonald","HN":"Onduraas","HR":"Korowasi","HT":"Ayti","HU":"Ongari","IC":"IC","ID":"Indonesi","IE":"Irlànd","IL":"Israyel","IM":"Dunu Maan","IN":"End","IO":"Terituwaaru Brëtaañ ci Oseyaa Enjeŋ","IQ":"Irag","IR":"Iraŋ","IS":"Islànd","IT":"Itali","JE":"Serse","JM":"Samayig","JO":"Sordani","JP":"Sàppoŋ","KE":"Keeña","KG":"Kirgistaŋ","KH":"Kàmboj","KI":"Kiribati","KM":"Komoor","KN":"Saŋ Kits ak Newis","KP":"Kore Noor","KR":"KR","KW":"Kowet","KY":"Duni Kaymaŋ","KZ":"Kasaxstaŋ","LA":"Lawos","LB":"Libaa","LC":"Saŋ Lusi","LI":"Liktensteyin","LK":"Siri Lànka","LR":"Liberiya","LS":"Lesoto","LT":"Litiyani","LU":"Liksàmbur","LV":"Letoni","LY":"Libi","MA":"Marog","MC":"Monako","MD":"Moldawi","ME":"Montenegoro","MF":"Saŋ Marteŋ","MG":"Madagaskaar","MH":"Duni Marsaal","MK":"Maseduwaan bëj Gànnaar","ML":"Mali","MM":"Miyanmaar","MN":"Mongoli","MO":"MO","MP":"Duni Mariyaan Noor","MQ":"Martinik","MR":"Mooritani","MS":"Mooseraa","MT":"Malt","MU":"Moriis","MV":"Maldiiw","MW":"Malawi","MX":"Meksiko","MY":"Malesi","MZ":"Mosàmbig","NA":"Namibi","NC":"Nuwel Kaledoni","NE":"Niiseer","NF":"Dunu Norfolk","NG":"Niseriya","NI":"Nikaraguwa","NL":"Peyi Baa","NO":"Norwees","NP":"Nepaal","NR":"Nawru","NU":"Niw","NZ":"Nuwel Selànd","OM":"Omaan","PA":"Panama","PE":"Peru","PF":"Polinesi Farañse","PG":"Papuwasi Gine Gu Bees","PH":"Filipin","PK":"Pakistaŋ","PL":"Poloñ","PM":"Saŋ Peer ak Mikeloŋ","PN":"Duni Pitkayirn","PR":"Porto Riko","PS":"PS","PT":"Portigaal","PW":"Palaw","PY":"Paraguwe","QA":"Kataar","QO":"QO","RE":"Reeñoo","RO":"Rumani","RS":"Serbi","RU":"Risi","RW":"Ruwànda","SA":"Arabi Sawudi","SB":"Duni Salmoon","SC":"Seysel","SD":"Sudaŋ","SE":"Suwed","SG":"Singapuur","SH":"Saŋ Eleen","SI":"Esloweni","SJ":"Swalbaar ak Jan Mayen","SK":"Eslowaki","SL":"Siyera Lewon","SM":"San Marino","SN":"Senegaal","SO":"Somali","SR":"Sirinam","SS":"Sudaŋ di Sid","ST":"Sawo Tome ak Pirinsipe","SV":"El Salwadoor","SX":"Sin Marten","SY":"Siri","SZ":"Suwasilànd","TA":"TA","TC":"Duni Tirk ak Kaykos","TD":"Càdd","TF":"Teer Ostraal gu Fraas","TG":"Togo","TH":"Taylànd","TJ":"Tajikistaŋ","TK":"Tokoloo","TL":"Timor Leste","TM":"Tirkmenistaŋ","TN":"Tinisi","TO":"Tonga","TR":"Tirki","TT":"Tirinite ak Tobago","TV":"Tuwalo","TW":"Taywan","TZ":"Taŋsani","UA":"Ikeren","UG":"Ugànda","UM":"Duni Amerig Utar meer","UN":"UN","US":"Etaa Sini","UY":"Uruge","UZ":"Usbekistaŋ","VA":"Site bu Watikaa","VC":"Saŋ Weesaa ak Garanadin","VE":"Wenesiyela","VG":"Duni Wirsin yu Brëtaañ","VI":"Duni Wirsin yu Etaa-sini","VN":"Wiyetnam","VU":"Wanuatu","WF":"Walis ak Futuna","WS":"Samowa","XA":"XA","XB":"XB","XK":"Kosowo","YE":"Yaman","YT":"Mayot","ZA":"Afrik di Sid","ZM":"Sàmbi","ZW":"Simbabwe","ZZ":"Gox buñ xamul"},"short":{"GB":"Ruwaayom Ini","HK":"Ooŋ Koŋ","MO":"Makaawo","PS":"PS","US":"Etaa Sini"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Araab","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Sirilik","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grek","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Buñ woyofal","Hant":"Cosaan","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jpan","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latin","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Luñ bindul","Zyyy":"Zyyy","Zzzz":"Mbind muñ xamul"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"AED","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"AOA","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"AUD","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"BHD","BIF":"BIF","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"Real bu Bresil","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"BWP","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"CAD","CDF":"CDF","CHE":"CHE","CHF":"CHF","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"Yuan bu Siin","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"CVE","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"DJF","DKK":"DKK","DOP":"DOP","DZD":"DZD","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"EGP","ERN":"ERN","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"ETB","EUR":"Euro","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"Pound bu Grànd Brëtaañ","GEK":"GEK","GEL":"GEL","GHC":"GHC","GHS":"GHS","GIP":"GIP","GMD":"GMD","GNF":"GNF","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"Rupee bu End","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"Yen bu Sapoŋ","KES":"KES","KGS":"KGS","KHR":"KHR","KMF":"KMF","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"LRD","LSL":"LSL","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"LYD","MAD":"MAD","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"MGA","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"MRO","MRU":"MRU","MTL":"MTL","MTP":"MTP","MUR":"MUR","MVP":"MVP","MVR":"MVR","MWK":"MWK","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"MZM","MZN":"MZN","NAD":"NAD","NGN":"NGN","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"Ruble bi Rsis","RUR":"RUR","RWF":"RWF","SAR":"SAR","SBD":"SBD","SCR":"SCR","SDD":"SDD","SDG":"SDG","SDP":"SDP","SEK":"SEK","SGD":"SGD","SHP":"SHP","SIT":"SIT","SKK":"SKK","SLL":"SLL","SOS":"SOS","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"STD","STN":"STN","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"SZL","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"TND","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"TZS","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"UGX","USD":"Dolaaru US","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"XAF","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"Franc CFA bu Afrik Sowwu-jant","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"Xaalis buñ Xamul","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"ZAR","ZMK":"ZMK","ZMW":"ZMW","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"wo"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
