import auth from '@react-native-firebase/auth';

/**
 * Checks if the user is already in the database
 * @param {*} email 
 * @returns {boolean} - Representing if the user is already in our database
 */
const checkUserExists = async (email) => {
    try {
        const existingUser = await auth().fetchSignInMethodsForEmail(email);
        return existingUser.length > 0;
    } catch (error) {
        return false;
    }
};


/** 
 * Determines if the email and password is a valid sign in
 * @param {*} email
 * @param {*} password
 * @returns {boolean} - Representing if the sign in was successful
*/
const performSignIn = async (email, password) => {
    try {
        await auth().signInWithEmailAndPassword(email, password);
        return true;
    } catch (error) {
        return false;
    }
};

/**
 * Creates a new email and password combination in the database
 * @param {*} email 
 * @param {*} password 
 * @returns {boolean} - Representing if the sign up was successful
 */
const performSignUp = async (email, password) => {
    const existingUser = await checkUserExists(email);
    if (existingUser) {
        return false;
    }

    try {
        await auth().createUserWithEmailAndPassword(email, password);
        return true;
    } catch (error) {
        return false;
    }

};

export default {
    checkUserExists,
    performSignIn,
    performSignUp
};