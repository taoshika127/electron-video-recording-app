import { useState, useEffect, useRef } from 'react';
import { ReactMediaRecorder } from "react-media-recorder";
import Video from './Video.jsx';
import Webcam from "react-webcam";
import Btn from '../ui/Btn.jsx';
import Counter from './Counter.jsx';
import CircleIcon from '@mui/icons-material/Circle';
import SquareIcon from '@mui/icons-material/Square';
import UndoIcon from '@mui/icons-material/Undo';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import DownloadIcon from '@mui/icons-material/Download';
import './VideoControls.css';
import Modal from './Modal.jsx';
import Error from './Error.jsx';

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
    const [showCountdown, setShowCountdown] = useState(false);
    const [showConfirmRetake, setShowConfirmRetake] = useState(false);
    return (
        <div className="video-controls w-full">
            <ReactMediaRecorder
            video
            render={({ status, startRecording, stopRecording, pauseRecording, resumeRecording, mediaBlobUrl, previewStream, error }) =>
                (!error ?
                (<div className="h-full">
                    {/* <div>{status}</div> */}
                    <div className="controls flex justify-center items-center">
                        {status === 'idle' ? <Btn icon={<CircleIcon />} handleClick={() => {
                            setShowCountdown(true)
                        }} text="Start Recording" color="bg-green-400"/> : null}
                        {status === 'recording' || status === 'paused' ?
                        (<div className="flex-col justify-center items-center">
                            <div className="flex justify-center items-center gap-10 mb-5">
                                <Btn icon={<SquareIcon />} handleClick={stopRecording} text="Stop Recording" color="bg-red-500" />
                                <Btn icon={<UndoIcon />} handleClick={() => {
                                    pauseRecording()
                                    setShowConfirmRetake(true)
                                }} text="Retake" color="bg-gray-400" />
                            </div>
                            <div className="flex justify-center items-center">
                                <Counter />
                            </div>
                        </div>
                        ) : null}
                        {status === 'stopped' ? <div className="flex-col justify-center items-center">
                            <Btn icon={<RestartAltIcon />} handleClick={() => {
                                window.location.reload()
                            }} text="Start Over" color="bg-green-400"/>
                            <div className="mt-10 text-blue-600">
                                <DownloadIcon />
                                <a className="download" href={mediaBlobUrl} download={(new Date(Date.now())).toString() || 'file' + '.mp4'}>Download</a>
                            </div>
                        </div> : null}
                    </div>
                    <div className="w-full video-screen flex justify-center items-center">
                        {status === 'idle' ? <Webcam
                                                audio={false}
                                                screenshotFormat="image/jpeg"
                                                width={1080}
                                                videoConstraints={videoConstraints}
                                            >
                                            </Webcam> : null}
                        {status === 'recording' || status === 'paused' ? <VideoPreview stream={previewStream} /> : null}
                        {status === 'stopped' ? <Video src={mediaBlobUrl} autoPlay={false} controls={true} /> : null}
                    </div>
                    {showCountdown ? <Modal purpose='countdown' handleModalOver={async () => {
                        startRecording()
                        setShowCountdown(false)
                    }}/> : null}
                    {showConfirmRetake ? <Modal purpose='confirm retake' handleRetake={() => {
                        window.location.reload()
                    }} handleModalOver={async () => {
                        resumeRecording()
                        setShowConfirmRetake(false)
                    }} /> : null}
                </div>) :
                <Error errorType='media-aborted'/>)
            }
            />
        </div>
    );

};
