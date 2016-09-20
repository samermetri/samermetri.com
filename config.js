function get(req, res, dir) {
	try{
    	res.sendFile(dir + "/index.html");
    }catch (ex){
    	
    }
}


module.exports.get = get;
