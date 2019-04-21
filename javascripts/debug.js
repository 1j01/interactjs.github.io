(function () {
  'use strict';

  var debugMatch = location.search.match(/[?&]debug=([^&]+)/),
    version = debugMatch && debugMatch[1];

  if (version) {
    window._interact = window.interact;
    window.interact = null;

    var newScript = document.createElement('script');
    let user = 'taye';

    if (/.\/./.test(version)) {
      const versionParts = version.split('/');
      user = versionParts[0];
      version = versionParts[1];
    }

    newScript.src = '//rawgit.com/' + user + '/interact.js/' + version + '/packages/interactjs/dist/interact.js';

    document.write(newScript.outerHTML);

    console.log('Demos run with ' + version + ' version of interact.js');
    console.log(newScript.src);
  }
}());
