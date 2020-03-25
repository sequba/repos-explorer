import { UserResponse } from './user-response';

export interface RepoResponse {
  id: number;
  name: string;
  owner: UserResponse;
  fork: boolean;
  branches_url: string;
  /// and more
}
