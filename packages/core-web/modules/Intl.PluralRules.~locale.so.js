(function(undefined) {
if (!("Intl"in self&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf("so").length}catch(l){return!1}}()
)) {
// Intl.PluralRules.~locale.so
/* @generated */
// prettier-ignore
if (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {
  Intl.PluralRules.__addLocaleData({"data":{"categories":{"cardinal":["one","other"],"ordinal":["other"]},"fn":function(n, ord) {
  if (ord) return 'other';
  return n == 1 ? 'one' : 'other';
}},"locale":"so"})
}
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
