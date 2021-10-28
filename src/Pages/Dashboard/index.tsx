import { useUser } from "../../Providers/User";
import { Redirect } from "react-router-dom";
import { DivStyeled } from "./style";

export const Dashboard = () => {
  const { auth } = useUser();
  console.log(auth ? "true" : "false");
  if (!auth) {
    return <Redirect to={"/register"} />;
  }

  const { logout } = useUser();

  return (
    <DivStyeled>
      <div>{"bem vindo"}</div>
      <button onClick={logout}>logout</button>
    </DivStyeled>
  );
};
