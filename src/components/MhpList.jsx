import React from "react";
import Mhp from "./Mhp";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MhpList(props){
  const mhpIntro = {
    margin: '40px',
    textAlign: 'center',
    backgroundColor: '#7a387a',
    padding: '20px',
    borderRadius: '100px',
    border: '3px solid #ddb0dd',
    fontFamily: 'Arial',
    color: '#fdfdff',
  }
  const itemGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  }
  return (
    <div>
    <p style={mhpIntro}>Below is a list of mental health practitioners local to Portland, Oregon, along with contact details and other useful information.</p>
    <div style={itemGrid}>
    {props.mhpTotal.map((mhp, index) =>
        <Mhp name={mhp.name}
      imgref={mhp.imgref}
      occupation={mhp.occupation}
      address={mhp.address}
      insurance={mhp.insurance}
      accepting={mhp.accepting}
      email={mhp.email}
      phone={mhp.phone}
      bio={mhp.bio}
      link={mhp.link}
      key={index}
      />
    )}
    </div>
    </div>
  );
}

MhpList.propTypes = {
  mhpTotal: PropTypes.array
};

export default MhpList;
