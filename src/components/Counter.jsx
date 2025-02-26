import CircleIcon from '@mui/icons-material/Circle';
import { useState, useEffect } from 'react';

const convertToString = (num) => {
    if (num >= 10) {
        return num.toString()
    } else {
        return '0' + num.toString()
    }
}
const getSeconds = (secondsDiff) => {
    return secondsDiff % 60
}

const getMinutes = (secondsDiff) => {
    return Math.floor(secondsDiff / 60)
}

export default function Counter({paused}) {
    const [secondsDiff, setSecondsDiff] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecondsDiff(prev => prev + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId);
        };
    }, [])
    useEffect(() => {


    }, [paused])
    return <div className="flex justify-center items-center gap-2">
        <CircleIcon sx={{ color: "#F88379" }} />
        <p className="text-2xl text-gray-500">{convertToString(getMinutes(secondsDiff)) + ' : ' + convertToString(getSeconds(secondsDiff))}</p>
    </div>

}