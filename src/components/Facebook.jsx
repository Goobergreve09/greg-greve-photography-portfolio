import  { useEffect } from 'react';

const Facebook = () => {
  useEffect(() => {
    // Load Tagembed script dynamically
    const script = document.createElement('script');
    script.src = '//widget.tagembed.com/embed.min.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up function to remove the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tagembed-widget" style={{ width: '100%', height: '50%' }} data-widget-id="154163" data-view-url="https://widget.tagembed.com/154163"></div>
  );
};

export default Facebook;
