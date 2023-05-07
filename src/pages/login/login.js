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

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <div className={"login"}>
            <h2>Login</h2>
            <form className={"login__inputs"} onSubmit={handleSubmit}>
                <input type="text" placeholder={"UserName"} onChange={changeName} required/>
                <input type="password" placeholder={"Password"} onChange={changePassword} required/>
                <button onClick={login}>Login</button>
            </form>
        </div>
    )
}