import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/andrewherubin/repos")
      .then(res => res.json())
      .then(data => setRepos(data))
      .catch(err => console.error("Error fetching repos:", err));
  }, []);

  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <header>
        <h1>Andrew Herubin</h1>
        <p>Software Engineer | Spring Boot | Cloud | APIs</p>
      </header>

      <section id="projects">
        <h2>My GitHub Projects</h2>
        {repos.length === 0 ? (
          <p>Loading...</p>
        ) : (
          repos.map(repo => (
            <div key={repo.id} style={{ marginBottom: "1rem" }}>
              <h3>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  {repo.name}
                </a>
              </h3>
              <p>{repo.description || "No description provided."}</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default App;