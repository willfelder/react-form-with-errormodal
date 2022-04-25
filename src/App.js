import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, uAge) => {
    setUsersList((prevState) => {
      return [...prevState, {name: userName, age: uAge, id: Math.random().toString()}]
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
