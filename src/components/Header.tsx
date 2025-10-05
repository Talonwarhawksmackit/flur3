import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img
              src="/image/header_logo.png"
              alt="FLUR3 Logo"
              className="logo-img"
              style={{
                height: 40,
                width: 'auto',
                borderRadius: 8,
                objectFit: 'contain',
                display: 'block'
              }}
            />
            {/* <span className="logo-text">FLUR3</span> */}
          </div>
          
          <nav className="nav-desktop">
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </nav>
          
          <div className="header-actions">
            <button
              className="social-btn"
              onClick={() => window.open('https://x.com/lorine93s', '_blank')}
              aria-label="X"
            >
              <img src="/image/x.png" alt="X" style={{ width: 20, height: 20 }} />
            </button>
            <button
              className="social-btn"
              onClick={() => window.open('https://discord.com/ozzo', '_blank')}
              aria-label="Discord"
            >
              <img src="/image/discord.png" alt="Discord" style={{ width: 20, height: 20 }} />
            </button>
          </div>
        </div>
      </div>
      {/* Add a bottom line to distinguish header from main content */}
      <div className="header-bottom-line" />
      <style dangerouslySetInnerHTML={{
        __html: `
        .header {
          
          background: rgba(248, 240, 255, 0.9);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header-bottom-line {
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #8B5CF6 0%, #A855F7 100%);
          opacity: 0.18;
          margin: 20px: 0;
        }
        
        .header-content {
          display: flex;
          align-items: center;
          padding: 20px 0;
          justify-content: space-between;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .logo-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #8B5CF6, #A855F7);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 18px;
        }
        
        .logo-text {
          font-size: 24px;
          font-weight: 800;
          color: #1a1a1a;
        }
        
        .nav-desktop {
          display: flex;
          gap: 32px;
        }
        
        .nav-link {
          color: #1a1a1a;
          text-decoration: none;
          font-size: 21px;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover {
          color: #8B5CF6;
        }
        
        .header-actions {
          display: flex;
          gap: 12px;
        }
        
        .social-btn {
          width: 40px;
          height: 40px;
          background: #1a1a1a;
          border: none;
          border-radius: 8px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .social-btn:hover {
          background: #333;
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }
          
          .header {
            padding: 16px 0;
          }
          
          .logo-text {
            font-size: 20px;
          }
          
          .logo-icon {
            width: 28px;
            height: 28px;
            font-size: 16px;
          }
        }
        `
      }} />
    </header>
  )
}

export default Header
