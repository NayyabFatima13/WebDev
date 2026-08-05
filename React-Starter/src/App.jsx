import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import Card from './components/Card';
import { profileInfo, projects, skills } from './portfolioData';
import './App.css';

export default function App() {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
  ];

  return (
    <div className="app-container">
      <Navbar brandName="My Portfolio" links={navLinks} />

      <main className="main-layout">
        <aside className="sidebar">
          <ProfileCard profile={profileInfo} skills={skills} />
        </aside>

        <section className="content">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-list">
            {projects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}