# Inventory capture with MDE device

How to capture inventory with an **MDE device** (mobile data capture) and transfer data to MD-Premium. This description is based on the **InventarPro app** on the MDE device (Android, touch operation).

**Video:** [Inventory capture with MDE](https://youtube.com/shorts/Hqnba0bwY7E)

## Prerequisites

- The MDE device is connected to the **company Wi‑Fi**.
- The **database** has been updated beforehand via **Import** in the main menu (recommended daily before first use).

## Create inventory header and count articles

1. In the **main menu** of the MDE app, open the **Inventory** tile. The list of open inventory headers is displayed.
2. **New inventory header:** Tap **New**, optionally enter **storage location** or **warehouse** (or shelf number/zone) and confirm. Open the new header by tapping it.  
   **Or:** Select an existing inventory header from the list and tap it to open.
3. **Scan articles:** Scan the barcodes of the inventory articles. Each scan increases the article’s inventory quantity by 1. If needed, adjust the **quantity** in the quantity field after scanning.
4. **Save document:** Tap **Save** (or use the app’s back function). You return to the list of open inventory headers.
5. **Close inventory header:** Select the inventory header in the list and tap **Close**. **Only closed** inventory headers are transferred to MD-Premium.
6. **Export on main screen:** Go back to the **main menu**. You must still **export** the captured data there (see below “Transfer data to MD-Premium”) for it to reach MD-Premium.

## Transfer data to MD-Premium

7. Return to the **main menu** of the MDE app.
8. When the **Export** button blinks, data is ready to send. Tap **Export** to send the closed inventory documents to the merchandise management system via Wi‑Fi (FTP).
9. Wait for the confirmation (success or error is shown).

Data is transferred to the system and processed in MD-Premium. Counted articles appear under **Edit inventory articles** (see [Post inventory data](/docs/inventur/inventurdaten-verbuchen)).

## Screenshots

![Inventory with MDE device](/img/docs/inventur-inventurerfassung-mde-1.png)

## Related topics

- [Inventory overview](/docs/inventur/inventur-allgemein)
- [Inventory capture at till](/docs/inventur/inventurerfassung-kasse)
- [Post inventory data](/docs/inventur/inventurdaten-verbuchen)
- [InventarPro (MDE)](/docs/inventarpro/) – Quick start and full manual for the InventarPro app
