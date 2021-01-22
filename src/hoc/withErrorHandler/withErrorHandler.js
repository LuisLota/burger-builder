import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxillity/Auxillity';

const withErrorHandler = (WrapperdComponent, axios) => {
	return class extends Component {
		state = {
			error: null
		};
		constructor(props) {
			super(props);
			this.reqInterceptor = axios.interceptors.request.use((req) => {
				this.setState({ error: null });
				return req;
			});

			this.resInterceptor = axios.interceptors.response.use(
				(res) => res,
				(error) => {
					this.setState({ error: error });
				}
			);
		}

		componentWillUnmount() {
			axios.interceptors.request.eject(this.reqInterceptor);
			axios.interceptors.response.eject(this.resInterceptor);
		}

		errorConfirmedHandler = () => {
			this.setState({ error: null });
		};

		render() {
			return (
				<Aux>
					<Modal modalClosed={this.errorConfirmedHandler} show={this.state.error}>
						{this.state.error ? this.state.error.message : null}
					</Modal>
					<WrapperdComponent {...this.props} />
				</Aux>
			);
		}
	};
};

export default withErrorHandler;
