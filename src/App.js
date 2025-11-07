import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/andrewherubin/repos")
      .then((res) => res.json())
      .then((data) => {
        // Filter out forked repos and sort by most recently updated
        const filtered = data
          .filter((repo) => !repo.fork)
          .sort(
            (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
          );
        setRepos(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching repos:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>Andrew Herubin</h1>
        <p>Software Engineer | Cloud Enthusiast</p>
      </header>

      <main>
        <h2>My GitHub Projects</h2>

        {loading ? (
          <p>Loading projects...</p>
        ) : (
<div className="project-grid">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="project-card-link"
              >
                <div className="project-card">
                  <div className="card-header">
                    <h3>{repo.name}</h3>
                  </div>
                  <div className="card-body">
                    <p>{repo.description || "No description available."}</p>
                    <div className="repo-stats">
                      ⭐ {repo.stargazers_count} • 🕒{" "}
                      {new Date(repo.updated_at).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;    