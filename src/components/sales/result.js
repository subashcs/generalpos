import React from 'react';
import { connect } from 'react-redux';
import {selectItem,textRender} from '../../actions/index';



 class Result extends React.Component {
	constructor(){
        super();
        this.state ={
		}
		// this.handleChange = this.handleChange.bind(this);
	}
	
	 handleClick= async ()=>{
		  console.log(this.props.product.id);
		  const newArr = [...this.props.salesItem.message]
		  
	 	  let selectedItem = await newArr.filter((resp)=>{
			 return (	resp.id === this.props.product.id ); 
		})
		console.log(selectedItem);
		this.props.selectItem(selectedItem);
		 console.log(this.props.selectedItem);
		this.props.selectedItem.data.map((mapp)=> this.props.textRender(mapp.name))
		this.props.changeProduct();
	}
	//using async await only the reducer works fine and returns data otherwise returns empty why
   componentDidMount(){
   }
	render(){
	return (
		
				<li className="list-group-item">
					{
					/*<img
						className="img-circle media-object pull-left"
						alt=""
						src="https://www.ketoconnect.net/wp-content/uploads/2018/01/keto-chocolate-bar-broke.jpg"
						width="50"
						height="50"
					/>
					*/}

					<div className="media-body" style={{cursor:'pointer'}} onClick={this.handleClick}>
						<strong>{this.props.product.name}</strong>
                        <button  className = "btn btn-primary pull-right" style={{float:"right"}} >{this.props.product.sellingPrice}</button>
					</div>
				</li>
	);
}
};

const mapStateToProps = (state) => {
    return {
		salesItem : state.salesItem,
		selectedItem : state.selectedItem,
		textToRender : state.textToRender,
		
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
		selectItem : (data) => dispatch(selectItem(data)),
		textRender : (data) => dispatch(textRender(data)),
        }
}


export default connect(mapStateToProps,mapDispatchToProps)(Result);