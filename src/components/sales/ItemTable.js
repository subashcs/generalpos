import React, { Component } from 'react';
import {connect} from 'react-redux';

 class ItemTable extends Component {
	constructor() {
		super();
		this.state = {

		}
	}
	componentDidMount(){
	}

	render() {
		console.log('data in itemTable' ,this.props.tableItem)
		
		
		// console.log('fasdf',this.props.quantity)
		return (
			<div>
				<table className="table-striped" style={{width:'95%',margin:'20px'}}>
					<thead>
						<tr>
							<th>Item No</th>
							<th>Item Name</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Discount %</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{this.props.tableItem.map((mapp,i)=>
								<tr key ={i}>
								<td>{i+1}</td>
								<td>{mapp.name}</td>	
								<td>{mapp.sellingPrice}</td>
								<td>{mapp.quantity}</td>
								<td>{mapp.discountPercent}</td>
								<td>{((mapp.quantity)*(mapp.sellingPrice)-((mapp.discountPercent/100)*(mapp.quantity)*(mapp.sellingPrice))).toFixed(2)}</td>
								</tr>
								)}
								
					
						<tr style={{ fontWeight: 'bold', fontSize: '30px' }}>
							<td colSpan={5}>Total</td>
							<td>{
							//see array reduce method for reference
							
							this.props.tableItem.reduce((red,i)=>
							(red+ (((i.quantity)*(i.sellingPrice))-((i.discountPercent/100)*(i.quantity)*(i.sellingPrice)))),0).toFixed(2)}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		tableItem : state.tableItem,
		quantity : state.quantity,
	};
};



export default connect(mapStateToProps,null)(ItemTable);