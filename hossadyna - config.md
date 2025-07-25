### **Przewodnik Konfiguracyjny: Projekt Strony dla Psychoterapeuty**

Wersja: 1.0  
Data: 24 lipca 2025  
Ten dokument opisuje kroki niezbędne do skonfigurowania lokalnego środowiska deweloperskiego, repozytorium kodu oraz automatycznego wdrożenia strony na Cloudflare Pages.

### **Krok 1: Konfiguracja Repozytorium na GitHub**

1. **Utwórz nowe repozytorium:**  
   * Zaloguj się na swoje konto na [GitHub](https://github.com).  
   * Kliknij "New repository".  
   * **Nazwa repozytorium:** np. hossadyna.  
   * **Typ:** Zalecane jest repozytorium **Prywatne (Private)**.  
   * **Nie inicjuj** repozytorium plikiem README, .gitignore ani licencją. Zrobimy to lokalnie.  
2. **Zanotuj adres URL repozytorium:** Będzie on potrzebny w następnym kroku. Wygląda on tak: https://github.com/TWOJA\_NAZWA\_UŻYTKOWNIKA/hossadyna.git.

### **Krok 2: Inicjalizacja Projektu i Konfiguracja VS Code**

1. **Utwórz folder projektu na swoim komputerze:**  
   * Otwórz terminal lub wiersz poleceń.  
   * Przejdź do katalogu, w którym trzymasz projekty (np. cd Documents/Projects).  
   * Utwórz folder dla nowego projektu: mkdir strona-psychoterapeuta-hossadyna.  
   * Wejdź do nowego folderu: cd strona-psychoterapeuta-hossadyna.  
2. **Zainicjuj projekt (przykład dla Astro):**  
   * Uruchom komendę tworzenia nowego projektu Astro (lub Next.js, jeśli taki jest wybór):  
     npm create astro@latest

   * Postępuj zgodnie z instrukcjami instalatora. Wybierz opcję "Empty" lub "Blog" jako szablon startowy.  
3. **Otwórz projekt w VS Code:**  
   * W terminalu, będąc w folderze projektu, wpisz:  
     code .

4. **Zainicjuj Git i połącz z GitHub:**  
   * Otwórz terminal w VS Code (Ctrl \+ \`\` ).  
   * Zainicjuj lokalne repozytorium:  
     git init \-b main

   * Dodaj wszystkie pliki do pierwszego commita:  
     git add .

   * Stwórz pierwszy commit:  
     git commit \-m "Initial commit: Project setup"

   * Połącz lokalne repozytorium ze zdalnym na GitHub (użyj adresu URL z Kroku 1):  
     git remote add origin https://github.com/Przemmoo/hossadyna.git

   * Wypchnij zmiany na GitHub:  
     git push \-u origin main

5. **Zainstaluj rekomendowane rozszerzenia w VS Code:**  
   * Otwórz zakładkę "Extensions" (Ctrl+Shift+X).  
   * Wyszukaj i zainstaluj:  
     * Prettier \- Code formatter (dla automatycznego formatowania kodu).  
     * ESLint (do analizy kodu).  
     * Astro (jeśli używasz Astro, dla podświetlania składni).  
6. **Zainstaluj zależności i uruchom serwer deweloperski:**  
   * W terminalu VS Code uruchom:  
     npm install

   * Po zakończeniu instalacji, uruchom serwer deweloperski:  
     npm run dev

   * Strona powinna być dostępna lokalnie pod adresem http://localhost:4321 (lub innym podanym w terminalu).

### **Krok 3: Wdrożenie na Cloudflare Pages**

1. **Zaloguj się do panelu Cloudflare:**  
   * Przejdź na [dash.cloudflare.com](https://dash.cloudflare.com).  
2. **Przejdź do sekcji Pages:**  
   * W menu po lewej stronie wybierz Workers & Pages.  
   * Kliknij "Create application", a następnie wybierz zakładkę "Pages".  
   * Kliknij "Connect to Git".  
3. **Połącz z kontem GitHub:**  
   * Jeśli to pierwsze wdrożenie, Cloudflare poprosi o autoryzację dostępu do Twojego konta GitHub.  
   * Wybierz opcję "Only select repositories" i wskaż nowo utworzone repozytorium (strona-psychoterapeuta-hossadyna).  
4. **Skonfiguruj projekt:**  
   * Wybierz swoje repozytorium z listy i kliknij "Begin setup".  
   * **Production branch:** Upewnij się, że wybrany jest main.  
   * **Framework preset:** Wybierz z listy odpowiedni framework (np. Astro). Cloudflare powinien automatycznie uzupełnić poniższe pola.  
   * **Build command:** npm run build (lub astro build).  
   * **Build output directory:** dist.  
   * **Root directory:** Pozostaw puste, jeśli projekt jest w głównym katalogu repozytorium.  
5. **Zapisz i wdróż (Save and Deploy):**  
   * Kliknij przycisk "Save and Deploy".  
   * Cloudflare rozpocznie proces budowania i wdrażania strony. Po kilku minutach strona będzie dostępna pod technicznym adresem \*.pages.dev.  
6. **(Opcjonalnie) Podłącz własną domenę:**  
   * Po zakończeniu pierwszego wdrożenia, przejdź do zakładki "Custom domains" w ustawieniach projektu na Cloudflare.  
   * Postępuj zgodnie z instrukcjami, aby podłączyć swoją docelową domenę (np. magdalenahossadyna.pl).

Od teraz każdy push do gałęzi main na GitHub automatycznie uruchomi nowy proces budowania i wdrożenia na Cloudflare Pages.