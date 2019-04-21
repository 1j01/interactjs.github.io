function reposad (breakpoint) {
  var ad = document.getElementById('ad-contain');

  if (!ad) { return; }

  var wrap = document.querySelector('.ad-wrap');

  if (window.innerWidth <= breakpoint && wrap.lastElementChild === ad) {
    var selectors = 'main section header, main article, main *:nth-child(2), main *'.split(/,/);

    for (var i = 0; i < selectors.length; i++) {
      var selector = selectors[i];
      var el = document.querySelector(selector);

      if (el) {
        el.parentNode.insertBefore(ad, el);
        wrap.style.display = 'none';
        ad.classList.add('ad-mobile');
        break;
      }
    }
  }
  else if (window.innerWidth > breakpoint && wrap.lastElementChild !== ad) {
    wrap.appendChild(ad);
    wrap.style.display = '';
    ad.classList.remove('ad-mobile');
  }
}

module.exports = function (breakpoint) {
  window.addEventListener('resize', function () { reposad(breakpoint) });
  document.addEventListener('DOMContentLoaded', function () { reposad(breakpoint) });
}
