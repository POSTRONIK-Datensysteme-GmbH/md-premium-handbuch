# XMPS rad na kasi

Pregled i uputstva za rad na XMPS kasi. Svi koraci su opisani u ovom priručniku.

## Pregled

| Tema | Kratak opis |
|------|-------------|
| [Prijava / Odjava](#prijava--odjava) | Korišćenje kase kao blagajnik |
| [Množenje u prodaji](#množenje-u-prodaji) | Više istih artikala odjednom |
| [Ručni unos (PLU)](#ručni-unos-plu) | Unos PLU ili EAN |
| [Storno](#storno) | Stornirati artikal (samo poslednji) |
| [Prekid računa](#prekid-računa) | Prekinuti celu transakciju |
| [Uplata / Isplata](#uplata--isplata) | npr. pouzeće |
| [Otvaranje ladice / Bez prodaje](#otvaranje-ladice--bez-prodaje) | Otvoriti ladicu bez unosa |
| [Vraćanje mreže kasa](#vraćanje-mreže-kasa) | Posle mrežnog problema |
| [Povrati](#povrati) | Registrovati povrat |
| [Popust (iznos)](#popust-iznos) | Popust po iznosu |
| [Popust (%)](#popust-) | Popust u procentima |
| [Parkiranje kupca](#parkiranje-kupca) | Pauzirati, uslužiti drugog |
| [Kreditna prodaja](#kreditna-prodaja-sa-broj-em-kupca) | Prodaja na kredit kupca |
| [Uplate kupaca (AKONTO)](#uplate-kupaca-akonto) | Registrovati uplatu na račun |
| [Račun kupca + / –](#račun-kupca--račun-kupca--) | Promena salda bez gotovine |

---

## Prijava / Odjava

Pre nego što blagajnik može da radi na kasi, mora da se **prijavi**. Kasa je tada dodeljena njegovom nalogu; sve transakcije mu se pripisuju. Na kraju smene blagajnik se **odjavi**.

**Kako se prijaviti ili odjaviti:**

1. Na kasi otvoriti prijavu (prema konfiguraciji: broj blagajnika ili korisnik).
2. Za **odjavu** izabrati funkciju odjave – kasa je ponovo u režimu prijave.

![Prijava Odjava](/img/docs/kassa/anmelden-abmelden.png)

---

## Množenje u prodaji

Kod **više istih artikala** (npr. 5× isto piće) možete uneti **količinu** pre registracije i artikal uneti samo jednom – kasa knjiži unetu količinu. Prvo količina, zatim taster **X/Datum**. Artikal se može **skenirati**, uneti preko **PLU** ili **grupe proizvoda**. Jednom skeniran ili pozvan preko PLU, ponavlja se pri svakom sledećem pritisku **PLU**.

**Kako registrovati više istih artikala:**

1. Uneti **količinu** (npr. 5).
2. Pritisnuti **"X"** (ili **X/Datum**).
3. **Skenirati artikal** ili uneti **PLU/EAN** – artikal se dodaje sa unetom količinom.

---

## Ručni unos (PLU)

Artikli koji se ne mogu skenirati (npr. bez barkoda) unose se preko **PLU** ili **EAN broja**. Broj se unosi preko tastature; taster PLU/EAN potvrđuje unos.

**Kako ručno uneti artikal:**

1. Uneti **PLU** ili **EAN** preko tastature.
2. Pritisnuti **"PLU"** ili **"EAN"** – artikal se dodaje u transakciju.

---

## Storno

Tasterom **Storno** možete ukloniti **već unet artikal** iz transakcije. Artikal za storno mora biti **poslednji** unet: pritisnite **Storno** i ponovo unesite artikal (kao storno) – oduzima se. Tako možete poništiti npr. dvostruko skeniran ili pogrešan artikal.

:::caution
Storno važi **samo za poslednji** uneti artikal. Ako je artikal ranije u transakciji, možda morate prekinuti celu transakciju (Prekid računa) i početi iznova.
:::

**Kako stornirati artikal:**

1. Proveriti da je **artikal za storno** **poslednji** u transakciji.
2. Pritisnuti **"Storno"**.
3. Ponovo **skenirati** **artikal** ili uneti PLU – artikal je storniran.

---

## Prekid računa

Taster **Prekid** **u bilo kom trenutku** može prekinuti tekuću transakciju. Svi uneti artikli se tretiraju kao stornirani; svi zbiri se brišu. **Prekid** prekida i rad u REG ili POVRAT (npr. prebrojavanje, odliv, deklaracija početnog stanja).

:::tip
Kad je u transakciji **više grešaka**, često je najlakše prekinuti celu transakciju i početi iznova.
:::

**Kako prekinuti transakciju:**

1. Pritisnuti **"Prekid"** – transakcija je obrisana; možete početi iznova.

---

## Uplata / Isplata

**Isplata:** npr. pri preuzimanju pouzećem – iznos se vadi iz kase i knjiži kao isplata. **Uplata:** kad se novac stavi u kasu (npr. dopuna kusura), knjiži se kao uplata. Postupak je isti; koristi se samo taster "Uplata".

**Kako knjiziti uplatu ili isplatu:**

1. Otići na stranicu **"FUNKTION"**.
2. Uneti **iznos** (stvarno isplaćen ili uplaćen).
3. Pritisnuti **"Isplata"** ili **"Uplata"** – transakcija je knjižena.

---

## Otvaranje ladice / Bez prodaje

Ako želite da **otvorite ladicu** **bez** registracije prodaje (npr. za kusur), koristite ovu funkciju. Ne registruje se prodaja – samo se otvara latica.

**Kako otvoriti ladicu bez prodaje:**

1. Pritisnuti **"Lade auf / Kein Verkauf"** (otvori ladicu / bez prodaje) – latica se otvara.

---

## Vraćanje mreže kasa

Kase u **mreži** komuniciraju tokom rada. Ako jedna ili više kasa nisu dostupne (npr. mrežni problem), pojavi se greška i veza se prekine – kase mogu dalje da rade same. **Posle** otklanjanja kvara kase se ponovo povežu. Za to služi **"Kassenverbund wiederherstellen"** (vraćanje mreže kasa).

**Kako vratiti mrežu kasa:**

1. Staviti kasu u režim **"X"**.
2. Uneti **4301**.
3. Pritisnuti **"Zwischensumme"** (međuzbir) – kasa štampa izveštaj o svim kasama u mreži.
4. Vratiti kasu u režim **"REG 1"** – mreža je vraćena.

---

## Povrati

Kad je **račun već zatvoren**, artikli su skinuti sa zaliha. Ako kupac **vrati** takav artikal, zaliha i zbirovi moraju da se isprave – za to služi **Retour** (povrat). Povrat je i **jedini način** da se isprave greške primećene **posle** zatvaranja (npr. pogrešna cena, dvostruko unet artikal).

**Kako knjiziti povrat:**

1. Pritisnuti **"Retour"** – kasa je u režimu povrata.
2. **Skenirati artikal** ili uneti **EAN** preko tastature.
3. Zatvoriti sa **"Bar"** (gotovina) – povrat je knjižen; zaliha i zbirovi su ažurirani.

![Povrati](/img/docs/kassa/artikel-retouren.png)

---

## Popust (iznos)

**Popust (iznos)** je **odbitak u iznosu** od cene – za jedan artikal ili **celu** transakciju. Unosite **iznos** za koji se smanjuje (ne procenat). Posle artikla popust važi samo za taj artikal; posle **Međuzbira** za celu transakciju.

**Kako dati popust (iznos):**

1. **Skenirati artikal** ili uneti **PLU/EAN** (ili prvo **Međuzbir** ako popust važi za celu transakciju).
2. Uneti **iznos popusta** (npr. 2,00).
3. Pritisnuti **"Nachlass Betrag"** (popust iznos) – odbitak je knjižen.

![Popust iznos](/img/docs/kassa/nachlass-betrag.png)

---

## Popust (%)

**Popust (%)** je **procentualni odbitak** od cene – za jedan artikal ili celu transakciju. Unosite **procenat** (npr. 10 za 10%). Taster Popust može imati **fiksni procenat**; ako unesete drugi, zamenjuje ga.

**Kako dati popust (%):**

1. **Skenirati artikal** ili uneti **PLU/EAN** (ili **Međuzbir** ako važi za celu transakciju).
2. Uneti **popust u %** (npr. 5 ili 10).
3. Pritisnuti **"Rabatt"** (popust) – procentualni odbitak je knjižen.

![Popust %](/img/docs/kassa/rabatt.png)

---

## Parkiranje kupca

Ako kupac želi da **donese još jedan artikal** tokom prodaje (npr. iz prodavnice), možete ga **"parkirati"**: tekuća transakcija se pauzira i sačuva. Možete **uslužiti drugog kupca**. Zatim ponovo pozovete parkiranu transakciju i nastavite je.

**Kako parkirati kupca:**

1. Pritisnuti **"Kunde parken"** (parkiraj kupca) – transakcija je parkirana; možete početi novu.
2. Za **nastavak** parkirane transakcije: pritisnuti **"Kunde fortsetzen"** (nastavi kupca) – prethodna transakcija se ponovo prikaže.

![Parkiranje kupca](/img/docs/kassa/kunde-parken.png)

---

## Kreditna prodaja sa brojem kupca

XMPS može da vodi **salda kupaca** (kredit). Kod **kreditne prodaje** kupovina se ne plaća gotovinom već zadužuje **račun kupca**. Posle zatvaranja prodaje kasa čuva novi saldo kupca.

**Kako knjiziti kreditnu prodaju:**

1. Uneti **broj kupca**.
2. Pritisnuti **"Kunden"** (kupci) – kupac je izabran.
3. **Skenirati artikle** kao kod obične prodaje.
4. Pritisnuti **"Zwischensumme"** (međuzbir).
5. Pritisnuti **"Kredit"** – iznos se zadužuje na račun kupca; račun je zatvoren.

![Kreditna prodaja](/img/docs/kassa/krediteinkaeufe.png)

---

## Uplate kupaca (AKONTO)

**Akonto** služi za knjiženje **uplata kupca** koje smanjuju **dugovan saldo** (npr. kupac plaća račun ili na rate). Kupac daje novac – vi ga knjizite kao uplatu na njegov račun; saldo se smanjuje.

**Kako knjiziti uplatu kupca (Akonto):**

1. Uneti **broj kupca**.
2. Pritisnuti **"Akonto"**.
3. Uneti **iznos** koji kupac uplaćuje.
4. Pritisnuti **"BAR"** (gotovina) – uplata je knjižena.
5. Pritisnuti **"ESC"** – izlazite iz Akonto postupka.

![Uplate AKONTO](/img/docs/kassa/kundeneinzahlungen-akonto.png)

---

## Račun kupca +, Račun kupca –

Ove funkcije menjaju **saldo kupca** **bez** pomeranja gotovine u kasi. Tipičan slučaj: kupac plaća **bankarskim prenosom** – vi knjizite uplatu sa **Račun kupca –**; saldo se smanjuje, latica ostaje neizmenjena.

- **Račun kupca –** smanjuje **dugovan saldo** kupca (kupac je platio).
- **Račun kupca +** povećava dugovan saldo (npr. dopuna, storno dobijene fakture).

**Kako knjiziti promenu salda bez gotovine:**

1. Uneti **broj kupca**.
2. Pritisnuti **"Kundenkonto –"** (ili **"Kundenkonto +"**).
3. Uneti **iznos**.
4. Pritisnuti **"Kundenkonto –"** (ili **"Kundenkonto +"**) **ponovo** – knjiženje je izvršeno.

![Račun kupca +/-](/img/docs/kassa/kundenkonto-plus-minus.png)

---

## Povezane teme

- [Zatvaranja (početno stanje, null račun, dnevno zatvaranje …)](/docs/kassa/abschluesse)
- [Kasa – Pregled](/docs/kassa/)
