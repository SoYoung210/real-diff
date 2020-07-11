export interface PullRequestData {
  additions: number;
  changes: number;
  deletions: number;
  status: string; // TODO: Change to enum
  filename: string;
}

export interface RealDiffData {
  additions: number;
  deletions: number;
}
