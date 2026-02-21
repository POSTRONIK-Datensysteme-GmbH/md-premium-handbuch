// @ts-check
// https://docusaurus.io/docs/sidebar

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  handbuchSidebar: [
    'intro',
    'produkte-ueberblick',
    {
      type: 'category',
      label: 'Warenwirtschaft (MD-Premium)',
      items: [
        {
          type: 'category',
          label: 'Stammdaten',
          link: { type: 'doc', id: 'stammdaten/index' },
          items: [
            'stammdaten/bestehende-artikel-suchen-barcode',
            'stammdaten/bestehende-artikel-suchen-bezeichnung',
            'stammdaten/bestehende-artikel-suchen-warengruppe',
            'stammdaten/bestehende-artikel-verkaufspreis-aendern',
            'stammdaten/bestehende-artikel-einkaufspreis-aendern',
            'stammdaten/neuer-artikel-fremdartikel',
            'stammdaten/etiketten-drucken',
            'stammdaten/kunden-erstellen',
            'stammdaten/lieferanten-erstellen',
          ],
        },
        {
          type: 'category',
          label: 'Auftrag Lieferanten',
          link: { type: 'doc', id: 'auftrag-lieferanten/index' },
          items: [
            'auftrag-lieferanten/lieferantenbeleg-erfassen',
            'auftrag-lieferanten/lieferanten-bestellung',
            'auftrag-lieferanten/lieferanten-bestellung-aus-vorschlag',
            'auftrag-lieferanten/lieferantenlieferschein-erfassen',
            'auftrag-lieferanten/lieferanten-gutschrift',
            'auftrag-lieferanten/offene-bestellung-uebernehmen',
            'auftrag-lieferanten/offene-lieferantenlieferscheine-uebernehmen',
            'auftrag-lieferanten/tobaccoland-bestellung-online',
            'auftrag-lieferanten/philip-morris-bestellung-online',
            'auftrag-lieferanten/moosmayr-bestellung-online',
          ],
        },
        {
          type: 'category',
          label: 'Auftrag Kunden',
          link: { type: 'doc', id: 'auftrag-kunden/index' },
          items: [
            'auftrag-kunden/kunden-rechnungen-ausdrucken',
            'auftrag-kunden/automaten-lager-umbuchung',
            'auftrag-kunden/warenschwund-erfassen',
            'auftrag-kunden/md-auftrag-erstellen',
          ],
        },
        {
          type: 'category',
          label: 'Zeitungen',
          link: { type: 'doc', id: 'zeitungen/index' },
          items: [
            'zeitungen/zeitungs-lieferscheine-uebernehmen',
            'zeitungen/lieferdifferenzen-erfassen',
            'zeitungen/remissionen',
            'zeitungen/retourenaufruf-mde',
            'zeitungen/vorremission-aus-lieferscheinen',
            'zeitungen/vorremission-mit-barcode',
            'zeitungen/remissionsaufruf-abschliessen',
            'zeitungen/zeitungs-nachbestellungen',
            'zeitungen/zeitungsreservierungen',
            'zeitungen/zeitung-reservierungsliste',
            'zeitungen/rechnungskontrolle-zeitung',
          ],
        },
        {
          type: 'category',
          label: 'Inventur',
          link: { type: 'doc', id: 'inventur/index' },
          items: [
            'inventur/inventur-allgemein',
            'inventur/inventurerfassung-kasse',
            'inventur/inventurerfassung-mde',
            'inventur/inventurdaten-verbuchen',
            'inventur/artikel-ohne-inventur-bereinigen',
            'inventur/inventurliste-stichtag',
            'inventur/inventurdaten-zuruecksetzen',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Weitere Produkte',
      items: [
        {
          type: 'category',
          label: 'Kassa (XMPS)',
          link: { type: 'doc', id: 'kassa/index' },
          items: [
            'kassa/bedienung',
            'kassa/abschluesse',
          ],
        },
        {
          type: 'category',
          label: 'InventarPro (MDE)',
          link: { type: 'doc', id: 'inventarpro/index' },
          items: [
            'inventarpro/schnellstart',
            'inventarpro/anleitung',
          ],
        },
        {
          type: 'category',
          label: 'Erweiterungen',
          link: { type: 'doc', id: 'erweiterungen/index' },
          items: [
            'erweiterungen/automatenverwaltung',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
