import { combineReducers } from 'redux';

import {userReducer,cateReducer,keyReducer,mediaApproveReducer,mediaRejectReducer} from './user/reducer'


const rootReducer = combineReducers({
    user: userReducer,
    cate: cateReducer,
    keyword: keyReducer,
    mediaApprove: mediaApproveReducer,
    mediaReject: mediaRejectReducer
});



export default rootReducer;