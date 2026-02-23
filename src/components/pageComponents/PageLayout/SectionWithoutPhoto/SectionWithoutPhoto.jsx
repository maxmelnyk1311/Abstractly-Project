import QualityList from "../../../reusableComponents/QualityList/QualityList";
import SectionHeader from "../../../reusableComponents/SectionHeader/SectionHeader";

export default function SectionWithoutPhoto({headerProps, qualityList}) {
    return (
        <section>        
            <SectionHeader {...headerProps}/>
            <QualityList 
                qualityList={qualityList}
            />
        </section>
    )
}