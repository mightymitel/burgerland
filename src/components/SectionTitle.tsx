import React from "react";
import cn from "classnames";

interface SectionTitleProps {
  children: React.ReactElement<any>;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return React.cloneElement(children as React.ReactElement<any>, {
    className: cn([children.props.className, "text-3xl lg:text-5xl lg:leading-tight font-bold"])
  });
};

export default SectionTitle;
