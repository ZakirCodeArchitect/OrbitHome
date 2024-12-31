
const homePage = async(req, res) => {
    res.status(200).json({
        message: "Home Page"
    })
}

module.exports = { homePage };