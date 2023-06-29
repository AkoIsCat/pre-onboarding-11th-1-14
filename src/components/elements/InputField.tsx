import React from "react";
import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import styled, { DefaultTheme } from "styled-components";
import { MdDone } from "react-icons/md";

/**
 size : md (todo 수정 input)
        lr (todo 입력 input)
        full (로그인, 회원가입)
 */

interface InputProps {
  testname?: string;
  size?: "md" | "lr" | "full";
  id?: string;
  type: HTMLInputTypeAttribute;
  name?: string;
  defaultChecked?: boolean;
  placeholder?: string;
  defaultValue?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const theme: DefaultTheme = {
  checkColor: "#3DB981",
  borderColor: "#d4d4d8",
};

const checkColor: React.CSSProperties = {
  color: theme.checkColor,
};

export const InputField = ({
  testname,
  size,
  id,
  type,
  name,
  defaultChecked,
  placeholder,
  defaultValue,
  onChange,
}: InputProps) => {
  if (type !== "checkbox")
    return (
      <InputStyle
        data-testid={testname}
        size={size}
        id={id}
        type={type}
        name={name}
        defaultChecked={defaultChecked}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    );
  else
    return (
      <label>
        <InputCheckBox
          data-testid={testname}
          size={size}
          id={id}
          type={type}
          name={name}
          defaultChecked={defaultChecked}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
        />
        {defaultChecked ? (
          <Checked defaultChecked={defaultChecked}>
            <MdDone style={checkColor} />
          </Checked>
        ) : (
          <Checked />
        )}
      </label>
    );
};

const InputStyle = styled.input<InputProps>`
  width: ${(props) => {
    if (props.size === "full") return `320px`;
    else if (props.size === "md") return `220px`;
    else return `270px`;
  }};

  height: 30px;
  padding: 0px 4px;

  border: 1px solid ${theme.borderColor};
  border-radius: 0.125rem;
`;

const InputCheckBox = styled.input<InputProps>`
  display: none;
`;

const Checked = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  border: 1px solid ${theme.borderColor};

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => props.defaultChecked && `border-color : ${theme.checkColor};`}
`;
