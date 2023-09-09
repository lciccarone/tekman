export interface Quarter {
  id: number;
  number: number;
  sessionInformation: SessionInformation;
}

export interface SessionInformation {
  sessions: Session[];
  current: number;
  total: number;
}

export interface Session {
  number: number;
  name: string;
  status: ViewStatus;
  isLastView: boolean;
}

export enum ViewStatus {
  SEEN,
  NOT_SEEN
}
