import { Building2, Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import React from 'react'



const FooterScreen = () => {
  return (
    <footer id='contact' className='bg-gray-900 text-white py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-4 gap-12 mb-12'>
          {/* Company Info */}
          <div>
            <img src='/Companylogo.jpg' alt='Minta Logo' className='mb-4 w-32' />
            <p className='text-gray-400 leading-relaxed'>
              Building trust through quality workmanship, dedicated manpower, and engineering excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='mb-4' style={{ fontWeight: 600 }}>
              Quick Links
            </h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#about'
                  className='text-gray-400 hover:text-blue-400 transition-colors'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='text-gray-400 hover:text-blue-400 transition-colors'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#clients'
                  className='text-gray-400 hover:text-blue-400 transition-colors'
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  href='#workforce'
                  className='text-gray-400 hover:text-blue-400 transition-colors'
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='mb-4' style={{ fontWeight: 600 }}>
              Services
            </h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#services'
                  className='text-gray-400 hover:text-blue-400 transition-colors'
                >
                  General Construction
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='text-gray-400 hover:text-blue-400 transition-colors'
                >
                  Gypsum & Interior Works
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='text-gray-400 hover:text-blue-400 transition-colors'
                >
                  Painting & Tiles Works
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='text-gray-400 hover:text-blue-400 transition-colors'
                >
                  MEP Works
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='text-gray-400 hover:text-blue-400 transition-colors'
                >
                  Cladding & Glass Works
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='mb-4' style={{ fontWeight: 600 }}>
              Contact Us
            </h4>
            <ul className='space-y-3'>
              <li className='flex items-start gap-3'>
                <Mail className='w-5 h-5 text-blue-400 mt-0.5' />
                <span className='text-gray-400'>mintafitouts@gmail.com</span>
              </li>
              <li className='flex items-start gap-3'>
                <Phone className='w-5 h-5 text-blue-400 mt-0.5' />
                <span className='text-gray-400'>+974 50339547</span>
              </li>
              <li className='flex items-start gap-3'>
                <MapPin className='w-10 h-10 text-blue-400 mt-0.5' />
                <span className='text-gray-400'>
                  P.O. Box 45741, Street no:3080, Zone no: 91, Floor: 1, Birkat Al Awameer, Qatar
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className='border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4'>
          <p className='text-gray-400'>
            © 2025 Minta. All rights reserved.
          </p>
          <div className='flex items-center gap-4'>
            <a
              href='#'
              className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors'
            >
              <Linkedin className='w-5 h-5' />
            </a>
            <a
              href='#'
              className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors'
            >
              <Twitter className='w-5 h-5' />
            </a>
            <a
              href='#'
              className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors'
            >
              <Facebook className='w-5 h-5' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterScreen