import React, {Component} from 'react';
import { Route } from "react-router-dom";
import NavigationBar from '../nav/NavBar'
import SideBar from '../nav/SideBar'
import PaymentLanding from './payment/PaymentLanding'
import ProductLanding from './product/ProductLanding'
import OrderLanding from './order/OrderLanding'
import CustomerLanding from './customers/CustomerLanding'
import CustomerProfileCard from './customers/CustomerProfileCard'

export default class CustomerContainer extends Component {
 render() {
     return (
			<>
				<NavigationBar view="Customers" />
				<p>Customer Container</p>
				<SideBar view="Customers" />
                <CustomerProfileCard />

                <Route
					exact
					path="/customer-portal/customers"
					render={props => {
						return <CustomerLanding {...props} />;
					}}
				/>

				<Route
					exact
					path="/customer-portal/orders"
					render={props => {
						return <OrderLanding {...props} />;
					}}
				/>

				<Route
					exact
					path="/customer-portal/payments"
					render={props => {
						return <PaymentLanding {...props} />;
					}}
				/>

				<Route
					exact
					path="/customer-portal/products"
					render={props => {
						return <ProductLanding {...props} />;
					}}
				/>
                
			</>
		);
 }

}