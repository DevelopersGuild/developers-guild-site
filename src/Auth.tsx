import React from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props: any) => {
    const [token, setToken] = React.useState(null);
    return(
        <AuthContext.Provider value={[token, setToken]} >
            {props.children}
        </AuthContext.Provider>
    )
}