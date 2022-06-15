import styles from '../styles/components/Display.module.css';

import { useEffect, useRef } from 'react';

let canvas, ctx;

export default function Display() {
  const canvasRef = useRef();

  useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext('2d');
  }, []);

  return (
    <div className={styles.container}>
      <canvas
        ref={canvasRef}
        width="200px"
        height="200px"
      />
    </div>
  );
}
