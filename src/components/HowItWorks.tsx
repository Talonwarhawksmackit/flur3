import React from 'react'

const HowItWorks: React.FC = () => {
  const features = [
    {
      icon: <img src="/image/borrow.png" alt="Borrow" style={{ width: 60, height: 60 }} />,
      title: "Borrow",
      description: "Unlock AI-optimized liquidity without selling your NFTs. Use your digital assets as collateral to instantly and securely borrow $ETH."
    },
    {
      icon: <img src="/image/lend.png" alt="Lend" style={{ width: 60, height: 60 }} />,
      title: "Lend",
      description: "Be the bank with AI-enhanced risk models. Provide liquidity for loans and earn sustainable real yield in $ETH on your own terms."
    },
    {
      icon: <img src="/image/earn.png" alt="Earn" style={{ width: 60, height: 60 }} />,
      title: "Earn",
      description: "Maximize your rewards through AI-driven gamification. Stake a Poucher NFT, earn points and climb leaderboard to unlock future incentives."
    }
  ]

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
        .how-it-works {
          padding: 100px 0;
        }
        
        .section-title {
          text-align: center;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 64px;
          color: #1a1a1a;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        
        .feature-card {
          background: white;
          padding: 90px 32px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }
        
        .feature-icon {
          width: 80px;
          height: 80px;
          // background: linear-gradient(135deg, #8B5CF6, #A855F7);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: white;
        }
        
        .feature-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 16px;
          color: #1a1a1a;
        }
        
        .feature-description {
          color: #6B7280;
          line-height: 1.6;
          font-size: 1rem;
        }
        
        @media (max-width: 768px) {
          .how-it-works {
            padding: 80px 0;
          }
          
          .section-title {
            font-size: 2rem;
            margin-bottom: 48px;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          
          .feature-card {
            padding: 32px 24px;
          }
          
          .feature-icon {
            width: 64px;
            height: 64px;
            margin-bottom: 20px;
          }
          
          .feature-title {
            font-size: 1.25rem;
          }
        }
      `
      }} />
    </section>
  )
}

export default HowItWorks
