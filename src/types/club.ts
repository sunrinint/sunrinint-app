import { Division } from './division';

export interface Club {
  name: string;
  logo: string;
  logo_dark?: string;
  displayName: string;
  room: string;
  division: Division;
  description: string;
  homepage?: string;
  instagram?: string;
  facebook?: string;
}
