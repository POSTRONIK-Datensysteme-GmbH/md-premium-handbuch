# InventarPro – Manual de usuario

Este manual combina la **guía de inicio rápido** y el **manual de usuario** y añade las **novedades** de la aplicación.

> **¿Solo los primeros pasos?** → [Guía de inicio rápido](/docs/inventarpro/schnellstart)

---

## 1. Inicio rápido (primeros pasos)

- **Conectar Wi‑Fi:** Conecte el dispositivo MDE a la Wi‑Fi de la empresa antes de iniciar la aplicación.
- **Primer arranque:** Abra InventarPro. Con Wi‑Fi activa la aplicación inicia sesión automáticamente y muestra el menú principal.
- **Cargar base de datos por primera vez:** En el menú principal pulse **Importar**. Espere a que termine la importación (importante).
- **Rutina diaria:** Cada día antes del primer uso pulse **Importar** en el menú principal para cargar datos de artículos, precios y proveedores actuales.

### Menú principal

- **Baldosas:** Cada baldosa inicia un módulo (p. ej. albarán, inventario, devoluciones).
- **Botones inferiores:** **Importar** (carga base de datos y opcionalmente devoluciones), **Info artículo (i)** (detalles de un artículo escaneado), **Exportar** (envía documentos cerrados a la gestión; parpadea cuando hay datos listos).
- **Ajustes:** Icono de engranaje (⚙) arriba a la derecha abre la configuración.

### Ejemplo: Registrar albarán

1. En el menú principal pulse **Albarán**.
2. Compruebe/introduzca datos de cabecera: fecha, número de albarán, proveedor (fecha y número opcionales). Pulse **Nuevo**.
3. Escanee artículos (código de barras) o ajuste la cantidad en el campo.
4. Pulse el botón **Atrás** del dispositivo → el documento aparece en la lista.
5. Seleccione el documento en la lista y pulse **Cerrar**.
6. Vuelva al menú principal. Cuando **Exportar** parpadee, pulse para enviar los datos.

### Actualizaciones de la aplicación

- La aplicación comprueba actualizaciones al iniciar. Si aparece un botón **Descargar**, pulse y siga las instrucciones. Si hay problemas, compruebe primero la Wi‑Fi y luego contacte con soporte.

---

## 2. Introducción (manual)

InventarPro es un software para dispositivos de captura móvil (MDE, Android 13) y permite en comercio y almacén:

- Albaranes (entrada de mercancía), inventario, pedidos, devoluciones, roturas/mermas  
- Reservas, transferencias de stock, etiquetas de producto, ESL (etiquetas electrónicas de lineal)  
- Remisión (tratamiento de devoluciones desde la gestión)

Los dispositivos se entregan preconfigurados.

---

## 3. Puesta en marcha y actualizaciones

- **Wi‑Fi:** Conecte el MDE a la Wi‑Fi de la empresa antes de iniciar la aplicación por primera vez.
- **Primer arranque / inicio de sesión:** Con Wi‑Fi activa la aplicación inicia sesión automáticamente y muestra el menú principal.
- **Base de datos:** Cargue la base de datos (artículos, proveedores, etc.) desde el servidor FTP mediante **Importar** en el menú principal (véase sección 15.1). Obligatorio en la primera puesta en marcha.
- **Actualizaciones:** Al iniciar se comprueban nuevas versiones. Si hay una, aparece un botón Descargar → pulse, se carga la APK → abra la APK descargada → siga la instalación.
- **Problemas:** Compruebe primero la Wi‑Fi y luego contacte con soporte.

---

## 4. Menú principal (pantalla de inicio)

- **Baldosas:** Inicio de módulos (albarán, inventario, remisión, reserva, rotura, devolución de mercancía, transferencia de stock, pedido, etiquetas, ESL).
- **Botones inferiores:** Importar, Info artículo (i), Exportar.
- **Ajustes:** Engranaje (⚙) arriba a la derecha → sección 14.

---

## 5.–12. Módulos (resumen)

- **Albarán:** Entrada de mercancía – cabecera (fecha, número, proveedor), **Nuevo**, escanear artículos/ajustar cantidad, Atrás → Guardar, **Cerrar** en lista, luego **Exportar**.
- **Inventario:** Conteos – opcional ubicación/almacén; en caso contrario mismo flujo que arriba.
- **Remisión:** Gestionar devoluciones – primero **Importar** para devoluciones actuales, luego módulo **Remisión**, elegir documento, ajustar cantidades SOLL/IST (escanear), Guardar, Cerrar, Exportar.
- **Reserva:** Elegir cliente/documento, capturar artículos, Guardar, Cerrar, Exportar.
- **Rotura / merma:** Fecha/documento, capturar artículos, Guardar, Cerrar, Exportar.
- **Devolución de mercancía:** Elegir proveedor, capturar artículos a devolver, Guardar, Cerrar, Exportar.
- **Transferencia de stock:** Elegir almacén origen/destino, capturar artículos, Atrás → se ejecuta la transferencia. **No** Cerrar/Exportar desde el menú principal.
- **Pedido:** Proveedor, capturar artículos, Guardar, Cerrar, Exportar (envío al proveedor vía gestión).
- **Etiquetas de producto:** Escanear artículos (número de etiquetas en campo cantidad si aplica), Guardar, Cerrar, Exportar (impresión p. ej. en MD-Premium).
- **ESL:** Asignar/anular productos en etiquetas de precio digitales. **No** Cerrar/Exportar desde menú principal; los cambios se procesan directamente.

---

## 13. Ajustes (icono de engranaje)

El engranaje (⚙) arriba a la derecha en el menú principal abre la configuración de la aplicación.

### 14.1 Ajustes principales

- **Base de datos:** Gestionar base de datos local (14.2).
- **Ajustes FTP:** Configurar servidor FTP (14.3).
- **Ajustes del dispositivo:** Info app/dispositivo, actualización, contadores BWD/BWK, perfil (14.4).
- **Ajustes de menú:** Personalizar menú principal y módulos (14.5).
- **Cerrar sesión:** Cerrar sesión del usuario actual.

### 14.2 Ajustes de base de datos

- **Última base de datos (fecha/hora):** Marca de tiempo de la última actualización.
- **Importar local:** Importar archivo de base de datos desde el almacenamiento del dispositivo.
- **Importar desde servidor FTP:** Actualizar base de datos desde el servidor FTP configurado (igual que el botón Importar en el menú principal).
- **Crear nueva e importar desde FTP:** Borrar base de datos local y volver a cargar desde el servidor FTP.

### 14.3 Ajustes FTP

- Dirección/IP del servidor, puerto (por defecto 21), usuario, contraseña.
- **Ruta de carpeta:** Ruta de descarga para base de datos/remisiones.
- **Ruta de subida:** Ruta para exportaciones.
- **Crear archivo JOB:** Casilla – crear archivo de control al exportar.
- **Guardar cambios:** Guardar ajustes.

### 14.4 Ajustes del dispositivo

- **Versión de la aplicación**, **ID del dispositivo**.
- **Contador ID BWD / Contador ID BWK:** Contadores internos de documentos (editables).
- **Perfil:** Selección TT/KN (plantillas de menú y comportamiento).
- **Botón Actualizar:** Búsqueda manual de actualizaciones.

*(Nota: El ajuste de idioma se eliminó en la versión actual; la aplicación usa el idioma del dispositivo o el predeterminado.)*

### 14.5 Ajustes de menú

- **Exportar/Importar local / Importar web:** Exportar o importar configuración del menú (local o desde la web; plantilla web según perfil TT/KN).
- **Configuración de módulos:** Por módulo: orden, ACO ID, BWK Create, etiqueta (TEXT01), listas desplegables, opción **"Buscar en ZAS"** (véase novedades).
- **Crear:** Añadir módulos personalizados si aplica.

---

## 15. Funciones del menú principal

### 15.1 Importar

- Carga la base de datos actual (artículos, proveedores, etc.) desde el servidor FTP configurado. Necesario para el correcto funcionamiento.
- Importa devoluciones para el módulo **Remisión**.
- **ZAGesamt.csv** solo se descarga al pulsar **Importar** (menú principal) (necesario para la búsqueda ZAS en inventario).

### 15.2 Info artículo (icono i)

- En la barra inferior entre "Importar" y "Exportar".
- Pulse → iniciar búsqueda de información del artículo → escanee código de barras → se muestran detalles (p. ej. coste, precio, número de pedido, proveedor, grupo).

### 15.3 Exportar

- Envía todos los documentos marcados como "cerrados" (albarán, inventario, remisión, reserva, rotura, devolución, pedido, etiquetas) a la gestión.
- El botón parpadea cuando hay datos listos para exportar.
- Tras exportar se muestra un mensaje claro (éxito/parcial/fallo y número).

---

## 16. Novedades (complementos al manual)

Estos puntos amplían el manual anterior y corresponden al estado actual de la aplicación.

### Menú principal e importar/exportar

- **Estado de importación:** Tras una importación se muestra un **banner** en el menú principal: éxito (verde), error (rojo) o "en curso", con marca de tiempo.
- **Resultado de exportación:** La exportación solo indica "Éxito" cuando la subida FTP ha tenido éxito. Se indica éxito parcial o fallo; las exportaciones fallidas no cuentan en el contador de éxitos.
- **ZAGesamt.csv:** El archivo para la búsqueda ZAS se carga **solo** al pulsar **Importar** en la pantalla principal. Si se usa la búsqueda ZAS en inventario y falta el archivo, aparece: *"Cargue ZAGesamt.csv mediante el botón Importar en la pantalla principal."*

### Módulo de inventario

- **Visualización:** Por defecto solo se muestra el **último artículo escaneado**. Un botón **"Mostrar todo"** muestra la lista completa; tras el siguiente escaneo se vuelve a la vista de un solo artículo.
- **Búsqueda ZAS ("Buscar en ZAS"):** Si está activada para el tipo de documento en ajustes de menú y un código de barras escaneado no se encuentra en la base de datos normal, se busca en **ZAGesamt.csv**. Los resultados crean una línea con código, texto corto y cantidad; la cantidad se calcula según tipo EAN (unidad/caja/cartón). Escaneos repetidos suman la cantidad ZAS calculada.

### Ajustes y menú

- **Perfil (TT/KN):** En **ajustes del dispositivo** hay una **selección de perfil (TT/KN)**. La selección se guarda localmente y se carga al abrir. En **ajustes de menú**, **Importar web** carga la plantilla según el perfil elegido.
- **Ajustes de menú – "Buscar en ZAS":** La opción **"Buscar en ZAS" (zas_search)** puede guardarse por tipo de documento. Controla si se busca en el archivo ZAGesamt cuando no se encuentra el código en inventario.

### Base de datos y copia de seguridad

- **Copias automáticas:** Antes de acciones relevantes la aplicación puede guardar la base de datos local automáticamente. Se mantienen hasta **5 copias**; las más antiguas se eliminan.
- **Restaurar:** Si falta el archivo de base de datos o no es válido, la aplicación intenta **restaurar desde la última copia**. Si tiene éxito se muestra un mensaje; si no, se abre el ajuste de base de datos (DbInfo).

### Documentos exportados

- **Gestión de documentos:** Se guardan los últimos **20 documentos exportados**. En **Documentos exportados** (si está en menú/navegación) puede consultarlos.
- **Restaurar:** Los documentos exportados pueden restaurarse si hace falta (p. ej. para volver a exportar).

### Actualizaciones de la aplicación

- **Comprobación de actualizaciones:** Al iniciar se comprueban nuevas versiones en segundo plano. Si hay una, aparece un botón **Descargar**; tras la descarga se inicia la instalación de la APK mediante el diálogo del sistema.

### Otros

- **Transferencia de stock y ESL:** Como en el manual – no "Cerrar" ni exportar desde el menú principal; los cambios se procesan o guardan directamente.
- **Archivo JOB:** Solo se crea si está activada **"Crear archivo JOB"** en ajustes FTP.

---

## 17. Cierre y soporte

Esperamos que este manual le ayude a usar InventarPro con eficacia. Para más preguntas o problemas contacte con soporte.

## Temas relacionados

- [InventarPro (MDE) – Resumen](/docs/inventarpro/)
- [Guía de inicio rápido](/docs/inventarpro/schnellstart)
- [Captura de inventario con dispositivo MDE](/docs/inventur/inventurerfassung-mde) (MDE clásico en inventario)

---

*Última actualización del manual: febrero de 2025 (incl. novedades de la versión actual de la aplicación).*
