import Typography from 'typography';

const typography = new Typography({
  title: 'Plex',
  baseFontSize: '16px',
  baseLineHeight: 1.66,
  scaleRatio: 3.66,
  headerFontFamily: ['IBM Plex Sans Condensed', 'sans-serif'],
  bodyFontFamily: ['IBM Plex Sans', 'sans-serif'],
  headerWeight: 700,
  googleFonts: [
    {
      name: 'IBM Plex Sans Condensed',
      styles: ['600', '600i', '700', '700i'],
    },
    {
      name: 'IBM Plex Sans',
      styles: ['400', '400i', '500', '500i', '600', '600i'],
    },
  ],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
