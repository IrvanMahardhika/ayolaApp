import React, {useState, createContext, useContext} from 'react';

import {Auth} from '@src/types/auth';

export interface AuthContextI {
  authState: Auth;
  updateAuthState: ({isAuth}: {isAuth: boolean}) => void;
}

export const AuthContext = createContext<AuthContextI | null>(null);

export const useAuthContext = () => useContext(AuthContext) as AuthContextI;

const AuthProvider = ({children}: {children: any}) => {
  const [authState, setAuthState] = useState<Auth>({isAuth: false});

  const updateAuthState: AuthContextI['updateAuthState'] = ({
    isAuth,
  }: {
    isAuth: boolean;
  }) => {
    setAuthState({isAuth});
  };

  return (
    <AuthContext.Provider value={{authState, updateAuthState}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
