import "./Footer.css"

export default function Footer(){
    return(
        <footer className="footer">
            <div  className="socials">
                <li title="Coming soon" className="ytb-icon"><a href="#"><img src="src\Pics\YouTube .png" className="ytb-icon" /></a></li>
                <li title="Coming soon"><a href="#"><img src="src\Pics\X.png" className="x-icon" /></a></li>
                <li><a href="https://www.instagram.com/aqua.charbon?igsh=a3FoYTQ0eGQyYXA4 "><img src="src\Pics\Instagram .png" className="ist-icon" /></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=61555841982629&mibextid=ZbWKwL"><img src="src\Pics\Facebook .png" className="face-icon" /></a></li>
            </div>
            <div className="last-text">
                <p className="ster">&copy; Aqua-Charbon ALL RIGHTS RESERVED</p>
                <p className="contact">CONTACT "aquacharbon@gmail.com"</p>
            </div>
        </footer>
    )
}