export interface QueueState {
  readonly queueUserCount: number;
  readonly timeJoined: string;
}

export enum QueueBaseActionTypes {
  JOIN_QUEUE = 'JOIN_QUEUE',
}

export enum QueueSubscriptionActionTypes {
  QUEUE_ERROR = 'QUEUE_ERROR',
  QUEUE_COUNT = 'QUEUE_COUNT',
  QUEUE_JOINED = 'QUEUE_JOINED',
  QUEUE_GAME_FOUND = 'QUEUE_GAME_FOUND',
}

export const QueueActionTypes = {
  ...QueueBaseActionTypes,
  ...QueueSubscriptionActionTypes,
};

export interface JoinQueueAction {
  type: typeof QueueActionTypes.JOIN_QUEUE;
}

export interface QueueErrorAction {
  type: typeof QueueActionTypes.QUEUE_ERROR;
  payload: {
    error: string;
  };
}

export interface QueueCountAction {
  type: typeof QueueActionTypes.QUEUE_COUNT;
  payload: {
    queueUserCount: number;
  };
}

export interface QueueJoinedAction {
  type: typeof QueueActionTypes.QUEUE_JOINED;
  payload: {
    timeJoined: string;
  };
}

export interface QueueGameFoundAction {
  type: typeof QueueActionTypes.QUEUE_GAME_FOUND;
  payload: {
    gameId: string;
  };
}

export type QueueActions =
  | JoinQueueAction
  | QueueErrorAction
  | QueueCountAction
  | QueueGameFoundAction
  | QueueJoinedAction;