import { FaArrowRight } from "react-icons/fa";
import CardContainer from "./CardContainer";
const HeroContainer = () => {
    return (
        <div className="container">
            <h1 className="title">Write, plan, share. <br />
                With AI at your side.</h1>
            <p className="subtitle">
                Notion is the connected workspace where better, faster work happens.
            </p>
            <button className="btn extra">Get Notion Free <FaArrowRight /></button>
            <img src="/hero.png" alt="hero image" className="hero-img" />
            <CardContainer />
        </div>
    )
}

export default HeroContainer
