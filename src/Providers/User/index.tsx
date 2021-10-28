import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../Server/api";
import { History } from "history";

interface user {
  email: string;
  password: string;
}

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextData {
  auth: string;
  userLogin: (user: user) => void;
  userRegister: (user: user) => void;
  logout: () => void;
}

interface ChildComponentProps {
  history: History;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const history = useHistory<ChildComponentProps>();
  const [auth, setAuth] = useState<string>(
    () => localStorage.getItem("@tokenLogin") || ""
  );

  const userLogin = (user: user) => {
    api
      .post("/login", user)
      .then((response) => {
        localStorage.setItem(
          "@tokenLogin",
          JSON.stringify(response.data.accessToken)
        );
        setAuth(response.data.accessToken);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const userRegister = (user: user) => {
    api
      .post("/register", user)
      .then((response) => {
        userLogin(user);
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.removeItem("@tokenLogin");
  };

  return (
    <UserContext.Provider value={{ userLogin, userRegister, auth, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
