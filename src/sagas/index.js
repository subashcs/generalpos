import {takeEvery} from 'redux-saga/effects';
import {USER_LOGIN,USER_LOGOUT,USER_LOGIN_SUCCESS,USER_LOGIN_FAILURE, GET_ITEM, EDIT_ITEM} from '../constants/types';
import {userLogin} from './auth/index';
import {getItem, editItem} from './sales/index';

export default function* rootsaga(){
    yield takeEvery(USER_LOGIN,userLogin);
    yield takeEvery(GET_ITEM,getItem);
    yield takeEvery(EDIT_ITEM,editItem);
}