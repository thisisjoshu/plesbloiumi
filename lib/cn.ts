export type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | ClassValue[]
  | { [key: string]: unknown };

function walk(value: ClassValue, out: string[]) {
  if (!value && value !== 0) return;
  if (typeof value === "string" || typeof value === "number") {
    out.push(String(value));
    return;
  }
  if (Array.isArray(value)) {
    for (const v of value) walk(v, out);
    return;
  }
  if (typeof value === "object") {
    for (const key in value) {
      if (value[key]) out.push(key);
    }
  }
}

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  for (const i of inputs) walk(i, out);
  return out.join(" ");
}
