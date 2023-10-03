import { http } from "utils/http";

export const signIn = ({id, password}: {id: string; password: string}) => {
   return  http.post<void>('/login', {id, password})
}