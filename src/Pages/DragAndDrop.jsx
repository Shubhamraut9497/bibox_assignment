import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const DragAndDropPage = () => {
  const location = useLocation();
  const [selectedData, setSelectedData] = useState([]);

  const dragImage = (e, id) => {
    e.dataTransfer.setData("imgId", id);
  };

  const dropImage = (e) => {
    e.preventDefault();
    const imgId = parseInt(e.dataTransfer.getData("imgId"));
    const draggedData = selectedData.find((data) => data.id === imgId);
    const dragSpace = document.querySelector(".drag__space");
  
    const existingImages = Array.from(dragSpace.getElementsByTagName("img"));
  
    if (!existingImages.some((img) => img.alt === draggedData.name)) {
      const newImage = document.createElement("img");
      newImage.src = draggedData.image;
      newImage.alt = draggedData.name;
      newImage.style.width = "180px";
      newImage.style.height = "180px";
      newImage.style.marginBottom = "20px";
      newImage.style.marginRight = "20px";
      newImage.style.padding = "20px";
      dragSpace.appendChild(newImage);
    }
  
    // Check if there are no images in dragSpace
    if (existingImages.length === 0) {
      const messageElement = dragSpace.querySelector(".drag__message");
      if (!messageElement) {
        const message = document.createElement("p");
        message.innerHTML = "Drag and drop image here";
        message.className = "drag__message";
        dragSpace.appendChild(message);
      }
    } else {
      const messageElement = dragSpace.querySelector(".drag__message");
      if (messageElement) {
        messageElement.remove();
      }
    }
  
    console.log("Dropped image:", draggedData);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (location.state && location.state.selectedParts) {
      setSelectedData(location.state.selectedParts);
    }
  }, [location.state]);

  return (
    <>
    <h1 className="heading">Drop Images on right side </h1>
      <div className="drag">
        <div className="drag__image" style={{overflow:"scroll"}}>
          {selectedData &&
            selectedData.map((data) => (
              <div
                key={data.id}
                className="drag__item"
                draggable="true"
                onDragStart={(e) => dragImage(e, data.id)}
                
              >
                <img src={data.image} alt={data.name} />
              </div>
            ))}
        </div>
        <div className="drag__space" onDrop={dropImage} onDragOver={allowDrop}>
            <p className="drag__message"></p>
        </div>
      </div>
    </>
  );
  
};

export default DragAndDropPage;
