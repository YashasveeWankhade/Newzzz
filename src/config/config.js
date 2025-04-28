import moment from "moment";
import styled from "styled-components";
const primaryColor = "#005abb";
const secondaryColor = "#333";
const lightText = "#666";
const grayText = "#999";
const StyledArrow = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${primaryColor};
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
export const navbarBrand = "Your News";
export const header = (category) => `News - Top ${category} Headlines`;
export const noFound = "No Results Found";
export const searching = "Searching...";
export const arrow = (
  <StyledArrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
  </StyledArrow>
);
const categories = ["general", "business", "sports", "science", "health", "entertainment", "technology"];
export const router = [
  { path: "/", key: "home", category: "general", country: "us" },
  ...categories.map((cat) => ({
    path: `/categories/${cat}`,
    key: cat,
    category: cat,
    country: "us",
  })),
];
export const navs = [{ nav: "Home", page: "/" }, ...categories.map((cat) => ({
  nav: cat.charAt(0).toUpperCase() + cat.slice(1),
  page: `/categories/${cat}`,
}))];
export const summary = "Channel and Published";
export const newsChannel = (channel) => `${channel}`;
export const lastUpdate = (published) => {
  const timeAgo = moment(published).fromNow();
  return `Updated: ${timeAgo} (${moment(published).format("ddd, DD MMM YYYY HH:mm:ss")})`;
};
