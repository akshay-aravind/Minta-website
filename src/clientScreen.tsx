import React from 'react';
import { motion } from 'framer-motion';

const ClientScreen = () => {
  const clients = [
    { name: 'Boom General Contractors', logo: '/clientlogos/BoomGeneral.png' },
    { name: 'Huawei', logo: '/clientlogos/Huawei.png' },
    { name: 'Palm Tower', logo: '/clientlogos/Palm.png' },
    { name: 'Al Darwish Engineering', logo: '/clientlogos/AlDarwish.png' },
    { name: 'HBK', logo: '/clientlogos/HBK.png' },
    { name: 'Smeet', logo: '/clientlogos/Smeet.png' },
    { name: 'Msheireb Properties', logo: '/clientlogos/Msheireb.png' },
    { name: 'Katara Hospitality', logo: '/clientlogos/Katara.png' },
    { name: 'Quest International', logo: '/clientlogos/Quest.png' },
    { name: 'Hassanesco', logo: '/clientlogos/HCC.png' },
    { name: 'Living IN', logo: '/clientlogos/LivingIN.png' },
    { name: 'Al Jaber united', logo: '/clientlogos/AlJaber.png' },
  ];
  return (
    <section id='clients' className='py-24  bg-gradient-to-r from-red-200 to-blue-300'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className='text-gray-900 mb-4'
            style={{ fontSize: '2.5rem', fontWeight: 600 }}
          >
            Trusted by Industry Leaders
          </h2>
          <div className='w-20 h-1 bg-linear-to-r from-red-500 to-blue-600 mx-auto rounded-full' />
        </motion.div>

        <div className='mb-16 overflow-hidden'>
          <div className='flex gap-8 animate-marquee'>
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                className='shrink-0 flex min-w-[200px] items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: (index % clients.length) * 0.1,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className='text-center'>
                  <div className='w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-2'>
                    <img
                      src={client.logo}
                      alt={client.name}
                      className=' object-cover rounded-full'
                    />
                  </div>
                  <div
                    className='text-gray-600 whitespace-nowrap'
                    style={{ fontSize: '0.875rem' }}
                  >
                    {client.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-marquee {
            animation: marquee 6s linear infinite;
            display: flex;
          }
          
  
        `}</style>

        {/* Testimonial */}
        <motion.div
          className='max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-12 shadow-lg'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            className='text-blue-600 mb-6'
            style={{ fontSize: '3rem', lineHeight: 1 }}
          >
            "
          </div>
          <p
            className='text-gray-700 mb-6 italic'
            style={{ fontSize: '1.25rem', lineHeight: 1.8 }}
          >
            Minta elevated our project delivery standards. Their skilled
            workforce, engineering support, and prompt service helped us achieve
            consistent results. We now rely on Minta as an integral part of our
            operations.
          </p>
          <div className='flex items-center gap-4'>
            {/* <div className='w-14 h-14 bg-linear-to-br from-red-500 to-blue-600 rounded-full' /> */}
            <div>
              <div className='text-gray-900' style={{ fontWeight: 600 }}>
                Raheeb VC
              </div>
              {/* <div className='text-gray-600'>T</div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientScreen;