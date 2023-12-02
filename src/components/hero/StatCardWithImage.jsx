const StatCardWithImage = ({ title, subtitle, img }) => {
    return (
        <div className="img-stat">
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <img src={img} alt="img-source" />
        </div>
    )
}

export default StatCardWithImage
