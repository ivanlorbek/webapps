//camelcase funkcija

var camelize = function camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr) { return chr.toUpperCase(); } );
  }

console.log(camelize("web apps vjezbe"));