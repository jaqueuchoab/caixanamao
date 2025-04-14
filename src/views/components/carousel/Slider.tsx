import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Slider.module.css';

type CarouselProps = {
	images: string[];
};

const Carousel = ({ images }: CarouselProps) => {
	return (
		<Swiper
			breakpoints={{
				320: {
					slidesPerView: 1,
					spaceBetween: 2,
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 2,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 2,
				},
			}}
			centeredSlides={false}
			autoplay={{
				delay: 2500,
				disableOnInteraction: true,
			}}
			pagination={{
				clickable: true,
				dynamicBullets: true,
				type: 'bullets',
			}}
			navigation={true}
			modules={[Navigation, Pagination, Autoplay]}
		>
			{images.map((img, index) => (
				<SwiperSlide key={index}>
					<div style={{ width: '80%', margin: '0 auto' }}>
						<img
							src={img}
							style={{
								borderRadius: '12px',
								width: '100%',
								display: 'block',
							}}
						/>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Carousel;
