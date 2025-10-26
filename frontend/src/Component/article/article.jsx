import React, { useState, useEffect } from "react";

export default function ArticleSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch articles from backend
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:5002/Iconic");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setResults(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  // Filter results based on searchTerm
  const filteredResults = results.filter(article =>
    article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.author?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p style={{ textAlign: "center" }}>Loading articles...</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Segoe UI, Tahoma, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", fontSize: "26px" }}>Articles</h1>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by title, author, or content..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "500px",
            padding: "10px 15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "15px",
            outline: "none",
          }}
        />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {filteredResults.length > 0 ? filteredResults.map(article => (
          <div
            key={article._id}
            onClick={() => setSelectedArticle(article)}
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              cursor: "pointer",
              overflow: "hidden",
              background: "#fff",
              transition: "transform 0.2s ease-in-out"
            }}
          >
            <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
              <img src={article.previewImage} alt={article.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ padding: "10px" }}>
              <h3 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>{article.title}</h3>
              <p style={{ margin: "0 0 5px 0", fontSize: "14px" }}>
                <strong>Author:</strong> {article.author}
              </p>
              <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.4" }}>
                {article.content.slice(0, 100)}...
              </p>
            </div>
          </div>
        )) : (
          <p>No articles found.</p>
        )}
      </div>

      {selectedArticle && (
        <div onClick={() => setSelectedArticle(null)} style={{
          position: "fixed",
          top: 0, left: 0,
          width: "100vw", height: "100vh",
          background: "rgba(0,0,0,0.7)",
          display: "flex", justifyContent: "center", alignItems: "center",
          zIndex: 2000, padding: "10px", overflowY: "auto"
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            position: "relative",
            background: "#fff",
            borderRadius: "12px",
            width: "100%",
            maxWidth: "800px",
            padding: "20px",
            boxSizing: "border-box",
            maxHeight: "90vh",
            overflowY: "auto",
            margin: "auto"
          }}>
            <button onClick={() => setSelectedArticle(null)} style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              cursor: "pointer",
              fontSize: "18px"
            }}>✕</button>

            <img src={selectedArticle.fullImage} alt={selectedArticle.title} style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              marginBottom: "15px",
              display: "block",
              objectFit: "contain"
            }} />

            <h2 style={{ textAlign: "center" }}>{selectedArticle.title}</h2>
            <p style={{ textAlign: "center", fontSize: "14px" }}>
              <strong>Author:</strong> {selectedArticle.author}
            </p>
            <p style={{ lineHeight: "1.6", fontSize: "15px", textAlign: "justify" }}>
              {selectedArticle.content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
