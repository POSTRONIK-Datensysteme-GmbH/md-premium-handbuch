# InventarPro – Benutzeranleitung

Diese Anleitung fasst die **Schnellstart-Anleitung** und das **Benutzerhandbuch** zusammen und ergänzt sie um die **Neuerungen** der App.

> **Nur die ersten Schritte?** → [Schnellstart-Anleitung](/docs/inventarpro/schnellstart)

---

## 1. Schnellstart (erste Schritte)

- **WLAN verbinden:** Das MDE-Gerät mit dem Firmen-WLAN verbinden, bevor die App gestartet wird.
- **Erster Start:** InventarPro öffnen. Die App meldet sich bei aktiver WLAN-Verbindung automatisch an und zeigt das Hauptmenü.
- **Datenbank erstmalig laden:**
  - Im Hauptmenü auf **Importieren** tippen.
  - Warten, bis der Import abgeschlossen ist (wichtig).
- **Tägliche Routine:** Täglich vor der ersten Nutzung im Hauptmenü auf **Importieren** tippen, um aktuelle Artikeldaten, Preise und Lieferanten zu laden.

### Hauptmenü

- **Kacheln:** Jede Kachel startet ein Modul (z. B. Lieferschein, Inventur, Remission).
- **Schaltflächen unten:**
  - **Importieren:** Lädt Datenbank und ggf. Retourenaufrufe.
  - **Artikel Info (i):** Zeigt Details zu einem gescannten Artikel.
  - **Exportieren:** Sendet abgeschlossene Belege an die Warenwirtschaft (blinkt, wenn Daten bereitstehen).
- **Einstellungen:** Zahnrad-Symbol (⚙) oben rechts öffnet die App-Einstellungen.

### Beispiel: Lieferschein erfassen

1. Im Hauptmenü auf **Lieferschein** tippen.
2. Kopfdaten prüfen/eingeben: Datum, Lieferscheinnummer, Lieferant (Datum und Lieferscheinnummer optional). Auf **Neu** tippen.
3. Artikel scannen (Barcode) oder Menge im Mengenfeld anpassen.
4. **Zurück-Taste** am Gerät drücken → Beleg erscheint in der Liste.
5. Beleg in der Liste auswählen und auf **Abschließen** tippen.
6. Zum Hauptmenü zurück. Wenn **Exportieren** blinkt, darauf tippen und Daten senden.

### App-Updates

- Die App prüft beim Start auf Updates. Erscheint ein **„Download“-Button**, darauf tippen und den Installationsanweisungen folgen.
- Bei Problemen zuerst die WLAN-Verbindung prüfen, danach Support kontaktieren.

---

## 2. Einleitung (Handbuch)

InventarPro ist eine Software für mobile Datenerfassungsgeräte (MDE, Android 13) und unterstützt im Handel und Lagerwesen u. a.:

- Lieferscheine (Wareneingang), Inventur, Bestellungen, Retouren, Bruch/Schwund  
- Reservierungen, Lagerumbuchungen, Warenetiketten, ESL (elektronische Regaletiketten)  
- Remission (Bearbeitung von Retourenaufrufen aus der Warenwirtschaft)

Die Geräte werden vorkonfiguriert geliefert.

---

## 3. Erste Inbetriebnahme & Updates

- **WLAN:** MDE mit Firmen-WLAN verbinden, bevor die App das erste Mal gestartet wird.
- **Erster Start / Login:** Bei aktivem WLAN meldet sich die App automatisch an und zeigt das Hauptmenü.
- **Datenbank:** Über **Importieren** im Hauptmenü die Datenbank (Artikel, Lieferanten usw.) vom FTP-Server laden (siehe Abschnitt 15.1). Bei der ersten Inbetriebnahme unbedingt durchführen.
- **App-Updates:** Beim Start wird auf neue Versionen geprüft. Bei Verfügbarkeit erscheint ein „Download“-Button → klicken, APK wird geladen → heruntergeladene APK öffnen → Installation folgen.
- **Probleme:** Zuerst WLAN prüfen, dann Support kontaktieren.

---

## 4. Hauptmenü (Startseite)

- **Kacheln:** Start der Module (Lieferschein, Inventur, Remission, Reservierung, Bruch, Warenretoure, Lagerumbuchung, Bestellung, Warenetiketten, ESL).
- **Schaltflächen unten:** Importieren, Artikel Info (i), Exportieren.
- **Einstellungen:** Zahnrad (⚙) oben rechts → Abschnitt 14.

---

## 5.–12. Module (Kurzüberblick)

- **Lieferschein:** Wareneingang – Kopfdaten (Datum, Lieferscheinnummer, Lieferant), **Neu**, Artikel scannen/Menge anpassen, Zurück → Speichern, in Liste **Abschließen**, dann **Exportieren**.
- **Inventur:** Zählbestände – optional Lagerort/Lager, sonst gleicher Ablauf wie oben.
- **Remission:** Retourenaufrufe bearbeiten – zuerst **Importieren** für aktuelle Aufrufe, dann Modul **Remission**, Beleg wählen, SOLL-/IST-Mengen abgleichen (scannen), Speichern, Abschließen, Exportieren.
- **Reservierung:** Kunde/Beleg wählen, Artikel erfassen, Speichern, Abschließen, Exportieren.
- **Bruch / Schwund:** Datum/Beleg, Artikel erfassen, Speichern, Abschließen, Exportieren.
- **Warenretoure:** Lieferant wählen, Retouren-Artikel erfassen, Speichern, Abschließen, Exportieren.
- **Lagerumbuchung:** Von-Lager / Zu-Lager wählen, Artikel erfassen, Zurück → Umbuchung wird ausgeführt. **Kein** Abschließen/Export über die Hauptmenü-Taste.
- **Bestellung:** Lieferant, Artikel erfassen, Speichern, Abschließen, Exportieren (Übermittlung an Lieferant über Warenwirtschaft).
- **Warenetiketten:** Artikel scannen (Anzahl Etiketten ggf. im Mengenfeld), Speichern, Abschließen, Exportieren (Druck z. B. in MD-Premium).
- **ESL:** Zuweisung/Auflösung von Produkten zu digitalen Preisschildern. **Kein** Abschließen/Export über die Hauptmenü-Taste; Änderungen werden direkt verarbeitet.

---

## 13. Einstellungen (Zahnrad-Symbol)

Über das Zahnrad (⚙) oben rechts im Hauptmenü gelangen Sie zu den App-Einstellungen.

### 14.1 Haupt-Einstellungen

- **Datenbank:** Verwaltung der lokalen Datenbank (14.2).
- **FTP-Einstellungen:** FTP-Server konfigurieren (14.3).
- **Geräteeinstellungen:** App-/Geräte-Infos, Update, BWD-/BWK-Zähler, Profil (14.4).
- **Menüeinstellungen:** Hauptmenü und Module anpassen (14.5).
- **Abmelden:** Aktuellen Benutzer abmelden.

### 14.2 Datenbank-Einstellungen

- **Letzte Datenbank (Datum/Zeit):** Zeitstempel der letzten Aktualisierung.
- **Lokal Importieren:** Datenbankdatei vom Gerätespeicher importieren.
- **Vom FTP-Server Importieren:** Datenbank vom konfigurierten FTP-Server aktualisieren (wie Import-Button im Hauptmenü).
- **Neu Erstellen & Vom FTP-Server Importieren:** Lokale Datenbank löschen und komplett neu vom FTP-Server laden.

### 14.3 FTP-Einstellungen

- Serveradresse/IP, Port (Standard 21), Benutzername, Passwort.
- **Ordnerpfad:** Download-Pfad für Datenbank/Remissionen.
- **Upload-Pfad:** Pfad für Exporte.
- **JOB-Datei erstellen:** Checkbox – beim Export eine Steuerungsdatei erzeugen.
- **Änderung Speichern:** Einstellungen sichern.

### 14.4 Geräteeinstellungen

- **App-Version,** **Geräte-ID.**
- **BWD-ID-Zähler / BWK-ID-Zähler:** Interne Zähler für Datensätze (editierbar).
- **Profil:** Auswahl TT/KN (Menüvorlagen und Verhalten).
- **Update-Button:** Manuelle Suche nach App-Updates.

*(Hinweis: Spracheinstellung wurde in der aktuellen Version entfernt; die App nutzt die Gerätesprache bzw. voreingestellte Sprache.)*

### 14.5 Menüeinstellungen

- **Export/Import Local / Import Web:** Menükonfiguration exportieren oder importieren (lokal oder aus dem Web; Web-Vorlage abhängig vom Profil TT/KN).
- **Modul-Konfiguration:** Pro Modul u. a. Sortierung (Sortn.), ACO ID, BWK Create, Beschriftung (TEXT01), Dropdowns, Option **„In ZAS suchen“** (siehe Neuerungen).
- **Erstellen:** Ggf. benutzerdefinierte Module hinzufügen.

---

## 15. Wichtige Funktionen im Hauptmenü

### 15.1 Importieren

- Lädt die aktuelle Datenbank (Artikel, Lieferanten usw.) vom konfigurierten FTP-Server. Für korrekte Funktion notwendig.
- Importiert Retourenaufrufe für das Modul **Remission**.
- **ZAGesamt.csv** wird nur beim Klick auf **Importieren** (Hauptmenü) heruntergeladen (wird für die ZAS-Suche in der Inventur benötigt).

### 15.2 Artikel Info (i-Symbol)

- In der unteren Leiste zwischen „Importieren“ und „Exportieren“.
- Tippen → Artikel-Informationssuche starten → Barcode scannen → Anzeige von Details (z. B. EK, VK, Bestellnummer, Lieferant, Warengruppe).

### 15.3 Exportieren

- Sendet alle als „abgeschlossen“ markierten Belege (Lieferschein, Inventur, Remission, Reservierung, Bruch, Warenretoure, Bestellung, Warenetiketten) an die Warenwirtschaft.
- Die Schaltfläche blinkt, wenn Daten zum Export bereitstehen.
- Nach dem Export wird ein klares Feedback angezeigt (Erfolg/Teilerfolg/Fehlschlag und Anzahl).

---

## 16. Neuerungen (Ergänzungen zur Anleitung)

Diese Punkte ergänzen die oben beschriebene Anleitung und entsprechen dem aktuellen Stand der App.

### Hauptmenü & Import/Export

- **Import-Status:** Nach einem Import wird im Hauptmenü ein **Banner** angezeigt: Erfolg (grün), Fehler (rot) oder „in Bearbeitung“, inkl. Zeitstempel. So sehen Sie sofort, ob der letzte Import erfolgreich war.
- **Export-Ergebnis:** Die Export-Funktion meldet nur dann „Erfolg“, wenn der FTP-Upload tatsächlich geklappt hat. Bei Teil-Erfolg oder Fehlschlag wird dies angezeigt; fehlgeschlagene Exporte werden im Erfolgszähler nicht mitgezählt.
- **ZAGesamt.csv:** Die Datei für die ZAS-Suche wird **nur** beim Klick auf **Importieren** auf der Hauptseite geladen, nicht bei anderen Import-Vorgängen. Wenn in der Inventur die ZAS-Suche genutzt wird und die Datei fehlt, erscheint der Hinweis: *„Bitte auf der Hauptseite über die Taste ‚Importieren‘ ZAGesamt.csv laden.“*

### Inventur-Modul

- **Anzeige:** Standardmäßig wird nur der **zuletzt gescannte Artikel** angezeigt. Ein Button **„Alle anzeigen“** blendet die komplette Liste ein; nach dem nächsten Scan wechselt die Anzeige wieder automatisch zur Einzelanzeige.
- **ZAS-Suche („In ZAS suchen“):** Wenn in den Menüeinstellungen für die entsprechende Belegart die Option **„In ZAS suchen“** aktiviert ist und ein gescannter Barcode nicht in der normalen Datenbank gefunden wird, wird in **ZAGesamt.csv** gesucht. Treffer erzeugen eine Belegzeile mit Barcode, Kurztext und Menge; die Menge wird nach EAN-Typ (Packung/Gebinde/Karton) berechnet. Wiederholtes Scannen addiert die berechnete ZAS-Menge.

### Einstellungen & Menü

- **Profil (TT/KN):** In den **Geräteeinstellungen** gibt es eine **Profil-Auswahl (TT/KN)**. Die Auswahl wird lokal gespeichert und beim Öffnen geladen. In den **Menüeinstellungen** lädt **Import Web** die Menü-Vorlage abhängig vom gewählten Profil.
- **Menüeinstellungen – „In ZAS suchen“:** Pro Belegart kann die Option **„In ZAS suchen“ (zas_search)** gespeichert werden. Sie steuert, ob bei Barcode-Miss in der Inventur die ZAGesamt-Datei durchsucht wird.

### Datenbank & Backup

- **Automatische Backups:** Vor relevanten Aktionen kann die App die lokale Datenbank automatisch sichern. Es werden bis zu **5 Backups** vorgehalten; ältere werden gelöscht.
- **Wiederherstellung:** Wenn die Datenbankdatei fehlt oder ungültig ist, versucht die App automatisch eine **Wiederherstellung aus dem neuesten Backup**. Gelingt dies, erscheint eine Erfolgsmeldung; andernfalls werden Sie zur Datenbank-Einstellung (DbInfo) geführt.

### Exportierte Dokumente

- **Dokumentenverwaltung:** Die letzten **20 exportierten Belege** werden gespeichert. Über den Bereich **Exportierte Dokumente** (falls im Menü/Navigation vorhanden) können Sie diese einsehen.
- **Wiederherstellung:** Exportierte Dokumente können bei Bedarf wiederhergestellt werden (z. B. falls ein erneuter Export nötig ist).

### App-Updates

- **Update-Prüfung:** Beim App-Start wird automatisch auf neue Versionen geprüft (stille Prüfung). Bei Verfügbarkeit erscheint ein **Download-Button**; nach dem Download wird die APK-Installation über den System-Dialog gestartet.

### Sonstiges

- **Lagerumbuchung & ESL:** Wie im Handbuch beschrieben – kein „Abschließen“ und kein Export über die Hauptmenü-Taste; Änderungen werden direkt verarbeitet bzw. gespeichert.
- **JOB-Datei:** Wird nur erstellt, wenn in den FTP-Einstellungen die Option **„JOB-Datei erstellen“** aktiviert ist.

---

## 17. Schlusswort & Support

Wir hoffen, diese Anleitung unterstützt Sie bei der effizienten Nutzung von InventarPro. Bei weiteren Fragen oder Problemen wenden Sie sich bitte an den Support.

## Verwandte Themen

- [InventarPro (MDE) – Übersicht](/docs/inventarpro/)
- [Schnellstart-Anleitung](/docs/inventarpro/schnellstart)
- [Inventurerfassung mit MDE-Gerät](/docs/inventur/inventurerfassung-mde) (klassisches MDE in der Inventur)

---

*Letzte Aktualisierung der Anleitung: Februar 2025 (inkl. Neuerungen aus dem aktuellen App-Stand).*
