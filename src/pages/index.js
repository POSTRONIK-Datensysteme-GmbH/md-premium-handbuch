import React from 'react';
import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

const DEBUG_ENDPOINT = 'http://127.0.0.1:7894/ingest/adaa5f0b-5095-43b5-8142-f1dabcec0432';
const SESSION_ID = 'eadf9c';

export default function Home() {
  const introUrl = useBaseUrl('/docs/intro');
  // #region agent log
  // H-C/D: Redirect-Ziel und aktueller Pfad (ob useBaseUrl/Route für EN stimmt)
  if (typeof window !== 'undefined') {
    fetch(DEBUG_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': SESSION_ID },
      body: JSON.stringify({
        sessionId: SESSION_ID,
        location: 'index.js:Home',
        message: 'Index-Redirect',
        data: { pathname: window.location.pathname, introUrl },
        timestamp: Date.now(),
        hypothesisId: 'C',
      }),
    }).catch(() => {});
  }
  // #endregion
  return <Redirect to={introUrl} />;
}
