import React, { useRef } from "react";
import Book2 from "/src/assets/Book2.jpeg";
import Book3 from "/src/assets/Book3.jpg";
import Book5 from "/src/assets/Book5.jpg";
import Book6 from "/src/assets/Book6.jpg";
import Book7 from "/src/assets/book7.jpeg";
import Book1 from "/src/assets/Book1.jpg";
import Book4 from "/src/assets/Book4.jpg";
import linux from "/src/assets/linux.jpg";


const books = [
  { title: "A Short History of Nearly Everything", description: "It is a quest to understand everything that has happened from the Big Bang to the rise of civilisation - how we got from there, being nothing at all, to here, being us", image: Book1, link: "https://example.com/book1" },
  { title: "Midnight In Chernobyl", description: " explores unconventional fitness hacks, some unproven but effective. It’s for those who challenge mainstream health beliefs.", image: Book2, link: "https://example.com/book2" },
  { title: "Hooked", description: "Explores how to focus deeply in a world of distractions.", image: Book6, link: "https://example.com/book3" },
  { title: "Sapiens- A brief History Of Humankind", description: "The book focuses on Homo sapiens, and surveys the history of humankind, starting from the Stone Age and going up to the 21st century.", image: Book4, link: "https://example.com/book4" },
  { title: "The 4-Hour Body", description: "Explores unconventional fitness hacks, some unproven but effective. It’s for those who challenge mainstream health beliefs.", image: Book5, link: "https://example.com/book5" },
  { title: "Magnificient Delusions", description: " A character-led history of the bizarrely ill-suited alliancebetween America and Pakistan", image: Book3, link: "https://example.com/book6" },
  { title: "Just for Fun: The Story of an Accidental Revolutionary", description: "The life and ideals of Linus Torvalds, creator of Linux.The life and ideals of Linus Torvalds, creator of Linux.", image: linux, link: "https://example.com/book7" },
  { title: "Managas", description: "Stories of war, vengeance, and the human spirit.Gritty, emotional, and beautifully drawn epics", image: Book7, link: "https://example.com/book8" },
];

const BookCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 500;
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