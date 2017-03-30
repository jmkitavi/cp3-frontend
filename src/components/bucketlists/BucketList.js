import React, { PropTypes } from 'react';
import axios from 'axios';
import { Accordion, AccordionItem } from 'react-sanfona';
import Items from './Items';

export default function BucketList(props) {
    // console.log(props.bucketlists[0].items.length)
    return (
        <Accordion className="list-group" >
            {props.bucketlists.map(function (bucket) {
                // console.log(bucket.title)
                return (
                    <AccordionItem title={bucket.title} key={bucket.bucketlist_id} className="list-group-item" expandedClassName="active text-center">
                        <div className="text-justify">
                            <hr />
                            <div>
                                Description: {bucket.description}
                                <br />
                                Date Created: {bucket.date_created}
                                <br />
                                Items: {bucket.items.length}
                                <Items bucket={bucket} />
                            </div>
                            <br />
                        </div>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
}

BucketList.propTypes = {
    bucketlists: PropTypes.array.isRequired
};
