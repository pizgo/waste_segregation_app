import React, { useState, useEffect } from 'react'
import {getBinDict} from "./BinDict";
import  {getSearchResults} from "./DataBase";
import {db} from "./Firebase";




const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [selectedResult, SetSelectedResult] = useState(null)

    //pobieram dane
    useEffect(() => {
        getSearchResults(setSearchResults);
    }, []);

    const updateSearch = e => {
        SetSelectedResult(null)
        setSearchTerm(e.target.value);
        let newFilteredResults = searchResults.filter(result => result.title.match(new RegExp(e.target.value, 'gi')))
        setFilteredResults(newFilteredResults)
    };


    function handleSuggestClick(index) {
        console.log("click!")
        const clickedItem = filteredResults[index];
        SetSelectedResult(clickedItem);
    }

    return (
        <div className="container">
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
                        {selectedResult ? <p className="search__result">
                            { selectedResult.title }: wyrzuć do pojemnika na <span>{getBinDict()[ selectedResult.binID ].title}.</span>
                        </p> : null}
                        {(!filteredResults.length && searchTerm) && <p className="search__result-false"> Brak wyników wyszukiwania. Chcesz uzupełnić naszą bazę?
                            <a href="/AddTrash"> Kliknij tutaj.</a>
                        </p>}
                </div>
            </section>
        </div>
    );
}

export default SearchForm;


