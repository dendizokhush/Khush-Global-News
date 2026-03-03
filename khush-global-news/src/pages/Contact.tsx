import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | KHUSH GLOBAL NEWS</title>
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h1 className="font-display font-bold text-4xl mb-6 text-primary">Get in Touch</h1>
            <p className="text-lg text-gray-600 mb-8">
              Have a news tip, a question, or just want to say hello? We'd love to hear from you. Fill out the form or reach out via our social channels.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email Us</h3>
                  <p className="text-gray-600">info@khushglobalnews.com</p>
                  <p className="text-gray-600">tips@khushglobalnews.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Call Us</h3>
                  <p className="text-gray-600">+254 700 000 000</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Visit Us</h3>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="font-bold text-2xl mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <select className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-white">
                  <option>General Inquiry</option>
                  <option>News Tip</option>
                  <option>Advertising</option>
                  <option>Correction</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50"></textarea>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3">
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}
