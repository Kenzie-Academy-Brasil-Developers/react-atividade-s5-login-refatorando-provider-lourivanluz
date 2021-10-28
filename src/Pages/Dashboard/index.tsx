import { useUser } from "../../Providers/User";
import { Redirect } from "react-router-dom";
import { DivStyeled } from "./style";

export const Dashboard = () => {
  const { logout, user, auth } = useUser();

  if (!auth) {
    return <Redirect to={"/register"} />;
  }
  return (
    <DivStyeled>
      <div>{`Bem vindo ${user.email}`}</div>
      <button onClick={logout}>logout</button>
    </DivStyeled>
  );
};
