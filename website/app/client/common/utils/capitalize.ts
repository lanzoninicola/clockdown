export default function capitalize(value: string): string {
  return Object.values(String(value))
    .map((char, i) => (i === 0 ? char.toUpperCase() : char))
    .join("");
}
