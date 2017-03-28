import React, { PropTypes } from 'react';
import axios from 'axios';
// import request from 'superagent';
import { Accordion, AccordionItem } from 'react-sanfona';



class BucketListsPage extends React.Component {
    constructor() {
        super();
        this.state = {"new" :[],"bc": []};
        this.fetch = this.fetch.bind(this);
    }
    componentDidMount() {
        // console.log("component did mount");
        this.fetch();
    }

  fetch() {
    const config  = {
            headers: {'Authorization': localStorage.getItem("Authorization")}};
        const url = 'http://127.0.0.1:5000/bucketlists/';

        axios.get(url, config)
        .then(response => {
        console.log(response.data.bucketlists);
            
            this.setState({
                pages: response.data.pages,
                new: response.data.bucketlists
            });
            
        })
        .catch(error => {
            console.log(error);
        });
  }

    render() {
        return (
            <div className="jumbotron">
            <Accordion className="list-group">
				{this.state.new.map(function(bucket) {
					return (
						<AccordionItem title={bucket.title} key={bucket.bucketlist_id} className="list-group-item" expandedClassName="active">
							<div>
								{bucket.bucketlist_id}
							</div>
						</AccordionItem>
					);
				})}
			</Accordion>
            </div>
        );

    }
}

export default BucketListsPage;