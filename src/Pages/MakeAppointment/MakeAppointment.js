import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section style={{ background: `url(${appointment})` }} className="flex mt-28 mb-20 justify-center items-center">
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-120px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 p-8">
        <h3 className="text-2xl font-bold text-teal-500">Appointment</h3>
        <h2 className="text-3xl font-bold text-white mt-2">Make an Appointment Today</h2>
        <p className="text-white py-4 pr-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatum veritatis omnis alias a repudiandae ratione. Corporis corrupti
          voluptatibus alias minima impedit, laborum soluta expedita? Minima nesciunt obcaecati quo doloremque quos officiis, provident quas cumque
          qui animi hic illum placeat, corporis amet magnam molestias iusto earum sint sed, et sapiente.
        </p>
        <div>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </section>

    // <section style={{background: `url(${appointment})`, width: '100%', height: '400px', }}>
    //   <div className="hero min-h-screen">
    //     <div className="hero-content flex-col lg:flex-row">
    //       <img src={doctor} className="max-w-sm" />
    //       <div>
    //         <h1 className="text-2xl font-bold text-teal-500">Appointment</h1>
    //         <h3 className="text-3xl font-bold">Make an Appointment Today</h3>
    //         <p className="py-6">
    //           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus ipsam minima, id fugiat maiores quae vitae labore velit dicta numquam doloremque quaerat vero possimus repellendus unde reprehenderit nam quam ab, sed libero molestias. Labore aut commodi impedit? Voluptatum a corrupti non vel. Unde sint eum temporibus. Libero id saepe aliquam.
    //         </p>
    //         <button className="btn border-0 uppercase font-bold bg-gradient-to-r from-teal-500 to-emerald-500">Get Started</button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default MakeAppointment;
