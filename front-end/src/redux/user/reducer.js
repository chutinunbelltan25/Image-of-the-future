import { userType } from './type'
import { categoryType } from './type'
import { keywordType } from './type'
import { mediaApproveType } from './type'
import { mediaRejectType } from './type'
const INTIAL_STATE = {
    picInProgress : [],
    mediaApprove : [],
    mediaReject : [],
    cate_List: [],
    key_List: []
};

const userReducer = (state=INTIAL_STATE, action) => {
    switch(action.type){

        case(userType.SET_PIC_INPROGRESS):
        console.log(action)
        return {
            ...state,
            picInProgress : action.payload.data
        }
        
        
        default: 
            return state
    }
};
const cateReducer = (state=INTIAL_STATE, action) => {
    switch(action.type){

        case(categoryType.SET_INPROGRESS_CATE):
        console.log(action)
        return {
            ...state,
            cate_List : action.payload.data
        }
        
        
        default: 
            return state
    }
};
const keyReducer = (state=INTIAL_STATE, action) => {
    switch(action.type){

        case(keywordType.SET_INPROGRESS_KEY):
        console.log(action)
        return {
            ...state,
            key_List : action.payload.data
        }
        
        
        default: 
            return state
    }
};

const mediaApproveReducer = (state=INTIAL_STATE, action) => {
    switch(action.type){

        case(mediaApproveType.SET_APPROVE_MEDIA):
        console.log(action)
        return {
            ...state,
            mediaApprove : action.payload.data
        }
        
        
        default: 
            return state
    }
};

const mediaRejectReducer = (state=INTIAL_STATE, action) => {
    switch(action.type){

        case(mediaRejectType.SET_REJECT_MEDIA):
        console.log(action)
        return {
            ...state,
            mediaReject : action.payload.data
        }
        
        
        default: 
            return state
    }
};

export {userReducer,cateReducer,keyReducer,mediaRejectReducer,mediaApproveReducer}