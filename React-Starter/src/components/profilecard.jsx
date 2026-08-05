import Button from './Button';
import './ProfileCard.css';

export default function ProfileCard({ profile, skills }) {
  return (
    <div className="profile-card">
      <img src={profile.avatar} alt={profile.name} className="profile-avatar" />
      <h2 className="profile-name">{profile.name}</h2>
      <p className="profile-title">{profile.title}</p>
      <p className="profile-bio">{profile.bio}</p>

      <h4>Skills</h4>
      <div className="skills-list">
        {skills.map((skill) => (
          <span key={skill} className="skill-chip">
            {skill}
          </span>
        ))}
      </div>

      <div className="profile-actions">
        <Button label="GitHub" onClick={() => window.open(profile.github)} variant="secondary" />
        <Button label="LinkedIn" onClick={() => window.open(profile.linkedin)} variant="primary" />
      </div>
    </div>
  );
}