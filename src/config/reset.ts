import plugin from 'tailwindcss/plugin';

const reset = plugin(({ addBase }) => {
  addBase({
    html: {
      'overflow-y': 'scroll',
    },
    // https://www.joshwcomeau.com/css/custom-css-reset/
    // https://css-tricks.com/notes-on-josh-comeaus-custom-css-reset/
    'html, body, #__next, #root': {
      height: '100%',
    },
    '#__next, #root': {
      isolation: 'isolate',
    },
    'p, h1, h2, h3, h4, h5, h6, li, dl, dt, blockquote, pre': {
      'overflow-wrap': 'break-word',
    },
    pre: {
      'white-space': 'normal',
    },
  });
}, {});

export default reset;
