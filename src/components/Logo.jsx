// Logo: novelo de lã com agulhas, porquinho e cachorrinho mordendo o fio.
const TRACO = '#2A2320';

export default function Logo({ size = 56, className = '', titulo = 'Crochê de Pets' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      width={size}
      height={size}
      role="img"
      aria-label={titulo}
    >
      <circle cx="100" cy="100" r="97" fill="#FDF1E6" stroke={TRACO} strokeWidth="3" />
      <defs>
        <clipPath id="novelo-clip">
          <circle cx="100" cy="146" r="42" />
        </clipPath>
      </defs>

      <g stroke={TRACO} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Porquinho */}
        <path d="M36 50 L30 22 L56 40 Z" fill="#EE93AB" />
        <path d="M66 40 L90 22 L86 52 Z" fill="#EE93AB" />
        <circle cx="60" cy="68" r="30" fill="#F7B6C6" />
        <ellipse cx="61" cy="80" rx="13" ry="9" fill="#EE93AB" />
        <circle cx="49" cy="61" r="3" fill={TRACO} stroke="none" />
        <circle cx="71" cy="61" r="3" fill={TRACO} stroke="none" />
        <circle cx="56.5" cy="80" r="2.2" fill={TRACO} stroke="none" />
        <circle cx="65.5" cy="80" r="2.2" fill={TRACO} stroke="none" />

        {/* Cachorrinho */}
        <circle cx="140" cy="64" r="30" fill="#E5A86A" />
        <ellipse cx="114" cy="66" rx="10" ry="20" transform="rotate(18 114 66)" fill="#B9763C" />
        <ellipse cx="166" cy="66" rx="10" ry="20" transform="rotate(-18 166 66)" fill="#B9763C" />
        <ellipse cx="140" cy="79" rx="14" ry="10" fill="#F6D7B0" />
        <ellipse cx="140" cy="73" rx="5" ry="3.5" fill={TRACO} stroke="none" />
        <circle cx="130" cy="57" r="3" fill={TRACO} stroke="none" />
        <circle cx="150" cy="57" r="3" fill={TRACO} stroke="none" />

        {/* Fio saindo do novelo até a boca dos dois */}
        <path d="M82 108 C 72 104, 58 100, 61 90" fill="none" stroke={TRACO} strokeWidth="7" />
        <path d="M82 108 C 72 104, 58 100, 61 90" fill="none" stroke="#D2457A" strokeWidth="3.5" />
        <path d="M118 108 C 130 104, 142 100, 140 89" fill="none" stroke={TRACO} strokeWidth="7" />
        <path d="M118 108 C 130 104, 142 100, 140 89" fill="none" stroke="#D2457A" strokeWidth="3.5" />

        {/* Novelo */}
        <circle cx="100" cy="146" r="42" fill="#D2457A" />
        <g clipPath="url(#novelo-clip)" fill="none" stroke="#9E2C55" strokeWidth="3">
          <path d="M56 136 C 80 116, 120 116, 144 136" />
          <path d="M56 156 C 80 136, 122 136, 146 156" />
          <path d="M62 176 C 86 158, 118 158, 142 176" />
          <path d="M74 106 C 92 136, 94 166, 84 192" />
          <path d="M120 104 C 106 136, 110 168, 124 190" />
        </g>
        <circle cx="100" cy="146" r="42" fill="none" />

        {/* Agulhas cruzadas */}
        <path d="M66 178 L156 116" stroke={TRACO} strokeWidth="8" />
        <path d="M66 178 L156 116" stroke="#E9E4DA" strokeWidth="4" />
        <circle cx="160" cy="113" r="7" fill="#E3A92B" />
        <path d="M134 178 L44 116" stroke={TRACO} strokeWidth="8" />
        <path d="M134 178 L44 116" stroke="#E9E4DA" strokeWidth="4" />
        <circle cx="40" cy="113" r="7" fill="#E3A92B" />
      </g>
    </svg>
  );
}
