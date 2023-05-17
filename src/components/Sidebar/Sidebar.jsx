import React, { useState } from "react";
import "./Sidebar.css";
import {SidebarData} from "../../Data/Data";

function Sidebar() {
  const[selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">

      <div className="logo">
        <span>Board.</span>
      </div>

      <div className="menu">
        {SidebarData.map((item,index)=>{
          return(
            <div className={selected===index?'menuItem active': "menuItem"}
            key={index}
            onClick={()=>setSelected(index)}
            >
              <item.icon/>
              <span>
               {item.heading}
              </span>
            </div>
          );
        })
        }

        <div className="menuItem">
          <p>Help</p>
          <p>Contact us</p>
        </div>
       </div>

    </div>
  );
}

export default Sidebar;
