import Typography from 'typography';

const typography = new Typography({
  title: 'Plex',
  googleFonts: [
    {
      name: `IBM Plex Sans`,
      styles: [`300`,`300i`,`400`, `400i`, `600`, `600i`],
    },
    {
      name: `IBM Plex Sans Condensed`,
      styles: [`700`, `700i`],
    },
  ],
  baseFontSize: '16px',
  baseLineHeight: 1.66,
  scaleRatio: 3.66,
  headerFontFamily: ['IBM Plex Sans Condensed','sans-serif'],
  bodyFontFamily: ['IBM Plex Sans','sans-serif'],
  headerWeight: 700,
  bodyWeight: 400,
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
