import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="container">
            <h1>Oops! Not Found</h1>
            <Link to='/'>Torna alla Home</Link>
        </div>
    )
}