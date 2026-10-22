import { useId } from 'react';

// Ícones de linha dos pets (cor herdada do texto).
export function PetIcon({ pet, size = 28 }) {
  const comum = {
    width: size,
    height: size,
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };
  const olho = (x, y) => <circle cx={x} cy={y} r="1.6" fill="currentColor" stroke="none" />;

  switch (pet) {
    case 'cachorro':
      return (
        <svg {...comum}>
          <circle cx="24" cy="26" r="12.5" />
          <ellipse cx="11.5" cy="25" rx="4.5" ry="9" transform="rotate(15 11.5 25)" />
          <ellipse cx="36.5" cy="25" rx="4.5" ry="9" transform="rotate(-15 36.5 25)" />
          <ellipse cx="24" cy="31" rx="6" ry="4.5" />
          <ellipse cx="24" cy="29" rx="2.2" ry="1.6" fill="currentColor" />
          {olho(19, 22.5)}
          {olho(29, 22.5)}
        </svg>
      );
    case 'gato':
      return (
        <svg {...comum}>
          <path d="M13 20 L14 8 L22 14" />
          <path d="M35 20 L34 8 L26 14" />
          <circle cx="24" cy="26" r="12.5" />
          <path d="M22.5 29 L25.5 29 L24 31 Z" fill="currentColor" />
          <path d="M8 29 L17 30.5 M8 34 L17 33 M40 29 L31 30.5 M40 34 L31 33" />
          {olho(19, 23.5)}
          {olho(29, 23.5)}
        </svg>
      );
    case 'miniporco':
      return (
        <svg {...comum}>
          <path d="M14 18 L12 7 L21 13" />
          <path d="M34 18 L36 7 L27 13" />
          <circle cx="24" cy="26" r="12.5" />
          <ellipse cx="24" cy="30.5" rx="6" ry="4.5" />
          <circle cx="22" cy="30.5" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="26" cy="30.5" r="1.1" fill="currentColor" stroke="none" />
          {olho(18.5, 22.5)}
          {olho(29.5, 22.5)}
        </svg>
      );
    case 'aves':
      return (
        <svg {...comum}>
          <circle cx="22" cy="27" r="12.5" />
          <path d="M34 24 L42 27.5 L34 31" />
          <path d="M18 14.5 C 17 9, 21 6.5, 23.5 10 M22.5 14.5 C 23 9.5, 27.5 8.5, 28.5 12.5" />
          <path d="M13 29 C 17 35, 23 35, 27 31" />
          {olho(28, 23)}
        </svg>
      );
    case 'cavalo':
      return (
        <svg {...comum}>
          <path d="M18 15 L16.5 5 L23 12.5" />
          <path d="M30 15 L31.5 5 L25 12.5" />
          <ellipse cx="24" cy="28" rx="9.5" ry="15" />
          <path d="M21 14 C 21 19, 27 19, 27 14" />
          <circle cx="20.5" cy="38" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="27.5" cy="38" r="1.3" fill="currentColor" stroke="none" />
          {olho(19.5, 24)}
          {olho(28.5, 24)}
        </svg>
      );
    default:
      return (
        <svg {...comum}>
          <ellipse cx="24" cy="31" rx="8" ry="6.5" />
          <circle cx="13.5" cy="21.5" r="3.5" />
          <circle cx="20" cy="14.5" r="3.5" />
          <circle cx="28" cy="14.5" r="3.5" />
          <circle cx="34.5" cy="21.5" r="3.5" />
        </svg>
      );
  }
}

// Balão de conversa genérico para os botões de WhatsApp.
export function IconeConversa({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5 L5.3 15.6 A8 8 0 1 1 8.6 18.6 Z" />
      <path d="M9 10.5 h6 M9 13.5 h4" />
    </svg>
  );
}

// Textura de ponto de tricô/crochê em listras, usada quando a peça ainda não tem foto.
export function Textura({ cores }) {
  const pid = 'v' + useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const listras = Array.from({ length: 7 });
  return (
    <svg className="textura" viewBox="0 0 240 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id={pid} width="12" height="14" patternUnits="userSpaceOnUse">
          <path d="M0.5 0 C 2 7, 4.5 11.5, 6 14 M11.5 0 C 10 7, 7.5 11.5, 6 14" stroke="rgba(0,0,0,.2)" strokeWidth="1.6" fill="none" />
          <path d="M2 0.5 C 3.2 6, 5 10, 6 12" stroke="rgba(255,255,255,.28)" strokeWidth="1.1" fill="none" />
        </pattern>
      </defs>
      {listras.map((_, i) => (
        <rect key={i} x="0" y={i * 28} width="240" height="28" fill={cores[i % cores.length]} />
      ))}
      <rect width="240" height="180" fill={`url(#${pid})`} />
    </svg>
  );
}
