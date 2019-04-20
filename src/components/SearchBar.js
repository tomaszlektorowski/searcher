import React from 'react';
import '../style.css';

class SearchBar extends React.Component {
    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (<div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Image searching</label>
                    <input type="text" onChange={this.onInputChange}></input>
                </div>

            </form>
        </div>);
    }
}

export default SearchBar;