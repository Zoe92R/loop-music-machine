import { PadPreview } from './PadPreview.jsx'

export function PadList({ pads, isWaiting, updateWaiting , updateEnding , isEnded}) {

    const sordedPads = pads.sort((a, b) => (a._id > b._id) ? 1 : -1)

    return (
        <div className="pad-list flex justify-center">
            <div className="grid-list grid">
                {sordedPads.map(pad =>
                        <PadPreview key={pad._id} id={pad._id} isWaiting={isWaiting} updateWaiting={updateWaiting} updateEnding={updateEnding} isEnded={isEnded}/>                    
                )}
            </div>
        </div>
    )
}