import React from 'react';

/**
 * Describes the shape of the Authentication context.
 */
interface AuthenticationContextInterface { 
    token?: string;
    setToken?(newToken: string): void;
}

/**
 * Raw Authentication Context.
 */
export const Context = React.createContext<AuthenticationContextInterface | any>({})

/**
 * Authentication Context Provider Wrapper as a React Element.
 */
export const Provider = (props: any) =>  {
    const [token, setToken] = React.useState(null);
    return(
        <Context.Provider value={{token, setToken}}>
            {props.children}
        </Context.Provider>
    );
} 