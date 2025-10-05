import React from 'react'

const NFTShowcase: React.FC = () => {
  const nfts = [
    { id: 1, image: "/image/nft1.png" },
    { id: 2, image: "/image/nft2.png" },
    { id: 3, image: "/image/nft3.png" },
    { id: 4, image: "/image/nft4.png" },
    { id: 5, image: "/image/nft5.png" },
    { id: 6, image: "/image/nft6.png" }
  ]

  return (
    <section className="nft-showcase">
      <div className="nft-container">
        <div className="nft-showcase-responsive">
          <div className="nft-stack">
            {nfts.map((nft, index) => (
              <div
                key={nft.id}
                className={`nft-item nft-${index + 1}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={nft.image} 
                  alt={`NFT ${nft.id}`}
                  className="nft-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
        .nft-showcase {
          padding: 100px 0;
          width: 100%;
          height: 900px;
        }
        
        .section-title {
          text-align: center;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 80px;
          color: #1a1a1a;
        }
        
        .nft-container{
          padding: 0 calc(25vw - 150px);
        }

        .nft-showcase-responsive {
        }
        
        .nft-stack {
          position: relative;
          width: calc(50vw + 300px);
          height: calc((50vw + 300px) / 0.6);
          margin: 0;
        }
          
        .nft-item {
          position: absolute;
          width: 300px;
          height: 340px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          border: 3px solid white;
          transition: all 0.4s ease;
          animation: float 2s ease-in-out infinite;
        }
        
        .nft-img {
          width: 100%; height: 100%; object-fit: cover;
        }
        
        /* Position each NFT in an overlapping circle layout, considering 300px width */
        .nft-1 { 
          top: 0%; 
          left: calc(0.5 * 50vw);
          transform: translateX(-50%);
          z-index: 3; 
        }
        .nft-2 { top: 15%; left: 5%; transform: translateX(-50%); z-index: 3; }
        .nft-3 { top: 15%; right: 5%; z-index: 3; }
        .nft-4 { top: 7%; left: 20%; z-index: 2; }
        .nft-5 { top: 7%; left: 50%; transform: translateX(-50%); z-index: 2; }
        .nft-6 { top: 20%; left: calc(0.5 * 50vw); z-index: 1; transform: rotate(3deg); }
        
        .nft-item:hover {
          transform: translateY(-10px) scale(1.05);
          z-index: 10;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        /* Mobile responsive */
        @media (max-width: 768px) {
          .nft-showcase {
            padding: 60px 0;
            height: auto;
          }
          
          .section-title {
            font-size: 2.2rem;
            margin-bottom: 60px;
          }
          
          .nft-container {
            padding: 0 0;
          }

          .nft-stack {
            position: static;
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 16px;
          }
          
          .nft-item {
            position: static;
            width: 180px;
            height: 200px;
            margin: 0;
            transform: none !important;
            z-index: 1;
            animation: float 2s ease-in-out infinite;
          }

          /* Remove custom transforms for mobile */
          .nft-1, .nft-2, .nft-3, .nft-4, .nft-5, .nft-6 {
            top: auto !important;
            left: auto !important;
            right: auto !important;
            transform: none !important;
            z-index: 1 !important;
          }
        }
        
        @media (max-width: 480px) {
          .nft-stack {
            width: 100%;
            gap: 10px;
          }
          
          .nft-item {
            width: 130px;
            height: 150px;
          }
        }
      `
      }} />
    </section>
  )
}

export default NFTShowcase