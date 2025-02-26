import './Modal.css';
import { useEffect, useState } from 'react';
import Btn from '../ui/Btn.jsx';

export default function Modal({purpose, handleModalOver, handleRetake}) {
    const [count, setCount] = useState(3)
    useEffect(() => {
        if (purpose === 'countdown') {
            var timeoutId = setTimeout(() => {
                handleModalOver()
            }, 3000)
            var intervalId = setInterval(() => {
                setCount(prev => prev - 1)
            }, 1000)
            return () => {
                clearTimeout(timeoutId)
                clearInterval(intervalId)
            }
        }
    }, [purpose, handleModalOver])
    return <div className="modal w-full h-full bg-slate-600 bg-opacity-60 flex justify-center items-center">
        {purpose === 'countdown' ? <div className="count kanit-medium text-9xl">{count}
        </div> : null}
        {purpose === 'confirm retake' ? <div className="confirm-modal flex-col p-10 text-left">
            <p className="text-2xl font-bold">Heads up! Your recording might be lost!</p>
            If you retake the video, you will lose the data you have recorded so far. Are you sure you want to continue to retake?
            <div className="w-full flex justify-between mt-10">
                <Btn text="Continue" handleClick={handleRetake} color="bg-slate-800"/>
                <Btn text="Cancel" handleClick={handleModalOver} color="bg-slate-300" />
            </div>

        </div> : null}
    </div>

}