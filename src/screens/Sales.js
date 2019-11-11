import React, { Component } from 'react';
import SaleForm from '../components/sales/SaleForm';
import ItemTable from '../components/sales/ItemTable';
import Cards from '../components/sales/Cards';
import FinalizeSale from '../components/sales/FinalizeSale';
import { relative } from 'path';

export default function Sales() {
	
		return (
			<div >


				<SaleForm />

				<ItemTable />

				<Cards />
					
				<FinalizeSale />
			</div>
		);
	
}
