import React, { Component } from 'react'
import './salesform.css';
import { connect } from 'react-redux';
import {tableClear} from '../../actions/index';

import PouchDB from 'pouchdb';

var localSalesDB = new PouchDB('sales');
var remoteSalesDB = new PouchDB('http://localhost:5984/sales');


class FinalizeSale extends Component {
  
  finalizeSale=()=>{
    console.log("we are inserting data:");
    console.log(this.props.tableItem);
    let items=this.props.tableItem;
    
    var today = new Date();
    const time= today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second:'numeric', hour12: true });

    var date= today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    var datetime = date +' '+ time;

    let id ="pos"+ time +today.getFullYear()+today.getMonth()+ Math.floor(Math.random()*10);

    //the following code is also in ItemTable
    var total =this.props.tableItem.reduce((red,i)=>
							(red+ (((i.quantity)*(i.sellingPrice))-((i.discountPercent/100)*(i.quantity)*(i.sellingPrice)))),0).toFixed(2);
    //thats it
    				
    const toInsert={
      _id:id,
      items:items,
       total:total,
       salesperson:"subash",
       date:datetime
    }
    console.log(toInsert);
    localSalesDB.put(toInsert).then((response) =>{
      console.log("Successfull insert");
       this.props.tableClear();
      // using it is bad is it ? alert("Transaction Successful");
    }).catch(function (err) {
      console.log(err);
    });;
    //syncing is for dev
    localSalesDB.sync(remoteSalesDB);


  }

  render() {
    
    return (
      <div>
        <button className = "btn btn-primary" id ="finalize-btn" onClick={this.finalizeSale}>FINALIZE THE SALE</button>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
    return {
      tableItem:state.tableItem
    }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    //InsertSaleData:()=>dispatch(InsertSaleData(data))
    tableClear:()=>dispatch(tableClear())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(FinalizeSale)