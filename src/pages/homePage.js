import React from 'react';
import Booklist from '../components/booklist';
import Menu from '../menu';

  function HomePage() {
    return (
      <div>
        <Menu/>
        <hr/>
        <Booklist/>
      </div>
    )
  }

export default HomePage;