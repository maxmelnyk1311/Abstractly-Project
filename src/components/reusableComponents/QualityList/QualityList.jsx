import QualityCard from "./QualityCard/QualityCard";

export default function QualityList({qualityList}) {
    return (
        qualityList && 
            <ul>
                {qualityList.map((quality) => {
                    return (
                        <QualityCard 
                            key={quality.header}
                            cardItems={quality}
                        />
                    )
                })}
            </ul>
    )
}