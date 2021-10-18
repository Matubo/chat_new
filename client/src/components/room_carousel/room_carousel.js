import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  


function RootCarousel(props){
    return(<OwlCarousel className='owl-theme' loop margin={10} items={8}>
        <div className='item'>11111</div> <div className='item'>11111</div><div className='item'>11111</div><div className='item'>11111</div><div className='item'>11111</div><div className='item'>11111</div><div className='item'>11111</div><div className='item'>11111</div> <div className='item'>11111</div><div className='item'>11111</div><div className='item'>11111</div><div className='item'>11111</div><div className='item'>11111</div><div className='item'>11111</div><div className='item'>11111</div> <div className='item'>11111</div><div className='item'>11111</div><div className='item'>11111</div><div className='item'>11111</div><div className='item'>11111</div><div className='item'>11111</div>
    </OwlCarousel>)
}
export default RootCarousel