import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users } from 'lucide-react';

const AboutScreen = () => {
  return (
    <section id='about' className='py-12 sm:py-16 bg-gradient-to-r from-red-200 to-blue-300 lg:py-24 px-4 sm:px-6 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          className='text-center mb-8 sm:mb-12 lg:mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className='text-gray-900 mb-4 px-4'
            style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 600 }}
          >
            About Minta
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-red-500 to-blue-600 mx-auto rounded-full' />
        </motion.div>

        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center'>
          <motion.div
            className='w-full lg:w-1/2 h-1/2'
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            <img
              src='/about.webp'
              alt='Professional team'
              className='rounded-2xl shadow-2xl w-full max-h-[50rem] object-cover'
              loading='eager'
            />
          </motion.div>

          <motion.div
            className='w-full lg:w-1/2'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.1
            }}
          >
            <p className='text-gray-700 mb-6 leading-relaxed text-lg'>
              Established in March 2016, MINTA Trading & Contracting W.L.L is a
              full-fledged contracting company in Qatar, specializing in MEP
              services, building contracting, sub-contracting, and facility
              maintenance. We deliver complete solutions in Plumbing, Fire
              Fighting, Electrical Works, and General Maintenance for projects
              of every scale.
            </p>
            <p className='text-gray-700 mb-6 leading-relaxed text-lg'>
              Backed by a highly qualified and experienced engineering team, we
              provide end-to-end project support—from design and technical
              assistance to material procurement and execution. Our senior
              experts offer valuable consultancy, while our agile operations
              team ensures every project is completed efficiently, safely, and
              on schedule.
            </p>
            <p className='text-gray-700 mb-6 leading-relaxed text-lg'>
              As integrated engineering specialists, we thrive on challenges: we
              simplify complex requirements, innovate with purpose, and approach
              every project with passion and precision. Our unwavering
              commitment to safety, quality, and timely delivery has established
              us as a trusted partner in Qatar's construction and engineering
              landscape.
            </p>
            <p className='text-gray-700 mb-6 leading-relaxed text-lg'>
              Alongside our contracting services, MINTA also delivers reliable
              manpower solutions tailored to local market demands. With a strong
              reserve of skilled labor, we provide the right workforce to
              support projects consistently and competitively.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6'>
              <div className='text-center p-4 bg-blue-50 rounded-xl bg-gradient-to-br from-red-200 to-cyan-300'>
                <CheckCircle2 className='w-8 h-8 text-blue-600  mx-auto mb-2' />
                <div className='text-gray-900 font-medium'>Quality</div>
              </div>
              <div className='text-center p-4 bg-blue-50 rounded-xl bg-gradient-to-br from-blue-200 to-pink-300 '>
                <TrendingUp className='w-8 h-8 text-blue-600 mx-auto mb-2' />
                <div className='text-gray-900 font-medium'>Innovation</div>
              </div>
              <div className='text-center p-4 bg-blue-50 rounded-xl bg-gradient-to-br from-blue-200 to-orange-300'>
                <Users className='w-8 h-8 text-blue-600 mx-auto mb-2' />
                <div className='text-gray-900 font-medium'>Partnership</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutScreen;