import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {UserDetalis} from "../userDetalis/userDetalis";
import {useState} from "react";


export const UserInfo = ({usersList, setUserList}) => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()

    const AddUser = () => {
        setUserList([...usersList,
            {id: Math.floor(Math.random() * 1000), name: name, phone: phone, email: email}]
            )
    }

    const RemoveUser = (e) => {
        setUserList(usersList.filter((el) => {return el.id !== +e.target.id}))
    }

    return(
        <div className={"users"}>
            <h2>Users</h2>
            <div className={"users__add"}>
                <input type="text" placeholder={"Name"} onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder={"Email"} onChange={(e) => setEmail(e.target.value)}/>
                <input type="number" placeholder={"Phone"} onChange={(e) => setPhone(e.target.value)}/>
                <button onClick={AddUser}>Add</button>
            </div>
            <div className={"users__list"}>
            {
                usersList?.map((el) => {
                    return(
                        <div key={el.id} className={"users__list__user"}>
                            <Link to={`/userDetalis/${el.id}`}>
                                {el.name}
                            </Link>
                            <button id={el.id} onClick={RemoveUser}>Remove</button>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

UserInfo.propTypes = {
    usersList: PropTypes.array,
    setUserList: PropTypes.func
}