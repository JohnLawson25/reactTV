import EpisodeDetails from "../episodes/EpisodeDetails";
import EpisodeList from "../episodes/EpisodeList";
import { useState } from "react";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({show}) {
  const [selectedEpisode, setselectedEpisode] = useState()
  console.log(show)
  if(!show){
    return <p>Select show for details</p>;
  }

  return(
     <div className="show-details">
        <EpisodeList
        name = {show.name}
        episodes = {show.episodes}
        selectedEpisode = {selectedEpisode}
        setSelectedEpisode = {setselectedEpisode} />
        <EpisodeDetails
        episode={selectedEpisode} />
      </div>
  );
}
