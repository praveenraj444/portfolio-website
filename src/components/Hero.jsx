import React, { useState, useEffect } from 'react';

const Hero = () => {
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
    bg: isDark ? '#0a0a0f' : '#eef2ff',
    textPrimary: isDark ? '#ffffff' : '#1e1b4b',
    textSecondary: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(30,27,75,0.7)',
    glow: isDark ? 'rgba(99,102,241,0.15)' : 'rgba(99,102,241,0.1)',
    photoBorder: isDark ? 'rgba(99,102,241,0.3)' : 'rgba(99,102,241,0.2)',
    photoBg: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.5)',
    shape1: isDark ? 'rgba(99,102,241,0.08)' : 'rgba(99,102,241,0.06)',
    shape2: isDark ? 'rgba(139,92,246,0.06)' : 'rgba(139,92,246,0.04)',
    shape3: isDark ? 'rgba(167,139,250,0.04)' : 'rgba(167,139,250,0.03)'
  };

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 20px 60px',
      background: colors.bg,
      transition: 'all 0.5s ease',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Shapes */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: `radial-gradient(circle, ${colors.shape1} 0%, transparent 70%)`,
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: `radial-gradient(circle, ${colors.shape2} 0%, transparent 70%)`,
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        background: `radial-gradient(circle, ${colors.shape3} 0%, transparent 70%)`,
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Left Side - Text Content */}
        <div style={{
          textAlign: 'left'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '6px 20px',
            borderRadius: '50px',
            background: isDark ? 'rgba(99,102,241,0.15)' : 'rgba(99,102,241,0.1)',
            color: '#6366f1',
            fontSize: '13px',
            fontWeight: '600',
            marginBottom: '28px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            border: `1px solid ${isDark ? 'rgba(99,102,241,0.2)' : 'rgba(99,102,241,0.15)'}`
          }}>
            👋 Welcome to my portfolio
          </div>
          
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 64px)',
            fontWeight: '800',
            color: colors.textPrimary,
            marginBottom: '8px',
            letterSpacing: '-2px',
            lineHeight: '1.1'
          }}>
            Hi, I'm{' '}
            <span style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              PRAVEENRAJ M
            </span>
          </h1>
          
          <h2 style={{
            fontSize: 'clamp(16px, 1.8vw, 26px)',
            color: colors.textSecondary,
            fontWeight: '400',
            marginBottom: '20px',
            letterSpacing: '-0.3px'
          }}>
            College Student &amp; Aspiring Software Engineer
          </h2>
          
          <p style={{
            fontSize: 'clamp(14px, 1vw, 18px)',
            color: colors.textSecondary,
            maxWidth: '550px',
            marginBottom: '40px',
            lineHeight: '1.8',
            fontWeight: '300'
          }}>
            Passionate about building elegant solutions to complex problems. 
            Currently exploring the intersections of AI, web development, and software engineering.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px'
          }}>
            <a href="#projects" style={{
              padding: '12px 28px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '14px',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'inline-block',
              boxShadow: '0 4px 20px rgba(99,102,241,0.3)',
              letterSpacing: '0.3px',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 12px 40px rgba(99,102,241,0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 20px rgba(99,102,241,0.3)';
            }}>
              📂 View Work
            </a>
            
            <a 
              href="/PRAVEENRAJ_M_RESUME.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '12px 28px',
                background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.7)',
                color: colors.textPrimary,
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'inline-block',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(99,102,241,0.2)'}`,
                letterSpacing: '0.3px',
                backdropFilter: 'blur(10px)',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.borderColor = '#6366f1';
                e.target.style.boxShadow = '0 8px 30px rgba(99,102,241,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.borderColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(99,102,241,0.2)';
                e.target.style.boxShadow = 'none';
              }}
            >
              📄 View Resume
            </a>

            <a 
              href="/PRAVEENRAJ_M_RESUME.pdf" 
              download
              style={{
                padding: '12px 28px',
                background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.7)',
                color: colors.textPrimary,
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'inline-block',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(99,102,241,0.2)'}`,
                letterSpacing: '0.3px',
                backdropFilter: 'blur(10px)',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.borderColor = '#6366f1';
                e.target.style.boxShadow = '0 8px 30px rgba(99,102,241,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.borderColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(99,102,241,0.2)';
                e.target.style.boxShadow = 'none';
              }}
            >
              ⬇️ Download Resume
            </a>
          </div>
        </div>

        {/* Right Side - Photo Box */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            position: 'relative',
            padding: '8px',
            borderRadius: '24px',
            background: `linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa, #6366f1)`,
            backgroundSize: '300% 300%',
            animation: 'gradientMove 4s ease infinite',
            boxShadow: isDark 
              ? '0 20px 60px rgba(99,102,241,0.3)' 
              : '0 20px 60px rgba(99,102,241,0.2)',
            width: '100%',
            maxWidth: '380px'
          }}>
            <div style={{
              borderRadius: '18px',
              overflow: 'hidden',
              background: colors.photoBg,
              backdropFilter: 'blur(20px)',
              border: `1px solid ${colors.photoBorder}`,
              width: '100%',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              {/* Background Shapes inside Photo Box */}
              <div style={{
                position: 'absolute',
                top: '-30%',
                right: '-20%',
                width: '300px',
                height: '300px',
                background: `radial-gradient(circle, ${isDark ? 'rgba(99,102,241,0.1)' : 'rgba(99,102,241,0.08)'} 0%, transparent 70%)`,
                borderRadius: '50%',
                pointerEvents: 'none'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-20%',
                left: '-20%',
                width: '250px',
                height: '250px',
                background: `radial-gradient(circle, ${isDark ? 'rgba(139,92,246,0.08)' : 'rgba(139,92,246,0.06)'} 0%, transparent 70%)`,
                borderRadius: '50%',
                pointerEvents: 'none'
              }} />
              
              {/* Photo */}
              <img 
                src="/My_photo.png" 
                alt="PRAVEENRAJ M"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  position: 'relative',
                  zIndex: 1
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div style="
                      text-align: center;
                      color: ${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(30,27,75,0.3)'};
                      font-size: 14px;
                      padding: 20px;
                      position: relative;
                      z-index: 1;
                    ">
                      <div style="font-size: 64px; margin-bottom: 10px;">📸</div>
                      <div>Add your photo</div>
                      <div style="font-size: 12px; margin-top: 5px;">Save as My_photo.png in public folder</div>
                    </div>
                  `;
                }}
              />
              
              {/* Badge */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                padding: '6px 16px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: 'white',
                borderRadius: '50px',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.5px',
                boxShadow: '0 4px 15px rgba(99,102,241,0.3)',
                backdropFilter: 'blur(10px)',
                zIndex: 2
              }}>
                ✦ Portfolio
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @media (max-width: 768px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
              text-align: center !important;
            }
            .hero-text {
              text-align: center !important;
            }
            .hero-buttons {
              justify-content: center !important;
            }
            .hero-photo {
              max-width: 280px !important;
              margin: 0 auto !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;