import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Ready to Transform Your Organization?
        </h2>
        <p className="mt-4 text-lg text-blue-200">
          Let's discuss how we can help your teams achieve business agility and deliver exceptional results.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
          >
            Our Services
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;