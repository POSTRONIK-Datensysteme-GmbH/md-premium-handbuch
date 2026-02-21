/**
 * Client-Modul: Fehler-Logging für Debugging
 * Logs in Browser-Konsole (F12) und an Debug-Server (debug-eadf9c.log)
 */

const DEBUG_ENDPOINT = 'http://127.0.0.1:7894/ingest/adaa5f0b-5095-43b5-8142-f1dabcec0432';
const SESSION_ID = 'eadf9c';

function sendLog(payload) {
  const body = {
    sessionId: SESSION_ID,
    ...payload,
    timestamp: Date.now(),
  };
  fetch(DEBUG_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': SESSION_ID },
    body: JSON.stringify(body),
  }).catch(() => {});
}

function log(msg, data) {
  const prefix = '[Handbuch]';
  if (data !== undefined) {
    console.log(prefix, msg, data);
  } else {
    console.log(prefix, msg);
  }
}

// Nur im Browser ausführen (SSR/Build: window ist nicht definiert)
if (typeof window !== 'undefined') {
  // #region agent log
  // H-A/D: Beim Laden pathname und Locale loggen (ob Route /en/ oder 404)
  sendLog({
    location: 'clientModule.js:load',
    message: 'Client-Modul geladen',
    data: {
      pathname: window.location.pathname,
      href: window.location.href,
      lang: document.documentElement?.lang,
      search: window.location.search,
    },
    hypothesisId: 'A',
  });
  // #endregion

  log('Client-Modul geladen', {
    pathname: window.location.pathname,
    href: window.location.href,
  });

  // #region agent log
  // H-A/B/E: Jeden globalen Fehler an Debug-Server senden (exakte Zeile + Stack)
  window.addEventListener('error', (event) => {
    sendLog({
      location: 'clientModule.js:error',
      message: 'Globaler Fehler',
      data: {
        errorMessage: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack?.slice(0, 800),
        pathname: window.location.pathname,
      },
      hypothesisId: 'E',
    });
    console.error('[Handbuch] Fehler:', event.message, {
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      error: event.error?.stack,
    });
  });
  // #endregion

  // #region agent log
  window.addEventListener('unhandledrejection', (event) => {
    sendLog({
      location: 'clientModule.js:unhandledrejection',
      message: 'Unbehandelte Promise-Rejection',
      data: {
        reason: String(event.reason?.message ?? event.reason),
        pathname: window.location.pathname,
      },
      hypothesisId: 'B',
    });
    console.error('[Handbuch] Unbehandelte Promise-Rejection:', event.reason);
  });
  // #endregion
}
