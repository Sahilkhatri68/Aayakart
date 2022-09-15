import { CCarousel,CCarouselItem ,CImage} from '@coreui/react'
import im4 from "./../assets/images/demos/demo1/products/5-2-1.jpg"
import im5 from "./../assets/images/demos/demo1/products/5-3.jpg"
import im6 from "./../assets/images/demos/demo1/products/5-5.jpg"
export default function Cardslider() {
  return (
    <div style={{width:"400px",height:"200px"}}>
      <CCarousel controls indicators>
        <CCarouselItem>
          <CImage className="d-block w-100" src={im4} alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={im5} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={im6} alt="slide 3" />
        </CCarouselItem>
      </CCarousel>
    </div>
  )
}