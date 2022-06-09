const jwt = require('jsonwebtoken')
module.exports =(req,res,next)=>{
    const authHeader = req.get('Authorization');
    // Can we Refactor Authorization and Bearer 
    if(!authHeader){
        req.isAuth = false;
        return next();
    }
    const token = authHeader.split(' ')[1]; // Bearer tokennn 
    if(!token || token ===''){
        req.isAuth = false;
        return next();
    }
    let decodedToken;
    try {
        decodedToken = jwt.verify(token,'somesupersecretkey')        
    } catch (err) {
        req.isAuth = false;
        return next();
    }
    if(!decodedToken){
        req.isAuth = false;
        return next();
    }
    req.isAuth = true;
    req.userId = decodedToken
    next();
}