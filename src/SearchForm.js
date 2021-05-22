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

// KOMPONENET SEARCHRESULTS
    const SearchSuggestions = (props) => {

        const Message = ({ text }) => (
            <div className="message">
                <h2>{text}</h2>
                <hr />
            </div>
        );

        // if (!searchResults.length) {
        //     return <Message text="Loading search results" />
        // }
        //
        // if (!searchTerm) {
        //     return <Message text="Try to search for something..." />
        // }

        if (!filteredResults.length && searchTerm) {
            return <Message text="Brak wyników wyszukiwania" />
        }

        function handleSuggestClick(index) {
            console.log("click!")
            const clickedItem = filteredResults[index];
            SetSelectedResult(clickedItem);
            setSearchTerm("");
            
        }

        return (
            <ul className="search-results">
                {filteredResults.map((item, index) => (
                    <li key={index} onClick={() => handleSuggestClick(index)}>
                        {item.title}
                    </li>
                ))}
            </ul>
        );
    };

//warunki: jeśli nie ma searchTerm, to li się nie wyświetlają
//         po kliknięciu zeruje się searchTerm i nie wyświetla się lista

    return (
        <section className="search">
            <h1>Co chcesz dziś wyrzucić?</h1>
            <input type="text" placeholder="Tu wpisz, co chcesz wyrzucić" onChange={updateSearch} />
            <SearchSuggestions/>
            {
                selectedResult ? <h2>  { selectedResult.title } wyrzuć do {selectedResult.garbage}</h2> : null
            }
        </section>
    );
}

export default SearchForm;