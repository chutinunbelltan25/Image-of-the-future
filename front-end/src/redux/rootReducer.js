import { combineReducers } from 'redux';

import {userReducer,cateReducer,keyReducer,mediaApproveReducer,mediaRejectReducer, homeMediaReducer,adminMediaReducer} from './user/reducer'


const rootReducer = combineReducers({
    user: userReducer,
    cate: cateReducer,
    keyword: keyReducer,
    mediaApprove: mediaApproveReducer,
    mediaReject: mediaRejectReducer,
    homeMedia: homeMediaReducer,
    adminApproveMedia: adminMediaReducer,

});



export default rootReducer;