import React, { useState } from 'react';
import Portfolio from './components/Portfolio';
import DownloadButton from './components/DownloadButton';
import Watermark from './components/Watermark';

const App: React.FC = () => {
  const [modalState, setModalState] = useState({ isOpen: false, src: '' });

  const openModal = (src: string) => {
    setModalState({ isOpen: true, src });
    const modalImage = document.getElementById('modalImage');
    if (modalImage) {
        modalImage.classList.remove('zoomed');
    }
  };

  const closeModal = () => {
    setModalState({ isOpen: false, src: '' });
  };
  
  const handleModalImageClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.stopPropagation();
    e.currentTarget.classList.toggle('zoomed');
  };

  return (
    <>
      <Portfolio 
        onImageClick={openModal}
      />

      <Watermark />
      <DownloadButton />

      {/* Image Modal */}
      <div 
        id="imageModal" 
        className={`modal fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center ${modalState.isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeModal}
        role="dialog"
        aria-modal="true"
        aria-label="Image modal"
      >
        <div className="max-w-[95vw] md:max-w-4xl max-h-[90vh] p-4 overflow-auto">
          <img 
            id="modalImage" 
            src={modalState.src} 
            alt="Vue agrandie de la galerie" 
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            onClick={handleModalImageClick}
          />
        </div>
        <button 
          className="absolute top-6 right-6 text-white text-5xl font-light hover:opacity-75 transition-opacity" 
          onClick={closeModal}
          aria-label="Fermer"
        >
          &times;
        </button>
      </div>
    </>
  );
};

export default App;