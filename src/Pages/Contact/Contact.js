import React from "react";
import background from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <section className="my-6 py-20 px-4" style={{ background: `url(${background})` }}>
      <div className="text-center">
        <h3 className="text-xl font-bold text-teal-500">Contact Us</h3>
        <h2 className="text-4xl text-white">Stay Connected with Us</h2>
      </div>
      <div>
        <form className="grid grid-cols-1 gap-3 justify-items-center my-6">
          <input type="email" name="email" placeholder="Email Address" class="input input-bordered w-full max-w-sm" />

          <input type="text" name="subject" placeholder="Subject" class="input input-bordered w-full max-w-sm" />

          <textarea class="textarea textarea-bordered w-full h-24 max-w-sm" placeholder="Your Message"></textarea>

          <PrimaryButton>Submit</PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default Contact;
