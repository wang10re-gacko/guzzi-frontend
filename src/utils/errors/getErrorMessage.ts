import { isAxiosError } from "axios"

export const getErrorMessage = (error: unknown, fallback: string = '요청을 처리할 수 없습니다') => {
    if (!isAxiosError(error)) {
        return fallback;
    }

    return error.response?.data?.statusMessage ?? fallback;
}