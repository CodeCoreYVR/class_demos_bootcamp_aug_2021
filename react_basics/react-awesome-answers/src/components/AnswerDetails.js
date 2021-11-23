import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import AuthContext from '../context/auth-context';

const AnswerDetails = (props) => {
    const { body, author_full_name, created_at, id } = props;
    const ctx = useContext(AuthContext)
    return (
        <div>
            <p>
                {body} <br />
                By {author_full_name}
            </p>
            <p>
                Answered {created_at.toLocaleString()}
            </p>
            {
                (ctx.user && ctx.user.is_admin) ? <button onClick={() => props.deleteAnswer(id)}>Delete</button> : null
            }
            {
                ctx.user ?
                    <Link to={`/gift/${id}`}>Gift This User</Link>
                    : null
            }
        </div>
    )
}

export default AnswerDetails;