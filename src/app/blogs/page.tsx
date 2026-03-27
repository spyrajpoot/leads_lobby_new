"use client";

import React from 'react';
import { ScrollView } from "@/components/scroll-view";

export default function BlogsPage() {
  return (
    <>
      {/* Background Image - Only behind content, not footer */}
      <div className="absolute inset-0 z-0" style={{ height: 'calc(100vh + 400px)' }}>
        <div className="sticky top-0 h-screen">
          <div className="absolute inset-4 rounded-3xl overflow-hidden">
            <img
              src="/portfolio/Blogs.jpeg"
              alt="Blogs Background"
              className="w-full h-full object-cover filter blur-[3px]"
            />
            <div className="absolute inset-0 bg-white/50"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <main className="min-h-screen">
          {/* Hero Section */}
          <section className="relative pt-32 pb-12 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg">
                Our Blog
              </h1>
              <p className="text-xl text-gray-800 max-w-2xl mx-auto drop-shadow-md">
                Insights, tips, and strategies to help your business succeed
              </p>
            </div>
          </section>

          {/* Coming Soon Section */}
          <section className="py-8 px-6 pb-20">
            <div className="mx-auto max-w-4xl">
              
              <ScrollView>
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-12 md:p-16 shadow-2xl text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Coming Soon
                  </h2>
                  <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                    We're working on creating valuable content for you. Our blog will feature insights on digital marketing, web development, SEO strategies, and more.
                  </p>
                  <p className="text-lg text-gray-600 mb-8">
                    Stay tuned for expert tips, case studies, and industry trends!
                  </p>
                  
                  <a 
                    href="/contact" 
                    className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg"
                  >
                    Get Notified
                  </a>
                </div>
              </ScrollView>

              {/* Topics Preview */}
              <ScrollView delay={0.2}>
                <div className="mt-12 bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Topics We'll Cover
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Digital Marketing</h4>
                      <p className="text-sm text-gray-600">Latest strategies and trends</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Web Development</h4>
                      <p className="text-sm text-gray-600">Code tips and best practices</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">SEO & Growth</h4>
                      <p className="text-sm text-gray-600">Boost your online presence</p>
                    </div>
                  </div>
                </div>
              </ScrollView>

            </div>
          </section>
        </main>
      </div>
    </>
  );
}