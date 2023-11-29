// Components
import Filter from '../../Filter/Filter';
import FilterName from '../../FilterName/FilterName';
import Form from '../../Form/Form';
// Data
import GPUData from '../../data/Computers/ComputerGPUData.json';

export default function GraphicCards() {
    return (
        <Filter>
            <FilterName filterName='GPU' filterKey='gpu' />
            <Form data={GPUData} />
        </Filter>
    )
}