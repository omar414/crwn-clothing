import React from "react";
import "./button-style.jsx";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button-style.jsx";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomeButton = getButton(buttonType);
  return <CustomeButton {...otherProps}>{children}</CustomeButton>;
};

export default Button;
