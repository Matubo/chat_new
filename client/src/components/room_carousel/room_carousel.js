import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./room_carousel.css";

function RootCarousel(props) {
  const { items, changeRoom } = props;
  let crutch = 0;

  function createDOM() {
    let DOM = [];
    for (let key in items) {
      const { id } = items[key];
      DOM.push(
        <button
          className="carousel__item"
          key={id}
          onClick={() => {
            changeRoom(id);
          }}
        >
          {id}
        </button>
      );
    }
    crutch = DOM.length;
    return DOM;
  }

  return (
    <OwlCarousel
      className="owl-theme carousel"
      loop
      margin={10}
      items={1}
      loop={false}
      key={crutch}
      dots={true}
    >
      {createDOM()}
    </OwlCarousel>
  );
}
export default RootCarousel;
