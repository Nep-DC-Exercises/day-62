import React, { Component } from "react";
import { getAnItem } from "../utils";
import Moment from "react-moment";
// {
//     "by" : "dhouston",
//     "descendants" : 71,
//     "id" : 8863,
//     "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
//     "score" : 111,
//     "time" : 1175714200,
//     "title" : "My YC app: Dropbox - Throw away your USB drive",
//     "type" : "story",
//     "url" : "http://www.getdropbox.com/u/2/screencast.html"
//   }

class Post extends Component {
    state = {
        postData: {}
    };

    async componentDidMount() {
        const idFromParent = this.props.id;
        const response = await getAnItem(idFromParent);
        const postData = response.data;
        this.setState({ postData });
    }

    render() {
        const { postData } = this.state;
        const dateToFormat = postData.time;

        return (
            <div>
                <p>
                    {postData.title} (<a href={postData.url}>Link</a> )
                </p>
                <p>
                    <Moment fromNow unix>
                        {dateToFormat}
                    </Moment>
                </p>
                <p>
                    {postData.score} points by {postData.by}
                </p>
                <p><a href={'/comment/' + postData.id}>See more comments</a></p>
            </div>
        );
    }
}

export default Post;
