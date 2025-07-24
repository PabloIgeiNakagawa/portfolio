import { useEffect, useState } from 'react';

// Tipos de datos para los nodos
interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export default function TechBackground() {
  const [time, setTime] = useState<number>(0);
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    // Crear nodos para la red
    const createNodes = () => {
      const newNodes: Node[] = [];
      for (let i = 0; i < 30; i++) {
        newNodes.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          size: Math.random() * 4 + 2,
        });
      }
      setNodes(newNodes);
    };

    createNodes();

    // Animar tiempo para efectos
    const timeInterval = setInterval(() => {
      setTime(prev => prev + 0.02);
    }, 16);

    // Animar nodos
    const animateNodes = () => {
      setNodes(prev =>
        prev.map(node => ({
          ...node,
          x: node.x + node.vx,
          y: node.y + node.vy,
          vx: node.x > window.innerWidth || node.x < 0 ? -node.vx : node.vx,
          vy: node.y > window.innerHeight || node.y < 0 ? -node.vy : node.vy,
        }))
      );
    };

    const nodeInterval = setInterval(animateNodes, 50);

    window.addEventListener('resize', createNodes);

    return () => {
      clearInterval(timeInterval);
      clearInterval(nodeInterval);
      window.removeEventListener('resize', createNodes);
    };
  }, []);

  // Función para calcular distancia entre nodos
  const getDistance = (node1: Node, node2: Node): number => {
    return Math.sqrt(Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2));
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Fondo base con patrón de grid */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
      </div>

      {/* Ondas sinusoidales animadas */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="25%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="75%" stopColor="#f472b6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Múltiples ondas con diferentes frecuencias */}
          {[...Array(5)].map((_, i) => (
            <path
              key={i}
              d={`M0,${500 + i * 50} ${[...Array(50)].map((_, j) =>
                `L${j * 20},${500 + i * 50 + Math.sin(time * 2 + i * 0.5 + j * 0.1) * 20}`
              ).join(' ')}`}
              stroke="url(#waveGradient)"
              strokeWidth="2"
              fill="none"
              opacity={0.7 - i * 0.1}
              filter="url(#glow)"
            />
          ))}
        </svg>
      </div>

      {/* Red de nodos conectados */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}>
          <defs>
            <filter id="nodeGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Conexiones entre nodos */}
          {nodes.map((node, i) =>
            nodes.slice(i + 1).map((otherNode, j) => {
              const distance = getDistance(node, otherNode);
              if (distance < 150) {
                const opacity = 1 - (distance / 150);
                return (
                  <line
                    key={`${i}-${j}`}
                    x1={node.x}
                    y1={node.y}
                    x2={otherNode.x}
                    y2={otherNode.y}
                    stroke="url(#waveGradient)"
                    strokeWidth="1"
                    opacity={opacity * 0.3}
                  />
                );
              }
              return null;
            })
          )}

          {/* Nodos */}
          {nodes.map((node, i) => (
            <circle
              key={i}
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill="url(#waveGradient)"
              filter="url(#nodeGlow)"
              opacity="0.8"
            />
          ))}
        </svg>
      </div>

      {/* Hexágonos flotantes */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 3}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40">
              <polygon
                points="20,2 35,12 35,28 20,38 5,28 5,12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-blue-500 dark:text-blue-400"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Líneas de código simuladas */}
      <div className="absolute top-10 left-10 opacity-10 font-mono text-xs text-gray-600 dark:text-gray-400">
        <div className="space-y-1">
          <div className="animate-pulse">const portfolio = new Developer();</div>
          <div className="animate-pulse" style={{ animationDelay: '0.5s' }}>portfolio.learn(['React', '.NET']);</div>
          <div className="animate-pulse" style={{ animationDelay: '1s' }}>portfolio.build(awesome_projects);</div>
        </div>
      </div>

      {/* Gradiente overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-transparent dark:from-transparent dark:via-gray-900/80 dark:to-transparent" />

      {/* Animaciones CSS personalizadas */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-10px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
}