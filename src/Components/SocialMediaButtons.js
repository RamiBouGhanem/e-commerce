import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is imported

const SocialMediaButtons = () => {
    return (
        <div className="flex space-x-4 text-2xl pr-20 gap-2 ">
            <a 
                href="https://www.facebook.com/" 
                className="social-button p-2  bg-blue-600 text-white hover:bg-blue-700 transition duration-300 rounded-full w-10 h-10 flex content-center justify-center"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <i className="fab fa-facebook-f"></i>
            </a>
            <a 
                href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D" 
                className="social-button p-2  bg-blue-400 text-white hover:bg-blue-500 transition duration-300 rounded-full w-10 h-10 flex content-center justify-center"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <i className="fab fa-twitter"></i>
            </a>
            <a 
                href="https://www.instagram.com/accounts/login/?hl=en" 
                className="social-button p-2  bg-pink-500 text-white hover:bg-pink-600 transition duration-300 rounded-full w-10 h-10 flex content-center justify-center"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <i className="fab fa-instagram"></i>
            </a>
            <a 
                href="https://www.linkedin.com/feed/" 
                className="social-button p-2  bg-blue-700 text-white hover:bg-blue-800 transition duration-300 rounded-full w-10 h-10 flex content-center justify-center"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <i className="fab fa-linkedin-in"></i>
            </a>
        </div>
    );
};

export default SocialMediaButtons;
