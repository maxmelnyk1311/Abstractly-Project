import QuestionCard from "./QuestionCard/QuestionCard"

export default function QuestionsList({listData}) {
    return (
        listData && 
            <ul>
                {listData.map((listItem) => {
                    return (
                        <QuestionCard 
                            key={listItem.question} 
                            cardItems={listItem}
                        />
                    )
                })}
            </ul>
    )
}