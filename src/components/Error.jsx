import './Error.css';
import Btn from '../ui/Btn.jsx';

const errorMessage =(errorType) => {
    switch(errorType) {
        case 'webcam-unavailable': return 'Webcam is not available on your laptop!';
        case 'media-aborted': return 'Media is aborted!';
        case 'permission_denied': return 'Permission is denied!';
        case 'no_specified_media_found': return 'No specified media is found!';
        case 'media_in_use': return 'Media is in use!'
        case 'invalid_media_constraints': return 'Invalid media constraints! Please edit and retry.'
        case 'no_constraints': return 'No constraints are set. Please set constraints and try again!'
        case 'recorder_error': return 'Record error is found!'
    }
}

export default function Error({errorType}) {
    return (<div className="error w-full h-full bg-slate-600 bg-opacity-60 flex justify-center items-center">
        <div className="error-message-container text-red-500">
            <p className="pb-10">Error: {errorMessage(errorType)}</p>
            <Btn text="Got it!" color="bg-slate-600" handleClick={() => {
                const googleUrl = `https://www.google.com/search?q=${errorType}`;
                window.location.replace (googleUrl)
            }} />
        </div>
    </div>);
}