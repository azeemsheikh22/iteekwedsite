import React, { useEffect } from 'react';
import './GoogleTranslateWidget.css'

const GoogleTranslateWidget = () => {
  useEffect(() => {
    // Define googleTranslateElementInit callback function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,es,fr', // Adjust the languages as needed
        layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
      }, 'google-translate-widget');
    };

    // Load Google Translate Element script dynamically
    const script = document.createElement('script');
    // script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup function
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div id="google-translate-widget"></div>
  );
};

export default GoogleTranslateWidget;




