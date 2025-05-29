import { Cat, Dog } from "lucide-react";

export const EstrategiasCorte = {
  canina: {
    getTipo: () => "Canina",
    getIcono: () => <Dog size={20} />,
    getCortes: () => [{ nombre: "Corte Clásico", imagen: "corte1.jpg", precio: 15, destacado: true },
        { nombre: "Corte Moderno", imagen: "corte2.jpg", precio: 20, destacado: false },
        { nombre: "Corte Moderno", imagen: "corte3.jpg", precio: 20, destacado: false },
        { nombre: "Corte Moderno", imagen: "corte4.jpg", precio: 20, destacado: false },
        { nombre: "Corte Moderno", imagen: "corte5.jpg", precio: 20, destacado: false },
        { nombre: "Corte Moderno", imagen: "corte6.jpg", precio: 20, destacado: false },
        { nombre: "Corte Moderno", imagen: "corte7.jpg", precio: 20, destacado: false },
        { nombre: "Corte Moderno", imagen: "corte8.jpg", precio: 20, destacado: false },],
    getDescripcion: () => "Estilos exclusivos para perros"
  },
  felina: {
    getTipo: () => "Felina",
    getIcono: () => <Cat size={20} />,
    getCortes: () => [ { nombre: "Corte León", imagen: "imgg1.jpg", precio: 18, destacado: true },
        { nombre: "Corte Suave", imagen: "imgg2.jpg", precio: 22, destacado: false },
        { nombre: "Corte Suave", imagen: "imgg3.jpg", precio: 22, destacado: false },
        { nombre: "Corte Suave", imagen: "imgg4.jpg", precio: 22, destacado: false },
        { nombre: "Corte Suave", imagen: "imgg5.jpg", precio: 22, destacado: false },
        { nombre: "Corte Suave", imagen: "imgg6.jpg", precio: 22, destacado: false },
        { nombre: "Corte Suave", imagen: "imgg7.jpg", precio: 22, destacado: false },
        { nombre: "Corte Suave", imagen: "imgg8.jpg", precio: 22, destacado: false },
        { nombre: "Corte Suave", imagen: "imgg9.jpg", precio: 22, destacado: false },],
    getDescripcion: () => "Estilos especializados para gatos"
  }
};