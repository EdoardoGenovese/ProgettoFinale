import React from "react";
import Api from "../../classes/Api";
import withRouter from "../../functions/withRouter";

class Post extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: ''
        };
    }

    componentDidMount() {
        let api = new Api();
        let { id } = this.props.router.params

        api.posts({
            id: id
        }).then(data => {
            this.setState({
                title: data.title.rendered,
                content: data.content.rendered
            });
        });
    }

    render() {
        let post = this.state;

        return (
            <div className="container">
                <h2>{post.title}</h2>
                <div dangerouslySetInnerHTML={{__html: post.content}} />
            </div>
        );
    }
}

export default withRouter(Post)