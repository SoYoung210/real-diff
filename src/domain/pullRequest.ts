export interface PullRequestData {
  additions: number;
  changes: number;
  deletions: number;
  status: string; // TODO: Change to enum
  filename: string;
}

// FIXME: 타입 걍 하나로 합치기..
export interface RealDiffData {
  additions: number;
  deletions: number;
}

export const PULL_REQUEST_REGEX = new RegExp(/^https?:\/\/github\.com\/.*\/pull\/\d+/g)

export interface PathData {
  orgName: string
  repository: string
  prNumber: string
}
