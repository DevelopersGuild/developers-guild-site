import { deepMerge } from "grommet/utils";
import { grommet } from 'grommet';

const loftryTheme = deepMerge(grommet, {
  global: {
    colors: {
      "brand": "#fc3d4d",
      "selected": "#D31B2A",
      "accent-1": "#ffd60a",
      "accent-2": "#098589",
      "accent-3": "#686868",
      "accent-4": "9b9b9b",
      "neutral-1": "#8bac",
      "neutral-2": "#cadc9f",
      "neutral-3": "#E87068",
    }
  }
});
export default loftryTheme;
