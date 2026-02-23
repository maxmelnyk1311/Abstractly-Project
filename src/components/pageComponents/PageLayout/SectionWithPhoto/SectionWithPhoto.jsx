import QualityList from "../../../reusableComponents/QualityList/QualityList";
import SectionHeader from "../../../reusableComponents/SectionHeader/SectionHeader";

export default function SectionWithPhoto({headerProps, qualityList}) {
    return (
        <section>
            <SectionHeader {...headerProps}/>
            <div>
                <QualityList qualityList={qualityList}/>
                <img/>
            </div>
        </section>
    )
}