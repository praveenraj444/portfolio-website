import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const colors = {
    bg: isDark ? '#0a0a0f' : '#e0e7ff',  // Blue tint
    cardBg: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.9)',
    textPrimary: isDark ? '#ffffff' : '#1e1b4b',
    textSecondary: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(30,27,75,0.7)',
    border: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(99,102,241,0.15)',
    shadow: isDark ? '0 8px 40px rgba(0,0,0,0.4)' : '0 8px 40px rgba(99,102,241,0.08)'
  };

  return (
    <section id="projects" style={{
      padding: '100px 24px',
      background: colors.bg,
      transition: 'all 0.5s ease',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Blue Glow */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: isDark ? 'rgba(99,102,241,0.05)' : 'rgba(99,102,241,0.08)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{
            fontSize: '13px',
            color: '#6366f1',
            fontWeight: '600',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>Portfolio</span>
          <h2 style={{
            fontSize: 'clamp(36px, 4vw, 48px)',
            fontWeight: '700',
            color: colors.textPrimary,
            marginTop: '8px',
            letterSpacing: '-1.5px'
          }}>
            Featured Projects
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
            margin: '16px auto 0',
            borderRadius: '2px'
          }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {projectsData.map((project, index) => (
            <div key={project.id} style={{
              padding: '32px',
              background: colors.cardBg,
              borderRadius: '20px',
              border: `1px solid ${colors.border}`,
              boxShadow: colors.shadow,
              backdropFilter: 'blur(10px)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.borderColor = '#6366f1';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(99,102,241,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = colors.border;
              e.currentTarget.style.boxShadow = colors.shadow;
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                padding: '8px 16px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: 'white',
                fontSize: '12px',
                fontWeight: '600',
                borderRadius: '0 20px 0 20px'
              }}>
                #{index + 1}
              </div>

              <h3 style={{
                color: colors.textPrimary,
                fontSize: '22px',
                marginBottom: '12px',
                fontWeight: '700',
                marginTop: '8px'
              }}>
                {project.title}
              </h3>
              <p style={{
                color: colors.textSecondary,
                lineHeight: '1.7',
                marginBottom: '20px',
                fontSize: '15px'
              }}>
                {project.description}
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '24px'
              }}>
                {project.techStack.map((tech) => (
                  <span key={tech} style={{
                    padding: '6px 16px',
                    background: isDark ? 'rgba(99,102,241,0.12)' : 'rgba(99,102,241,0.1)',
                    color: '#6366f1',
                    borderRadius: '50px',
                    fontSize: '13px',
                    fontWeight: '500',
                    border: `1px solid ${isDark ? 'rgba(99,102,241,0.15)' : 'rgba(99,102,241,0.15)'}`
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{
                display: 'flex',
                gap: '20px',
                paddingTop: '20px',
                borderTop: `1px solid ${colors.border}`
              }}>
                <a href={project.githubUrl} target="_blank" style={{
                  color: '#6366f1',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '14px',
                  transition: 'all 0.3s ease',
                  opacity: 0.8
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = '1';
                  e.target.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = '0.8';
                  e.target.style.transform = 'translateX(0)';
                }}>
                  📂 View Code →
                </a>
                <a href={project.liveUrl} target="_blank" style={{
                  color: '#6366f1',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '14px',
                  transition: 'all 0.3s ease',
                  opacity: 0.8
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = '1';
                  e.target.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = '0.8';
                  e.target.style.transform = 'translateX(0)';
                }}>
                  🚀 Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;