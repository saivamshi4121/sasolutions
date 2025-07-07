import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <img
              src={testimonials[active].src}
              alt={testimonials[active].name}
              className="h-full w-full rounded-3xl object-cover transition-all duration-500"
              draggable={false}
            />
          </div>
        </div>

        <div className="flex flex-col justify-between py-4">
          <div>
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {testimonials[active].quote}
            </p>
          </div>

          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={() =>
                setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
              }
              className="group flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover:-translate-x-0.5 dark:text-neutral-400" />
            </button>
            <button
              onClick={() => setActive((prev) => (prev + 1) % testimonials.length)}
              className="group flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover:translate-x-0.5 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
