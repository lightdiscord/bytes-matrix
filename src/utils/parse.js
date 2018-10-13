import { bit } from './format';

export const parseLine = line => Number.parseInt(line.map(bit).join(''), 2);
export const parseLines = lines => lines.map(parseLine);
