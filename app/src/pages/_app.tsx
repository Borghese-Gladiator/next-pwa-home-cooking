import type { AppProps } from 'next/app'
import React from "react";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import NextNProgress from 'nextjs-progressbar';

import theme from "@/src/utils/theme";

import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NextNProgress />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
