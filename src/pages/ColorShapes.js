import React, { useState } from "react";

const COLORS = ["#ff4081", "#2196f3", "#4caf50", "#ffeb3b", "#ff9800"];
const INITIAL_SHAPES = [
  { id: 1, type: "circle", color: "#ffffff" },
  { id: 2, type: "square", color: "#ffffff" },
  { id: 3, type: "triangle", color: "#ffffff" },
  { id: 4, type: "circle", color: "#ffffff" },
  { id: 5, type: "square", color: "#ffffff" },
];

function ColorShapes() {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [shapes, setShapes] = useState(INITIAL_SHAPES);

  const paintShape = (id) => {
    setShapes((current) =>
      current.map((shape) =>
        shape.id === id ? { ...shape, color: selectedColor } : shape
      )
    );
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-yellow-100 via-amber-100 to-pink-100"
      style={{ fontFamily: "'Comic Sans MS','Comic Neue',cursive" }}
    >
      <div className="max-w-4xl w-full bg-white/90 rounded-3xl shadow-2xl p-8 border-4 border-solid border-pink-200">
        <h1 className="text-3xl font-extrabold text-pink-500 text-center">
           Color the Shapes
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Pick a color, then fill the shape.
        </p>

      
        <div className="flex justify-center flex-wrap gap-3 mt-6">
          {COLORS.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-12 h-12 rounded-full border-4 transition-transform ${
                selectedColor === color
                  ? "border-black scale-110"
                  : "border-white shadow"
              }`}
              style={{ backgroundColor: color }}
              aria-label={`Select ${color}`}
            />
          ))}
        </div>

      
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-10">
          {shapes.map((shape) => {
            if (shape.type === "triangle") {
              return (
                <div
                  key={shape.id}
                  className="mx-auto cursor-pointer"
                  onClick={() => paintShape(shape.id)}
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "50px solid transparent",
                    borderRight: "50px solid transparent",
                    borderBottom: `90px solid ${shape.color}`,
                    filter: "drop-shadow(0 6px 6px rgba(0,0,0,0.15))",
                  }}
                />
              );
            }

            return (
              <button
                key={shape.id}
                onClick={() => paintShape(shape.id)}
                className="w-28 h-28 flex items-center justify-center border-4 shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-200"
                style={{
                  borderColor: "#fda4af",
                  borderRadius: shape.type === "circle" ? "9999px" : "1.25rem",
                  backgroundColor: shape.color,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ColorShapes;
