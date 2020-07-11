export interface PullRequestInfo {
  additions: number;
  changes: number;
  deletions: number;
  status: string; // TODO: Change to enum
  filename: string;
}
