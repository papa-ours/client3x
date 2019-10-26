import { Choice } from './choice';

export interface Turn {
  blocking: string;
  picking: string;
  choices: Choice[];
  numberOfBlocks: number;
}
