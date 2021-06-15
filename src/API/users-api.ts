import {instance, ResponseDataType} from "./API";
import { GetUsersType} from "../type/type";

export const UsersAPI = {

    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data)
    }
}
