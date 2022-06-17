import React from "react";

const MyParagraph = props=>{
    return <p>{props.children}</p>
}

export default React.memo(MyParagraph)