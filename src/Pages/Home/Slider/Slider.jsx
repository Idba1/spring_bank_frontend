import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sliderData = [
    {
        title: "Multi Currency a/c",
        description: "Duty through weakness will which is same as saying through...",
        image: "https://i.ibb.co.com/7J0w5r2t/growth-1-1.jpg",
        icon: "💱",
    },
    {
        title: "Mutual Funds",
        description: "Choice is when nothing prevents our being able to do...",
        image: "https://i.ibb.co.com/7J0w5r2t/growth-1-1.jpg",
        icon: "💰",
    },
    {
        title: "Trade FX",
        description: "Perfectly simple easy distinguish to the claims of duty...",
        image: "https://i.ibb.co.com/7J0w5r2t/growth-1-1.jpg",
        icon: "📈",
    },
    {
        title: "Multi Currency a/c",
        description: "Duty through weakness will which is same as saying through...",
        image: "https://i.ibb.co.com/7J0w5r2t/growth-1-1.jpg",
        icon: "💱",
    },
    {
        title: "Mutual Funds",
        description: "Choice is when nothing prevents our being able to do...",
        image: "https://i.ibb.co.com/7J0w5r2t/growth-1-1.jpg",
        icon: "💰",
    },
    {
        title: "Trade FX",
        description: "Perfectly simple easy distinguish to the claims of duty...",
        image: "https://i.ibb.co.com/7J0w5r2t/growth-1-1.jpg",
        icon: "📈",
    },
];

const Slider = () => {
    return (
        <div className="relative w-full max-w-4xl mx-auto my-10">
            <h3 className="text-red-600 font-bold text-sm uppercase">Secure Growth</h3>
            <h2 className="text-3xl font-bold mb-6">Enhance Your Wealth Safely</h2>

            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {sliderData.map((item, index) => (
                    <SwiperSlide key={index} className="group">
                        <div className="bg-white shadow-lg p-5 rounded-md relative">
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                            <div className="mt-3 relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="rounded-md w-full h-auto"
                                />
                                <span className="absolute top-1/2 right-4 bg-white p-2 shadow-md rounded-full text-red-500 text-xl">
                                    {item.icon}
                                </span>
                            </div>
                            <a href="#" className="text-red-500 mt-3 block font-medium">
                                → Read More
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons */}
            <button className="swiper-button-prev absolute -left-20 top-2/3 transform -translate-y-1/2 p-2  rounded-full shadow-md">
                <ChevronLeft />
            </button>
            <button className="swiper-button-next absolute -right-20 top-2/3 transform -translate-y-1/2 p-2  rounded-full shadow-md">
                <ChevronRight />
            </button>

            <p className="text-center mt-5 text-gray-700">
                <strong>Find the Perfect FD Option for Your Needs.</strong>
            </p>
        </div>
    );
};

export default Slider;
