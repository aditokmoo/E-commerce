// Components
import Filter from '../../Filter/Filter';
import FilterName from '../../FilterName/FilterName';
import Form from '../../Form/Form';
// Data
import ComputerTypeData from '../../data/Computers/ComputerTypeData.json'

export default function Type() {
    return (
        <Filter>
            <FilterName filterName='Type' filterKey='type' />
            <Form data={ComputerTypeData} />
        </Filter>
    )
}