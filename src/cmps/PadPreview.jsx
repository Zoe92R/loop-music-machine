import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { savePad } from '../store/actions/padAction.js'
import Switch from '@material-ui/core/Switch';




export function PadPreview({ pad, id , isPlaying}) {

    // const dispatch = useDispatch()
    const [isChecked, setIsChecked] = useState(false)

    //   const handleChange = (event) => {
    //     setState({ ...state, [event.target.name]: event.target.checked });
    //   };

    useEffect(() => {
        // const updatesTask = { ...task, isComplated }
        // dispatch(saveTask(updatesTask))

        return () => {
        }
    }, [id, isChecked])

    const handleToggle = (ev) => {
        setIsChecked(ev.target.checked)
        console.log(isChecked)
        // const updatesTask = {...task , complated}
        // dispatch(saveTask(updatesTask))
    }

    if (!pad) return <div>...LOADING</div>
    return (
        <div className="pad-preview">
            <div>{pad.title}</div>
            {/* <audio src={music2}  autoPlay={isPlaying}/> */}
            <Switch
                checked={isChecked}
                onChange={handleToggle}
                name="isChecked"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
        </div >
    )
}

