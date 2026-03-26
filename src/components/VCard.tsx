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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-amber rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-forest-green rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-orange-light rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-md"
      >
        {/* Premium glass card */}
        <div className="bg-slate-800/50 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-700/50 p-8 relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-amber/5 via-transparent to-forest-green/5 pointer-events-none"></div>
          
          {/* Logo */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6 relative">
            <div className="w-20 h-20 bg-slate-900/80 rounded-2xl flex items-center justify-center shadow-xl border border-slate-700/50 backdrop-blur-sm">
              <img 
                src="/logo.png" 
                alt="SenAgriConnect Logo" 
                className="w-16 h-16 object-contain filter drop-shadow-lg"
              />
            </div>
          </motion.div>

          {/* Profile photo */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6 relative">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-orange-amber to-forest-green shadow-2xl relative">
                <img 
                  src="/profil.jpg" 
                  alt="Mairame SOW" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-amber to-forest-green opacity-60 blur-md"></div>
              </div>
              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-full border-2 border-orange-amber opacity-40 animate-pulse scale-110"></div>
            </div>
          </motion.div>

          {/* Name and title */}
          <motion.div variants={itemVariants} className="text-center mb-8 relative">
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
              Mairame SOW
            </h1>
            <div className="text-lg font-semibold text-orange-amber mb-1">
              CEO / Cofounder
            </div>
            <div className="text-lg text-forest-green">
              SenAgriConnect
            </div>
          </motion.div>

          {/* Contact information */}
          <motion.div variants={itemVariants} className="space-y-4 mb-8">
            <div className="flex items-center space-x-4 text-slate-300 bg-slate-900/30 rounded-xl p-3 backdrop-blur-sm border border-slate-700/30">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-amber to-orange-light rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="text-sm font-medium">{contactData.phone}</span>
            </div>
            
            <div className="flex items-center space-x-4 text-slate-300 bg-slate-900/30 rounded-xl p-3 backdrop-blur-sm border border-slate-700/30">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-amber to-orange-light rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <span className="text-sm font-medium">{contactData.email}</span>
            </div>
            
            <div className="flex items-center space-x-4 text-slate-300 bg-slate-900/30 rounded-xl p-3 backdrop-blur-sm border border-slate-700/30">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-amber to-orange-light rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium">{contactData.address}</span>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div variants={itemVariants} className="space-y-3">
            <button
              onClick={handleSaveContact}
              className="w-full bg-gradient-to-r from-forest-green via-forest-light to-forest-green text-orange-amber py-4 px-6 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-forest-green/50 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-amber/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Enregistrer le contact</span>
            </button>
            
            <div className="flex space-x-3">
              <button
                onClick={handleWhatsApp}
                className="flex-1 bg-gradient-to-r from-green-600 to-green-500 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 border border-green-600/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp</span>
              </button>
              
              <button
                onClick={handleLinkedIn}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 border border-blue-600/30"
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
