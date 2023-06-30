import plugin from 'tailwindcss/plugin';

const reset = plugin(({ addBase }) => {
  addBase({
    html: {
      'overflow-y': 'scroll',
    },
    // Radix UI adds a margin to the right to compensate for the scrollbar
    // existing then hides it. But it does not acount for the scrollbar being in
    // the html tag because of the above configuration.
    // https://stackoverflow.com/a/75149775
    'body:not(#\\9)': {
      'margin-right': '0 !important',
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
