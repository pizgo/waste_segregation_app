import React, { useState, useEffect } from 'react'
import {getBinDict} from "../resources/BinDict";
import  {getSearchResults} from "../resources/DataBase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faScroll} from "@fortawesome/free-solid-svg-icons";


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
                            <div className="search__result">
                                <span className='search__result-element'>
                                  { selectedResult.title }:
                                </span> wyrzuć do pojemnika na
                                {/*<span className='search__result-element'>*/}
                                {/*    {getBinDict()[ selectedResult.binID ].title}.*/}
                                {/*</span>*/}
                                <div className='bin__result' style={{display: (selectedResult.binID === 1) ? 'block' : 'none'}}  >
                                    <FontAwesomeIcon icon={faScroll} alt="paper" id='paperResult' className='bin__result-icon result__paper'/>
                                    <p className='bin__result-desc result__paper'>Papier</p>
                                </div>
                                <div className='bin__result' style={{display: (selectedResult.binID === 2) ? 'block' : 'none'}}  >
                                    <FontAwesomeIcon icon={faScroll} alt="bio" id='bioResult' className='bin__result-icon result__bio'/>
                                    <p className='bin__result-desc result__bio'>Papier</p>
                                </div>
                                <div className='bin__result' style={{display: (selectedResult.binID === 3) ? 'block' : 'none'}}  >
                                    <FontAwesomeIcon icon={faScroll} alt="glass" id='glassResult' className='bin__result-icon result__glass'/>
                                    <p className='bin__result-desc result__glass'>Papier</p>
                                </div>
                                <div className='bin__result' style={{display: (selectedResult.binID === 4) ? 'block' : 'none'}}  >
                                    <FontAwesomeIcon icon={faScroll} alt="mixed" id='mixedResult' className='bin__result-icon result__mixed'/>
                                    <p className='bin__result-desc result__mixed'>Papier</p>
                                </div>
                                <div className='bin__result' style={{display: (selectedResult.binID === 5) ? 'block' : 'none'}}  >
                                    <FontAwesomeIcon icon={faScroll} alt="pet" id='petResult' className='bin__result-icon result__pet'/>
                                    <p className='bin__result-desc result__pet'>Papier</p>
                                </div>
                            </div>
                            : null}
                        {(!filteredResults.length && searchTerm) && <p className="search__result-false">
                            Brak wyników wyszukiwania. Chcesz uzupełnić naszą bazę?
                            <a href="/AddTrash"> Kliknij tutaj.</a>
                        </p>}
                </div>
            </section>
        </div>
    );
}



