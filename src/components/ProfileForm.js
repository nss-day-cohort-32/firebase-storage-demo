import React from 'react';
import { Header, Form, Grid, Button } from 'semantic-ui-react';
import { saveProfile } from '../APIManager/profiles';

class ProfileForm extends React.Component {
  state = {
    username: '',
    aboutMe: '',
    photo: null
  };

  submitForm = () => {
    console.log('Do Stuff');
  }

  render() {
    return (
      <div className="image-form--container">
        <Header>
          Add a Profile
        </Header>
        <Grid>
          <Grid.Row centered>
            <Grid.Column largeScreen={4} computer={6} tablet={8} mobile={12}>
              <Form onSubmit={this.submitForm}>
                <Form.Field
                  control="input"
                  type="text"
                  label="Username"
                  onChange={(e) => this.setState({ username: e.target.value })}
                  placeholder="Username" />
                <Form.Field
                  control="input"
                  type="text"
                  label="About"
                  onChange={(e) => this.setState({ aboutMe: e.target.value })}
                  placeholder="About me" />
                <Form.Field
                  control="input"
                  type="file"
                  label="Photo"
                  onChange={(e) => this.setState({ photo: e.target.files[0] })} />
                <Button type="submit" content="Save" color="purple" />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default ProfileForm;