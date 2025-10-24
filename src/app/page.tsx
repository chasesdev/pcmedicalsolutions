'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, Heart, Shield, Activity, Users, ChevronRight, Menu, X, PlayCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Cold Therapy",
      description: "Advanced cold therapy systems for faster recovery and pain relief post-surgery or injury."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Compression Therapy",
      description: "Professional compression therapy to reduce swelling and improve circulation."
    },
    {
      icon: <Activity className="w-8 h-8 text-blue-600" />,
      title: "Electrotherapy",
      description: "State-of-the-art electrotherapy solutions for pain management and muscle stimulation."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Orthopedic Bracing",
      description: "Custom orthopedic bracing solutions for support and stability during recovery."
    }
  ]

  const benefits = [
    "Faster recovery times",
    "Reduced pain and swelling",
    "Physician-trusted solutions",
    "Home-based treatment options",
    "Professional medical equipment",
    "Personalized care plans"
  ]

  const videos = [
    {
      title: "Shoulder Wrap",
      description: "Applying the shoulder wrap for optimal results.",
      videoUrl: "https://player.vimeo.com/video/277528107?badge=0&autopause=0&player_id=0&app_id=58479"
    },
    {
      title: "Knee Wrap",
      description: "Applying the knee wrap for optimal results.",
      videoUrl: "https://player.vimeo.com/video/277527438?badge=0&autopause=0&player_id=0&app_id=58479"
    },
    {
      title: "Unpack Unit",
      description: "Unpacking the unit and its components.",
      videoUrl: "https://player.vimeo.com/video/277528231?badge=0&autopause=0&player_id=0&app_id=58479"
    },
    {
      title: "Hip Wrap",
      description: "How to apply the hip wrap for effective cold therapy.",
      videoUrl: "https://player.vimeo.com/video/277527008?badge=0&autopause=0&player_id=0&app_id=58479"
    },
    {
      title: "Ankle Wrap",
      description: "How to use the ankle wrap for effective cold therapy.",
      videoUrl: "https://player.vimeo.com/video/277526870?badge=0&autopause=0&player_id=0&app_id=58479"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center space-x-3">
                <img
                  src="/logo.png"
                  alt="PC Medical Solutions Logo"
                  className="h-8 w-8 object-contain"
                />
                <h1 className="text-xl font-bold text-blue-600">PC Medical Solutions</h1>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#videos" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Videos</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
                <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </div>
            </div>
            
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Home</a>
              <a href="#videos" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Videos</a>
              <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">About</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Contact</a>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-2">Get Started</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Advanced Recovery Solutions for
                <span className="text-blue-600"> Faster Healing</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Experience faster recovery, pain relief, and reduced swelling with our advanced cold therapy, 
                compression, electrotherapy, and orthopedic bracing solutions. Trusted by patients and physicians 
                for post-surgical and injury care.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Schedule Consultation
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  Learn More
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Heart className="w-10 h-10 text-blue-600 mb-3" />
                    <h3 className="font-semibold text-gray-900">Cold Therapy</h3>
                    <p className="text-sm text-gray-600 mt-1">Rapid pain relief</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Shield className="w-10 h-10 text-blue-600 mb-3" />
                    <h3 className="font-semibold text-gray-900">Compression</h3>
                    <p className="text-sm text-gray-600 mt-1">Reduce swelling</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Activity className="w-10 h-10 text-blue-600 mb-3" />
                    <h3 className="font-semibold text-gray-900">Electrotherapy</h3>
                    <p className="text-sm text-gray-600 mt-1">Pain management</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Users className="w-10 h-10 text-blue-600 mb-3" />
                    <h3 className="font-semibold text-gray-900">Bracing</h3>
                    <p className="text-sm text-gray-600 mt-1">Support & stability</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="videos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Product Training Videos
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Learn how to properly use our cold therapy equipment with these step-by-step instructional videos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={index === videos.length - 2 || index === videos.length - 1 ? "lg:col-span-1" : ""}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative aspect-video bg-gray-100">
                      <iframe
                        src={video.videoUrl}
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={video.title}
                      ></iframe>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <PlayCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
                          {video.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {video.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Center the last two videos on larger screens */}
          <style jsx>{`
            @media (min-width: 1024px) {
              .grid > *:nth-last-child(2),
              .grid > *:nth-last-child(1) {
                margin-left: auto;
                margin-right: auto;
              }
            }
          `}</style>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Our Professional Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive medical solutions designed to accelerate your recovery and improve your quality of life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full inline-flex">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose PC Medical Solutions?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine cutting-edge technology with compassionate care to deliver the best possible outcomes for our patients.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Trusted by Medical Professionals</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Our solutions are recommended by physicians and physical therapists across the country. 
                We maintain the highest standards of medical equipment and patient care.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-blue-100 text-sm">Patients Helped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-blue-100 text-sm">Physician Partners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-blue-100 text-sm">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              About PC Medical Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Dedicated to providing innovative medical solutions that enhance patient recovery and improve quality of life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient-Centered Care</h3>
              <p className="text-gray-600">
                We prioritize your comfort and recovery, providing personalized treatment plans tailored to your specific needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Equipment</h3>
              <p className="text-gray-600">
                We use only FDA-approved medical equipment and maintain the highest standards of safety and effectiveness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Service</h3>
              <p className="text-gray-600">
                Quick consultation and equipment delivery to ensure you start your recovery journey without delay.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Get Started Today
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Contact us to schedule a consultation and learn more about our recovery solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">info@pcmedicalsolutions.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">123 Medical Center Drive, Suite 100<br />Healthcare City, HC 12345</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Consultation</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">How can we help you?</label>
                    <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Submit Request
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/logo.png"
                  alt="PC Medical Solutions Logo"
                  className="h-8 w-8 object-contain"
                />
                <h3 className="text-xl font-bold">PC Medical Solutions</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Advanced recovery solutions for faster healing and better quality of life.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Cold Therapy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compression Therapy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Electrotherapy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Orthopedic Bracing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>(555) 123-4567</li>
                <li>info@pcmedicalsolutions.com</li>
                <li>123 Medical Center Drive</li>
                <li>Healthcare City, HC 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 PC Medical Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}