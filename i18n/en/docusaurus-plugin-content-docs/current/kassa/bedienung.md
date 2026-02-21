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

Before a cashier can work at the till, they must **log in**. The till is then assigned to their user account and all transactions are attributed to that cashier. At the end of the shift, the cashier **logs out** again.

**How to log in or log out:**

1. On the till, open the log-in screen (depending on configuration: select cashier number or user).
2. To **log out**, select the log-out function – the till is then back in the log-in state.

![Log in Log out](/img/docs/kassa/anmelden-abmelden.png)

---

## Quantity in sales

When selling **multiple identical items** (e.g. 5× the same drink), you can enter the **quantity** before registering and then capture the article once – the till books the entered quantity. Enter the quantity first, then press **X/Date**. The article can then be **scanned**, entered via **PLU**, or registered via **product group**. Once an article has been scanned or called via PLU, it is repeated with each further press of **PLU** (without entering the quantity again).

**How to register multiple identical items (quantity):**

1. Enter **quantity** (e.g. 5).
2. Press **"X"** (or **X/Date**).
3. **Scan article** or enter **PLU/EAN** – the article is added to the transaction with the entered quantity.

---

## Manual entry (PLU)

Articles that cannot be scanned (e.g. no barcode) can be entered via the **PLU** or **EAN number**. Enter the number on the keypad; the PLU/EAN key then confirms the booking.

**How to register an article manually:**

1. Enter **PLU** or **EAN number** on the keypad.
2. Press **"PLU"** or **"EAN"** – the article is added to the transaction.

---

## Void

With the **Void** key you can remove an **already registered article** from the transaction. The item to be voided must be the **last** one registered: press **Void** and register the article **again** (as void) – it is deducted. This lets you reverse e.g. an accidentally double-scanned article or a wrong article.

:::caution
The void function applies **only to the last registered** article. If the item to be voided is earlier in the transaction, you may need to cancel the whole transaction (Cancel receipt) and start again.
:::

**How to void an article:**

1. Ensure the **article to be voided** is the **last** in the transaction (if needed, void other articles first or cancel the transaction).
2. Press **"Void"**.
3. **Scan** the **article to be voided** again or enter via PLU – the article is voided (deducted).

---

## Cancel receipt

The **Cancel** key can **at any time** cancel the current transaction. The function acts as if **all** registered articles were voided – all totalisers are cleared. The **Cancel** key also ends actions in REG or RETOUR (e.g. cash count, cash withdrawal, change fund declaration).

:::tip
When **several errors** have occurred in a transaction, it is often easiest to cancel the whole transaction and start again from the beginning.
:::

**How to cancel a transaction:**

1. Press **"Cancel"** – the transaction is cleared; you can start again.

---

## Pay in / Pay out

**Pay out:** e.g. when you accept a COD delivery – the amount is taken from the till and booked as a pay-out. **Pay in:** when money is put into the till (e.g. topping up change), the amount is booked as a pay-in. The procedure for pay-in is the same as for pay-out; only the "Pay in" key is used.

**How to book a pay-in or pay-out:**

1. Go to the **"FUNKTION"** screen.
2. Enter **amount** (the amount actually paid out or paid in).
3. Press **"Pay out"** or **"Pay in"** – the transaction is booked.

---

## Open drawer / No sale

If you want to **open the cash drawer** **without** registering a sale (e.g. to take or put in change), use this function. No sale is recorded – only the drawer opens.

**How to open the drawer without a sale:**

1. Press **"Open drawer / No sale"** – the drawer opens.

---

## Restore till network

Tills in a **till network** communicate over the network during operation. If one or more tills are unreachable during an operation (e.g. network failure), an error message appears and the connection is interrupted – but the tills can continue to work on their own. **After** the fault is fixed, the tills must be reconnected. Use the **"Restore till network"** procedure.

**How to restore the till network:**

1. Put the till into **"X"** mode.
2. Enter **4301**.
3. Press **"Subtotal"** – the till prints a report of all tills in the network.
4. Put the till back into **"REG 1"** mode – the network is restored.

---

## Returns

When a **receipt has already been closed**, the articles are deducted from stock. If such an article is **returned** by the customer, stock and totals must be corrected – use the **Return** function. Return is also the **only way** to correct errors that are only noticed **after** closing the receipt (e.g. wrong price, article accidentally booked twice).

**How to book a return:**

1. Press **"Return"** – the till is in return mode.
2. **Scan article** or enter **EAN** on the keypad.
3. Complete with **"Cash"** – the return is booked; stock and totals are updated.

![Returns](/img/docs/kassa/artikel-retouren.png)

---

## Discount (amount)

**Discount (amount)** means a **fixed amount** off the selling price – either for a single article or for the **whole transaction**. You enter the **amount** by which the price is reduced (not the percentage). After an article, the discount applies only to that article; after **Subtotal**, to the whole transaction.

**How to give a discount (amount):**

1. **Scan article** or enter **PLU/EAN** (or press **Subtotal** first if the discount applies to the whole transaction).
2. Enter **discount amount** in your currency (e.g. 2.00).
3. Press **"Discount amount"** – the deduction is booked.

![Discount amount](/img/docs/kassa/nachlass-betrag.png)

---

## Discount (%)

**Discount (%)** is a **percentage** off the selling price – either for one article or for the whole transaction. You enter the **percentage** (e.g. 10 for 10%). The **Discount** key may be set to a **fixed percentage**; if you enter a percentage anyway, it overrides the preset.

**How to give a discount (%):**

1. **Scan article** or enter **PLU/EAN** (or press **Subtotal** if the discount applies to the whole transaction).
2. Enter **discount in %** (e.g. 5 or 10).
3. Press **"Discount"** – the percentage deduction is booked.

![Discount %](/img/docs/kassa/rabatt.png)

---

## Park customer

If a customer wants to **fetch another article** during the sale (e.g. from the sales floor), you can **"park"** them: the current transaction is paused and saved. You can then **serve another customer**. Later you recall the parked transaction and continue it.

**How to park a customer:**

1. Press **"Park customer"** – the transaction is parked; you can start a new one.
2. To **resume** the parked transaction: press **"Resume customer"** – the previous transaction appears again.

![Park customer](/img/docs/kassa/kunde-parken.png)

---

## Credit sales with customer number

XMPS can manage **customer balances** (credit). With **credit sales**, the sale is not paid in cash but charged to the **customer account**. After completing the sale, the till stores the customer’s new balance.

**How to book a credit sale:**

1. Enter **customer number**.
2. Press **"Customer"** – the customer is selected.
3. **Scan articles** as in a normal sale.
4. Press **"Subtotal"**.
5. Press **"Credit"** – the amount is charged to the customer account; the receipt is closed.

![Credit sales](/img/docs/kassa/krediteinkaeufe.png)

---

## Customer payments (AKONTO)

**Akonto** is used to book **customer payments** that reduce the **outstanding balance** (e.g. the customer pays an invoice or a partial payment). The customer gives money – you book it as a pay-in to their account; the balance is reduced.

**How to book a customer payment (Akonto):**

1. Enter **customer number**.
2. Press **"Akonto"**.
3. Enter **amount** the customer is paying.
4. Press **"Cash"** – the payment is booked.
5. Press **"ESC"** – you leave the Akonto procedure.

![Customer payments AKONTO](/img/docs/kassa/kundeneinzahlungen-akonto.png)

---

## Customer account +, Customer account –

These functions change the **customer balance** **without** moving cash in the till. Typical case: the customer pays **by bank transfer** – you book the payment with **Customer account –**; the balance goes down and the till drawer is unchanged.

- **Customer account –** reduces the customer’s **outstanding balance** (customer has paid).
- **Customer account +** increases the outstanding balance (e.g. extra charge, void of a credit note).

**How to book a balance change without cash:**

1. Enter **customer number**.
2. Press **"Customer account –"** (or **"Customer account +"**).
3. Enter **amount**.
4. Press **"Customer account –"** (or **"Customer account +"**) **again** – the booking is done.

![Customer account +/-](/img/docs/kassa/kundenkonto-plus-minus.png)

---

## Related topics

- [Closing procedures (change fund, zero receipt, end-of-day …)](/docs/kassa/abschluesse)
- [Cash register – Overview](/docs/kassa/)
