import { CommitResponse } from './commit-response';

export interface BranchResponse {
  name: string;
  commit: CommitResponse;
  protected: boolean;
}
