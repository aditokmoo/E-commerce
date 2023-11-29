// Components
import Filter from '../../Filter/Filter';
import FilterName from '../../FilterName/FilterName';
import Form from '../../Form/Form';
// Data
import SSDMemoryData from '../../data/Computers/SSDMemoryData.json';

export default function SSDMemory() {
    return (
        <Filter>
            <FilterName filterName='SSD Memory' filterKey='ssd' />
            <Form data={SSDMemoryData} />
        </Filter>
    )
}