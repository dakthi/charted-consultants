'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const MomentumHighlight = () => {
  const momentumRef = useRef(null);
  const isMomentumInView = useInView(momentumRef, { once: true, margin: '-100px' });

  const monthlyProgress = [
    { month: 'Month 1', leads: 8, conversion: '12%', revenue: '£15K' },
    { month: 'Month 3', leads: 15, conversion: '18%', revenue: '£28K' },
    { month: 'Month 6', leads: 22, conversion: '24%', revenue: '£45K' },
    { month: 'Month 12', leads: 35, conversion: '32%', revenue: '£78K' },
  ];

  return (
    <section className="relative bg-gray-50">
      <div
        ref={momentumRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="uppercase text-sm tracking-wide mb-4 text-gray-700 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={isMomentumInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Momentum Case Study
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-16 text-gray-900 text-center mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isMomentumInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            How process consistency made growth sustainable
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isMomentumInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Precision Engineering: Building Compound Growth</h3>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                After the initial digital transformation, the real challenge was maintaining momentum. 
                Many businesses see a spike in results, then plateau. We established systems that 
                turn one-off wins into compound growth.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-3">The Momentum System</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      Monthly content calendar showcasing completed projects
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      Automated lead nurturing based on project type and size
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      Performance tracking with monthly optimization cycles
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      Client feedback loops integrated into content strategy
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-3">Why It Works</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Instead of sporadic marketing efforts, we established a rhythm that builds trust 
                    over time. Each piece of content reinforces their expertise, each optimization 
                    improves performance, and each success story attracts similar clients.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isMomentumInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-gray-900">Growth Trajectory Over 12 Months</h4>
              
              <div className="space-y-4 mb-8">
                {monthlyProgress.map((data, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isMomentumInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.7 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-900">{data.month}</span>
                      <span className="text-sm text-gray-500">Monthly Results</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-semibold text-blue-600">{data.leads}</div>
                        <div className="text-xs text-gray-700">Qualified Leads</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-green-600">{data.conversion}</div>
                        <div className="text-xs text-gray-700">Conversion Rate</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-purple-600">{data.revenue}</div>
                        <div className="text-xs text-gray-700">Monthly Revenue</div>
                      </div>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="mt-3 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${(index + 1) * 25}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Key Success Factors</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Consistent content publication (no gaps or rushes)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Data-driven optimization (monthly performance reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Client success integration (turning wins into content)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Process refinement (improving what works, eliminating what doesn't)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 text-center bg-white p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isMomentumInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <blockquote className="text-xl font-light leading-relaxed mb-6 text-gray-900 max-w-4xl mx-auto">
              "The first few months were exciting—we were getting results we'd never seen before. 
              But what impressed me most was how it kept getting better. Every month, the system 
              got smarter, our content got better, and our results improved. Two years later, 
              it's still growing."
            </blockquote>
            <cite className="text-gray-700">
              <span className="font-medium">David Richardson</span><br />
              <span className="text-sm">Managing Director, Heritage Manufacturing</span>
            </cite>
          </motion.div>
        </div>
      </div>
    </section>
  );
};