# Envanter genel bakış

Envanter, güncel stok seviyelerini kaydetmek için kullanılır. Sayılan her kalem için **hedef stok** hesaplanır ve sayım anında saklanır. **Hedef/fiili karşılaştırma** inceleme için envanter farklarını belirler.

## Kısmi ve tam envanter

- **Kısmi envanter:** Yalnızca sınırlı sayıda ürün sayılır. Kısmi envanter, sistemde hâlâ stok görünen ancak mağazada artık bulunmayan ürünleri tespit **edemez**.
- **Tam envanter:** Mağazadaki tütün ve tütün dışı ürünlerden tüm ürünler sayılır. Sayım ve kayıt sonrası, sayılmayan ancak hâlâ stoğu olan ürünlerle envanter verisi tamamlanır.

## Hazırlık

- MD-Premium'da **kasa serbest bırakma** yapılmış olmalıdır.
- Mağazadaki mallar için tüm **irsaliyeler** devralınmış olmalıdır.
- Tüm **gazete irsaliyeleri** devralınmış ve **kasa serbest bırakma** tamamlanmış olmalıdır.
- Başlamadan önce **envanter günü için tüm satış toplamlarının** MD-Premium'da kaydedildiğinden emin olun. **OLAP – Günlük raporu** çalıştırın, **Güne göre HGR** görüntüleyin ve **toplam satışları** kontrol edin.

## Ekran görüntüleri

![Envanter – Genel bakış](/img/docs/inventur-inventur-allgemein-1.png)

## İlgili konular

- [Kasada envanter kaydı](/docs/inventur/inventurerfassung-kasse)
- [El cihazıyla envanter kaydı](/docs/inventur/inventurerfassung-mde)
- [Envanter verilerini kaydetme](/docs/inventur/inventurdaten-verbuchen)
