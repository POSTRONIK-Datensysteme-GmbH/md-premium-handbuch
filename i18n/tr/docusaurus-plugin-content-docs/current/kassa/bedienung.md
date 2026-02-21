# XMPS kasa kullanımı

XMPS kasa üzerinde çalışma için genel bakış ve adım adım talimatlar. Tüm adımlar bu kılavuzda açıklanmaktadır.

## Genel bakış

| Konu | Kısa açıklama |
|------|---------------|
| [Giriş / Çıkış](#giriş--çıkış) | Kasanın kasiyer olarak kullanılması |
| [Satışta çarpma](#satışta-çarpma) | Aynı ürünün birden fazlası |
| [Manuel giriş (PLU)](#manuel-giriş-plu) | PLU veya barkod girişi |
| [İade (storno)](#iade-storno) | Son ürünü iptal etme |
| [Fiş iptali](#fiş-iptali) | Tüm işlemi iptal etme |
| [Yatırma / Çekme](#yatırma--çekme) | Örn. kapıda ödeme |
| [Kasa çekmecesi açma / Satışsız](#kasa-çekmecesi-açma--satışsız) | Satış olmadan çekmece açma |
| [Kasa ağı geri yükleme](#kasa-ağı-geri-yükleme) | Ağ kesintisi sonrası |
| [İadeler](#iadeler) | İade kaydı |
| [İndirim (tutar)](#indirim-tutar) | Tutar indirimi |
| [İndirim (%)](#indirim-) | Yüzde indirimi |
| [Müşteri park etme](#müşteri-park-etme) | Duraklatma, başka müşteriye geçme |
| [Kredi satışı (müşteri no.)](#kredi-satışı-müşteri-no) | Müşteri hesabına satış |
| [Müşteri ödemeleri (AKONTO)](#müşteri-ödemeleri-akonto) | Hesaba ödeme kaydı |
| [Müşteri hesabı + / –](#müşteri-hesabı---müşteri-hesabı--) | Nakit olmadan bakiye değişikliği |

---

## Giriş / Çıkış

Kasiyer kasada çalışmadan önce **giriş** yapmalıdır. Kasa o zaman hesabına atanır; tüm işlemler ona yazılır. Vardiya sonunda **çıkış** yapılır.

**Giriş veya çıkış nasıl yapılır:**

1. Kasada giriş ekranını açın (yapılandırmaya göre: kasiyer no. veya kullanıcı).
2. **Çıkış** için çıkış fonksiyonunu seçin – kasa tekrar giriş moduna geçer.

![Giriş Çıkış](/img/docs/kassa/anmelden-abmelden.png)

---

## Satışta çarpma

**Aynı ürünün birden fazlasında** (örn. 5× aynı içecek) **miktar** girebilirsiniz; ürünü yalnızca bir kez kaydedersiniz – kasa girilen miktarı yazar. Önce miktar, sonra **X/Tarih** tuşu. Ürün **taranabilir**, **PLU** veya **ürün grubu** ile girilebilir. Bir kez tarandıktan veya PLU ile çağrıldıktan sonra her **PLU** basışında tekrarlanır.

**Birden fazla aynı ürün nasıl kaydedilir:**

1. **Miktarı** girin (örn. 5).
2. **"X"** (veya **X/Tarih**) tuşuna basın.
3. **Ürünü tarayın** veya **PLU/barkod** girin – ürün girilen miktarla eklenir.

---

## Manuel giriş (PLU)

Taranamayan ürünler (örn. barkodsuz) **PLU** veya **barkod numarası** ile girilir. Numara klavyeden girilir; PLU/EAN tuşu girişi onaylar.

**Manuel ürün girişi nasıl yapılır:**

1. **PLU** veya **barkod** numarasını klavyeden girin.
2. **"PLU"** veya **"EAN"** tuşuna basın – ürün işleme eklenir.

---

## İade (storno)

**Storno** tuşu ile **zaten girilmiş bir ürünü** işlemden kaldırabilirsiniz. Storno edilecek ürün **son** girilen olmalıdır: **Storno** tuşuna basın ve ürünü tekrar girin (storno olarak) – düşülür. Böylece çift tarama veya yanlış ürün iptal edilir.

:::caution
Storno **yalnızca son** girilen ürün için geçerlidir. Ürün işlemde daha önceyse, tüm işlemi iptal etmeniz (Fiş iptali) ve yeniden başlamanız gerekebilir.
:::

**Ürün storno nasıl yapılır:**

1. **Storno edilecek ürünün** işlemde **son** olduğunu kontrol edin.
2. **"Storno"** tuşuna basın.
3. **Ürünü** tekrar **tarayın** veya PLU girin – ürün storno edildi.

---

## Fiş iptali

**İptal** tuşu **her an** devam eden işlemi iptal edebilir. Girilen tüm ürünler storno sayılır; tüm toplamlar silinir. **İptal**, REG veya İADE modunda da (örn. sayım, çekme, açılış bakiyesi bildirimi) işlemi keser.

:::tip
İşlemde **birden fazla hata** olduğunda, genelde tüm işlemi iptal edip yeniden başlamak en kolayıdır.
:::

**İşlem nasıl iptal edilir:**

1. **"İptal"** (Prekid/Abbrechen) tuşuna basın – işlem silindi; yeniden başlayabilirsiniz.

---

## Yatırma / Çekme

**Çekme:** Örn. kapıda ödemede – tutar kasadan çıkarılır ve çekme olarak yazılır. **Yatırma:** Nakit kasa çekmecesine konduğunda (örn. para üstü takviyesi) yatırma olarak yazılır. İşlem aynıdır; sadece "Yatırma" tuşu kullanılır.

**Yatırma veya çekme nasıl kaydedilir:**

1. **"FUNKTION"** sayfasına gidin.
2. **Tutarı** girin (gerçekten çekilen veya yatırılan).
3. **"Çekme"** veya **"Yatırma"** tuşuna basın – işlem kaydedildi.

---

## Kasa çekmecesi açma / Satışsız

**Satış kaydı olmadan** çekmeceyi açmak istiyorsanız (örn. para üstü için) bu fonksiyonu kullanın. Satış kaydı yapılmaz – yalnızca çekmece açılır.

**Satışsız çekmece nasıl açılır:**

1. **"Lade auf / Kein Verkauf"** (çekmece aç / satış yok) tuşuna basın – çekmece açılır.

---

## Kasa ağı geri yükleme

**Ağdaki** kasalar çalışma sırasında iletişim kurar. Bir veya daha fazla kasa erişilemezse (örn. ağ sorunu) hata görünür ve bağlantı kesilir – kasalar tek başına çalışmaya devam edebilir. **Arıza** giderildikten **sonra** kasalar tekrar bağlanır. Bunun için **"Kassenverbund wiederherstellen"** (kasa ağını geri yükle) kullanılır.

**Kasa ağı nasıl geri yüklenir:**

1. Kasayı **"X"** moduna alın.
2. **4301** girin.
3. **"Zwischensumme"** (ara toplam) tuşuna basın – kasa ağdaki tüm kasaların raporunu yazdırır.
4. Kasayı **"REG 1"** moduna geri alın – ağ geri yüklendi.

---

## İadeler

**Fiş kapandıktan sonra** ürünler stoktan düşülmüştür. Müşteri böyle bir ürünü **iade ederse** stok ve toplamlar düzeltilmeli – bunun için **Retour** (iade) kullanılır. İade, **kapatmadan sonra** fark edilen hataları (örn. yanlış fiyat, çift giriş) düzeltmenin **tek yoludur**.

**İade nasıl kaydedilir:**

1. **"Retour"** tuşuna basın – kasa iade moduna geçer.
2. **Ürünü tarayın** veya klavyeden **barkod** girin.
3. **"Bar"** (nakit) ile kapatın – iade kaydedildi; stok ve toplamlar güncellendi.

![İadeler](/img/docs/kassa/artikel-retouren.png)

---

## İndirim (tutar)

**İndirim (tutar)** fiyattan **tutar düşümüdür** – tek ürün veya **tüm** işlem için. Düşülecek **tutarı** girersiniz (yüzde değil). Ürün sonrası indirim yalnızca o ürün için; **Ara toplam** sonrası tüm işlem için geçerli olur.

**Tutar indirimi nasıl verilir:**

1. **Ürünü tarayın** veya **PLU/barkod** girin (veya tüm işlem için önce **Ara toplam**).
2. **İndirim tutarını** girin (örn. 2,00).
3. **"Nachlass Betrag"** (indirim tutar) tuşuna basın – düşüm kaydedildi.

![İndirim tutar](/img/docs/kassa/nachlass-betrag.png)

---

## İndirim (%)

**İndirim (%)** fiyattan **yüzde düşümdür** – tek ürün veya tüm işlem için. **Yüzdeyi** girersiniz (örn. 10 = %10). İndirim tuşu **sabit yüzde** içerebilir; başka girerseniz onu değiştirir.

**Yüzde indirimi nasıl verilir:**

1. **Ürünü tarayın** veya **PLU/barkod** girin (veya tüm işlem için **Ara toplam**).
2. **İndirim %** girin (örn. 5 veya 10).
3. **"Rabatt"** (indirim) tuşuna basın – yüzde düşüm kaydedildi.

![İndirim %](/img/docs/kassa/rabatt.png)

---

## Müşteri park etme

Satış sırasında müşteri **başka ürün getirmek** isterse (örn. mağazadan) onu **"park edebilirsiniz"**: devam eden işlem duraklar ve saklanır. **Başka müşteriye** geçebilirsiniz. Sonra park edilmiş işlemi tekrar çağırıp sürdürürsünüz.

**Müşteri nasıl park edilir:**

1. **"Kunde parken"** (müşteri park et) tuşuna basın – işlem park edildi; yeni işlem başlatabilirsiniz.
2. Park edilmiş işlemi **sürdürmek** için: **"Kunde fortsetzen"** (müşteriye devam et) tuşuna basın – önceki işlem tekrar görünür.

![Müşteri park](/img/docs/kassa/kunde-parken.png)

---

## Kredi satışı (müşteri no.)

XMPS **müşteri bakiyelerini** (kredi) yönetebilir. **Kredi satışında** alışveriş nakit değil, **müşteri hesabına** borç yazılır. Satış kapatıldıktan sonra kasa müşterinin yeni bakiyesini saklar.

**Kredi satışı nasıl kaydedilir:**

1. **Müşteri numarasını** girin.
2. **"Kunden"** (müşteriler) tuşuna basın – müşteri seçildi.
3. **Ürünleri** normal satış gibi **tarayın**.
4. **"Zwischensumme"** (ara toplam) tuşuna basın.
5. **"Kredit"** tuşuna basın – tutar müşteri hesabına borç yazıldı; fiş kapatıldı.

![Kredi satışı](/img/docs/kassa/krediteinkaeufe.png)

---

## Müşteri ödemeleri (AKONTO)

**Akonto**, **müşteri ödemelerini** (borç bakiyesini azaltan) kaydetmek için kullanılır – örn. müşteri faturayı veya taksit öder. Müşteri nakit verir – siz bunu hesabına yatırma olarak kaydedersiniz; bakiye azalır.

**Müşteri ödemesi (Akonto) nasıl kaydedilir:**

1. **Müşteri numarasını** girin.
2. **"Akonto"** tuşuna basın.
3. Müşterinin yatırdığı **tutarı** girin.
4. **"BAR"** (nakit) tuşuna basın – yatırma kaydedildi.
5. **"ESC"** tuşuna basın – Akonto işleminden çıkılır.

![Akonto yatırmalar](/img/docs/kassa/kundeneinzahlungen-akonto.png)

---

## Müşteri hesabı +, Müşteri hesabı –

Bu fonksiyonlar **müşteri bakiyesini** kasada **nakit hareketi olmadan** değiştirir. Tipik durum: Müşteri **havale** ile öder – siz **Müşteri hesabı –** ile yatırmayı kaydedersiniz; bakiye düşer, çekmece değişmez.

- **Müşteri hesabı –** müşterinin **borç bakiyesini** azaltır (müşteri ödedi).
- **Müşteri hesabı +** borç bakiyesini artırır (örn. ekleme, alınan faturanın iptali).

**Nakit olmadan bakiye değişikliği nasıl kaydedilir:**

1. **Müşteri numarasını** girin.
2. **"Kundenkonto –"** (veya **"Kundenkonto +"**) tuşuna basın.
3. **Tutarı** girin.
4. **"Kundenkonto –"** (veya **"Kundenkonto +"**) tuşuna **tekrar** basın – kayıt tamamlandı.

![Müşteri hesabı +/-](/img/docs/kassa/kundenkonto-plus-minus.png)

---

## İlgili konular

- [Zatvaranja (açılış bakiyesi, null fiş, günlük kapanış …)](/docs/kassa/abschluesse)
- [Kasa – Genel bakış](/docs/kassa/)
