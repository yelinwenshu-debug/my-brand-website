import React, { useState, useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, googleProvider } from './firebase';
import { saveUserToFirestore } from './services/userService';

import Hero from './components/Hero';
import Concept from './components/Concept';
import EnrichmentLevels from './components/EnrichmentLevels';
import ContentProducts from './components/ContentProducts';
import Products from './components/Products';

function App() {
  const [user, setUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        saveUserToFirestore(currentUser);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <>
      {/* 极简白底导航 */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '1.2rem 2rem',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        backdropFilter: scrolled ? 'blur(8px)' : 'none'
      }}>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
          <span style={{ cursor: 'pointer', borderBottom: '2px solid transparent' }}>철학</span>
          <span style={{ cursor: 'pointer', borderBottom: '2px solid transparent' }}>풍부화 경험</span>
          <span style={{ cursor: 'pointer', borderBottom: '2px solid transparent' }}>콘텐츠</span>
        </div>
        
        {/* Auth Section */}
        <div>
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>환영합니다, {user.displayName}</span>
              <img 
                src={user.photoURL} 
                alt="Profile" 
                style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} 
              />
              <button onClick={handleLogout} className="btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>
                로그아웃
              </button>
            </div>
          ) : (
            <button onClick={handleGoogleLogin} className="btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '0.3rem' }}>
                <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.79 15.72 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#fff"/>
                <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.72 17.57C14.74 18.23 13.48 18.63 12 18.63C9.14 18.63 6.71 16.7 5.84 14.09H2.18V16.93C3.99 20.53 7.7 23 12 23Z" fill="#fff"/>
                <path d="M5.84 14.09C5.62 13.43 5.49 12.73 5.49 12C5.49 11.27 5.62 10.57 5.84 9.91V7.07H2.18C1.43 8.55 1 10.22 1 12C1 13.78 1.43 15.45 2.18 16.93L5.84 14.09Z" fill="#fff"/>
                <path d="M12 5.38C13.62 5.38 15.06 5.93 16.2 7.02L19.35 3.87C17.46 2.11 14.97 1 12 1C7.7 1 3.99 3.47 2.18 7.07L5.84 9.91C6.71 7.3 9.14 5.38 12 5.38Z" fill="#fff"/>
              </svg>
              구글 로그인
            </button>
          )}
        </div>
      </nav>

      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <Concept />
        <EnrichmentLevels />
        <ContentProducts />
        <Products />
      </main>

      <footer style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        background: '#f9f9f9',
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        borderTop: '1px solid var(--border-color)'
      }}>
        <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '1rem', color: '#000' }}>mood up</div>
        <p>© {new Date().getFullYear()} mood up. 현재에 머물며, 더 온전히 품어지다.</p>
      </footer>
    </>
  );
}

export default App;
