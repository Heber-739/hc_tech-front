//mypreset.ts
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const accent = '#009EF7';
const white = '#fff';
const bg_secondary = '#012245';
const txt_gray = '#8695A7';

const dark = '#000';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#E6F5FF',
      100: '#B3E1FF',
      200: '#80CDFF',
      300: '#4DB9FF',
      400: '#1AA5FF',
      500: '#009EF7',
      600: '#007ACF',
      700: '#005A9F',
      800: '#003A6F',
      900: '#001A3F',
      950: '#000F27',
    },
    contrast:{
  50: '#E6EAF0',
  100: '#B3B9C9',
  200: '#8088A2',
  300: '#4D577B',
  400: '#1A2654',
  500: '#012245',
  600: '#001B3A',
  700: '#00122A',
  800: '#000B1B',
  900: '#00050D',
  950: '#000208'
}
  },
  components: {

    button: {
      root: {
        borderRadius: '2px',
        paddingX: '20px',
        paddingY: '7px',
      },
      colorScheme: {
        light: {
          root: {
            secondary:{
              color: accent,
              background: white,
              borderColor:accent,
              activeBackground:white,
              activeBorderColor:accent,
              activeColor:accent,
              focusRing:{ color: accent },
              hoverBackground:accent,
              hoverBorderColor:accent,
              hoverColor:white
            },
            contrast:{
              color: txt_gray,
              background: bg_secondary,
              borderColor:bg_secondary,
              activeBackground:accent,
              activeBorderColor:accent,
              activeColor:white,
              focusRing:{ color: txt_gray },
              hoverBackground:txt_gray,
              hoverBorderColor:txt_gray,
              hoverColor:bg_secondary
            }
          },
        },
      },
    },
  },
});

export default MyPreset;
