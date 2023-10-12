import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Eudoxus Sans Medium';
        font-style: normal;
        font-size: 14px;
        font-weight: 500;
        font-display: block;
        src: url(https://stijndv.com/fonts/EudoxusSans-Medium.woff2) format("woff2"),
        url(https://stijndv.com/fonts/EudoxusSans-Medium.woff) format("woff");
      }
    `}
  />
);

export default Fonts