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
  videosInformation: VideosInformation;
}

export interface VideosInformation {
  lastVideoSeen: number;
  totalVideos: number;
}

export enum ViewStatus {
  SEEN = 'SEEN',
  NOT_SEEN = 'NOT_SEEN'
}
