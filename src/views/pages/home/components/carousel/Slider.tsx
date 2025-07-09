import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Slider.module.css';

type CarouselProps = {
	imagesSrc: string[];
	options?: {
		hasArrows?: boolean;
		hasDots?: boolean;
		autoplay?: {
			enabled: boolean;
			delay?: number;
		};
	};
};

const Carousel = ({
	imagesSrc,
	options = {
		hasArrows: false,
		hasDots: false,
		autoplay: { enabled: false, delay: 2500 },
	},
}: CarouselProps) => {
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
			modules={[Navigation, Pagination, Autoplay]}
			centeredSlides={false}
			autoplay={
				options.autoplay?.enabled && {
					delay: options.autoplay?.delay,
					disableOnInteraction: true,
				}
			}
			pagination={
				options.hasDots && {
					clickable: true,
					dynamicBullets: true,
					type: 'bullets',
				}
			}
			navigation={options.hasArrows}
		>
			{imagesSrc.map((img, index) => (
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
