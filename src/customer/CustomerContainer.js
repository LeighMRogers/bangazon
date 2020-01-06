import React, {Component} from 'react';
import { Route } from "react-router-dom";
import NavigationBar from '../nav/NavBar'
import SideBar from '../nav/SideBar'
import PaymentLanding from './payment/PaymentLanding'
import ProductLanding from './product/ProductLanding'
import OrderLanding from './order/OrderLanding'
import CustomerLanding from './customers/CustomerLanding'
import CustomerSearchResults from './customers/CustomerSearchResults'
import CustomerProfileCard from './customers/CustomerProfileCard';

export default class CustomerContainer extends Component {
 render() {
     return (
			<>
				<NavigationBar view="Customer Portal" />
				<SideBar view="Customers" />
				<CustomerSearchResults />
				<CustomerProfileCard {...props} />

				<Route
					exact
					path="/customer-portal"
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