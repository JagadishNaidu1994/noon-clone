import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-white text-center">
      <Navbar />
      <section className="bg-black text-white p-10">
        <img
          src="https://via.placeholder.com/600x300"
          alt="Mushroom Hero"
          className="rounded-lg mx-auto mb-4"
        />
        <p className="text-lg mb-2">
          Celebrating the brightest minds of our generation.
        </p>
        <button className="px-4 py-2 bg-white text-black rounded">Shop All Products</button>
      </section>

      <section className="grid grid-cols-2 gap-4 p-10">
        <div>
          <img src="https://via.placeholder.com/300x300" alt="Focus Gummies" className="rounded-lg" />
          <p>Focus Mushroom Gummy Delights - $32</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/300x300" alt="Hand with supplement" className="rounded-lg" />
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-4">
          Next generation cognitive wellness for your best mind & mood, where neuroscience meets nature
        </h2>
        <div className="grid grid-cols-2 gap-4 px-10">
          <div>
            <p>
              A new era of wellbeing made by a team of neuroscientists and functional health doctors...
            </p>
            <button className="mt-2 px-4 py-2 border border-black rounded">Our Science</button>
          </div>
          <div>
            <img src="https://via.placeholder.com/300x300" alt="Gradient image" className="rounded-lg" />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 p-10">
        <div>
          <img src="https://via.placeholder.com/300x300" alt="Hand with matcha" className="rounded-lg" />
        </div>
        <div>
          <img src="https://via.placeholder.com/300x300" alt="Matcha Delight" className="rounded-lg" />
          <p>Matcha Chocolate Delights - $29</p>
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-xl font-semibold mb-4">Tap into your best state of mind with us.</h2>
        <img src="https://via.placeholder.com/600x300" alt="Man looking up" className="rounded-lg mx-auto" />
      </section>
    </div>
  );
};

export default Home;
