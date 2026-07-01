import React, { useState, useEffect } from 'react';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  const colors = {
    bg: isDark 
      ? scrolled ? 'rgba(15,15,26,0.95)' : 'rgba(15,15,26,0.85)'
      : scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.85)',
    border: isDark ? 'rgba(99,102,241,0.15)' : 'rgba(99,102,241,0.1)',
    text: isDark ? '#ffffff' : '#1e1b4b',
    shadow: isDark ? '0 4px 30px rgba(0,0,0,0.5)' : '0 4px 30px rgba(99,102,241,0.08)'
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      background: colors.bg,
      backdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${colors.border}`,
      boxShadow: colors.shadow,
      padding: '0 40px',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      height: scrolled ? '64px' : '76px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%'
      }}>
        <a href="#" style={{
          fontSize: scrolled ? '20px' : '24px',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textDecoration: 'none',
          letterSpacing: '-0.5px',
          transition: 'font-size 0.3s ease'
        }}>
          Welcome to our portfolio
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {['About', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: colors.text,
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  opacity: 0.8,
                  letterSpacing: '0.3px',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = '1';
                  e.target.style.color = '#6366f1';
                  e.target.style.background = isDark ? 'rgba(99,102,241,0.15)' : 'rgba(99,102,241,0.08)';
                  e.target.style.transform = 'translateY(-4px)';
                  e.target.style.boxShadow = isDark 
                    ? '0 8px 25px rgba(99,102,241,0.2)' 
                    : '0 8px 25px rgba(99,102,241,0.12)';
                  e.target.style.border = `1px solid ${isDark ? 'rgba(99,102,241,0.2)' : 'rgba(99,102,241,0.15)'}`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = '0.8';
                  e.target.style.color = colors.text;
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.border = 'none';
                }}
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Logout Button */}
          {isLoggedIn && (
            <button
              onClick={onLogout}
              style={{
                padding: '8px 18px',
                borderRadius: '50px',
                border: `1px solid ${colors.border}`,
                background: isDark ? 'rgba(239,68,68,0.15)' : 'rgba(239,68,68,0.08)',
                color: isDark ? '#f87171' : '#dc2626',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = isDark ? 'rgba(239,68,68,0.25)' : 'rgba(239,68,68,0.15)';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = isDark ? 'rgba(239,68,68,0.15)' : 'rgba(239,68,68,0.08)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              🚪 Logout
            </button>
          )}

          <button
            onClick={toggleTheme}
            style={{
              padding: '8px 16px',
              borderRadius: '50px',
              border: `1px solid ${colors.border}`,
              background: isDark ? 'rgba(99,102,241,0.1)' : 'rgba(99,102,241,0.05)',
              color: colors.text,
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#6366f1';
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 0 20px rgba(99,102,241,0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = colors.border;
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            {isDark ? '☀️' : '🌙'}
            <span>{isDark ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;