import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState('');

	const onInputChange = (e) => {
		//const { name, value } = e.target;
		setTerm(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		onFormSubmit(term);
	};

	return (
		<div className='search-bar ui segment'>
			<form className='ui form' onSubmit={onSubmit}>
				<div className='field'>
					<label>Video Search</label>
					{/*I named the input the same name that it represents in the state, which allows me to just have one onInputChange for all inputs*/}
					<input
						type='text'
						value={term}
						name='term'
						placeholder='Search Video Title'
						onChange={onInputChange}
					/>
				</div>
			</form>
		</div>
	);
};

//class SearchBar extends React.Component {
//state = { term: '' };

// onInputChange = (e) => {
// 	const { name, value } = e.target;
// 	this.setState({
// 		[name]: value,
// 	});
// };

// onFormSubmit = (e) => {
// 	e.preventDefault();

// 	this.props.onFormSubmit(this.state.term);
// };

// render() {
// 	return (
// 		<div className='search-bar ui segment'>
// 			<form className='ui form' onSubmit={this.onFormSubmit}>
// 				<div className='field'>
// 					<label>Video Search</label>
// 					{/*I named the input the same name that it represents in the state, which allows me to just have one onInputChange for all inputs*/}
// 					<input
// 						type='text'
// 						value={this.state.term}
// 						name='term'
// 						placeholder='Search Video Title'
// 						onChange={this.onInputChange}
// 					/>
// 				</div>
// 			</form>
// 		</div>
// 	);
// }
//}

export default SearchBar;
