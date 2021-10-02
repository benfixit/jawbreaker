import { FC, MouseEventHandler, ReactNode, createElement } from "react";
import { className } from "utils";

import styles from "./Button.module.less";

interface ButtonProps {
  /**
   * Shape of the button
   */
  shape?: "circle" | "round";
  /**
   * How large should the button be?
   */
  size?: "large" | "middle" | "small";
  /**
   * The content of the button
   */
  children: ReactNode;
  /**
   * Option to fit button width to its parent width
   */
  block?: boolean;
  /**
   * Set the danger status of button
   */
  danger?: boolean;
  /**
   * Disabled state of button
   */
  disabled?: boolean;
  /**
   * Make background transparent and invert text and border colors
   */
  ghost?: boolean;
  /**
   * Redirect url of link button
   */
  href?: string;
  /**
   * Same as target attribute of a, works when href is specified
   */
  target?: string;
  /**
   * Can be set to primary ghost dashed link text default
   */
  type?: "primary" | "ghost" | "dashed" | "link" | "text" | "default";
  /**
   * Set the icon component of button
   */
  icon?: ReactNode;
  /**
   * Set the loading status of button
   */
  loading?: boolean | { delay: number };
  /**
   * Set the original html type of button
   */
  htmlType?: "button" | "submit" | "reset";
  /**
   * Set the handler to handle click event
   */
  onClick?: MouseEventHandler<HTMLElement>;
}

/**
 * Button Component
 * @todo Loading props
 * @param param0
 * @returns
 */

const Button: FC<ButtonProps> = ({
  shape,
  size = "middle",
  children,
  block = false,
  danger = false,
  disabled = false,
  ghost = false,
  href = "",
  htmlType = "button",
  type = "default",
  icon = null,
  loading = false,
  ...rest
}) => {
  const element = href ? "a" : "button";
  const classes = className([
    styles.main,
    styles[shape!],
    styles[size!],
    styles[type],
    block ? styles.block : null,
    danger ? styles.danger : null,
    disabled ? styles.disabled : null,
    ghost ? styles.ghost : null,
  ]);
  return createElement(
    element,
    {
      className: classes,
      disabled: disabled,
      type: !href && htmlType,
      href,
      ...rest,
    },
    <>
      {/* {loading && <span>Loading</span>} */}
      {icon}
      {children}
    </>
  );
};

export default Button;
