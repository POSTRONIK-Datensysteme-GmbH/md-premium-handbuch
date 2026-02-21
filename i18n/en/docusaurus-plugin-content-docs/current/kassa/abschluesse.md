# XMPS Closing procedures

Overview and guides for XMPS till closing. All steps are described in this handbook.

## Overview

| Topic | Short description |
|-------|-------------------|
| [Change fund declaration](#change-fund-declaration) | Declare opening float at start of shift |
| [Cash withdrawal](#cash-withdrawal) | Declare cash taken (bank deposits) |
| [Cash count](#cash-count) | Declare current drawer contents |
| [Zero receipt](#zero-receipt) | e.g. for tax audit |
| [Annual receipt](#annual-receipt) | Report to FinanzOnline |
| [Card terminal end-of-day](#card-terminal-end-of-day) | Daily for B-K terminal |

---

## Change fund declaration

The **change fund declaration** is used to declare the **opening float** (change money) with which the cashier starts their shift. This records how much money was in the drawer at the start. The change fund declaration must be carried out **after each cashier log-in**.

**How to declare the change fund:**

1. Go to the **"FUNKTION"** screen.
2. Enter **amount** – the amount actually in the drawer (change fund).
3. Press **"Change fund"**.
4. Press **"Cash"**.
5. Press **"ESC"** – the declaration is complete.

---

## Cash withdrawal

**Cash withdrawal** means **declaring cash taken** from the till (e.g. surplus taken to the bank). The withdrawal is booked in the till; the till then "expects" less money in the drawer. Each withdrawal should be declared **immediately after** it is made. The declared amounts are summed until end-of-day.

**How to declare a cash withdrawal:**

1. Go to the **"FUNKTION"** screen.
2. Enter **amount** – the withdrawn amount in your currency.
3. Press **"Cash withdrawal"**.
4. Press **"Cash"**.
5. Press **"ESC"** – the declaration is booked.

---

## Cash count

The **cash count** is used to declare the **current contents of the drawer** – i.e. the amount you have actually counted. The cash count can be done **as often as you like**; each new declaration overwrites the previous one. The till can then **compare**: how much **should** be in the drawer (theoretical) – and how much was **actually** counted and declared? The cash count is best done **at end of shift** or for a **till check**.

**How to declare a cash count:**

1. Go to the **"FUNKTION"** screen.
2. Enter **amount** – the counted amount currently in the drawer.
3. Press **"Cash count"**.
4. Press **"Cash"**.
5. Press **"ESC"** – the declaration is saved.

---

## Zero receipt

A **zero receipt** is a receipt **with no sale** – the till prints a receipt with no sales booked. It may be required by the **tax authority** (e.g. during an audit) or documents that the till had no sales at a given time.

**How to print a zero receipt:**

1. Select **"FUNKT"** screen.
2. Press **"X/Z"**.
3. Press **"YES"** (confirmation for **mode X1**).
4. Enter **9811** and confirm with **[YES]** – the zero receipt is printed.

---

## Annual receipt

The **annual receipt** is a closing receipt for the **entire year** (all till sales). It is needed e.g. for tax returns or reporting to **FinanzOnline**. The annual receipt must be reported to FinanzOnline.

**How to print the annual receipt:**

1. Select **"FUNKT"** screen.
2. Press **"X/Z"**.
3. Press **"YES"** (confirmation for **mode X1**).
4. Enter **9833** and confirm with **[YES]** – the annual receipt is printed.

---

## Card terminal end-of-day

When using **card payment functions** (B-K terminal), a **daily end-of-day** for the terminal is **essential**. Only after a successful end-of-day is the **payment transfer to the merchant account** released – without it, card payments stay pending. Depending on the B-K terminal configuration, a **TES card** may be required (see B-K terminal manual).

The B-K end-of-day can be done **independently** of the till end-of-day and does not have to be at the same time. It must be done at **each** till that uses a B-K terminal. The XMPS prints an **end-of-day report** – the B-K terminal total and the till are compared for checking.

**How to perform the card terminal end-of-day:**

1. Open **"Function"** level.
2. Press **"X/Z"**.
3. Select **"Z"** mode and confirm with **"YES"**.
4. Enter **9898** and confirm with **"Subtotal"** – the end-of-day runs; the report is printed.

![Card terminal EOD 1](/img/docs/kassa/bankomat-tagesabschluss-1.png)

![Card terminal EOD 2](/img/docs/kassa/bankomat-tagesabschluss-2.png)

![Card terminal EOD 3](/img/docs/kassa/bankomat-tagesabschluss-3.png)

---

## Related topics

- [Operation (sales, void, returns …)](/docs/kassa/bedienung)
- [Cash register – Overview](/docs/kassa/)
