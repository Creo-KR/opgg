import '@emotion/react';

const themeA = {
  fontFamily: { primary: `'Apple SD Gothic Neo', sans-serif` },
  layout: {
    background: '#eaeaea',
  },
  colors: {
    blueyGreen: '#2daf7f',
    yellowOchre: '#e19205',
    greyish: '#b6b6b6',
    warmGreyFour: '#979797',
    greyishTwo: '#a7a7a7',
    oceanBlue: '#04609e',
    charcoal: '#242929',
    slateGrey: '#657070',
    bluish: '#1f8ecd',
    reddish: '#c6443e',
    white: '#f2f2f2',
    coolGrey: '#879292',
    brownishGrey: '#5e5e5e',
    coral: '#ee5a52',
    greyishBrown: '#555',
    lightGreyBlue: '#a1b8cd',
    lightBlueGrey: '#b0ceea',
    pinkishGrey: '#d6b5b2',
    brownishGreyTwo: '#666',
    pinkishGreyTwo: '#c0aba8',
    pinkishTan: '#e89c95',
    azure: '#1ea1f7',
  },
};

type ThemeA = typeof themeA;

declare module '@emotion/react' {
  export interface Theme extends ThemeA {}
}

export default themeA;
