import React from "react";
import "./Tweet.css";
import moment from "moment";

export default function Tweet({
  tweet,
}: {
  tweet: {
    message: string;
    imgSrc: string;
    author: {
      handle: string;
      name: string;
    };
    likes: number;
    retweets: number;
    timestamp: string;
  };
}) {
  return (
    <div className="tweet">
      <Avatar
        imgSrc={tweet.imgSrc}
        altText={tweet.author.name + "'s profile photo"}
      />
      <div className="content">
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Time({ time }: { time: string }) {
  return <span className="tweet-time">{moment(time).fromNow()}</span>;
}

function ReplyButton() {
  return (
    <span>
      <i className="reply-button">
        <svg
          width="25.943mm"
          height="23.027mm"
          version="1.1"
          viewBox="0 0 25.943 23.027"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(-28.355 -111.77)" strokeWidth=".26458">
            <path
              fill="currentColor"
              d="m51.109 132.41c0-5.938-1.9078-7.9848-7.9581-8.5378-1.6706-0.15269-3.5697-0.23972-4.2203-0.1934l-1.183 0.0842-0.1323 2.0893c-0.21678 3.4237-0.33222 3.3918-5.1582-1.4267-2.2562-2.2527-4.1022-4.2773-4.1022-4.4991 0-0.22186 1.7682-2.1686 3.9294-4.3262 3.1914-3.1861 4.0486-3.906 4.5641-3.8331 0.60276 0.0852 0.63849 0.19751 0.71089 2.2344l0.0762 2.1447 3.8925 0.15678c5.1191 0.20617 7.8218 0.97217 9.9151 2.8101 3.2876 2.8866 3.7795 8.3816 1.2496 13.961-1.1232 2.477-1.5837 2.2839-1.5837-0.66427z"
            />
          </g>
        </svg>
      </i>
    </span>
  );
}

function RetweetButton({ count }: { count: number }) {
  return (
    <span className="retweetbutton">
      <i>
        <svg
          width="27.689mm"
          height="16.669mm"
          version="1.1"
          viewBox="0 0 27.689 16.669"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(-71.558 -116.23)" fill="currentColor">
            <path d="m90.703 129.84c-3.1797-3.7938-3.235-4.1875-0.60486-4.3027l1.7859-0.0782v-5.532h-8.6402l-1.2349-1.5213c-0.67917-0.83675-1.2354-1.6702-1.2362-1.8521-1e-3 -0.25674 1.656-0.33073 7.407-0.33073h7.4083v9.2362l1.7859 0.0782c1.6307 0.0714 1.7934 0.13072 1.8716 0.6822 0.10997 0.77516-4.7446 6.672-5.4927 6.672-0.30405 0-1.4714-1.1679-3.0501-3.0516z" />
            <path d="m75.215 128.28v-4.6181l-1.7859-0.0782c-1.6143-0.0707-1.794-0.13459-1.8693-0.66469-0.10789-0.7588 4.7898-6.6896 5.5243-6.6896 0.74812 0 5.6026 5.8969 5.4927 6.672-0.0782 0.55147-0.24088 0.61076-1.8716 0.68219l-1.7859 0.0782v5.532h8.6664l1.223 1.4856c0.67266 0.81708 1.223 1.6505 1.223 1.8521 0 0.30352-1.2726 0.36648-7.4083 0.36648h-7.4083z" />
          </g>
        </svg>
      </i>
      <span className="retweet-count">{count > 0 ? count : null}</span>
    </span>
  );
}

function LikeButton({ count }: { count: number }) {
  return (
    <span className="likebutton">
      <i>
        <svg
          width="25.921mm"
          height="22.2mm"
          version="1.1"
          viewBox="0 0 25.921 22.2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(-28.385 -140.33)">
            <path
              fill="currentColor"
              d="m35.141 156.91c-5.1727-5.1207-5.7288-5.759-6.2324-7.1536-0.99299-2.7498-0.54621-5.7719 1.1171-7.5564 0.96476-1.035 2.5733-1.6984 4.4441-1.8327 2.1757-0.15619 3.2204 0.17729 5.2607 1.6792l1.5897 1.1703 1.5591-1.1477c0.8575-0.63126 2.1105-1.3021 2.7845-1.4908 1.5786-0.44198 3.9802-0.22478 5.3734 0.48597 3.8625 1.9705 4.3947 7.4088 1.1041 11.282-1.8418 2.1678-10.374 10.186-10.838 10.186-0.2735 0-2.9419-2.4348-6.1618-5.6224z"
            />
          </g>
        </svg>
      </i>
      <span className="like-count">{count > 0 ? count : null}</span>
    </span>
  );
}

function MoreOptionsButton() {
  return (
    <i className="more-options-button">
      <svg
        width="20.373mm"
        height="5.5562mm"
        version="1.1"
        viewBox="0 0 20.373 5.5562"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="currentColor"
          transform="translate(-71.511 -147.71)"
          strokeWidth=".26458"
        >
          <path d="m86.744 152.85c-0.30263-0.30263-0.41578-0.94551-0.41578-2.3623 0-2.5383 0.23155-2.7781 2.6821-2.7781 2.7614 0 2.8741 0.10898 2.8741 2.7781s-0.11275 2.7781-2.8741 2.7781c-1.3296 0-1.9676-0.11706-2.2664-0.41577z" />
          <path d="m79.335 152.85c-0.30262-0.30263-0.41577-0.94551-0.41577-2.3623 0-2.5383 0.23155-2.7781 2.6821-2.7781 2.7614 0 2.8741 0.10898 2.8741 2.7781s-0.11275 2.7781-2.8741 2.7781c-1.3296 0-1.9676-0.11706-2.2664-0.41577z" />
          <path d="m71.927 152.85c-0.30262-0.30263-0.41577-0.94551-0.41577-2.3623 0-2.5383 0.23154-2.7781 2.6821-2.7781 2.7614 0 2.8741 0.10898 2.8741 2.7781s-0.11276 2.7781-2.8741 2.7781c-1.3296 0-1.9676-0.11706-2.2664-0.41577z" />
        </g>
      </svg>
    </i>
  );
}

function Avatar({ imgSrc, altText }: { imgSrc: string; altText: string }) {
  return <img src={imgSrc} className="avatar" alt={altText} title={altText} />;
}

function Message({ text }: { text: string }) {
  return <div className="message">{text}</div>;
}

function NameWithHandle({
  author,
}: {
  author: { name: string; handle: string };
}) {
  return (
    <span className="name-with-handle">
      <span className="name">{author.name}</span>
      <span className="handle">@{author.handle}</span>
    </span>
  );
}
