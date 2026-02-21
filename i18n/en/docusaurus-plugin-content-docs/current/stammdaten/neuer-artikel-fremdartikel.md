# Create new article (external article)

How to create a new external article in the system.

**Video:** [Create new article](https://youtu.be/ruzSVFZUfaE)

## Steps (in form order)

1. In the menu go to **Master Data** → **External articles** and click **New record** (or press **F5**).
2. **(2)** Select the article **supplier** or search by number.
3. **(3)** Enter the article **barcode**.
4. **(4)** Enter the **supplier article number** (the number you use to order from the supplier). If there is none, use the barcode/EAN here. **Note:** This number must be unique per supplier or an existing article may be overwritten.
5. **(5)** Enter a **short description**.
6. **(6)** Enter a **long description** (optional; if empty, the short description is used).
7. **(7)** Enter the **net purchase price** (excl. VAT).
8. **(8)** Select the article **product group**.
9. **(9)** Select **VAT** rate: 10%, 20%, 2V 20% VAT vignettes, or 0%.
10. Click the **save icon** or press **F10**.
11. Click **Create article** and confirm with **Yes**.

## Notes

- **UPC and EAN:** Some products have a US UPC (12 digits). The till converts it to EAN (13 digits) by adding a leading **0**. Store the barcode in that form (e.g. `070330600065` → `0070330600065`).
- **No EAN:** If the article has no EAN, you can generate a barcode with **Autom.1** after saving, or after clicking "Create article".
- **Duplicate number:** If a number (e.g. ZZZ-1234) appears after saving and before "Create article", that barcode or supplier number is already in use.
- **Labels:** After creating the article you can request labels via **Request product labels**.

## Screenshots

![Master data external article – New record](/img/docs/stammdaten-neuer-artikel-fremdartikel-1.png)

![Supplier, barcode, supplier article number](/img/docs/stammdaten-neuer-artikel-fremdartikel-2.png)

![Description, prices, product group, VAT](/img/docs/stammdaten-neuer-artikel-fremdartikel-3.png)

![Save and create article](/img/docs/stammdaten-neuer-artikel-fremdartikel-4.png)

## Related topics

- [Search existing articles by barcode](/docs/stammdaten/bestehende-artikel-suchen-barcode)
- [Print labels](/docs/stammdaten/etiketten-drucken)
