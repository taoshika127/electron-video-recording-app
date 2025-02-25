import { useEffect, useRef } from 'react';
import { useReactMediaRecorder, ReactMediaRecorder } from "react-media-recorder";
import Video from './Video.jsx';
import Webcam from "react-webcam";
import Btn from '../ui/Btn.jsx';
import Counter from './Counter.jsx';
import CircleIcon from '@mui/icons-material/Circle';
import SquareIcon from '@mui/icons-material/Square';
import UndoIcon from '@mui/icons-material/Undo';
import './VideoControls.css';

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
        <div className="video-controls w-full">
            <ReactMediaRecorder
            video
            render={({ status, startRecording, stopRecording, mediaBlobUrl, previewStream }) => (
                <div className="h-full">
                    <div className="controls flex justify-center items-center">
                        {status === 'idle' ? <Btn icon={<CircleIcon />} handleClick={startRecording} text="Start Recording" color="bg-green-400"/> : null}
                        {status === 'recording' ?
                        (<div className="flex-col justify-center items-center">
                            <div className="flex justify-center items-center gap-10 mb-5">
                                <Btn icon={<SquareIcon />} handleClick={stopRecording} text="Stop Recording" color="bg-red-500" />
                                <Btn icon={<UndoIcon />} text="Retake" color="bg-gray-400" />
                            </div>
                            <div className="flex justify-center items-center">
                                <Counter />
                            </div>
                        </div>
                        ) : null}
                    </div>
                    <div className="w-full video-screen flex justify-center items-center">
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
