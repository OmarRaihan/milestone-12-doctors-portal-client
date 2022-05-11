import React from "react";
import background from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section className="my-6" style={{ background: `url(${background})` }}>
      <div className="text-center">
        <h4 className="text-xl font-bold text-teal-400">Contact Us</h4>
        <h2 className="text-3xl text-white">Stay Connected with Us</h2>
      </div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          {/* <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Login now!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div> */}
          <div class="card flex-shrink-0 w-full max-w-sm">
            <div class="card-body">
              <div class="form-control">
                <input type="text" placeholder="Email" class="input input-bordered" />
              </div>
              <div class="form-control">
                <input type="text" placeholder="Subject" class="input input-bordered" />
              </div>
              <div>
                <textarea class="textarea" placeholder="Bio"></textarea>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
