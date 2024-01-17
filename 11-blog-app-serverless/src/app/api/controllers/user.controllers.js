// mongodb

export const verifyJwt = async(token) => {
    // verify jwt token
    
}

export const createToken = async(email) => {
    // create jwt token

} 

export const createUser = async (name , email, password) => {
    // create new user
    console.log("createUser" , name , email , password);
    return {
        status : "success",
        name : name,
        email : email,
        password : password
    }
}

// login user
export const loginUser = async (email, password) => {

    // verify password and fetch user name
    
    // create jwt token

    return {
        token,
        user : {
            name : name,
            email : email
        }
    }
}