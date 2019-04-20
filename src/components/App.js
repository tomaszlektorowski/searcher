import React from 'react';
import SearchBar from './SearchBar';
import '../style.css';

class App {
    onSearchSubmit(term) {
        console.log(term);

    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}



export default App;