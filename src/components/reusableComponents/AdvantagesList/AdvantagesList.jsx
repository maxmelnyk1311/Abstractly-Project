export default function AdvantagesList({advantagesList}) {
    return (
        advantagesList &&
            <ul>
                {advantagesList.map((advantage) => {
                    return (
                        <li key={advantage}>{advantage}</li>
                    )
                })}
            </ul>
    )
}