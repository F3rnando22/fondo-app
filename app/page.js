'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  const [key, setKey] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('fondo_token');
    if (saved === 'FND-DEMO-2026') {
      setUnlocked(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (key.trim().toUpperCase() === 'FND-DEMO-2026') {
      localStorage.setItem('fondo_token', 'FND-DEMO-2026');
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('fondo_token');
    setUnlocked(false);
  };

  if (!unlocked) {
    return (
      <div style={styles.lockContainer}>
        <h1 style={styles.brandTitle}>F O N D O</h1>
        <p style={styles.brandSubtitle}>Atención ampliada contra la inmediatez</p>

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="password"
            placeholder="[ Ingrese Clave de Cofrade ]"
            value={key}
            onChange={(e) => { setKey(e.target.value); setError(false); }}
            style={styles.input}
          />
        </form>

        {error && <p style={styles.errorText}>Clave no válida o revocada.</p>}

        <footer style={styles.lockFooter}>
          <span>🔒 Espacio reservado</span>
        </footer>
      </div>
    );
  }

  return (
    <div style={styles.readerContainer}>
      <header style={styles.header}>
        <span style={styles.headerLogo}>F O N D O</span>
        <button onClick={handleLogout} style={styles.logoutBtn}>Cerrar Sesión</button>
      </header>

      <main style={styles.article}>
        <span style={styles.issueTag}>ENTREGA PROTOTIPO N° 01</span>
        <h1 style={styles.title}>El Desgaste de la Atención</h1>
        <p style={styles.lead}>
          Un ensayo breve sobre la resistencia cognitiva frente al consumo de estímulos fragmentados.
        </p>

        <hr style={styles.divider} />

        <div style={styles.bodyText}>
          <p>
            <span style={styles.dropCap}>L</span>a velocidad con la que consumimos información ha transformado silenciosamente nuestra estructura de pensamiento. Lo que antes exigía un ritmo pausado de lectura y asimilación ha sido reemplazado por ráfagas constantes de estímulos diseñados para capturar la atención de manera superficial y efímera.
          </p>
          <p>
            FONDO nace como un dispositivo de entrenamiento mental y resguardo para la lectura profunda. Este espacio no compite por la primicia ni responde a las urgencias de la coyuntura. Cada entrega es un ejercicio de contemplación, investigación y silencio en medio del ruido digital.
          </p>
        </div>
      </main>
    </div>
  );
}

const styles = {
  lockContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A18',
    color: '#E0DCD3',
    fontFamily: 'Georgia, serif',
    padding: '20px',
    boxSizing: 'border-box',
  },
  brandTitle: { letterSpacing: '8px', fontSize: '2.5rem', marginBottom: '8px', fontWeight: '400' },
  brandSubtitle: { opacity: 0.7, fontSize: '0.9rem', marginBottom: '40px', fontStyle: 'italic' },
  form: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  input: {
    backgroundColor: 'transparent',
    border: '1px solid #4A5568',
    color: '#E0DCD3',
    padding: '12px 20px',
    textAlign: 'center',
    letterSpacing: '2px',
    borderRadius: '4px',
    outline: 'none',
    width: '280px',
    fontSize: '0.95rem',
    fontFamily: 'monospace',
  },
  errorText: { color: '#e53e3e', fontSize: '0.85rem', marginTop: '15px' },
  lockFooter: { position: 'absolute', bottom: '30px', opacity: 0.4, fontSize: '0.8rem' },

  readerContainer: {
    minHeight: '100vh',
    backgroundColor: '#F4F1EA',
    color: '#222220',
    fontFamily: 'Georgia, serif',
    padding: '40px 20px',
    boxSizing: 'border-box',
  },
  header: {
    maxWdith: '680px',
    margin: '0 auto 40px auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #D3CFC6',
    paddingBottom: '15px',
  },
  headerLogo: { fontWeight: 'bold', letterSpacing: '4px', fontSize: '1.1rem' },
  logoutBtn: { backgroundColor: 'transparent', border: 'none', color: '#666', cursor: 'pointer', fontSize: '0.8rem' },
  article: { maxWidth: '680px', margin: '0 auto' },
  issueTag: { fontSize: '0.75rem', letterSpacing: '2px', color: '#003366', fontWeight: 'bold', display: 'block', marginBottom: '10px' },
  title: { fontSize: '2.4rem', lineHeight: '1.2', marginBottom: '15px', fontWeight: 'normal' },
  lead: { fontSize: '1.2rem', lineHeight: '1.5', color: '#4A5568', fontStyle: 'italic', marginBottom: '25px' },
  divider: { border: 'none', borderTop: '1px solid #D3CFC6', margin: '25px 0' },
  bodyText: { fontSize: '1.1rem', lineHeight: '1.8' },
  dropCap: { float: 'left', fontSize: '3.5rem', lineHeight: '0.8', paddingRight: '10px', color: '#003366', fontWeight: 'bold' },
};
