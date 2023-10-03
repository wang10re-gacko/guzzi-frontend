import { Pagination } from 'models/pagination';
import { Vote } from 'models/vote';
import { http } from 'utils/http';

interface Response extends Pagination {
  voteList: Vote[];
}

export const getVoteList = async ({ page }: { page: number }) => {
    return http.get<Response>('/votes', { params: { page, size: 20 } });
};
