import React from 'react'

interface HeroProps {
  email: string
  setEmail: (email: string) => void
  onSubmit: (e: React.FormEvent) => void
}

const Hero: React.FC<HeroProps> = ({ email, setEmail, onSubmit }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h3 className="hero-title">
            MegaETH AI-Powered Liquidity
            <br />
            Layer for NFTs
          </h3>
          <p className="hero-subtitle">
            Borrow, Lend and Earn with your NFTs
          </p>
          
          <form className="hero-form" onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-input"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="form-button">
                Join Waitlist
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
        .hero {
          padding: 242px 0;
          text-align: center;
        }
        
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 500;
          line-height: 1.1;
          margin-bottom: 24px;
          color: #1a1a1a;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          color: #6B7280;
          margin-bottom: 48px;
          font-weight: 400;
        }
        
        .hero-form {
          max-width: 500px;
          margin: 0 auto;
        }
        
        .form-group {
          display: flex;
          gap: 16px;
          background: white;
          padding: 5px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .form-input {
          flex: 1;
          padding: 16px 20px;
          border: none;
          background: transparent;
          font-size: 16px;
          outline: none;
        }
        
        .form-input::placeholder {
          color: #9CA3AF;
        }
        
        .form-button {
          padding: 16px 32px;
          background: #1a1a1a;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        
        .form-button:hover {
          background: #333;
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 80px 0;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
            margin-bottom: 32px;
          }
          
          .form-group {
            flex-direction: column;
            gap: 12px;
          }
          
          .form-input {
            padding: 14px 16px;
          }
          
          .form-button {
            padding: 14px 24px;
          }
        }
      `
      }} />
    </section>
  )
}

export default Hero
