# XMPS Operation

Overview and guides for XMPS till software operation. All steps are described in this handbook.

## Overview

| Topic | Short description |
|-------|-------------------|
| [Log in / Log out](#log-in--log-out) | Use till as cashier |
| [Quantity in sales](#quantity-in-sales) | Register multiple same items at once |
| [Manual entry (PLU)](#manual-entry-plu) | Enter PLU or EAN |
| [Void](#void) | Void item (last item only) |
| [Cancel receipt](#cancel-receipt) | Cancel entire transaction |
| [Pay in / Pay out](#pay-in--pay-out) | e.g. book COD |
| [Open drawer / No sale](#open-drawer--no-sale) | Open cash drawer without registering |
| [Restore till network](#restore-till-network) | After network failure |
| [Returns](#returns) | Book returned items |
| [Discount (amount)](#discount-amount) | Book fixed amount off |
| [Discount (%)](#discount-) | Book percentage off |
| [Park customer](#park-customer) | Pause transaction, serve another customer |
| [Credit sales](#credit-sales-with-customer-number) | Sell on customer account |
| [Customer payments (AKONTO)](#customer-payments-akonto) | Book payment to customer account |
| [Customer account + / –](#customer-account--customer-account--) | Change balance without cash (e.g. bank transfer) |

---

## Log in / Log out

Log in or log out a cashier at the till.

![Log in Log out](/img/docs/kassa/anmelden-abmelden.png)

---

## Quantity in sales

For multiple identical items: enter **quantity**, then press **X/Date**. Then scan article, enter PLU or use product group. After scanning or PLU, each further **PLU** press repeats the item.

**Steps:**

1. Enter quantity  
2. Press **"X"**  
3. Scan article or enter PLU/EAN  

---

## Manual entry (PLU)

- Enter PLU or EAN via keypad  
- Press **PLU / EAN**  

---

## Void

Press **Void**, then re-enter the item to be voided (last rung item only).

:::caution
Only the **last** (most recently entered) item can be voided.
:::

**Steps:**

1. Select item (must be the last one rung)  
2. Press **"Void"**  

---

## Cancel receipt

Press **Cancel** to abort the current transaction. All items are voided and totals cleared. Use e.g. when several errors occurred – start again.

**Step:** Press **"Cancel"**  

---

## Pay in / Pay out

Book a pay-out (e.g. COD receipt) or pay-in.

**Steps:**

1. Go to **"FUNKTION"** screen  
2. Enter amount  
3. Press **"Pay in"** or **"Pay out"**  

---

## Open drawer / No sale

Open the cash drawer **without** registering a sale (e.g. for change).

**Step:** Press **"Open drawer / No sale"** – drawer opens.  

---

## Restore till network

After a network/connection failure, reconnect tills.

**Steps:**

1. Put till in **"X"** mode  
2. Enter **4301**  
3. Press **"Subtotal"**  
4. Till prints a report of all tills in the network  
5. Put till back in **"REG 1"** mode  

---

## Returns

Book returned items – corrects stock and totals. Also to fix errors noticed after closing the receipt (e.g. wrong price).

![Returns](/img/docs/kassa/artikel-retouren.png)

**Steps:**

1. Press **"Return"**  
2. Scan article or enter EAN  
3. Complete with **"Cash"**  

---

## Discount (amount)

Fixed amount off the selling price of an item or the whole transaction.

**Steps:**

1. Scan article or enter PLU/EAN (or press **Subtotal** for whole transaction)  
2. Enter discount **amount**  
3. Press **"Discount amount"**  

![Discount amount](/img/docs/kassa/nachlass-betrag.png)

---

## Discount (%)

Percentage off the selling price. Discount key may be preset; entering a percentage overrides it.

**Steps:**

1. Scan article or enter PLU/EAN (or **Subtotal** for whole transaction)  
2. Enter discount **%**  
3. Press **"Discount"**  

![Discount %](/img/docs/kassa/rabatt.png)

---

## Park customer

Park the current transaction (e.g. customer fetches another item) and serve a new customer.

**To park:** Press **"Park customer"**  

**To resume:** Press **"Resume customer"**  

![Park customer](/img/docs/kassa/kunde-parken.png)

---

## Credit sales with customer number

Sell on customer account. Balance is stored on the customer account after completion.

**Steps:**

1. Enter customer number  
2. Press **"Customer"**  
3. Scan items  
4. Press **"Subtotal"**  
5. Press **"Credit"**  

![Credit sales](/img/docs/kassa/krediteinkaeufe.png)

---

## Customer payments (AKONTO)

Payment to reduce the customer’s open balance (e.g. partial payment).

**Steps:**

1. Enter customer number  
2. Press **"Akonto"**  
3. Enter amount  
4. Press **"Cash"**  
5. Press **"ESC"**  

![Customer payments AKONTO](/img/docs/kassa/kundeneinzahlungen-akonto.png)

---

## Customer account +, Customer account –

Change customer balance **without** changing cash in drawer (e.g. customer pays by bank transfer).

- **Customer account –** reduces the customer’s outstanding balance.  
- **Customer account +** increases the customer’s outstanding balance.  

**Steps:**

1. Enter customer number  
2. Press **"Customer account –"** (or **"Customer account +"**)  
3. Enter amount  
4. Press **"Customer account –"** (or **"Customer account +"**) again  

![Customer account +/-](/img/docs/kassa/kundenkonto-plus-minus.png)

---

## Related topics

- [Closing procedures (change fund, zero receipt, end-of-day …)](/docs/kassa/abschluesse)
- [Cash register – Overview](/docs/kassa/)
