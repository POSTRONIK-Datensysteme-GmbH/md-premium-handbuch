# Artículos sin inventario desde fecha – Poner stock a cero

Cómo poner el stock a 0 para artículos que no han sido inventariados desde una fecha dada (ya no en stock).

**Video:** [Clear stock](https://youtu.be/oAPw1HhXhxs)

## Steps

1. **Master Data** → **Articles** → **Selection** (flecha abajo) → **Articles without inventory since date**.
   Esto selecciona todos los artículos que no tienen inventario (ya no en stock).
2. **Master Data** → **Articles** → **Extras** → **Inventory** → **Set inventory data**.
   Esto establece todos los artículos seleccionados en el paso anterior en estado de inventario.
3. **Data maintenance** → **Inventory** → **Post differences**.
   El stock de los artículos seleccionados se establece en **0**.

## Screenshots

![Articles without inventory since date](/img/docs/inventur-artikel-ohne-inventur-bereinigen-1.png)

![Set inventory data](/img/docs/inventur-artikel-ohne-inventur-bereinigen-2.png)

![Post differences](/img/docs/inventur-artikel-ohne-inventur-bereinigen-3.png)

## Temas relacionados

- [Inventory overview](/docs/inventur/inventur-allgemein)
- [Post inventory data](/docs/inventur/inventurdaten-verbuchen)
