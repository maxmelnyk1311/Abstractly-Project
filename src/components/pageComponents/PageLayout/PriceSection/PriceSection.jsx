import { useState } from "react";
import PaymentPlanList from "./PaymentPlanList/PaymentPlanList";
import SectionHeader from "../../../reusableComponents/SectionHeader/SectionHeader";

export default function PriceSection({headerProps, billTypes, planList}) {
    const [currentBillType, setCurrentBillType] = useState('monthly');
    function billTypeChange(event) {
        setCurrentBillType(event.target.textContent)
    }

    return (
        <section>
            <SectionHeader {...headerProps} />
            {billTypes && 
                <ul>
                    {billTypes.map((billType) => {
                        return (
                            <li key={billType}>
                                <button onClick={billTypeChange}>{billType}</button>
                            </li>
                        )
                    }
                    )}
                </ul>
            }
            <PaymentPlanList 
                planList={planList}
                billType={currentBillType}
            />
        </section>
    )
}