import PaymentPlanCard from "./PaymentPlanCard/PaymentPlanCard"

export default function PaymentPlanList({planList, billType}) {
    return (
        <ul>
            {planList.map((plan) => {
                return (
                    <PaymentPlanCard 
                        planItems={plan} 
                        billType={billType}
                        key={plan.title}
                    />
                )
            })}
        </ul>
    )
}