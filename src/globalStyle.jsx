import { createGlobalStyles } from 'goober/global';

export const HD = `@media screen and (min-width: 1800px)`;
export const desktop = `@media screen and (max-width: 1339px)`;
export const tablet = `@media screen and (max-width: 1023px)`;
export const mobile = `@media screen and (max-width: 767px)`;
export const mobileMedium = `@media screen and (max-width: 480px)`;

export const GlobalStyles = createGlobalStyles`
  @font-face {
    font-family: "Circular Std";
    src: url("/fonts/circular-std-medium-500.ttf");
    font-weight: 500;
    font-style: normal;
  }
  
  :root {
    /* colors */
    --white: #ffffff;
    --grey-25: #fcfcfd;
    --grey-50: #f9fafb;
    --grey-100: #eff2f9;
    --grey-200: #dfe5f0;
    --grey-300: #bbbec4;
    --grey-400: #667085;
    --grey-500: #344054;
    --grey-600: #333333;
    /* bing blue */
    --blue-100: #d9ecf9;
    --blue-200: #9cceed;
    --blue-300: #49a9e5;
    --blue-400: #1f75aa;
    /* bing orange */
    --orange-100: #ffeee7;
    --orange-200: #ffceba;
    --orange-300: #f8a481;
    --orange-400: #e37a4e;
    /* bing red */
    --red-100: #ffeef3;
    --red-200: #e3b4c2;
    --red-300: #ca7890;
    --red-400: #d2446e;
    /* bing lilac */
    --lilac-100: #ece5ef;
    --lilac-200: #d1b2e0;
    --lilac-300: #855e99;
    --lilac-400: #6c3787;
    /* bing accent */
    --broom: #efcf24;
    --coral: #ff715d;
    --blush: #ea6390;
    --highblue: #49a9e5;
    --columbiablue: #bbdef0;
    --minttulip: #c8ead3;
  
    /* fonts */
    font-family: "Circular Std", sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    background: url(/images/bg.svg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100%;
    background-position-y: bottom;
    /* --bodyFont: "Avenir", sans-serif; */
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-size: 16px;
    letter-spacing: 0.02em;
    width: 100%;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ol,
    ul,
    menu {
      margin: 0;
      padding: 0;
    }

    img {
      display: block;
      height: auto;
      user-select: none;
      user-drag: none;
    }

    svg {
      display: block;
    }
  
    /* font types */
    .type-title1 {
      font-weight: 450;
      font-size: 2.25rem;
      line-height: 46px;
    }
    .type-title2 {
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 23px;
    }
    .type-title3 {
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 18px;
    }
    .type-title4 {
      font-weight: 500;
      font-size: 0.75rem;
      line-height: 15px;
    }
    .type-body3 {
      font-weight: 450;
      font-size: 0.75rem;
      line-height: 15px;
      letter-spacing: 0.02em;
    }
    .type-subtitle1 {
      font-weight: 450;
      font-size: 0.625rem;
      line-height: 13px;
      letter-spacing: 0.065em;
    }
    .type-p1 {
      font-weight: 400;
      font-size: 1rem;
      line-height: 24px;
    }
    type-body1 {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 120%;
      letter-spacing: 0.02em;
    }
  }
  a {
    text-decoration: none;
  }
`;