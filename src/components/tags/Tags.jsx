import React from "react";
import { Link } from "react-router-dom";
import Api from "../../classes/Api";

class Tags extends React.Component{
    constructor() {
        super();
        this.state = {
            tags: []
        };
    }

    componentDidMount() {
        let api = new Api();

        api.tags().then(data => {
            console.log(data)
            this.setState({
                tags: data
            }); 
        });
    }

    render(){
        let tags = this.state.tags.map((tag, index) => {
            return (
                <div className="btn-group" role="group" aria-label="Basic example" key={index}>
                    <Link to={`/tag/${tag.id}`} className="btn btn-light">{tag.name}</Link>
                </div>
            )
        });

        return(
            <div>
                {tags}
            </div>
        )
    }
}
export {Tags}