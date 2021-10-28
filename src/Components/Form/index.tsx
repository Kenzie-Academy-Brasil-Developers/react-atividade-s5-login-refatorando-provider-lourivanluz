import { Input } from "../Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../Providers/User";
import { FormContainer } from "./style";
import { useHistory } from "react-router";

interface FormProps {
  type: string;
}

interface DataParams {
  email: string;
  password: string;
}

export const Form = ({ type }: FormProps) => {
  //const regex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")

  const { userLogin, userRegister } = useUser();
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email invávlido"),
    password: yup
      .string()
      .min(8, "Minimo 8 caracteres")
      .required("Campo obrigatório")
      .matches(/(?=.*?[A-Z])/, "Ao menos uma letra maiúscula")
      .matches(/(?=.*?[a-z])/, "Ao menos uma letra minúscula"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: DataParams) => {
    console.log(data);
    if (type === "register") userRegister(data);
    if (type !== "register") userLogin(data);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          nomes={"email"}
          placeholder="Email"
          label={"Email"}
          type={"text"}
          register={register}
        />
        {errors.email?.message}
        <Input
          nomes={"password"}
          placeholder="Senha"
          label={"Senha"}
          type={"password"}
          register={register}
        />
        {errors.password?.message}
        <button type="submit">
          {type === "register" ? "Cadastrar" : "Login"}
        </button>
      </form>
    </FormContainer>
  );
};
