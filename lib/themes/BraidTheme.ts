import type { BraidTheme as OldBraidTheme } from './makeBraidTheme';

export interface BraidTheme extends OldBraidTheme {
  nextTheme: string;
}
