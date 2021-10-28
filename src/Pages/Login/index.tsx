import { Link, Redirect } from "react-router-dom";
import { Form } from "../../Components/Form";
import { useUser } from "../../Providers/User";
import { PageContainer } from "../Register/style";

export const Login = () => {
  const { auth } = useUser();
  if (auth) {
    return <Redirect to={"/"} />;
  }

  return (
    <PageContainer>
      <div className="page">
        <div className="formContainer">
          <h2>
            Não tem um cadastro ? <Link to="/register">Cadastre-se</Link>
          </h2>
          <Form type={"login"} />
        </div>
        <div className="imgContainer">
          <img src="" />
        </div>
      </div>
      <footer></footer>
    </PageContainer>
  );
};
