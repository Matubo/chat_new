import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./room_carousel.css";

function RootCarousel(props) {
  const { items, changeRoom } = props;

  function createDOM() {
    let DOM = [];
    for (let key in items) {
      const { id } = items[key];
      DOM.push(
        <div
          className="owl-theme__items items"
          key={id}
          onClick={() => {
            changeRoom(id);
          }}
        >
          {id}
        </div>
      );
    }
    return DOM;
  }

  return (
    <OwlCarousel className="owl-theme" loop margin={10} items={10} loop={false}>
      {createDOM()}
    </OwlCarousel>
  );
}
export default RootCarousel;
