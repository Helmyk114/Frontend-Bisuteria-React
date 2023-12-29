import React from 'react';
import addIcon from '../../img/boton-agregar.png';

const FloatingActionButton = () => {
  const styles = {
    fabContainer: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#6977E4',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    icon: {
      width: '24px',
      height: '24px',
    },
  };

  return (
    <div style={styles.fabContainer}>
      <img src={addIcon} alt="Add Icon" style={styles.icon} />
    </div>
  );
};

export default FloatingActionButton;
