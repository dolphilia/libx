export const SAFE_CONTENT_SEGMENT_PATTERN: RegExp;
export function suggestSafeContentSegment(value: unknown): string;
export function getContentSegmentError(value: unknown, label?: string): string | null;
