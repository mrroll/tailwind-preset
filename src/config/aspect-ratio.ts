import plugin from 'tailwindcss/plugin';

const aspectRatioConfig = plugin(
  () => {
    // no-op
  },
  {
    corePlugins: {
      aspectRatio: false,
    },
    theme: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
    },
  },
);

export default aspectRatioConfig;
