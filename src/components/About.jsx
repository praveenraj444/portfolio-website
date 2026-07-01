import React, { useState, useEffect } from 'react';

const About = () => {
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

  const skills = ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Canva', 'Reactjs', 'MongoDB'];
  const interests = ['Artificial Intelligence', 'Web Development', 'Open Source', 'Machine Learning'];

  const colors = {
    bg: isDark ? '#0f0f1a' : '#eef2ff',  // Blue tint for light mode
    cardBg: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.9)',
    textPrimary: isDark ? '#ffffff' : '#1e1b4b',
    textSecondary: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(30,27,75,0.7)',
    border: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(99,102,241,0.15)',
    shadow: isDark ? '0 8px 40px rgba(0,0,0,0.4)' : '0 8px 40px rgba(99,102,241,0.08)'
  };

  return (
    <section id="about" style={{
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
        right: '-10%',
        width: '500px',
        height: '500px',
        background: isDark ? 'rgba(99,102,241,0.05)' : 'rgba(99,102,241,0.1)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: isDark ? 'rgba(99,102,241,0.03)' : 'rgba(99,102,241,0.08)',
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
          }}>About Me</span>
          <h2 style={{
            fontSize: 'clamp(36px, 4vw, 48px)',
            fontWeight: '700',
            color: colors.textPrimary,
            marginTop: '8px',
            letterSpacing: '-1.5px'
          }}>
            Who I Am
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '30px'
        }}>
          <div style={{
            padding: '40px',
            background: colors.cardBg,
            borderRadius: '20px',
            border: `1px solid ${colors.border}`,
            boxShadow: colors.shadow,
            backdropFilter: 'blur(10px)',
            transition: 'all 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.borderColor = '#6366f1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = colors.border;
          }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>🧑‍💻</div>
            <h3 style={{
              color: colors.textPrimary,
              fontSize: '22px',
              marginBottom: '12px',
              fontWeight: '600'
            }}>
              Who I Am
            </h3>
            <p style={{
              color: colors.textSecondary,
              lineHeight: '1.8',
              fontSize: '16px'
            }}>
              I am a passionate college student and aspiring software engineer with strong problem-solving skills in coding. I know how to work effectively with AI tools and use prompt-based (vibe) coding to generate code, then customize and optimize it according to my project requirements. I am a quick learner who adapts easily to new technologies and continuously improves my skills.
            </p>
          </div>

          <div style={{
            padding: '40px',
            background: colors.cardBg,
            borderRadius: '20px',
            border: `1px solid ${colors.border}`,
            boxShadow: colors.shadow,
            backdropFilter: 'blur(10px)',
            transition: 'all 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.borderColor = '#6366f1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = colors.border;
          }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>🛠️</div>
            <h3 style={{
              color: colors.textPrimary,
              fontSize: '22px',
              marginBottom: '16px',
              fontWeight: '600'
            }}>
              Technical Skills
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              {skills.map((skill) => (
                <span key={skill} style={{
                  padding: '8px 18px',
                  background: isDark ? 'rgba(99,102,241,0.12)' : 'rgba(99,102,241,0.1)',
                  color: '#6366f1',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: `1px solid ${isDark ? 'rgba(99,102,241,0.15)' : 'rgba(99,102,241,0.15)'}`
                }}>
                  {skill}
                </span>
              ))}
            </div>
            
            <div style={{ marginTop: '24px' }}>
              <h4 style={{
                color: colors.textSecondary,
                fontSize: '15px',
                marginBottom: '12px',
                fontWeight: '500'
              }}>
                🎯 Core Interests
              </h4>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                {interests.map((interest) => (
                  <span key={interest} style={{
                    padding: '6px 16px',
                    background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(99,102,241,0.05)',
                    color: colors.textSecondary,
                    borderRadius: '50px',
                    fontSize: '13px',
                    border: `1px solid ${colors.border}`
                  }}>
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;