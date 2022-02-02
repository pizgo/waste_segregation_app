import React, { useState, useEffect } from 'react'
import {getBinDict} from "../resources/BinDict";
import  {getSearchResults} from "../resources/DataBase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAppleAlt, faScroll, faTrash, faWineBottle} from "@fortawesome/free-solid-svg-icons";
import {GiOpenedFoodCan} from 'react-icons/gi';


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
                                <div className='bin__result' style={{display: (selectedResult.binID === 1) ? 'block' : 'none'}}>
                                    <div className='bin__result-box bin__result-paper'>
                                        <FontAwesomeIcon icon={faScroll} alt="paper" id='paperResult' className='bin__result-icon paper'/>
                                        <p className='bin__result-desc'>Papier</p>
                                    </div>
                                </div>
                                <div className='bin__result' style={{display: (selectedResult.binID === 2) ? 'block' : 'none'}}>
                                    <div className=' bin__result-box bin__result-bio'>
                                        <FontAwesomeIcon icon={faAppleAlt} alt="bio" id='bioResult' className='bin__result-icon bio'/>
                                        <p className='bin__result-desc'>Bio</p>
                                    </div>
                                </div>
                                <div className='bin__result' style={{display: (selectedResult.binID === 3) ? 'block' : 'none'}}>
                                    <div className='bin__result-box bin__result-glass'>
                                        <FontAwesomeIcon icon={faWineBottle} alt="glass" id='glassResult' className='bin__result-icon glass'/>
                                        <p className='bin__result-desc'>Szkło</p>
                                    </div>
                                </div>
                                <div className='bin__result' style={{display: (selectedResult.binID === 4) ? 'block' : 'none'}}>
                                    <div className='bin__result-box bin__result-mixed'>
                                        <FontAwesomeIcon icon={faTrash} alt="mixed" id='mixedResult' className='bin__result-icon mixed'/>
                                        <p className='bin__result-desc'>Odpady zmieszane</p>
                                    </div>
                                </div>
                                <div className='bin__result' style={{display: (selectedResult.binID === 5) ? 'block' : 'none'}}>
                                    <div className='bin__result-box bin__result-pet'>
                                        <GiOpenedFoodCan alt="pet" id='petResult' className='bin__result-icon pet'/>
                                        <p className='bin__result-desc'>Metale i tworzywa sztuczne</p>
                                    </div>
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



