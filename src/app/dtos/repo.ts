import { Branch } from './branch';

export interface Repo {
  name: string;
  fullName: string;
  owner: string;
  isFork: boolean;
  branches?: Branch[];
}
