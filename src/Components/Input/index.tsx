import { HTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { InputContainer } from "./style";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  nomes: string;
  placeholder: string;
  label: string;
  type: string;

  register: UseFormRegister<FieldValues>;
}

export const Input = ({
  nomes,
  placeholder,
  label,
  type,
  register,
}: InputProps) => {
  return (
    <InputContainer>
      <label>
        <input
          type={type}
          placeholder={placeholder}
          {...register(nomes)}
          required
        />
        <span>{label}</span>
      </label>
    </InputContainer>
  );
};
