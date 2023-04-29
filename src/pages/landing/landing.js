import {Link} from "react-router-dom";


export const Landing = () => {
    return(
        <div className={"landing"}>
            <h2>Landing</h2>

            <Link to={"/login"}>
                <button>Login</button>
            </Link>
        </div>
    )
}