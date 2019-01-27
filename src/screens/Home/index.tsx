import React, { Component } from 'react';
import { API } from 'aws-amplify';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PageHeader, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { userHasAuthenticated } from '../../actions/authenticate';
import "./index.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      notes: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {
      const notes = await this.notes();
      this.setState({ notes });
    } catch(e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  notes() {
    return API.get("notes", "/notes");
  }

  renderNotesList(notes) {
    return [{}].concat(notes).map(
      (note, i) =>
        i !== 0
          ? <LinkContainer
              key={note.noteId}
              to={`/notes/${note.noteId}`}
            >
              <ListGroupItem header={note.content.trim().split("\n")[0]}>
                {"Created: " + new Date(note.createdAt).toLocaleString()}
              </ListGroupItem>
            </LinkContainer>
          : <LinkContainer
              key="new"
              to="/notes/new"
            >
              <ListGroupItem>
                <h4>
                  <b>{"\uFF0B"}</b> Create a new note
                </h4>
              </ListGroupItem>
            </LinkContainer>
    );
}

  renderLander() {
    return (
      <div className="lander">
        <h1>CodeNote</h1>
        <p>A simple note taking app by me</p>
      </div>
    );
  }

  renderNotes() {
    return(
      <div className="notes">
        <PageHeader>All notes</PageHeader>
        <ListGroup>
          {!this.state.isLoading && this.renderNotesList(this.state.notes)}
        </ListGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderNotes() : this.renderLander()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authenticate.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    userHasAuthenticated,
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
