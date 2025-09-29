//mypreset.ts
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const accent = '#009EF7';
const white = '#fff';
const bg_secondary = "#012245"
const txt_gray = "#8695A7"

const dark = '#000';


const MyPreset = definePreset(Aura, {
  semantic: {
        colorScheme: {
            light: {
              root:{
                text:"#000000"
              }
            },
            dark: {
              root:{
                textColor:"#000000"
              }

            }
        }
    },

  components: {
    button: {
      root:{
        borderRadius:'2px',
        paddingX:'20px',
        paddingY:'7px',
      },
      colorScheme: {
        dark: {
          root: {
            primary: {
              color: white,
              background: accent,
              borderColor:accent,
              activeBackground:accent,
              activeBorderColor:accent,
              activeColor:white,
              focusRing:{ color: accent },
              hoverBackground:white,
              hoverBorderColor:accent,
              hoverColor:accent
            },
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
