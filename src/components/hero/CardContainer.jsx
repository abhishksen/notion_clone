import { FaArrowRight } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { GiBookAura } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
const CardContainer = () => {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <div className="card-header">
                        <IoSparkles className="icon" style={{
                            color: '#9D34DA',
                            background: '#F0E1F9'
                        }} />
                        <h3 className="card-title">AI</h3>
                    </div>
                    <p className="card-description">Ask literally anyrhing Notion will answer</p>
                    <button style={{
                        color: '#9D34DA',
                    }} className="btn extra card-btn">Learn more <FaArrowRight /></button>
                </div>

                <div className="card">
                    <div className="card-header" >
                        <GiBookAura className="icon" style={{
                            color: '#EA4E43',
                            background: '#FCE9E8'
                        }} />
                        <h3 className="card-title">Wikis</h3>
                    </div>
                    <p className="card-description">Ask literally anyrhing Notion will answer</p>
                    <button style={{
                        color: '#EA4E43',
                    }} className="btn extra card-btn">Learn more <FaArrowRight /></button>
                </div>

                <div className="card">
                    <div className="card-header">
                        <GoGoal className="icon" style={{
                            color: '#0A85D1',
                            background: '#E2ECF3'
                        }} />
                        <h3 className="card-title">Projects</h3>
                    </div>
                    <p className="card-description">Ask literally anyrhing Notion will answer</p>
                    <button style={{
                        color: '#0A85D1',
                    }} className="btn extra card-btn">Learn more <FaArrowRight /></button>
                </div>

                <div className="card">
                    <div className="card-header">
                        <IoDocumentTextOutline className="icon" style={{
                            color: '#FAA700',
                            background: '#FFF6D6'
                        }} />
                        <h3 className="card-title">Docs</h3>
                    </div>
                    <p className="card-description">Ask literally anyrhing Notion will answer</p>
                    <button style={{
                        color: '#FAA700',
                    }} className="btn extra card-btn">Learn more <FaArrowRight /></button>
                </div>
            </div>
            <div className="image-container">
                <img src="/main1.png" alt="caurosel-img" />
            </div>
        </>
    )
}

export default CardContainer
