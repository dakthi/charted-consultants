'use client';

export const THWHowItWorks = () => {
  const steps = [
    {
      title: '1. Discovery Call',
      desc: 'We ask you about your business, style preferences, and goals. No forms — just a human conversation to understand what fits you.',
    },
    {
      title: '2. Build It Together',
      desc: 'In a live 3-hour session, we co-build your site. You watch it take shape and give feedback as we go — no back-and-forth delays.',
    },
    {
      title: '3. Done & Delivered',
      desc: 'You leave with a live website, a real domain, and a clear next step. It\'s your site — no subscriptions, no hidden tech.',
    },
  ];

  return (
    <div id="how-it-works" className="bg-gradient-to-br from-blue-950 to-gray-950 py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-100 bg-clip-text text-white mb-6">
            How it works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-6 mx-auto md:mx-0">
                    <span className="text-2xl font-semibold text-white">{idx + 1}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 text-center md:text-left">
                    {step.title.split('. ')[1]}
                  </h3>
                  
                  <p className="text-blue-100/90 text-lg leading-relaxed text-center md:text-left">
                    {step.desc}
                  </p>
                </div>
              </div>
              
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
