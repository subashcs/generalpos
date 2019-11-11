import React , {useState,useEffect} from 'react';
import RenderTable from '../RenderTable';
import {connect} from 'react-redux';
import {getItem,editItem} from '../../actions/index'; 
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash,faSave} from '@fortawesome/free-solid-svg-icons'

import PouchDB from 'pouchdb';
var localItemsDB= new PouchDB('items');


 function SalesItems({getItem,editItem,fetchedentry}){

    //fetch data once
     useEffect(()=>{
         getItem();
     },[]);


     const  [data,setData]=useState([
        ]);
     const [itemid,setItemid]=useState("a");
     const [rev,setRev]=useState("a");
     const [name,setName]=useState("a");
     const [discountPercent,setDiscountPercent]=useState("a");
     const [sellingPrice,setSellingPrice]=useState("a");
     const [availableQuantity,setAvailableQuantity]=useState("a");
      
     
     useEffect(()=>{

            const fetchedfromapi = fetchedentry.message;
            
            if(fetchedfromapi){
                setData(fetchedfromapi);
            }
            console.log("Data in salesitems");
           
            if(data){
                console.log(data.length);
                
            }
           

            
    
            //data fetched but mismatching format
            
        })
     const setItemtoedit=(id,name,discountPercent,sellingPrice,availableQuantity,rev)=>{
         console.log(name);
            console.log("current rev");
            console.log(rev);
                setName(name);
                setItemid(id);
                setRev(rev);
                setDiscountPercent(discountPercent);
                setSellingPrice(sellingPrice);
                setAvailableQuantity(availableQuantity);
     }   
     
     const saveEdit=()=>{
         console.log(name);
        var doc ={
            name:name,
            discountPercent:discountPercent,
            sellingPrice:sellingPrice,
            availableQuantity:availableQuantity,
            _rev:rev,
            _id:itemid
        }

       editItem(doc);
       
     }
     const deleteItem=(id,rev)=>{
         
         localItemsDB.remove(id,rev, function(err) {
            if (err) {
               return console.log(err);
            } else {
                const index = data.findIndex(x => x.id=== id);

                if (index !== undefined) data.splice(index, 1);

               console.log("Document deleted successfully");
         }
        })
    }

     var toreturn= data.map((item)=>{
         if(itemid!=item.id){
            return(
            <tr key={item.id}>
                    
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.discountPercent}</td>
                <td>{item.sellingPrice}</td>
                <td>{item.availableQuantity}</td>
                <td>
                    <button type="button" onClick={()=>setItemtoedit(item.id,item.name,item.discountPercent,item.sellingPrice,item.availableQuantity,item.rev)}>
                    
                        <FontAwesomeIcon icon={faEdit} />    
                        
                    </button>
                    <button type="button" onClick={()=>{deleteItem(item.id,item.rev)}}>
                    <FontAwesomeIcon icon={faTrash} />    

                    </button>
                </td>
            </tr>
            );
         }
         else{
            return(
                <tr key={item.id}>
                <td>{item.id}</td>
                <td><input type="text" className="form-control" placeholder="Enter Item Name" value={name} name="name" onChange={e => setName(e.target.value)}/></td>
                <td><input type="text" className="form-control" placeholder="Enter Discount allowed" value={discountPercent} name="discountPercent" onChange={e => setDiscountPercent(e.target.value)}/></td>
                <td><input type="text" className="form-control" placeholder="Enter selling price per unit" value={sellingPrice} name="sellingPrice" onChange={e => setSellingPrice(e.target.value)}/></td>
                <td><input type="text" className="form-control" placeholder="Enter available quantity" value={availableQuantity} name="availableQuantity" onChange={e => setAvailableQuantity(e.target.value)}/></td>
                <td> <button type="button" className="btn btn-primary" onClick={()=>{saveEdit()}}>
                    Done  
                </button>
                </td>
            </tr>
            ) 
        }

     });
        
        

    return (
        <div>

        <div className="text-center ">

            <p className="h4 mb-4">Sales Items</p>

            <div className="container manage-overflow-x">
                <table className="table table-striped manage-overflow" border='0'>
                    <thead>
                        <tr>
                            
                            <th>
                                Id
                            </th>
                            <th>
                               Name 
                            </th>
                            <th>
                                Discount Percent
                            </th>
                            <th>
                                Selling Price
                            </th>
                            <th>
                                Available Quantity
                            </th>
                        </tr>
                    </thead>
                        <tbody>
                            
                                <tr>
                                    <td></td>
                                    <td><input type="text" className="form-control" placeholder="Enter Item Name" name="name"/></td>
                                    <td><input type="text" className="form-control" placeholder="Enter Discount allowed" name="discountPercent"/></td>
                                    <td><input type="text" className="form-control" placeholder="Enter selling price per unit" name="sellingPrice"/></td>
                                    <td><input type="text" className="form-control" placeholder="Enter available quantity" name="availableQuantity"/></td>
                                    <td><input type="submit" className="form-control" name="submit" value="Add" className="btn btn-primary"/></td>
                                </tr>
                            {toreturn}
                        </tbody>

                </table>
            </div>

        </div>
        </div>
    )
}

const mapStateToProps =(state)=>{
    return {
        fetchedentry:state.salesItem
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        editItem: (data)=> dispatch(editItem(data)),
        getItem:()=>dispatch(getItem())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SalesItems)

//add map dispatch here

