import theme from 'styled-theming';

const primary = theme('mode', {
  day: '#fcda00',
  night: '#fcda00',
});

const bg = theme('mode', {
  day: '#f2f5f7',
  night: '#171717',
});

const soft = theme('mode', {
  day: 'rgba(0, 0, 0, 0.05)',
  night: 'rgba(255, 255, 255, 0.05)',
});

const text = theme('mode', {
  day: 'hsla(200,5%,0%,50%)',
  night: 'hsla(200,10%,100%, 80%)',
});

const lightText = theme('mode', {
  day: 'hsl(200,10%,80%)',
  night: 'hsl(200,10%,40%)',
});

const header = theme('mode', {
  day: '#222',
  night: 'white',
});

const footer = theme('mode', {
  day: 'white',
  night: 'hsl(0,0%,30%)',
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
