import React, { Component } from "react";
import { API, Storage } from "aws-amplify";
import config from '../../config';
import { s3Upload } from '../../libs/awsLib';
import './index.css';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import LoaderButton from '../../components/LoaderButton';

class NoteNew extends Component {
  constructor(props) {
    super(props);

    this.file = null;

    this.state = {
      isLoading: null,
      content: "",
      attachmentURL: null
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    let attachment;

    if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
      alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE/1000000} MB.`);
      return;
    }

    this.setState({ isLoading: true });

    try {
      if (this.file) {
        attachment = await s3Upload(this.file);
      }

      await this.saveNote({
        content: this.state.content,
        attachment: attachment || this.state.note.attachment
      })

      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  } 

  saveNote(note) {
    API.post("notes", "/notes", { body: { attachment: note.attachment, content: note.content }});
  }

  handleFileChange = event => {
    this.file = event.target.files[0];
  }

  validateForm() {
    return this.state.content.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (
      <div className="NoteNew">
        <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="content">
              <FormControl
                onChange={this.handleChange}
                value={this.state.content}
                componentClass="textarea"
                placeholder="My new note content"
              />
            </FormGroup>
            <FormGroup controlId="file">
                <ControlLabel>Attachment</ControlLabel>
                <FormControl onChange={this.handleFileChange} type="file" />
            </FormGroup>
            <LoaderButton
              block
              bsStyle="primary"
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
              isLoading={this.state.isLoading}
              text="Create"
              loadingText="Saving…"
            />
          </form>
        
      </div>
    );
  }
}

export default NoteNew