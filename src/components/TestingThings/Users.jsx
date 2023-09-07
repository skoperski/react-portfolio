import axios from "axios";
import { useEffect, useState } from "react";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div className="name">Users:</div>
      <div className={isLoading ? "loader" : "hide-loader"}></div>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="listItem">
            {user.name} from {user.address.city}
          </li>
        ))}
      </ul>
    </>
  );
};
