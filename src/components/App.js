import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import '../style.css';


class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 68d032e13466bfda6678062087932615ddd346fcd57f8d44bdb9b253b4de358d'
            }
        });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}



export default App;