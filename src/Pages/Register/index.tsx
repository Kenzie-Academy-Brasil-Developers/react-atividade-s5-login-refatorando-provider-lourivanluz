import { Form } from "../../Components/Form";
import { PageContainer } from "./style";
//import img from "../../assets/image";

export const Register = () => {
  return (
    <PageContainer>
      <div className="page">
        <div className="formContainer">
          <Form type={"register"} />
        </div>
        <div className="imgContainer">
          <img src="" />
        </div>
      </div>
      <footer>oi</footer>
    </PageContainer>
  );
};
