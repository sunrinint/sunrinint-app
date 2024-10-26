export type ClubType =
  | 'security'
  | 'software'
  | 'business'
  | 'design'
  | 'general'
  | 'autonomous';

interface Club {
  id: string;
  name: string;
  logo: string;
  logo_dark: string;
  displayName: string;
  room: string;
  department: ClubType;
  description: string;
  homepage: string;
  instagram: string;
  facebook: string;
  createdAt: string;
  updatedAt: string;
}

export default Club;
