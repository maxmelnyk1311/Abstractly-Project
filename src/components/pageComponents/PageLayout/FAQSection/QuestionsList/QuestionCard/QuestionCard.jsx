export default function QuestionCard({cardItems}) {
    return (
        <li>
            <h6>{cardItems.question}</h6>
            <p>{cardItems.answer}</p>
        </li>
    )
}