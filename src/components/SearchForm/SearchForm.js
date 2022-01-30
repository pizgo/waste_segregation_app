import React, { useState, useEffect } from 'react'
import {getBinDict} from "../resources/BinDict";
import  {getSearchResults} from "../resources/DataBase";


export const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [selectedResult, setSelectedResult] = useState(null);

    //fetching data from firebase
    useEffect(() => {
        getSearchResults(setSearchResults);
    }, []);

    //updating autocomplete search
    const updateSearch = e => {

        setSelectedResult(null);
        setSearchTerm(e.target.value);
        setFilteredResults(searchResults.filter(result => result.title.match(new RegExp(e.target.value, 'gi'))))
    };

    //choosing autosuggestion
    function handleSuggestClick(index) {
        setSelectedResult(filteredResults[index]);
        setSearchTerm("");
    }

    return (
        <div className="container">
            <section className="search">
                <div className="search__container">
                        <p className="search__text text__header">Co chcesz wyrzucić?</p>
                        <input type="text" className="search__form" placeholder="Tu wpisz, co chcesz wyrzucić"
                               value={searchTerm} onChange={updateSearch} />

                        <ul className="search__list" style={{display: (selectedResult || !searchTerm ||
                                (!filteredResults.length && searchTerm)) ? 'none' : 'block'}}>
                            {filteredResults.map((item, index) => (
                                <li className="search__list-element" key={index} onClick={() => handleSuggestClick(index)}>
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                        {selectedResult ?
                            <p className="search__result">
                            <span>{ selectedResult.title }</span> : wyrzuć do pojemnika na <span>{getBinDict()[ selectedResult.binID ].title}.</span></p>
                            : null}
                        {(!filteredResults.length && searchTerm) && <p className="search__result-false"> Brak wyników wyszukiwania. Chcesz uzupełnić naszą bazę?
                            <a href="/AddTrash"> Kliknij tutaj.</a>
                        </p>}
                </div>
            </section>
        </div>
    );
}



