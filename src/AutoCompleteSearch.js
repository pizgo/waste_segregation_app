import React, { useState, useEffect } from 'react'
import getMockData from "./MockData";



const AutoCompleteSearch = () => {
    const [searchTerm, updateSearchTerm] = useState('');
    const [searchResults, updateSearchResults] = useState([]);
    const [filteredResults, updateFilteredResults] = useState([]);
    const [displayResults, updateDisplayResults] = useState(false);
    const [focusIndex, updateFocusIndex] = useState(-1);

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
                        ARTICLE: {item.title}
                    </li>
                ))}
            </ul>
        );
    };



    return (
        <section className="search">
            <h1>Search {searchTerm.length ? `results for: ${searchTerm}` : null}</h1>
            <input type="text" placeholder="Search for tutorials..." onKeyUp={updateSearch} />
            <ul className="search-suggestions">
                {(!displayResults && searchTerm) && <li key="-1" className={focusIndex === -1 ? 'active' : null}>{`Search for ${searchTerm}`}</li>}
                {!displayResults && filteredResults.map((item, index) => (
                    <li key={index} className={focusIndex === index ? 'active' : null}>
                            SUGGESTION {item.title}
                    </li>
                ))}
            </ul>
            {/*<SearchResults/>*/}
        </section>
    );
}

export default AutoCompleteSearch;