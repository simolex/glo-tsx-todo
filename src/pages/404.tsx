import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <div className="container">
            <h1>Not Found (HTTP 404)</h1>
            <Link to='/'>Вернуться на главную страницу</Link>
        </div>
    )
}