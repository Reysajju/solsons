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
  DollarSign
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
      const animationDuration = scrollWidth / 50; // Adjust speed here
      
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

  const handleAskQuestion = () => {
    const subject = encodeURIComponent("I want a website for my business");
    window.location.href = `mailto:peter@solson.online?subject=${subject}`;
  };

  // Custom Logo Component
  const SolsonLogo = ({ className = "h-8 w-8" }) => (
    <div className={`${className} relative flex items-center justify-center`}>
      <div className="relative">
        <DollarSign className="h-full w-full text-blue-600" />
        <TrendingUp className="absolute -top-1 -right-1 h-4 w-4 text-green-500" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-orange-500 text-white p-4 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <MessageCircle className="h-5 w-5 mr-2" />
            <span className="font-semibold">Ready to grow your business?</span>
          </div>
          <button 
            onClick={handleAskQuestion}
            className="bg-white text-orange-500 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Ask Now
          </button>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="https://solson.online" className="flex items-center">
                <SolsonLogo className="h-10 w-10 mr-3" />
                <span className="text-2xl font-bold text-gray-900">Solson</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#results" className="text-gray-700 hover:text-blue-600 transition-colors">Results</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Reviews</a>
              <a href="/contact.html" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <button 
                onClick={handleAskQuestion}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Ask Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Turn Your Local Business Into a 
                <span className="text-blue-600"> Customer Magnet</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Stop losing customers to competitors. We help local businesses like yours attract more customers, 
                increase revenue, and dominate your market with proven digital strategies that actually work.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={handleAskQuestion}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
                >
                  Ask About Your Business
                  <ArrowRight className="inline ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all font-semibold"
                >
                  See Our Results
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  No long-term contracts
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Results in 30 days
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  100% satisfaction guarantee
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Consultation</h3>
                
                {/* Netlify Contact Form */}
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  action="/thank-you.html"
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Business Name"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="business-type" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Type
                    </label>
                    <select
                      id="business-type"
                      name="business-type"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select your business type</option>
                      <option value="restaurant">Restaurant/Food Service</option>
                      <option value="healthcare">Healthcare/Medical</option>
                      <option value="legal">Legal Services</option>
                      <option value="home-services">Home Services (HVAC, Plumbing, etc.)</option>
                      <option value="automotive">Automotive</option>
                      <option value="beauty">Beauty/Wellness</option>
                      <option value="retail">Retail</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Tell us about your business goals
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="What are your main challenges? What would you like to achieve?"
                    ></textarea>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">What you'll get:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>✓ Free business analysis</li>
                      <li>✓ Custom growth strategy</li>
                      <li>✓ Competitor insights</li>
                      <li>✓ Revenue projections</li>
                    </ul>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg"
                  >
                    Get My Free Analysis
                  </button>
                </form>
                
                <p className="text-xs text-gray-500 mt-4 text-center">
                  No spam, just valuable insights for your business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Reviews Section */}
      <section className="py-8 bg-gray-50 overflow-hidden">
        <div className="mb-4">
          <div 
            ref={scrollRef}
            className="flex space-x-8 animate-scroll-rtl"
            style={{
              animation: 'scroll-rtl 60s linear infinite'
            }}
          >
            {[
              { name: "Sarah Martinez", business: "Martinez Dental", rating: 5, text: "Revenue increased 250% in 4 months!" },
              { name: "David Chen", business: "Chen's Landscaping", rating: 5, text: "Now the #1 choice in our area" },
              { name: "Dr. Michael Roberts", business: "Roberts Family Dentistry", rating: 5, text: "15-20 new patients per week now" },
              { name: "Maria Rossi", business: "Rossi's Italian Kitchen", rating: 5, text: "Delivery orders up 340%" },
              { name: "James Thompson", business: "Thompson Law Firm", rating: 5, text: "Case intake tripled" },
              { name: "Robert Kim", business: "Kim's Climate Control", rating: 5, text: "20+ service calls weekly" },
              { name: "Lisa Park", business: "Park & Associates CPA", rating: 5, text: "85 new clients in 6 months" },
              { name: "Amanda Foster", business: "Pampered Paws Grooming", rating: 5, text: "Booked 4 weeks out" }
            ].map((review, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md min-w-[300px] flex-shrink-0">
                <div className="flex items-center mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-2">"{review.text}"</p>
                <div className="text-xs text-gray-500">
                  <div className="font-semibold">{review.name}</div>
                  <div>{review.business}</div>
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
              { name: "Carlos Rodriguez", business: "Rodriguez Plumbing", rating: 5, text: "25-30 calls per day now" },
              { name: "Jennifer Walsh", business: "FitCore Studio", rating: 5, text: "Membership grew 220%" },
              { name: "Mark Stevens", business: "Stevens Real Estate", rating: 5, text: "45 more homes closed this year" },
              { name: "Tony Ricci", business: "Ricci's Auto Repair", rating: 5, text: "#1 rated shop in the city" },
              { name: "Tony Martinez", business: "Tony's Pizza Palace", rating: 5, text: "Online orders up 340%" },
              { name: "Mike Johnson", business: "Mike's HVAC Services", rating: 5, text: "Booked solid for 3 months" },
              { name: "Johnson Legal", business: "Legal Group", rating: 5, text: "Tripled client base" },
              { name: "Elite Real Estate", business: "Real Estate Group", rating: 5, text: "Listing appointments doubled" }
            ].map((review, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md min-w-[300px] flex-shrink-0">
                <div className="flex items-center mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-2">"{review.text}"</p>
                <div className="text-xs text-gray-500">
                  <div className="font-semibold">{review.name}</div>
                  <div>{review.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">750+</div>
              <div className="text-gray-300">Local Businesses Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">285%</div>
              <div className="text-gray-300">Average Revenue Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">30</div>
              <div className="text-gray-300">Days to See Results</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Are You Tired of Watching Customers Choose Your Competitors?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-red-500 text-5xl mb-4">😞</div>
              <h3 className="font-semibold text-gray-900 mb-3">Invisible Online</h3>
              <p className="text-gray-600">Your competitors show up first when customers search, while your business stays hidden</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-red-500 text-5xl mb-4">💸</div>
              <h3 className="font-semibold text-gray-900 mb-3">Wasted Marketing</h3>
              <p className="text-gray-600">You're spending money on ads and marketing that bring in tire-kickers, not real customers</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-red-500 text-5xl mb-4">📉</div>
              <h3 className="font-semibold text-gray-900 mb-3">Stagnant Growth</h3>
              <p className="text-gray-600">Your revenue has plateaued and you're working harder than ever just to stay afloat</p>
            </div>
          </div>
          <p className="text-xl text-gray-700 mb-8">
            <strong>The truth is:</strong> Your potential customers are out there right now, searching for exactly what you offer. 
            But they're finding your competitors instead of you.
          </p>
          <button 
            onClick={handleAskQuestion}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
          >
            Let's Fix This Now
            <ArrowRight className="inline ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Solution Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Turn Local Businesses Into Market Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven system helps local businesses attract more customers, increase revenue, and dominate their local market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Found First</h3>
              <p className="text-gray-600">
                We optimize your online presence so you appear at the top when customers search for your services. 
                No more losing customers to competitors who show up first.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Attract Quality Leads</h3>
              <p className="text-gray-600">
                Our targeted marketing brings you customers who are ready to buy, not tire-kickers. 
                You'll get more qualified leads that convert into paying customers.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Grow Your Revenue</h3>
              <p className="text-gray-600">
                With more visibility and better leads, you'll see significant revenue growth. 
                Our clients typically see 200-400% increase in qualified leads within 90 days.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={handleAskQuestion}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
            >
              Ask About Your Business Growth
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Animated Results Section */}
      <section id="results" className="py-20 bg-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real Local Businesses
            </h2>
            <p className="text-xl text-gray-600">
              See how we've helped businesses just like yours dominate their local market
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
                { emoji: "🍕", name: "Tony's Pizza Palace", quote: "Online orders increased 340% in just 60 days. We went from struggling to having a waitlist!", result: "340% increase in online orders" },
                { emoji: "🔧", name: "Mike's HVAC Services", quote: "I'm booked solid for the next 3 months. My phone hasn't stopped ringing since we started.", result: "400% increase in service calls" },
                { emoji: "⚖️", name: "Johnson Legal Group", quote: "We've tripled our client base and had to hire 2 new attorneys to handle the demand.", result: "300% increase in new clients" },
                { emoji: "🏠", name: "Elite Real Estate Group", quote: "Closed 45 more homes this year than last. Our listing appointments doubled overnight.", result: "200% increase in listings" },
                { emoji: "🦷", name: "Bright Smile Dental", quote: "New patient bookings increased 280%. We had to extend our hours to accommodate demand.", result: "280% increase in new patients" },
                { emoji: "🚗", name: "AutoCare Plus", quote: "Service appointments up 350%. We're now the #1 auto shop in our city on Google.", result: "350% increase in appointments" },
                { emoji: "💼", name: "Park & Associates CPA", quote: "85 new clients in 6 months. Tax season was our busiest ever.", result: "85 new clients in 6 months" },
                { emoji: "🐕", name: "Pampered Paws Grooming", quote: "Booked 4 weeks out consistently. Had to hire 2 more groomers.", result: "Booked 4 weeks out" }
              ].map((business, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg min-w-[350px] flex-shrink-0">
                  <div className="text-4xl mb-4">{business.emoji}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{business.name}</h3>
                  <p className="text-gray-600 mb-4">"{business.quote}"</p>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <div className="text-green-800 font-semibold">{business.result}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={handleAskQuestion}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
            >
              Get Similar Results for My Business
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Animated Testimonials */}
      <section id="testimonials" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear directly from business owners who transformed their success with Solson
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
                  quote: "Solson completely transformed our business. We went from getting maybe 2-3 calls per week to 20-30 qualified leads per day. Our revenue has increased by over 250% in just 4 months. I can't recommend them enough!",
                  name: "Sarah Martinez",
                  business: "Martinez Dental Practice",
                  rating: 5
                },
                {
                  quote: "I was skeptical at first, but the results speak for themselves. My landscaping business is now the #1 choice in our area. I'm booked solid and had to hire 3 new crew members. Best investment I've ever made.",
                  name: "David Chen",
                  business: "Chen's Landscaping Solutions",
                  rating: 5
                },
                {
                  quote: "Within 60 days, our online visibility skyrocketed. We're now getting 15-20 new patient inquiries per week instead of 2-3. The quality of leads is incredible - these are people ready to schedule appointments, not just browsing.",
                  name: "Dr. Michael Roberts",
                  business: "Roberts Family Dentistry",
                  rating: 5
                },
                {
                  quote: "Our restaurant went from struggling to survive to having a 2-week waitlist for weekend reservations. Online orders through delivery apps increased 340%. We had to hire 4 new staff members to keep up with demand.",
                  name: "Maria Rossi",
                  business: "Rossi's Italian Kitchen",
                  rating: 5
                },
                {
                  quote: "As a law firm, we were drowning in competition. Solson helped us stand out and now we're the go-to choice for personal injury cases in our city. Our case intake has tripled and we're more selective with clients now.",
                  name: "James Thompson",
                  business: "Thompson Law Firm",
                  rating: 5
                },
                {
                  quote: "HVAC is a competitive business, but now I'm getting 20+ service calls every week. My calendar is booked 3 months out and I've had to turn down work. The phone literally doesn't stop ringing.",
                  name: "Robert Kim",
                  business: "Kim's Climate Control",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl min-w-[400px] flex-shrink-0 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="font-semibold text-gray-900">- {testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.business}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={handleAskQuestion}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
            >
              Ask How We Can Help You
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Local Businesses Everywhere</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Google Partner</div>
              <div className="text-sm text-gray-600">Certified Agency</div>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">BBB A+ Rating</div>
              <div className="text-sm text-gray-600">Accredited Business</div>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">750+ Clients</div>
              <div className="text-sm text-gray-600">Success Stories</div>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">24/7 Support</div>
              <div className="text-sm text-gray-600">Always Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate Your Local Market?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Stop losing customers to competitors. Ask us how we can help you attract more customers and grow your revenue.
          </p>
          
          <div className="bg-white p-8 rounded-2xl text-gray-900 max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-6">Ask About Your Business</h3>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>✓ We'll analyze your current situation</li>
                <li>✓ Identify growth opportunities</li>
                <li>✓ Create a custom strategy</li>
                <li>✓ Schedule a consultation call</li>
              </ul>
            </div>
            <button 
              onClick={handleAskQuestion}
              className="w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg"
            >
              Ask About My Business Now
            </button>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <div className="font-semibold">No Obligation</div>
              <div className="text-sm opacity-80">Completely free consultation</div>
            </div>
            <div>
              <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <div className="font-semibold">Results Guaranteed</div>
              <div className="text-sm opacity-80">Or your money back</div>
            </div>
            <div>
              <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <div className="font-semibold">Quick Turnaround</div>
              <div className="text-sm opacity-80">See results in 30 days</div>
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
                <a href="https://solson.online" className="flex items-center">
                  <SolsonLogo className="h-8 w-8 mr-3" />
                  <span className="text-2xl font-bold">Solson</span>
                </a>
              </div>
              <p className="text-gray-400">
                Helping local businesses dominate their market with proven digital strategies.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/local-seo.html" className="hover:text-white transition-colors">Local SEO</a></li>
                <li><a href="/google-ads.html" className="hover:text-white transition-colors">Google Ads</a></li>
                <li><a href="/social-media.html" className="hover:text-white transition-colors">Social Media Marketing</a></li>
                <li><a href="/website-optimization.html" className="hover:text-white transition-colors">Website Optimization</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about.html" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/case-studies.html" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="/blog.html" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/contact.html" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+17814793999" className="hover:text-white transition-colors">(781) 479-3999</a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:peter@solson.online" className="hover:text-white transition-colors">peter@solson.online</a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <a 
                    href="https://maps.google.com/?q=Boston,+Massachusetts" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Boston, Massachusetts
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 Solson. All rights reserved. | 
              <a href="/privacy.html" className="hover:text-white transition-colors ml-2">Privacy Policy</a> | 
              <a href="/terms.html" className="hover:text-white transition-colors ml-2">Terms of Service</a>
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
        
        .animate-scroll-rtl {
          animation: scroll-rtl 60s linear infinite;
        }
        
        .animate-scroll-ltr {
          animation: scroll-ltr 60s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;