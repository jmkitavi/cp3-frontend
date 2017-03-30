import React, { PropTypes } from 'react';
import axios from 'axios';
import { Accordion, AccordionItem } from 'react-sanfona';
import BuckeList from './BucketList';
import Items from './Items';

class BucketListsPage extends React.Component {
    constructor() {
        super();
        this.state = { "pages": [], "bucketlists": [] };
        this.fetch = this.fetch.bind(this);
    }
    componentDidMount() {
        // console.log("component did mount");
        this.fetch();
    }

    fetch() {
        const config = {
            headers: { 'Authorization': localStorage.getItem("Authorization") }
        };
        const url = 'http://127.0.0.1:5000/bucketlists/';

        return axios.get(url, config)
            .then(response => {
                // console.log(response.data.bucketlists);
                this.setState({
                    pages: response.data.pages,
                    bucketlists: response.data.bucketlists
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container">
                <hr />
                <br />
                <BuckeList bucketlists={this.state.bucketlists} />
            </div >
        );

    }
}

export default BucketListsPage;
