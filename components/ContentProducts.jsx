import React from 'react';

const ContentProducts = () => {
  return (
    <section className="section" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#000' }}>콘텐츠가 곧 제품</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1.5rem', maxWidth: '700px', margin: '1.5rem auto', wordBreak: 'keep-all', fontSize: '1.1rem', lineHeight: 1.6 }}>
            시청각 콘텐츠를 마케팅의 부속품으로 여기지 않습니다. 이는 mood up의 1세대 독립 제품입니다.
            낮은 비용, 빠른 확산으로 가장 직접적인 인식을 구축합니다.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            {
              title: "앰비언트 오디오스케이프",
              desc: "자연의 백색 소음과 저주파 신시사이저가 결합된 전용 배경음으로 외부의 소음을 차단해 줍니다.",
              status: "출시됨"
            },
            {
              title: "시각 치유 숏필름",
              desc: "극도로 느린 줌인과 매크로 시각으로 미세한 물질의 움직임을 기록하여 시각적 불안을 달래줍니다.",
              status: "제작 중"
            },
            {
              title: "브랜드 팟캐스트 대담",
              desc: "심리학 및 인류학 분야의 게스트를 초대하여 '인간의 동물성과 현대 생활의 스트레스'에 대해 깊이 있게 논의합니다.",
              status: "출시 예정"
            }
          ].map((item, idx) => (
            <div key={idx} className="card-solid" style={{ padding: '3rem 2.5rem', position: 'relative' }}>
              <div style={{ 
                display: 'inline-block',
                fontSize: '0.75rem', 
                fontWeight: 700,
                padding: '0.4rem 1rem', 
                background: item.status === '출시됨' ? '#000' : '#e5e5e5',
                color: item.status === '출시됨' ? '#fff' : '#555',
                marginBottom: '2rem'
              }}>
                {item.status}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 800, color: '#000', wordBreak: 'keep-all' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentProducts;
