import React, { useState, useEffect } from 'react'
import getMockData from "./MockData";
import GarbageResult from "./GarbageResult";



const AutoCompleteSearch = () => {
    const [searchTerm, updateSearchTerm] = useState('');
    const [searchResults, updateSearchResults] = useState([]);
    const [filteredResults, updateFilteredResults] = useState([]);
    const [selectedResult, updateSelectedResult] = useState(null)
    const [displayResults, updateDisplayResults] = useState(false);
    const [focusIndex, updateFocusIndex] = useState(-1);

    useEffect(() => {
        const getSearchResults = async () => {
            const searchResultsResponse = await getMockData();
            updateSearchResults(searchResultsResponse);
        };

        getSearchResults();
    }, []);

    const updateSearch = e => {
        updateSelectedResult(null)
        updateSearchTerm(e.target.value);
        let newFilteredResults = searchResults.filter(result => result.title.match(new RegExp(e.target.value, 'gi')))
        updateFilteredResults(newFilteredResults)
    };

// KOMPONENET SEARCHRESULTS
    const SearchSuggestions = (props) => {

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

        function handleSuggestClick(index) {
            console.log("click!")
            const clickedItem = filteredResults[index]
            updateSelectedResult( clickedItem )
        }

        return (
            <ul className="search-results">
                {filteredResults.map((item, index) => (
                    <li key={index} onClick={() => handleSuggestClick(index)}>
                        ARTICLE: {item.title}
                    </li>
                ))}
            </ul>
        );
    };



    return (
        <section className="search">
            <h1>Co chcesz dziś wyrzucić?</h1>
            <input type="text" placeholder="Tu wpisz, co chcesz wyrzucić" onKeyUp={updateSearch} />
            <SearchSuggestions/>
            {
                selectedResult ? <h1> Clicked: { selectedResult.title } wyrzuć do {selectedResult.garbage}</h1> : null
            }
        </section>
    );
}

export default AutoCompleteSearch;