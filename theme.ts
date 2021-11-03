import { extendTheme, theme } from "@chakra-ui/react";

import { THEME_CUSTOME } from "./app/constants";

export default extendTheme({
  colors: {
    primary: theme.colors[THEME_CUSTOME.color],
  },
  styles: {
    global: {
      body: {
        backgroundColor: "primary.50",
      },
    },
  },
});
