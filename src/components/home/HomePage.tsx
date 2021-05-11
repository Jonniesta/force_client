import React from 'react';
import { Container} from 'reactstrap';


import Auth from '../auth/Auth';

type HomePageProps = {
  updateToken?: any,
  userId: number;
}

class HomePage extends React.Component<HomePageProps, {}> {

  render() {
    return (
      <div id="force">
        <br/><br/><br/><br/><br/>
        <Container>
          <div className="join">
            <h1 className="welcome">Join The</h1>
            <h1 className="welcome1">FORCE</h1>

            </div>
        </Container>
        <br/><br/><br/><br/>
        <br/>
        <br/>
        <Container>
          <div id="aboutus">
            <br/>
            <br/>
            <br/>
            <br/>
          <div className="aboutus">
          <h1>About us</h1>
          <a href="http://youtube.com">Jose</a>
          <p>If you're reading this, hello. We're no strangers to love. You know the rules and so do I. A full commitment's what I'm thinking of
You wouldn't get this from any other guy. I just wanna tell you how I'm feeling. Gotta make you understand.Never gonna give you up. Never gonna 
let you down. Never gonna run around and desert you. Never gonna make you cry. Never gonna say goodbye. Never gonna tell a lie and hurt you
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet eius sit magnam eligendi in temporibus odit deleniti debitis quia 
culpa molestias architecto illo inventore assumenda, repudiandae earum dignissimos sapiente?Lorem ipsum dolor sit amet consectetur adipisicing 
elit. Autem, harum, libero iusto sed praesentium ullam laborum porro accusamus dignissimos deleniti atque consectetur optio qui ea natus debitis, 
cupiditate eum magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias obcaecati voluptate unde magnam debitis recusandae ut 
voluptatem sapiente vitae. Quo et iusto officiis magnam similique delectus voluptates maxime quod vero?
          </p>
          </div>
          </div>
        </Container>
        <br/>
        <br/><br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div id="auth">
      <Auth 
        updateToken={this.props.updateToken}
        userId={this.props.userId}
        />
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
    );
  }
}

export default HomePage;