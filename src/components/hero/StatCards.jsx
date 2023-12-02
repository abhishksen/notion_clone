
const StatCards = ({ number, text }) => {
    return (
        <div className="card stat">
            <h1>{number}+</h1>
            <p>{text}</p>
        </div>
    )
}

export default StatCards
