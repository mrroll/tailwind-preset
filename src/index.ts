import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import lineClamp from '@tailwindcss/line-clamp';
import aspectRatio from '@tailwindcss/aspect-ratio';
import rfs from 'tailwindcss-rfs';
import brandColors from 'tailwindcss-brand-colors';
import windyRadixPalette from 'windy-radix-palette';
import windyRadixTypography from 'windy-radix-typography';
import animate from 'tailwindcss-animate';
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

  rfs,

  brandColors,

  animate,
  windyRadixPalette,
  windyRadixTypography,
];

const preset: TPreset = {
  plugins,
};

export = preset;
