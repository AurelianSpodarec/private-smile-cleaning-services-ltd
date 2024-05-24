import React, { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    // Set widget settings
    window.fwSettings = {
      'widget_id': 201000001139
    };

    // Create a function to load the Freshworks widget script
    const loadScript = () => {
      if (typeof window.FreshworksWidget !== 'function') {
        const n = function () {
          n.q.push(arguments);
        };
        n.q = [];
        window.FreshworksWidget = n;
      }

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://euc-widget.freshworks.com/widgets/201000001139.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        // Call the show method after the script has loaded
        if (typeof window.FreshworksWidget === 'function') {
          window.FreshworksWidget('show');
        }
      };
      document.head.appendChild(script);
    };

    // Load the script
    loadScript();

    // Clean up the script when the component unmounts
    return () => {
      const script = document.querySelector('script[src="https://euc-widget.freshworks.com/widgets/201000001139.js"]');
      if (script) {
        document.head.removeChild(script);
      }
      delete window.FreshworksWidget;
    };
  }, []);

  return <div>Contact Form will be rendered here.</div>;
};

export default ContactForm;
