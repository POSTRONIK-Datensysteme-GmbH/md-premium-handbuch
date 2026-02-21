# Captura de inventario con dispositivo MDE

Cómo capturar el inventario con un **dispositivo MDE** (captura móvil de datos) y transferir los datos a MD-Premium. La descripción se basa en la **app InventarPro** en el dispositivo MDE (Android, pantalla táctil).

**Vídeo:** [Captura de inventario con MDE](https://youtube.com/shorts/Hqnba0bwY7E)

## Requisitos previos

- El dispositivo MDE está conectado a la **Wi‑Fi de la empresa**.
- La **base de datos** se ha actualizado antes mediante **Importar** en el menú principal (recomendado a diario antes del primer uso).

## Crear encabezado de inventario y contar artículos

1. En el **menú principal** de la app MDE, abra la baldosa **Inventario**. Se muestra la lista de encabezados de inventario abiertos.
2. **Nuevo encabezado:** Pulse **Nuevo**, introduzca opcionalmente **ubicación** o **almacén** (o número de estante/zona) y confirme. Abra el nuevo encabezado tocándolo.  
   **O:** Seleccione un encabezado de inventario existente en la lista y tóquelo para abrirlo.
3. **Escanear artículos:** Escanee los códigos de barras de los artículos. Cada escaneo aumenta la cantidad en inventario del artículo en 1. Si hace falta, ajuste la **cantidad** en el campo de cantidad tras escanear.
4. **Guardar documento:** Pulse **Guardar** (o use la función atrás de la app). Volverá a la lista de encabezados abiertos.
5. **Cerrar encabezado:** Seleccione el encabezado en la lista y pulse **Cerrar**. **Solo** los encabezados cerrados se transfieren a MD-Premium.
6. **Exportar en la pantalla principal:** Vuelva al **menú principal**. Ahí debe **exportar** los datos capturados (véase más abajo "Transferir datos a MD-Premium") para que lleguen a MD-Premium.

## Transferir datos a MD-Premium

7. Vuelva al **menú principal** de la app MDE.
8. Cuando el botón **Exportar** parpadee, hay datos listos para enviar. Pulse **Exportar** para enviar los documentos de inventario cerrados al sistema de gestión vía Wi‑Fi (FTP).
9. Espere la confirmación (se muestra éxito o error).

Los datos se transfieren al sistema y se procesan en MD-Premium. Los artículos contados aparecen en **Editar artículos de inventario** (véase [Contabilizar datos de inventario](/docs/inventur/inventurdaten-verbuchen)).

## Capturas de pantalla

![Inventario con dispositivo MDE](/img/docs/inventur-inventurerfassung-mde-1.png)

## Temas relacionados

- [Inventario general](/docs/inventur/inventur-allgemein)
- [Captura de inventario en caja](/docs/inventur/inventurerfassung-kasse)
- [Contabilizar datos de inventario](/docs/inventur/inventurdaten-verbuchen)
- [InventarPro (MDE)](/docs/inventarpro/) – Inicio rápido y manual completo de la app InventarPro
