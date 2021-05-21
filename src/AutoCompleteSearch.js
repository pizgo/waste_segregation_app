import React, { useState, useEffect } from 'react'
import getMockData from "./MockData";



const AutoCompleteSearch = () => {
    const [searchTerm, updateSearchTerm] = useState('dupa');
    const [searchResults, updateSearchResults] = useState([]);
    const [filteredResults, updateFilteredResults] = useState([]);

    useEffect(() => {
        const getSearchResults = async () => {
            const searchResultsResponse = await getMockData();
            console.log(searchResultsResponse);

            updateSearchResults(searchResultsResponse);
        };

        getSearchResults();
    }, []);

    const updateSearch = e => {
        updateSearchTerm(e.target.value);
        updateFilteredResults(searchResults.filter(result => result.title.match(new RegExp(e.target.value, 'gi'))))
    };

// KOMPONENET SEARCHRESULTS
    const SearchResults = () => {
        const Message = ({ text }) => (
            <div className="message">
                <h2>{text}</h2>
                <hr />
            </div>
        );

        if (!searchResults.length) {
            return <Message text="Loading search results" />
        }

        if (!searchTerm) {
            return <Message text="Try to search for something..." />
        }

        if (!filteredResults.length) {
            return <Message text="We couldn't find anything for your search term." />
        }

        return (
            <ul className="search-results">
                {filteredResults.map((item, index) => (
                    <li key={index}>
                        {item.title}
                    </li>
                ))}
            </ul>
        );
    };



    return (
        <section className="search">
            <h1>Search {searchTerm.length ? `results for: ${searchTerm}` : null}</h1>
            <input type="text" placeholder="Search for tutorials..." onKeyUp={updateSearch} />
            <SearchResults/>
        </section>
    );
}

export default AutoCompleteSearch;