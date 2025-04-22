export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';

  const filtered = [...set].filter(
    (str) => typeof str === 'string' && str.startsWith(startString),
  );

  return filtered
    .map((str) => str.slice(startString.length))
    .filter((str) => str.length > 0)
    .join('-');
}
