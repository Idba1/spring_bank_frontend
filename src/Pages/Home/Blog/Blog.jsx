import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogPosts = [
    {
        title: "How to Improves Your Credit Score Tips and Tricks",
        description: "By Admin | 17 Dec, 2024 | 4 months ago",
        image: "https://i.ibb.co.com/7J0w5r2t/growth-1-1.jpg",
        category: "ACCOUNT",
    },
    {
        title: "Your Credit Score Tips and Tricks How to Improves",
        description: "By Admin | 17 Dec, 2024 | 4 months ago",
        image: "https://i.ibb.co.com/7J0w5r2t/growth-1-1.jpg",
        category: "ACCOUNT",
    },
    {
        title: "Growth Strategies for Your Small Business",
        description: "By Admin | 14 Sep, 2024 | 7 months ago",
        image: "https://i.ibb.co.com/7J0w5r2t/growth-1-1.jpg",
        category: "FINANCIAL PLANNING",
    },
    {
        title: "How to Improve Your Credit Score Tips and Tricks",
        description: "By Admin | 14 Sep, 2024 | 7 months ago",
        image: "https://i.ibb.co.com/7J0w5r2t/growth-1-1.jpg",
        category: "FINANCIAL PLANNING",
    },
];

const Blog = () => {
    return (
        <div className="relative w-full max-w-6xl mx-auto my-10">
            <h3 className="text-red-600 font-bold text-sm uppercase">Blog Posts</h3>
            <h2 className="text-3xl font-bold mb-6">Latest from Blog</h2>

            <div className="flex items-center justify-between">
                {/* <button className="swiper-button-prev p-3 bg-gray-200 rounded-full shadow">
                    <ChevronLeft />
                </button> */}
                
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
                    className="w-full"
                >
                    {blogPosts.map((post, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white shadow-lg rounded-md p-4">
                                <div className="relative mb-4">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="rounded-md w-full h-auto"
                                    />
                                    <span className="absolute top-4 left-4 bg-red-500 text-white text-xs uppercase px-2 py-1 rounded">
                                        {post.category}
                                    </span>
                                </div>
                                <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                                <p className="text-gray-500 text-sm">{post.description}</p>
                                <a href="#" className="text-red-500 font-medium mt-2 block">
                                    → Read More
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* <button className="swiper-button-next p-3 bg-gray-200 rounded-full shadow">
                    <ChevronRight />
                </button> */}
            </div>

            <p className="text-center mt-6 text-gray-700">
                <strong>Explore the best financial tips and strategies tailored for your needs.</strong>
            </p>
        </div>
    );
};

export default Blog;