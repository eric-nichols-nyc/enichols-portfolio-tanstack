'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, MapPin, Star, Sparkles, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/shine-card';
import { Badge } from '@/components/ui/badge';
import { careerTimeline } from '@/data/career';
import { ShineBorder } from './ui/shine-border';
import { GradientText } from './ui/gradient-text';

export default function CareerTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(null);
      const timer = setTimeout(() => {
        setExpandedIndex(index);
        clearTimeout(timer);
      }, 300);
    }
  };

  return (
    <div className="mx-auto px-4 py-12 max-w-5xl">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary-20 z-0"></div>

        {careerTimeline
          .slice()
          .reverse()
          .map((item, index) => (
            <motion.div
              key={index}
              className={`mb-12 relative z-10 flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary z-10 flex items-center justify-center">
                {item.isCurrent ? (
                  <Sparkles className="w-4 h-4 text-purple-accent" />
                ) : (
                  <Star className="w-4 h-4 text-purple-accent" />
                )}
              </div>

              {/* Date badge - visible on mobile and on appropriate side for desktop */}
              <div
                className={`md:w-1/2 flex ${
                  index % 2 === 0 ? 'md:justify-end md:pr-8' : 'md:justify-start md:pl-8'
                }`}
              >
                <motion.div className="mb-4 md:mb-0">
                  <Badge
                    variant="outline"
                    className="text-sm py-1 px-3 "
                  >
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.year}
                  </Badge>
                </motion.div>
              </div>

              {/* Card - takes full width on mobile, half width on desktop */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <motion.div
                  layout
                  className="w-full"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-shadow duration-300">

                    <CardContent className="p-0">
                      <div
                        className="p-6 cursor-pointer flex justify-between items-center"
                        onClick={() => toggleExpand(index)}
                      >
                        <div>
                          <h3 className="text-xl font-bold text-primary">
                            {item.title} @ <span className="text-purple-accent font-bold">{item.company}</span>
                          </h3>
                          <p className="text-lg font-medium flex items-center">
                            <MapPin className="w-4 h-4 mr-1 text-muted-foreground" />
                            {item.location}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {item.skills.map((skill, i) => (
                              <Badge
                                key={i}
                                className="bg-purple-accent text-black border-purple-accent text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          {item.isCurrent && (
                            <div className="mt-2 text-green-600 font-semibold text-sm">
                              Latest Role
                            </div>
                          )}
                        </div>
                        <motion.div
                          animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-2 border-t border-border/50">
                              <div className="mb-4">
                                <h4 className="text-sm font-semibold flex items-center mb-2">
                                  <Sparkles className="w-4 h-4 mr-2 text-purple-accent" />
                                  Fun Highlights
                                </h4>
                                <ul className="grid grid-cols-1 gap-2">
                                  {item.highlights.map((highlight, i) => (
                                    <motion.li
                                      key={i}
                                      className="flex items-start"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        duration: 0.3,
                                        delay: i * 0.1,
                                      }}
                                    >
                                      <Star className="w-4 h-4 mr-2 text-yellow-400 mt-0.5 shrink-0" />
                                      <span className="text-sm">{highlight}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
