const notFound = (err, req, res, next) => {
    return res.status(404).json({ msg: 'page not found...' })
}

module.exports = notFound;