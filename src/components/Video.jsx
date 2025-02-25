import "./Video.css";
import { useEffect } from 'react';
import { useReactMediaRecorder } from "react-media-recorder";

export default function Video () {

    const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });

    return (
        <div className="w-full flex-col justify-center items-center">
        <p>{status}</p>
        <button onClick={startRecording}>Start Recording</button>
        <button onClick={stopRecording}>Stop Recording</button>
        <div className="w-full flex justify-center items-center ">
          <video className="video flex-shrink" src={mediaBlobUrl} controls autoPlay loop />
        </div>
        </div>
    );

};
