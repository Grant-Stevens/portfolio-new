import React, { ComponentProps, ReactNode } from "react";
import "./pageTemplate.scss";
import NavBar from "../../organisms/navBar/navBar";

interface IPageTemplateProps extends ComponentProps<"div"> {
  children: ReactNode;
}

const PageTemplate = (props: IPageTemplateProps) => {
  return (
    <div className={"page"} {...props}>
      <section className={"page-header"}>
        <NavBar />
      </section>
      <section className={"page-content"}>{props.children}</section>
    </div>
  );
};

export default PageTemplate;
