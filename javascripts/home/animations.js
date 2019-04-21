/* eslint-env browser */
/* global Prism */

window.Zepto = window.cash;
window.cash.fn.toArray = function () { return [].slice.call(this); }

const { interact, $ } = window;
// const { displace, exchange } = interact.utils;
const animArea = document.querySelector('.anim-area');

const $nameElement = $('#anim-name');

const animations = {
  'get started': getStarted,
};

async function main () {
  await timeout(700);

  for (const [name, func] of Object.entries(animations)) {
    await whenScrolledInView(animArea);

    $nameElement.text(name);

    $(`[data-feat*="${name}"]`).addClass('is-active');

    await func();
    await timeout(200);

    $('[data-feat].is-active').removeClass('is-active');
  }
}

async function getStarted () {
  const npm = '$ npm install interactjs@next';
  const importFrom = '\n\nimport interact from \'interactjs\'';
  const draggable = `\n\ninteract('.item').draggable({
  onmove(event) {
    console.log(event.pageX,
                event.pageY)
  }
})`;

  // displace.transition({ elements: [animArea.closest('section')], transitionSize: true }, () => {
    $('#code-sizer').text(npm + importFrom + draggable);
    updateCodeFrameSize();
  // });
  await codeDemo({ code: npm, lang: 'javascript', delimiter: 'character' });
  await timeout(300);
  await codeDemo({ code: importFrom, lang: 'javascript', append: true, delimiter: 'character' });
  await timeout(200);
  await codeDemo({ code: draggable, lang: 'javascript', append: true });
}

$(window).ready(() => timeout(500).then(main));

$(window).on('resize', updateCodeFrameSize);

function updateCodeFrameSize () {
  const $codeFrame = $('#code-frame');
  $codeFrame.css({ width: 0, height: 0 });
  const { width, height } = $codeFrame[0].parentNode.getBoundingClientRect();

  $codeFrame.css({ width, height });
  $codeFrame[0].contentWindow.document.documentElement.style.fontSize =
    getComputedStyle($codeFrame[0]).fontSize;
}

async function codeDemo ({ code = '', lang = 'markup', append, delimiter = 'word', speed = delimiter === 'character' ? 20 : 40 }) {
  const $codeFrame = $('.code-frame');

  updateCodeFrameSize();

  if (!$codeFrame.hasClass('is-active')) {
    const frameHtml = $codeFrame.text();

    $codeFrame.siblings().removeClass('is-active');
    $codeFrame.addClass('is-active').html('');
    $codeFrame[0].contentWindow.document.documentElement.innerHTML = frameHtml;

    // clear iframe selection
    $(document).on('selectionchange touchstart', () => $codeFrame[0].contentWindow.getSelection().empty());
  }

  const frameBody = $codeFrame[0].contentWindow.document.body;
  const transparent = 'rgba(0, 0, 0, 0)';
  const $pre = $('pre', frameBody);
  const $code = $('<code>');
  const prevDelimiter = $pre.find('[data-blast]').attr('data-blast') || delimiter;

  // erase previous code
  if (!append) {
    for (const segment of $code.blast({ delimiter: prevDelimiter, aria: false }).toArray().reverse()) {
      segment.style.color = transparent;
      segment.classList.add('cursor');
      await timeout(speed / 2);

      segment.classList.remove('cursor');
    }

    $pre.empty();
  }

  const html = Prism.highlight(code, Prism.languages[lang]);
  $code.html(html).appendTo($pre);

  const segments = $code
    .blast({ delimiter, aria: false })
    .css('color', transparent)
    .toArray();

  for (const segment of segments) {
    segment.classList.add('cursor');
    await timeout(speed);

    segment.style.color = '';
    segment.classList.remove('cursor');
  }
}

function whenScrolledInView (element) {
  return new Promise(resolve => {
    if (isInView(element)) {
      resolve(null);
      return;
    }

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);

    function onScroll () {
      if (isInView(element)) {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        resolve(null);
      }
    }
  });
}

function isInView (element) {
  if (document.hidden) { return true; }

  const { top, bottom, height } = element.getBoundingClientRect();

  const margin = Math.min(height / 2, window.innerHeight / 3, 400);

  if (top + margin < Math.max(window.innerHeight, window.scrollY) &&
    bottom > margin) {
    return true;
  }

  return false;
}

function timeout (duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}
