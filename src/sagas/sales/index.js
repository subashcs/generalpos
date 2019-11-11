import { MEDEasy } from '../../constants/urls';
import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { GET_ITEM_SUCCESS,GET_ITEM } from '../../constants/types';
import PouchDB from 'pouchdb';

var localItemsDB = new PouchDB('items');

let data = []; 
export function* getItem() {
 
 localItemsDB.allDocs({include_docs: true}).then((docs)=> {
     console.log("Fetched Rows");
     console.dir(docs);
        data=[];
        docs.rows.map((item,key)=>{
          data.push({
            id:item.doc._id,
            rev:item.doc._rev,
            name:item.doc.name,
            discountPercent:item.doc.discountPercent,
            sellingPrice:item.doc.sellingPrice,
            availableQuantity:item.doc.availableQuantity
           
         });

       })


     
       
 }).catch((err)=>{
   console.log(err);
 })
   
  
    yield put({ type: GET_ITEM_SUCCESS, payload: data });
  

}

export function* editItem(action){
     
     const data =action.payload;
      localItemsDB.put(data).then((res)=>{
       
    }).catch((err)=>{
        console.log(err);
    })
      yield put({type:GET_ITEM,});


}
