import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const Header = ({ onLogout }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Obtém o usuário logado
    const session = supabase.auth.session();
    setUser(session?.user || null);

    // Escuta mudanças na autenticação
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    if (onLogout) onLogout();
  };

  return (
    <header style={styles.header}>
      <h1>Minha Loja</h1>
      <div>
        {user ? (
          <>
            <span style={styles.userEmail}>{user.email}</span>
            <button onClick={handleLogout} style={styles.button}>Logout</button>
          </>
        ) : (
          <button onClick={() => window.location.href = '/login'} style={styles.button}>Login</button>
        )}
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: 'white'
  },
  button: {
    marginLeft: '10px',
    padding: '5px 10px',
    cursor: 'pointer'
  },
  userEmail: {
    marginRight: '10px'
  }
};

export default Header;
