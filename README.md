# Joya Landry - A Portfolio Forged with AI

This project showcases the creation of a stunning, modern web portfolio for **Joya Landry**, crowned Miss Suisse Francophone 2024. More than just a collection of code, this repository tells the story of a unique collaboration between human vision and cutting-edge AI. The entire application was built iteratively by providing prompts to a senior frontend engineer persona powered by Google's Gemini.

## The Story

The goal was to create a digital presence for Joya that was as elegant and multifaceted as she is. The portfolio needed to reflect her journey—from the rigors of law school to the glamour of the pageant world—while being professional, shareable, and visually captivating.

Instead of traditional coding, the development process was a conversation. Each feature, from the layout and typography to the interactive image gallery and PDF download functionality, was requested in natural language. Gemini translated these requests into clean, production-ready React and TypeScript code, demonstrating a new paradigm in software development where ideation and implementation are seamlessly connected.

This project stands as a testament to the power of AI as a creative and technical partner, enabling the rapid development of a high-quality, bespoke web application.

## Features

-   **Hero Section:** A captivating full-screen hero image with Joya's title.
-   **About Section:** A detailed biography covering her background in law and her journey to winning the crown.
-   **Press Section:** A curated collection of press articles from various publications.
-   **Image Gallery:** A portfolio of professional photographs.
-   **Image Modal:** A full-screen modal to view gallery images in high detail.
-   **Download as PDF:** A convenient button to print or save the entire portfolio as a landscape PDF.
-   **Responsive Design:** Fully responsive layout for optimal viewing on all devices, from desktops to mobile phones.
-   **Smooth Animations:** Subtle scroll-triggered animations to enhance the user experience.

## Tech Stack

-   **Frontend:** React, TypeScript
-   **Styling:** Tailwind CSS for utility-first styling and custom CSS for fine-tuning.
-   **Fonts:** Google Fonts (Playfair Display, Inter, Great Vibes) for elegant typography.

## Project Structure

```
.
├── components/
│   ├── DownloadButton.tsx
│   ├── Portfolio.tsx
│   └── Watermark.tsx
├── App.tsx
├── index.html
├── index.tsx
├── metadata.json
├── types.ts
└── README.md
```

-   `index.html`: The main HTML file and entry point of the application.
-   `index.tsx`: The root React component that mounts the `App`.
-   `App.tsx`: The main application component, managing state for the image modal.
-   `components/`: Contains reusable React components.
    -   `Portfolio.tsx`: The core component that lays out all sections of the portfolio.
    -   `DownloadButton.tsx`: The floating button for PDF download functionality.
    -   `Watermark.tsx`: A subtle watermark component.
-   `types.ts`: TypeScript type definitions for data structures like `PressArticle` and `GalleryImage`.
-   `metadata.json`: Project metadata.

## Getting Started

To run this project locally, you will need a development server that can handle TypeScript and JSX compilation on the fly, as the project directly includes `.tsx` files in the `index.html`.

1.  **Serve the files:**
    Use a simple local server. For example, using Python's built-in server:
    ```bash
    python -m http.server
    ```
    Or use a more advanced tool like `vite` which can handle the TSX transformation out of the box.

2.  **View in browser:**
    Open your browser and navigate to the local server address (e.g., `http://localhost:8000`).
