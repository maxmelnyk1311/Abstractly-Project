import AdvantagesList from "../../../../../reusableComponents/AdvantagesList/AdvantagesList";

export default function PaymentPlanCard({planItems, billType}) {
    return (
        <li>
            {planItems.isMostPopular && <span>Most Popular</span>}
            <h4>{planItems.title}</h4>
            <p>{planItems.description}</p>
            <p>
                $
                {billType == 'monthly' ? planItems.pricePerMonth : null}
                {billType == 'annually' ? planItems.pricePerYear : null}
                /
                {billType == 'monthly' ? 'month' : null}
                {billType == 'annually' ? 'year' : null}                
            </p>
            <p>Billed {billType}</p>
            <AdvantagesList advantagesList={planItems.planAdvantages}/>
        </li>
    )
}