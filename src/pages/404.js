import React from 'react';

class NotFoundPage extends React.Component {
  componentDidMount() {
    console.log('1');
    if (window.location.pathname.indexOf('/&') === 0) {
      console.log('2');
      window.location.href = window.location.href.replace('/&', '/?');
    }
  }


  render() {
    return (
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist!</p>
      </div>
    );
  }
}


export default NotFoundPage;
