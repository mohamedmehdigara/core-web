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
import SameValueZero from "@mrhenry/core-web/helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";
import IteratorClose from "@mrhenry/core-web/helpers/_ESAbstract.IteratorClose";
import SameValue from "@mrhenry/core-web/helpers/_ESAbstract.SameValue";
(function(undefined) {
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("nl-BQ",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("nl-BQ").length
)) {
// Intl.NumberFormat.~locale.nl-BQ
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"nl-BQ":{"units":{"simple":{"degree":{"long":{"other":"{0} booggraden","one":"{0} booggraad"},"short":{"other":"{0}°"},"narrow":{"other":"{0}°"},"perUnit":{}},"hectare":{"long":{"other":"{0} hectare"},"short":{"other":"{0} ha"},"narrow":{"other":"{0} ha"},"perUnit":{}},"acre":{"long":{"other":"{0} acres","one":"{0} acre"},"short":{"other":"{0} acres","one":"{0} acre"},"narrow":{"other":"{0} acres","one":"{0} acre"},"perUnit":{}},"percent":{"long":{"other":"{0} procent"},"short":{"other":"{0}%"},"narrow":{"other":"{0}%"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"{0} liter per kilometer"},"short":{"other":"{0} l/km"},"narrow":{"other":"{0} l/km"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"{0} mijl per gallon"},"short":{"other":"{0} mpg"},"narrow":{"other":"{0} mpg"},"perUnit":{}},"petabyte":{"long":{"other":"{0} petabyte"},"short":{"other":"{0} PB"},"narrow":{"other":"{0} PB"},"perUnit":{}},"terabyte":{"long":{"other":"{0} terabyte"},"short":{"other":"{0} TB"},"narrow":{"other":"{0} TB"},"perUnit":{}},"terabit":{"long":{"other":"{0} terabits","one":"{0} terabit"},"short":{"other":"{0} Tb"},"narrow":{"other":"{0} Tb"},"perUnit":{}},"gigabyte":{"long":{"other":"{0} gigabyte"},"short":{"other":"{0} GB"},"narrow":{"other":"{0} GB"},"perUnit":{}},"gigabit":{"long":{"other":"{0} gigabits","one":"{0} gigabit"},"short":{"other":"{0} Gb"},"narrow":{"other":"{0} Gb"},"perUnit":{}},"megabyte":{"long":{"other":"{0} megabyte"},"short":{"other":"{0} MB"},"narrow":{"other":"{0} MB"},"perUnit":{}},"megabit":{"long":{"other":"{0} megabits","one":"{0} megabit"},"short":{"other":"{0} Mb"},"narrow":{"other":"{0} Mb"},"perUnit":{}},"kilobyte":{"long":{"other":"{0} kilobyte"},"short":{"other":"{0} kB"},"narrow":{"other":"{0} kB"},"perUnit":{}},"kilobit":{"long":{"other":"{0} kilobits","one":"{0} kilobit"},"short":{"other":"{0} kb"},"narrow":{"other":"{0} kb"},"perUnit":{}},"byte":{"long":{"other":"{0} byte"},"short":{"other":"{0} byte"},"narrow":{"other":"{0} byte"},"perUnit":{}},"bit":{"long":{"other":"{0} bits","one":"{0} bit"},"short":{"other":"{0} bits","one":"{0} bit"},"narrow":{"other":"{0} bits","one":"{0} bit"},"perUnit":{}},"year":{"long":{"other":"{0} jaar"},"short":{"other":"{0} jr"},"narrow":{"other":"{0} jr"},"perUnit":{"long":"{0} per jaar","short":"{0}/jr","narrow":"{0}/jr"}},"month":{"long":{"other":"{0} maanden","one":"{0} maand"},"short":{"other":"{0} mnd"},"narrow":{"other":"{0} m"},"perUnit":{"long":"{0} per maand","short":"{0}/mnd","narrow":"{0}/m"}},"week":{"long":{"other":"{0} weken","one":"{0} week"},"short":{"other":"{0} wkn","one":"{0} wk"},"narrow":{"other":"{0} w"},"perUnit":{"long":"{0} per week","short":"{0}/wk","narrow":"{0}/w"}},"day":{"long":{"other":"{0} dagen","one":"{0} dag"},"short":{"other":"{0} dagen","one":"{0} dag"},"narrow":{"other":"{0} d"},"perUnit":{"long":"{0} per dag","short":"{0}/dag","narrow":"{0}/d"}},"hour":{"long":{"other":"{0} uur"},"short":{"other":"{0} uur"},"narrow":{"other":"{0} u"},"perUnit":{"long":"{0} per uur","short":"{0}/uur","narrow":"{0}/u"}},"minute":{"long":{"other":"{0} minuten","one":"{0} minuut"},"short":{"other":"{0} min"},"narrow":{"other":"{0} m"},"perUnit":{"long":"{0} per minuut","short":"{0}/min","narrow":"{0}/m"}},"second":{"long":{"other":"{0} seconden","one":"{0} seconde"},"short":{"other":"{0} sec"},"narrow":{"other":"{0} s"},"perUnit":{"long":"{0} per seconde","short":"{0}/sec","narrow":"{0}/s"}},"millisecond":{"long":{"other":"{0} milliseconden","one":"{0} milliseconde"},"short":{"other":"{0} ms"},"narrow":{"other":"{0} ms"},"perUnit":{}},"kilometer":{"long":{"other":"{0} kilometer"},"short":{"other":"{0} km"},"narrow":{"other":"{0} km"},"perUnit":{"long":"{0} per kilometer","short":"{0}/km","narrow":"{0}/km"}},"meter":{"long":{"other":"{0} meter"},"short":{"other":"{0} m"},"narrow":{"other":"{0} m"},"perUnit":{"long":"{0} per meter","short":"{0}/m","narrow":"{0}/m"}},"centimeter":{"long":{"other":"{0} centimeter"},"short":{"other":"{0} cm"},"narrow":{"other":"{0} cm"},"perUnit":{"long":"{0} per centimeter","short":"{0}/cm","narrow":"{0}/cm"}},"millimeter":{"long":{"other":"{0} millimeter"},"short":{"other":"{0} mm"},"narrow":{"other":"{0} mm"},"perUnit":{}},"mile":{"long":{"other":"{0} mijl"},"short":{"other":"{0} mi"},"narrow":{"other":"{0} mi"},"perUnit":{}},"yard":{"long":{"other":"{0} yards","one":"{0} yard"},"short":{"other":"{0} yd"},"narrow":{"other":"{0} yd"},"perUnit":{}},"foot":{"long":{"other":"{0} voet"},"short":{"other":"{0} ft"},"narrow":{"other":"{0} ft"},"perUnit":{"long":"{0} per voet","short":"{0}/ft","narrow":"{0}/ft"}},"inch":{"long":{"other":"{0} inches","one":"{0} inch"},"short":{"other":"{0} in"},"narrow":{"other":"{0}\\\""},"perUnit":{"long":"{0} per inch","short":"{0}/in","narrow":"{0}/in"}},"mile-scandinavian":{"long":{"other":"{0} Scandinavische mijl"},"short":{"other":"{0} smi"},"narrow":{"other":"{0} smi"},"perUnit":{}},"kilogram":{"long":{"other":"{0} kilogram"},"short":{"other":"{0} kg"},"narrow":{"other":"{0} kg"},"perUnit":{"long":"{0} per kilogram","short":"{0}/kg","narrow":"{0}/kg"}},"gram":{"long":{"other":"{0} gram"},"short":{"other":"{0} g"},"narrow":{"other":"{0} g"},"perUnit":{"long":"{0} per gram","short":"{0}/g","narrow":"{0}/g"}},"stone":{"long":{"other":"{0} stone"},"short":{"other":"{0} st"},"narrow":{"other":"{0} st"},"perUnit":{}},"pound":{"long":{"other":"{0} pound"},"short":{"other":"{0} lb"},"narrow":{"other":"{0} lb"},"perUnit":{"long":"{0} per pound","short":"{0}/lb","narrow":"{0}/lb"}},"ounce":{"long":{"other":"{0} ounce"},"short":{"other":"{0} oz"},"narrow":{"other":"{0} oz"},"perUnit":{"long":"{0} per ounce","short":"{0}/oz","narrow":"{0}/oz"}},"kilometer-per-hour":{"long":{"other":"{0} kilometer per uur"},"short":{"other":"{0} km/u"},"narrow":{"other":"{0} km/u"},"perUnit":{}},"meter-per-second":{"long":{"other":"{0} meter per seconde"},"short":{"other":"{0} m/s"},"narrow":{"other":"{0} m/s"},"perUnit":{}},"mile-per-hour":{"long":{"other":"{0} mijl per uur"},"short":{"other":"{0} mi/h"},"narrow":{"other":"{0} mi/h"},"perUnit":{}},"celsius":{"long":{"other":"{0} graden Celsius","one":"{0} graad Celsius"},"short":{"other":"{0}°C"},"narrow":{"other":"{0}°"},"perUnit":{}},"fahrenheit":{"long":{"other":"{0} graden Fahrenheit","one":"{0} graad Fahrenheit"},"short":{"other":"{0}°F"},"narrow":{"other":"{0}°F"},"perUnit":{}},"liter":{"long":{"other":"{0} liter"},"short":{"other":"{0} l"},"narrow":{"other":"{0} l"},"perUnit":{"long":"{0} per liter","short":"{0}/l","narrow":"{0}/l"}},"milliliter":{"long":{"other":"{0} milliliter"},"short":{"other":"{0} ml"},"narrow":{"other":"{0} ml"},"perUnit":{}},"gallon":{"long":{"other":"{0} gallon"},"short":{"other":"{0} gal"},"narrow":{"other":"{0} gal"},"perUnit":{"long":"{0} per gallon","short":"{0}/gal","narrow":"{0}/gal"}},"fluid-ounce":{"long":{"other":"{0} fluid ounce"},"short":{"other":"{0} fl oz"},"narrow":{"other":"{0} fl oz"},"perUnit":{}}},"compound":{"per":{"long":"{0} per {1}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"Andorrese peseta"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"VAE-dirham"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"Afghani (AFA)"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"Afghaanse afghani"},"symbol":"AFN","narrow":"AFN"},"ALK":{"displayName":{"other":"Albanese lek (1946–1965)"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"Albanese lek"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"Armeense dram"},"symbol":"AMD","narrow":"AMD"},"ANG":{"displayName":{"other":"Nederlands-Antilliaanse gulden"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"Angolese kwanza"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"Angolese kwanza (1977–1990)"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"Angolese nieuwe kwanza (1990–2000)"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"Angolese kwanza reajustado (1995–1999)"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"Argentijnse austral"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"Argentijnse peso ley (1970–1983)"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"Argentijnse peso (1881–1970)"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"Argentijnse peso (1983–1985)"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"Argentijnse peso"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"Oostenrijkse schilling"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"Australische dollar"},"symbol":"AU$","narrow":"$"},"AWG":{"displayName":{"other":"Arubaanse gulden"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"Azerbeidzjaanse manat (1993–2006)"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"Azerbeidzjaanse manat"},"symbol":"AZN","narrow":"AZN"},"BAD":{"displayName":{"other":"Bosnische dinar"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"Bosnische convertibele mark"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"Nieuwe Bosnische dinar (1994–1997)"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"Barbadaanse dollar"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"Bengalese taka"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"Belgische frank (convertibel)"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"Belgische frank"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"Belgische frank (financieel)"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"Bulgaarse harde lev"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"Bulgaarse socialistische lev"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"Bulgaarse leva","one":"Bulgaarse lev"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"Bulgaarse lev (1879–1952)"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"Bahreinse dinar"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"Burundese frank"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"Bermuda-dollar"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"Bruneise dollar"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"Boliviaanse boliviano"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"Boliviaanse boliviano (1863–1963)"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"Boliviaanse peso"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"Boliviaanse mvdol"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"Braziliaanse cruzeiro novo (1967–1986)"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"Braziliaanse cruzado"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"Braziliaanse cruzeiro (1990–1993)"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"Braziliaanse real"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"Braziliaanse cruzado novo"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"Braziliaanse cruzeiro"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"Braziliaanse cruzeiro (1942–1967)"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"Bahamaanse dollar"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"Bhutaanse ngultrum"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"Birmese kyat"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"Botswaanse pula"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"Wit-Russische nieuwe roebel (1994–1999)"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"Wit-Russische roebel"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"Wit-Russische roebel (2000–2016)"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"Belizaanse dollar"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"Canadese dollar"},"symbol":"C$","narrow":"$"},"CDF":{"displayName":{"other":"Congolese frank"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"WIR euro"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"Zwitserse frank"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"WIR franc"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"Chileense escudo"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"Chileense unidades de fomento"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"Chileense peso"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"Chinese yuan (offshore)"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"dollar van de Chinese Volksbank"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"Chinese yuan"},"symbol":"CN¥","narrow":"¥"},"COP":{"displayName":{"other":"Colombiaanse peso"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"Unidad de Valor Real"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"Costa Ricaanse colon"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"Oude Servische dinar"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"Tsjechoslowaakse harde koruna"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"Cubaanse convertibele peso"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"Cubaanse peso"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"Kaapverdische escudo"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"Cyprisch pond"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"Tsjechische kronen","one":"Tsjechische kroon"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"Oost-Duitse ostmark"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"Duitse mark"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"Djiboutiaanse frank"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"Deense kronen","one":"Deense kroon"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"Dominicaanse peso"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"Algerijnse dinar"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"Ecuadoraanse sucre"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"Ecuadoraanse unidad de valor constante (UVC)"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"Estlandse kroon"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"Egyptisch pond"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"Eritrese nakfa"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"Spaanse peseta (account A)"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"Spaanse peseta (convertibele account)"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"Spaanse peseta"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"Ethiopische birr"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"euro"},"symbol":"€","narrow":"€"},"FIM":{"displayName":{"other":"Finse markka"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"Fiji-dollar"},"symbol":"FJ$","narrow":"$"},"FKP":{"displayName":{"other":"Falklandeilands pond"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"Franse franc"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"Brits pond"},"symbol":"£","narrow":"£"},"GEK":{"displayName":{"other":"Georgische kupon larit"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"Georgische lari"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"Ghanese cedi (1979–2007)"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"Ghanese cedi"},"symbol":"GHS","narrow":"GHS"},"GIP":{"displayName":{"other":"Gibraltarees pond"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"Gambiaanse dalasi"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"Guinese frank"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"Guinese syli"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"Equatoriaal-Guinese ekwele guineana"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"Griekse drachme"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"Guatemalteekse quetzal"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"Portugees-Guinese escudo"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"Guinee-Bissause peso"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"Guyaanse dollar"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"Hongkongse dollar"},"symbol":"HK$","narrow":"$"},"HNL":{"displayName":{"other":"Hondurese lempira"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"Kroatische dinar"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"Kroatische kuna"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"Haïtiaanse gourde"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"Hongaarse forint"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"Indonesische roepia"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"Iers pond"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"Israëlisch pond"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"Israëlische sjekel (1980–1985)"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"Israëlische nieuwe shekel"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"Indiase roepie"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"Iraakse dinar"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"Iraanse rial"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"IJslandse kronen (1918–1981)","one":"IJslandse kroon (1918–1981)"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"IJslandse kronen","one":"IJslandse kroon"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"Italiaanse lire"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"Jamaicaanse dollar"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"Jordaanse dinar"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"Japanse yen"},"symbol":"JP¥","narrow":"¥"},"KES":{"displayName":{"other":"Keniaanse shilling"},"symbol":"KES","narrow":"KES"},"KGS":{"displayName":{"other":"Kirgizische som"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"Cambodjaanse riel"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"Comorese frank"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"Noord-Koreaanse won"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"Zuid-Koreaanse hwan (1953–1962)"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"oude Zuid-Koreaanse won (1945–1953)"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"Zuid-Koreaanse won"},"symbol":"₩","narrow":"₩"},"KWD":{"displayName":{"other":"Koeweitse dinar"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"Kaaimaneilandse dollar"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"Kazachse tenge"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"Laotiaanse kip"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"Libanees pond"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"Sri Lankaanse roepie"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"Liberiaanse dollar"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"Lesothaanse loti"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"Litouwse litas"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"Litouwse talonas"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"Luxemburgse convertibele franc"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"Luxemburgse frank"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"Luxemburgse financiële franc"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"Letse lats"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"Letse roebel"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"Libische dinar"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"Marokkaanse dirham"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"Marokkaanse franc"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"Monegaskische frank"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"Moldavische cupon"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"Moldavische leu"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"Malagassische ariary"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"Malagassische franc"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"Macedonische denar"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"Macedonische denar (1992–1993)"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"Malinese franc"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"Myanmarese kyat"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"Mongoolse tugrik"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"Macause pataca"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"Mauritaanse ouguiya (1973–2017)"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"Mauritaanse ouguiya"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"Maltese lire"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"Maltees pond"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"Mauritiaanse roepie"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"Maldivische roepie"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"Maldivische rufiyaa"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"Malawische kwacha"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"Mexicaanse peso"},"symbol":"MX$","narrow":"$"},"MXP":{"displayName":{"other":"Mexicaanse zilveren peso (1861–1992)"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"Mexicaanse unidad de inversion (UDI)"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"Maleisische ringgit"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"Mozambikaanse escudo"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"Oude Mozambikaanse metical"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"Mozambikaanse metical"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"Namibische dollar"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"Nigeriaanse naira"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"Nicaraguaanse córdoba (1988–1991)"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"Nicaraguaanse córdoba"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"Nederlandse gulden"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"Noorse kronen","one":"Noorse kroon"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"Nepalese roepie"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"Nieuw-Zeelandse dollar"},"symbol":"NZ$","narrow":"$"},"OMR":{"displayName":{"other":"Omaanse rial"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"Panamese balboa"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"Peruaanse inti"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"Peruaanse sol"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"Peruaanse sol (1863–1965)"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"Papoea-Nieuw-Guinese kina"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"Filipijnse peso"},"symbol":"PHP","narrow":"₱"},"PKR":{"displayName":{"other":"Pakistaanse roepie"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"Poolse zloty"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"Poolse zloty (1950–1995)"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"Portugese escudo"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"Paraguayaanse guarani"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"Qatarese rial"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"Rhodesische dollar"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"Oude Roemeense leu"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"Roemeense leu"},"symbol":"RON","narrow":"lei"},"RSD":{"displayName":{"other":"Servische dinar"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"Russische roebel"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"Russische roebel (1991–1998)"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"Rwandese frank"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"Saoedi-Arabische riyal"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"Salomon-dollar"},"symbol":"SI$","narrow":"$"},"SCR":{"displayName":{"other":"Seychelse roepie"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"Soedanese dinar"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"Soedanees pond"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"Soedanees pond (1957–1998)"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"Zweedse kronen","one":"Zweedse kroon"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"Singaporese dollar"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"Sint-Heleens pond"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"Sloveense tolar"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"Slowaakse koruna"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"Sierraleoonse leone"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"Somalische shilling"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"Surinaamse dollar"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"Surinaamse gulden"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"Zuid-Soedanees pond"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"Santomese dobra (1977–2017)"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"Santomese dobra"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"Sovjet-roebel"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"Salvadoraanse colón"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"Syrisch pond"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"Swazische lilangeni"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"Thaise baht"},"symbol":"฿","narrow":"฿"},"TJR":{"displayName":{"other":"Tadzjikistaanse roebel"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"Tadzjiekse somoni"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"Turkmeense manat (1993–2009)"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"Turkmeense manat"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"Tunesische dinar"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"Tongaanse paʻanga"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"Timorese escudo"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"oude Turkse lira"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"Turkse lira"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"Trinidad en Tobago-dollar"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"Nieuwe Taiwanese dollar"},"symbol":"NT$","narrow":"NT$"},"TZS":{"displayName":{"other":"Tanzaniaanse shilling"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"Oekraïense hryvnia"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"Oekraïense karbovanetz"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"Oegandese shilling (1966–1987)"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"Oegandese shilling"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"Amerikaanse dollar"},"symbol":"$","narrow":"$"},"USN":{"displayName":{"other":"Amerikaanse dollar (volgende dag)"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"Amerikaanse dollar (zelfde dag)"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"Uruguayaanse peso en geïndexeerde eenheden"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"Uruguayaanse peso (1975–1993)"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"Uruguayaanse peso"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"Uruguayaanse nominale salarisindexeenheid"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"Oezbeekse sum"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"Venezolaanse bolivar (1871–2008)"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"Venezolaanse bolivar (2008–2018)"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"Venezolaanse bolivar"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"Vietnamese dong"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"Vietnamese dong (1978–1985)"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"Vanuatuaanse vatu"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"Samoaanse tala"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"CFA-frank"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"Troy ounces zilver","one":"Troy ounce zilver"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"Troy ounces goud","one":"Troy ounce goud"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"Europese samengestelde eenheid"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"Europese monetaire eenheid"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"Europese rekeneenheid (XBC)"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"Europese rekeneenheid (XBD)"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"Oost-Caribische dollar"},"symbol":"EC$","narrow":"$"},"XDR":{"displayName":{"other":"Special Drawing Rights"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"European Currency Unit"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"Franse gouden franc"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"Franse UIC-franc"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"CFA-franc BCEAO"},"symbol":"CFA","narrow":"CFA"},"XPD":{"displayName":{"other":"Troy ounces palladium","one":"Troy ounce palladium"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"CFP-frank"},"symbol":"XPF","narrow":"XPF"},"XPT":{"displayName":{"other":"Troy ounces platina","one":"Troy ounce platina"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"RINET-fondsen"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"Sucre"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"Valutacode voor testdoeleinden"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"ADB-rekeneenheid"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"onbekende munteenheid"},"symbol":"XXX","narrow":"XXX"},"YDD":{"displayName":{"other":"Jemenitische dinar"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"Jemenitische rial"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"Joegoslavische harde dinar"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"Joegoslavische noviy-dinar"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"Joegoslavische convertibele dinar"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"Joegoslavische hervormde dinar (1992–1993)"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"Zuid-Afrikaanse rand (financieel)"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"Zuid-Afrikaanse rand"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"Zambiaanse kwacha (1968–2012)"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"Zambiaanse kwacha"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"Zaïrese nieuwe zaïre"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"Zaïrese zaïre"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"Zimbabwaanse dollar"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"Zimbabwaanse dollar (2009)"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"Zimbabwaanse dollar (2008)"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["latn"],"symbols":{"latn":{"decimal":",","group":".","list":";","percentSign":"%","plusSign":"+","minusSign":"-","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"}},"percent":{"latn":"#,##0%"},"decimal":{"latn":{"standard":"#,##0.###","long":{"1000":{"other":"0 duizend"},"10000":{"other":"00 duizend"},"100000":{"other":"000 duizend"},"1000000":{"other":"0 miljoen"},"10000000":{"other":"00 miljoen"},"100000000":{"other":"000 miljoen"},"1000000000":{"other":"0 miljard"},"10000000000":{"other":"00 miljard"},"100000000000":{"other":"000 miljard"},"1000000000000":{"other":"0 biljoen"},"10000000000000":{"other":"00 biljoen"},"100000000000000":{"other":"000 biljoen"}},"short":{"1000":{"other":"0K"},"10000":{"other":"00K"},"100000":{"other":"000K"},"1000000":{"other":"0 mln'.'"},"10000000":{"other":"00 mln'.'"},"100000000":{"other":"000 mln'.'"},"1000000000":{"other":"0 mld'.'"},"10000000000":{"other":"00 mld'.'"},"100000000000":{"other":"000 mld'.'"},"1000000000000":{"other":"0 bln'.'"},"10000000000000":{"other":"00 bln'.'"},"100000000000000":{"other":"000 bln'.'"}}}},"currency":{"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"¤ #,##0.00;¤ -#,##0.00","accounting":"¤ #,##0.00;(¤ #,##0.00)","unitPattern":"{0} {1}","short":{"1000":{"other":"¤ 0K"},"10000":{"other":"¤ 00K"},"100000":{"other":"¤ 000K"},"1000000":{"other":"¤ 0 mln'.'"},"10000000":{"other":"¤ 00 mln'.'"},"100000000":{"other":"¤ 000 mln'.'"},"1000000000":{"other":"¤ 0 mld'.'"},"10000000000":{"other":"¤ 00 mld'.'"},"100000000000":{"other":"¤ 000 mld'.'"},"1000000000000":{"other":"¤ 0 bln'.'"},"10000000000000":{"other":"¤ 00 bln'.'"},"100000000000000":{"other":"¤ 000 bln'.'"}}}}},"nu":["latn"]}},"availableLocales":["nl-BQ"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
