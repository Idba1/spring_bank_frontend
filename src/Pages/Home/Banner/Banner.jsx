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
                    src="https://i.ibb.co/05wwx6d/4ddfa45f9847e4204011c3a3e545f81f.jpg" 
                    alt="Image 1" 
                    style={{
                        maxHeight: "35rem", 
                        width: "100%", 
                        objectFit: "cover",
                        borderRadius: "1rem"
                    }} 
                />
            </div>
            <div>
                <img 
                    src="https://i.ibb.co/Lhpr23RN/9cd3c86cd541366668527e756734f543.jpg" 
                    alt="Image 2" 
                    style={{
                        maxHeight: "35rem", 
                        width: "100%", 
                        objectFit: "cover",
                        borderRadius: "1rem"
                    }} 
                />
            </div>
            <div>
                <img 
                    src="https://i.ibb.co/JWcRnhcd/67e75d91c404e5bab6d0395a99d3edab.jpg" 
                    alt="Image 3" 
                    style={{
                        maxHeight: "35rem", 
                        width: "100%", 
                        objectFit: "cover",
                        borderRadius: "1rem"
                    }} 
                />
            </div>
            <div>
                <img 
                    src="https://i.ibb.co/jPH5xkSC/d08d2a7c19f2e2844bc3916d2924976d.jpg" 
                    alt="Image 4" 
                    style={{
                        maxHeight: "35rem", 
                        width: "100%", 
                        objectFit: "cover",
                        borderRadius: "1rem"
                    }} 
                />
            </div>
        </Carousel>
    );
};

export default Banner;
