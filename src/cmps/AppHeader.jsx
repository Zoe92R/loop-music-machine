export function AppHeader() {
    return (
        <div className="main-header-container main-container full">
        <ul className="main-header flex space-between clean-list">
            <li className="logo"><a href="#">LOOP MACHINE</a></li>
            <ul className="right-side flex space-between clean-list">
                <li className=""><a href="#">Home</a></li>
                <li className=""><a href="#">Favorite</a></li>
            </ul>
        </ul>
        </div>
    )
}