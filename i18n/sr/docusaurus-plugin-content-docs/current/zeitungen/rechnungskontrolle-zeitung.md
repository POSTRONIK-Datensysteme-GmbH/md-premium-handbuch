# Kontrola računa za novine

Kada se uvoze dokumenti EH-2000, uvoze se i računi veleprodavca za novine. Računi za novine sadrže **naplate** i **dobropise**, čuvane kao posebni dokumenti pod **Održavanje podataka** → **EH2000** → **Uvezeni dokumenti**.

**Naplate** treba da odgovaraju isporukama. **Dobropisi** treba da odgovaraju returama i negativnim izveštajima o razlikama (manjci). Usklađivanje se vrši putem **Evidentiraj račune**.

## Usklađivanje

- Za svaku **naplatu** mora postojati **isporuka** ili **pozitivan izveštaj o razlici** sa odgovarajućim izdanjem i količinom, evidentiran datumom dokumenta pre datuma računa.
- Za svaki **dobropis** mora postojati **retura** ili **negativan izveštaj o razlici** sa odgovarajućim izdanjem i količinom, evidentiran datumom dokumenta pre datuma računa.

Stavke koje se ne mogu uskladiti mogu proizaći iz: grešaka pri brojanju/unosu, različitih brojeva izdanja, stavki naplaćenih kao tekst (npr. romani), artikala vraćenih prekasno. One se mogu ručno proveriti, **evidentirati kao otpis** (greška prihvaćena) ili označiti za **reklamaciju**.

## Pregledi

- **Isporuke/reture:** Pokrenite **Evidentiraj račune** → otvorite prozor **EH2000 ReKtrl Lie/Rem**. Izaberite veleprodavca, period isporuke i reture. Prikazuje stavke dokumenta MDP bez alokacije (kolone uklj. Aco_Id, Qty diff., Qty total, Qty allocated, Compl. date). Dvostruki klik na red otvara dokument dobavljača.
- **Račun/dobropis:** Otvorite prozor **EH2000 ReKtrl RE/GS**. Izaberite veleprodavca i datum računa. Prikazuje stavke naplate i dobropisa bez alokacije MDP (kolone uklj. Delivery type, DelArt no, Line no, Sub line no, Compl. date).

## Otpis

U oba prozora: Izaberite jedan ili više redova → **Desni klik** → **Otpis stavki**. Otpis prihvata nedostajuću alokaciju. Preporučen redosled: prvo otpisati kasno vraćene stavke u Lief/Rem, zatim uskladiti preostale stavke u oba prozora (npr. ista količina, drugi broj izdanja).

## Reklamacija

Označavanje: **Desni klik** → **Označi stavke za reklamaciju**. Uklanjanje: **Ukloni stavke iz reklamacije**. Zatim **Održavanje podataka** → **EH2000** → **Računi** → **Štampaj reklamaciju EH2000 RE**: izaberite poslovnicu, datum reklamacije od/do, veleprodavca, **OK**. Štampajte izveštaj ili **Eksportuj** za e-mail veleprodavcu.

## Snimci ekrana

![Evidentiraj račune](/img/docs/zeitungen-rechnungskontrolle-zeitung-1.png)

![EH2000 ReKtrl Lie/Rem](/img/docs/zeitungen-rechnungskontrolle-zeitung-2.png)

![EH2000 ReKtrl RE/GS](/img/docs/zeitungen-rechnungskontrolle-zeitung-3.png)

![Otpis stavki](/img/docs/zeitungen-rechnungskontrolle-zeitung-4.png)

![Označi za reklamaciju](/img/docs/zeitungen-rechnungskontrolle-zeitung-5.png)

![Štampaj izveštaj reklamacije](/img/docs/zeitungen-rechnungskontrolle-zeitung-6.png)

![Eksport veleprodavcu](/img/docs/zeitungen-rechnungskontrolle-zeitung-7.png)

![Pregled reklamacije](/img/docs/zeitungen-rechnungskontrolle-zeitung-8.png)

## Povezane teme

- [Preuzimanje otpremnica novina](/docs/zeitungen/zeitungs-lieferscheine-uebernehmen)
- [Ponovne narudžbe novina](/docs/zeitungen/zeitungs-nachbestellungen)
- [Unos razlika u isporuci](/docs/zeitungen/lieferdifferenzen-erfassen)
