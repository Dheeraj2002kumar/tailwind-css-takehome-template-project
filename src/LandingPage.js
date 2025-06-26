import React, { useState } from "react";
import { GithubIcon, TwitterIcon, LinkedInIcon } from "./SocialIcons";
import { MenuIcon } from "./MenuIcon";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroImageUrl =
    "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  const profileImageUrl =
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200";

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Logo</div>

          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
            <a href="#" className="hover:text-blue-600">
              About
            </a>
            <a href="#" className="hover:text-blue-600">
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MenuIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <a href="#" className="block hover:text-blue-600">
              Home
            </a>
            <a href="#" className="block hover:text-blue-600">
              About
            </a>
            <a href="#" className="block hover:text-blue-600">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span>Welcome to Our </span>
            <span className="text-yellow-300">Amazing Landing Page</span>
          </h1>
          <p className="mb-6 text-lg">
            Discover the power of Tailwind CSS with this beautifully crafted
            landing page. Responsive, modern, and easy to customize.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-blue-600 px-6 py-3 font-semibold rounded-md hover:bg-gray-200 transition"
          >
            Get started
          </a>
        </div>
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={heroImageUrl}
            alt="Hero"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </section>

      {/* Profile Card */}
      <section className="flex justify-center py-16 px-4">
        <div className="bg-white shadow-lg rounded-lg max-w-sm w-full p-6 text-center">
          <img
            src={profileImageUrl}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p className="text-sm text-gray-600 mb-2">Web Developer & Designer</p>
          <p className="text-sm text-gray-500 mb-4">
            Passionate about creating beautiful and functional web experiences
            using the latest technologies.
          </p>
          <div className="flex justify-center space-x-4 text-blue-600">
            <a href="#">
              <GithubIcon />
            </a>
            <a href="#">
              <TwitterIcon />
            </a>
            <a href="#">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
