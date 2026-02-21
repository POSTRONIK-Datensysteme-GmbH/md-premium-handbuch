# Rechnungskontrolle Zeitung

Beim Import von EH-2000-Belegen werden auch Rechnungen der Grossisten für Zeitungen importiert. Zeitungsrechnungen enthalten **Belastungen** und **Gutschriften**, die als getrennte Belege in **Datenpflege** → **EH2000** → **Importierte Belege** abgelegt werden.

**Belastungen** sollten zu Lieferungen passen. **Gutschriften** sollten zu Remissionen und negativen Differenzmeldungen (Unterlieferungen) passen. Der Abgleich erfolgt über **Rechnungen verbuchen**.

## Abgleich

- Für jede **Belastung** muss eine ausgaben- und mengenmäßig übereinstimmende **Lieferung** oder **positive Differenzmeldung** mit Belegdatum vor dem Rechnungsdatum verbucht sein.
- Für jede **Gutschrift** muss eine ausgaben- und mengenmäßig übereinstimmende **Remission** oder **negative Differenzmeldung** mit Belegdatum vor dem Rechnungsdatum verbucht sein.

Nicht auflösbare Positionen können u. a. entstehen durch: Zähl- oder Erfassungsfehler, verschiedene Ausgabenummern, als Text verrechnete Positionen (z. B. Romane), zu spät remittierte Objekte. Diese können manuell kontrolliert, **ausgebucht** (Fehler akzeptiert) oder zur **Reklamation** markiert werden.

## Ansichten

- **Lieferungen/Remissionen:** **Rechnungen verbuchen** starten → Fenster **EH2000 ReKtrl Lie/Rem** öffnen. Grossist, Liefer- und Remissionszeitraum wählen. Anzeige der MDP-Belegpositionen ohne Verrechnung (Spalten u. a.: Aco_Id, Menge Diff., Menge Ges., Menge Verr., Rekl.Datum). Doppelklick auf Zeile öffnet den Lieferantenbeleg.
- **Rechnung/Gutschrift:** Fenster **EH2000 ReKtrl RE/GS** öffnen. Grossist und Rechnungsdatum wählen. Anzeige der Belastungs- und Gutschriftspositionen ohne MDP-Zuordnung (Spalten u. a.: Liefer-Art, LiefArt Nr, Pos-Nr, Pos-Nr Sub, Rekl.Datum).

## Ausbuchen

In beiden Fenstern: Eine oder mehrere Zeilen markieren → **Rechtsklick** → **Position(en) ausbuchen**. Durch Ausbuchen akzeptieren Sie die fehlende Zuordnung. Empfohlene Reihenfolge: Zuerst zu spät remittierte Objekte in Lief/Rem ausbuchen, dann übrige Positionen in beiden Fenstern abgleichen (z. B. gleiche Menge, unterschiedliche Ausgabenummer).

## Reklamation

Markieren: **Rechtsklick** → **Position(en) zur Reklamation markieren**. Entfernen: **Position(en) aus Reklamation löschen**. Anschließend **Datenpflege** → **EH2000** → **Rechnungen** → **EH2000 RE Reklamation drucken**: Filiale, Reklamationsdatum von/bis, Grossist wählen, **OK**. Bericht drucken oder per **Export** an den Grossisten mailen.

## Screenshots

![Rechnungen verbuchen](/img/docs/zeitungen-rechnungskontrolle-zeitung-1.png)

![EH2000 ReKtrl Lie/Rem](/img/docs/zeitungen-rechnungskontrolle-zeitung-2.png)

![EH2000 ReKtrl RE/GS](/img/docs/zeitungen-rechnungskontrolle-zeitung-3.png)

![Positionen ausbuchen](/img/docs/zeitungen-rechnungskontrolle-zeitung-4.png)

![Zur Reklamation markieren](/img/docs/zeitungen-rechnungskontrolle-zeitung-5.png)

![Reklamations-Bericht drucken](/img/docs/zeitungen-rechnungskontrolle-zeitung-6.png)

![Export an Grossist](/img/docs/zeitungen-rechnungskontrolle-zeitung-7.png)

![Reklamation – Übersicht](/img/docs/zeitungen-rechnungskontrolle-zeitung-8.png)

## Verwandte Themen

- [Zeitungs-Lieferscheine übernehmen](/docs/zeitungen/zeitungs-lieferscheine-uebernehmen)
- [Zeitungs-Nachbestellungen](/docs/zeitungen/zeitungs-nachbestellungen)
- [Lieferdifferenzen erfassen](/docs/zeitungen/lieferdifferenzen-erfassen)
