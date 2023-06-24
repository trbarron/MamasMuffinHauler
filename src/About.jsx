import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <div className='min-h-screen w-screen bg-toast-500 grid grid-cols-1	'>
        <Navbar />
        <div>
          <div className='text-3xl lg:text-6xl pt-12 text-center font-body text-white lg:pb-8'>
            About
          </div>
          <div className='text-xl lg:text-3xl text-center pt-4 font-body text-white max-w-lg mx-auto'>
            Welcome to Mama's Muffin Hauler!
          </div>
          <div className='text-xl lg:text-3xl text-center pt-4 font-body text-white max-w-lg mx-auto'>
            As a child, I cherished the memories of waking up to the irresistible aroma of sweet cinnamon, shuffling over to the kitchen in my footed PJs where my beloved Nana would be opening the creaky oven door. Those warm, golden muffins she baked were made from cherished family recipes, sprinkled with lots of love. Now, I am proud to emulate that cherished moment with my own baked goods.
          </div>
          <div className='text-xl lg:text-3xl text-center pt-4 font-body text-white max-w-lg mx-auto'>
            At Mama's Muffin Hauler, I create delicious treats using hand-made recipes passed down through generations with a modern twist to add a unique touch. These recipes are handwritten on yellowed pages, giving them a special sentimental value that I treasure. I pour my heart and soul into every batch I make, ensuring that each bite is filled with warmth and love.
          </div>
          <div className='text-xl lg:text-3xl text-center pt-4 font-body text-white max-w-lg mx-auto'>
            And the magic doesn't stop with the muffins themselves. Adding a touch of nostalgia and char, I personally deliver my scrumptious baked goods in a beautiful 1957 Chevrolet truck that I lovingly call my "Muffin Hauler". It's a labor of love that brings me so much joy, and I'm thrilled to share it with you.
          </div>
          <div className='text-xl lg:text-3xl text-center pt-4 pb-4 font-body text-white max-w-lg mx-auto'>
            I am both proud and excited to bring the delicious taste of Mama's Muffin Hauler to you. Thank you for joining me on this journey, I can't wait to share my baked goods with you and your loved ones.
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default About;
