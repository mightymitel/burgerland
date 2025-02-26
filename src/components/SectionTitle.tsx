import React, { ReactElement } from "react";
import cn from "classnames";

interface SectionTitleProps {
  children: ReactElement<{ className?: string }>;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }): ReactElement => {
  if (!React.isValidElement(children)) {
    throw new Error('SectionTitle children must be a valid React element');
  }

  return React.cloneElement(children, {
    className: cn(children.props.className, "text-3xl lg:text-5xl lg:leading-tight font-bold")
  });
};

export default SectionTitle;
