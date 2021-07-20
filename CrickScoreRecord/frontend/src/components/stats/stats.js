import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getstats, deletestat } from '../../actions/stats';

export class Stats extends Component{
	static propTypes = {
		stats: PropTypes.array.isRequired,
		getstats: PropTypes.func.isRequired,
		deletestat: PropTypes.func.isRequired
	};

	componentDidMount(){
		this.props.getstats();
	}
	render(){
		return(
			<Fragment>
				<h1>Stats</h1>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Age</th>
							<th>Matches</th>
							<th>Runs</th>
						</tr>
					</thead>
					<tbody>
					{this.props.stats.map((stat) => (
						<tr key={stat.id}>
							<td>{stat.id}</td>
							<td>{stat.name}</td>
							<td>{stat.age}</td>
							<td>{stat.matches}</td>
							<td>{stat.runs}</td>
							<td>
								<button 
									onClick={this.props.deletestat.bind(this,stat.id)}
									className="btn btn-danger btn-sm"
								>
									{" "}
									Delete
								</button>
							</td>
						</tr>
						))}
					</tbody>
				</table>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	stats: state.stats.stats
});
export default connect(mapStateToProps,{ getstats, deletestat})(Stats);