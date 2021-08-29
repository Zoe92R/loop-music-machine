import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { padService } from '../services/padService.js';
import { savePad, loadPad } from '../store/actions/padAction.js'
import { isPlay, isPause, setlLoopEnded } from '../store/actions/systemActions.js'
import Switch from '@material-ui/core/Switch';
import { GetSample } from './GetSample.jsx';


export function PadPreview({ id, isWaiting, updateWaiting, updateEnding, isEndedProp }) {
    const dispatch = useDispatch()
    const isPlaying = useSelector(state => state.systemModule.isPlaying)
    const [pad, setPad] = useState(null)
    const [isChecked, setIsChecked] = useState(false)
    const [isEnded, setIsEnded] = useState(null)
    const curr = GetSample('' + id)
    const audioPlayer = useRef();

// loading pad state and setting local states.
// isPlay() call for determine if sound should be activated

    useEffect(() => {
        const loadPad = async () => {
            const _pad = await padService.getPadById(id)
            setPad(_pad)
        }
        loadPad()
        if (pad) {
            setIsChecked(pad.isChecked)
            setIsEnded(false)
        }
    }, [id, pad?.isChecked ])


    useEffect(() => {

        if (pad?.isChecked && !isPlaying) {
            dispatch(savePad({ ...pad, isPlaying: true }))
        }
        if (pad) isToPlay()
        return () => {
        }
    }, [id, pad?.isChecked, isPlaying, pad?.isPlaying])


    useEffect(() => {
        if (isEndedProp) isToPlay()
    }, [isEndedProp])

    

    useEffect(() => {
        return () => {
            dispatch(isPause())
        }
    }, [])

// Handeling swith on/off in the local state and in global state

    const handleToggle = (ev) => {
        setIsChecked(ev.target.checked)
        const padToSave = {
            ...pad,
            "isChecked": ev.target.checked,
            "isWaiting": isPlaying ? true : false
        }
        dispatch(savePad(padToSave))
        if (ev.target.checked && isPlaying) {
            updateWaiting(pad._id)
        }
    }

// isToPlay() determines if the audio should play or pause

    const isToPlay = () => {
 
        if (isChecked && isPlaying) {
            audioPlayer.current.play();
            dispatch(savePad({ ...pad, isPlaying: true }))
        } else if (!isPlaying) {
            audioPlayer.current.pause();
            dispatch(savePad({ ...pad, isPlaying: false , isWaiting: false}))
        }
    }

    // Each time the loop ended, the function updates the parent component

    const handleEnded = () => {
        if (isWaiting && isPlaying) {
            updateEnding(true)
        }
        if (isPlaying) {
            audioPlayer.current.play()
        }
    }

    // Rendering pad card and switch button

    if (!pad) return <div>...LOADING</div>
    return (
        <div className="pad-preview flex column space-between align-center">
            <p className="title">{pad.title}</p>
            <audio
                ref={audioPlayer}
                src={curr}
                onEnded={handleEnded}
            />
            <Switch
                checked={isChecked}
                onChange={handleToggle}
                name="isChecked"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
        </div >
    )
}

