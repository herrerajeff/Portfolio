import theme from 'styled-theming';

const primary = theme('mode', {
  day: '#fcda00',
  night: '#fcda00',
});

const bg = theme('mode', {
  day: '#F2F5F7',
  night: '#171717',
});

const soft = theme('mode', {
  day: 'rgba(0, 0, 0, 0.05)',
  night: 'rgba(255, 255, 255, 0.05)',
});

const text = theme('mode', {
  day: 'rgba(0,0,0,0.5)',
  night: 'rgba(255,255,255,0.8)',
});

const lightText = theme('mode', {
  day: '#C7CED1',
  night: '#5C6970',
});

const header = theme('mode', {
  day: '#222',
  night: '#FFFFFF',
});

const footer = theme('mode', {
  day: '#FFFFFF',
  night: '#4D4D4D',
});

const footerGlow = theme('mode', {
  day: 'rgba(16, 20, 103, 0.15)',
  night: 'rgba(255,255,255,0.2)',
});

const fontXS = '0.75em';
const fontS = '0.8125em';
const fontM = '1em';
const fontL = '1.25em';
const fontXL = '1.5em';

export { primary, bg, soft, text, lightText, header, footer, footerGlow, fontXS, fontS, fontM, fontL, fontXL };
