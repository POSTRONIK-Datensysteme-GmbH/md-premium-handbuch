# Gazete fatura kontrolü

EH-2000 belgeleri içe aktarıldığında gazeteler için toptancı faturaları da içe aktarılır. Gazete faturaları **borçlar** ve **alacaklar** içerir; bunlar **Veri bakımı** → **EH2000** → **İçe aktarılan belgeler** altında ayrı belgeler olarak saklanır.

**Borçlar** teslimatlarla eşleşmelidir. **Alacaklar** iadeler ve negatif fark raporları (eksik teslimatlar) ile eşleşmelidir. Eşleştirme **Faturaları kaydet** ile yapılır.

## Eşleştirme

- Her **borç** için fatura tarihinden önce kaydedilmiş, eşleşen sayı ve miktara sahip bir **teslimat** veya **pozitif fark raporu** olmalıdır.
- Her **alacak** için fatura tarihinden önce kaydedilmiş, eşleşen sayı ve miktara sahip bir **iade** veya **negatif fark raporu** olmalıdır.

Eşleştirilemeyen satırlar: sayım/giriş hataları, farklı sayı numaraları, metin olarak faturalanan pozisyonlar (örn. romanlar), geç iade edilen kalemlerden kaynaklanabilir. Bunlar manuel kontrol edilebilir, **kapatılabilir** (hata kabul edilir) veya **şikâyet** için işaretlenebilir.

## Görünümler

- **Teslimatlar/iadeler:** **Faturaları kaydet**'i başlatın → **EH2000 ReKtrl Lie/Rem** penceresini açın. Toptancı, teslimat ve iade dönemini seçin. Atama olmayan MDP belge satırlarını gösterir (Aco_Id, Qty diff., Qty total, Qty allocated, Compl. date sütunları dahil). Satıra çift tıklama tedarikçi belgesini açar.
- **Fatura/alacak:** **EH2000 ReKtrl RE/GS** penceresini açın. Toptancı ve fatura tarihini seçin. MDP ataması olmayan borç ve alacak satırlarını gösterir (Delivery type, DelArt no, Line no, Sub line no, Compl. date sütunları dahil).

## Kapatma

Her iki pencerede: Bir veya daha fazla satır seçin → **Sağ tıklayın** → **Satır(ları) kapat**. Kapatma eksik atamayı kabul eder. Önerilen sıra: Önce Lief/Rem'de geç iade edilen kalemleri kapatın, sonra her iki pencerede kalan satırları eşleştirin (örn. aynı miktar, farklı sayı numarası).

## Şikâyet

İşaretle: **Sağ tıklayın** → **Satır(ları) şikâyet için işaretle**. Kaldır: **Satır(ları) şikâyetten kaldır**. Ardından **Veri bakımı** → **EH2000** → **Faturalar** → **EH2000 RE şikâyet yazdır**: şube, şikâyet tarihi başlangıç/bitiş, toptancı seçin, **Tamam**. Raporu yazdırın veya toptancıya e-posta için **Dışa aktar**.

## Ekran görüntüleri

![Faturaları kaydet](/img/docs/zeitungen-rechnungskontrolle-zeitung-1.png)

![EH2000 ReKtrl Lie/Rem](/img/docs/zeitungen-rechnungskontrolle-zeitung-2.png)

![EH2000 ReKtrl RE/GS](/img/docs/zeitungen-rechnungskontrolle-zeitung-3.png)

![Satırları kapat](/img/docs/zeitungen-rechnungskontrolle-zeitung-4.png)

![Şikâyet için işaretle](/img/docs/zeitungen-rechnungskontrolle-zeitung-5.png)

![Şikâyet raporu yazdır](/img/docs/zeitungen-rechnungskontrolle-zeitung-6.png)

![Toptancıya dışa aktar](/img/docs/zeitungen-rechnungskontrolle-zeitung-7.png)

![Şikâyet özeti](/img/docs/zeitungen-rechnungskontrolle-zeitung-8.png)

## İlgili konular

- [Gazete irsaliyelerini devralma](/docs/zeitungen/zeitungs-lieferscheine-uebernehmen)
- [Gazete yeniden siparişleri](/docs/zeitungen/zeitungs-nachbestellungen)
- [Teslim farklarını kaydetme](/docs/zeitungen/lieferdifferenzen-erfassen)
