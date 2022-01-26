import {db} from "./Firebase";

export const getSearchResults = (setSearchResults) => db.collection("garbage").get().then((querySnapshot) => {
    const allResults = [];
    querySnapshot.forEach((doc) => {
        allResults.push({
            ...doc.data(),
            id: doc.id
        });
    });
    setSearchResults(allResults);
});

