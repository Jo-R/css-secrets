// page 27 OF ABOUT THIS BOOK - helper for looping over set of elements matching a selector
function $$(selector, context) {
  context = context || document;
  var elements = context.querySelectorAll(selector);
  // return Array.prototype.slice.call(elements); // old way from book
  return Array.from(elements); // es6 introduced array.from
}
