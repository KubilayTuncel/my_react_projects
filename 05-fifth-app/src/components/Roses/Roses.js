import { Fragment } from "react"
import AvaibleRoses from "./AvailableRoses"
import RosesSummary from "./RosesSummary"


const Roses = ()=>{
    return (
        <Fragment>
            <RosesSummary />
            <AvaibleRoses />
        </Fragment>
    )
}

export default Roses