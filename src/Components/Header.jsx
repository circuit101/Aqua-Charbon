import "./Header.css"

export default function Header(){
    return <> 
    <nav className="navbar">
        <img src="src\Pics\Screenshot_8-3-2024_102915_-removebg-preview.png" className="logo" />
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler"><i className="ri_menu_mine"></i></label>
        <div className="menu">
            <ul className="list">
                <li className="home-button">Home</li>
            </ul>
        </div>
    </nav>
    </>
}