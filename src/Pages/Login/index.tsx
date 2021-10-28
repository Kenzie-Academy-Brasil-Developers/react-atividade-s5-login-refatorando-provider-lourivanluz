import { Redirect } from "react-router-dom";
import { Form } from "../../Components/Form";
import { useUser } from "../../Providers/User";

export const Login = () => {
  const { auth } = useUser();
  if (auth) {
    return <Redirect to={"/"} />;
  }

  return (
    <div>
      <Form type={"login"} />
    </div>
  );
};
