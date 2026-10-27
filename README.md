# Plugins For Live — struktura strony

- `index.html` — angielska strona główna.
- `pl/` — polska wersja strony głównej.
- `pages/` — podstrony informacyjne i prawne.
- `products/` — samodzielne aplikacje internetowe, każda w osobnym katalogu.
- `assets/images/branding/` — logotypy i obrazy marki.
- `assets/images/products/` — ikony i zrzuty ekranu pogrupowane według produktu.
- `assets/images/social/` — grafiki używane w mediach społecznościowych i metadanych Open Graph.
- `experiments/` — prototypy i materiały niezwiązane bezpośrednio z główną stroną.
- `CNAME`, `robots.txt` — pliki konfiguracyjne hostingu i wyszukiwarek; powinny pozostać w katalogu głównym.
- `publisher` — publiczna informacja o wydawcy bez rozszerzenia; pozostawiona w katalogu głównym ze względu na możliwy istniejący adres URL.

Przy dodawaniu nowego produktu utwórz dla niego osobny katalog w `products/` oraz odpowiadający mu katalog obrazów w `assets/images/products/`.

## SEO i publikacja treści

- `guides/` i `pl/guides/` zawierają praktyczne poradniki powiązane ze stronami produktów.
- Nowe publiczne podstrony powinny mieć własny tytuł, opis, jeden nagłówek H1, adres canonical i wzajemne odnośniki hreflang dla dostępnych tłumaczeń.
- Dodawaj publiczne adresy do `sitemap.xml`; `lastmod` zmieniaj tylko po rzeczywistej aktualizacji danej strony.
- Kopie w `test/` oraz prototypy w `experiments/` muszą zachować `<meta name="robots" content="noindex, follow">`, również po kopiowaniu plików produkcyjnych. Nie blokuj ich w głównym `robots.txt`, aby wyszukiwarki mogły odczytać `noindex`.
- Dane JSON-LD muszą odpowiadać widocznym funkcjom i cenom. Nie dodawaj niepotwierdzonych ocen, opinii ani ofert.
