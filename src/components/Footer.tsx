import React from 'react'
import { Github} from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src="/image/footer_logo.png"
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
            </div>
            <p className="footer-tagline">MegaETH AI-Powered NFT Money Market</p>
            <div className="footer-devinfo">
              <strong>Made by :</strong> Aram Petrosyan
              <div className="footer-dev-contacts">
                <a
                  href="https://github.com/lorine93s"
                  className="footer-dev-contact"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <Github size={18} style={{ verticalAlign: 'middle', marginRight: 6 }} />
                  <span>@lorine93s</span>
                </a>
                <a
                  href="https://twitter.com/kakamajo_btc"
                  className="footer-dev-contact"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  title="Twitter"
                >
                  <img src="/image/x.png" alt="Twitter" style={{ width: 18, height: 18, verticalAlign: 'middle', marginRight: 6 }} />
                  <span>@kakamajo_btc</span>
                </a>
                <a
                  href="https://discord.com/users/lorine93s"
                  className="footer-dev-contact"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Discord"
                  title="Discord"
                >
                  <img src="/image/discord.png" alt="Discord" style={{ width: 18, height: 18, verticalAlign: 'middle', marginRight: 6 }} />
                  <span>@lorine93s</span>
                </a>
              </div>
            </div>
            <p className="footer-copyright">
              Flur3 Labs ©2025 All rights reserved.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="social-icons">
              <a href="https://x.com/lorine93s" className="social-link" aria-label="X" target="_blank" rel="noreferrer">
                <img src="/image/x.png" alt="X" style={{ width: 20, height: 20 }} />
              </a>
              <a href="https://discord.com/ozzo" className="social-link" aria-label="Discord" target="_blank" rel="noreferrer">
                <img src="/image/discord.png" alt="Discord" style={{ width: 20, height: 20 }} />
              </a>
              <a href="https://gitbook.com" className="social-link" aria-label="GitBook" target="_blank" rel="noreferrer">
                <img src="/image/GitBook.png" alt="GitBook" style={{ width: 20, height: 20 }} />
              </a>
            </div>
            <div className="legal-links">
              <a href="#" className="legal-link">Terms of Services</a>
              <a href="#" className="legal-link">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
        .footer {
          background: #C37AFE;
          padding: 60px 0 40px;
          color: white;
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 48px;
        }
        
        .footer-brand {
          flex: 1;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .footer-devinfo {
          margin: 12px 0 8px 0;
          font-size: 1rem;
          font-weight: 500;
          color: #fff;
        }
        .footer-dev-contacts {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 6px;
        }
        .footer-dev-contact {
          display: flex;
          align-items: center;
          color: #fff;
          text-decoration: none;
          font-size: 0.98rem;
          opacity: 0.85;
          transition: opacity 0.2s;
        }
        .footer-dev-contact:hover {
          opacity: 1;
          text-decoration: underline;
        }
        
        .logo-icon {
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8B5CF6;
          font-weight: 700;
          font-size: 20px;
        }
        
        .logo-text {
          font-size: 28px;
          font-weight: 800;
          color: white;
        }
        
        .footer-tagline {
          font-size: 1.1rem;
          margin-bottom: 16px;
          opacity: 0.9;
        }
        
        .footer-copyright {
          font-size: 0.9rem;
          opacity: 0.7;
        }
        
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: flex-end;
        }
        
        .social-icons {
          display: flex;
          gap: 12px;
        }
        
        .social-link {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        
        .legal-links {
          display: flex;
          gap: 24px;
        }
        
        .legal-link {
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
        
        .legal-link:hover {
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          .footer {
            padding: 48px 0 32px;
          }
          
          .footer-content {
            flex-direction: column;
            gap: 32px;
            text-align: center;
          }
          
          .footer-links {
            align-items: center;
          }
          
          .legal-links {
            flex-direction: column;
            gap: 12px;
          }
          
          .logo-text {
            font-size: 24px;
          }
          
          .logo-icon {
            width: 36px;
            height: 36px;
            font-size: 18px;
          }
          .footer-dev-contacts {
            justify-content: center;
          }
        }
      `
      }} />
    </footer>
  )
}

export default Footer
