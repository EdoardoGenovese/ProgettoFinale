import React from 'react';
import { PostList } from '../posts/Posts';
import Api from '../../classes/Api';
import withRouter from '../../functions/withRouter';

class CategoryPosts extends PostList {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    fetchData(categoryId) {
        let api = new Api();

        api.posts({
            category: categoryId
        }).then(data => {
            this.setState({
                posts: data
            });
        });
    }

    componentDidUpdate(newProps) {
        const { id } = newProps.router.params
        this.fetchData(id);
    }

    componentDidMount() {
        const { id } = this.props.router.params
        this.fetchData(id);
    }
}
export default withRouter(CategoryPosts)