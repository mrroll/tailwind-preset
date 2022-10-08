import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import lineClamp from '@tailwindcss/line-clamp';
import aspectRatio from '@tailwindcss/aspect-ratio';
import rfs from 'tailwindcss-rfs';
import brandColors from 'tailwindcss-brand-colors';
import windyRadixPalette from 'windy-radix-palette';
import windyRadixTypography from 'windy-radix-typography';
import reset from '@/preset/config/reset';
import aspectRatioConfig from '@/preset/config/aspect-ratio';

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

  windyRadixPalette,
  windyRadixTypography,
];

const preset: TPreset = {
  plugins,
};

export = preset;
