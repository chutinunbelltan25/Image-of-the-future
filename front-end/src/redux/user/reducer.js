import { userType } from './type'
import { categoryType } from './type'
import { keywordType } from './type'
import { mediaApproveType } from './type'
import { mediaRejectType } from './type'
import { homeMediaType } from './type'
import { adminForApproveMediaType, adminReasonType} from './type'
const INTIAL_STATE = {
    picInProgress : [],
    mediaApprove : [],
    mediaReject : [],
    cate_List: [],
    key_List: [],
    homeMedia: [],
    adminApproveMedia: [],
    adminReasonMedia: [],

};

const userReducer = (state=INTIAL_STATE, action) => {
    switch(action.type){
        case(userType.SET_PIC_INPROGRESS):
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
        return {
            ...state,
            mediaReject : action.payload.data
        }
        default: 
            return state
    }
};
const homeMediaReducer = (state=INTIAL_STATE, action) => {
    switch(action.type){
        case(homeMediaType.SET_HOME_MEDIA):
        return {
            ...state,
            homeMedia : action.payload.data
        }
        default: 
            return state
    }
};
const adminMediaReducer = (state=INTIAL_STATE, action) => {
    switch(action.type){

        case(adminForApproveMediaType.ADMIN_APPROVE_MEDIA):
        return {
            ...state,
            adminApproveMedia : action.payload.data
        }
        
        default: 
            return state
    }
};
const adminRessonReducer = (state=INTIAL_STATE, action) => {
    switch(action.type){

        case(adminReasonType.ADMIN_REASON_MEDIA):
        return {
            ...state,
            adminReasonMedia : action.payload.data
        }
        default: 
            return state
    }
};

export {userReducer,cateReducer,keyReducer,mediaRejectReducer,mediaApproveReducer,homeMediaReducer,adminMediaReducer,adminRessonReducer}