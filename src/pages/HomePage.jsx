import React, { useEffect, useState } from 'react'
import { PadList } from '../cmps/PadList.jsx'
import { loadPads, savePad } from '../store/actions/padAction.js'
import { isPlay, isPause } from '../store/actions/systemActions.js'
import { padService } from '../services/padService.js';
import { useDispatch, useSelector } from 'react-redux'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

// rendering home page with handling change in audio state (isPlaying) and dispatch it.

export const HomePage = () => {
    
    const dispatch = useDispatch()
    const [isWaiting, setIsWaiting] = useState(false)
    const [waitingPad, setWaitingPad] = useState(null)
    const pads = useSelector(state => state.padModule.pads)
    const [isEnded, setIsEnded] = useState(false)
    const isLoading = useSelector(state => state.systemModule.isLoading)


    useEffect(() => {
        // load pads state from redux store
        dispatch(loadPads())
        return () => {
        }
    }, [])


    // handling change in isPlaying state (boolean) by dispatching 

    const handlePlay = () => {
        setIsWaiting(false)
        dispatch(isPlay())
    }

    const handlePause = (ev) => {
        ev.preventDefault()
        dispatch(isPause())
        setIsWaiting(false)
    }


    // prop function for the padPreview component for lifting up a pad information
    // that is waiting to begin play at the end of the loop

    const updateWaiting = (padId) => {
        setIsWaiting(true)
        const loadPad = async () => {
            const _pad = await padService.getPadById(padId)
            setWaitingPad(_pad)
        }
        loadPad()
    }

    // prop function for the padPreview component for updating that the loop is over
    // The waiting pad is updated for playing

    const updateEnding = () => {
        setIsEnded(true)
        if (waitingPad) {
            dispatch(savePad({...waitingPad , isPlaying: true}))
        }
    }

    // rendering the buttons and the main view
    // rendering the pads by PadList 

    if (isLoading) return <div>Loading...</div>
    return (
        <div className="home-page main-container">
            <h1>Mix Things Up</h1>
            <PadList pads={pads} isWaiting={isWaiting} updateWaiting={updateWaiting} updateEnding={updateEnding} isEndedProp={isEnded} />
            <div className="btns flex justify-center">
                <button>
                    <PlayCircleFilledIcon
                        className="svg-btn"
                        onClick={handlePlay}
                    />
                </button>
                <PauseCircleFilledIcon
                    className="svg-btn"
                    onClick={handlePause}
                />
            </div>
        </div>
    )

}

