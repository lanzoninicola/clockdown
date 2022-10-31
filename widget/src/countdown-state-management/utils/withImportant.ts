/** add to CSS prop value the !important clause */
export default function withImportant(value: string): string {
  return `${value} !important`;
}
