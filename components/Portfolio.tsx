import React, { useEffect, useState } from 'react';
import { PressArticle, GalleryImage } from '../types';

interface PortfolioProps {
  onImageClick: (src: string) => void;
}

// Data
const pressArticles: PressArticle[] = [
    {
        outlet: 'Elle Suisse',
        snippet: "Les essentiels de Joya Landry, un parcours fascinant des salles d'audience au titre de Miss.",
        quote: '«Époustouflant et inspirant.»',
        link: 'https://github.com/OwnOptic/Spam/blob/main/elle%20suisse%20joya.png?raw=true'
    },
    {
        outlet: 'Lausanne City',
        snippet: 'Joya Landry trace son chemin, entre concours de beauté et futur barreau.',
        quote: '«Miss Suisse francophone et future avocate»',
        link: 'https://lausannecites.ch/articles/miss-suisse-francophone-et-future-avocate-joya-landry-trace-son-chemin'
    },
    {
        outlet: 'Le Nouvelliste',
        snippet: "Portrait d'une Valaisanne qui prouve qu'il est possible d'allier glamour et intellect.",
        quote: '«J’aimerais que les petites filles soient fières d’être qui elles sont.»',
        link: 'https://www.lenouvelliste.ch/valais/valais-central/sierre-district/sierre-commune/il-est-possible-dallier-glamour-et-intellect-miss-suisse-francophone-est-une-valaisanne-bientot-avocate-1403388'
    },
    {
        outlet: 'Top Genève - La femme',
        snippet: 'Un article qui explore le parcours et les ambitions de la nouvelle lauréate.',
        quote: '«Le mantra qui m’a suivie est: reste toi-même et sois naturelle.»',
        link: 'https://issuu.com/smart_media/docs/2409_top_lau_la_femme/12'
    }
];

const galleryImages: GalleryImage[] = [
    { src: "https://github.com/OwnOptic/Spam/blob/main/WhatsApp%20Image%202025-08-16%20at%2022.50.22.jpeg?raw=true", alt: "Galerie photo de Joya Landry" },
    { src: "https://github.com/joyakimclandry-cyber/Website/blob/main/WhatsApp%20Image%202025-09-06%20at%2020.25.13.jpeg?raw=true", alt: "Galerie photo de Joya Landry" },
    { src: "https://github.com/joyakimclandry-cyber/Website/blob/main/WhatsApp%20Image%202025-09-06%20at%2020.49.38.jpeg?raw=true", alt: "Galerie photo de Joya Landry" },
    { src: "https://github.com/joyakimclandry-cyber/Website/blob/main/WhatsApp%20Image%202025-09-06%20at%2021.04.50.jpeg?raw=true", alt: "Galerie photo de Joya Landry" }
];


const Portfolio: React.FC<PortfolioProps> = ({ onImageClick }) => {
  
  useEffect(() => {
    // Scroll observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const renderPressCard = (article: PressArticle, index: number) => {
      const isElleSuisseCard = article.outlet === 'Elle Suisse';

      const content = (
           <div className={`press-card flex flex-col justify-between p-6 text-left ${isElleSuisseCard ? '' : 'h-full'}`}>
               <div>
                   <h3 className="font-bold text-xl mb-2">{article.outlet}</h3>
                   <p className="text-sm text-text-light">{article.snippet}</p>
               </div>
               <p className="text-sm italic mt-4 text-text-dark">{article.quote}</p>
           </div>
      );

      if (article.link) {
          return <a href={article.link} target="_blank" rel="noopener noreferrer" key={article.outlet} className="block scroll-reveal" style={{ transitionDelay: `${100 * index}ms` }}>{content}</a>
      }
      return <div key={article.outlet} className="cursor-pointer scroll-reveal" style={{ transitionDelay: `${100 * index}ms` }} onClick={() => onImageClick(article.modalImage!)}>{content}</div>
  };

  return (
    <>
      <div className="relative">
        <main>
          {/* --- HERO SECTION --- */}
          <section id="hero" className="text-white min-h-screen flex flex-col justify-end items-center text-center relative">
            <img 
              src="https://github.com/OwnOptic/Spam/blob/main/WhatsApp%20Image%202025-08-16%20at%2022.50.36.jpeg?raw=true" 
              alt="Joya Landry portrait" 
              className="hero-image absolute inset-0 w-full h-full object-cover object-center"
              style={{ objectPosition: 'center 30%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="scroll-reveal is-visible pb-24 md:pb-32 relative">
                <h1 className="text-[40px] md:text-[68px] font-bold leading-tight">Joya Landry</h1>
                <h1 className="text-[40px] md:text-[68px] font-bold leading-tight">Miss Suisse Francophone 2024</h1>
                <p className="mt-2 text-lg md:text-xl font-light tracking-wide max-w-3xl mx-auto">«Il est possible d’allier glamour et intellect.»</p>
            </div>
          </section>

          {/* --- ABOUT SECTION --- */}
          <section id="about" className="py-20 md:py-32 bg-white">
               <div className="container mx-auto px-6">
                   <div className="flex-container flex flex-col md:flex-row items-center scroll-reveal">
                       <div className="text-content w-full md:w-1/2 md:pr-12 lg:pr-20">
                           <h2 className="text-4xl md:text-5xl font-bold mb-6">De la Cour au Tapis Rouge: La Passion de l’Excellence</h2>
                           <div className="space-y-4 text-base text-text-light leading-relaxed">
                               <p>Joya Landry a été couronnée Miss Suisse Francophone 2024. Alliant avec une grâce rare le monde du glamour et la rigueur du droit, elle s'apprête à devenir avocat après avoir réussi avec distinction son master à l'Université de Lausanne.</p>
                               <p>D’abord réservée, elle a choisi le théâtre au Cours Florent pour apprivoiser sa timidité. Sélectionnée par l’école pour suivre un cursus complet, elle décide de terminer ses études de droit à l’Université.</p>
                               <p>Pour elle, porter l’écharpe de Miss ne se limite pas à représenter une subjective beauté: c’est incarner un engagement, une volonté de rassembler et de sensibiliser.</p>
                               <p>Aujourd’hui, par une élégance solaire, tempérée d’un mystère qui intrigue et captive, elle livre un parcours qui est une source d’inspiration, un témoignage de ses valeurs et de sa vision intemporelle de la féminité.</p>
                           </div>
                       </div>
                       <div className="image-content w-full md:w-1/2 mt-10 md:mt-0">
                           <img src="https://github.com/OwnOptic/Spam/blob/main/WhatsApp%20Image%202025-08-16%20at%2022.52.39.jpeg?raw=true" alt="Portrait professionnel de Joya Landry" className="w-full h-full object-cover" />
                       </div>
                   </div>
               </div>
           </section>

          {/* --- PRESS SECTION --- */}
            <section id="press" className="py-20 md:py-32 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 scroll-reveal">Dans la Presse</h2>
                    
                    <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto items-end">
                        <div className="scroll-reveal">
                            <img src="https://github.com/OwnOptic/Spam/blob/main/WhatsApp%20Image%202025-08-16%20at%2022.50.47.jpeg?raw=true" alt="Portrait artistique de Joya Landry" className="w-full h-auto object-cover" style={{transform: 'scaleX(-1)'}}/>
                        </div>

                        {renderPressCard(pressArticles[0], 0)}

                        <div className="scroll-reveal">
                            <img src="https://github.com/OwnOptic/Spam/blob/main/WhatsApp%20Image%202025-08-16%20at%2022.50.47.jpeg?raw=true" alt="Portrait artistique de Joya Landry" className="w-full h-auto object-cover"/>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {pressArticles.slice(1).map((article, index) => (
                            renderPressCard(article, index + 1)
                        ))}
                    </div>
                </div>
            </section>

          {/* --- GALLERY SECTION --- */}
          <section id="gallery" className="py-20 md:py-32 bg-white">
              <div className="container mx-auto px-6 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-16 scroll-reveal">Portfolio</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {galleryImages.map((image, index) => (
                        <div key={index} className="gallery-item scroll-reveal" style={{ transitionDelay: `${100 + index * 100}ms` }}>
                            <img src={image.src} alt={image.alt} className="w-full h-full object-cover cursor-pointer" onClick={() => onImageClick(image.src)} />
                        </div>
                      ))}
                  </div>
              </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Portfolio;