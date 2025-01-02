import React from "react";
import  "./form-input.style"
import { FormInputLable, Group, Input } from "./form-input.style";
const FormInput = ({ lable, ...otherProps }) => {
  return (
    <Group>
        <Input {...otherProps} />
      {lable && (
        <FormInputLable shrink={otherProps.value.length } >
          {lable}
        </FormInputLable>
      )}
    </Group>
  );
};

export default FormInput;
