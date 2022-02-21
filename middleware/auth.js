import jwt from 'jsonwebtoken';

const auth = async ( req, res, next ) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test' );
            // console.log('test'.decodeData);
            // req.userId = decodedData?.id;
        } else { // googleoAuth
            decodedData  =   jwt.decode(token);
            // concole.log(decodeData);
            // req.userId = decodedData?.sub; 
            //id for googleoAuth diffrenttiate google
        }

        next();

    } catch (error) {
        console.log(error);
    }
}

export default auth;