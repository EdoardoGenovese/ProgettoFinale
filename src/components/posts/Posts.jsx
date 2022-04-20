import React from 'react';
import Api from '../../classes/Api';

class PostList extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        let api = new Api();

        api.posts().then(data => {
            this.setState({
                posts: data
            }); 
        });
    }

    render() {
        let posts = this.state.posts.map((post, index) => 
            <div key={index} className='container'>
                <h3>{post.title.rendered}</h3>
                <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
                <small>by {post._embedded.author[0].name}</small>
            </div>
            );

        return (
            <div>{posts}</div>
        );
    }
}

export {PostList};