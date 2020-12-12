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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("se-FI").length
)) {
// Intl.RelativeTimeFormat.~locale.se-FI
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"dán jagi","1":"boahtte jagi","future":{"one":"{0} jagi siste","two":"{0} jagi siste","other":"{0} jagi siste"},"past":{"one":"diibmá","two":"ovddet jagi","other":"{0} jagi dás ovdal"},"-1":"diibmá"},"year-short":{"0":"dán jagi","1":"boahtte jagi","future":{"one":"{0} j. siste","two":"{0} jagi siste","other":"{0} j. siste"},"past":{"one":"diibmá","two":"ovddet jagi","other":"{0} j. dás ovdal"},"-1":"diibmá"},"year-narrow":{"0":"dán jagi","1":"boahtte jagi","future":{"one":"{0} jagi siste","two":"{0} jagi siste","other":"{0} jagi siste"},"past":{"one":"{0} j. dás ovdal","two":"{0} jagi dás ovdal","other":"{0} j. dás ovdal"},"-1":"diibmá"},"quarter":{"0":"dán njealjádasjagi","1":"boahtte njealjádasjagi","future":{"one":"čuovvovaš {0} njealjádasjagi","two":"čuovvovaš {0} njealjádasjagi","other":"čuovvovaš {0} njealjádasjagi"},"past":{"one":"-{0} njealjádasjagi dás ovdal","two":"-{0} njealjádasjagi dás ovdal","other":"-{0} njealjádasjagi dás ovdal"},"-1":"mannan njealjádasjagi"},"quarter-short":{"0":"dán njealjádasjagi","1":"boahtte njealjádasjagi","future":{"one":"boahtte {0} njealj.j.","two":"boahtte {0} njealjádasjagi","other":"boahtte {0} njealj.j."},"past":{"one":"{0} njealj.j. dás ovdal","two":"{0} njealjádasjagi dás ovdal","other":"{0} njealj.j. dás ovdal"},"-1":"mannan njealjádasjagi"},"quarter-narrow":{"0":"dán njealjádasjagi","1":"boahtte njealjádasjagi","future":{"one":"boahtte {0} njealj.j.","two":"boahtte {0} njealjádasjagi","other":"boahtte {0} njealj.j."},"past":{"one":"{0} njealj.j. dás ovdal","two":"-{0} njealjádasjagi dás ovdal","other":"{0} njealj.j. dás ovdal"},"-1":"mannan njealjádasjagi"},"month":{"0":"dán mánu","1":"boahtte mánu","future":{"one":"{0} mánu siste","two":"{0} mánu siste","other":"{0} mánu siste"},"past":{"one":"{0} mánnu dás ovdal","two":"{0} mánu dás ovdal","other":"{0} mánu dás ovdal"},"-1":"mannan mánu"},"month-short":{"0":"dán mánu","1":"boahtte mánu","future":{"one":"{0} mánu siste","two":"{0} mánu siste","other":"{0} mánu siste"},"past":{"one":"{0} mánnu dás ovdal","two":"{0} mánu dás ovdal","other":"{0} mánu dás ovdal"},"-1":"mannan mánu"},"month-narrow":{"0":"dán mánu","1":"boahtte mánu","future":{"one":"{0} mánu geahčen","two":"{0} mánu geahčen","other":"{0} mánu geahčen"},"past":{"one":"{0} mánnu dás ovdal","two":"{0} mánu dás ovdal","other":"{0} mánu dás ovdal"},"-1":"mannan mánu"},"week":{"0":"dán vahku","1":"boahtte vahku","future":{"one":"{0} vahku geahčen","two":"{0} vahku geahčen","other":"{0} vahku geahčen"},"past":{"one":"{0} vahkku dás ovdal","two":"{0} vahku dás ovdal","other":"{0} vahku dás ovdal"},"-1":"mannan vahku"},"week-short":{"0":"dán vahku","1":"boahtte vahku","future":{"one":"{0} v(k) siste","two":"{0} vahku siste","other":"{0} v(k) siste"},"past":{"one":"{0} v(k) dás ovdal","two":"{0} vahku dás ovdal","other":"{0} v(k) dás ovdal"},"-1":"mannan vahku"},"week-narrow":{"0":"dán vahku","1":"boahtte vahku","future":{"one":"{0} v(k) geahčen","two":"{0} v(k) geahčen","other":"{0} v(k) geahčen"},"past":{"one":"{0} vahkku dás ovdal","two":"{0} vahku dás ovdal","other":"{0} v(k) dás ovdal"},"-1":"mannan vahku"},"day":{"0":"odne","1":"ihttin","2":"don beaivve","future":{"one":"{0} beaivve siste","two":"{0} beaivve siste","other":"{0} beaivve siste"},"past":{"one":"ikte","two":"ovddet beaivve","other":"{0} beaivve dás ovdal"},"-2":"ovddet beaivvi","-1":"ikte"},"day-short":{"0":"odne","1":"ihttin","2":"don beaivve","future":{"one":"{0} beaivve siste","two":"{0} beaivve siste","other":"{0} beaivve siste"},"past":{"one":"ikte","two":"ovddet beaivve","other":"{0} beaivve dás ovdal"},"-2":"ovddet beaivvi","-1":"ikte"},"day-narrow":{"0":"odne","1":"ihttin","2":"don beaivve","future":{"one":"{0} beaivve siste","two":"{0} beaivve siste","other":"{0} beaivve siste"},"past":{"one":"ikte","two":"ovddet beaivve","other":"{0} beaivve dás ovdal"},"-2":"ovddet beaivvi","-1":"ikte"},"hour":{"0":"dán diimmu","future":{"one":"{0} diimmu siste","two":"{0} diimmu siste","other":"{0} diimmu siste"},"past":{"one":"{0} diibmu áigi","two":"{0} diimmu áigi","other":"{0} diimmu áigi"}},"hour-short":{"0":"dán diimmu","future":{"one":"{0} dmu siste","two":"{0} diimmu siste","other":"{0} dmu siste"},"past":{"one":"{0} dmu áigi","two":"{0} diimmu áigi","other":"{0} dmu áigi"}},"hour-narrow":{"0":"dán diimmu","future":{"one":"{0} dmu siste","two":"{0} diimmu siste","other":"{0} dmu siste"},"past":{"one":"{0} dmu áigi","two":"{0} diimmu áigi","other":"{0} dmu áigi"}},"minute":{"0":"dán minuhta","future":{"one":"{0} minuhta siste","two":"{0} minuhta siste","other":"{0} minuhta siste"},"past":{"one":"{0} minuhtta áigi","two":"{0} minuhta áigi","other":"{0} minuhta áigi"}},"minute-short":{"0":"dán minuhta","future":{"one":"{0} min. siste","two":"{0} minuhta siste","other":"{0} min. siste"},"past":{"one":"{0} min. áigi","two":"{0} minuhta áigi","other":"{0} min. áigi"}},"minute-narrow":{"0":"dán minuhta","future":{"one":"{0} min. siste","two":"{0} minuhta siste","other":"{0} min. siste"},"past":{"one":"{0} min. áigi","two":"{0} minuhta áigi","other":"{0} min. áigi"}},"second":{"0":"dál","future":{"one":"{0} sekundda siste","two":"{0} sekundda siste","other":"{0} sekundda siste"},"past":{"one":"{0} sekunda áigi","two":"{0} sekundda áigi","other":"{0} sekundda áigi"}},"second-short":{"0":"dál","future":{"one":"{0} sek. siste","two":"{0} sekundda siste","other":"{0} sek. siste"},"past":{"one":"{0} sek. áigi","two":"{0} sekundda áigi","other":"{0} sek. áigi"}},"second-narrow":{"0":"dál","future":{"one":"{0} sek. siste","two":"{0} sekundda siste","other":"{0} sek. siste"},"past":{"one":"{0} sek. áigi","two":"{0} sekundda áigi","other":"{0} sek. áigi"}}},"locale":"se-FI"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
