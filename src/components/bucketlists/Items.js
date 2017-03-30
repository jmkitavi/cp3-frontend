import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import axios from 'axios';
import { Button, ButtonGroup, Modal, Checkbox } from 'react-bootstrap';
import Toggle from 'material-ui/Toggle';
import LinearProgress from 'material-ui/LinearProgress';

var tcount = 0;

class Items extends React.Component {
    constructor() {
        super();
        this.state = { "showModal": false };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
    close() {
        this.setState({ "showModal": false });
    }
    open() {
        this.setState({ "showModal": true });
    }
    filter(props) {

    }
    render() {
        // console.log(this.state.showModal);
        console.log(this.props.bucket);
        return (
            <div className="float-right">
                <Button
                    bsStyle="info"
                    bsSize="small"
                    onClick={this.open}>
                    View Items
                </Button>
                <ButtonGroup pullRight>
                    <Button
                        bsStyle="warning"
                        bsSize="small"
                        onClick={this.open}>
                        Edit
                    </Button>
                    <Button
                        bsStyle="danger"
                        bsSize="small"
                        onClick={this.open}>
                        Delete
                    </Button>
                </ButtonGroup>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.bucket.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.bucket.items.map(function (items) {
                            console.log(items.status ? 't' : 'g')
                            return (
                                <div key={items.item_id} >
                                    <Toggle
                                        label={items.item_name}
                                        labelPosition="right"
                                        defaultToggled={items.status}
                                    />
                                </div>
                            );
                        }
                        )
                        }
                        <LinearProgress
                            mode="determinate"
                            value={tcount}
                            max={this.props.bucket.items.length}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div >
        );
    }
}

export default Items;

Items.PropTypes = {
    bucket: PropTypes.object.isRequired
};
Items.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};
