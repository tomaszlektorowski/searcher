import React from 'react';
import '../style.css';

class SearchBar extends React.Component {
    render() {
        return (<div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Image searching</label>
                    <input type="text"></input>
                </div>

            </form>
        </div>);
    }
}

export default SearchBar;