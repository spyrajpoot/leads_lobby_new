"use client";

import React from 'react';
import { Mail, MapPin, PhoneCall, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ScrollView } from "@/components/scroll-view";

export default function ContactPage() {
  return (
    <>
      {/* Background Image - Only behind content, not footer */}
      <div className="absolute inset-0 z-0" style={{ height: 'calc(100vh + 600px)' }}>
        <div className="sticky top-0 h-screen">
          <div className="absolute inset-4 rounded-3xl overflow-hidden">
            <img
              src="/Contact.jpeg"
              alt="Contact Background"
              className="w-full h-full object-cover filter blur-sm"
            />
            <div className="absolute inset-0 bg-white/40"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <main className="min-h-screen">
          {/* Hero Section - Always visible */}
          <section className="relative pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-800 max-w-2xl mx-auto drop-shadow-md">
                We'd love to hear from you! Feel free to reach out for any inquiries or to schedule a call.
              </p>
            </div>
          </section>

          {/* Contact Section with Scroll Animations */}
          <section className="py-8 px-6 pb-20">
            <div className="mx-auto max-w-6xl">
              <div className="grid items-start gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-16">
                
                {/* Left Side - Contact Info (Appears on scroll) */}
                <div className="lg:col-span-2">
                  <ScrollView>
                    <div className="bg-white/95 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
                      <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                      
                      <ScrollView delay={0.1}>
                        <ul className="space-y-6">
                          <li className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-bold mb-1 text-gray-900">Email</h3>
                              <Link href="mailto:info@leadslobby.com" className="text-gray-600 hover:text-gray-900 transition-colors block">
                                info@leadslobby.com
                              </Link>
                              <Link href="mailto:support@leadslobby.com" className="text-gray-600 hover:text-gray-900 transition-colors block">
                                support@leadslobby.com
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </ScrollView>

                      <ScrollView delay={0.2}>
                        <ul className="space-y-6 mt-6">
                          <li className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                              <PhoneCall className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-bold mb-1 text-gray-900">Phone</h3>
                              <Link href="tel:+923001234567" className="text-gray-600 hover:text-gray-900 transition-colors block">
                                +92 300 1234567
                              </Link>
                              <Link href="tel:+923219876543" className="text-gray-600 hover:text-gray-900 transition-colors block">
                                +92 321 9876543
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </ScrollView>

                      <ScrollView delay={0.3}>
                        <ul className="space-y-6 mt-6">
                          <li className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                              <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-bold mb-1 text-gray-900">Location</h3>
                              <p className="text-gray-600">Lahore, Punjab</p>
                              <p className="text-gray-600">Pakistan</p>
                            </div>
                          </li>
                        </ul>
                      </ScrollView>

                      <ScrollView delay={0.4}>
                        <ul className="space-y-6 mt-6">
                          <li className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Clock className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-bold mb-1 text-gray-900">Business Hours</h3>
                              <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                              <p className="text-gray-600">Sat: 10:00 AM - 4:00 PM</p>
                              <p className="text-gray-600">Sunday: Closed</p>
                            </div>
                          </li>
                        </ul>
                      </ScrollView>
                    </div>
                  </ScrollView>
                </div>

                {/* Right Side - Contact Form (Appears on scroll) */}
                <div className="lg:col-span-3">
                  <ScrollView delay={0.2}>
                    <Card className="bg-white/95 backdrop-blur-sm p-8 sm:p-12 shadow-2xl">
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-3">Send Us a Message</h3>
                        <p className="text-gray-600">
                          Reach out to our team! We're eager to learn more about how we can help your business grow.
                        </p>
                      </div>

                      <form className="space-y-6">
                        <ScrollView delay={0.3}>
                          <div>
                            <Label htmlFor="name" className="block mb-2 font-semibold">Full Name</Label>
                            <Input 
                              type="text" 
                              id="name" 
                              placeholder="John Doe"
                              className="w-full"
                              required 
                            />
                          </div>
                        </ScrollView>

                        <ScrollView delay={0.35}>
                          <div>
                            <Label htmlFor="email" className="block mb-2 font-semibold">Email Address</Label>
                            <Input 
                              type="email" 
                              id="email" 
                              placeholder="john@example.com"
                              className="w-full"
                              required 
                            />
                          </div>
                        </ScrollView>

                        <ScrollView delay={0.4}>
                          <div>
                            <Label htmlFor="phone" className="block mb-2 font-semibold">Phone Number</Label>
                            <Input 
                              type="tel" 
                              id="phone" 
                              placeholder="+92 300 1234567"
                              className="w-full"
                            />
                          </div>
                        </ScrollView>

                        <ScrollView delay={0.45}>
                          <div>
                            <Label htmlFor="subject" className="block mb-2 font-semibold">Subject</Label>
                            <Input 
                              type="text" 
                              id="subject" 
                              placeholder="What can we help you with?"
                              className="w-full"
                            />
                          </div>
                        </ScrollView>

                        <ScrollView delay={0.5}>
                          <div>
                            <Label htmlFor="message" className="block mb-2 font-semibold">Message</Label>
                            <Textarea 
                              id="message" 
                              rows={5}
                              placeholder="Tell us about your project..."
                              className="w-full resize-none"
                            />
                          </div>
                        </ScrollView>

                        <ScrollView delay={0.55}>
                          <Button 
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 text-lg font-semibold"
                          >
                            Send Message
                          </Button>
                        </ScrollView>
                      </form>
                    </Card>
                  </ScrollView>
                </div>

              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}