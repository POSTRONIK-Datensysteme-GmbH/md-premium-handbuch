# Control de facturas de periódicos

Cuando se importan documentos EH-2000, también se importan las facturas de mayoristas de periódicos. Las facturas de periódicos contienen **cargos** y **créditos**, almacenados como documentos separados en **Data maintenance** → **EH2000** → **Imported documents**.

Los **cargos** deben coincidir con las entregas. Los **créditos** deben coincidir con las devoluciones y los informes de diferencias negativas (entregas cortas). La coincidencia se realiza mediante **Post invoices**.

## Matching

- Por cada **cargo** debe haber una **entrega** o **informe de diferencia positivo** con ejemplar y cantidad coincidentes, contabilizado con fecha de documento anterior a la fecha de factura.
- Por cada **crédito** debe haber una **devolución** o **informe de diferencia negativo** con ejemplar y cantidad coincidentes, contabilizado con fecha de documento anterior a la fecha de factura.

Las líneas no asignables pueden deberse a: errores de recuento/entrada, números de ejemplar distintos, posiciones facturadas como texto (p. ej. novelas), artículos devueltos demasiado tarde. Pueden comprobarse manualmente, **darse de baja** (error aceptado) o marcarse para **reclamación**.

## Views

- **Deliveries/returns:** Inicie **Post invoices** → abra la ventana **EH2000 ReKtrl Lie/Rem**. Seleccione mayorista, período de entrega y devolución. Muestra líneas de documento MDP sin asignación (columnas incl. Aco_Id, Qty diff., Qty total, Qty allocated, Compl. date). Doble clic en la fila abre el documento del proveedor.
- **Invoice/credit:** Abra la ventana **EH2000 ReKtrl RE/GS**. Seleccione mayorista y fecha de factura. Muestra líneas de cargo y crédito sin asignación MDP (columnas incl. Delivery type, DelArt no, Line no, Sub line no, Compl. date).

## Post off

En ambas ventanas: Seleccione una o más filas → **Clic derecho** → **Post off line(s)**. Dar de baja acepta la asignación faltante. Orden recomendado: Primero dar de baja los artículos devueltos tarde en Lief/Rem, luego hacer coincidir las líneas restantes en ambas ventanas (p. ej. misma cantidad, distinto número de ejemplar).

## Complaint

Marcar: **Clic derecho** → **Mark line(s) for complaint**. Quitar: **Remove line(s) from complaint**. Luego **Data maintenance** → **EH2000** → **Invoices** → **Print EH2000 RE complaint**: seleccione sucursal, fecha de reclamación desde/hasta, mayorista, **OK**. Imprima el informe o **Export** para enviar por correo al mayorista.

## Screenshots

![Post invoices](/img/docs/zeitungen-rechnungskontrolle-zeitung-1.png)

![EH2000 ReKtrl Lie/Rem](/img/docs/zeitungen-rechnungskontrolle-zeitung-2.png)

![EH2000 ReKtrl RE/GS](/img/docs/zeitungen-rechnungskontrolle-zeitung-3.png)

![Post off lines](/img/docs/zeitungen-rechnungskontrolle-zeitung-4.png)

![Mark for complaint](/img/docs/zeitungen-rechnungskontrolle-zeitung-5.png)

![Print complaint report](/img/docs/zeitungen-rechnungskontrolle-zeitung-6.png)

![Export to wholesaler](/img/docs/zeitungen-rechnungskontrolle-zeitung-7.png)

![Complaint overview](/img/docs/zeitungen-rechnungskontrolle-zeitung-8.png)

## Temas relacionados

- [Take over newspaper delivery notes](/docs/zeitungen/zeitungs-lieferscheine-uebernehmen)
- [Newspaper reorders](/docs/zeitungen/zeitungs-nachbestellungen)
- [Record delivery differences](/docs/zeitungen/lieferdifferenzen-erfassen)
