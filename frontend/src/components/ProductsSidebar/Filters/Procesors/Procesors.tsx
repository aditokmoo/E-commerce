// Components
import Filter from '../../Filter/Filter';
import FilterName from '../../FilterName/FilterName';
import Form from '../../Form/Form';
// Data
import CPUData from '../../data/Computers/ComputerCPUData.json'

export default function Procesors() {
    return (
        <Filter>
            <FilterName filterName='CPU' filterKey='cpu' />
            <Form data={CPUData} />
        </Filter>
    )
}