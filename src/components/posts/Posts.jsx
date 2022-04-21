import React from 'react';
import Api from '../../classes/Api';
import { Link } from 'react-router-dom';
import { Tags } from '../tags/Tags';

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
                <Link to={`/post/${post.id}`} className="no-link" key={index}>
                    <h3>{post.title.rendered}</h3>
                    <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                    <span className='h6'>di {post._embedded.author[0].name}</span>
                </Link>);

        return (
            <div className='container'>
                <div>
                    <h3>Cerchi un tag?</h3>
                    <Tags />
                </div>
                {posts}
            </div>
        );
    }
}

export {PostList};