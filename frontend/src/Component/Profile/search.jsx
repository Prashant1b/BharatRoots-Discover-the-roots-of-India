import React, { useState } from "react";
export default function ProfileSearch({ profiles }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      alert("Please enter a search term!");
      return;
    }

    const matched = profiles.filter(profile =>
      profile.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.role?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.hobby?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.country?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(matched);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Segoe UI, Tahoma, sans-serif" }}>
      <label style={{ display: "block", marginBottom: 6, fontWeight: "bold" }}>
        Search Profiles:
      </label>
      <div style={{ display: "flex", marginBottom: 15 }}>
        <input
          type="text"
          placeholder="Enter name, role, hobby or country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px 0 0 8px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "15px"
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "0 8px 8px 0",
            backgroundColor: "#7b5fcf",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Search
        </button>
      </div>

      <div>
        {results.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {results.map(profile => (
              <li
                key={profile.name}
                style={{
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "8px"
                }}
              >
                <strong>{profile.name}</strong> — {profile.hobby} ({profile.role}, {profile.country})
              </li>
            ))}
          </ul>
        ) : (
          searchTerm && <p>No profiles found.</p>
        )}
      </div>
    </div>
  );
}
