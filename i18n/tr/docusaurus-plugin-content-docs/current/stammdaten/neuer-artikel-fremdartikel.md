# Yeni ürün oluşturma (fremdartikel)

Sistemde yeni bir fremdartikel (harici ürün) nasıl oluşturulur.

**Video:** [Create new article](https://youtu.be/ruzSVFZUfaE)

## Adımlar (form sırasına göre)

1. Menüde **Ana veriler** → **Fremdartikel**'e gidin ve **Yeni kayıt**'a tıklayın (veya **F5** basın).
2. **(2)** Ürün **tedarikçisini** seçin veya numaraya göre arayın.
3. **(3)** Ürün **barkodunu** girin.
4. **(4)** **Tedarikçi ürün numarasını** girin (tedarikçiden sipariş verirken kullandığınız numara). Yoksa barkod/EAN'ı buraya yazın. **Not:** Bu numara tedarikçi başına benzersiz olmalıdır, aksi halde mevcut bir ürün üzerine yazılabilir.
5. **(5)** **Kısa açıklama** girin.
6. **(6)** **Uzun açıklama** girin (isteğe bağlı; boşsa kısa açıklama kullanılır).
7. **(7)** **Net alış fiyatını** (KDV hariç) girin.
8. **(8)** Ürün **ürün grubunu** seçin.
9. **(9)** **KDV** oranını seçin: %10, %20, 2V %20 KDV vinyetleri veya %0.
10. **Kaydet** simgesine tıklayın veya **F10** basın.
11. **Ürün oluştur**'a tıklayın ve **Evet** ile onaylayın.

## Notlar

- **UPC ve EAN:** Bazı ürünlerde ABD UPC (12 hane) vardır. Kasa başına **0** ekleyerek EAN (13 hane) yapar. Barkodu bu biçimde saklayın (örn. `070330600065` → `0070330600065`).
- **EAN yok:** Ürünün EAN'ı yoksa kaydettikten sonra veya "Ürün oluştur"a tıkladıktan sonra **Autom.1** ile barkod üretebilirsiniz.
- **Çift numara:** Kaydettikten sonra ve "Ürün oluştur"dan önce bir numara (örn. ZZZ-1234) görünürse, o barkod veya tedarikçi numarası zaten kullanılıyor demektir.
- **Etiketler:** Ürünü oluşturduktan sonra **Ürün etiketleri talep et** ile etiket talep edebilirsiniz.

## Ekran görüntüleri

![Ana veriler fremdartikel – Yeni kayıt](/img/docs/stammdaten-neuer-artikel-fremdartikel-1.png)

![Tedarikçi, barkod, tedarikçi ürün numarası](/img/docs/stammdaten-neuer-artikel-fremdartikel-2.png)

![Açıklama, fiyatlar, ürün grubu, KDV](/img/docs/stammdaten-neuer-artikel-fremdartikel-3.png)

![Kaydet ve ürün oluştur](/img/docs/stammdaten-neuer-artikel-fremdartikel-4.png)

## İlgili konular

- [Barkoda göre mevcut ürünleri arama](/docs/stammdaten/bestehende-artikel-suchen-barcode)
- [Etiket yazdırma](/docs/stammdaten/etiketten-drucken)
