import React, { useState } from 'react'
import { Send } from 'lucide-react'

const featureColors = [
  {
    bg: 'linear-gradient(135deg, #fef6f6 0%, #ffeaea 100%)',
    border: '#EF4444',
    title: '#EF4444',
    desc: '#991B1B'
  },
  {
    bg: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
    border: '#8B5CF6',
    title: '#8B5CF6',
    desc: '#4C1D95'
  },
  {
    bg: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
    border: '#3B82F6',
    title: '#3B82F6',
    desc: '#1E3A8A'
  }
]

const featuresBg = "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)"

const UniqueFeatures: React.FC = () => {
  const [intent, setIntent] = useState('')
  const [aiSuggestion, setAiSuggestion] = useState('e.g Borrow 500 $MEGA against POUCH #1234 for 14 days at 6% APR')

  const handleIntentSubmit = () => {
    console.log('Intent submitted:', intent)
    // Add AI processing logic here
  }

  const features = [
    {
      title: "Intent-Centric Liquidity",
      description: "Borrow, lend, and earn with a single click. AI routes your intent to the best available outcome."
    },
    {
      title: "AI Risk Engine",
      description: "Protect your assets with smart collateral ratios that adapt to market conditions in real time."
    },
    {
      title: "Gamified Yield",
      description: "Stake Pouchers NFTs, rack up points, and unlock higher rewards through AI-driven incentives."
    }
  ]

  return (
    <section id="features" className="unique-features">
      <div className="container">
        <h2 className="section-title">Unique Features</h2>
        
        <div className="features-content equal-height-bg">
          <div
            className="intent-section"
            style={{
              background: featuresBg,
              borderRadius: "20px",
              boxShadow: "0 2px 12px 0 #0000000a",
              padding: "40px 32px",
              marginBottom: "32px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <h3 className="intent-title">Declare your intent</h3>
              <p className="intent-subtitle">Flur3 AI will optimize the best route for your action</p>
              
              <div className="action-buttons">
                <button className="action-btn borrow">Borrow</button>
                <button className="action-btn lend">Lend</button>
                <button className="action-btn stake">Stake</button>
              </div>
              
              <div className="ai-suggestion">
                <label className="ai-label" htmlFor="ai-suggestion-input">AI Suggestion</label>
                <textarea
                  id="ai-suggestion-input"
                  className="ai-text"
                  value={aiSuggestion}
                  onChange={e => setAiSuggestion(e.target.value)}
                  rows={3}
                  style={{
                    width: "100%",
                    resize: "vertical",
                    border: "1.5px solid #A855F7", // Added border color for distinction
                    background: "#F3F4F6",
                    borderRadius: "8px",
                    color: "#6B7280",
                    fontStyle: "italic",
                    padding: "16px",
                    fontFamily: "inherit",
                    fontSize: "1rem"
                  }}
                />
              </div>
            </div>
            <div className="intent-form">
              <input
                type="text"
                className="intent-input"
                placeholder="I want to borrow 500 USDC using 10 ETH as collateral."
                value={intent}
                onChange={(e) => setIntent(e.target.value)}
              />
              <button className="send-btn" onClick={handleIntentSubmit}>
                <Send size={20} />
              </button>
            </div>
          </div>
          
          <div
            className="features-list"
            style={{
              background: featuresBg,
              borderRadius: "20px",
              boxShadow: "0 2px 12px 0 #0000000a",
              padding: "40px 32px",
              marginBottom: "32px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            {features.map((feature, index) => {
              const color = featureColors[index % featureColors.length]
              return (
                <div
                  key={index}
                  className="feature-item"
                  style={{
                    background: "transparent",
                    border: `2px solid ${color.border}`,
                    boxShadow: `0 4px 16px 0 ${color.border}22`,
                    marginBottom: index !== features.length - 1 ? "24px" : "0"
                  }}
                >
                  <h4
                    className="feature-item-title"
                    style={{ color: color.title }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className="feature-item-description"
                    style={{ color: color.desc }}
                  >
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
        .unique-features {
          padding: 100px 0;
          background: var(--bg);
        }
        
        .section-title {
          text-align: center;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 64px;
          color: var(--text);
        }
        
        .features-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: stretch;
        }

        .equal-height-bg > .intent-section,
        .equal-height-bg > .features-list {
          min-height: 480px;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }
        
        .intent-section {
          /* background: var(--card); */
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        
        .intent-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text);
        }
        
        .intent-subtitle {
          color: var(--text-muted);
          margin-bottom: 32px;
        }
        
        .action-buttons {
          display: flex;
          gap: 16px;
          margin-bottom: 32px;
        }
        
        .action-btn {
          flex: 1;
          padding: 16px 24px;
          height: 64px;
          min-height: 100px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1.15rem;
          position: relative;
          /* Add lots of cross points (10 horizontal, 10 vertical, evenly spaced) */
          background-image:
            /* 10 horizontal lines (white) */
            linear-gradient(to right, #fff 49%, #000 50%, #fff 51%),
            linear-gradient(to right, #fff 49%, #000 50%, #fff 51%),
            linear-gradient(to right, #fff 49%, #000 50%, #fff 51%),
            linear-gradient(to right, #fff 49%, #000 50%, #fff 51%),
            linear-gradient(to right, #fff 49%, #000 50%, #fff 51%),
            linear-gradient(to right, #fff 49%, #000 50%, #fff 51%),
            linear-gradient(to right, #fff 49%, #000 50%, #fff 51%),
            linear-gradient(to right, #fff 49%, #000 50%, #fff 51%),
            linear-gradient(to right, #fff 49%, #000 50%, #fff 51%),
            linear-gradient(to right, #fff 49%, #000 50%, #fff 51%),
            /* 10 vertical lines (white) */
            linear-gradient(to bottom, #fff 49%, #000 50%, #fff 51%),
            linear-gradient(to bottom, #fff 49%, #000 50%, #fff 51%),
            linear-gradient(to bottom, #fff 49%, #000 50%, #fff 51%),
            linear-gradient(to bottom, #fff 49%, #000 50%, #fff 51%),
            linear-gradient(to bottom, #fff 49%, #000 50%, #fff 51%),
            linear-gradient(to bottom, #fff 49%, #000 50%, #fff 51%),
            linear-gradient(to bottom, #fff 49%, #000 50%, #fff 51%),
            linear-gradient(to bottom, #fff 49%, #000 50%, #fff 51%),
            linear-gradient(to bottom, #fff 49%, #000 50%, #fff 51%),
            linear-gradient(to bottom, #fff 49%, #000 50%, #fff 51%);
          background-size:
            100% 2px, 100% 2px, 100% 2px, 100% 2px, 100% 2px,
            100% 2px, 100% 2px, 100% 2px, 100% 2px, 100% 2px,
            2px 100%, 2px 100%, 2px 100%, 2px 100%, 2px 100%,
            2px 100%, 2px 100%, 2px 100%, 2px 100%, 2px 100%;
          background-position:
            0% 10%, 0% 20%, 0% 30%, 0% 40%, 0% 50%,
            0% 60%, 0% 70%, 0% 80%, 0% 90%, 0% 100%,
            10% 0%, 20% 0%, 30% 0%, 40% 0%, 50% 0%,
            60% 0%, 70% 0%, 80% 0%, 90% 0%, 100% 0%;
          background-repeat: no-repeat;
        }
        
        .action-btn.borrow {
          background: #EF4444;
          color: white;
        }
        
        .action-btn.lend {
          background: #8B5CF6;
          color: white;
        }
        
        .action-btn.stake {
          background: #3B82F6;
          color: white;
        }
        
        .action-btn:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }
        
        .ai-suggestion {
          margin-bottom: 24px;
        }
        
        .ai-label {
          display: block;
          font-weight: 600;
          margin-bottom: 8px;
          color: #1a1a1a;
        }
        
        .ai-text {
          background: #F3F4F6;
          padding: 16px;
          border-radius: 8px;
          color: #6B7280;
          font-style: italic;
        }
        
        .intent-form {
          display: flex;
          gap: 12px;
        }
        
        .intent-input {
          flex: 1;
          padding: 16px;
          border: 2px solid #E5E7EB;
          border-radius: 8px;
          font-size: 16px;
          outline: none;
          transition: border-color 0.3s ease;
        }
        
        .intent-input:focus {
          border-color: #8B5CF6;
        }
        
        .send-btn {
          padding: 16px;
          background: #1a1a1a;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .send-btn:hover {
          background: #333;
          transform: translateY(-2px);
        }
        
        .features-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          background: none;
          box-shadow: none;
          border: none;
          padding: 0;
          height: 100%;
          justify-content: space-between;
        }
        
        .feature-item {
          /* background, border, and box-shadow are set inline for color distinction */
          padding: 18px;
          border-radius: 12px;
          transition: box-shadow 0.2s;
          background: transparent;
        }
        .feature-item:hover {
          box-shadow: 0 8px 32px 0 #00000022;
        }
        
        .feature-item-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 12px;
        }
        
        .feature-item-description {
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .unique-features {
            padding: 80px 0;
          }
          
          .section-title {
            font-size: 2.5rem;
            margin-bottom: 48px;
          }
          
          .features-content {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          
          .equal-height-bg > .intent-section,
          .equal-height-bg > .features-list {
            min-height: unset;
            height: auto;
          }

          .intent-section {
            padding: 32px 24px;
            min-height: unset;
            height: auto;
          }
          
          .action-buttons {
            flex-direction: column;
            gap: 12px;
          }
          
          .intent-form {
            flex-direction: column;
          }
          
          .feature-item {
            padding: 24px;
          }
        }
      `
      }} />
    </section>
  )
}

export default UniqueFeatures
