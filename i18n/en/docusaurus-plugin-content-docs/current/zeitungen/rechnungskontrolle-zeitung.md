# Newspaper invoice check

When EH-2000 documents are imported, wholesaler invoices for newspapers are also imported. Newspaper invoices contain **charges** and **credits**, stored as separate documents under **Data maintenance** → **EH2000** → **Imported documents**.

**Charges** should match deliveries. **Credits** should match returns and negative difference reports (short-deliveries). Matching is done via **Post invoices**.

## Matching

- For each **charge** there must be a **delivery** or **positive difference report** with matching issue and quantity, posted with document date before the invoice date.
- For each **credit** there must be a **return** or **negative difference report** with matching issue and quantity, posted with document date before the invoice date.

Unmatchable lines can result from: counting/entry errors, different issue numbers, positions billed as text (e.g. novels), items returned too late. These can be checked manually, **posted off** (error accepted) or marked for **complaint**.

## Views

- **Deliveries/returns:** Start **Post invoices** → open window **EH2000 ReKtrl Lie/Rem**. Select wholesaler, delivery and return period. Shows MDP document lines without allocation (columns incl. Aco_Id, Qty diff., Qty total, Qty allocated, Compl. date). Double-click row opens supplier document.
- **Invoice/credit:** Open window **EH2000 ReKtrl RE/GS**. Select wholesaler and invoice date. Shows charge and credit lines without MDP allocation (columns incl. Delivery type, DelArt no, Line no, Sub line no, Compl. date).

## Post off

In both windows: Select one or more rows → **Right-click** → **Post off line(s)**. Posting off accepts the missing allocation. Recommended order: First post off late-returned items in Lief/Rem, then match remaining lines in both windows (e.g. same quantity, different issue number).

## Complaint

Mark: **Right-click** → **Mark line(s) for complaint**. Remove: **Remove line(s) from complaint**. Then **Data maintenance** → **EH2000** → **Invoices** → **Print EH2000 RE complaint**: select branch, complaint date from/to, wholesaler, **OK**. Print report or **Export** to e-mail wholesaler.

## Screenshots

![Post invoices](/img/docs/zeitungen-rechnungskontrolle-zeitung-1.png)

![EH2000 ReKtrl Lie/Rem](/img/docs/zeitungen-rechnungskontrolle-zeitung-2.png)

![EH2000 ReKtrl RE/GS](/img/docs/zeitungen-rechnungskontrolle-zeitung-3.png)

![Post off lines](/img/docs/zeitungen-rechnungskontrolle-zeitung-4.png)

![Mark for complaint](/img/docs/zeitungen-rechnungskontrolle-zeitung-5.png)

![Print complaint report](/img/docs/zeitungen-rechnungskontrolle-zeitung-6.png)

![Export to wholesaler](/img/docs/zeitungen-rechnungskontrolle-zeitung-7.png)

![Complaint overview](/img/docs/zeitungen-rechnungskontrolle-zeitung-8.png)

## Related topics

- [Take over newspaper delivery notes](/docs/zeitungen/zeitungs-lieferscheine-uebernehmen)
- [Newspaper reorders](/docs/zeitungen/zeitungs-nachbestellungen)
- [Record delivery differences](/docs/zeitungen/lieferdifferenzen-erfassen)
