import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  


function RootCarousel(props){
    const {items} =props;
    return(<OwlCarousel className='owl-theme' loop margin={10} items={10}>
        {items.map((elem)=>{
            return items.length>0?<div className='items'>{elem.id}</div>:<></>
        })}
    </OwlCarousel>)
}
export default RootCarousel