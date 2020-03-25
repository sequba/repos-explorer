import { UserResponse } from './user-response';

export interface RepoResponse {
  id: number;
  name: string;
  full_name: string;
  owner: UserResponse;
  fork: boolean;
  // and more
}
