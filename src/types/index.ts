export interface Photos {
    small : string | null
    large : string | null
}

export interface Post {
    id         : number
    message    : string
    likesCount : number
}

export interface Dialog {
    urlD     : number 
    userAva  : string
    userName : string
}

export interface Message {
    id          : number 
    messageText : string
}

export interface Contacts {
    github    : string
    vk        : string
    facebook  : string
    instagram : string
    twitter   : string
    website   : string
    youtube   : string
    mainLink  : string
}

export interface Profile {
    userId                    : number
    lookingForAJob            : boolean
    lookingForAJobDescription : string
    fullName                  : string
    contacts                  : Contacts
    photos                    : Photos | null
}

export interface UserType {
    id       : number
    name     : string
    status   : string
    photos   : Photos
    followed : boolean
}