import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const colors = {
    bg: isDark ? '#0a0a0f' : '#dbeafe',  // Light blue background
    cardBg: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.95)',
    textPrimary: isDark ? '#ffffff' : '#1e1b4b',
    textSecondary: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(30,27,75,0.7)',
    border: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(99,102,241,0.15)',
    inputBg: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(99,102,241,0.05)',
    shadow: isDark ? '0 8px 40px rgba(0,0,0,0.4)' : '0 8px 40px rgba(99,102,241,0.08)'
  };

  return (
    <section id="contact" style={{
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
        maxWidth: '650px',
        margin: '0 auto',
        width: '100%',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{
            fontSize: '13px',
            color: '#6366f1',
            fontWeight: '600',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>Contact</span>
          <h2 style={{
            fontSize: 'clamp(36px, 4vw, 48px)',
            fontWeight: '700',
            color: colors.textPrimary,
            marginTop: '8px',
            letterSpacing: '-1.5px'
          }}>
            Let's Connect
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
            margin: '16px auto 0',
            borderRadius: '2px'
          }} />
          <p style={{
            color: colors.textSecondary,
            marginTop: '20px',
            fontSize: '16px'
          }}>
            Have a question or want to work together? Let's talk!
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{
          padding: '48px',
          background: colors.cardBg,
          borderRadius: '24px',
          border: `1px solid ${colors.border}`,
          boxShadow: colors.shadow,
          backdropFilter: 'blur(10px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          transition: 'all 0.5s ease'
        }}>
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: colors.textSecondary,
              fontWeight: '500',
              fontSize: '13px',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '14px 18px',
                borderRadius: '12px',
                border: `1px solid ${colors.border}`,
                background: colors.inputBg,
                color: colors.textPrimary,
                fontSize: '16px',
                outline: 'none',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#6366f1';
                e.target.style.boxShadow = '0 0 0 4px rgba(99,102,241,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = colors.border;
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: colors.textSecondary,
              fontWeight: '500',
              fontSize: '13px',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '14px 18px',
                borderRadius: '12px',
                border: `1px solid ${colors.border}`,
                background: colors.inputBg,
                color: colors.textPrimary,
                fontSize: '16px',
                outline: 'none',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#6366f1';
                e.target.style.boxShadow = '0 0 0 4px rgba(99,102,241,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = colors.border;
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: colors.textSecondary,
              fontWeight: '500',
              fontSize: '13px',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>Message</label>
            <textarea
              name="message"
              placeholder="What would you like to discuss?"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: '100%',
                padding: '14px 18px',
                borderRadius: '12px',
                border: `1px solid ${colors.border}`,
                background: colors.inputBg,
                color: colors.textPrimary,
                fontSize: '16px',
                outline: 'none',
                resize: 'vertical',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#6366f1';
                e.target.style.boxShadow = '0 0 0 4px rgba(99,102,241,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = colors.border;
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: '16px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '17px',
              fontWeight: '600',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: isSubmitting ? 0.7 : 1,
              marginTop: '8px',
              boxShadow: '0 4px 20px rgba(99,102,241,0.3)',
              letterSpacing: '0.3px'
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 12px 40px rgba(99,102,241,0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 20px rgba(99,102,241,0.3)';
              }
            }}
          >
            {isSubmitting ? '⏳ Sending...' : '📩 Send Message'}
          </button>

          {submitStatus === 'success' && (
            <div style={{
              padding: '16px',
              background: isDark ? 'rgba(16,185,129,0.12)' : 'rgba(16,185,129,0.08)',
              color: isDark ? '#34d399' : '#065f46',
              borderRadius: '12px',
              border: `1px solid ${isDark ? 'rgba(16,185,129,0.2)' : 'rgba(16,185,129,0.15)'}`,
              textAlign: 'center',
              fontWeight: '500',
              fontSize: '15px'
            }}>
              ✅ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div style={{
              padding: '16px',
              background: isDark ? 'rgba(239,68,68,0.12)' : 'rgba(239,68,68,0.08)',
              color: isDark ? '#f87171' : '#991b1b',
              borderRadius: '12px',
              border: `1px solid ${isDark ? 'rgba(239,68,68,0.2)' : 'rgba(239,68,68,0.15)'}`,
              textAlign: 'center',
              fontWeight: '500',
              fontSize: '15px'
            }}>
              ❌ Failed to send message. Please try again later.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;