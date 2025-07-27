/**
 * Funkcja do automatycznego dodawania niełamliwych spacji przed śerotkami
 * Dodaje Unicode non-breaking space przed pojedynczymi literami
 */
export function fixOrphans(text: string): string {
  if (!text) return text;

  let result = text;

  // Podstawowe śerotki - pojedyncze litery
  result = result.replace(/\s([aiouwzAIOUWZ])(?=\s)/g, '\u00A0$1');

  // Krótkie słowa i spójniki
  const shortWords = [
    'na',
    'do',
    'od',
    'po',
    'za',
    'we',
    'ze',
    'co',
    'to',
    'że',
    'by',
    'aby',
    'gdy',
    'jak',
    'czy',
    'ale',
    'lub',
    'oraz',
  ];
  shortWords.forEach(word => {
    const regex = new RegExp(`\\s(${word})(?=\\s)`, 'gi');
    result = result.replace(regex, `\u00A0$1`);
  });

  // Specjalny przypadek dla końca tekstu
  result = result.replace(/\s([aiouwzAIOUWZ])$/gi, '\u00A0$1');

  return result;
}

/**
 * Funkcja do przetwarzania całego tekstu HTML z niełamliwymi spacjami
 */
export function processTextWithOrphans(html: string): string {
  if (!html) return html;

  // Przetwarzaj tylko zawartość tekstową, nie tagi HTML
  return html.replace(/>([^<]+)</g, (match, text) => {
    const processedText = fixOrphans(text);
    return `>${processedText}<`;
  });
}
