import React from 'react';
import './searchbar.css';





const SearchBar = props => {
    return (
        <div className= 'main-header'>
            <div id= 'left-icons'>
                <i className="fab fa-instagram"></i>
                <p>|</p>
                <h1 id= 'instagram'>Instagram</h1>
            </div>
            <input 
                onChange={props.changer}
                onKeyDown={props.searching} 
                className= 'search'  
                name='searchKey'
                placeholder= '⚲ Search'
                type="text"
                value={props.searcher}/>                      
            <div id= 'right-icons'>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    );
}

export default SearchBar;