import MontSerrat from 'public/fonts/Montserrat-variable-font-weight.ttf';
import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Montserrat';
  src: url(${MontSerrat}) format('ttf');
}
`;

export default FontStyles;
