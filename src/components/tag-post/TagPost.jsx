import { PostList } from "../posts/Posts";
import Api from "../../classes/Api";
import withRouter from "../../functions/withRouter";

class TagPost extends PostList{
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    fetchData(tagId){
        let api = new Api();

        api.posts({
            tag: tagId
        }).then(data => {
            this.setState({
                posts: data
            });
        });
    }

    componentDidUpdate(newProps) {
        const { id } = this.props.router.params
        if(this.props.router.params !== newProps.router.params){
            this.fetchData(id);
        }
    }

    componentDidMount() {
        const { id } = this.props.router.params
        this.fetchData(id);
    }
}

export default withRouter(TagPost)