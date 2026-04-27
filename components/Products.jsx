import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "무드업 시그니처 플러시 - 슬립 (Sleep)",
      price: "₩ 45,000",
      image: "/plush-1.png"
    },
    {
      id: 2,
      name: "무드업 시그니처 플러시 - 캄 (Calm)",
      price: "₩ 65,000",
      image: "/plush-2.png"
    },
    {
      id: 3,
      name: "무드업 미니 플러시 - 레스트 (Rest)",
      price: "₩ 65,000",
      image: "/plush-3.png"
    },
    {
      id: 4,
      name: "무드업 앰비언트 램프 (Ambient Lamp)",
      price: "₩ 85,000",
      image: "/lamp-1.png"
    },
    {
      id: 5,
      name: "무드업 데스크 무드등 (Desk Lamp)",
      price: "₩ 85,000",
      image: "/lamp-2.png"
    },
    {
      id: 6,
      name: "무드업 세라믹 플레이트 (Ceramic Plate)",
      price: "₩ 35,000",
      image: "/tableware-1.png"
    },
    {
      id: 7,
      name: "무드업 세라믹 머그 (Ceramic Mug)",
      price: "₩ 25,000",
      image: "/tableware-2.png"
    },
    {
      id: 8,
      name: "무드업 세라믹 보울 (Ceramic Bowl)",
      price: "₩ 32,000",
      image: "/tableware-3.png"
    }
  ];

  return (
    <section className="section" style={{ background: '#ffffff', paddingBottom: '8rem' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#000' }}>오리지널 굿즈</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '1.1rem' }}>
              당신의 공간에 다정함을 더해줄 물리적 풍부화 아이템
            </p>
          </div>
          <button className="btn-outline" style={{ display: 'none' /* hidden for desktop to match minimal look, can be used for mobile 'View All' */ }}>
            모두 보기
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {products.map((product) => (
            <div key={product.id} style={{ cursor: 'pointer', group: 'true' }}>
              {/* Image Container */}
              <div style={{ 
                width: '100%', 
                aspectRatio: '16/9', 
                background: '#f5f5f5', 
                marginBottom: '1.5rem',
                overflow: 'hidden',
                borderRadius: '4px'
              }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }} 
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              
              {/* Product Info */}
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#000', marginBottom: '0.5rem' }}>
                {product.name}
              </h3>
              <div style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 500 }}>
                {product.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
