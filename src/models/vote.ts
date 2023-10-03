export interface Vote {
  SECOND_ANSWER: string;
  SECOND_RATIO: number;
  CHK: 'first' | 'second' | 'none'
  VOTE_ID: number;
  TOTAL_ANSWER_COUNT: number;
  USER_ID: number;
  CONTENT: string;
  FIRST_RATIO: number;
  FIRST_ANSWER: string;
}
