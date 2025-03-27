const getTheTitles = function(books) {
    return books.reduce((titles, element) => {
        titles.push(element.title);
        return titles;
    }, []);
}

// Do not edit below this line
module.exports = getTheTitles;
