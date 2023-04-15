import { createGlobalStyles } from "goober/global";

export const HD = `@media screen and (min-width: 1800px)`;
export const desktop = `@media screen and (max-width: 1440px)`;
export const desktopMidi = `@media screen and (max-width: 1280px)`;
export const tablet = `@media screen and (max-width: 1023px)`;
export const mobile = `@media screen and (max-width: 767px)`;
export const mobileMedium = `@media screen and (max-width: 520px)`;
export const mobileSmall = `@media screen and (max-width: 480px)`;
export const mobileExtraSmall = `@media screen and (max-width: 340px)`;

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
    --black: #000000;
    --grey-4: #BDBDBD;
    --grey-5: #E0E0E0;
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
    --red: #EB5757;
    --yellow: #F2C94C;
    --green-2: #27AE60;
    --success: #219653;
  
    /* fonts */
    font-family: "Circular Std", sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    /* --bodyFont: "Avenir", sans-serif; */
    --lato-font: 'Lato', sans-serif;
    
    /* border radius */
    --br-sm: 0.5px; 
    --br: 4px; 
    --br-lg: 6px; 
    --br-xl: 8px; 
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

    --nav-width-collapsed: 7.375rem;
    --nav-width-expanded: 18.3125rem;
    --content-window-width-expanded: calc(100vw - var(--nav-width-expanded));
    --content-window-width-collapsed: calc(100vw - var(--nav-width-collapsed));
  
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
    .type-body1 {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 120%;
      letter-spacing: 0.02em;
    }
    .type-body2 {
      font-weight: 450;
      font-size: 0.875rem;
      line-height: 155.5%;
    }
    .type-body5 {
      font-size: 36px;
      font-weight: lighter;
      line-height: 51px;
      letter-spacing: 0em;
    }
    .calendar-overlay-title {
      font-size: 10px;
      font-weight: 700;
      line-height: 163.2%;
    }
    .calendar-overlay-time {
      font-size: 10px;
      font-weight: 450;
      line-height: 163.2%;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  .react-datepicker__input-container {
    width: 100%;
    height: 100%;
  }
  
  .date-picker {
    width: 100%;
    height: 40px;
    border-radius: 4px; 
    color: #103C1B; 
    border: none;
    padding: 8px 10px;
  }
  .date-picker:focus{
   background: white;
   border: #ddd;
  }
  
  .react-datepicker {
    box-sizing: border-box;
    min-height: 284px !important;
    max-height: 284px !important;
  }
  
  .react-datepicker-popper { 
    z-index: 9999;
    background:red;
  }

  .form-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.75rem 1.25rem;
    width: 100%;
  }
  .field-flex-basis {
    flex-basis: calc(25% - 15px);
    ${mobile} {
      flex-basis: calc(50% - 10px);
    }
    ${mobileMedium} {
      flex-basis: 100%;
    }
    ${HD} {
      flex-basis: calc(20% - 16px);
    }
  }
`;
