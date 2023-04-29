import {useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";


export const UserInfo = ({usersList}) => {

    return(
        <div className={"users"}>
            <h2>Users</h2>
            <div className={"users__list"}>
            {
                usersList?.map((el) => {
                    return(<Link to={`/userDetalis/${el.id}`} key={el.id}>
                        {el.name}
                    </Link>)
                })
            }
            </div>
        </div>
    )
}