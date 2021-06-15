import {photosType, profileType} from "../type/type";
import {instance, ResponseDataType} from "./API";

export type ItemsType = {
    name: string
    id: number
    uniqueUrlName: null | string,
    photos: {
        small: null | any
        large: null | any
    }
    status: null | string
    followed: boolean
}
export type UpdateStatusType = {
    resultCode: number
    messages: Array<string>,
    data: object
}

export type SavePhotoResponseDataType={photos:photosType}

export const profileAPI = {

    getProfile(userId: number | null) {
        return instance.get<profileType>(`profile/` + userId).then(res => res.data)
    }
    ,
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId).then(res => res.data)
    }
    ,
    updateStatus(status: string) {
        return instance.put<UpdateStatusType>(`profile/status`, {status: status}).then(res => res.data)
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put <ResponseDataType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res=>res.data);
    },
    saveProfile(profile: profileType) {
        return instance.put<ResponseDataType>(`profile`, profile).then(res => res.data);

    }
}