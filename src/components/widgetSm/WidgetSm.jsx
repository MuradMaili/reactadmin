import "./widgetsm.css";
import {Visibility} from '@mui/icons-material'
const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">

        <li className="widgetSmListItem">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEjND4KPH-6vA/profile-displayphoto-shrink_800_800/0/1663421357275?e=1671062400&v=beta&t=6-oCFL-keaxlZqAq9-p3XkQXD3JOg6k30DIaBfHGqps"
             alt="" className="widgetSmImg" />
             <div className="widgetSmUser">
                <span className="widgetSmUsername">Murad</span>
                <span className="widgetSmUserTitle">MERN STACK DEVELOPER</span>
             </div>
             <button className="widgetSmButton">
                <Visibility className="vidgetSmIcon"/>
                Display
             </button>
        </li>

        <li className="widgetSmListItem">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEjND4KPH-6vA/profile-displayphoto-shrink_800_800/0/1663421357275?e=1671062400&v=beta&t=6-oCFL-keaxlZqAq9-p3XkQXD3JOg6k30DIaBfHGqps"
             alt="" className="widgetSmImg" />
             <div className="widgetSmUser">
                <span className="widgetSmUsername">Murad</span>
                <span className="widgetSmUserTitle">MERN STACK DEVELOPER</span>
             </div>
             <button className="widgetSmButton">
                <Visibility className="vidgetSmIcon"/>
                Display
             </button>
        </li>

        <li className="widgetSmListItem">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEjND4KPH-6vA/profile-displayphoto-shrink_800_800/0/1663421357275?e=1671062400&v=beta&t=6-oCFL-keaxlZqAq9-p3XkQXD3JOg6k30DIaBfHGqps"
             alt="" className="widgetSmImg" />
             <div className="widgetSmUser">
                <span className="widgetSmUsername">Murad</span>
                <span className="widgetSmUserTitle">MERN STACK DEVELOPER</span>
             </div>
             <button className="widgetSmButton">
                <Visibility className="vidgetSmIcon"/>
                Display
             </button>
        </li>

      </ul>
    </div>
  );
};

export default WidgetSm;
