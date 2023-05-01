import {Route, Routes} from "react-router";
import {Landing} from "./pages/landing/landing";
import {Login} from "./pages/login/login";
import {UserInfo} from "./pages/user/userInfo";
import {UserDetalis} from "./pages/userDetalis/userDetalis";
import {useState} from "react";

const usersList = [
    {id: Math.floor(Math.random() * 1000), name: "John", phone: "012133545", email: "john@mail.ru"},
    {id: Math.floor(Math.random() * 1000), name: "Mike", phone: "016633545", email: "mike@mail.ru"},
    {id: Math.floor(Math.random() * 1000), name: "Ellison", phone: "012144445", email: "elison@mail.ru"},
    {id: Math.floor(Math.random() * 1000), name: "Jay", phone: "034454545", email: "jay@mail.ru"}
]

function App() {

    const [userList, setUserList] = useState(usersList)

  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Landing/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/user"} element={<UserInfo usersList={userList} setUserList={setUserList}/>}/>
        <Route path={"/userDetalis/:id"} element={<UserDetalis usersList={userList}/>}/>
        <Route path={"*"} element={<Landing/>}/>
      </Routes>
    </div>
  );
}

export default App;
