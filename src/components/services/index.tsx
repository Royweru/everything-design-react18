
import { ServiceBox } from '../service-box'
import { ServiceDetails } from '@/data/service-details'
const Services = () => {
  return (
    <div className=' container grid md:grid-cols-3 gap-3 py-2' id='services'>
       {ServiceDetails.map((serviceDetail)=>(
        <ServiceBox key={serviceDetail.id} service={serviceDetail}/>
       ))}
    </div>
  )
}

export default Services