import React from "react";
import { Button, Glyphicon } from "react-bootstrap";
import "./index.css";

interface IProps {
  isLoading: boolean,
  text: string,
  loadingText: string,
  className?: string,
  disabled?: boolean,
  [index: string]: any,
}

const LoaderButton = ({
  isLoading,
  text,
  loadingText,
  className = "",
  disabled = false,
  ...props
}: IProps) =>
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <Glyphicon glyph="refresh" className="spinning" />}
    {!isLoading ? text : loadingText}
  </Button>;

export default LoaderButton;
