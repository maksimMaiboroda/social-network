export interface Photos {
    small: string | null
    large: string | null
}

export interface Post {
    id: number
    message: string
    likesCount: number
}

// export interface Dialog {
//     urlD     : number 
//     userAva  : string
//     userName : string
// }

// export interface Message {
//     id          : number 
//     messageText : string
// }

export interface Contacts {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export interface Profile {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: Contacts
    photos: Photos | null
}

export interface UserType {
    id: number
    name: string
    status: string
    photos: Photos
    followed: boolean
}

export interface LoginType {
    email: string
    password: string
    rememberMe: boolean
    captcha: any
}

interface UserResponse {
    name: string
    id: number
    photos: Photos
    status: string,
    followed: boolean
}

export enum ResultCodes {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

export type ResponseType<D = {}> = {
    data: D,
    messages: Array<string>,
    resultCode: ResultCodes
}
export interface UsersResponseType {
    items: Array<UserResponse>
    totalCount: number,
    error: string
}

export interface StatusResponseType {
    data: {}
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: ResultCodes
}

export interface MeType {
    id: number
    email: string
    login: string
}

export interface AuthLogin {
    userId: string
}
export interface SubmitLoginType {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

export type GetCaptchaUrlResponseType = {
    url: string
}