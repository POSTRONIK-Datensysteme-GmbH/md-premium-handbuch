# Screenshots von Zammad-Help-Seiten holen und in static/img/docs speichern
# Aufruf: .\fetch-screenshots.ps1

$baseUrl = "https://support.postronik.at"
$outDir  = "g:\Support\handbuch\static\img\docs"
$helpBase = "$baseUrl/help/de-de"

# Mapping: Zammad-URL-Pfad (help/de-de/...) -> unser Doc-Slug (ohne .md, mit /)
$pages = @(
    @{ path = "12-stammdaten/8-bestehende-artikel-suchen-nach-barcode";     slug = "stammdaten/bestehende-artikel-suchen-barcode" },
    @{ path = "12-stammdaten/9-bestehende-artikel-suchen-nach-bezeichnung";  slug = "stammdaten/bestehende-artikel-suchen-bezeichnung" },
    @{ path = "12-stammdaten/10-bestehende-artikel-suchen-nach-warengruppe"; slug = "stammdaten/bestehende-artikel-suchen-warengruppe" },
    @{ path = "12-stammdaten/11-bestehende-artikel-verkaufspreis-andern";    slug = "stammdaten/bestehende-artikel-verkaufspreis-aendern" },
    @{ path = "12-stammdaten/12-bestehende-artikel-einkaufspreis-andern";    slug = "stammdaten/bestehende-artikel-einkaufspreis-aendern" },
    @{ path = "12-stammdaten/7-neuen-artikel-anlegen-fremdartikel";          slug = "stammdaten/neuer-artikel-fremdartikel" },
    @{ path = "12-stammdaten/14-etiketten-drucken";                         slug = "stammdaten/etiketten-drucken" },
    @{ path = "6-auftrag-lieferanten/19-lieferantenbeleg-erfassen";          slug = "auftrag-lieferanten/lieferantenbeleg-erfassen" },
    @{ path = "6-auftrag-lieferanten/17-lieferanten-bestellung";            slug = "auftrag-lieferanten/lieferanten-bestellung" },
    @{ path = "6-auftrag-lieferanten/15-lieferanten-bestellung-aus-bestell-vorschlag"; slug = "auftrag-lieferanten/lieferanten-bestellung-aus-vorschlag" },
    @{ path = "6-auftrag-lieferanten/87-lieferantenlieferschein-erfassen";  slug = "auftrag-lieferanten/lieferantenlieferschein-erfassen" },
    @{ path = "6-auftrag-lieferanten/42-lieferanten-gutschrift";            slug = "auftrag-lieferanten/lieferanten-gutschrift" },
    @{ path = "6-auftrag-lieferanten/18-offene-lieferanten-bestellung-ubernehmen"; slug = "auftrag-lieferanten/offene-bestellung-uebernehmen" },
    @{ path = "6-auftrag-lieferanten/89-offene-lieferantenlieferscheine-ubernehmen"; slug = "auftrag-lieferanten/offene-lieferantenlieferscheine-uebernehmen" },
    @{ path = "6-auftrag-lieferanten/16-tobaccoland-bestellung-online-senden"; slug = "auftrag-lieferanten/tobaccoland-bestellung-online" },
    @{ path = "6-auftrag-lieferanten/78-philip-morris-bestellung-online-senden"; slug = "auftrag-lieferanten/philip-morris-bestellung-online" },
    @{ path = "6-auftrag-lieferanten/85-moosmayr-bestellung-online-senden"; slug = "auftrag-lieferanten/moosmayr-bestellung-online" },
    @{ path = "7-inventur/35-inventur-allgemein";                            slug = "inventur/inventur-allgemein" },
    @{ path = "7-inventur/5-inventurerfassung-an-der-kasse";                 slug = "inventur/inventurerfassung-kasse" },
    @{ path = "7-inventur/6-inventurerfassung-mit-mde-gerat";                slug = "inventur/inventurerfassung-mde" },
    @{ path = "7-inventur/33-inventurdaten-verbuchen";                       slug = "inventur/inventurdaten-verbuchen" },
    @{ path = "7-inventur/37-artikel-ohne-inventur-seit-datum-lagerstand-bereinigen"; slug = "inventur/artikel-ohne-inventur-bereinigen" },
    @{ path = "7-inventur/38-inventurliste-per-stichtag-erstellen";          slug = "inventur/inventurliste-stichtag" },
    @{ path = "7-inventur/40-inventurdaten-fur-lager-zurucksetzen";         slug = "inventur/inventurdaten-zuruecksetzen" },
    @{ path = "5-zeitungen/25-zeitungs-lieferscheine-ubernehmen";           slug = "zeitungen/zeitungs-lieferscheine-uebernehmen" },
    @{ path = "5-zeitungen/26-zeitungs-lieferdifferenzen-erfassen";          slug = "zeitungen/lieferdifferenzen-erfassen" },
    @{ path = "5-zeitungen/28-remissionen";                                 slug = "zeitungen/remissionen" },
    @{ path = "5-zeitungen/43-retourenaufruf-an-mde-gerat-senden";           slug = "zeitungen/retourenaufruf-mde" },
    @{ path = "5-zeitungen/29-vorremission-aus-lieferscheinen";             slug = "zeitungen/vorremission-aus-lieferscheinen" },
    @{ path = "5-zeitungen/34-vorremission-mit-barcode";                    slug = "zeitungen/vorremission-mit-barcode" },
    @{ path = "5-zeitungen/30-remissionsaufruf-abschliessen";               slug = "zeitungen/remissionsaufruf-abschliessen" },
    @{ path = "5-zeitungen/31-zeitungs-nachbestellungen";                   slug = "zeitungen/zeitungs-nachbestellungen" },
    @{ path = "5-zeitungen/77-zeitungsreservierungen";                      slug = "zeitungen/zeitungsreservierungen" },
    @{ path = "5-zeitungen/91-zeitung-reservierungsliste";                  slug = "zeitungen/zeitung-reservierungsliste" },
    @{ path = "5-zeitungen/82-rechnungskontrolle-zeitung";                 slug = "zeitungen/rechnungskontrolle-zeitung" },
    @{ path = "13-auftrag-kunden/71-ausdrucken-von-kunden-rechnungen";      slug = "auftrag-kunden/kunden-rechnungen-ausdrucken" },
    @{ path = "13-auftrag-kunden/80-automaten-lager-umbuchung";             slug = "auftrag-kunden/automaten-lager-umbuchung" },
    @{ path = "13-auftrag-kunden/86-warenschwund-erfassen-diebstahl-schwund-verderb"; slug = "auftrag-kunden/warenschwund-erfassen" },
    @{ path = "13-auftrag-kunden/81-md-auftrag-erstellen";                  slug = "auftrag-kunden/md-auftrag-erstellen" }
)

$results = @{}
foreach ($p in $pages) {
    $url = "$helpBase/$($p.path)"
    $slug = $p.slug -replace '/', '-'
    $imgs = @()
    try {
        $r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 20
        $matches = [regex]::Matches($r.Content, '<img[^>]+src="([^"]+)"')
        $i = 1
        foreach ($m in $matches) {
            $src = $m.Groups[1].Value
            if ($src -match '^/') { $src = $baseUrl + $src }
            if ($src -notmatch '\.(jpg|jpeg|png|gif|webp)|/attachments/') { continue }
            $ext = if ($src -match '\.(png|gif|webp)') { $Matches[1] } else { "png" }
            $fileName = "${slug}-${i}.${ext}"
            $filePath = Join-Path $outDir $fileName
            try {
                Invoke-WebRequest -Uri $src -UseBasicParsing -OutFile $filePath -TimeoutSec 15
                $imgs += "/img/docs/$fileName"
            } catch {
                Write-Host "Fehler Download $src -> $fileName : $_"
            }
            $i++
        }
        $results[$p.slug] = $imgs
        if ($imgs.Count -gt 0) { Write-Host "OK $($p.slug): $($imgs.Count) Bild(er)" }
    } catch {
        Write-Host "Fehler Seite $url : $_"
    }
}
$results | ConvertTo-Json -Depth 5 | Set-Content (Join-Path $outDir "image-mapping.json") -Encoding UTF8
Write-Host "Fertig. Mapping in static/img/docs/image-mapping.json"
