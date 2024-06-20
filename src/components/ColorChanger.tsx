import { useEffect, useState } from "react";
import { set, ref, onValue } from "firebase/database";
import { db } from "@/firebase/config";

export default function ColorChanger() {
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    const colorRef = ref(db, "color");
    onValue(colorRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setColor(data);
      }
    });
  }, []);

  const handleColorChange = () => {
    const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    set(ref(db, "color"), newColor);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={handleColorChange}>Change Background Color</button>
    </div>
  );
}
