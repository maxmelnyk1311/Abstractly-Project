export default function QualityCard({cardItems}) {
    return (
        <li>
            <h4>{cardItems.header}</h4>
            <p>{cardItems.description}</p>
        </li>
    )
}