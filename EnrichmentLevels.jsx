import React, { useState } from 'react';

const levels = [
  {
    id: 'minimal',
    title: '가벼운 개입',
    subtitle: '최소한의 저항',
    desc: '삶의 궤적을 바꿀 필요 없이, 책상 위에 특별한 촉감의 머그컵이나 은은한 빛을 발하는 무드등을 더하는 것만으로 충분합니다. 가장 낮은 진입 장벽으로 \'품어지는\' 경험을 시작해 보세요.',
    examples: '머그컵 / 데스크 무드등 / 인센스',
    image: '/life-corner.png'
  },
  {
    id: 'medium',
    title: '중간 개입',
    subtitle: '공간 분위기',
    desc: '나만의 전용 공간을 마련할 준비가 되었을 때. 책상이나 방 한구석을 포근하게 감싸는 \'둥지\'로 탈바꿈시킬 수 있는 종합적인 공간 스타일링 솔루션을 제공합니다.',
    examples: '데스크 코너 스타일링 솔루션 / 모듈형 러그',
    image: '/main-space.png'
  },
  {
    id: 'deep',
    title: '몰입형 경험',
    subtitle: '오프라인 공간',
    desc: '원래의 환경에서 벗어난 완전한 휴식. 우리가 만든 오프라인 명상 및 풍부화 공간에 들어와 소리, 빛, 향기로 온몸을 감싸며 깊은 자아 회복을 경험하세요.',
    examples: '오프라인 명상 공간 / 몰입형 감정 전시',
    image: '/showroom.png' 
  }
];

const EnrichmentLevels = () => {
  const [activeLevel, setActiveLevel] = useState(levels[0].id);
  const activeData = levels.find(l => l.id === activeLevel);

  return (
    <section className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#000' }}>풍부화 단계</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '1.1rem' }}>현재 상태에 맞춰 몰입의 깊이를 선택하세요.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid var(--border-color)', width: '100%', justifyContent: 'center' }}>
            {levels.map(level => (
              <button
                key={level.id}
                onClick={() => setActiveLevel(level.id)}
                style={{
                  padding: '1rem 2rem',
                  border: 'none',
                  background: 'transparent',
                  color: activeLevel === level.id ? '#000' : 'var(--text-secondary)',
                  borderBottom: activeLevel === level.id ? '3px solid #000' : '3px solid transparent',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  transition: 'all 0.2s ease',
                }}
              >
                {level.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{ width: '100%', maxWidth: '1000px', display: 'grid', gridTemplateColumns: activeData.image ? '1fr 1fr' : '1fr', gap: '4rem', alignItems: 'center', marginTop: '2rem' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{activeData.subtitle}</div>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 800, color: '#000' }}>{activeData.title}</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2.5rem', wordBreak: 'keep-all' }}>
                {activeData.desc}
              </p>
              <div style={{ fontSize: '0.95rem', color: '#000', fontWeight: 600, padding: '1.5rem 0', borderTop: '1px solid var(--border-color)' }}>
                포함: <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>{activeData.examples}</span>
              </div>
            </div>
            
            {activeData.image && (
              <div style={{ width: '100%', aspectRatio: '16/9', background: '#f5f5f5' }}>
                <img 
                  src={activeData.image} 
                  alt={activeData.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrichmentLevels;
