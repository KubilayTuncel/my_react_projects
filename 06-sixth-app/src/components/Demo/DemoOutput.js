import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  const text = "This is magic! Can you believe that? Do not believe, because magic is not true. It is just a legerdemain! If you believe magic, you do not wanna learn thing which is behind of magic. You just wanna to be tricked."
  return <MyParagraph>{props.show ? text : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);
