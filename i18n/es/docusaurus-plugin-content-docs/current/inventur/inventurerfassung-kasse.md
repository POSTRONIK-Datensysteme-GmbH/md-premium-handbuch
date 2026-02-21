# Captura de inventario en caja

Cómo realizar la captura de inventario en caja.

**Videos:** [Inventory mode on](https://youtu.be/-n_bCE5U3DM) · [Inventory mode off](https://youtu.be/gKop6hGWrzQ)

## Prerequisite

- Un cajero debe estar conectado.

## Turn on inventory mode

1. Establezca el modo en **REG2** (pulse **REG**).
2. Introduzca **4070** y pulse **SUBTOTAL**. La caja muestra "TRAINING ON" o "INVENTORY ON".

## Capture articles

3. Procese los artículos como en una venta:
   - Introduzca la cantidad, pulse **X**, escanee el artículo.
   - Después de un máximo de **50 artículos**: pulse **Subtotal** y **CASH** (cierre el ticket).

## Turn off inventory mode

4. Introduzca **4071** y confirme con **SUBTOTAL**. La caja muestra "TRAINING OFF" o "INVENTORY OFF".
5. Después del inventario: vuelva a establecer el modo en **REG1**.

## Next step in MD-Premium

Aproximadamente **10 minutos** después de la última captura en caja, los datos se transfieren a MD-Premium. A continuación puede editar los artículos capturados en **Data maintenance / Inventory / Edit inventory articles** (véase [Post inventory data](/docs/inventur/inventurdaten-verbuchen)).

## Screenshots

![Inventory mode at till](/img/docs/inventur-inventurerfassung-kasse-1.png)

## Temas relacionados

- [Inventory overview](/docs/inventur/inventur-allgemein)
- [Inventory capture with handheld](/docs/inventur/inventurerfassung-mde)
- [Post inventory data](/docs/inventur/inventurdaten-verbuchen)
