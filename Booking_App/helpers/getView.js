const path = require('path');
console.log(__dirname);


const getView = (response, viewName) => {
    return response.sendFile(path.join(__dirname,"../views/", viewName));
}

module.exports = getView;