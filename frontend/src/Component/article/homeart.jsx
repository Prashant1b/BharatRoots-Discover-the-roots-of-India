import { useEffect, useRef, useState } from "react";
import { Link } from "react-router"; // Corrected import
// import articles from "../dummy/artdummy"; // Remove dummy import

export default function HomeArticle() {
  const [articles, setArticles] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("http://localhost:5002/Iconic");
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchArticles();
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") current.scrollBy({ left: -300, behavior: "smooth" });
    else current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", padding: "0 16px", marginTop: "30px" }}>
        <h2 style={{ fontSize: "22px", margin: "10px 0", flex: "1 1 auto", color: "#222" }}>Read to Explore Indian Heritage</h2>
        <Link to="/article" style={{ background: "rgba(255, 94, 0, 0.85)", color: "#fff", textDecoration: "none", fontSize: "14px", padding: "8px 14px", borderRadius: "8px", transition: "all 0.2s ease-in-out", margin: "10px 0" }}>Read All Articles →</Link>
      </div>

      <div style={{ position: "relative", width: "100%", overflow: "hidden", marginTop: "10px" }}>
        <button onClick={() => scroll("left")} className="scroll-btn left-btn" style={{ position: "absolute", top: "50%", left: "5px", transform: "translateY(-50%)", background: "rgba(255, 94, 0, 0.8)", color: "#fff", border: "none", padding: "8px 10px", borderRadius: "50%", cursor: "pointer", zIndex: 2, display: "none" }}>◀</button>

        <div ref={scrollRef} style={{ display: "flex", overflowX: "auto", scrollBehavior: "smooth", gap: "16px", padding: "10px 20px", scrollbarWidth: "none" }}>
          {articles.map(article => (
            <div key={article._id} style={{ minWidth: "230px", maxWidth: "240px", flex: "0 0 auto", borderRadius: "12px", boxShadow: "0 2px 6px rgba(0,0,0,0.15)", background: "#fff", overflow: "hidden", transition: "transform 0.2s ease" }}>
              <div style={{ width: "100%", height: "120px", overflow: "hidden" }}>
                <img src={article.previewImage} alt={article.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease" }} />
              </div>
              <div style={{ padding: "10px" }}>
                <h3 style={{ marginBottom: "6px", fontSize: "15px", color: "#222", lineHeight: "1.3" }}>{article.title}</h3>
                <p style={{ margin: "0 0 5px 0", fontSize: "12.5px", color: "#555" }}><strong>Author:</strong> {article.author}</p>
                <p style={{ margin: 0, fontSize: "12.5px", lineHeight: "1.5", color: "#666" }}>{article.content.slice(0, 75)}...</p>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => scroll("right")} className="scroll-btn right-btn" style={{ position: "absolute", top: "50%", right: "5px", transform: "translateY(-50%)", background: "rgba(255, 94, 0, 0.8)", color: "#fff", border: "none", padding: "8px 10px", borderRadius: "50%", cursor: "pointer", zIndex: 2, display: "none" }}>▶</button>
      </div>

      <style>
        {`
          @media (min-width: 768px) {
            .scroll-btn { display: inline-block !important; }
          }
          ::-webkit-scrollbar { display: none; }
          @media (max-width: 768px) {
            h2 { font-size: 20px !important; }
            div > div > img { height: 100px !important; }
          }
          div:hover > div > img { transform: scale(1.05); }
        `}
      </style>
    </>
  );
}
