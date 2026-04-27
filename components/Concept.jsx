import React from 'react';

const Concept = () => {
  return (
    <section className="section" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'flex-start' }}>
          
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 800, wordBreak: 'keep-all', color: '#000' }}>
              상식을 뒤엎는<br/>다정함
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '1.5rem', wordBreak: 'keep-all', lineHeight: 1.6 }}>
              시중의 스트레스 해소 브랜드는 대부분 '도피'를 팝니다. 여행을 가거나, 숲을 찾거나, 선(禅)의 경지를 찾으라고 하죠. 하지만 현실에서는 쉽게 벗어날 수 없는 경우가 많습니다.
            </p>
            <p style={{ color: '#000', fontSize: '1.2rem', fontWeight: 600, wordBreak: 'keep-all' }}>
              mood up의 접근법은 다릅니다. 당신을 현재에 머물게 하면서도, 그 현재 안에서 더 온전히 품어지도록 돕습니다.
            </p>
          </div>
          
          <div className="card-solid" style={{ padding: '3.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2.5rem', paddingBottom: '1rem', borderBottom: '2px solid #000', fontWeight: 700, color: '#000' }}>
              풍부화(Enrichment)란 무엇인가요?
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { title: '환경 통제', desc: '통제 불가능한 일상 속에서 작지만 확실한 질서를 세웁니다.' },
                { title: '감각 자극', desc: '촉각, 후각, 시각을 통해 무뎌진 감각을 일깨웁니다.' },
                { title: '행동 표현', desc: '지침과 연약함을 수용할 수 있는 안전한 배출구를 제공합니다.' }
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ color: '#000', fontWeight: 800, fontSize: '1.2rem' }}>0{idx + 1}</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#000', fontSize: '1.1rem' }}>{item.title}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '1rem', wordBreak: 'keep-all', lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Concept;
