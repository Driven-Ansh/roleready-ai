import type { Config } from 'tailwindcss';

export const content = [
  './app/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './features/**/*.{js,ts,jsx,tsx}',
];

export const theme = {
  extend: {
    colors: {
      primary: '#3B82F6', // blue-500
      accent: '#8B5CF6', // purple-500
      success: '#10B981', // green-500
      warning: '#F59E0B', // amber-500
      error: '#EF4444', // red-500
      background: '#F9FAFB', // gray-50
      surface: '#FFFFFF', // white
      textPrimary: '#111827', // gray-900
      textSecondary: '#374151', // gray-700
    },
    fontFamily: {
      sans: ['"Inter"', 'system-ui', 'sans-serif'],
    },
  },
};

export const plugins = [];

const config: Config = { content, theme, plugins };
export default config;
