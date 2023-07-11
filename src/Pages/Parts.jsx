import React, { useState } from "react";
import data from "../productData/Parts";
import { useNavigate } from "react-router-dom";

const Parts = () => {
  const navigate = useNavigate();
  const [selectedParts, setSelectedParts] = useState([]);

  const handleSelectChange = (event, partId) => {
    const selected = event.target.checked;
    setSelectedParts((prevState) => {
      if (selected) {
        const selectedPart = data.find((part) => part.id === partId);
        return [...prevState, selectedPart];
      } else {
        return prevState.filter((part) => part.id !== partId);
      }
    });
  };

  const handleButtonClick = () => {
    // selectedParts array now contains the selected data objects
    console.log(selectedParts);
    navigate("/dragdrop", { state: { selectedParts } });
  };

  return (
    <>
      <div className="parts-container">
        <div className="products">
          {data.map((part) => (
            <div key={part.id}>
              <div key={part.id} className="product">
                <img src={part.image} alt={part.name} />
                <h3>{part.name}</h3>
                <input
                  type="checkbox"
                  checked={selectedParts.some(
                    (selectedPart) => selectedPart.id === part.id
                  )}
                  onChange={(event) => handleSelectChange(event, part.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="btn">
        <button onClick={handleButtonClick}>Button</button>
      </div>
    </>
  );
};

export default Parts;
