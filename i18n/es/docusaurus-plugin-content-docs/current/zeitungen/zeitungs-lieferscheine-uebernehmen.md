# Asumir albaranes de periódicos

Los albaranes de periódicos se importan automáticamente desde el sistema EH-2000 varias veces al día. Asumirlos consiste principalmente en confirmar la recepción marcando el indicador **Completion**.

## Steps

1. Vaya a **Newspapers** → **New Z delivery notes**. La ventana muestra todos los albaranes de periódicos no confirmados con totales netos.
2. Localice los albaranes por **total neto de entrega**.
3. **Sin diferencias de entrega:** Marque **Completion** para confirmar la entrega.
4. **Con diferencias de entrega:** Abra el documento con doble clic en el encabezado de fila y gestione las diferencias como en [Record delivery differences](/docs/zeitungen/lieferdifferenzen-erfassen).
5. El último albarán confirmado puede necesitar guardarse con **F10** (o el icono de guardar). Al cambiar a otra fila, la anterior se guarda automáticamente.
6. Los albaranes pueden permanecer abiertos varios días (p. ej. entrega retrasada).
7. Repita hasta confirmar todos los albaranes de periódicos realmente recibidos.

## Till release

Cuando **todos** los albaranes de periódicos estén confirmados en MD-Premium, ejecute **Till release** (en la carpeta **Tills** de la barra de herramientas) para que los documentos de caja puedan contabilizarse.

- La liberación **solo** puede ejecutarse cuando **todos** los albaranes de **todos** los proveedores estén presentes y confirmados.
- Seleccione la fecha actual y su número de sucursal en **Warehouse**.

## Screenshots

![New Z delivery notes](/img/docs/zeitungen-zeitungs-lieferscheine-uebernehmen-1.png)

![Delivery notes and completion](/img/docs/zeitungen-zeitungs-lieferscheine-uebernehmen-2.png)

![Confirm delivery note](/img/docs/zeitungen-zeitungs-lieferscheine-uebernehmen-3.png)

![Save with F10](/img/docs/zeitungen-zeitungs-lieferscheine-uebernehmen-4.png)

![Till release](/img/docs/zeitungen-zeitungs-lieferscheine-uebernehmen-5.png)

![Date and warehouse](/img/docs/zeitungen-zeitungs-lieferscheine-uebernehmen-6.png)

## Temas relacionados

- [Record delivery differences](/docs/zeitungen/lieferdifferenzen-erfassen)
- [Newspaper invoice check](/docs/zeitungen/rechnungskontrolle-zeitung)
