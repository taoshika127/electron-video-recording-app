import { useEffect, useRef } from 'react';
import { useReactMediaRecorder, ReactMediaRecorder } from "react-media-recorder";
import Video from './Video.jsx';
import Webcam from "react-webcam";

const VideoPreview = ({ stream }: { stream: MediaStream | null }) => {
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);
    if (!stream) {
        return null;
    }
    return <Video ref={videoRef} autoPlay={true} controls={false}/>
};

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

export default function VideoControls () {
    return (
        <div className="w-full">
            <ReactMediaRecorder
            video
            render={({ status, startRecording, stopRecording, mediaBlobUrl, previewStream }) => (
                <div className="w-full flex-col justify-center items-center">
                    <p>{status}</p>
                    <button onClick={startRecording}>Start Recording</button>
                    <button onClick={stopRecording}>Stop Recording</button>
                    <div className="w-full flex justify-center items-center">
                        {status === 'idle' ? <Webcam
                                                audio={false}
                                                screenshotFormat="image/jpeg"
                                                width={1080}
                                                videoConstraints={videoConstraints}
                                            >
                                            </Webcam> : null}
                        {status === 'recording' ? <VideoPreview stream={previewStream} /> : null}
                        {status === 'stopped' ? <Video src={mediaBlobUrl} autoPlay={false} controls={true} /> : null}
                    </div>
                </div>
            )}
            />
        </div>
    );

};
