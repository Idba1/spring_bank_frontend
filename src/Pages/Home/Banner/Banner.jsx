import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            transitionTime={500}
            emulateTouch={true}
            dynamicHeight={false}
        >
            <div>
                <img
                    src="https://i.ibb.co.com/nMzXGK9k/c-1.png"
                    alt="Image 1"
                    style={{
                        maxHeight: "100vh",
                        width: "100%",
                        objectFit: "cover",
                        
                    }}
                />
            </div>
            <div>
                <img
                    src="https://i.ibb.co.com/XfkdMwDv/c-2.png"
                    alt="Image 2"
                    style={{
                        maxHeight: "100vh",
                        width: "100%",
                        objectFit: "cover",
                        
                    }}
                />
            </div>
            <div>
                <img
                    src="https://i.ibb.co.com/nMzXGK9k/c-1.png"
                    alt="Image 3"
                    style={{
                        maxHeight: "100vh",
                        width: "100%",
                        objectFit: "cover",
                        
                    }}
                />
            </div>
            <div>
                <img
                    src="https://i.ibb.co.com/XfkdMwDv/c-2.png"
                    alt="Image 4"
                    style={{
                        maxHeight: "100vh",
                        width: "100%",
                        objectFit: "cover",
                        
                    }}
                />
            </div>
        </Carousel>
    );
};

export default Banner;
