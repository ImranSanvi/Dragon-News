import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "Abul mia",
        email: "Abul@mia.com"
    });
    const authData = {
        user,
        setUser,
    };

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;