import React, { createContext, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

export interface IUserData {
  name: string;
  email: string;
  password: string;
  zipCode: string;
  street: string;
  number: number;
}

interface AuthContextData {
  signed: boolean;
  user: IUserData | null;
  signIn(user: IUserData): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUserData | null>(null);
  const history = useHistory();

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = localStorage.getItem("@GamaAuth:user");

      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
      }
    }

    loadStoragedData();
  }, []);

  async function signIn(user: IUserData) {
    setUser(user);
    localStorage.setItem("@GamaAuth:user", JSON.stringify(user));
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
    history.push("/");
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
