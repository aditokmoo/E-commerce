import { useLocation } from 'react-router';
// Components
import Filter from '../../Filter/Filter';
import FilterName from '../../FilterName/FilterName';
import Form from '../../Form/Form';
// Data
import BrandData from '../../data/Smartphones/BrandData.json';
import ComputerBrandData from '../../data/Computers/ComputerBrandData.json';

export default function Brand() {
    const location = useLocation()
    const currentDevice = location.pathname.split('/')[2]

    return (
        <Filter>
            <FilterName filterName='Brand' filterKey='brand' />
            <Form data={currentDevice === 'smartphones' ? BrandData : currentDevice === 'computers' ? ComputerBrandData : null} />
        </Filter>
    )
}