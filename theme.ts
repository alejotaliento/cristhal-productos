import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
    colors: {
        primary: theme.colors["gray"],
    },
    styles: {
        global: {
            body: {
                backgroundColor: "primary.50",
            }
        }

    }
})