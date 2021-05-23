let mockData = [
    {
        title: 'szklana butelka',
        binID: 3,
    },
    {
        title: 'styropian',
        binID: 4
    },
    {
        title: 'nakrętka od butelki',
        binID: 5
    },
    {
        title: 'plastikowa butelka',
        binID: 5
    },

];

let binDict = {
    3 : {
        "title" : "szkło",
        "description" : "dddd",
        "icon" : "/glass.jpg"
    },

    4 : {
        "title" : "odpady zmieszane",
        "description" : "jest to pojemnik na szkło itp",
        "icon": "/mixed.jpg"
    },
    5 : {
        "title" : "metale i tworzywa sztuczne",
        "description" : "jest to pojemnik na szkło itp",
        "icon": "/pet.jpg"
    },
}
export const addNewGarbage = (newGarbage) => {
    mockData.push(newGarbage)
}

export const  getMockData = () => mockData;

export const getBinDict = () => binDict;

