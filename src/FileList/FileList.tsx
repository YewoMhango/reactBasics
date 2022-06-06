import moment from "moment";
import React from "react";
import "./FileList.css";

export default function FileList({ files }: { files: Array<FileInfo> }) {
  return (
    <div className="file-list">
      {files.map((file) => (
        <FileListItem file={file} key={file.id} />
      ))}
    </div>
  );
}

function FileListItem({ file }: { file: FileInfo }) {
  return (
    <div className="file-list-item">
      <span className="file-icon-and-name">
        <FileIcon type={file.type} />
        <FileName fileName={file.name} />
      </span>
      <CommitMessage message={file.commitMessage} />
      <Time time={file.lastModified} />
    </div>
  );
}

function FileName({ fileName }: { fileName: string }) {
  return <span className="file-name">{fileName}</span>;
}

function CommitMessage({ message }: { message: string }) {
  return <span className="commit-message">{message}</span>;
}

function Time({ time }: { time: string }) {
  return <span className="file-list-time">{moment(time).fromNow()}</span>;
}

function FileIcon({ type }: { type: "file" | "folder" }) {
  return (
    <span className="file-icon">
      {type === "file" && (
        <svg
          width="8.0081mm"
          height="8.8638mm"
          version="1.1"
          viewBox="0 0 8.0081 8.8638"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(-101.97 -155.13)" fill="none" stroke="#025">
            <path
              transform="scale(.26458)"
              d="m386.34 589.91v26.32a2.6458 2.6458 45 0 0 2.6458 2.6458h23.085a2.6458 2.6458 135 0 0 2.6458-2.6458v-18.091a6.3876 6.3876 67.5 0 0-1.8709-4.5167l-4.4867-4.4867a6.3876 6.3876 22.5 0 0-4.5167-1.8709h-14.857a2.6458 2.6458 135 0 0-2.6458 2.6458z"
              strokeLinecap="square"
              strokeWidth="1.8898"
              style={{ paintOrder: "fill markers stroke" }}
            />
            <g strokeWidth=".5">
              <path d="m103.41 157.48h2.8336" />
              <path d="m103.41 158.97h5.1689" />
              <path d="m103.41 160.47h5.1689" />
              <path d="m103.41 161.96h5.1689" />
            </g>
          </g>
        </svg>
      )}
      {type === "folder" && (
        <svg
          width="9.4035mm"
          height="6.9353mm"
          version="1.1"
          viewBox="0 0 9.4035 6.9353"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            transform="translate(-101.83 -134.78)"
            stroke="#025"
            strokeLinecap="square"
            strokeWidth=".5"
          >
            <rect
              x="102.08"
              y="136.07"
              width="8.9035"
              height="5.3992"
              fill="#84a0be"
              style={{ paintOrder: "fill markers stroke" }}
            />
            <rect
              x="102.08"
              y="135.03"
              width="4.4981"
              height="1.0361"
              fill="#fff"
              style={{ paintOrder: "fill markers stroke" }}
            />
          </g>
        </svg>
      )}
    </span>
  );
}

export type FileInfo = {
  id: number;
  name: string;
  type: "file" | "folder";
  commitMessage: string;
  lastModified: string;
};
