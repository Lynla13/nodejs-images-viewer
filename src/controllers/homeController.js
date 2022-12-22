
let getHomePage = (req, res) => {
    //login 
    return res.render('index.ejs');
}

module.exports = {
    getHomePage
}