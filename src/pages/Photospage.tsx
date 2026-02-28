import { useState, useEffect } from "react";

interface Photo {
  id: number;
  albumId: number;
  title: string;
  thumbnailUrl: string;
}

function Photospage() {
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [id, setId] = useState<number>(2);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((r) => r.json())
      .then(setPhoto);
  }, [id]);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        maxWidth: 600,
        margin: "40px auto",
        padding: "0 20px",
      }}
    >
      <h1>SSR Meta Tag Test</h1>

      <div style={{ marginBottom: 20 }}>
        <label>Photo ID: </label>
        <input
          type="number"
          value={id}
          min={1}
          onChange={(e) => setId(Number(e.target.value))}
          style={{ marginLeft: 8, padding: "4px 8px", width: 80 }}
        />
      </div>

      {photo ? (
        <div style={{ border: "1px solid #eee", borderRadius: 8, padding: 20 }}>
          <img
            src={photo.thumbnailUrl}
            alt={photo.title}
            style={{ borderRadius: 4 }}
          />
          <h2 style={{ fontSize: 16 }}>{photo.title}</h2>
          <p style={{ color: "#666" }}>Album ID: {photo.albumId}</p>
          <p style={{ color: "#666" }}>Photo ID: {photo.id}</p>
          <hr />
          <p style={{ fontSize: 13, color: "#999" }}>
            Visit <code>/photos/{id}</code> and view source to see injected OG
            tags
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Photospage;
