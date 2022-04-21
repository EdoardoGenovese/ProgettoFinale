import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="container text-center">
            <h1>Oops! Not Found</h1>
            <Link to='/'>Torna alla Home</Link>
        </div>
    )
}