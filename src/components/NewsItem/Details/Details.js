import React from "react";
import PropTypes from "prop-types";
import { summary, newsChannel, lastUpdate } from "../../../config/config";
import "./Details.css";
function Details({ channel, published }) {
  return (
    <details className="details">
      <summary className="summary">{summary}</summary>
      <p className="channel">
        <span>Channel: </span>
        {channel ? newsChannel(channel) : "Unknown"}
      </p>
      <p className="published">
        <span>Published: </span>
        {published ? lastUpdate(published) : "Unknown"}
      </p>
    </details>
  );
}

Details.propTypes = {
  channel: PropTypes.string,
  published: PropTypes.string,
};
export default Details;