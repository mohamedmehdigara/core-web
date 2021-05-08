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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("lu").length
)) {
// Intl.DisplayNames.~locale.lu
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"af":"af","agq":"agq","ak":"Liakan","am":"Liamhariki","ar":"Arabi","ar-001":"Arabi (001)","as":"as","asa":"asa","ast":"ast","az":"az","bas":"bas","be":"Belarusi","bem":"bem","bez":"bez","bg":"Bulegari","bm":"bm","bn":"Bengali","bo":"bo","br":"br","brx":"brx","bs":"bs","ca":"ca","ccp":"ccp","ce":"ce","ceb":"ceb","cgg":"cgg","chr":"chr","ckb":"ckb","co":"co","cs":"Tsheki","cu":"cu","cy":"cy","da":"da","dav":"dav","de":"Lizelumani","de-AT":"Lizelumani (Otilisi)","de-CH":"Lizelumani (Swise)","dje":"dje","doi":"doi","dsb":"dsb","dua":"dua","dyo":"dyo","dz":"dz","ebu":"ebu","ee":"ee","el":"Giliki","en":"Lingelesa","en-AU":"Lingelesa (Ositali)","en-CA":"Lingelesa (Kanada)","en-GB":"Lingelesa (Angeletele)","en-US":"Lingelesa (Ameriki)","eo":"eo","es":"Lihispania","es-419":"Lihispania (419)","es-ES":"Lihispania (Nsipani)","es-MX":"Lihispania (Meksike)","et":"et","eu":"eu","ewo":"ewo","fa":"Mpepajemi","fa-AF":"Mpepajemi (Afuganisita)","ff":"ff","fi":"fi","fil":"fil","fo":"fo","fr":"Mfwàlànsa","fr-CA":"Mfwàlànsa (Kanada)","fr-CH":"Mfwàlànsa (Swise)","frc":"frc","fur":"fur","fy":"fy","ga":"ga","gd":"gd","gl":"gl","gsw":"gsw","gu":"gu","guz":"guz","gv":"gv","ha":"Hausa","haw":"haw","he":"he","hi":"Hindi","hmn":"hmn","hr":"hr","hsb":"hsb","ht":"ht","hu":"Hongili","hy":"hy","ia":"ia","id":"Lindonezia","ig":"Igbo","ii":"ii","is":"is","it":"Litali","ja":"Liyapani","jgo":"jgo","jmc":"jmc","jv":"Java","ka":"ka","kab":"kab","kam":"kam","kde":"kde","kea":"kea","kgp":"kgp","khq":"khq","ki":"ki","kk":"kk","kkj":"kkj","kl":"kl","kln":"kln","km":"km","kn":"kn","ko":"Likoreya","kok":"kok","ks":"ks","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"ku","kw":"kw","ky":"ky","la":"la","lag":"lag","lb":"lb","lg":"lg","lij":"lij","lkt":"lkt","ln":"ln","lo":"lo","lou":"lou","lrc":"lrc","lt":"lt","lu":"Tshiluba","luo":"luo","luy":"luy","lv":"lv","mai":"mai","mas":"mas","mer":"mer","mfe":"mfe","mg":"mg","mgh":"mgh","mgo":"mgo","mi":"mi","mk":"mk","ml":"ml","mn":"mn","mni":"mni","mr":"mr","ms":"Limalezia","mt":"mt","mua":"mua","mul":"mul","my":"my","mzn":"mzn","naq":"naq","nb":"nb","nd":"nd","nds":"nds","nds-NL":"nds (Olandɛ)","ne":"nepali","nl":"olandi","nl-BE":"olandi (Belejiki)","nmg":"nmg","nn":"nn","nnh":"nnh","nus":"nus","nv":"nv","ny":"ny","nyn":"nyn","om":"om","or":"or","os":"os","pa":"Lipunjabi","pcm":"pcm","pl":"Mpoloni","prg":"prg","ps":"ps","pt":"Mputulugɛsi","pt-BR":"Mputulugɛsi (Mnulezile)","pt-PT":"Mputulugɛsi (Mputulugeshi)","qu":"qu","rm":"rm","rn":"rn","ro":"Liromani","ro-MD":"Liromani (Molidavi)","rof":"rof","ru":"Lirisi","rw":"kinyarwanda","rwk":"rwk","sa":"sa","sah":"sah","saq":"saq","sat":"sat","sbp":"sbp","sd":"sd","se":"se","seh":"seh","ses":"ses","sg":"sg","shi":"shi","si":"si","sk":"sk","sl":"sl","sm":"sm","smn":"smn","sn":"sn","so":"Lisomali","sq":"sq","sr":"sr","st":"st","su":"su","sv":"Lisuwidi","sw":"sw","sw-CD":"sw (Ditunga wa Kongu)","ta":"Mtamuili","te":"te","teo":"teo","tg":"tg","th":"Ntailandi","ti":"ti","tk":"tk","to":"to","tr":"Ntuluki","tt":"tt","twq":"twq","tzm":"tzm","ug":"ug","uk":"Nkrani","und":"und","ur":"Urdu","uz":"uz","vai":"vai","vi":"Liviyetinamu","vo":"vo","vun":"vun","wae":"wae","wo":"wo","xh":"xh","xog":"xog","yav":"yav","yi":"yi","yo":"Nyoruba","yue":"yue","zgh":"zgh","zh":"shinɛ","zh-Hans":"shinɛ (Hans)","zh-Hant":"shinɛ (Hant)","zu":"Nzulu","zxx":"zxx"},"short":{"az":"az","en-GB":"Lingelesa (Angeletele)","en-US":"Lingelesa (Ameriki)"},"narrow":{}},"region":{"long":{"142":"142","143":"143","145":"145","150":"150","151":"151","154":"154","155":"155","202":"202","419":"419","001":"001","002":"002","003":"003","005":"005","009":"009","011":"011","013":"013","014":"014","015":"015","017":"017","018":"018","019":"019","021":"021","029":"029","030":"030","034":"034","035":"035","039":"039","053":"053","054":"054","057":"057","061":"061","AC":"AC","AD":"Andore","AE":"Lemila alabu","AF":"Afuganisita","AG":"Antiga ne Barbuda","AI":"Angiye","AL":"Alubani","AM":"Ameni","AO":"Angola","AQ":"AQ","AR":"Alijantine","AS":"Samoa wa Ameriki","AT":"Otilisi","AU":"Ositali","AW":"Aruba","AX":"AX","AZ":"Ajelbayidja","BA":"Mbosini ne Hezegovine","BB":"Barebade","BD":"Benguladeshi","BE":"Belejiki","BF":"Bukinafaso","BG":"Biligari","BH":"Bahrene","BI":"Burundi","BJ":"Bene","BL":"BL","BM":"Bermuda","BN":"Brineyi","BO":"Mbolivi","BQ":"BQ","BR":"Mnulezile","BS":"Bahamase","BT":"Butani","BV":"BV","BW":"Mbotswana","BY":"Byelorisi","BZ":"Belize","CA":"Kanada","CC":"CC","CD":"Ditunga wa Kongu","CF":"Ditunga dya Afrika wa munkatshi","CG":"Kongu","CH":"Swise","CI":"Kotedivuale","CK":"Lutanda lua Kookɛ","CL":"Shili","CM":"Kamerune","CN":"Shine","CO":"Kolombi","CP":"CP","CR":"Kositarika","CU":"Kuba","CV":"Lutanda lua Kapevele","CW":"CW","CX":"CX","CY":"Shipele","CZ":"Ditunga dya Tsheka","DE":"Alemanu","DG":"DG","DJ":"Djibuti","DK":"Danemalaku","DM":"Duminiku","DO":"Ditunga wa Duminiku","DZ":"Alijeri","EA":"EA","EC":"Ekwatele","EE":"Esitoni","EG":"Mushidi","EH":"EH","ER":"Elitele","ES":"Nsipani","ET":"Etshiopi","EU":"EU","EZ":"EZ","FI":"Filande","FJ":"Fuji","FK":"Lutanda lua Maluni","FM":"Mikronezi","FO":"FO","FR":"Nfalanse","GA":"Ngabu","GB":"Angeletele","GD":"Ngelenade","GE":"Joriji","GF":"Giyane wa Nfalanse","GG":"GG","GH":"Ngana","GI":"Jibeletale","GL":"Ngowelande","GM":"Gambi","GN":"Ngine","GP":"Ngwadelupe","GQ":"Gine Ekwatele","GR":"Ngeleka","GS":"GS","GT":"Ngwatemala","GU":"Ngwame","GW":"Nginebisau","GY":"Ngiyane","HK":"HK","HM":"HM","HN":"Ondurase","HR":"Krowasi","HT":"Ayiti","HU":"Ongili","IC":"IC","ID":"Indonezi","IE":"Irelande","IL":"Isirayele","IM":"IM","IN":"Inde","IO":"Lutanda lwa Angeletele ku mbu wa Indiya","IQ":"Iraki","IR":"Ira","IS":"Isilande","IT":"Itali","JE":"JE","JM":"Jamaiki","JO":"Jodani","JP":"Japu","KE":"Kenya","KG":"Kigizisita","KH":"Kambodza","KI":"Kiribati","KM":"Komoru","KN":"Santu krístofe ne Neves","KP":"Kore wa muulu","KR":"Kore wa mwinshi","KW":"Koweti","KY":"Lutanda lua Kayima","KZ":"Kazakusita","LA":"Lawosi","LB":"Liba","LC":"Santu lisi","LI":"Lishuteni","LK":"Sirilanka","LR":"Liberiya","LS":"Lesoto","LT":"Litwani","LU":"Likisambulu","LV":"Letoni","LY":"Libi","MA":"Maroke","MC":"Monaku","MD":"Molidavi","ME":"ME","MF":"MF","MG":"Madagasikari","MH":"Lutanda lua Marishale","MK":"MK","ML":"Mali","MM":"Myamare","MN":"Mongoli","MO":"MO","MP":"Lutanda lua Mariane wa muulu","MQ":"Martiniki","MR":"Moritani","MS":"Musera","MT":"Malite","MU":"Morise","MV":"Madive","MW":"Malawi","MX":"Meksike","MY":"Malezi","MZ":"Mozambiki","NA":"Namibi","NC":"Kaledoni wa mumu","NE":"Nijere","NF":"Lutanda lua Norfok","NG":"Nijerya","NI":"Nikaragwa","NL":"Olandɛ","NO":"Noriveje","NP":"Nepálɛ","NR":"Nauru","NU":"Nyue","NZ":"Zelanda wa mumu","OM":"Omane","PA":"Panama","PE":"Peru","PF":"Polinezi wa Nfalanse","PG":"Papwazi wa Nginɛ wa mumu","PH":"Nfilipi","PK":"Pakisita","PL":"Mpoloni","PM":"Santu pététo ne Mikelu","PN":"Pikairni","PR":"Mpotoriku","PS":"Palesine","PT":"Mputulugeshi","PW":"Palau","PY":"Palagwei","QA":"Katari","QO":"QO","RE":"Lenyo","RO":"Romani","RS":"RS","RU":"Risi","RW":"Rwanda","SA":"Alabu Nsawudi","SB":"Lutanda lua Solomu","SC":"Seshele","SD":"Suda","SE":"Suwedi","SG":"Singapure","SH":"Santu eleni","SI":"Siloveni","SJ":"SJ","SK":"Silovaki","SL":"Siera Leone","SM":"Santu Marine","SN":"Senegale","SO":"Somali","SR":"Suriname","SS":"SS","ST":"Sao Tome ne Presipɛ","SV":"Savadore","SX":"SX","SY":"Siri","SZ":"Swazilandi","TA":"TA","TC":"Lutanda lua Tuluki ne Kaiko","TD":"Tshadi","TF":"TF","TG":"Togu","TH":"Tayilanda","TJ":"Tazikisita","TK":"Tokelau","TL":"Timoru wa diboku","TM":"Tukemenisita","TN":"Tinizi","TO":"Tonga","TR":"Tuluki","TT":"Tinidade ne Tobago","TV":"Tuvalu","TW":"Taiwani","TZ":"Tanzani","UA":"Ukreni","UG":"Uganda","UM":"UM","UN":"UN","US":"Ameriki","UY":"Irigwei","UZ":"Uzibekisita","VA":"Nvatika","VC":"Santu vesa ne Ngelenadine","VE":"Venezuela","VG":"Lutanda lua Vierzi wa Angeletele","VI":"Lutanda lua Vierzi wa Ameriki","VN":"Viyetiname","VU":"Vanuatu","WF":"Walise ne Futuna","WS":"Samoa","XA":"XA","XB":"XB","XK":"XK","YE":"Yemenu","YT":"Mayote","ZA":"Afrika ya Súdi","ZM":"Zambi","ZW":"Zimbabwe","ZZ":"ZZ"},"short":{"GB":"Angeletele","HK":"HK","MO":"MO","PS":"Palesine","US":"Ameriki"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Arab","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Cyrl","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grek","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Hans","Hant":"Hant","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jpan","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latn","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Zxxx","Zyyy":"Zyyy","Zzzz":"Zzzz"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"Ndiriha wa Lemila alabu","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"Kwanza wa Angola","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"Ndola wa Ositali","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"Ndina wa Bahrene","BIF":"Nfalanga wa Bulundi","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"BRL","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"Pula wa Botswana","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"Ndola wa Kanada","CDF":"Nfalanga wa Kongu","CHE":"CHE","CHF":"Nfalanga wa Swise","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"Yuani Renminbi wa Shine","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"Esikuludo wa Kapevere","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"Nfalanga wa Dzibuti","DKK":"DKK","DOP":"DOP","DZD":"Ndina wa Alijeri","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"Pauni wa Mushidi","ERN":"Nakfa wa Elitle","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"Bira wa Etshiopi","EUR":"Iro","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"Pauni wa Angeletele","GEK":"GEK","GEL":"GEL","GHC":"Sedi wa Ngana","GHS":"GHS","GIP":"GIP","GMD":"Ndalasi wa Ngambi","GNF":"GNF","GNS":"Nfalanga wa Ngina","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"Rupi wa Inde","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"Yeni wa Zapɔ","KES":"Nshili wa Kenya","KGS":"KGS","KHR":"KHR","KMF":"Nfalanga wa Komoru","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"Ndola wa Liberya","LSL":"Loti wa Lesoto","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"Ndina wa Libi","MAD":"Ndiriha wa Maroke","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"Nfalanga wa Madagasikare","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"Ugwiya wa Moritani (1973–2017)","MRU":"Ugwiya wa Moritani","MTL":"MTL","MTP":"MTP","MUR":"Rupia wa Morisi","MVP":"MVP","MVR":"MVR","MWK":"Kwasha wa Malawi","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"Metikali wa Mozambiki","MZN":"MZN","NAD":"Ndola wa Namibi","NGN":"Naira wa Nizerya","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"RUB","RUR":"RUR","RWF":"Nfalanga wa Rwanda","SAR":"Riyale wa Alabu Nsawu","SBD":"SBD","SCR":"Rupya wa Seshele","SDD":"SDD","SDG":"Ndina wa Suda","SDP":"Pauni wa Suda","SEK":"SEK","SGD":"SGD","SHP":"Pauni wa Santu Elena","SIT":"SIT","SKK":"SKK","SLL":"Leone","SOS":"Nshili wa Somali","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"Dobra wa Sao Tome ne Presipe (1977–2017)","STN":"Dobra wa Sao Tome ne Presipe","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"Lilangeni","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"Ndina wa Tinizi","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"Nshili wa Tanzani","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"Nshili wa Uganda","USD":"Ndola wa Ameriki","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"Nfalanga CFA BEAC","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"Nfalanga CFA BCEAO","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"Rande wa Afrika wa Mwinshi","ZMK":"Kwasha wa Zambi (1968–2012)","ZMW":"Kwasha wa Zambi","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"Ndola wa Zimbabwe","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"lu"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
