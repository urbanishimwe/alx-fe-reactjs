import { useContext  } from "react";
import { UserContext } from "../context/UserContext";


function UserDetails() {
    const userData = useContext(UserContext);
    console.log(userData);
    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  export default UserDetails;