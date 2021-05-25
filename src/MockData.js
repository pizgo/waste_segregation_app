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

    {
        title: 'zeszyt',
        binID: 1
    },

    {
        title: 'tłusta tacka styropianowa',
        binID: 4
    },

];

let binDict = {
    1 : {
        "title" : "papier",
        "description" : "paper",
        "icon" : "/bio.jpg"
    },

    2 : {
        "title" : "odpady biodegradowalne",
        "description" : "bio",
        "icon" : "/bio.jpg"
    },


    3 : {
        "title" : "szkło",
        "description" : "szkło",
        "icon" : "/glass.jpg"
    },

    4 : {
        "title" : "odpady zmieszane",
        "description" : "odpady zmieszane",
        "icon": "/mixed.jpg"
    },
    5 : {
        "title" : "metale i tworzywa sztuczne",
        "description" : "tworzywa i metale",
        "icon": "/pet.jpg"
    },
}
export const addNewGarbage = (newGarbage) => {
    mockData.push(newGarbage)
}

export const  getMockData = () => mockData;

export const getBinDict = () => binDict;

