require('../slate/reposad')(700);

const $ = require('jquery');

module.exports = {
  $     : $,
  lang  : require('./lang'),
  search: require('./search'),
  toc   : require('./toc'),
};

document.addEventListener('DOMContentLoaded', function() {
  module.exports.lang.setupLanguages(window.slateLanguages);
});
