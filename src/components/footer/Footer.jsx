import { FaAngleDown, FaFacebook, FaGlobe, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="icons">
                <img className='logo footer-logo' src="/logo.png" alt="logo-img" />
                <ul className="icon">
                    <li>
                        <FaInstagram size={25} />
                    </li>
                    <li>
                        <FaTwitter size={25} />
                    </li>
                    <li>
                        <FaLinkedinIn size={25} />
                    </li>
                    <li>
                        <FaFacebook size={25} />
                    </li>
                    <li>
                        <FaYoutube size={25} />
                    </li>
                </ul>
                <button className="btn extra outline"><FaGlobe />English <FaAngleDown /></button>
            </div>
            <div className="links">
                <h3>Product</h3>
                <ul className="link">
                    <li>Wikis</li>
                    <li>Projects</li>
                    <li>Docs</li>
                    <li>Notion AI</li>
                    <li>What’s new</li>
                </ul>
                <h3>Solutions</h3>
                <ul className="link">
                    <li>Enterprise</li>
                    <li>Small business</li>
                    <li>Personal use</li>
                    <li>Remote work</li>
                    <li>Startups</li>
                    <li>Education</li>
                    <li>Nonprofits</li>
                    <li>Engineering</li>
                    <li>Product</li>
                    <li>Design</li>
                    <li>Managers</li>
                </ul>
            </div>
            <div className="links">
                <h3>Download</h3>
                <ul className="link">
                    <li> iOS & Android</li>
                    <li> Mac & Windows</li>
                    <li>Web Clipper</li>
                </ul>
                <h3> Build</h3>
                <ul className="link">
                    <li> Integrations</li>
                    <li>Templates</li>
                    <li>API docs</li>
                    <li> Guides & tutorials</li>
                    <li> Hire a consultant</li>
                    <li> Become an affiliate</li>
                </ul>
                <h3> Learn</h3>
                <ul className="link">
                    <li> Customer stories</li>
                    <li>  Help center</li>
                    <li>Webinars</li>
                    <li>Blog</li>
                    <li>Community</li>
                </ul>
            </div>
            <div className="links">
                <h3> Get started</h3>
                <ul className="link">
                    <li>  Switch from Confluence</li>
                    <li> Switch from Asana</li>
                    <li>  Switch from Evernote</li>
                    <li>  Compare vs Monday</li>
                    <li> Compare vs Clickup</li>
                    <li> Compare vs Jira</li>
                </ul>
                <h3>  Resources</h3>
                <ul className="link">
                    <li> Pricing</li>
                    <li> About us</li>
                    <li> Careers</li>
                    <li>Media kit</li>
                    <li>   Email us</li>
                    <li>   Security</li>
                    <li> Cookie settings</li>
                    <li> Terms & privacy</li>
                    <li>California Privacy Notice</li>
                    <li>Status</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
