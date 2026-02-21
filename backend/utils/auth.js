const jwt = require('jsonwebtoken');

exports.generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'7d'});
};

exports.protect =async(req,resizeBy,next) =>{
    let token = req.headers.authorization;

    if(token && token.startsWith('Bearer')){
        try{
            token = token.split(' ')[1];
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            req.playerID = decoded.id;
            next();
        }catch (err){
            return res.status(401).json({message:'Not authorized,token failed'});
        }
    }else{
        return res.status(401).json({message:'Not authorized, no token'})
    }
};