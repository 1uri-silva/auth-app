import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../service';
import api from '../service/api';

interface User {
  name: string;
  email: string;
}

interface AuthContext {
  signed: boolean;
  user: User | null;
  SignIn(): Promise<void>;
  SignOut(): void;
}

const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function getLocalStorage(): Promise<void> {
      const storageUser = await AsyncStorage.getItem('@RNAuth:user');
      const storageToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storageUser && storageToken) {
        api.defaults.headers.Authorization = `Bearer ${storageToken}`;
        setUser(JSON.parse(storageUser));
      }
    }
    getLocalStorage();
  }, []);

  async function SignIn(): Promise<void> {
    const response = await auth.SignIn();

    setUser(response.user);
    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAuth:token', response.token);
  }

  function SignOut(): void {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, SignIn, SignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContext {
  const context = useContext(AuthContext);

  return context;
}
