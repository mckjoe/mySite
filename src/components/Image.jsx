import React from "react";
import PropTypes from "prop-types";

function Image(props){
  return (
    <div>
      <img className="margin-sides" src={props.image} alt="nature scene" />
    </div>
  );
}

Image.propTypes = {
  path: PropTypes.string
}

export default Image;
