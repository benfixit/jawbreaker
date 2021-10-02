import { FC } from "react";
import { ReactComponent as Home } from "./svgs/home.svg";
import styles from "./Icon.module.less";

type IconProps = {
  component: typeof Home;
  className?: string;
};

const Icon: FC<IconProps> = ({ component: Component, ...rest }: IconProps) => {
  return (
    <span className={styles.Wrapper}>
      <Component {...rest} />
    </span>
  );
};

export default Icon;
