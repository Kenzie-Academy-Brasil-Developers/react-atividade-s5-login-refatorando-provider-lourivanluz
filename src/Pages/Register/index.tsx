import { Link } from "react-router-dom";
import { Form } from "../../Components/Form";
import { PageContainer } from "./style";
//import img from "../../assets/image";

export const Register = () => {
  return (
    <PageContainer>
      <div className="page">
        <div className="formContainer">
          <h2>
            Ja tem um cadastro ? <Link to="/login">Login</Link>
          </h2>
          <Form type={"register"} />
        </div>
        <div className="imgContainer">
          <img src="" />
        </div>
      </div>
      <footer></footer>
    </PageContainer>
  );
};
