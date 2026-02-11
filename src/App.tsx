import { motion } from 'motion/react';
import { Target, Eye, Menu, X } from 'lucide-react';
import { VisionMissionCard } from './components/VisionMissionCard';
import { StatCounter } from './components/StatCounter';
import { Button } from './components/ui/button';
import AboutScreen from './aboutScreen';
import Services from './servicesScreen';
import ClientScreen from './clientScreen';
import FooterScreen from './footer';
import { useEffect, useState } from 'react';
import Counter from './components/counteranimation';
import LockWarningModal from './websitelock';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Delay video loading slightly to prioritize initial page load
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='min-h-screen bg-linear-to-b from-gray-50 to-white'>
      {/* Navigation */}
      <LockWarningModal />
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent '
        }`}
      >
        <div className='max-w-7xl mx-auto px-6 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <img
              src={isScrolled ? '/Companylogo.png' : '/CompanylogoLight.png'}
              alt='Minta Logo'
              className='max-w-[250px] max-h-[110px] object-contain'
            />
          </div>
          <div className='hidden md:flex items-center gap-8'>
            <a
              href='#about'
              className={`transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-red-600'
                  : 'text-white hover:text-red-400'
              }`}
            >
              About
            </a>
            <a
              href='#services'
              className={`transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-red-600'
                  : 'text-white hover:text-red-400'
              }`}
            >
              Services
            </a>
            <a
              href='#clients'
              className={`transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-red-600'
                  : 'text-white hover:text-red-400'
              }`}
            >
              Clients
            </a>
            <a
              href='#workforce'
              className={`transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-red-600'
                  : 'text-white hover:text-red-400'
              }`}
            >
              Team
            </a>
            <a href='#contact' className='bg-gradient-to-r px-4 py-2 rounded-lg from-red-500 to-red-500 hover:from-red-300 hover:to-red-300 text-white cursor-pointer'>
              Contact Us
            </a>
          </div>
          <div className='md:hidden'>
            <button
              className={`transition-colors p-2 ${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white hover:text-blue-400'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label='Toggle menu'
            >
              {isMobileMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className='md:hidden  bg-white/95 w-full backdrop-blur-md border-t border-gray-200'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className='px-6 py-4 space-y-4 w-full'>
              <motion.a
                href='#about'
                className='text-gray-600 hover:text-red-600 transition-colors block py-2'
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                About
              </motion.a>
              <motion.a
                href='#services'
                className='text-gray-600 hover:text-red-600 transition-colors block py-2'
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
              >
                Services
              </motion.a>
              <motion.a
                href='#clients'
                className='text-gray-600 hover:text-red-600 transition-colors block py-2'
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Clients
              </motion.a>
              <motion.a
                href='#workforce'
                className='text-gray-600 hover:text-red-600 transition-colors block py-2'
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
              >
                Team
              </motion.a>
              <motion.a
              href='#contact'
               onClick={() => setIsMobileMenuOpen(false)}
              className='w-full'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button  className='px-5 py-2 rounded-xl mx-auto w-full bg-gradient-to-r from-red-400 to-red-400  text-white '>
                  Contact Us
                </ Button>
              </motion.a>
            </div>
          </motion.div>
        )}
      </nav>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-4'>
        {/* Fallback Image - Shows while video is loading */}
        <div
          className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-700 ${
            isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('/coverImage.webp')",
          }}
        />

        {/* Video Background */}
        {showVideo && (
          <video
            className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            loop
            muted
            playsInline
            preload='metadata'
            onLoadedData={() => setIsVideoLoaded(true)}
            poster='/coverImage.webp'
          >
            <source src='/coverVideo.mp4' type='video/mp4' />
            <source src='/your-video.webm' type='video/webm' />
          </video>
        )}

        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6))] z-[1]' />

        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-linear-to-r from-black-600/20 to-red-400/20 z-[1]' />

        {/* Content */}
        <div className='relative z-10 max-w-7xl mx-auto px-6 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className='bg-white bg-clip-text text-transparent mb-8 tracking-tight text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl'
              style={{
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                textShadow: '0 8px 20px rgba(0,0,0,0.4)',
              }}
            >
              More than promised
              <br />
              <span className='bg-gradient-to-r from-red-300 to-gray-200 bg-clip-text text-transparent'>
                Better than imagined.
              </span>
            </h1>

            <p
              className='text-white/90 mb-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl'
              style={{ lineHeight: 1.6 }}
            >
              Leading Qatar's construction sector with integrated MEP
              contracting, engineering expertise, and reliable manpower
              solutions committed to safety, quality, and timely delivery.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <a
                href='#about'
                className='bg-white rounded-lg text-red-400 hover:bg-gray-100 w-full sm:w-auto text-center transition-colors'
                style={{ fontSize: '1.125rem', padding: '0.75rem 2rem' }}
              >
                Learn More
              </a>
              <a
                href='#contact'
                className='border-2 border-white rounded-lg text-white hover:bg-white/10 w-full sm:w-auto text-center transition-colors'
                style={{ fontSize: '1.125rem', padding: '0.75rem 2rem' }}
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
            className='flex flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 mt-12 sm:mt-16 md:mt-20'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className='text-center'>
              <div className='text-white text-4xl sm:text-5xl md:text-6xl font-bold'>
                <Counter target={100} suffix='+' />
              </div>
              <div className='text-white/80 text-sm sm:text-base'>Clients</div>
            </div>

            <div className='text-center'>
              <div className='text-white text-4xl sm:text-5xl md:text-6xl font-bold'>
                <Counter target={10} suffix='+' />
              </div>
              <div className='text-white/80 text-sm sm:text-base'>Years</div>
            </div>

            <div className='text-center'>
              <div className='text-white text-4xl sm:text-5xl md:text-6xl font-bold'>
                <Counter target={98} suffix='%' />
              </div>
              <div className='text-white/80 text-sm sm:text-base'>
                Satisfaction
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About the Company */}
      <AboutScreen />

      {/* Vision & Mission */}
      <section className='py-24 px-6 bg-linear-to-r from-red-200 to-white to-red-300'>
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
              Our Vision & Mission
            </h2>
            <div className='w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full' />
          </motion.div>

          <div className='grid md:grid-cols-2 gap-8'>
            <VisionMissionCard
              icon={Eye}
              title='Vision'
              image='/vision.webp'
              gradient='from-orange-500 to-blue-600'
            />
            <VisionMissionCard
              icon={Target}
              title='Mission'
              image='/mission.webp'
              gradient='from-blue-500 to-orange-600'
            />
          </div>
        </div>
      </section>

      {/* Services Section - Main Highlight */}
      <Services />

      {/* Clients Section */}
      <ClientScreen />

      {/* Workforce Section */}
      <section
        id='workforce'
        className='py-24 px-6 bg-gradient-to-r from-red-200 to-white'
      >
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
              Our Workforce
            </h2>
            <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full' />
          </motion.div>

          <div className='grid md:grid-cols-2 gap-12 items-center mb-16 '>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src='/labours.jpg'
                alt='Workspace'
                className='rounded-2xl shadow-2xl'
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className='text-gray-900 mb-6'
                style={{ fontSize: '1.875rem', fontWeight: 600 }}
              >
                A Team Built on Excellence
              </h3>
              <p
                className='text-gray-700 mb-6 leading-relaxed'
                style={{ fontSize: '1.125rem' }}
              >
                At Minta Trading and Contracting W.L.L, our labour force is the
                foundation of every project. Their skill, dedication, and
                discipline turn plans into progress and structures into success.
                We believe that we shape our buildings, and in return, they
                shape us—and that’s why we invest in a workforce that is
                trained, reliable, and driven by purpose.{' '}
              </p>
              <p
                className='text-gray-700 leading-relaxed'
                style={{ fontSize: '1.125rem' }}
              >
                Our team is more than manpower; they are craftsmen,
                problem-solvers, and the true ambassadors of Minta’s promise of
                quality. Through them, we deliver trust, precision, and
                results—project after project, milestone after milestone.
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          {/* <div className='grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl shadow-lg p-8'>
            <StatCounter
              icon={Users}
              value={350}
              suffix='+'
              label='Skilled Professionals'
            />
            <StatCounter
              icon={Award}
              value={15}
              suffix='+'
              label='Years of Excellence'
            />
            <StatCounter
              icon={Clock}
              value={12}
              suffix='+'
              label='Avg. Experience (Years)'
            />
            <StatCounter
              icon={Target}
              value={98}
              suffix='%'
              label='Client Retention'
            />
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <FooterScreen />
    </div>
  );
}
