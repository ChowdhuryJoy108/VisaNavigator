import PropTypes from "prop-types";
import { createContext } from "react";


const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const authInfo = {
        name : "Joy"
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.func
}

export { AuthContext, AuthProvider};