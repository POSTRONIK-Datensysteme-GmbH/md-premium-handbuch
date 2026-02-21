# InventarPro – User manual

This manual combines the **quick start guide** and the **user handbook** and adds the **new features** of the app.

> **Only need the first steps?** → [Quick start guide](/docs/inventarpro/schnellstart)

---

## 1. Quick start (first steps)

- **Connect Wi‑Fi:** Connect the MDE device to the company Wi‑Fi before starting the app.
- **First start:** Open InventarPro. With an active Wi‑Fi connection the app logs in automatically and shows the main menu.
- **Load database for the first time:** Tap **Import** in the main menu. Wait until the import is complete (important).
- **Daily routine:** Tap **Import** in the main menu every day before first use to load current article data, prices and suppliers.

### Main menu

- **Tiles:** Each tile starts a module (e.g. delivery note, inventory, returns).
- **Bottom buttons:** **Import** (loads database and optionally return calls), **Article info (i)** (details for a scanned article), **Export** (sends closed documents to merchandise management; blinks when data is ready).
- **Settings:** Gear icon (⚙) top right opens app settings.

### Example: Record delivery note

1. Tap **Delivery note** in the main menu.
2. Check/enter header data: date, delivery note number, supplier (date and number optional). Tap **New**.
3. Scan articles (barcode) or adjust quantity in the quantity field.
4. Press device **Back** button → document appears in the list.
5. Select the document in the list and tap **Close**.
6. Return to main menu. When **Export** blinks, tap it to send data.

### App updates

- The app checks for updates on start. If a **Download** button appears, tap it and follow the installation instructions. If you have problems, check Wi‑Fi first, then contact support.

---

## 2. Introduction (handbook)

InventarPro is software for mobile data capture devices (MDE, Android 13) and supports in retail and warehousing:

- Delivery notes (goods receipt), inventory, orders, returns, breakage/shrinkage  
- Reservations, stock transfers, product labels, ESL (electronic shelf labels)  
- Returns processing (handling return calls from merchandise management)

Devices are supplied preconfigured.

---

## 3. First-time setup & updates

- **Wi‑Fi:** Connect MDE to company Wi‑Fi before starting the app for the first time.
- **First start / login:** With active Wi‑Fi the app logs in automatically and shows the main menu.
- **Database:** Load the database (articles, suppliers, etc.) from the FTP server via **Import** in the main menu (see section 15.1). Mandatory on first setup.
- **App updates:** On start the app checks for new versions. If available a Download button appears → tap, APK is loaded → open the downloaded APK → follow installation.
- **Problems:** Check Wi‑Fi first, then contact support.

---

## 4. Main menu (home screen)

- **Tiles:** Start of modules (delivery note, inventory, returns, reservation, breakage, goods return, stock transfer, order, product labels, ESL).
- **Bottom buttons:** Import, Article info (i), Export.
- **Settings:** Gear (⚙) top right → section 14.

---

## 5.–12. Modules (overview)

- **Delivery note:** Goods receipt – header (date, delivery note number, supplier), **New**, scan articles/adjust quantity, Back → Save, **Close** in list, then **Export**.
- **Inventory:** Counts – optional storage location/warehouse, otherwise same flow as above.
- **Returns:** Process return calls – first **Import** for current calls, then **Returns** module, select document, reconcile target/actual (scan), Save, Close, Export.
- **Reservation:** Select customer/document, capture articles, Save, Close, Export.
- **Breakage / shrinkage:** Date/document, capture articles, Save, Close, Export.
- **Goods return:** Select supplier, capture return articles, Save, Close, Export.
- **Stock transfer:** Select from-warehouse / to-warehouse, capture articles, Back → transfer is executed. **No** Close/Export via main menu button.
- **Order:** Supplier, capture articles, Save, Close, Export (submission to supplier via merchandise management).
- **Product labels:** Scan articles (number of labels in quantity field if needed), Save, Close, Export (print e.g. in MD-Premium).
- **ESL:** Assign/clear products to digital price labels. **No** Close/Export via main menu; changes are processed directly.

---

## 13. Settings (gear icon)

The gear (⚙) top right in the main menu opens app settings.

### 14.1 Main settings

- **Database:** Manage local database (14.2).
- **FTP settings:** Configure FTP server (14.3).
- **Device settings:** App/device info, update, BWD/BWK counters, profile (14.4).
- **Menu settings:** Customise main menu and modules (14.5).
- **Log out:** Log out current user.

### 14.2 Database settings

- **Last database (date/time):** Timestamp of last update.
- **Import locally:** Import database file from device storage.
- **Import from FTP server:** Update database from configured FTP server (same as Import button in main menu).
- **Create new & import from FTP server:** Delete local database and reload completely from FTP server.

### 14.3 FTP settings

- Server address/IP, port (default 21), username, password.
- **Folder path:** Download path for database/returns.
- **Upload path:** Path for exports.
- **Create JOB file:** Checkbox – create a control file on export.
- **Save changes:** Save settings.

### 14.4 Device settings

- **App version**, **Device ID**.
- **BWD ID counter / BWK ID counter:** Internal document counters (editable).
- **Profile:** TT/KN selection (menu templates and behaviour).
- **Update button:** Manual check for app updates.

*(Note: Language setting was removed in the current version; the app uses the device or preset language.)*

### 14.5 Menu settings

- **Export/Import local / Import web:** Export or import menu configuration (local or from web; web template depends on TT/KN profile).
- **Module configuration:** Per module: sort order, ACO ID, BWK Create, label (TEXT01), dropdowns, **“Search in ZAS”** option (see new features).
- **Create:** Add custom modules if needed.

---

## 15. Main menu functions

### 15.1 Import

- Loads the current database (articles, suppliers, etc.) from the configured FTP server. Required for correct operation.
- Imports return calls for the **Returns** module.
- **ZAGesamt.csv** is only downloaded when you tap **Import** (main menu) (needed for ZAS search in inventory).

### 15.2 Article info (i icon)

- In the bottom bar between “Import” and “Export”.
- Tap → start article info search → scan barcode → display details (e.g. cost, price, order number, supplier, product group).

### 15.3 Export

- Sends all documents marked as “closed” (delivery note, inventory, returns, reservation, breakage, goods return, order, product labels) to merchandise management.
- The button blinks when data is ready to export.
- After export clear feedback is shown (success/partial/failure and count).

---

## 16. New features (additions to the manual)

These points extend the manual above and match the current app state.

### Main menu & import/export

- **Import status:** After an import a **banner** is shown in the main menu: success (green), error (red) or “in progress”, with timestamp.
- **Export result:** Export only reports “Success” when the FTP upload actually succeeded. Partial success or failure is shown; failed exports are not counted in the success counter.
- **ZAGesamt.csv:** The file for ZAS search is loaded **only** when you tap **Import** on the main screen. If ZAS search is used in inventory and the file is missing, the message appears: *“Please load ZAGesamt.csv via the Import button on the main screen.”*

### Inventory module

- **Display:** By default only the **last scanned article** is shown. A **“Show all”** button shows the full list; after the next scan the view switches back to single-article view.
- **ZAS search (“Search in ZAS”):** If **“Search in ZAS”** is enabled for the document type in menu settings and a scanned barcode is not found in the normal database, **ZAGesamt.csv** is searched. Hits create a document line with barcode, short text and quantity; quantity is calculated by EAN type (unit/case/carton). Repeated scans add the calculated ZAS quantity.

### Settings & menu

- **Profile (TT/KN):** In **device settings** there is a **profile selection (TT/KN)**. The selection is stored locally and loaded on open. In **menu settings**, **Import web** loads the menu template according to the selected profile.
- **Menu settings – “Search in ZAS”:** The option **“Search in ZAS” (zas_search)** can be saved per document type. It controls whether the ZAGesamt file is searched on barcode miss in inventory.

### Database & backup

- **Automatic backups:** Before relevant actions the app can back up the local database automatically. Up to **5 backups** are kept; older ones are deleted.
- **Restore:** If the database file is missing or invalid, the app tries to **restore from the latest backup**. If this succeeds a success message is shown; otherwise you are guided to the database setting (DbInfo).

### Exported documents

- **Document management:** The last **20 exported documents** are stored. Via **Exported documents** (if available in menu/navigation) you can view them.
- **Restore:** Exported documents can be restored if needed (e.g. for a repeat export).

### App updates

- **Update check:** On app start new versions are checked automatically (silent). If available a **Download** button appears; after download APK installation is started via the system dialog.

### Other

- **Stock transfer & ESL:** As described in the manual – no “Close” and no export via main menu button; changes are processed or saved directly.
- **JOB file:** Only created if **“Create JOB file”** is enabled in FTP settings.

---

## 17. Closing & support

We hope this manual helps you use InventarPro efficiently. For further questions or problems please contact support.

## Related topics

- [InventarPro (MDE) – Overview](/docs/inventarpro/)
- [Quick start guide](/docs/inventarpro/schnellstart)
- [Inventory capture with MDE device](/docs/inventur/inventurerfassung-mde) (classic MDE in inventory)

---

*Last update of the manual: February 2025 (including new features from current app version).*
