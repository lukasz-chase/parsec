import React from "react";
//styling
import styled from "styled-components";
//material ui
import Switch from "@material-ui/core/Switch";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const DarkMode = ({ darkModeState, setDarkModeState }) => {
  return (
    <DarkModeComponent>
      <div className="switch">
        <Switch
          checked={darkModeState}
          onChange={() => setDarkModeState(!darkModeState)}
          color="secondary"
          checkedIcon={<Brightness3Icon color="primary" />}
          icon={<WbSunnyIcon color="primary" />}
        />
      </div>
    </DarkModeComponent>
  );
};

const DarkModeComponent = styled.div`
  .switch {
    position: absolute;
    z-index: 10;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    padding: 1.5rem;
  }
`;

export default DarkMode;
