export function getOverview(content: string): string | null {
  const overviewRegex = /##\s*概要\s*\n([\s\S]*?)(?:\n##|$)/;
  const match = content.match(overviewRegex);
  return match ? match[1].trim() : null;
}
