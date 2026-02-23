import SectionHeader from "../../../reusableComponents/SectionHeader/SectionHeader";
import ButtonBar from "../../../reusableComponents/ButtonBar/ButtonBar";

export default function HeroSection({headerProps}) {
    return (
        <section>
            <div>
                <SectionHeader {...headerProps}/>
                <ButtonBar/>
                <img/>
            </div>
        </section>
    )
}