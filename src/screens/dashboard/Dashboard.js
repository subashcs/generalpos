import React from 'react';
import './Dashboard.css';
import Sales from '../Sales';
import {Link,Switch,Route} from 'react-router-dom';
import SalesHistory from '../../components/saleshistory';
import TodaysSales from '../../components/todayssales';
import SalesItems from '../../components/salesitems';

//setting up pouch db database locally
import PouchDB from 'pouchdb';

var localSalesDB = new PouchDB('sales');
var remoteSalesDB= new PouchDB('http://localhost:5984/sales');
var localItemsDB= new PouchDB('items');
var remoteItemsDB = new PouchDB('http://localhost:5984/items');


localItemsDB.info().then(function (info) {
        console.log(info);
      })

      
localSalesDB.info().then(function (info) {
  console.log(info);
})
remoteSalesDB.info().then(function (info){
  console.log(info);
})


//puting docs to database and replication
// var salesdoc1={
//       "_id":"1",
//       "items":{
//               "0":{
//                 "name":"Chicken",
//                 "quantity":"4",
//                 "sellingPrice":"300",
//               },
//               "1":{
//                 "name":"Pork",
//                 "quantity":"3",
//                 "sellingPrice":"250",
//               }

//       },
//       "total":"500",
//       "salesperson":"subash",
//       "date":"11/10/2019 11:17AM"
// }
// localSalesDB.put(salesdoc1);
// localSalesDB.replicate.to(remoteSalesDB);


//###removing data
//localSalesDB.remove("id","rev");
//localSalesDB.replicate.to(remoteSalesDB);


//use the following code for sync
    //  localItemsDB.sync(remoteItemsDB);
 /*      
  use this code to put a document in database  
      var doc1 = {
        "_id": "3",
        "name": "Mutton",
        "sellingPrice": 950,
        "quantity": 3,
        "discountPercent": 15
      };
      db.put(doc1);
      
   */

      /*
      use this code to remove pouchdb document
      db.get('mittens').then(function(doc) {
        return db.remove(doc);
      }).then(function (result) {
        // handle result
      }).catch(function (err) {
        console.log(err);
      });
      */

const Dashboard = () => {
    return (
        <div className="contentDashboard">
            
            <div className="navContainer">
                <ul>
                    <li>
                    <div className="title">Dashboard</div>
                    </li>
                    <li>
                          <Link to="/dashboard/makeasale" > Make a Sale</Link> 
                    </li>
                    <li>
                          <Link to="/dashboard/saleshistory"> Sales History</Link>  
                    </li>
                    <li>
                          <Link to="/dashboard/todayssales"> Todays Sale's</Link>  
                    </li>
                    <li>
                        <Link to="/dashboard/salesitems">Edit Sales Item</Link>
                    </li>
                    <li>
                            Log out
                    </li>
                </ul>
                

            </div>
            <div className="mainContainer">
                    <div className="content">
                    <Switch>
                        <Route path="/dashboard/makeasale">
                          <Sales />
                        </Route>
                        <Route path="/dashboard/saleshistory">
                         <SalesHistory />
                        </Route>
                        <Route path="/dashboard/todayssales">
                         <TodaysSales />
                        </Route>
                        <Route path="/dashboard/salesitems">
                            <SalesItems/>
                        </Route>
                    </Switch>
                    </div>
            </div>
        </div>
    );
};

export default Dashboard;