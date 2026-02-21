# XMPS Abschlüsse

Übersicht und Anleitungen zu den Abschluss-Themen der XMPS Kassensoftware. Alle Schritte sind in diesem Handbuch beschrieben.

## Übersicht

| Thema | Kurzbeschreibung |
|-------|------------------|
| [Wechselgelddeklaration](#wechselgelddeklaration) | Ladenanfangsbestand bei Kassierbeginn deklarieren |
| [Geldabschöpfung](#geldabschöpfung) | Geldentnahmen (Bankgeld) deklarieren |
| [Geldzählung](#geldzählung) | Aktuellen Ladeninhalt deklarieren |
| [Nullbeleg](#nullbeleg) | z. B. für Finanzbeamten |
| [Jahresbeleg](#jahresbeleg) | Bei FinanzOnline melden |
| [Bankomat-Tagesabschluss](#bankomat-tagesabschluss) | Täglich für B-K-Terminal |

---

## Wechselgelddeklaration

Die **Wechselgelddeklaration** dient dazu, den **Ladenanfangsbestand** (das Wechselgeld) zu deklarieren, mit dem der Kassier seine Schicht beginnt. So ist nachvollziehbar, wie viel Geld zu Beginn in der Lade war. Die Wechselgelddeklaration ist **jeweils nach dem Anmelden** eines Kassiers durchzuführen.

**So deklarieren Sie das Wechselgeld:**

1. Auf der Seite **„FUNKTION“** wechseln.
2. **Betrag** eingeben – den tatsächlich in der Lade befindlichen Betrag (Wechselgeld).
3. Taste **„Wechselgeld“** betätigen.
4. Taste **„Bar“** betätigen.
5. Taste **„ESC“** betätigen – die Deklaration ist abgeschlossen.  

---

## Geldabschöpfung

Unter **Geldabschöpfung** versteht man das **Deklarieren von Geldentnahmen** aus der Kasse (z. B. Überschuss wird zur Bank gebracht). Die Entnahme wird so in der Kasse verbucht; die Kasse „erwartet“ danach weniger Geld in der Lade. Jede Entnahme sollte **unmittelbar nach der Entnahme** deklariert werden. Die deklarierten Beträge werden bis zum Tagesabschluss aufsummiert.

**So deklarieren Sie eine Geldabschöpfung:**

1. Auf der Seite **„FUNKTION“** wechseln.
2. **Betrag** eingeben – den entnommenen Betrag in Euro.
3. Taste **„Geldabschöpfung“** betätigen.
4. Taste **„Bar“** betätigen.
5. Taste **„ESC“** betätigen – die Deklaration ist gebucht.  

---

## Geldzählung

Die **Geldzählung** dient dazu, den **derzeitigen Inhalt der Geldlade** zu deklarieren – also den Betrag, den Sie tatsächlich gezählt haben. Die Geldzählung kann **beliebig oft** durchgeführt werden; bei jeder neuen Deklaration wird der zuletzt deklarierte Wert überschrieben. So kann die Kasse einen **Vergleich** anstellen: Wie viel **sollte** in der Lade sein (rechnerisch) – und wie viel wurde **tatsächlich** gezählt und deklariert? Zweckmäßig ist die Geldzählung **nach Kassierende** oder für einen **Kassensturz**.

**So deklarieren Sie eine Geldzählung:**

1. Auf der Seite **„FUNKTION“** wechseln.
2. **Betrag** eingeben – den gezählten Betrag, der aktuell in der Lade ist.
3. Taste **„Geldzählung“** betätigen.
4. Taste **„Bar“** betätigen.
5. Taste **„ESC“** betätigen – die Deklaration ist gespeichert.  

---

## Nullbeleg

Ein **Nullbeleg** ist ein Beleg **ohne Verkauf** – die Kasse druckt einen Beleg, auf dem keine Verkäufe verbucht sind. Er kann z. B. vom **Finanzbeamten** verlangt werden (z. B. bei einer Prüfung) oder dient der Dokumentation, dass die Kasse zu einem bestimmten Zeitpunkt keine Verkaufstätigkeit hatte.

**So drucken Sie einen Nullbeleg:**

1. Seite **„FUNKT“** auswählen.
2. Taste **„X/Z“** drücken.
3. Auf **„JA“** drücken (Bestätigung für den **Modus X1**).
4. **9811** eingeben und mit **[JA]** bestätigen – der Nullbeleg wird gedruckt.  

---

## Jahresbeleg

Der **Jahresbeleg** ist ein Abschlussbeleg für das **gesamte Jahr** (alle Umsätze der Kasse). Er wird z. B. für die Steuererklärung oder die Meldung bei **FinanzOnline** benötigt. Der Jahresbeleg muss bei FinanzOnline gemeldet werden.

**So drucken Sie den Jahresbeleg:**

1. Seite **„FUNKT“** auswählen.
2. Taste **„X/Z“** drücken.
3. Auf **„JA“** drücken (Bestätigung für den **Modus X1**).
4. **9833** eingeben und mit **[JA]** bestätigen – der Jahresbeleg wird gedruckt.  

---

## Bankomat-Tagesabschluss

Bei Verwendung von **Bankomat-/Kartenzahlungs-Funktionen** (B-K-Terminal) ist ein **täglicher Tagesabschluss** für das Terminal **unbedingt erforderlich**. Erst durch den erfolgreich durchgeführten Tagesabschluss wird der **Zahlungstransfer zum Konto des Kaufmanns** freigegeben – ohne Tagesabschluss bleiben die Kartenzahlungen „hängig“. Je nach Konfiguration des B-K-Terminals ist dafür die Verwendung einer **TES-Karte** vorgesehen (Details siehe Bedienungsanleitung zum B-K-Terminal).

Der B-K-Tagesabschluss kann **unabhängig** vom Kassen-Tagesabschluss durchgeführt werden und muss nicht zum gleichen Zeitpunkt erfolgen. Er muss aber an **jeder** Kasse, die ein B-K-Terminal nutzt, durchgeführt werden. An der XMPS wird ein **Tagesende-Bericht** gedruckt – darauf werden die Gesamtsumme des B-K-Terminals und die Kasse gegenübergestellt (Vergleich zur Kontrolle).

**So führen Sie den Bankomat-Tagesabschluss durch:**

1. Ebene **„Funktion“** aufrufen.
2. Taste **„X/Z“** betätigen.
3. Modus **„Z“** auswählen und mit **„JA“** bestätigen.
4. **9898** eingeben und mit **„Zwischensumme“** bestätigen – der Tagesabschluss läuft, der Bericht wird gedruckt.

![Bankomat-Tagesabschluss 1](/img/docs/kassa/bankomat-tagesabschluss-1.png)

![Bankomat-Tagesabschluss 2](/img/docs/kassa/bankomat-tagesabschluss-2.png)

![Bankomat-Tagesabschluss 3](/img/docs/kassa/bankomat-tagesabschluss-3.png)  

---

## Verwandte Themen

- [Bedienung (Verkauf, Storno, Retouren …)](/docs/kassa/bedienung)
- [Kassa – Übersicht](/docs/kassa/)
