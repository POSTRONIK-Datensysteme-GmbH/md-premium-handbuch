# Uso de XMPS

Resumen y guías del software de caja XMPS. Todos los pasos se describen en este manual.

## Resumen

| Tema | Descripción breve |
|------|-------------------|
| [Identificación / Cierre de sesión](#identificación--cierre-de-sesión) | Uso de caja como cajero |
| [Cantidad en ventas](#cantidad-en-ventas) | Registrar varios artículos iguales a la vez |
| [Registro manual (PLU)](#registro-manual-plu) | Introducir PLU o EAN |
| [Anulación](#anulación) | Anular artículo (solo el último) |
| [Cancelar ticket](#cancelar-ticket) | Cancelar toda la venta |
| [Ingreso / Reintegro](#ingreso--reintegro) | p. ej. registrar contrareembolso |
| [Abrir cajón / Sin venta](#abrir-cajón--sin-venta) | Abrir cajón sin registrar |
| [Restaurar red de cajas](#restaurar-red-de-cajas) | Tras fallo de red |
| [Devoluciones](#devoluciones) | Registrar devoluciones |
| [Descuento (importe)](#descuento-importe) | Descuento por importe |
| [Descuento (%)](#descuento-) | Descuento en porcentaje |
| [Cliente en espera](#cliente-en-espera) | Pausar venta, atender a otro |
| [Ventas a crédito](#ventas-a-crédito-con-número-de-cliente) | Vender a cuenta de cliente |
| [Pagos cliente (AKONTO)](#pagos-cliente-akonto) | Registrar pago a cuenta |
| [Cuenta cliente + / –](#cuenta-cliente--cuenta-cliente--) | Cambiar saldo sin efectivo (p. ej. transferencia) |

---

## Identificación / Cierre de sesión

Antes de que un cajero pueda trabajar en caja, debe **identificarse**. La caja queda asignada a su usuario y todas las operaciones se le atribuyen. Al final del turno, el cajero **cierra sesión**.

**Cómo identificarse o cerrar sesión:**

1. En la caja, abrir la pantalla de identificación (según configuración: número de cajero o usuario).
2. Para **cerrar sesión**, elegir la función de cierre – la caja vuelve al estado de identificación.

![Identificación](/img/docs/kassa/anmelden-abmelden.png)

---

## Cantidad en ventas

Si se venden **varios artículos iguales** (p. ej. 5× la misma bebida), puede introducir la **cantidad** antes de registrar y capturar el artículo una sola vez; la caja registrará esa cantidad. Primero la cantidad, luego la tecla **X/Fecha**. El artículo puede **escanearse**, introducirse por **PLU** o registrarse por **grupo de productos**. Una vez escaneado o llamado por PLU, se repite con cada pulsación de **PLU** (sin volver a introducir la cantidad).

**Cómo registrar varios artículos iguales (cantidad):**

1. Introducir **cantidad** (p. ej. 5).
2. Pulsar **"X"** (o **X/Fecha**).
3. **Escanear artículo** o introducir **PLU/EAN** – el artículo se añade con la cantidad indicada.

---

## Registro manual (PLU)

Los artículos que no se pueden escanear (p. ej. sin código de barras) se pueden introducir por **PLU** o **código EAN**. Se introduce el número por el teclado; la tecla PLU/EAN confirma el registro.

**Cómo registrar un artículo manualmente:**

1. Introducir **PLU** o **EAN** por el teclado.
2. Pulsar **"PLU"** o **"EAN"** – el artículo se añade a la venta.

---

## Anulación

Con la tecla **Anulación** puede quitar un **artículo ya registrado** de la venta. El artículo a anular debe ser el **último** registrado: pulse **Anulación** y registre el artículo **de nuevo** (como anulación) – se deduce. Así puede corregir p. ej. un artículo escaneado dos veces por error o uno equivocado.

:::caution
La anulación solo se aplica al **último artículo** registrado. Si el artículo a anular está más atrás en la venta, puede ser necesario cancelar toda la venta (Cancelar ticket) y empezar de nuevo.
:::

**Cómo anular un artículo:**

1. Asegurarse de que el **artículo a anular** es el **último** de la venta (si hace falta, anular antes otros o cancelar la venta).
2. Pulsar **"Anulación"**.
3. **Escanear** de nuevo el **artículo a anular** o introducir PLU – el artículo queda anulado (deducido).

---

## Cancelar ticket

La tecla **Cancelar** puede **en cualquier momento** anular la venta actual. La función anula **todos** los artículos registrados y borra los totales. **Cancelar** también termina acciones en REG o RETORNO (p. ej. recuento, retirada, declaración de fondo).

:::tip
Cuando hay **varios errores** en una venta, suele ser más fácil cancelar toda la venta y volver a empezar.
:::

**Cómo cancelar una venta:**

1. Pulsar **"Cancelar"** – la venta se borra; puede empezar de nuevo.

---

## Ingreso / Reintegro

**Reintegro:** p. ej. al aceptar un contrareembolso – el importe se saca de caja y se registra como reintegro. **Ingreso:** cuando se introduce dinero en caja (p. ej. reponer cambio), se registra como ingreso. El procedimiento es el mismo; solo se usa la tecla "Ingreso".

**Cómo registrar un ingreso o reintegro:**

1. Ir a la pantalla **"FUNKTION"**.
2. Introducir **importe** (el realmente ingresado o reintegrado).
3. Pulsar **"Reintegro"** o **"Ingreso"** – queda registrado.

---

## Abrir cajón / Sin venta

Si quiere **abrir el cajón** **sin** registrar una venta (p. ej. para sacar o meter cambio), use esta función. No se registra venta – solo se abre el cajón.

**Cómo abrir el cajón sin venta:**

1. Pulsar **"Abrir cajón / Sin venta"** – el cajón se abre.

---

## Restaurar red de cajas

Las cajas en una **red** se comunican por la red. Si una o más cajas no están disponibles (p. ej. fallo de red), aparece un error y se interrumpe la conexión – las cajas pueden seguir trabajando solas. **Tras** solucionar el fallo, hay que volver a conectar las cajas. Para ello sirve **"Restaurar red de cajas"**.

**Cómo restaurar la red de cajas:**

1. Poner la caja en modo **"X"**.
2. Introducir **4301**.
3. Pulsar **"Subtotal"** – la caja imprime un informe de todas las cajas de la red.
4. Volver a poner la caja en modo **"REG 1"** – la red queda restaurada.

---

## Devoluciones

Cuando un **ticket ya está cerrado**, los artículos están descontados del stock. Si el cliente **devuelve** un artículo, hay que corregir stock y totales – para eso está la función **Devolución**. Además, Devolución es la **única forma** de corregir errores que solo se ven **después** de cerrar (p. ej. precio erróneo, artículo registrado dos veces).

**Cómo registrar una devolución:**

1. Pulsar **"Devolución"** – la caja pasa a modo devolución.
2. **Escanear artículo** o introducir **EAN** por teclado.
3. Cerrar con **"Efectivo"** – la devolución queda registrada; stock y totales se actualizan.

![Devoluciones](/img/docs/kassa/artikel-retouren.png)

---

## Descuento (importe)

**Descuento (importe)** es una **reducción en importe** del precio – de un artículo o de **toda** la venta. Se introduce el **importe** en que se reduce (no el porcentaje). Tras un artículo, el descuento es solo de ese artículo; tras **Subtotal**, de toda la venta.

**Cómo aplicar un descuento (importe):**

1. **Escanear artículo** o introducir **PLU/EAN** (o pulsar **Subtotal** si el descuento es de toda la venta).
2. Introducir **importe de descuento** (p. ej. 2,00).
3. Pulsar **"Descuento importe"** – el descuento queda registrado.

![Descuento importe](/img/docs/kassa/nachlass-betrag.png)

---

## Descuento (%)

**Descuento (%)** es una **reducción en porcentaje** del precio – de un artículo o de toda la venta. Se introduce el **porcentaje** (p. ej. 10 para 10%). La tecla Descuento puede tener un **porcentaje fijo**; si introduce otro, lo sustituye.

**Cómo aplicar un descuento (%):**

1. **Escanear artículo** o introducir **PLU/EAN** (o **Subtotal** si aplica a toda la venta).
2. Introducir **descuento en %** (p. ej. 5 o 10).
3. Pulsar **"Descuento"** – el descuento en % queda registrado.

![Descuento %](/img/docs/kassa/rabatt.png)

---

## Cliente en espera

Si un cliente quiere **buscar otro artículo** durante la venta (p. ej. en el local), puede **"dejarlo en espera"**: la venta actual se pausa y se guarda. Puede **atender a otro cliente**. Después recupera la venta en espera y la continúa.

**Cómo dejar un cliente en espera:**

1. Pulsar **"Cliente en espera"** – la venta queda en espera; puede iniciar otra.
2. Para **continuar** la venta en espera: pulsar **"Continuar cliente"** – vuelve a aparecer la venta anterior.

![Cliente en espera](/img/docs/kassa/kunde-parken.png)

---

## Ventas a crédito con número de cliente

Con XMPS se pueden gestionar **saldos de cliente** (crédito). En una **venta a crédito** el importe no se paga en efectivo sino que se carga en la **cuenta del cliente**. Al cerrar la venta, la caja guarda el nuevo saldo del cliente.

**Cómo registrar una venta a crédito:**

1. Introducir **número de cliente**.
2. Pulsar **"Cliente"** – el cliente queda seleccionado.
3. **Escanear artículos** como en una venta normal.
4. Pulsar **"Subtotal"**.
5. Pulsar **"Crédito"** – el importe se carga en la cuenta; el ticket se cierra.

![Ventas a crédito](/img/docs/kassa/krediteinkaeufe.png)

---

## Pagos cliente (AKONTO)

**Akonto** sirve para registrar **pagos** del cliente que reducen el **saldo pendiente** (p. ej. pago de factura o a cuenta). El cliente entrega dinero – usted lo registra como ingreso en su cuenta; el saldo baja.

**Cómo registrar un pago de cliente (Akonto):**

1. Introducir **número de cliente**.
2. Pulsar **"Akonto"**.
3. Introducir **importe** que paga el cliente.
4. Pulsar **"Efectivo"** – el pago queda registrado.
5. Pulsar **"ESC"** – sale del procedimiento Akonto.

![Pagos AKONTO](/img/docs/kassa/kundeneinzahlungen-akonto.png)

---

## Cuenta cliente +, Cuenta cliente –

Estas funciones cambian el **saldo del cliente** **sin** mover efectivo en caja. Caso típico: el cliente paga por **transferencia** – usted registra el pago con **Cuenta cliente –**; el saldo baja y el cajón no cambia.

- **Cuenta cliente –** reduce el **saldo pendiente** del cliente (el cliente ha pagado).
- **Cuenta cliente +** aumenta el saldo pendiente (p. ej. cargo adicional, anulación de abono).

**Cómo registrar un cambio de saldo sin efectivo:**

1. Introducir **número de cliente**.
2. Pulsar **"Cuenta cliente –"** (o **"Cuenta cliente +"**).
3. Introducir **importe**.
4. Pulsar **"Cuenta cliente –"** (o **"Cuenta cliente +"**) **de nuevo** – el registro se ejecuta.

![Cuenta cliente +/-](/img/docs/kassa/kundenkonto-plus-minus.png)

---

## Temas relacionados

- [Cierres (fondo de caja, ticket nulo, cierre diario …)](/docs/kassa/abschluesse)
- [Caja – Resumen](/docs/kassa/)
