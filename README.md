# MD-Premium Handbuch (Docusaurus)

Dieses Projekt ist die Dokumentations-Website für die **MD-Premium Warenwirtschaft** (POStronik). Es ersetzt die bisherige Zammad Knowledge Base.

## Voraussetzungen

- **Node.js** Version 20 oder höher (`node -v`)

## Entwicklung starten

```bash
cd handbuch
npm install
npm run start
```

Die Seite läuft dann unter [http://localhost:3000](http://localhost:3000). Die Startseite leitet automatisch auf **Dokumentation** → **Willkommen** weiter.

## Build für Produktion

```bash
npm run build
```

Der Inhalt liegt danach im Ordner `build/`. Diesen Ordner auf Ihrem Webserver (z. B. Nginx, Apache) unter der gewünschten URL bereitstellen (z. B. `support.postronik.at` oder `handbuch.postronik.at`).

## Struktur der Dokumentation

- **docs/intro.md** – Willkommensseite
- **docs/stammdaten/** – Artikel suchen, Preise, neuer Artikel, Etiketten
- **docs/auftrag-lieferanten/** – Bestellungen, Lieferscheine, Gutschriften, Online-Bestellungen
- **docs/inventur/** – Inventur allgemein, Kasse, MDE, Verbuchen
- **docs/zeitungen/** – Z-Lieferscheine, Remissionen, Reservierungen
- **docs/auftrag-kunden/** – Kundenaufträge, Rechnungen, Warenschwund

Artikel mit dem Hinweis *"Inhalt aus Zammad übernehmen oder hier ergänzen"* sind Platzhalter. Die Texte (und ggf. Bilder/Videos) aus der bisherigen Zammad-KB können Sie hier in Markdown einpflegen.

## Anpassungen

- **Logo / Favicon:** Logo als `static/img/logo.svg` ablegen, Favicon als `static/img/favicon.ico`. In `docusaurus.config.js` sind die Pfade bereits eingetragen.
- **Farben / Schrift:** In `src/css/custom.css` können Sie eigene Styles ergänzen.
- **Seitentitel, Footer:** In `docusaurus.config.js` unter `title`, `tagline`, `themeConfig.navbar`, `themeConfig.footer`.

## Mehrsprachigkeit (optional)

Aktuell ist nur **Deutsch** aktiv (`i18n.defaultLocale: 'de'`). Weitere Sprachen können in `docusaurus.config.js` unter `i18n.locales` und `i18n.localeConfigs` ergänzt werden; die Docs müssten dann z. B. unter `i18n/de/` und `i18n/en/` liegen.

---

*POStronik Datensysteme – MD-Premium Warenwirtschaft*
