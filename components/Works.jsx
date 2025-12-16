'use client'

import { motion } from 'framer-motion';
import { useState } from "react";
import Tilt from 'react-parallax-tilt';

import { github, web } from '@/assets';
import { projects } from '@/constants';
import { SectionWrapper } from '@/hoc';
import { styles } from '@/styles';
import { fadeIn, textVariant } from '@/utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, demo_url }) => {
  const [readMore, setReadMore] = useState(false);
  const maxDescriptionLength = 120;

  const truncatedDescription = description.length > maxDescriptionLength
    ? description.slice(0, maxDescriptionLength) + "..."
    : description;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full xs:w-[340px] sm:w-[360px] md:w-[380px]"
      style={{ minHeight: "450px" }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-4 sm:p-5 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer flex flex-col h-full"
      >
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden flex-shrink-0">
          <img
            src={image.src || image}
            alt={name}
            className="w-full h-full object-cover rounded-3xl"
          />

          <div className="absolute inset-0 flex justify-end items-start p-3 sm:p-4">
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-800/70 transition-colors duration-200"
              title="View Source Code"
            >
              <img
                src={demo_url ? web.src : github.src}
                alt="github"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 sm:mt-6 flex flex-col flex-grow">
          <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl line-clamp-2" title={name}>
            {name}
          </h3>

          <p
            className="mt-2 sm:mt-3 text-secondary text-[13px] sm:text-sm md:text-base leading-relaxed"
            style={{ textAlign: "justify" }}
          >
            {readMore ? description : truncatedDescription}
            {description.length > maxDescriptionLength && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setReadMore(!readMore);
                }}
                className="ml-2 text-blue-400 hover:underline focus:outline-none text-sm"
              >
                {readMore ? "Read less" : "Read more"}
              </button>
            )}
          </p>

          <div className="mt-auto flex flex-wrap gap-2 pt-4 sm:pt-5">
            {tags.map((tag) => (
              <p
                key={tag.name}
                className={`text-[11px] xs:text-[12px] sm:text-[13px] ${tag.color} bg-gray-800/30 px-2 py-1 rounded-full select-none`}
              >
                {tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}
        className={`${styles.paddingX} mx-auto`}>
        <p className={`${styles.sectionSubText} `}>
          My Work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>

      <div className={`${styles.paddingX} w-full flex `}>
        <motion.p
          variants={fadeIn("", "", 0.1)}
          className='mt-2 sm:mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]'
        >
          The following projects showcase my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories.
        </motion.p>
      </div>

      <div className={`${styles.paddingX} mt-8 sm:mt-10 flex flex-wrap items-stretch justify-center gap-5 sm:gap-7`}>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")
