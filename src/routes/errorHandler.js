const errorHandler = (err, req, res, next) => {
    if (req.headersSent) {
        res.status(500).send({ error: 'Contate o adm!' });
    } else {
        next(err);
    }
}

module.exports = errorHandler;
