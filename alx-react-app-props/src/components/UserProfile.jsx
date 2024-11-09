import { useContext  } from "react";
import UserContext from "./UserContext";


function UserProfile() {
    const userData = useContext(UserContext);
    console.log(userData);
    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  export default UserProfile;