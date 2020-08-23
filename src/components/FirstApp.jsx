import React from "react";
import PropTypes from "prop-types";

export const FirstApp = ({ subTitle, title }) => (
  <>
    <h1>{title}</h1>
    <h2>{subTitle}</h2>
  </>
);

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  subTitle: "I'm a subtitle",
};
