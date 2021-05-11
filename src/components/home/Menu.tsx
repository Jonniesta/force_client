import React from 'react';
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Card, Col } from 'reactstrap';

import Trainer from './trainerform'
import Extra from './Extra';






type postProps = {
  sessionToken?: any;
  userId: number;
  fetchHelpPosts: any;
}

class Menu extends React.Component<postProps, {}> {
  constructor(props: postProps) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    if (!this.props.sessionToken) {
      return <Redirect to="/" />
    } else {
      return <Redirect to="/menu" />
    }
  }


  render() {
    return (
      <div>
        <Router>
          <Switch>


          <Route exact path='/menu'>
              <br />
              <Col>
                <Card className="menuCard">
                  
                </Card>

              </Col>
            </Route>

            <Route path='/menu/extra'>
              <Extra
                sessionToken={this.props.sessionToken} />
            </Route>
            <Route path='/menu/trainerform'>
              <Trainer
              sessionToken={this.props.sessionToken}
              userId={this.props.userId}
                 />
            </Route>
            

          </Switch>
        </Router>
      </div>

    )
  }
}

export default Menu;