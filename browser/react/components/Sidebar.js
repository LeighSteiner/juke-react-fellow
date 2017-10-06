import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
           <Link to="/albums">ALBUMS</Link>
           <section>
        <h4 className="menu-item">
          <Link to="/artists">ARTISTS</Link>
        </h4>
      </section>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
