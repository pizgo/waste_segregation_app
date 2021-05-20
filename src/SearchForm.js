import React from 'react';
import { useState } from "react";


export const SearchForm = () => {
    const [value, setValue] = useState( "");

    const handleChange = (e) => {

        setValue(e.target.value);
    }

    return (
       <div className = "search__container">
        <div>Gdzie wyrzucić...</div>
           <form onChange={handleChange}>
            <select name="select" value={value}>
                <option value="opcja1">Opcja1</option>
                <option value="opcja2">Opcja2</option>
                <option value="opcja3">Opcja3</option>
            </select>
        </form>
        <div>{value} wyrzuć do pojemnika XXX</div>
       </div>
    )
}