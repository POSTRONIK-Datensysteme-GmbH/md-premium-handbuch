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

Kasse für einen Kassier freigeben bzw. wieder abmelden.

![Anmelden Abmelden](/img/docs/kassa/anmelden-abmelden.png)

---

## Multiplikation bei Verkaufsvorgängen

Werden mehrere gleiche Artikel verkauft, kann vor der Bonierung multipliziert werden: zuerst die **Anzahl** eingeben, dann die Taste **X/Datum** drücken. Anschließend Artikel scannen, PLU-Nummer eingeben oder Warengruppenbonierung nutzen.

**Schritte:**

1. Menge eingeben  
2. Taste **„X“** betätigen  
3. Artikel scannen oder PLU/EAN eingeben  

Wurde ein Artikel gescannt oder per PLU aufgerufen, wird er nach jedem erneuten Drücken der Taste **PLU** wiederholt.

---

## Manuelle Verbuchung (PLU)

- PLU- oder EAN-Nr. über Ziffernblock eingeben  
- Taste **PLU / EAN** betätigen  

---

## Storno

Mit der Taste **Storno** können Artikel storniert werden, die in der Aufrechnung weiter zurück liegen. Zuerst die Taste **Storno** drücken, anschließend den zu stornierenden Artikel **nochmals bonieren**.

:::caution
Die Funktion gilt nur für den **jeweils nächsten** (zuletzt bonierten) Artikel.
:::

**Schritte:**

1. Artikel auswählen (der zu stornierende muss zuletzt boniert sein)  
2. Taste **„Storno“** betätigen  

---

## Bon-Abbruch

Über die Taste **Abbruch** kann eine Aufrechnung jederzeit abgebrochen werden. Alle in der Aufrechnung bonierten Artikel gelten als storniert, die Summenspeicher werden bereinigt. Sinnvoll z. B. wenn in einer Aufrechnung mehrere Fehler auftreten – dann den Vorgang abbrechen und von neuem beginnen.

**Schritt:** Taste **„Abbruch“** betätigen  

---

## Aus- oder Einzahlung

Buchen einer Auszahlung (z. B. Annahme einer Nachnahmesendung) oder Einzahlung.

**Schritte:**

1. Auf der Seite **„FUNKTION“** wechseln  
2. Betrag eingeben  
3. Taste **„Einzahlung“** oder **„Auszahlung“** betätigen  

---

## Lade öffnen / Kein Verkauf

Zum Geldwechseln oder aus anderen Gründen die Geldlade **ohne** eine Registrierung öffnen.

**Schritt:** Taste **„Lade auf / Kein Verkauf“** betätigen – die Schublade öffnet sich.

---

## Kassenverbund wiederherstellen

Nach einer Verbundstörung (z. B. Netzwerkausfall) die Kassen wieder verbinden.

**Schritte:**

1. Kasse in den Modus **„X“** bringen  
2. **4301** eingeben  
3. **„Zwischensumme“** drücken  
4. Die Kasse druckt einen Bericht über alle im Netzwerk vorhandenen Kassen  
5. Kasse in den Modus **„REG 1“** bringen  

---

## Artikel-Retouren

Bereits verkaufte Artikel werden wieder zurückgenommen – Lagerbestand und Summenspeicher müssen korrigiert werden. Auch um Fehler zu korrigieren, die erst nach Bonabschluss auffallen (z. B. falscher Preis, versehentlich boniert).

![Artikel-Retouren](/img/docs/kassa/artikel-retouren.png)

**Schritte:**

1. Taste **„Retour“** betätigen  
2. Artikel scannen oder EAN eingeben  
3. Mit Taste **„Bar“** abschließen  

---

## Nachlass Betrag

Betragsmäßiger Abzug vom Verkaufspreis eines Artikels oder der ganzen Aufrechnung.

**Schritte:**

1. Artikel scannen oder PLU/EAN eingeben (oder nach **Zwischensumme** für die ganze Aufrechnung)  
2. Nachlass-**Betrag** eingeben  
3. Taste **„Nachlass Betrag“** betätigen  

![Nachlass Betrag](/img/docs/kassa/nachlass-betrag.png)

---

## Rabatt

Prozentualer Abzug vom Verkaufspreis eines Artikels oder der ganzen Aufrechnung. Die Taste **Rabatt** kann mit einem festen Prozentsatz programmiert sein; wird ein Prozentsatz eingegeben, überschreibt er den voreingestellten Satz.

**Schritte:**

1. Artikel scannen oder PLU/EAN eingeben (oder nach **Zwischensumme** für die ganze Aufrechnung)  
2. Rabatt in **%** eingeben  
3. Taste **„Rabatt“** betätigen  

![Rabatt](/img/docs/kassa/rabatt.png)

---

## Kunde parken

Ein Kunde kann „geparkt“ werden, wenn er während des Registriervorgangs noch einen Artikel holen geht – inzwischen kann ein neuer Kunde bedient werden.

**Zum Parken:** Taste **„Kunde parken“** betätigen  

**Zum Fortsetzen:** Taste **„Kunde fortsetzen“** betätigen  

![Kunde parken](/img/docs/kassa/kunde-parken.png)

---

## Krediteinkäufe mit Kundennummer

Verkauf auf Kundenkonto (Kredit). Der Saldo wird nach Abschluss auf dem Kundenkonto gespeichert.

**Schritte:**

1. Kundennummer eingeben  
2. Taste **„Kunden“** betätigen  
3. Artikel scannen  
4. Taste **„Zwischensumme“** betätigen  
5. Taste **„Kredit“** betätigen  

![Krediteinkäufe](/img/docs/kassa/krediteinkaeufe.png)

---

## Kundeneinzahlungen mit AKONTO

Einzahlung zur Verminderung des offenen Kundensaldos (z. B. Teilzahlung).

**Schritte:**

1. Kundennummer eingeben  
2. Taste **„Akonto“** betätigen  
3. Betrag eingeben  
4. Taste **„BAR“** betätigen  
5. Taste **„ESC“** betätigen  

![Kundeneinzahlungen AKONTO](/img/docs/kassa/kundeneinzahlungen-akonto.png)

---

## Kundenkonto +, Kundenkonto –

Saldo des Kunden ändern, **ohne** den Bargeld-Ladenbestand zu ändern (z. B. Kunde zahlt per Banküberweisung).

- **Kundenkonto –** reduziert die ausstehende Forderung beim Kunden.  
- **Kundenkonto +** erhöht die ausstehende Forderung beim Kunden.  

**Schritte:**

1. Kundennummer eingeben  
2. Taste **„Kundenkonto –“** (oder **„Kundenkonto +“**) betätigen  
3. Betrag eingeben  
4. Taste **„Kundenkonto –“** (bzw. **„Kundenkonto +“**) erneut betätigen  

![Kundenkonto plus minus](/img/docs/kassa/kundenkonto-plus-minus.png)

---

## Verwandte Themen

- [Abschlüsse (Wechselgeld, Nullbeleg, Tagesabschluss …)](/docs/kassa/abschluesse)
- [Kassa – Übersicht](/docs/kassa/)
