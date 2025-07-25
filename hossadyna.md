### **Dokument Projektowy: Strona Internetowa "One-Page" dla Psychoterapeuty**

Wersja: 1.5  
Data: 24 lipca 2025

### **1\. Wprowadzenie i Cel Projektu**

**Cel główny:** Stworzenie profesjonalnej, nowoczesnej i godnej zaufania strony internetowej typu "one-page" dla psychoterapeuty, Magdaleny Hossadyny. Strona ma pełnić funkcję wizytówki, informować o zakresie usług, ułatwiać umówienie wizyty przez zewnętrzny widget, budować zaufanie poprzez opinie oraz kreować wizerunek eksperta poprzez publikację artykułów.

**Grupa docelowa:** Potencjalni pacjenci poszukujący wsparcia psychoterapeutycznego, osoby w kryzysie, szukające informacji na tematy związane ze zdrowiem psychicznym.

**Kluczowe założenia:**

* **Prostota i przejrzystość:** Użytkownik musi z łatwością odnaleźć wszystkie kluczowe informacje.  
* **Zaufanie i profesjonalizm:** Design i treść muszą budować poczucie bezpieczeństwa i kompetencji.  
* **Łatwość zarządzania:** Klient musi mieć możliwość samodzielnej edycji treści i dodawania artykułów bez wiedzy technicznej.  
* **Nowoczesna technologia:** Strona będzie statyczna, co zapewni szybkość, bezpieczeństwo i niskie koszty utrzymania, hostowana na Cloudflare Pages.

### **2\. Analiza Logotypu i Identyfikacja Wizualna**

* **Styl:** Minimalistyczny, nowoczesny. Ikona mózgu z motywem roślinnym symbolizuje wzrost, zdrowie psychiczne i naturalne procesy leczenia.  
* **Kolory:**  
  * **Brudny róż / pudrowy róż (\#D9AFAF):** Kolor akcentujący.  
  * **Ciemny grafit / antracyt (\#4F4F4F):** Kolor tekstu.  
  * **Złamana biel / jasny szary (\#F5F5F5):** Kolor tła.  
  * **Szałwiowa zieleń (\#B2BBA4):** Kolor dodatkowy, do subtelnych elementów.

### **3\. Projekt Wyglądu i User Experience (UI/UX)**

#### **a) Paleta Kolorów i Typografia**

* **Kolory:** Jak w punkcie 2\.  
* **Czcionki:**  
  * Nagłówki: **Lato** (waga 400 lub 700\)  
  * Tekst: **Open Sans** (waga 400\)

#### **b) Układ Strony (Struktura One-Page)**

Kolejność sekcji została zoptymalizowana pod kątem ścieżki użytkownika (budowanie zaufania przed wezwaniem do działania).

1. **Nagłówek (Header):** Logo, menu nawigacyjne (O mnie | Oferta | Opinie | Artykuły | Kontakt), przyklejony do góry ekranu.  
2. **Sekcja "Hero" (Główna):** Zdjęcie, imię i nazwisko, tytuł, motto, przycisk CTA "Umów wizytę".  
3. **Sekcja "O mnie":** Opis terapeuty, podejście, wykształcenie.  
4. **Sekcja "Oferta":** Podział na terapię w gabinecie i online.  
5. **Sekcja "Opinie":** Wybrane opinie z portalu Znany Lekarz.  
6. **Sekcja "Umów wizytę" (Znany Lekarz):** Wbudowany widget do rezerwacji.  
7. **Sekcja "Artykuły":** Siatka z 3 najnowszymi artykułami, otwierane w oknie modalnym.  
8. **Sekcja "Kontakt":** Dane kontaktowe (telefon, e-mail, adres).  
9. **Stopka (Footer):** Logo, copyright, link do Polityki Prywatności i ustawień cookies.

#### **c) Responsywność (Mobile-First)**

Pełne dostosowanie do urządzeń mobilnych, z menu typu "hamburger" i układem jednokolumnowym.

### **4\. Wymagania Funkcjonalne i Techniczne**

#### **a) Panel Administracyjny (CMS)**

* **Rekomendacja:** **Decap CMS** (darmowy, oparty na Git, zintegrowany z GitHub).  
* **Edytowalne elementy:** Wszystkie treści tekstowe, zdjęcia w sekcjach, pełne zarządzanie artykułami oraz zarządzanie opiniami.

#### **b) Technologia i Hosting**

* **Frontend:** Generator stron statycznych (np. **Astro** lub **Next.js**).  
* **Kod źródłowy:** Repozytorium na **GitHub**.  
* **Hosting:** **Cloudflare Pages** (automatyczne wdrożenie po zmianach na GitHub).

### **5\. Wymagania Prawne (RODO)**

#### **a) Baner Cookie**

* **Wygląd:** Dyskretny, ale czytelny baner na dole strony.  
* **Funkcjonalność:** Przyciski "Zgadzam się", "Dostosuj" oraz link do "Polityki Prywatności".  
* **Ustawienia Cookies (w oknie modalnym):** Przełączniki do zgody na cookies: Niezbędne, Analityczne, Marketingowe/Zewnętrzne.

#### **b) Polityka Prywatności**

* Osobna podstrona lub modal linkowany ze stopki.  
* **Treść:** Informacje o administratorze danych, celach przetwarzania, odbiorcach danych (np. Znany Lekarz), prawach użytkownika i szczegółowy opis plików cookie.

### **6\. Wymagania SEO (Search Engine Optimization)**

**Cel:** Zapewnienie maksymalnej widoczności strony w organicznych (bezpłatnych) wynikach wyszukiwania dla zapytań związanych z psychoterapią w docelowej lokalizacji oraz online.

#### **a) Analiza Słów Kluczowych**

* **Główne słowa kluczowe:** psychoterapeuta \[Wieliczka, Kraków\], psychoterapia \[Wieliczka, Kraków\], dobry psychoterapeuta \[Wieliczka, Kraków\] (np. "psychoterapeuta Wieliczka").  
* **Słowa kluczowe long-tail (długi ogon):** psychoterapia poznawczo-behawioralna Wieliczka, Kraków, terapia online, pomoc psychologiczna lęk, leczenie depresji terapia.  
* **Słowa kluczowe brandowe:** magdalena hossadyna, gabinet hossadyna.

#### **b) Optymalizacja On-Page (w kodzie strony)**

* **Tytuł Strony (\<title\>):** Przykład: \<title\>Psychoterapeuta Wieliczka \- Magdalena Hossadyna\</title\>  
* **Meta Opis (\<meta name="description"\>):** Przykład: "Szukasz wsparcia? Magdalena Hossadyna \- certyfikowany psychoterapeuta w Wieliczce. Oferuję terapię poznawczo-behawioralną w gabinecie i online. Umów wizytę."  
* **Struktura Nagłówków (H1, H2, H3):** Jeden H1 na stronę, H2 dla sekcji, H3 dla podsekcji.  
* **Atrybuty alt dla Obrazków:** Każdy obrazek musi mieć opisowy atrybut alt.  
* **Dane Strukturalne (Schema.org):** Wdrożenie znacznika Physician lub LocalBusiness w formacie JSON-LD.

#### **c) Szybkość i Wydajność Strony**

Kluczowa jest optymalizacja obrazków (kompresja i odpowiedni format, np. WebP).

### **7\. Przykładowe Treści i Opis Sekcji (z uwzględnieniem SEO)**

#### **Sekcja "Hero"**

* **Nagłówek H1:** Magdalena Hossadyna \- Psychoterapeuta Wieliczka  
* **Podtytuł:** Terapia poznawczo-behawioralna i sesje online

#### **Sekcja "O mnie"**

* **Nagłówek H2:** O mnie \- poznajmy się bliżej  
* **Tekst:** W treści warto naturalnie wpleść frazy, np. "Jako certyfikowany **psychoterapeuta w Wieliczce**, moją misją jest...", "...prowadzę **psychoterapię poznawczo-behawioralną**...".

#### **Sekcja "Oferta"**

* **Nagłówek H2:** Jak mogę Ci pomóc?

#### **Sekcja "Opinie"**

* **Nagłówek H2:** Co mówią pacjenci  
* **Implementacja:** Ręcznie wybrane 2-3 opinie z portalu Znany Lekarz lub implementacja oficjalnego widgetu z opiniami, jeśli jest dostępny.

#### **Sekcja "Umów wizytę"**

* **Nagłówek H2:** Zarezerwuj termin wizyty  
* **Tekst wprowadzający:** "Poniżej znajdziesz mój kalendarz w portalu Znany Lekarz. Wybierz dogodny dla siebie termin i formę spotkania (online lub w gabinecie)."  
* **Kod do wdrożenia:** Poniższy kod należy umieścić w tej sekcji.  
  \<a id="zl-url" class="zl-url" href="https://www.znanylekarz.pl/magdalena-hossadyna/psycholog-psychoterapeuta/wieliczka" rel="nofollow" data-zlw-doctor="magdalena-hossadyna" data-zlw-type="big\_with\_calendar" data-zlw-opinion="false" data-zlw-hide-branding="true" data-zlw-saas-only="false" data-zlw-a11y-title="Widget umówienia wizyty lekarskiej"\>Magdalena Hossadyna \- ZnanyLekarz.pl\</a\>\<script\>\!function($\_x,\_s,id){var js,fjs=$\_x.getElementsByTagName(\_s)\[0\];if(\!$\_x.getElementById(id)){js \= $\_x.createElement(\_s);js.id \= id;js.src \= "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","zl-widget-s");\</script\>

#### **Sekcja "Artykuły"**

* **Nagłówek H2:** Baza wiedzy \- przeczytaj moje artykuły

#### **Sekcja "Kontakt"**

* **Nagłówek H2:** Kontakt

### **8\. Informacje dla Dewelopera (Praca w VS Code)**

* **Środowisko pracy:** Visual Studio Code.  
* **Rekomendowane rozszerzenia:** Prettier, ESLint, GitLens oraz wtyczki dla wybranego frameworka (Astro/Next.js).  
* **Struktura projektu:** Typowa dla wybranego generatora stron statycznych, z podziałem na komponenty, layouty i treści.