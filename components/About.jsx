import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; 

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-4 sm:px-12 lg:px-[12%] py-10 scroll-mt-20" 
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-Ovo" 
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20 my-10 lg:my-20" 
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-48 sm:w-64 lg:w-80 rounded-3xl overflow-hidden" 
        >
          <Image
            src={assets.user_image}
            alt="User Image" 
            width={320}  
            height={400} 
            layout="responsive"
            objectFit="cover" 
            className="rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-6 lg:mb-10 font-Ovo text-base sm:text-lg leading-relaxed max-w-2xl"> 
            Aspiring MERN Stack Developer seeking an opportunity to contribute
            to a progressive team, utilizing my strong foundation in front-end
            and back-end development to deliver robust and efficient
            applications.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-2xl" 
          >
            {infoList.map(({ icon, iconDark, title, description, link }, index) => (
              <motion.li
                whileInView={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                key={index}
              >
                <a href={link} target="_blank" rel="noopener noreferrer" className="block">
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    width={32} 
                    height={32}
                    className="w-7 mt-2 sm:mt-3 mx-auto" 
                  />
                  <h3 className="my-2 sm:my-4 font-semibold text-gray-700 dark:text-white text-center">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-white/80 text-center"> 
                    {description}
                  </p>
                </a>
              </motion.li>
            ))}
          </motion.ul>
          <br />
          

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="mt-6 lg:mt-10 mb-4 text-gray-700 font-Ovo dark:text-white/80 "
          >
            My Core Skills
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap  gap-3 sm:gap-5" 
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 overflow-hidden"
                key={index}
              >
                <Image
                  src={tool}
                  alt={`Tool ${index + 1}`} 
                  width={48} 
                  height={48}
                  objectFit="contain" 
                  className="w-full h-full"
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;