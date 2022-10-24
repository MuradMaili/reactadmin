// import React from "react";
// import "./topbar.css";
// import { NotificationsNone, Language, Settings } from "@mui/icons-material";
// const Topbar = () => {
//   return (
//     <div className="topbar">
//       <div className="topbarWrapper">
//         <div className="topLeft">
//           <span className="logo">MMADMIN</span>
//         </div>
//         <div className="topRight">
//           <div className="topbarIconContainer">
//             <NotificationsNone />
//             <span className="topIconBadge">2</span>
//           </div>

//           <div className="topbarIconContainer">
//             <Language />
//             <span className="topIconBadge">2</span>
//           </div>

//           <div className="topbarIconContainer">
//             <Settings />
//           </div>
//           <img
//             src="https://media-exp1.licdn.com/dms/image/C4D03AQEjND4KPH-6vA/profile-displayphoto-shrink_800_800/0/1663421357275?e=1671062400&v=beta&t=6-oCFL-keaxlZqAq9-p3XkQXD3JOg6k30DIaBfHGqps"
//             alt=""
//             className="topAvatar"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;
import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">MMSHOP</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEjND4KPH-6vA/profile-displayphoto-shrink_800_800/0/1663421357275?e=1671062400&v=beta&t=6-oCFL-keaxlZqAq9-p3XkQXD3JOg6k30DIaBfHGqps" 
          alt=""
          className="topAvatar"/>
        </div>
      </div>
    </div>
  );
}