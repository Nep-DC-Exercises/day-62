import React, { Component } from "react";
import Post from "./Post"
import { getTopStoriesIds } from "../utils/";


class List extends Component {
    state = {
        topIds: []
    };

    async componentDidMount() {
        const response = await getTopStoriesIds();
        const allIds = response.data;
        const topIds = allIds.slice(0, 25)
        this.setState({ topIds });
    }

    render() {
        const { topIds } = this.state;

        return (
            <div>
                <ul>
                    {topIds.map(id => {
                        return (
                            <li key={id}><Post id={id}/></li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default List;
