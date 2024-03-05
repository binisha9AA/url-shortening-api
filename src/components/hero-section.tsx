import React from 'react';

export default function HeroSection() {
  return (
    <section className="flex justify-between mt-12 relative">
      <div className="max-w-[480px] space-y-4">
        <h2 className="text-primary-dark_violet text-6xl font-bold">
          {' '}
          More than just shorter links
        </h2>
        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          eum.
        </p>
        <button className="bg-primary-cyan_btn p-2 text-white rounded-2xl text-base w-[120px]">
          Get started
        </button>
      </div>
      <figure className="h-[460px] w-[484px]">
        <img
          src="/public/images/illustration-working.svg"
          alt=""
          className="absolute -right-9 h-full"
        />
      </figure>
    </section>
  );
}
