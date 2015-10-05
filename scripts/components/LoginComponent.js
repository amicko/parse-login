var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return { error: null };
	},
	render: function() {
		var errorElement = null;
		if(this.state.error) {
			errorElement = (
				<p className="red">{this.state.error}</p>
			);
		}
		return (
			<div className="container">
				<div className="row">
					<form className="col s12" onSubmit={this.onLogin}>
						<h1>Login</h1>
						{errorElement}
						<div className="row">
							<div className="input-field col s12">
								<input type="text" ref="email" className="validate" id="email_address" />
								<label htmlFor="first_name">Email Address</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input type="password" ref="password" className="validate" id="password" />
								<label htmlFor="password">Password</label>
							</div>
						</div>
						<div className="row">
							<button className="waves-effect waves-light btn">Login</button>
						</div>
					</form>
				</div>
			</div>
		);
	},
	onLogin: function(e) {
		e.preventDefault();
		console.log('Login button clicked');
		var username = this.refs.email.getDOMNode().value;
		var password = this.refs.password.getDOMNode().value;
		Parse.User.logIn(username, password, {
		  success: (user) => {
		    console.log('Login Successful')
		    this.props.router.navigate('dashboard', {trigger: true});
		  },
		  error: (user, error) => {
		    console.log('Login Failed');
		    this.setState({
						error: error.message
					});
		  }
});
	}
});