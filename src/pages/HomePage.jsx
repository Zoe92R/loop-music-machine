import React, { useEffect , useRef , useState} from 'react'
import { Link } from 'react-router-dom'
import { PadList } from '../cmps/PadList.jsx'
import { loadPads } from '../store/actions/padAction.js'
import { useDispatch, useSelector } from 'react-redux'
import music from '../assets/audio/1.mp3'
import music2 from '../assets/audio/2.mp3'
import music3 from '../assets/audio/2.mp3'

export const HomePage = () => {

    const [isPlaying, setIsPlaying] = useState(false)
    const dispatch = useDispatch()
    const pads = useSelector(state => state.padModule.pads)
    const isLoading = useSelector(state => state.systemModule.isLoading)

    const audioPlayer = useRef()

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    useEffect(() => {
        dispatch(loadPads())
        return () => {
        }
    }, [isPlaying])


    if (isLoading) return <div>Loading...</div>
    return (
        <div className="home-page main-container">
            <h1>Create a loop</h1>
            <PadList pads={pads} />
            {/* <audio src="../assets/audio/120_future_funk_beats_25.mp3" controls/> */}
            {/* <audio src={music}  autoPlay={isPlaying}/> */}
            <audio src={music2}  autoPlay={isPlaying}/>
            <audio src={music3}  autoPlay={isPlaying}/>
            <button onClick = {togglePlayPause}>Play</button>
        </div>
    )

}

