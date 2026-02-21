# XMPS zatvaranja (kapanışlar)

XMPS kasa kapanışları için genel bakış ve adım adım talimatlar. Tüm adımlar bu kılavuzda açıklanmaktadır.

## Genel bakış

| Konu | Kısa açıklama |
|------|---------------|
| [Açılış bakiyesi bildirimi](#açılış-bakiyesi-bildirimi) | Vardiya başında |
| [Nakit çekme](#nakit-çekme) | Çekmeleri bildirme |
| [Sayım](#sayım) | Çekmece içeriğini bildirme |
| [Null fiş](#null-fiş) | Örn. kontrol için |
| [Yıllık fiş](#yıllık-fiş) | FinanzOnline bildirimi |
| [Bankomat günlük kapanışı](#bankomat-günlük-kapanışı) | B-K terminal için günlük |

---

## Açılış bakiyesi bildirimi

**Açılış bakiyesi bildirimi** (Wechselgeld) vardiya **başlangıcındaki** (para üstü) tutarı kaydetmek içindir. Böylece çekmecede vardiya başında ne kadar nakit olduğu kayıt altına alınır. Bildirim **her kasiyer girişinden sonra** yapılır.

**Açılış bakiyesi nasıl bildirilir:**

1. **"FUNKTION"** sayfasına gidin.
2. **Tutarı** girin – çekmecedeki gerçek tutar (para üstü).
3. **Wechselgeld** (açılış bakiyesi) tuşuna basın.
4. **Bar** (nakit) tuşuna basın.
5. **ESC** tuşuna basın – bildirim tamamlandı.

---

## Nakit çekme

**Nakit çekme** (Geldabschöpfung) kasadan **yapılan çekmelerin** bildirilmesidir (örn. fazla nakit bankaya götürülür). Çekme kasada kaydedilir; kasa çekmecede daha az nakit bekler. Her çekme **hemen** çekmeden sonra bildirilmelidir. Bildirilen tutarlar gün sonuna kadar toplanır.

**Çekme nasıl bildirilir:**

1. **"FUNKTION"** sayfasına gidin.
2. **Tutarı** girin – çekilen tutar.
3. **Geldabschöpfung** (nakit çekme) tuşuna basın.
4. **Bar** tuşuna basın.
5. **ESC** tuşuna basın – bildirim kaydedildi.

---

## Sayım

**Sayım** (Geldzählung) **çekmece içeriğinin** (gerçekten saydığınız tutar) bildirilmesi içindir. Sayım **istediğiniz kadar** yapılabilir; her yeni bildirim öncekini değiştirir. Kasa **karşılaştırabilir**: çekmecede **ne olması gerekiyor** – sayılan ve bildirilen **ne**? Sayım **vardiya sonunda** veya **arşiv** için anlamlıdır.

**Sayım nasıl bildirilir:**

1. **"FUNKTION"** sayfasına gidin.
2. **Tutarı** girin – çekmecedeki sayılan tutar.
3. **Geldzählung** (sayım) tuşuna basın.
4. **Bar** tuşuna basın.
5. **ESC** tuşuna basın – bildirim kaydedildi.

---

## Null fiş

**Null fiş** **satışsız** bir fiştir – kasa girilen satış olmadan fiş yazdırır. **Vergi dairesi** (örn. denetimde) talep edebilir veya kasanın o anda satış yapmadığının kanıtı olarak kullanılır.

**Null fiş nasıl yazdırılır:**

1. **"FUNKT"** sayfasını seçin.
2. **"X/Z"** tuşuna basın.
3. **"DA"** (**X1 modu** onayı) tuşuna basın.
4. **9811** girin ve **[DA]** ile onaylayın – null fiş yazdırılır.

---

## Yıllık fiş

**Yıllık fiş** **tüm yıl** için (kasanın tüm satışları) kapanış fişidir. Vergi bildirimi veya **FinanzOnline** bildirimi için gereklidir. Yıllık fiş FinanzOnline’a bildirilmelidir.

**Yıllık fiş nasıl yazdırılır:**

1. **"FUNKT"** sayfasını seçin.
2. **"X/Z"** tuşuna basın.
3. **"DA"** (**X1 modu** onayı) tuşuna basın.
4. **9833** girin ve **[DA]** ile onaylayın – yıllık fiş yazdırılır.

---

## Bankomat günlük kapanışı

**Kart fonksiyonları** (B-K terminal) kullanıldığında **günlük terminal kapanışı** **zorunludur**. Ancak başarılı kapanışla **işyeri hesabına transfer** serbest bırakılır – aksi halde kart ödemeleri beklemede kalır. B-K terminal yapılandırmasına göre **TES kartı** gerekebilir (B-K terminal kılavuzuna bakın).

B-K kapanışı kasa kapanışından **bağımsız** yapılabilir ve aynı anda olması gerekmez. B-K terminal kullanan **her** kasada yapılmalıdır. XMPS **kapanış raporu** yazdırır – B-K terminal toplamı ile kasa karşılaştırılır.

**Bankomat günlük kapanışı nasıl yapılır:**

1. **"Funktion"** (fonksiyon) düzeyini açın.
2. **"X/Z"** tuşuna basın.
3. **"Z"** modunu seçin ve **"DA"** ile onaylayın.
4. **9898** girin ve **"Zwischensumme"** (ara toplam) ile onaylayın – kapanış yapılır; rapor yazdırılır.

![Bankomat kapanış 1](/img/docs/kassa/bankomat-tagesabschluss-1.png)

![Bankomat kapanış 2](/img/docs/kassa/bankomat-tagesabschluss-2.png)

![Bankomat kapanış 3](/img/docs/kassa/bankomat-tagesabschluss-3.png)

---

## İlgili konular

- [Kasa kullanımı (satış, storno, iadeler …)](/docs/kassa/bedienung)
- [Kasa – Genel bakış](/docs/kassa/)
