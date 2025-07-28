'use client';

export const THWFAQ = () => {
  const faqs = [
    {
      question: "Do I need to prepare anything?",
      answer: "Not much! Just show up to the call. We’ll ask about your goals, preferred styles, and help pull info from your social media or existing materials.",
    },
    {
      question: "Is it really done in 3 hours?",
      answer: "Yes. We design, build, and launch the core site with you on a live call. Some small edits can be made after, but the main work is complete.",
    },
    {
      question: "What if I don’t like the style?",
      answer: "Before we start, we go through your preferences using real site examples — no templates. You’re involved the whole way through.",
    },
    {
      question: "Do I own the website?",
      answer: "Yes. You own the domain and site. There are no ongoing subscriptions unless you choose hosting/email add-ons (which we’ll explain).",
    },
    {
      question: "What if I want to update it later?",
      answer: "We build it on clean, no-code-friendly platforms. You can update it yourself, or book a support session anytime.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">FAQs</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
