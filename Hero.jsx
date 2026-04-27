import React from 'react';

const Hero = () => {
  return (
    <section style={{ 
      padding: '4rem 0 6rem',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'var(--bg-color)'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
           <img 
            src="/logo.png" 
            alt="Mood Up Logo" 
            style={{ height: '200px' }} 
          />
        </div>

        <div style={{ display: 'inline-block', marginBottom: '1.5rem', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          인간 행동 풍부화 프로젝트
        </div>
        
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem', wordBreak: 'keep-all', color: '#000' }}>
          도망칠 필요 없습니다.<br />
          지금 이 순간, 온전히 품어지세요.
        </h1>
        
        <p style={{ maxWidth: '650px', margin: '0 auto 3rem', fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, wordBreak: 'keep-all' }}>
          우리도 동물임을 인정하며, '잘 돌보아질' 필요가 있습니다.
          mood up은 상식을 뒤엎는 다정함으로 당신만의 물리적, 정신적 풍부화 공간을 구축합니다.
        </p>

        <button className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
          경험 시작하기
        </button>
      </div>
    </section>
  );
};

export default Hero;
