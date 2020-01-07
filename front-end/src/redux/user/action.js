import { userType } from './type'
import { categoryType } from './type'
import { keywordType } from './type'
import { mediaApproveType } from './type'
import { mediaRejectType } from './type'


export const setPicInProgess = (data) => ({
    type: userType.SET_PIC_INPROGRESS ,
    payload: data
})

export const setPicInProgess_cate = (data) => ({
    type: categoryType.SET_INPROGRESS_CATE ,
    payload: data
})

export const setPicInProgess_key = (data) => ({
    type: keywordType.SET_INPROGRESS_KEY ,
    payload: data
})
export const setPicApprove_media = (data) => ({
    type: mediaApproveType.SET_APPROVE_MEDIA ,
    payload: data
})
export const setPicReject_media = (data) => ({
    type: mediaRejectType.SET_REJECT_MEDIA ,
    payload: data
})