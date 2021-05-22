import React, { useState, useEffect } from 'react'
import getMockData from "./MockData";




const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [selectedResult, SetSelectedResult] = useState(null)

    //useEffecy do pobierania danych
    useEffect(() => {
        const getSearchResults = async () => {
            const searchResultsResponse = await getMockData();
            setSearchResults(searchResultsResponse);
        };
        getSearchResults();
    }, []);

    const updateSearch = e => {
        SetSelectedResult(null)
        setSearchTerm(e.target.value);
        let newFilteredResults = searchResults.filter(result => result.title.match(new RegExp(e.target.value, 'gi')))
        setFilteredResults(newFilteredResults)

    };

    // if (!searchResults.length) {
    //     return <Message text="Loading search results" />
    // }
    //
    // if (!searchTerm) {
    //     return <Message text="Try to search for something..." />
    // }

    function handleSuggestClick(index) {
        console.log("click!")
        const clickedItem = filteredResults[index];
        SetSelectedResult(clickedItem);
        const clearInput = (e) => {
            e.target.value = "";
        };

    }

    return (
        <section className="search">
            <div className="search__container">
                    <p className="search__hello">Co chcesz dziś wyrzucić?</p>
                    <input type="text" className="search__form" placeholder="Tu wpisz, co chcesz wyrzucić" onChange={updateSearch} />

                    <ul className="search__list" style={{display: (selectedResult || !searchTerm || (!filteredResults.length && searchTerm)) ? 'none' : 'block'}}>
                        {filteredResults.map((item, index) => (
                            <li className="search__list-element" key={index} onClick={() => handleSuggestClick(index)}>
                                {item.title}
                            </li>
                        ))}
                    </ul>
                    {selectedResult ? <p className="search__result">  { selectedResult.title } wyrzuć do {selectedResult.garbage}</p> : null}
                    {(!filteredResults.length && searchTerm) && <p> Brak wyników wyszukiwania</p>}
            </div>
        </section>
    );
}

export default SearchForm;