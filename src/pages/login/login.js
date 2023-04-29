import {useState} from "react";
import {useNavigate} from "react-router";


export const Login = () => {
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    let navigation = useNavigate()

    const changeName = (e) => {
        setUserName(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const login = () => {
        if (userName === "admin" && password === "admin"){
            navigation('/user')
        }else{
            alert("Its wrong")
        }
    }
    return(
        <div className={"login"}>
            <h2>Login</h2>
            <div className={"login__inputs"}>
                <input type="text" placeholder={"UserName"} onChange={changeName}/>
                <input type="password" placeholder={"Password"} onChange={changePassword}/>
                <button onClick={login}>Login</button>
            </div>
        </div>
    )
}