import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
};

const slides = [
  { src: "/HorizontalCarousel/Model3.avif", title: "Model 3", description: "0% APR Available"},
  { src: "/HorizontalCarousel/ModelY.avif", title: "Model Y", description: "1.99% APR Ending June 16",},
];

const HorizontalCarousel = () => {
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.src} alt={slide.title} />
            <div className="carousel-caption">
              <h1 className="carousel-title">{slide.title}</h1>
              <p className="carousel-subtitle">{slide.description}</p>
              <div className="carousel-buttons d-flex justify-content-center">
                <a href="#" className="btn btn-lg btn-primary">Order Now</a>
                <a href="#" className="btn btn-lg btn-light">View Inventory</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HorizontalCarousel;
