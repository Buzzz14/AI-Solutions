import React from 'react';
import Hero from '../components/hero/Hero';
import ServicesSection from '../components/services/ServicesSection';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';

const portfolios = [
  {
    title: 'Turbo Farm',
    description:
      'Turbo Farm is an advanced agricultural solution that leverages the power of artificial intelligence (AI) to revolutionize traditional farming methods. Designed to optimize efficiency, sustainability, and productivity, Turbo Farm integrates cutting-edge technologies to transform every aspect of farming operations.',
    features: [
      'Real-time monitoring and analysis of soil health, crop conditions, and weather patterns.',
      'Automated decision-making for irrigation.',
    ],
  },
  {
    title: 'Log AI',
    description:
      'An innovative inventory management solution powered by artificial intelligence, designed to streamline and optimize inventory operations for businesses of all sizes. With intelligent automation, real-time analytics, and predictive capabilities, Log AI transforms how organizations manage stock, supply chains, and operational logistics.',
    features: [
      'Automatically adjusts inventory levels based on demand forecasting and sales trends.',
      'Tracks inventory across warehouses, stores, and delivery networks with precision.',
      'Leverages AI to forecast future demand patterns and seasonal trends.',
      'Seamlessly integrates with existing ERP, POS, and supply chain systems.',
    ],
  },
  {
    title: 'Stockk',
    description:
      'Stockk is an AI-powered stock trading and investment tool designed to empower traders and investors with intelligent insights, real-time market analysis, and automated strategies. Whether you\'re a beginner or a seasoned investor, Stockk simplifies the complexities of stock trading while maximizing opportunities for growth and minimizing risks.',
    features: [
      'Leverages advanced algorithms to analyze market trends, news, and historical data.',
      'Provides actionable insights and forecasts to help users make informed investment decisions.',
      'Suggests portfolio adjustments based on risk tolerance, goals, and market conditions.',
      'Accessible on multiple devices for seamless trading on the go.',
    ],
  },
  {
    title: 'LaundriQ',
    description:
      'LaundriQ is a cutting-edge AI-powered solution designed to redefine laundry care by delivering unparalleled convenience, precision, and fabric protection. Developed in collaboration with Samsung washing machines, LaundriQ leverages advanced artificial intelligence to analyze fabric quality, optimize detergent usage, and select the ideal washing mode for every load.',
    features: [
      'Uses AI to assess fabric type, condition, and quality in real-time.',
      'Ensures gentle yet effective care tailored to each garment.',
      'Precisely calculates the required detergent amount based on load size, fabric sensitivity, and soil level.',
      'Minimizes water and energy usage through smart load assessment and cycle adjustments.',
      'Connects with Samsung SmartThings for remote control and monitoring.',
    ],
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Past Portfolios</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our innovative AI-driven solutions and their impact.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {portfolios.map((portfolio, index) => (
            <div key={index} className="bg-white rounded-lg border shadow-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{portfolio.title}</h3>
              <p className="text-gray-600 mb-4">{portfolio.description}</p>
              {/* <ul className="list-disc list-inside text-gray-600">
                {portfolio.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className='pt-20 bg-gray-50' id="services">
        <div className="text-center pb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>
      </div>
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;
