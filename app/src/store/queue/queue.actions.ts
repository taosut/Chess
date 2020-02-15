import {
  JoinQueueAction,
  JoinQueueAi,
  LeaveQueueAction,
  QueueActionTypes,
  QueueGameFoundAction,
  QueueJoinedAction,
  QueueLeftAction,
} from './queue.types';

export const joinQueue = (): JoinQueueAction => ({
  type: QueueActionTypes.JOIN_QUEUE,
});

export const queueJoined = (timeJoined: string): QueueJoinedAction => ({
  type: QueueActionTypes.QUEUE_JOINED,
  payload: {
    timeJoined,
  },
});

export const queueGameFound = (gameId: string): QueueGameFoundAction => ({
  type: QueueActionTypes.QUEUE_GAME_FOUND,
  payload: {
    gameId,
  },
});

export const queueLeft = (): QueueLeftAction => ({
  type: QueueActionTypes.QUEUE_LEFT,
});

export const leaveQueue = (): LeaveQueueAction => ({
  type: QueueActionTypes.LEAVE_QUEUE,
});

export const joinQueueAi = (): JoinQueueAi => ({
  type: QueueActionTypes.JOIN_QUEUE_AI,
});
