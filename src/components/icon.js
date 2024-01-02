import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa"; // fa--> indicates special folder ie. react-icons contains lot of icons folder or library, in order to reduce the size of dependencies in the project, /fa is used which fetches the icons from front-awesome only

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="icons" />;

    case "cross":
      return <FaTimes className="icons" />;

    default:
      return <FaPen className="icons" />;
  }
};

export default Icon;
