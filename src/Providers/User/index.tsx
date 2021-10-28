import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../Server/api";

interface user {
  email: string;
  password?: string;
}

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextData {
  auth: string;
  user: user;
  userLogin: (user: user) => void;
  userRegister: (user: user) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const history = useHistory();
  const [auth, setAuth] = useState<string>(
    () => localStorage.getItem("@tokenLogin") || ""
  );

  const [user, setUser] = useState<user>({} as user);

  const userLogin = (user: user) => {
    api
      .post("/login", user)
      .then((response) => {
        localStorage.setItem(
          "@tokenLogin",
          JSON.stringify(response.data.accessToken)
        );
        setAuth(response.data.accessToken);
        setUser(response.data.user);
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
    setAuth("");
  };

  return (
    <UserContext.Provider
      value={{ userLogin, userRegister, auth, logout, user }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
