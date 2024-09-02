import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'dark', //先黑的
};

const theme = extendTheme({ config });

export default theme;
