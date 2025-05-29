import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

interface ProjectCardProps {
  project: {
    title: string;
    image: string;
    shortDescription: string;
    tags: string[];
    url: string;
    learnMoreUrl?: string;
    gallery?: string[];
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const swiperRef = useRef<any>(null);

  const handleMouseEnter = () => {
    console.log('mouse enter');
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  const handleMouseLeave = () => {
    console.log('mouse leave');
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  return (
    <div className="bg-[#10131a] border border-[#232225] rounded-xl p-6 flex flex-col gap-4 shadow-sm min-h-[490px]">
      <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
      {/* <div className="w-full aspect-video rounded-lg overflow-hidden mb-2">
        <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
      </div> */}
      <div
        className="w-full aspect-video rounded-lg overflow-hidden mb-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {Array.isArray(project.gallery) && project.gallery.length > 0 ? (
            project.gallery.map((img, idx) => (
              <SwiperSlide key={img + idx}>
                <img src={img} alt={project.title} className="object-cover w-full h-full" />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      <p className="text-base text-[#b3b0b7] mb-4">{project.shortDescription}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-[#232225] text-[#b3b0b7] px-3 py-1 rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center mt-auto">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#a78bfa] text-sm hover:underline flex items-center gap-1"
        >
          Visit site{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 7l-10 10m0 0h6m-6 0V11"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
