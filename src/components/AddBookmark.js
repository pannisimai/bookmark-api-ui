import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
class AddBookmark extends Component {
  state = {
    bookmarkTitle: "",
    bookmarkUrl: "",
    bookmarkDescription: ""
  };

  miniToggle = () => {
    this.props.toggle();
  };
  onChange = e => {
    this.setState({
      // will take the target element property name and use it as the object key
      [e.target.name]: e.target.value
    });
  };

  submitBookmarkDetails = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.createNewBookmark(this.state);
    this.miniToggle();
  };

  render() {
    return (
      <React.Fragment>
        <Modal
          isOpen={this.props.addBookmarkModal}
          toggle={this.props.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggle}>
            Add your bookmark!
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="bookmarkTitle">Title</Label>
                <Input
                  type="text"
                  name="bookmarkTitle"
                  id="bookmarkTitle"
                  placeholder="Bookmark title"
                  onChange={this.onChange}
                  value={this.state.bookmarkTitle}
                />
              </FormGroup>
              <FormGroup>
                <Label for="bookmarkDescription">Describe me!</Label>
                <Input
                  type="text"
                  name="bookmarkDescription"
                  id="exampleAddress2"
                  placeholder="Write a bookmark description"
                  onChange={this.onChange}
                  value={this.state.bookmarkDescription}
                />
              </FormGroup>
              <FormGroup>
                <Label for="bookmarkUrl">URL</Label>
                <Input
                  type="text"
                  name="bookmarkUrl"
                  id="exampleAddress"
                  placeholder="Paste your URL here"
                  onChange={this.onChange}
                  value={this.state.bookmarkUrl}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.submitBookmarkDetails}>
              Add bookmark
            </Button>{" "}
            <Button color="secondary" onClick={this.miniToggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default AddBookmark;
