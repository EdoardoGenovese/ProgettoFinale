import React from 'react';
import { PostList } from '../posts/Posts';
import Api from '../../classes/Api';

export default class CategoryPosts extends PostList {
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
        this.fetchData(newProps.match.params.id);
    }

    componentDidMount() {
        this.fetchData(this.props.match.params.id);
    }
}