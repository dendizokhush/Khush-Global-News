import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | KHUSH GLOBAL NEWS</title>
      </Helmet>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="font-display font-bold text-4xl mb-8 text-primary">About Khush Global News</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-600 mb-8">
            Khush Global News provides structured, fact-based analysis of Kenya’s political and national developments. We prioritize clarity, accountability, and responsible reporting.
          </p>

          <h2 className="font-display font-bold text-2xl mb-4">Our Mission</h2>
          <p>
            In an era of information overload and fake news, our mission is to cut through the noise. We are dedicated to providing Kenyans and the global community with accurate, timely, and in-depth coverage of the issues that matter most. From the corridors of power in Nairobi to the grassroots in the counties, we are there to tell the story.
          </p>

          <h2 className="font-display font-bold text-2xl mb-4 mt-8">Editorial Commitment</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Informational Content:</strong> We believe in empowering our readers with knowledge.</li>
            <li><strong>Verified Sources:</strong> Every story is rigorously fact-checked before publication.</li>
            <li><strong>Corrections Welcomed:</strong> We are accountable to our audience. If we make a mistake, we correct it openly and quickly.</li>
          </ul>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mt-12 flex items-start space-x-6">
            <div className="h-20 w-20 rounded-full bg-primary text-white flex items-center justify-center font-bold text-3xl shrink-0">
              D
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">About the Author</h3>
              <p className="font-bold text-accent mb-2">Denis Wandera</p>
              <p className="text-gray-600">
                Denis Wandera is a political analyst, digital publisher, and public affairs commentator based in Kenya. With over a decade of experience in media and governance, he brings a unique perspective to national conversations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
