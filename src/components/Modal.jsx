import './Modal.css';
import { useEffect, useState } from 'react';

export default function Modal({purpose, handleModalOver}) {
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


    }, [purpose])
    return <div className="modal w-full h-full bg-slate-600 bg-opacity-60 flex justify-center items-center">
        {purpose === 'countdown' ? <div className="count kanit-medium text-9xl">{count}
        </div> : null}
        {purpose === 'confirm retake' ? <div>
            retake
        </div> : null}
    </div>

}