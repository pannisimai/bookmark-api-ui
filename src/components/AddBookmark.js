import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class AddBookmark extends Component {
    miniToggle = () => {
        this.props.toggle()
    }
  render() {
    return (
      <React.Fragment>
        <Modal
          isOpen={this.props.addBookmarkModal}
          toggle={this.props.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>this.props.toggle()}>
              Do Something
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
