import React from 'react';
import { Helmet } from 'react-helmet-async';

export function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | KHUSH GLOBAL NEWS</title>
      </Helmet>
      <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-lg">
        <h1 className="font-display font-bold text-4xl mb-8 text-primary">Privacy Policy</h1>
        <p>Last updated: March 2026</p>
        <p>
          At Khush Global News, accessible from khushglobalnews.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Khush Global News and how we use it.
        </p>
        <h2>Log Files</h2>
        <p>
          Khush Global News follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
        </p>
        <h2>Cookies and Web Beacons</h2>
        <p>
          Like any other website, Khush Global News uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
        </p>
      </div>
    </>
  );
}

export function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | KHUSH GLOBAL NEWS</title>
      </Helmet>
      <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-lg">
        <h1 className="font-display font-bold text-4xl mb-8 text-primary">Terms of Service</h1>
        <p>
          By accessing this website we assume you accept these terms and conditions. Do not continue to use Khush Global News if you do not agree to take all of the terms and conditions stated on this page.
        </p>
        <h2>License</h2>
        <p>
          Unless otherwise stated, Khush Global News and/or its licensors own the intellectual property rights for all material on Khush Global News. All intellectual property rights are reserved. You may access this from Khush Global News for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        <h2>User Comments</h2>
        <p>
          Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Khush Global News does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Khush Global News,its agents and/or affiliates.
        </p>
      </div>
    </>
  );
}

export function Disclaimer() {
  return (
    <>
      <Helmet>
        <title>Disclaimer | KHUSH GLOBAL NEWS</title>
      </Helmet>
      <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-lg">
        <h1 className="font-display font-bold text-4xl mb-8 text-primary">Disclaimer</h1>
        <p>
          Content published on Khush Global News is for informational and analytical purposes. Opinions expressed are those of the author and do not constitute official statements.
        </p>
        <p>
          All the information on this website - khushglobalnews.com - is published in good faith and for general information purpose only. Khush Global News does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Khush Global News), is strictly at your own risk. Khush Global News will not be liable for any losses and/or damages in connection with the use of our website.
        </p>
      </div>
    </>
  );
}
