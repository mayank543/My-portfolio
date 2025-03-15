import React, { useRef } from "react";
import messi from "/src/assets/messi.jpeg";
import guts from "/src/assets/guts.jpg";
import luffy from "/src/assets/luffy.jpg";

const books = [
  { title: "The Pragmatic Programmer", description: "A must-read for every software engineer, filled with timeless coding wisdom.", image: messi, link: "https://example.com/book1" },
  { title: "Clean Code", description: "Teaches how to write maintainable, efficient, and clean software.", image: guts, link: "https://example.com/book2" },
  { title: "Deep Work", description: "Explores how to focus deeply in a world of distractions.", image: luffy, link: "https://example.com/book3" },
  { title: "The Mythical Man-Month", description: "Classic book on software project management.", image: messi, link: "https://example.com/book4" },
  { title: "You Don't Know JS", description: "Deep dive into JavaScript internals.", image: guts, link: "https://example.com/book5" },
  { title: "Design Patterns", description: "Fundamental software design principles and reusable patterns.", image: luffy, link: "https://example.com/book6" },
  { title: "Refactoring", description: "How to improve existing code without changing behavior.", image: messi, link: "https://example.com/book7" },
  { title: "The Phoenix Project", description: "A novel about DevOps and IT management.", image: guts, link: "https://example.com/book8" },
];

const BookCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto py-10 bg-black overflow-x-hidden">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        Books That Inspire Me
      </h2>

      <button onClick={() => scroll(-1)} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white text-3xl z-10">
        ❮
      </button>

      <button onClick={() => scroll(1)} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white text-3xl z-10">
        ❯
      </button>

      {/* **Scroll container with Tailwind-only scrollbar removal** */}
      <div ref={carouselRef} className="flex space-x-6 overflow-x-scroll p-4 [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
        {books.map((book, index) => (
          <a key={index} href={book.link} target="_blank" rel="noopener noreferrer" className="relative w-64 min-w-[250px] h-96 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img src={book.image} alt={book.title} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-0" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 text-white opacity-0 transition-opacity duration-300 hover:opacity-100 p-4">
              <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
              <p className="text-sm text-center">{book.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BookCarousel;