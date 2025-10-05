import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQ: React.FC = () => {
  // Allow multiple open answers at once
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const faqs = [
    {
      question: "What is Flur3?",
      answer: "Flur3 is an AI-powered NFT money market that allows you to borrow, lend, and earn with your NFTs. Our platform uses advanced AI to optimize liquidity and provide the best rates for your digital assets."
    },
    {
      question: "How do I earn?",
      answer: "You can earn in multiple ways: by lending your ETH to provide liquidity for NFT-backed loans, by staking Poucher NFTs to earn points and climb the leaderboard, and by participating in our gamified yield farming system."
    },
    {
      question: "What are Poucher NFTs?",
      answer: "Poucher NFTs are special utility NFTs that unlock enhanced features on our platform. By staking these NFTs, you can earn additional rewards, access higher APY rates, and participate in exclusive governance features."
    },
    {
      question: "How do I learn more about Poucher NFTs?",
      answer: "You can learn more about Poucher NFTs by joining our Discord community, following our Twitter updates, or reading our comprehensive documentation. Our team regularly hosts AMAs and educational sessions about the platform."
    }
  ]

  // Toggle logic for multiple open answers
  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">FAQ</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndexes.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                {openIndexes.includes(index) ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>
              {openIndexes.includes(index) && (
                <div className="faq-answer" id={`faq-answer-${index}`}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
        .faq {
          padding: 180px 0;
        }
        
        .section-title {
          text-align: center;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 64px;
          color: #1a1a1a;
        }
        
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .faq-item {
          background: white;
          border-radius: 12px;
          margin-bottom: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .faq-question {
          width: 100%;
          padding: 34px 32px;
          background: none;
          border: none;
          text-align: left;
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a1a;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background-color 0.3s ease;
        }
        
        .faq-question:hover {
          background: #F9FAFB;
        }
        
        .faq-answer {
          padding: 0 32px 24px;
          color: #6B7280;
          line-height: 1.6;
          animation: slideDown 0.3s ease;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .faq {
            padding: 120px 0;
          }
          
          .section-title {
            font-size: 2rem;
            margin-bottom: 48px;
          }
          
          .faq-question {
            padding: 20px 24px;
            font-size: 1rem;
          }
          
          .faq-answer {
            padding: 0 24px 20px;
          }
        }
      `
      }} />
    </section>
  )
}

export default FAQ
