import { PadPreview } from './PadPreview.jsx'

export function PadList({ pads }) {

    return (
        <div className="pad-list flex justify-center">
            <div className="grid-list grid">
                {pads.map(pad =>
                    <PadPreview key={pad._id} pad={pad} id={pad._id} />
                )}
            </div>
        </div>
    )
}