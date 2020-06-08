const { keyframes, easing, styler } = window.popmotion;

const divStyler = styler(document.body);

function complimentBg() {
  keyframes({
    values: [
      { background: '#34b588' },
      { background: '#2ac8ec' },
      { background: '#34b588' },
      { background: '#2ac8ec' },
      { background: '#34b588' },
    ],
    duration: 10000,
    easings: easing.linear,
    loop: Infinity,
  }).start(divStyler.set);
}

function insultBg() {
  keyframes({
    values: [
      { background: '#d73502' },
      { background: '#801100' },
      { background: '#d73502' },
      { background: '#fc6400' },
      { background: '#d73502' },
    ],
    duration: 10000,
    easings: easing.linear,
    loop: Infinity,
  }).start(divStyler.set);
}
