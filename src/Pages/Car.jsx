import { useNavigate } from "react-router-dom";
const Car = () => {
  const navigate = useNavigate();
  return (
    <div className="car">
      <h3>Assembled Car using Parts</h3>
      <img
        src="https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg"
        alt="cars"
      />
      <button onClick={() => navigate("/parts")}>START</button>
    </div>
  );
};
export default Car;
