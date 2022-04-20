import React from "react";
import Api from "../../classes/Api";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        let api = new Api();

        api.categories().then(data => {
            this.setState({
                data: data
            });  
        });
    }

    render(){
        let links = this.state.data.map((item, index) => {
            return (<li key={index}>
                <Link className="dropdown-item" to={`/category/${item.id}`}>{item.name}</Link></li>)
        });

        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to='/'>Blog</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to='/chi-siamo'>Chi siamo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contatti'>Contatti</Link>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cerchi una categoria specifica?
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                {links}
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}