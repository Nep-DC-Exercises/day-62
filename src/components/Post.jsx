import React, { Component } from 'react'
import {getAStory} from '../utils'

class Post extends Component {

    state = {
        postData: {}
    }

    async componentDidMount() {
        const idFromParent = this.props.id
        const response = await getAStory(idFromParent);
        const postData = response.data;
        this.setState({ postData });
    }

    render() {
        return (
            <div>
                <h1>{this.state.postData.by}</h1>
            </div>
        )
    }
}

export default Post;