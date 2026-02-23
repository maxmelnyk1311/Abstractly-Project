import SectionHeader from "../../../reusableComponents/SectionHeader/SectionHeader";
import QuestionsList from "./QuestionsList/QuestionsList";

export default function FAQSection({headerProps, listData}) {
    return (
        <section>
            <SectionHeader {...headerProps} />
            <QuestionsList listData={listData}/>
            <div>
                <div>
                    <p>Can’t find the answer you’re looking for?</p>
                    <p>Reach out to our <a>customer support</a> team.</p>
                </div>
                <button>Get in touch</button>
            </div>
        </section>
    )
}