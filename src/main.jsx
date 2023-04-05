import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from "@sentry/react";
import Main from '@/MainPage';
import { setup } from "goober";
import { GlobalStyles } from '@/globalStyle';

if (import.meta.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: "https://e09442c4952b4c4cb8bda5b17e8f3def@o4504934536642560.ingest.sentry.io/4504935029014528",
    integrations: [new Sentry.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

setup(React.createElement);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Main />
  </React.StrictMode>,
)
