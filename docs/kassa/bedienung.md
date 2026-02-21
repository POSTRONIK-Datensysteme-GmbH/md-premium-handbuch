# XMPS Bedienung

Übersicht und Anleitungen zu den Bedienungsthemen der XMPS Kassensoftware. Alle Schritte sind in diesem Handbuch beschrieben.

## Übersicht

| Thema | Kurzbeschreibung |
|-------|------------------|
| [Anmelden / Abmelden](#anmelden--abmelden) | Kasse für Kassier nutzen |
| [Multiplikation bei Verkaufsvorgängen](#multiplikation-bei-verkaufsvorgängen) | Mehrere gleiche Artikel auf einmal buchen |
| [Manuelle Verbuchung (PLU)](#manuelle-verbuchung-plu) | PLU- oder EAN-Nr. eingeben |
| [Storno](#storno) | Artikel stornieren (nur letzter Artikel) |
| [Bon-Abbruch](#bon-abbruch) | Aufrechnung komplett abbrechen |
| [Aus- oder Einzahlung](#aus--oder-einzahlung) | z. B. Nachnahme buchen |
| [Lade öffnen / Kein Verkauf](#lade-öffnen--kein-verkauf) | Geldlade ohne Registrierung öffnen |
| [Kassenverbund wiederherstellen](#kassenverbund-wiederherstellen) | Nach Netzwerkstörung |
| [Artikel-Retouren](#artikel-retouren) | Zurückgenommene Artikel verbuchen |
| [Nachlass Betrag](#nachlass-betrag) | Betragsmäßigen Abzug buchen |
| [Rabatt](#rabatt) | Prozentualen Abzug buchen |
| [Kunde parken](#kunde-parken) | Aufrechnung unterbrechen, anderen Kunden bedienen |
| [Krediteinkäufe](#krediteinkäufe-mit-kundennummer) | Auf Kundenkonto verkaufen |
| [Kundeneinzahlungen (Akonto)](#kundeneinzahlungen-mit-akonto) | Zahlung auf Kundenkonto verbuchen |
| [Kundenkonto + / –](#kundenkonto--kundenkonto--) | Saldo ohne Bargeld ändern (z. B. Überweisung) |

---

## Anmelden / Abmelden

Bevor ein Kassier an der Kasse arbeiten kann, muss er sich **anmelden**. Die Kasse ist dann seinem Benutzerkonto zugeordnet, alle Vorgänge werden diesem Kassier zugerechnet. Am Ende der Schicht meldet sich der Kassier wieder **ab**.

**So melden Sie sich an bzw. ab:**

1. Auf der Kasse die Anmeldung aufrufen (je nach Konfiguration: Kassiernummer oder Benutzer auswählen).
2. Zum **Abmelden** die Abmelde-Funktion wählen – die Kasse ist danach wieder im Anmelde-Zustand.

![Anmelden Abmelden](/img/docs/kassa/anmelden-abmelden.png)

---

## Multiplikation bei Verkaufsvorgängen

Werden **mehrere gleiche Artikel** verkauft (z. B. 5× dasselbe Getränk), können Sie **vor** der Bonierung die **Menge** eingeben und dann nur einmal den Artikel erfassen – die Kasse bucht die eingegebene Anzahl. Dafür zuerst die Anzahl eingeben, dann die Taste **X/Datum** drücken. Anschließend kann der Artikel **gescannt**, per **PLU-Nummer** eingegeben oder über eine **Warengruppenbonierung** registriert werden. Wurde ein Artikel einmal gescannt oder per PLU aufgerufen, wird er bei jedem weiteren Drücken der Taste **PLU** wiederholt (ohne erneute Mengeneingabe).

**So buchen Sie mehrere gleiche Artikel (Multiplikation):**

1. **Menge** eingeben (z. B. 5).
2. Taste **„X“** (bzw. **X/Datum**) betätigen.
3. **Artikel scannen** oder **PLU/EAN** eingeben – der Artikel wird mit der eingegebenen Menge in die Aufrechnung übernommen.

---

## Manuelle Verbuchung (PLU)

Artikel, die nicht gescannt werden können (z. B. ohne Barcode), können über die **PLU-** oder **EAN-Nummer** eingegeben werden. Die Nummer wird über den Ziffernblock eingegeben, danach bestätigt die PLU/EAN-Taste die Verbuchung.

**So buchen Sie einen Artikel manuell:**

1. **PLU-** oder **EAN-Nummer** über den Ziffernblock eingeben.
2. Taste **„PLU“** bzw. **„EAN“** betätigen – der Artikel wird in die Aufrechnung übernommen.  

---

## Storno

Mit der Taste **Storno** können Sie einen **bereits bonierten Artikel** wieder aus der Aufrechnung entfernen. Dafür muss der zu stornierende Artikel der **zuletzt** bonierte sein: Sie drücken **Storno** und bonieren den Artikel **nochmals** (als Storno) – er wird abgezogen. So können Sie z. B. einen versehentlich doppelt gescannten Artikel oder einen falschen Artikel rückgängig machen.

:::caution
Die Storno-Funktion gilt **nur für den jeweils zuletzt bonierten** Artikel. Liegt der zu stornierende Artikel weiter zurück in der Aufrechnung, müssen Sie ggf. die ganze Aufrechnung abbrechen (Bon-Abbruch) und neu beginnen.
:::

**So stornieren Sie einen Artikel:**

1. Sicherstellen, dass der **zu stornierende Artikel** der **letzte** in der Aufrechnung ist (ggf. zuerst andere Artikel stornieren oder Aufrechnung abbrechen).
2. Taste **„Storno“** betätigen.
3. Den **zu stornierenden Artikel** erneut **scannen** bzw. per PLU eingeben – der Artikel wird storniert (abgezogen).  

---

## Bon-Abbruch

Über die Taste **Abbruch** kann eine Aufrechnung **jederzeit** abgebrochen werden. Die Funktion wirkt so, als würden **alle** in der Aufrechnung bonierten Artikel storniert – sämtliche Summenspeicher werden bereinigt. Die Taste **Abbruch** beendet auch laufende Aktionen in REG oder RETOUR (z. B. Geldzählung, Geldabschöpfung, Wechselgeld-Deklaration).

:::tip
Wenn in einer Aufrechnung **mehrere Fehler** passiert sind, ist es oft am einfachsten, den gesamten Kassiervorgang abzubrechen und von vorne zu beginnen.
:::

**So brechen Sie eine Aufrechnung ab:**

1. Taste **„Abbruch“** betätigen – die Aufrechnung ist gelöscht, Sie können neu anfangen.  

---

## Aus- oder Einzahlung

**Auszahlung:** z. B. wenn Sie eine Nachnahmesendung annehmen – der Betrag wird aus der Kasse entnommen und als Auszahlung gebucht. **Einzahlung:** wenn Geld in die Kasse eingelegt wird (z. B. Wechselgeld nachfüllen), wird der Betrag als Einzahlung gebucht. Bei der Einzahlung ist der Ablauf gleich wie bei der Auszahlung, nur die Taste „Einzahlung“ wird verwendet.

**So buchen Sie eine Aus- oder Einzahlung:**

1. Auf die Seite **„FUNKTION“** wechseln.
2. **Betrag** eingeben (den tatsächlich ausgezahlten bzw. eingezahlten Betrag).
3. Taste **„Auszahlung“** oder **„Einzahlung“** betätigen – der Vorgang ist gebucht.  

---

## Lade öffnen / Kein Verkauf

Wenn Sie die **Geldlade öffnen** möchten, **ohne** einen Verkauf zu buchen (z. B. um Wechselgeld zu entnehmen oder einzulegen), nutzen Sie diese Funktion. Es wird keine Registrierung vorgenommen – nur die Schublade öffnet sich.

**So öffnen Sie die Lade ohne Verkauf:**

1. Taste **„Lade auf / Kein Verkauf“** betätigen – die Schublade bzw. Geldlade öffnet sich.

---

## Kassenverbund wiederherstellen

Die Kassen in einem **Kassenverbund** stehen während des Betriebs in Netzwerk-Kommunikation. Wenn während eines Vorgangs eine oder mehrere Kassen nicht erreichbar sind (z. B. Netzwerkausfall), erscheint eine Fehlermeldung und die Verbindung wird unterbrochen – die Kassen können aber einzeln weiterarbeiten. **Nach der Behebung** der Störung müssen die Kassen wieder miteinander verbunden werden. Dafür dient der Vorgang **„Kassenverbund wiederherstellen“**.

**So stellen Sie den Kassenverbund wieder her:**

1. Kasse in den Modus **„X“** bringen.
2. **4301** eingeben.
3. **„Zwischensumme“** drücken – die Kasse druckt einen Bericht über alle im Netzwerk vorhandenen Kassen.
4. Kasse wieder in den Modus **„REG 1“** bringen – der Verbund ist wiederhergestellt.  

---

## Artikel-Retouren

Wenn ein **Bon bereits abgeschlossen** ist, sind die Artikel vom Lagerbestand abgebucht. Wird ein solcher Artikel vom Kunden **zurückgegeben**, müssen Lagerbestand und Summenspeicher korrigiert werden – dazu dient die **Retour**-Funktion. Außerdem ist Retour die **einzige Möglichkeit**, Fehler zu korrigieren, die erst **nach** Bonabschluss auffallen (z. B. falscher Preis, Artikel versehentlich doppelt boniert).

**So buchen Sie eine Retour:**

1. Taste **„Retour“** betätigen – die Kasse ist im Retour-Modus.
2. **Artikel scannen** oder **EAN** über Ziffernblock eingeben.
3. Mit Taste **„Bar“** abschließen – die Retour ist verbucht, Lager und Summen sind angepasst.

![Artikel-Retouren](/img/docs/kassa/artikel-retouren.png)  

---

## Nachlass Betrag

Unter **Nachlass** versteht man einen **betragsmäßigen Abzug** vom Verkaufspreis – entweder von einem einzelnen Artikel oder von der **gesamten Aufrechnung**. Sie geben den **Betrag** ein, um den reduziert wird (nicht den Prozentsatz). Nach einem Artikel wird der Nachlass nur auf diesen Artikel angewendet; nach **Zwischensumme** auf die ganze Aufrechnung.

**So gewähren Sie einen Nachlass (Betrag):**

1. **Artikel scannen** oder **PLU/EAN** eingeben (oder zuerst **Zwischensumme** drücken, wenn der Nachlass für die ganze Aufrechnung gilt).
2. **Nachlass-Betrag** in Euro eingeben (z. B. 2,00).
3. Taste **„Nachlass Betrag“** betätigen – der Abzug ist gebucht.

![Nachlass Betrag](/img/docs/kassa/nachlass-betrag.png)

---

## Rabatt

**Rabatt** ist ein **prozentualer Abzug** vom Verkaufspreis – entweder von einem Artikel oder von der ganzen Aufrechnung. Sie geben den **Prozentsatz** ein (z. B. 10 für 10 %). Die Taste **Rabatt** kann mit einem **festen Prozentsatz** programmiert sein; wenn Sie trotzdem einen Prozentsatz eingeben, überschreibt dieser den voreingestellten Satz.

**So gewähren Sie einen Rabatt (%):**

1. **Artikel scannen** oder **PLU/EAN** eingeben (oder **Zwischensumme** drücken, wenn der Rabatt für die ganze Aufrechnung gilt).
2. **Rabatt in %** eingeben (z. B. 5 oder 10).
3. Taste **„Rabatt“** betätigen – der prozentuale Abzug ist gebucht.

![Rabatt](/img/docs/kassa/rabatt.png)

---

## Kunde parken

Möchte ein Kunde während des Verkaufs **noch einen Artikel holen** (z. B. aus dem Verkaufsraum), können Sie ihn **„parken“**: Die aktuelle Aufrechnung wird unterbrochen und gespeichert. Sie können inzwischen **einen anderen Kunden** bedienen. Anschließend rufen Sie die geparkte Aufrechnung wieder auf und führen sie fort.

**So parken Sie einen Kunden:**

1. Taste **„Kunde parken“** betätigen – die Aufrechnung wird geparkt, Sie können einen neuen Vorgang starten.
2. Zum **Fortsetzen** der geparkten Aufrechnung: Taste **„Kunde fortsetzen“** betätigen – die vorherige Aufrechnung erscheint wieder.

![Kunde parken](/img/docs/kassa/kunde-parken.png)

---

## Krediteinkäufe mit Kundennummer

Mit der XMPS können **Kundensalden** (Kredit) geführt werden. Beim **Krediteinkauf** wird der Einkauf nicht bar bezahlt, sondern dem **Kundenkonto** belastet. Nach Abschluss des Einkaufs speichert die Kasse den neuen Saldo des Kunden (vorheriger Saldo minus Einkauf bzw. plus Einkauf je nach Buchungslogik).

**So buchen Sie einen Krediteinkauf:**

1. **Kundennummer** eingeben.
2. Taste **„Kunden“** betätigen – der Kunde ist ausgewählt.
3. **Artikel scannen** wie bei einem normalen Verkauf.
4. Taste **„Zwischensumme“** betätigen.
5. Taste **„Kredit“** betätigen – der Betrag wird dem Kundenkonto belastet, der Bon ist abgeschlossen.

![Krediteinkäufe](/img/docs/kassa/krediteinkaeufe.png)

---

## Kundeneinzahlungen mit AKONTO

**Akonto** dient dazu, **Zahlungen** des Kunden zu verbuchen, die den **offenen Kundensaldo** vermindern (z. B. der Kunde zahlt eine Rechnung oder eine Teilzahlung). Der Kunde gibt Geld – Sie buchen es als Einzahlung auf sein Kundenkonto; der Saldo wird reduziert.

**So buchen Sie eine Kundeneinzahlung (Akonto):**

1. **Kundennummer** eingeben.
2. Taste **„Akonto“** betätigen.
3. **Betrag** eingeben, den der Kunde einzahlt.
4. Taste **„BAR“** betätigen – die Einzahlung ist verbucht.
5. Taste **„ESC“** betätigen – Sie verlassen den Akonto-Vorgang.

![Kundeneinzahlungen AKONTO](/img/docs/kassa/kundeneinzahlungen-akonto.png)

---

## Kundenkonto +, Kundenkonto –

Diese Funktionen ändern den **Kundensaldo**, **ohne** dass Bargeld in der Kasse bewegt wird. Typischer Fall: Der Kunde zahlt **per Banküberweisung** – Sie buchen die Zahlung mit **Kundenkonto –**, der Saldo sinkt, die Kassenlade bleibt unberührt.

- **Kundenkonto –** reduziert die **ausstehende Forderung** beim Kunden (Kunde hat gezahlt).
- **Kundenkonto +** erhöht die ausstehende Forderung (z. B. Nachbelastung, Storno einer Gutschrift).

**So buchen Sie eine Saldoänderung ohne Bargeld:**

1. **Kundennummer** eingeben.
2. Taste **„Kundenkonto –“** (oder **„Kundenkonto +“**) betätigen.
3. **Betrag** eingeben.
4. Taste **„Kundenkonto –“** (bzw. **„Kundenkonto +“**) **nochmals** betätigen – die Buchung ist ausgeführt.

![Kundenkonto plus minus](/img/docs/kassa/kundenkonto-plus-minus.png)

---

## Verwandte Themen

- [Abschlüsse (Wechselgeld, Nullbeleg, Tagesabschluss …)](/docs/kassa/abschluesse)
- [Kassa – Übersicht](/docs/kassa/)
