import React from "react";

const Tab = props => (
    <div>
        <span>{props.order + 1}</span>
        <span>{props.id}</span>
        <span>{props.title}</span>
    </div>
);

export default Tab;