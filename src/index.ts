import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import lineClamp from '@tailwindcss/line-clamp';
import aspectRatio from '@tailwindcss/aspect-ratio';
import reset from '@/config/reset';
import aspectRatioConfig from '@/config/aspect-ratio';

type TPreset = Omit<Config, 'content'>;

const plugins: Config['plugins'] = [
  // Official
  typography,
  forms,
  lineClamp,
  aspectRatio,
  aspectRatioConfig,

  reset,
];

const preset: TPreset = {
  plugins,
};

export = preset;
