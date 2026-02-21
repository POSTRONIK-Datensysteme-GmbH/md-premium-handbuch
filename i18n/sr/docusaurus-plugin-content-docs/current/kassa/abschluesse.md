# XMPS zatvaranja

Pregled i uputstva za zatvaranja XMPS kase. Svi koraci su opisani u ovom priručniku.

## Pregled

| Tema | Kratak opis |
|------|-------------|
| [Deklaracija početnog stanja](#deklaracija-početnog-stanja) | Na početku smene |
| [Odliv gotovine](#odliv-gotovine) | Deklarisati podizanja |
| [Prebrojavanje](#prebrojavanje) | Deklarisati sadržaj ladice |
| [Null račun](#null-račun) | npr. za kontrolu |
| [Godišnji račun](#godišnji-račun) | Prijava u FinanzOnline |
| [Dnevno zatvaranje bankomata](#dnevno-zatvaranje-bankomata) | Dnevno za B-K terminal |

---

## Deklaracija početnog stanja

**Deklaracija početnog stanja** (Wechselgeld) služi da se zabeleži **početno stanje** (kusur) kojim blagajnik počinje smenu. Tako je evidentirano koliko je novca bilo u ladici na početku. Deklaracija se obavlja **posle svake prijave** blagajnika.

**Kako deklarisati početno stanje:**

1. Otići na stranicu **"FUNKTION"**.
2. Uneti **iznos** – stvarno stanje u ladici (kusur).
3. Pritisnuti **Wechselgeld** (početno stanje).
4. Pritisnuti **Bar** (gotovina).
5. Pritisnuti **ESC** – deklaracija je završena.

---

## Odliv gotovine

**Odliv gotovine** (Geldabschöpfung) znači **deklarisanje podizanja** iz kase (npr. višak se nosi u banku). Podizanje se knjiži u kasi; kasa „očekuje“ manje novca u ladici. Svako podizanje treba deklarisati **neposredno posle** podizanja. Deklarisani iznosi se sabiraju do kraja dana.

**Kako deklarisati odliv:**

1. Otići na stranicu **"FUNKTION"**.
2. Uneti **iznos** – podignuti iznos.
3. Pritisnuti **Geldabschöpfung** (odliv).
4. Pritisnuti **Bar**.
5. Pritisnuti **ESC** – deklaracija je knjižena.

---

## Prebrojavanje

**Prebrojavanje** (Geldzählung) služi da se deklariše **trenutni sadržaj ladice** – iznos koji ste stvarno prebrojali. Prebrojavanje se može raditi **koliko puta god**; svaka nova deklaracija zamenjuje prethodnu. Kasa može da **uporedi**: koliko **bi trebalo** da bude u ladici – i koliko je **stvarno** prebrojano i deklarisano? Prebrojavanje je svrsishodno **na kraju smene** ili za **arheo**.

**Kako deklarisati prebrojavanje:**

1. Otići na stranicu **"FUNKTION"**.
2. Uneti **iznos** – prebrojani iznos u ladici.
3. Pritisnuti **Geldzählung** (prebrojavanje).
4. Pritisnuti **Bar**.
5. Pritisnuti **ESC** – deklaracija je sačuvana.

---

## Null račun

**Null račun** je račun **bez prodaje** – kasa štampa račun bez unetih prodaja. Može ga tražiti **poreska uprava** (npr. pri kontroli) ili služi kao dokaz da kasa u datom trenutku nije imala prodaju.

**Kako odštampati null račun:**

1. Izabrati stranicu **"FUNKT"**.
2. Pritisnuti **"X/Z"**.
3. Pritisnuti **"DA"** (potvrda za **režim X1**).
4. Uneti **9811** i potvrditi **[DA]** – null račun se štampa.

---

## Godišnji račun

**Godišnji račun** je zaključni račun za **celu godinu** (sve prodaje kase). Potreban je npr. za poresku prijavu ili prijavu u **FinanzOnline**. Godišnji račun se mora prijaviti u FinanzOnline.

**Kako odštampati godišnji račun:**

1. Izabrati stranicu **"FUNKT"**.
2. Pritisnuti **"X/Z"**.
3. Pritisnuti **"DA"** (potvrda za **režim X1**).
4. Uneti **9833** i potvrditi **[DA]** – godišnji račun se štampa.

---

## Dnevno zatvaranje bankomata

Kod korišćenja **funkcija kartica** (B-K terminal) **svakodnevno zatvaranje** terminala je **obavezno**. Tek uspešnim zatvaranjem se **transfer na račun trgovca** oslobađa – bez toga plaćanja karticama ostaju na čekanju. Prema konfiguraciji B-K terminala može biti potrebna **TES kartica** (v. uputstvo B-K terminala).

B-K zatvaranje se može raditi **nezavisno** od zatvaranja kase i ne mora biti u isto vreme. Mora se obaviti na **svakoj** kasi koja koristi B-K terminal. XMPS štampa **izveštaj o zatvaranju** – upoređuju se ukupan iznos B-K terminala i kasa.

**Kako obaviti dnevno zatvaranje bankomata:**

1. Otvoriti nivo **"Funktion"** (funkcija).
2. Pritisnuti **"X/Z"**.
3. Izabrati režim **"Z"** i potvrditi **"DA"**.
4. Uneti **9898** i potvrditi **"Zwischensumme"** (međuzbir) – zatvaranje se izvršava; izveštaj se štampa.

![Zatvaranje bankomata 1](/img/docs/kassa/bankomat-tagesabschluss-1.png)

![Zatvaranje bankomata 2](/img/docs/kassa/bankomat-tagesabschluss-2.png)

![Zatvaranje bankomata 3](/img/docs/kassa/bankomat-tagesabschluss-3.png)

---

## Povezane teme

- [Rad na kasi (prodaja, storno, povrati …)](/docs/kassa/bedienung)
- [Kasa – Pregled](/docs/kassa/)
