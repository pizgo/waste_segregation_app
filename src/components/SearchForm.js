import React, { useState, useEffect } from 'react'
import {getMockData} from "./MockData";
import {getBinDict} from "./MockData";
import {db} from "./firebase";




const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [selectedResult, SetSelectedResult] = useState(null)

    //pobieram dane
    useEffect(() => {

        const getSearchResults = () => db.collection("garbage").get().then((querySnapshot) => {
            const allResults = [];
            querySnapshot.forEach((doc) => {
                allResults.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            setSearchResults(allResults);
        });
        getSearchResults();
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
                        <span>{ selectedResult.title }: </span>wyrzuć do pojemnika na {getBinDict()[ selectedResult.binID ].title}.
                    </p> : null}
                    {(!filteredResults.length && searchTerm) && <p className="search__result-false"> Brak wyników wyszukiwania. Chcesz uzupełnić naszą bazę? Kliknij tutaj.
                    </p>}
            </div>
        </section>
    );
}

export default SearchForm;


//KOPIA ZAPASOWA
// const SearchForm = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [filteredResults, setFilteredResults] = useState([]);
//     const [selectedResult, SetSelectedResult] = useState(null)
//
//     //pobieram dane
//     useEffect(() => {
//         const getSearchResults = async () => {
//             console.log("updating results from [mock] DB?")
//             const searchResultsResponse = await getMockData();
//             setSearchResults(searchResultsResponse);
//         };
//         getSearchResults();
//     }, []);
//
//     const updateSearch = e => {
//         SetSelectedResult(null)
//         setSearchTerm(e.target.value);
//         let newFilteredResults = searchResults.filter(result => result.title.match(new RegExp(e.target.value, 'gi')))
//         setFilteredResults(newFilteredResults)
//     };
//
//
//     function handleSuggestClick(index) {
//         console.log("click!")
//         const clickedItem = filteredResults[index];
//         SetSelectedResult(clickedItem);
//     }
//
//     return (
//         <section className="search">
//             <div className="search__container">
//                 <p className="search__hello">Co chcesz dziś wyrzucić?</p>
//                 <input type="text" className="search__form" placeholder="Tu wpisz, co chcesz wyrzucić" onChange={updateSearch} />
//
//                 <ul className="search__list" style={{display: (selectedResult || !searchTerm || (!filteredResults.length && searchTerm)) ? 'none' : 'block'}}>
//                     {filteredResults.map((item, index) => (
//                         <li className="search__list-element" key={index} onClick={() => handleSuggestClick(index)}>
//                             {item.title}
//                         </li>
//                     ))}
//                 </ul>
//                 {selectedResult ? <p className="search__result">
//                     <span>{ selectedResult.title }: </span>wyrzuć do pojemnika na {getBinDict()[ selectedResult.binID ].title}.
//                 </p> : null}
//                 {(!filteredResults.length && searchTerm) && <p className="search__result-false"> Brak wyników wyszukiwania. Chcesz uzupełnić naszą bazę? Kliknij tutaj.
//                 </p>}
//             </div>
//         </section>
//     );
// }
//
// export default SearchForm;