import { call, put } from 'redux-saga/effects';
import { USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS } from '../../constants/types';

const electron = window.require("electron");

const {ipcRenderer} = electron;

export function* userLogin(action) {
	
	yield put({ type: USER_LOGIN_SUCCESS, payload: action.payload.username });
	ipcRenderer.send('open:dashboard');
}

export function* userLogout() {
	yield;
}
