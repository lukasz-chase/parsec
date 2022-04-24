import React, { useContext } from "react";
//components
import Character from "../components/character";
//icon
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//material ui
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
//context
import modeContext from "../modeContext";

const EpisodeCard = ({ id, episode, name, airDate, characters }) => {
  const { darkModeState } = useContext(modeContext);
  return (
    <Accordion
      key={id}
      className="accordion"
      style={{
        backgroundColor: darkModeState
          ? "rgba(0, 0, 0, 0.8)"
          : "rgba(0, 0, 0, 0.5)",
        color: darkModeState ? "rgba(255, 255, 255, 0.568)" : "white",
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
        <span className="episodeNumber">{episode}</span>
        {name}
      </AccordionSummary>
      <AccordionDetails className="episodes-info">
        <div className="date">
          Air Date: <span>{airDate}</span>
        </div>
        <div className="characters">
          <div className="character-header">
            Characters that performed in this episode:
          </div>
          {characters
            .map((character) => (
              <span key={character.split("/", 6)[5]}>
                <Character id={character.split("/", 6)[5]} />
              </span>
            ))
            .reduce((prev, curr) => [prev, ", ", curr])}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default EpisodeCard;
