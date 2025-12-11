'use client'

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

import { services } from '@/constants';
import { styles } from '@/styles';
import { fadeIn, textVariant } from '@/utils/motion';

import { SectionWrapper } from '@/hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
          flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}
      className={`${styles.paddingX}`}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>


        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className={`mt-8 ${styles.paddingX} text-secondary text-[17px] max-w-5xl leading-[30px]`}
          style={{ textAlign: 'justify' }}
        >
      <p> I am a dedicated machine learning and backend engineer with hands-on experience building real-world AI systems, scalable backend services, and data-driven applications. With a strong background in Data Analytics (Master&apos;s from Deakin University) and industry experience as a Data Analyst and Project Manager, I&apos;ve developed a deep understanding of how data, engineering, and AI converge to create impactful products.
      </p>
       <p> I&apos;ve worked extensively across the ML and software stack—Python, Django, FastAPI, LangChain, OpenAI API, MongoDB, Pinecone, ElasticSearch, and cloud platforms like Google Cloud and Azure. My projects range from stock market analysis systems powered by clustering techniques, recommendation engines using neural networks, and end-to-end RAG chatbots connected to PDFs and databases, to full inventory management systems, e-commerce platforms, and AI-powered travel itinerary agents.
        </p>
       <p> I enjoy building practical applications of machine learning, especially in NLP, retrieval-augmented systems, and agentic AI workflows. I&apos;ve developed solutions such as multi-tool LLM agents for tariff classification, vendor-management systems using Django REST Framework, medical/chatbot prototypes using vector search, and image-recognition features for local business discovery in Nepal.
       </p>
        <p> Constantly exploring advancements in embeddings, model optimization, and knowledge retrieval, I&apos;m looking for opportunities where I can contribute to innovative teams working in applied machine learning, LLM agents, and AI for real-world business impact. My long-term vision is to pursue research in ML/AI—particularly areas like social-impact AI, supply chain intelligence, and multimodal agent systems.
           </p>
        </motion.div>




      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
