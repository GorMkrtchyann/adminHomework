import {useParams} from "react-router";


export const UserDetalis = ({usersList}) => {
    const params = useParams()

    const searchedUser = usersList.find((el) => {
        return el.id === +params.id
    })

    return(
        <div className={"user_derails"}>
            <h2>UserDetails</h2>

            <div className={"user_derails__menu"}>
                <p>ID</p>
                <p>Name</p>
                <p>Phone</p>
                <p>Email</p>
            </div>
            {
                <div className={"user_derails__user"}>
                    <p>{searchedUser.id}</p>
                    <p>{searchedUser.name}</p>
                    <p>{searchedUser.phone}</p>
                    <p>{searchedUser.email}</p>
                </div>
            }
        </div>
    )
}