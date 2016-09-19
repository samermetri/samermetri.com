function get(req, res, dir) {
    res.sendFile(dir + "/index.html");
}


module.exports.get = get;
