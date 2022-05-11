import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from '../../assets/images/bg.png';

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div style={{
      background: `url(${bg})`,
      backgroundSize: 'cover'
    }}
    class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="sm:max-w-sm lg:max-w-lg md:max-w-md xl:max-w-2xl rounded-lg shadow-2xl m-20" alt="Dentist Chair" />
        <div className="rounded-2xl shadow-xl">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
