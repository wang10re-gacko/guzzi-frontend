import { http } from "utils/http";

export const signUp = ({id, password}: {id: string; password: string}) => {
   return  http.post<void>('/signup', {id, password})
}