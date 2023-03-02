import React from "react";

function Nav({lists}){
    // const {lists} = props;
    return(
      <ul>
        {lists.map(list=><li key={list.id}>{list.title}</li>)}
        {/* <li key="1">menu1</li>,
        <li key="1">menu1</li>,
        <li key="1">menu1</li>,
        <li key="1">menu1</li> */}
      </ul>
    )
  }

  export default Nav;