import { h, render, Component,  } from 'preact';
import { useState } from 'preact/hooks';
import { Router, route } from 'preact-router';
import { Link } from 'preact-router/match';

const { BASE_URL = "/" } = import.meta.env;

export default class AppContainer extends Component {
	// some method that returns a promise
	isAuthenticated() {
		return true
	}
  
	handleRoute = async (e: any)=> {
		const isAuthed = await this.isAuthenticated();
		if (!isAuthed) route('/', true);
	};
  
	render() {
	  return (
		<Router 
			onChange={this.handleRoute}
			url={BASE_URL||"/"}>
			{this.props.children}
		</Router>
	  );
	}
}