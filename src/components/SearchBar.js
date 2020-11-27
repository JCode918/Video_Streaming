import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    onFormSubmit= (e) =>{
        e.preventDefault();
        // TODO: Make sure we call a callback from the parent component
    }

    render() {
        return (

            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        {/*I named the input the same name that it represents in the state, which allows me to just have one onInputChange for all inputs*/}
                        <input type="text" value={this.state.term} name="term" placeholder="Search Video Title" onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
};

export default SearchBar;