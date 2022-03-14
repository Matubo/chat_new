import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./room_carousel.css";

const getElemDOM=(id,fun)=>{
  return <button
        className="carousel__item"
        key={id}
        onClick={() => {
          fun(id);
        }}
      >
        {id}
      </button>
}

/* function RootCarousel(props) {
  const { items, changeRoom } = props;
    let carouselDOM = [];

    for (let key in items) {
      const { id } = items[key];
      carouselDOM.push(getElemDOM(id,changeRoom));
    }

   let crutch = carouselDOM.length;

  return (
    <OwlCarousel
      className="owl-theme carousel"
      margin={10}
      items={10}
      loop={false}
      key={crutch}
      dots={true}
    >
      {carouselDOM}
    </OwlCarousel>
  ); 
}*/

function RootCarousel(props){
  const { items, changeRoom } = props;
  let carouselDOM = [];
  for (let key in items) {
    const { id } = items[key];
    carouselDOM.push(getElemDOM(id,changeRoom));
  }

  return(
    <div className='test'>
      {carouselDOM}
    </div>
  )
}

export default RootCarousel;
