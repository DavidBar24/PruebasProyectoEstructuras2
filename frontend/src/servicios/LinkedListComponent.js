import React, { useState } from "react";
import "../Styles/galeria.css";
import LinkedList from "./LinkedList";

const LinkedListComponent = () => {
    const [list] = useState(new LinkedList());  
    const [inputValue, setInputValue] = useState("");
    const [images, setImages] = useState([]);

    const handleAddImage = () => {
        if (inputValue.trim() !== "") {
            list.append(inputValue);
            setImages([...list.print()]);
            setInputValue("");
        }
    };

    const handleRemoveImage = (imageUrl) => {
        list.remove(imageUrl);
        setImages([...list.print()]);
    };

    return (
        <div className="home">
            <h1>Lista Enlazada de Imágenes</h1>

            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="URL de la imagen"
            />
            <button onClick={handleAddImage}>Agregar Imagen</button>

            <h2>Galería de Imágenes</h2>
            <div className="gallery">
                {images.map((img, index) => (
                    <div key={index} className="gallery-item">
                        <img src={img} alt={`Imagen ${index}`} />
                        <br />
                        <button className="delete-button" onClick={() => handleRemoveImage(img)}>Eliminar</button>
                    </div>
                ))}
            </div>

            <h3>Total de imágenes: {list.size()}</h3>
            <h3>Primera imagen: {list.peek() ? <img src={list.peek()} alt="Primer imagen" style={{ width: "100px" }} /> : "Vacío"}</h3>
        </div>
    );
};

export default LinkedListComponent;