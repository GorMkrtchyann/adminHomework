import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import {useCallback, useMemo} from "react";
import {useNavigate} from "react-router";


export const UserInfo = ({usersList, setUserList}) => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    const onSubmit = useCallback((data) => {
        setUserList([...usersList,
            {id: Math.floor(Math.random() * 1000), name: data.name, phone: data.phone, email: data.email}]
        )
    }, [])


    const RemoveUser = (e) => {
        e.stopPropagation()
        setUserList(usersList.filter((el) => {return el.id !== +e.target.id}))
    }

    return(
        <div className={"users"}>
            <h2>Users</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={"users__add"}>
                <input type="text" placeholder={"Name"} {...register("name", {required: true})} />
                <input type="email" placeholder={"Email"} {...register("email", {required: true})} />
                <input type="number" placeholder={"Phone"} {...register("phone", {required: true})} />

                <button>Add</button>
            </form>
            <div className={"users__list"}>
            {
                usersList?.map((el) => {
                    return(
                        <div onClick={() => navigate(`/userDetalis/${el.id}`)} key={el.id} className={"users__list__user"}>
                            {el.name}
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