import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Tweet from "./Tweet/Tweet";
import ErrorBox from "./ErrorBox/ErrorBox";
import FileList, { FileInfo } from "./FileList/FileList";
import Counter from "./Counter/Counter";
import Shopper from "./Shopper/Shopper";

let now = Date.now();

let testTweet = {
  message: "Some random tweet content.",
  imgSrc: "./images/ym.png",
  author: {
    handle: "mhangoyewo",
    name: "Yewo Mhango",
  },
  likes: 2,
  retweets: 5,
  timestamp: new Date(now - 3 * 60 * 60 * 1000).toString(), // Go back 3 hours in time
};

let testFiles: Array<FileInfo> = [
  {
    id: 1,
    name: "src",
    type: "folder",
    lastModified: new Date(now - 9 * 24 * 60 * 60 * 1000).toString(), // Go back 9 days in time
    commitMessage: "Initial commit",
  },
  {
    id: 2,
    name: "tests",
    type: "folder",
    lastModified: new Date(now - 9 * 24 * 60 * 60 * 1000).toString(), // Go back 9 days in time
    commitMessage: "Initial commit",
  },
  {
    id: 3,
    name: "README.md",
    type: "file",
    lastModified: new Date(now - 2 * 24 * 60 * 60 * 1000).toString(), // Go back 2 days in time
    commitMessage: "Added a readme",
  },
  {
    id: 4,
    name: "A file with a reeeeaally really long name.md",
    type: "file",
    lastModified: new Date(now - 17 * 60 * 60 * 1000).toString(), // Go back 17 hours in time
    commitMessage: "Added file with a really long name",
  },
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBox>This is an error</ErrorBox>
    <br />
    <Tweet tweet={testTweet} />
    <br />
    <FileList files={testFiles} />
    <br />
    <Counter />
    <br />
    <br />
    <Shopper />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
