import { useEffect } from 'react';

// https://instaplug.app/

const Instagram = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://app.instaplug.app/platform/instaplug.js';
        script.async = true;
        script.onload = () => {
            window.renderApp({
                containerId: 'dc0bcf09-af3c-426e-8cd0-00490963badc',
                domain: 'https://app.instaplug.app/',
                widgetClass: '',
                fontFamily: '',
                fontColor: 'white',
                color: '#5DADE2',
                colorLink: 'white',
                colorLinkActive: 'white',
                colorLinkHover: ''
            });
        };

        document.body.appendChild(script);

        return () => {
            // Cleanup: remove the script from the DOM when the component unmounts
            document.body.removeChild(script);
        };
    }, []); // empty dependency array ensures this effect runs only once

    return (
        <div id="dc0bcf09-af3c-426e-8cd0-00490963badc"></div>
    );
};

export default Instagram;



