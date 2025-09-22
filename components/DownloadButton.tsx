import React from 'react';

const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <button
      onClick={handleDownload}
      className="print-hidden fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 ease-in-out group"
      aria-label="Télécharger le portfolio en PDF"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      <span className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 w-max px-3 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Télécharger en PDF
      </span>
    </button>
  );
};

export default DownloadButton;
