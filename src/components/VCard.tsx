'use client'

import { motion } from 'framer-motion';
import { downloadVCF } from '@/lib/vcard';

const VCard = () => {
  const contactData = {
    firstName: 'Mairame',
    lastName: 'SOW',
    organization: 'SenAgriConnect',
    title: 'CEO / Cofounder',
    phone: '+221764348852',
    email: 'mairamesow509@gmail.com',
    address: 'Dakar, Sénégal',
    linkedin: 'https://www.linkedin.com/in/s-a-c-senagriconnect-a0a721386'
  };

  const handleSaveContact = () => {
    downloadVCF(contactData, 'Mairame_SOW_SenAgriConnect.vcf');
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${contactData.phone.replace(/\D/g, '')}`, '_blank');
  };

  const handleLinkedIn = () => {
    window.open(contactData.linkedin, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-green via-forest-light to-orange-amber flex items-center justify-center p-4">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-md"
      >
        {/* Glass card */}
        <div className="bg-glass-white backdrop-blur-xl rounded-3xl shadow-2xl border border-glass-border p-8">
          
          {/* Logo */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <img 
                src="/logo.png" 
                alt="SenAgriConnect Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
          </motion.div>

          {/* Profile photo */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-amber shadow-xl">
                <img 
                  src="/profil.jpg" 
                  alt="Mairame SOW" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Ring effect */}
              <div className="absolute inset-0 rounded-full border-2 border-orange-amber opacity-50 animate-pulse" />
            </div>
          </motion.div>

          {/* Name and title */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Mairame SOW
            </h1>
            <div className="text-lg font-semibold text-forest-green mb-1">
              CEO / Cofounder
            </div>
            <div className="text-lg text-forest-green">
              SenAgriConnect
            </div>
          </motion.div>

          {/* Contact information */}
          <motion.div variants={itemVariants} className="space-y-3 mb-8">
            <div className="flex items-center space-x-3 text-gray-700">
              <div className="w-8 h-8 bg-orange-amber rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="text-sm">{contactData.phone}</span>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-700">
              <div className="w-8 h-8 bg-orange-amber rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <span className="text-sm">{contactData.email}</span>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-700">
              <div className="w-8 h-8 bg-orange-amber rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm">{contactData.address}</span>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div variants={itemVariants} className="space-y-3">
            <button
              onClick={handleSaveContact}
              className="w-full bg-gradient-to-r from-forest-green to-forest-light text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-forest-green"
            >
              Enregistrer le contact
            </button>
            
            <div className="flex space-x-3">
              <button
                onClick={handleWhatsApp}
                className="flex-1 bg-green-500 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp</span>
              </button>
              
              <button
                onClick={handleLinkedIn}
                className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default VCard;
