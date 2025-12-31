import React from 'react';
import { motion } from 'framer-motion';

const ClientScreen = () => {
  const clients = [
    { name: 'Boom General Contractors', logo: '/clientlogos/BoomGeneral.png' },
    { name: 'Huawei', logo: '/clientlogos/Huawei.png' },
    { name: 'Palm Tower', logo: '/clientlogos/Palm.png' },
    { name: 'Al Darwish Engineering', logo: '/clientlogos/Aldarwish.png' },
    { name: 'HBK', logo: '/clientlogos/HBK.png' },
    { name: 'Smeet', logo: '/clientlogos/Smeet.png' },
    { name: 'Msheireb Properties', logo: '/clientlogos/Msheireb.png' },
    { name: 'Katara Hospitality', logo: '/clientlogos/Katara.png' },
    { name: 'Quest International', logo: '/clientlogos/Quest.png' },
    { name: 'Hassanesco', logo: '/clientlogos/HCC.png' },
    { name: 'Living IN', logo: '/clientlogos/LivingIn.png' },
    { name: 'Al Jaber united', logo: '/clientlogos/Aljaber.png' },
  ];
  return (
  <section id='clients' className='py-20 bg-gradient-to-r from-orange-200 to-white-300   overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.div
          className='text-center mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className='inline-block px-4 py-2 bg-white text-orange-600 rounded-full text-sm font-medium mb-4'>
            Trusted Partners
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Industry Leaders Trust Us
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
            Partnering with Qatar's most prestigious organizations
          </p>
        </motion.div>

        {/* Double row infinite scroll */}
        <div className='relative'>
          {/* Top row - scrolls right */}
          <div className='flex overflow-hidden mb-6 hover-pause-parent'>
            <motion.div
              className='flex gap-6 hover-pause-child'
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className='flex-shrink-0 w-48 h-32 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 p-6 flex items-center justify-center group'
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className='max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300'
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom row - scrolls left */}
          <div className='flex overflow-hidden hover-pause-parent'>
            <motion.div
              className='flex gap-6 hover-pause-child'
              animate={{ x: ['-50%', '0%'] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className='flex-shrink-0 w-48 h-32 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 p-6 flex items-center justify-center group'
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className='max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300'
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <style>{`
          .hover-pause-parent:hover .hover-pause-child {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
};

export default ClientScreen;