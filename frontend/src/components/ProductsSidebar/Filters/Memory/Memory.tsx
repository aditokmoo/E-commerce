import { useLocation } from 'react-router';
// Components
import Filter from '../../Filter/Filter';
import FilterName from '../../FilterName/FilterName';
import Form from '../../Form/Form';
// Data
import MobileMemoryData from '../../data/Smartphones/MobileMemoryData.json';
import ComputerMemoryData from '../../data/Computers/ComputerMemoryData.json';

export default function Memory() {
    const location = useLocation();
    const currentDevice = location.pathname.split('/')[2];

    return (
        <Filter>
            <FilterName filterName='Built-in memory' filterKey='memory' />
            <Form data={currentDevice === 'smartphones' ? MobileMemoryData : currentDevice === 'computers' ? ComputerMemoryData : null} />
        </Filter>
    )
}