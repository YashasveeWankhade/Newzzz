import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import Details from "./Details/Details";
import { ReactComponent as ArrowIcon } from "../Images/ArrowIcon.svg";
import "./NewsItem.css";

// Define a fallback image URL (replace with a reliable online image URL)
const FALLBACK_IMAGE_URL = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
function NewsItem(props) {
  const { imageUrl, alt, description, title, channel, published, urlNews } = props;
  return (
    <Card className="card">
      <Card.Img 
        className="card-img" 
        variant="top" 
        src={imageUrl || FALLBACK_IMAGE_URL} 
        alt={alt || "No image available"} 
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="card-description">{description}</Card.Text>
        <Details channel={channel} published={published} />
        <Button className="card-btn" href={urlNews} target="_blank">
          Read more <ArrowIcon className="arrow-icon" />
        </Button>
      </Card.Body>
    </Card>
  );
}

NewsItem.propTypes = {
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  channel: PropTypes.string,
  published: PropTypes.string,
  urlNews: PropTypes.string,
};

export default NewsItem;
