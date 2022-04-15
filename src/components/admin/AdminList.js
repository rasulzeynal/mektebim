import { useState,useEffect } from "react";
import axios from "axios";

 const AdminList = () =>  {

  const [admin,setAdmin] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3002/data")
    .then ((users) => {
    const user=users.data.filter((data) => data.position === "Admin")
       setAdmin(user)
    })
  },[]);

  console.log(admin)
    
    return (
        <div className="card_item" >
        {admin.map((user) => {
        return (
        <div key={user.id} className="card_inner">
            <img alt="" />
            <div className="userName">{user.name}</div>
            <div className="userUrl">url</div>
            <div className="detail-box">

                <div className="gitDetail"><span>Articles</span>23</div>
                <div className="gitDetail"><span>Following</span>45</div>
                <div className="gitDetail"><span>Followers</span>11</div>
            </div>
            <button className="seeMore">See More</button>
        </div>

)
      })} </div>
    )
  }
export default AdminList;