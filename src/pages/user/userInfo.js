import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {UserDetalis} from "../userDetalis/userDetalis";


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

UserInfo.propTypes = {
    usersList: PropTypes.array
}