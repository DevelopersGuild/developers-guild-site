import { deepMerge } from "grommet/utils";
import { grommet } from 'grommet';

const loftryTheme = deepMerge(grommet, {
    global: {
      font: {
        family: "'DM Serif Display', serif",
        family2: "'Montserrat', sans-serif"
      },
      size: {
          medium: "438px",
          large: "568px",
          xxlarge: "1536px"
      }
    }
  });
  export default loftryTheme;