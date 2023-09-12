import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

import aspectRatioConfig from '@/config/aspect-ratio';
import reset from '@/config/reset';

type TPreset = Omit<Config, 'content'>;

const plugins: Config['plugins'] = [
  // Official
  typography,
  forms,
  aspectRatio,
  aspectRatioConfig,

  reset,
];

const preset: TPreset = {
  plugins,
};

module.exports = preset;
export default preset;
