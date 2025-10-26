import React, { useState, useEffect } from "react";
import Quiz from "./Quiz";
export default function Suggestion() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showSuggestionModal, setShowSuggestionModal] = useState(false);
  const [suggestion, setSuggestion] = useState({
    name: "",
    title: "",
    description: "",
    image: "",
  });
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch articles from backend
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("http://localhost:5002/Iconic");
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  // Handle form submit to backend
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!suggestion.name || !suggestion.title || !suggestion.image||!suggestion.description) {
    alert("Please fill all fields and provide an image URL!");
    return;
  }

  const newArticle = {
    title: suggestion.title,
    author: suggestion.name,
    content: suggestion.description || "Traditional contribution by our users.",
    previewImage: suggestion.image,
    fullImage: suggestion.image,
  };

  try {
    const response = await fetch("http://localhost:5002/Iconic", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newArticle),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to submit article");
    }

    const savedArticle = await response.json();
    setArticles([savedArticle, ...articles]);
    setSuggestion({ name: "", title: "", description: "", image: "" });
    setShowSuggestionModal(false);
    alert("🎉 Thanks! Your post has been saved.");
  } catch (err) {
    console.error("Submit error:", err);
    alert("Error saving your suggestion: " + err.message);
  }
};


  if (loading) return <p style={{ textAlign: "center" }}>Loading articles...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Suggestion Form</h1>

      {/* Suggest Button */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <button onClick={() => setShowSuggestionModal(true)} style={{ background: "#ff7043", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "8px",  cursor: "pointer", fontSize: "16px",}} >📸 Share Your Roots</button>
      </div>
      {/* Article List */}
      <div style={{ display: "flex",  flexWrap: "wrap", gap: "20px", justifyContent: "center",}}>
        {articles.map((article) => (
          <div key={article._id} onClick={() => setSelectedArticle(article)} style={{ width: "100%", maxWidth: "400px", borderRadius: "10px", marginBottom: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.2)", cursor: "pointer", overflow: "hidden", background: "#fff",}} >
            <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
              <img src={article.previewImage} alt={article.title} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
            </div>
            <div style={{ padding: "10px" }}>
              <h3 style={{ margin: "0 0 10px 0" }}>{article.title}</h3>
              <p style={{ margin: "0 0 5px 0", fontSize: "14px" }}>
                <strong>Author:</strong> {article.author}
              </p>
              <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.4" }}>
                {article.content.slice(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Suggestion Modal */}
      {showSuggestionModal && (
        <div onClick={() => setShowSuggestionModal(false)} style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100dvh", background: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 3000, }} >
          <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: "10px", padding: "20px", width: "90%", maxWidth: "500px", boxShadow: "0 2px 10px rgba(0,0,0,0.3)",}}>
            <h2 style={{ textAlign: "center" }}>📸 Share Your Roots</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" value={suggestion.name} onChange={(e) => setSuggestion({ ...suggestion, name: e.target.value }) } style={inputStyle} />
              <input type="text" placeholder="Location / Tradition Name" value={suggestion.title} onChange={(e) => setSuggestion({ ...suggestion, title: e.target.value }) } style={inputStyle} />
              <textarea placeholder="Description (optional)" value={suggestion.description} onChange={(e) => setSuggestion({ ...suggestion, description: e.target.value }) } style={{ ...inputStyle, height: "80px" }}/>
              <input type="text" placeholder="Paste Image URL here" value={suggestion.image} onChange={(e) => setSuggestion({ ...suggestion, image: e.target.value })} style={inputStyle} />
              {suggestion.image && (
                <img src={suggestion.image} alt="Preview" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px", }}/>)}
              <button type="submit" style={{ background: "#2e7d32", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "6px", cursor: "pointer", width: "100%", }}>Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Article Modal */}
      {selectedArticle && (
        <div  onClick={() => setSelectedArticle(null)} style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100dvh", background: "rgba(0,0,0,0.7)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2000, padding: "20px", overflowY: "auto", }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: "10px", width: "100%", maxWidth: "800px", padding: "20px", boxSizing: "border-box", maxHeight: "90dvh", overflowY: "auto", position: "relative",}}>
            <button onClick={() => setSelectedArticle(null)} style={{position: "absolute",top: "10px",right: "10px",background: "rgba(0,0,0,0.6)",color: "#fff",border: "none",borderRadius: "50%",width: "30px",height: "30px",cursor: "pointer",fontSize: "18px",}}>✕</button>
            <img src={selectedArticle.fullImage} alt={selectedArticle.title} style={{width: "100%",height: "auto",borderRadius: "10px",marginBottom: "15px",display: "block",}}/>
            <h2>{selectedArticle.title}</h2>
            <p>
              <strong>Author:</strong> {selectedArticle.author}
            </p>
            <p style={{ lineHeight: "1.6" }}>{selectedArticle.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const inputStyle = {width: "100%",padding: "8px",marginBottom: "10px",borderRadius: "6px",border: "1px solid #ccc",fontSize: "14px",};
