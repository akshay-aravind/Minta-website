import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users } from 'lucide-react';

const AboutScreen = () => {
  return (
    <section
      id='about'
      className='py-12 sm:py-16 bg-linear-to-r from-orange-200 to-white lg:py-24 px-4 sm:px-6 bg-white'
    >
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
          <div className='w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full' />
        </motion.div>

        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center'>
          <motion.div
            className='w-full lg:w-1/2 h-1/2'
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px 0px -200px 0px' }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <img
              src='/about.webp'
              alt='Professional team'
              className='rounded-2xl shadow-2xl w-full max-h-[40rem] object-cover'
              loading='eager'
            />
          </motion.div>

          <motion.div
            className='w-full lg:w-1/2'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px 0px -200px 0px' }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.1,
            }}
          >
            <p className='text-gray-700 mb-6 leading-relaxed text-lg'>
              Established in March 2016, MINTA Trading & Contracting W.L.L is a
              Qatar-based contracting company specializing in MEP services,
              building contracting, sub-contracting, and facility maintenance.
              We provide complete solutions in Plumbing, Fire Fighting,
              Electrical Works, and General Maintenance for projects of every
              size.
            </p>
            <p className='text-gray-700 mb-6 leading-relaxed text-lg'>
              Supported by an experienced engineering team, we deliver
              end-to-end support—design, technical assistance, material
              procurement, and execution backed by senior consultancy and an
              agile operations team that ensures projects are completed safely,
              efficiently, and on schedule.
            </p>
            <p className='text-gray-700 mb-6 leading-relaxed text-lg'>
              As integrated engineering specialists, we simplify complex
              requirements, innovate with purpose, and maintain a strong
              commitment to safety, quality, and timely delivery, earning our
              place as a trusted partner in Qatar’s construction sector.
            </p>
            <p className='text-gray-700 mb-6 leading-relaxed text-lg'>
              In addition, MINTA provides reliable manpower solutions, offering
              skilled labor tailored to market needs for consistent, competitive
              project support.
            </p>

            <div className='grid grid-cols-3 gap-4 sm:gap-6'>
              <div className='text-center p-4 moving-gradient border-gray-400 border-2 rounded-xl'>
                <CheckCircle2 className='w-8 h-8 text-white mx-auto mb-2' />
                <div className='text-white font-medium text-sm sm:text-lg'>Quality</div>
              </div>

              <div className='text-center p-4 moving-gradient border-gray-400 border-2 rounded-xl'>
                <TrendingUp className='w-8 h-8 text-white mx-auto mb-2' />
                <div className='text-white font-medium text-sm sm:text-lg'>Innovation</div>
              </div>

              <div className='text-center p-4 moving-gradient border-gray-400 border-2 rounded-xl'>
                <Users className='w-8 h-8 text-white mx-auto mb-2' />
                <div className='text-white font-medium text-sm sm:text-lg'>Partnership</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutScreen;
