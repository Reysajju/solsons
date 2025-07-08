import React, { useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  Phone, 
  Mail,
  MapPin,
  Award,
  Clock,
  Target,
  ExternalLink,
  MessageCircle,
  BookOpen,
  Globe,
  Zap,
  PenTool,
  FileText,
  Video,
  Headphones,
  Image as ImageIcon,
  DollarSign,
  BarChart3,
  Rocket,
  Sparkles,
  TrendingUp as TrendingUpIcon,
  Heart,
  Eye,
  Download
} from 'lucide-react';

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const resultsScrollRef = useRef<HTMLDivElement>(null);
  const testimonialsScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollContainer2 = scrollRef2.current;
    const resultsContainer = resultsScrollRef.current;
    const testimonialsContainer = testimonialsScrollRef.current;
    
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const animationDuration = scrollWidth / 50;
      scrollContainer.style.animationDuration = `${animationDuration}s`;
    }
    
    if (scrollContainer2) {
      const scrollWidth2 = scrollContainer2.scrollWidth;
      const animationDuration2 = scrollWidth2 / 50;
      scrollContainer2.style.animationDuration = `${animationDuration2}s`;
    }

    if (resultsContainer) {
      const scrollWidth3 = resultsContainer.scrollWidth;
      const animationDuration3 = scrollWidth3 / 40;
      resultsContainer.style.animationDuration = `${animationDuration3}s`;
    }

    if (testimonialsContainer) {
      const scrollWidth4 = testimonialsContainer.scrollWidth;
      const animationDuration4 = scrollWidth4 / 35;
      testimonialsContainer.style.animationDuration = `${animationDuration4}s`;
    }
  }, []);

  const handleGetStarted = () => {
    const subject = encodeURIComponent("I want to publish my content");
    window.location.href = `mailto:peters@solson.online?subject=${subject}`;
  };

  // Custom Logo Component
  const SolsonLogo = ({ className = "h-8 w-8" }) => (
    <div className={`${className} relative flex items-center justify-center`}>
      <div className="relative">
        <BookOpen className="h-full w-full text-blue-600" />
        <Globe className="absolute -top-1 -right-1 h-4 w-4 text-green-500" />
      </div>
    </div>
  );

  // Floating Animation Component
  const FloatingElement = ({ children, delay = 0, duration = 3 }: { children: React.ReactNode, delay?: number, duration?: number }) => (
    <div 
      className="absolute animate-float opacity-20"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 z-50 shadow-2xl backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <MessageCircle className="h-5 w-5 mr-2 animate-pulse" />
            <span className="font-semibold">Ready to publish your content globally?</span>
          </div>
          <button 
            onClick={handleGetStarted}
            className="bg-white text-orange-500 px-6 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="/" className="flex items-center group">
                <SolsonLogo className="h-10 w-10 mr-3 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solson</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#authors" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Authors
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Success Stories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/contact.html" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Publish Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Animated Background */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <FloatingElement delay={0} duration={4}>
            <div className="top-20 left-10">
              <BookOpen className="h-16 w-16 text-blue-300" />
            </div>
          </FloatingElement>
          
          <FloatingElement delay={1} duration={5}>
            <div className="top-32 right-20">
              <PenTool className="h-12 w-12 text-purple-300" />
            </div>
          </FloatingElement>
          
          <FloatingElement delay={2} duration={3.5}>
            <div className="top-60 left-1/4">
              <FileText className="h-14 w-14 text-green-300" />
            </div>
          </FloatingElement>
          
          <FloatingElement delay={0.5} duration={4.5}>
            <div className="bottom-40 right-10">
              <Globe className="h-18 w-18 text-blue-400" />
            </div>
          </FloatingElement>
          
          <FloatingElement delay={1.5} duration={3.8}>
            <div className="top-40 right-1/3">
              <Sparkles className="h-10 w-10 text-yellow-300" />
            </div>
          </FloatingElement>
          
          <FloatingElement delay={2.5} duration={4.2}>
            <div className="bottom-60 left-20">
              <Heart className="h-12 w-12 text-pink-300" />
            </div>
          </FloatingElement>
          
          <FloatingElement delay={0.8} duration={3.2}>
            <div className="top-80 left-1/2">
              <TrendingUpIcon className="h-14 w-14 text-orange-300" />
            </div>
          </FloatingElement>
          
          <FloatingElement delay={1.8} duration={4.8}>
            <div className="bottom-20 right-1/4">
              <Eye className="h-10 w-10 text-indigo-300" />
            </div>
          </FloatingElement>

          {/* Gradient Orbs */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6 animate-bounce">
                <Sparkles className="h-4 w-4 mr-2" />
                Join 50,000+ Published Authors
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Transform Your Ideas Into 
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient"> Published Content</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join the world's leading digital publishing platform. Publish books, articles, and multimedia content 
                to reach millions of readers worldwide. Turn your creativity into a thriving publishing business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-2xl hover:shadow-3xl group"
                >
                  Start Publishing Today
                  <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => document.getElementById('authors')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-semibold backdrop-blur-sm"
                >
                  See Success Stories
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center group">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Global distribution
                </div>
                <div className="flex items-center group">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Instant publishing
                </div>
                <div className="flex items-center group">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Earn royalties
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Rocket className="h-6 w-6 mr-2 text-blue-600" />
                  Start Your Publishing Journey
                </h3>
                
                {/* Netlify Contact Form */}
                <form 
                  name="publisher-contact" 
                  method="POST" 
                  data-netlify="true" 
                  action="/thank-you.html"
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="publisher-contact" />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Your Full Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="content-type" className="block text-sm font-medium text-gray-700 mb-1">
                      Content Type
                    </label>
                    <select
                      id="content-type"
                      name="content-type"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    >
                      <option value="">What do you want to publish?</option>
                      <option value="book">Book/eBook</option>
                      <option value="articles">Articles/Blog Posts</option>
                      <option value="research">Research Papers</option>
                      <option value="multimedia">Multimedia Content</option>
                      <option value="magazine">Magazine/Newsletter</option>
                      <option value="course">Online Course</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Tell us about your content
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="What's your content about? What are your publishing goals?"
                    ></textarea>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                      <Award className="h-4 w-4 mr-2" />
                      What you'll get:
                    </h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                        Free publishing consultation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                        Custom publishing strategy
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                        Global distribution plan
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                        Revenue optimization tips
                      </li>
                    </ul>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Get My Publishing Plan
                  </button>
                </form>
                
                <p className="text-xs text-gray-500 mt-4 text-center flex items-center justify-center">
                  <Users className="h-3 w-3 mr-1" />
                  Join 50,000+ published authors and content creators worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Reviews Section */}
      <section className="py-8 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
        <div className="mb-4">
          <div 
            ref={scrollRef}
            className="flex space-x-8 animate-scroll-rtl"
            style={{
              animation: 'scroll-rtl 60s linear infinite'
            }}
          >
            {[
              { name: "Sarah Johnson", type: "Bestselling Author", rating: 5, text: "Published 5 books, earned $50K in first year!" },
              { name: "Dr. Michael Chen", type: "Research Scientist", rating: 5, text: "My research reached 100K+ readers globally" },
              { name: "Emma Rodriguez", type: "Content Creator", rating: 5, text: "Monthly revenue of $8K from my articles" },
              { name: "James Wilson", type: "Business Author", rating: 5, text: "Book became #1 in business category" },
              { name: "Lisa Park", type: "Fiction Writer", rating: 5, text: "Trilogy sold 25K copies worldwide" },
              { name: "David Thompson", type: "Educational Content", rating: 5, text: "Online course reached 10K students" },
              { name: "Maria Santos", type: "Lifestyle Blogger", rating: 5, text: "Blog monetization increased 400%" },
              { name: "Robert Kim", type: "Technical Writer", rating: 5, text: "Programming guide became industry standard" }
            ].map((review, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg min-w-[300px] flex-shrink-0 border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-2">"{review.text}"</p>
                <div className="text-xs text-gray-500">
                  <div className="font-semibold">{review.name}</div>
                  <div>{review.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div 
            ref={scrollRef2}
            className="flex space-x-8 animate-scroll-ltr"
            style={{
              animation: 'scroll-ltr 60s linear infinite'
            }}
          >
            {[
              { name: "Amanda Foster", type: "Children's Author", rating: 5, text: "Picture book series loved by thousands" },
              { name: "Carlos Rodriguez", type: "Health & Wellness", rating: 5, text: "Nutrition guide changed lives globally" },
              { name: "Jennifer Walsh", type: "Romance Novelist", rating: 5, text: "Romance series topped bestseller lists" },
              { name: "Mark Stevens", type: "Investment Advisor", rating: 5, text: "Financial guide helped 50K+ investors" },
              { name: "Tony Martinez", type: "Chef & Author", rating: 5, text: "Cookbook became international hit" },
              { name: "Rachel Green", type: "Self-Help Author", rating: 5, text: "Motivational book inspired millions" },
              { name: "Alex Johnson", type: "Sci-Fi Writer", rating: 5, text: "Space opera series gained cult following" },
              { name: "Sophie Brown", type: "Art Instructor", rating: 5, text: "Art tutorials reached creative community" }
            ].map((review, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg min-w-[300px] flex-shrink-0 border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-2">"{review.text}"</p>
                <div className="text-xs text-gray-500">
                  <div className="font-semibold">{review.name}</div>
                  <div>{review.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">50K+</div>
              <div className="text-gray-300 group-hover:text-white transition-colors duration-300">Published Authors</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">2M+</div>
              <div className="text-gray-300 group-hover:text-white transition-colors duration-300">Content Pieces Published</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">150+</div>
              <div className="text-gray-300 group-hover:text-white transition-colors duration-300">Countries Reached</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">$50M+</div>
              <div className="text-gray-300 group-hover:text-white transition-colors duration-300">Author Earnings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Tired of Your Content Being Invisible to the World?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20">
              <div className="text-red-500 text-5xl mb-4">📚</div>
              <h3 className="font-semibold text-gray-900 mb-3">Limited Reach</h3>
              <p className="text-gray-600">Your amazing content sits on your computer while millions of potential readers never discover it</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20">
              <div className="text-red-500 text-5xl mb-4">💸</div>
              <h3 className="font-semibold text-gray-900 mb-3">No Monetization</h3>
              <p className="text-gray-600">You create valuable content but struggle to turn your expertise into sustainable income</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20">
              <div className="text-red-500 text-5xl mb-4">🔒</div>
              <h3 className="font-semibold text-gray-900 mb-3">Complex Publishing</h3>
              <p className="text-gray-600">Traditional publishing is slow, expensive, and gives you little control over your work</p>
            </div>
          </div>
          <p className="text-xl text-gray-700 mb-8">
            <strong>The truth is:</strong> Your ideas deserve to reach the world. Every day you wait is another day your potential readers 
            miss out on your valuable content.
          </p>
          <button 
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-2xl group"
          >
            Start Publishing Today
            <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* Solution Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Complete Digital Publishing Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From manuscript to global bestseller - we provide everything you need to publish, distribute, and monetize your content worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Rocket className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Instant Publishing</h3>
              <p className="text-gray-600">
                Upload your content and go live within 24 hours. No waiting months for approval - 
                your ideas reach readers immediately.
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-green-100 to-green-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Distribution</h3>
              <p className="text-gray-600">
                Reach readers in 150+ countries through our worldwide distribution network. 
                Your content becomes available to millions instantly.
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-orange-100 to-orange-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <DollarSign className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Maximize Earnings</h3>
              <p className="text-gray-600">
                Keep up to 70% of your revenue with our transparent royalty system. 
                Multiple monetization options to maximize your income.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Books & eBooks</h4>
              <p className="text-sm text-gray-600">Fiction, non-fiction, textbooks, and more</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-green-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Articles & Blogs</h4>
              <p className="text-sm text-gray-600">Professional articles and blog content</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-purple-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <Video className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Video Content</h4>
              <p className="text-sm text-gray-600">Educational videos and documentaries</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-orange-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <Headphones className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Audio Content</h4>
              <p className="text-sm text-gray-600">Podcasts, audiobooks, and music</p>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-2xl group"
            >
              Start Your Publishing Journey
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Animated Success Stories */}
      <section id="authors" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Success Stories from Real Authors
            </h2>
            <p className="text-xl text-gray-600">
              See how creators like you built thriving publishing businesses with Solson
            </p>
          </div>

          <div className="mb-8">
            <div 
              ref={resultsScrollRef}
              className="flex space-x-8 animate-scroll-rtl"
              style={{
                animation: 'scroll-rtl 80s linear infinite'
              }}
            >
              {[
                { emoji: "📖", name: "Sarah's Romance Series", quote: "From unknown writer to bestselling author in 6 months. My romance trilogy sold 25,000 copies!", result: "25K copies sold" },
                { emoji: "🔬", name: "Dr. Chen's Research", quote: "My climate research paper reached 100,000+ readers globally and influenced policy changes.", result: "100K+ readers reached" },
                { emoji: "💼", name: "Business Mastery Guide", quote: "My business book became #1 in its category and generated $75K in first year.", result: "#1 Bestseller, $75K earned" },
                { emoji: "🍳", name: "Chef Maria's Cookbook", quote: "International cookbook success! Translated into 12 languages and featured on TV.", result: "12 language translations" },
                { emoji: "🎨", name: "Creative Art Tutorials", quote: "Art instruction series reached 50K students and built a thriving online community.", result: "50K students taught" },
                { emoji: "💪", name: "Fitness Transformation", quote: "Health and fitness guide helped 30K people lose weight and change their lives.", result: "30K lives changed" },
                { emoji: "🏠", name: "Home Design Magazine", quote: "Monthly design magazine grew to 15K subscribers with $12K monthly revenue.", result: "$12K monthly revenue" },
                { emoji: "🚀", name: "Tech Startup Guide", quote: "Startup handbook became required reading at 20+ universities worldwide.", result: "20+ universities adopted" }
              ].map((story, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl min-w-[350px] flex-shrink-0 border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-4">{story.emoji}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.name}</h3>
                  <p className="text-gray-600 mb-4">"{story.quote}"</p>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 rounded-xl border border-green-200">
                    <div className="text-green-800 font-semibold">{story.result}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-2xl group"
            >
              Create Your Success Story
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Animated Testimonials */}
      <section id="testimonials" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Authors Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear directly from creators who transformed their passion into publishing success
            </p>
          </div>

          <div className="mb-8">
            <div 
              ref={testimonialsScrollRef}
              className="flex space-x-8 animate-scroll-ltr"
              style={{
                animation: 'scroll-ltr 90s linear infinite'
              }}
            >
              {[
                {
                  quote: "Solson transformed my writing career completely. I went from struggling to get published to earning $50K in my first year. The platform is incredibly user-friendly and the global reach is amazing!",
                  name: "Sarah Johnson",
                  type: "Bestselling Romance Author",
                  rating: 5
                },
                {
                  quote: "As a researcher, getting my work published traditionally was a nightmare. With Solson, my climate research reached over 100,000 readers worldwide and actually influenced policy changes. Incredible impact!",
                  name: "Dr. Michael Chen",
                  type: "Climate Research Scientist",
                  rating: 5
                },
                {
                  quote: "I never thought my business expertise could become a bestselling book. Solson's platform made it so easy to publish and market my content. Now I'm earning more from my book than my consulting!",
                  name: "Emma Rodriguez",
                  type: "Business Strategy Consultant",
                  rating: 5
                },
                {
                  quote: "The multimedia publishing capabilities are outstanding. My cooking videos and recipe book became an international hit, translated into 12 languages. Solson opened doors I never knew existed.",
                  name: "Chef Maria Santos",
                  type: "International Cookbook Author",
                  rating: 5
                },
                {
                  quote: "From self-published author to full-time writer in 8 months. My sci-fi series gained a cult following and now I'm working on a TV adaptation. Solson made my dreams come true.",
                  name: "James Wilson",
                  type: "Science Fiction Author",
                  rating: 5
                },
                {
                  quote: "The educational content publishing tools are phenomenal. My art tutorials reached 50,000 students globally and built an amazing creative community. The revenue sharing is very fair too.",
                  name: "Lisa Park",
                  type: "Art Instructor & Content Creator",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl min-w-[400px] flex-shrink-0 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="font-semibold text-gray-900">- {testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.type}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-2xl group"
            >
              Join Our Success Stories
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Creators Worldwide</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-2 group-hover:text-blue-700" />
              <div className="font-semibold text-gray-900">Industry Leader</div>
              <div className="text-sm text-gray-600">Top Publishing Platform</div>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-2 group-hover:text-green-700" />
              <div className="font-semibold text-gray-900">Secure Platform</div>
              <div className="text-sm text-gray-600">Protected Content</div>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-2 group-hover:text-orange-700" />
              <div className="font-semibold text-gray-900">50K+ Authors</div>
              <div className="text-sm text-gray-600">Global Community</div>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-2 group-hover:text-purple-700" />
              <div className="font-semibold text-gray-900">24/7 Support</div>
              <div className="text-sm text-gray-600">Always Here to Help</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Share Your Ideas with the World?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 50,000+ authors and creators who chose Solson to publish their content globally. 
            Your ideas deserve to reach millions of readers.
          </p>
          
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl text-white max-w-md mx-auto border border-white/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center">
              <Sparkles className="h-6 w-6 mr-2" />
              Start Publishing Today
            </h3>
            <div className="bg-white/10 p-4 rounded-xl mb-6 border border-white/20">
              <h4 className="font-semibold mb-2 flex items-center justify-center">
                <Award className="h-4 w-4 mr-2" />
                What happens next?
              </h4>
              <ul className="text-sm space-y-1">
                <li className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 mr-2 text-green-400" />
                  Free publishing consultation
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 mr-2 text-green-400" />
                  Custom content strategy
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 mr-2 text-green-400" />
                  Global distribution plan
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 mr-2 text-green-400" />
                  Revenue optimization guide
                </li>
              </ul>
            </div>
            <button 
              onClick={handleGetStarted}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started Now
            </button>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="group hover:scale-105 transition-all duration-300">
              <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2 group-hover:text-green-300" />
              <div className="font-semibold">Free to Start</div>
              <div className="text-sm opacity-80">No upfront costs</div>
            </div>
            <div className="group hover:scale-105 transition-all duration-300">
              <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2 group-hover:text-green-300" />
              <div className="font-semibold">Global Reach</div>
              <div className="text-sm opacity-80">150+ countries</div>
            </div>
            <div className="group hover:scale-105 transition-all duration-300">
              <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2 group-hover:text-green-300" />
              <div className="font-semibold">Instant Publishing</div>
              <div className="text-sm opacity-80">Live in 24 hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <a href="/" className="flex items-center group">
                  <SolsonLogo className="h-8 w-8 mr-3 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solson</span>
                </a>
              </div>
              <p className="text-gray-400 mb-4">
                The world's leading digital publishing platform for creators and businesses.
              </p>
              <div className="text-sm text-gray-400">
                <div className="mb-1">1100 Lagrange St</div>
                <div>Boston, MA 02132, USA</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Publishing</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/books.html" className="hover:text-white transition-colors duration-300">Books & eBooks</a></li>
                <li><a href="/articles.html" className="hover:text-white transition-colors duration-300">Articles & Blogs</a></li>
                <li><a href="/multimedia.html" className="hover:text-white transition-colors duration-300">Multimedia Content</a></li>
                <li><a href="/courses.html" className="hover:text-white transition-colors duration-300">Online Courses</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about.html" className="hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="/success-stories.html" className="hover:text-white transition-colors duration-300">Success Stories</a></li>
                <li><a href="/blog.html" className="hover:text-white transition-colors duration-300">Blog</a></li>
                <li><a href="/contact.html" className="hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center group">
                  <Phone className="h-4 w-4 mr-2 group-hover:text-white transition-colors duration-300" />
                  <a href="tel:+14303051205" className="hover:text-white transition-colors duration-300">(430) 305-1205</a>
                </div>
                <div className="flex items-center group">
                  <Mail className="h-4 w-4 mr-2 group-hover:text-white transition-colors duration-300" />
                  <a href="mailto:peters@solson.online" className="hover:text-white transition-colors duration-300">peters@solson.online</a>
                </div>
                <div className="flex items-center group">
                  <MapPin className="h-4 w-4 mr-2 group-hover:text-white transition-colors duration-300" />
                  <a 
                    href="https://maps.google.com/?q=1100+Lagrange+St,+Boston,+MA+02132" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300"
                  >
                    1100 Lagrange St, Boston, MA
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 Solson Publishing. All rights reserved. | 
              <a href="/privacy.html" className="hover:text-white transition-colors duration-300 ml-2">Privacy Policy</a> | 
              <a href="/terms.html" className="hover:text-white transition-colors duration-300 ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scroll-rtl {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes scroll-ltr {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-scroll-rtl {
          animation: scroll-rtl 60s linear infinite;
        }
        
        .animate-scroll-ltr {
          animation: scroll-ltr 60s linear infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default App;