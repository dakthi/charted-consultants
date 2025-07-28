'use client';

export const THWPricing = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Simple, Flat Pricing</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          One fixed price. No hidden fees. No subscriptions. Just a real website you own — delivered in three hours.
        </p>

        <div className="inline-block bg-white rounded-2xl px-12 py-16 shadow-xl border border-gray-100 max-w-md mx-auto">
          <div className="mb-8">
            <p className="text-6xl font-bold text-gray-900 mb-2">£1,000</p>
            <p className="text-lg text-gray-600 font-medium">One-time payment</p>
          </div>

          <ul className="text-left text-gray-700 text-lg space-y-4 mb-10">
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-3">✅</span>
              <span>3-hour live build session</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-3">✅</span>
              <span>Custom domain + launch</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-3">✅</span>
              <span>Mobile-friendly, SEO-ready design</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-3">✅</span>
              <span>Real-time collaboration and feedback</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-3">✅</span>
              <span>You own everything</span>
            </li>
          </ul>

          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
};
