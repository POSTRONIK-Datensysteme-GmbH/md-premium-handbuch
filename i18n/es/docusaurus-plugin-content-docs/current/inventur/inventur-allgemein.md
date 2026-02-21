# Resumen del inventario

El inventario sirve para registrar los niveles de stock actuales. Para cada artículo contado se calcula y almacena el **stock objetivo** en el momento del recuento. La **comparación objetivo/real** identifica las diferencias de inventario para su revisión.

## Inventario parcial y completo

- **Inventario parcial:** Solo se cuenta un número limitado de artículos. El inventario parcial **no puede** identificar artículos que siguen mostrando stock en el sistema pero ya no están en la tienda.
- **Inventario completo:** Se cuentan todos los artículos de la tienda de surtido de tabaco y no tabaco. Después del recuento y registro, los datos de inventario se completan con artículos no contados que aún tienen stock.

## Preparation

- Debe haberse realizado el **Till release** en MD-Premium.
- Todos los **albaranes** de mercancías en la tienda deben haberse asumido.
- Todos los **albaranes de periódicos** deben haberse asumido y completado el **Till release**.
- Antes de comenzar, asegúrese de que **todos los totales de ventas del día de inventario** estén contabilizados en MD-Premium. Ejecute **OLAP – Journal report**, vea **HGR by day** y compruebe el **total de ventas**.

## Screenshots

![Inventory – Overview](/img/docs/inventur-inventur-allgemein-1.png)

## Temas relacionados

- [Inventory capture at till](/docs/inventur/inventurerfassung-kasse)
- [Inventory capture with handheld](/docs/inventur/inventurerfassung-mde)
- [Post inventory data](/docs/inventur/inventurdaten-verbuchen)
