import {
  siDocker, siFigma, siGithub, siGoogleanalytics, siGoogletagmanager, siLaravel, siMeta, siMongodb, siNestjs,
  siNextdotjs, siNodedotjs, siPostgresql, siPython, siReact, siRedis, siSupabase, siTailwindcss, siTypescript,
  siWhatsapp, siWoocommerce, siWordpress, siPrisma, siDrizzle, siVitest, siOpenapiinitiative, siGithubactions, siN8n,
} from "simple-icons";

type SimpleIcon = { path: string; hex: string; title: string };

const brands: Record<string, SimpleIcon> = {
  "Next.js": siNextdotjs,
  NestJS: siNestjs,
  React: siReact,
  TypeScript: siTypescript,
  Python: siPython,
  Docker: siDocker,
  PostgreSQL: siPostgresql,
  Supabase: siSupabase,
  Redis: siRedis,
  Laravel: siLaravel,
  "Node.js": siNodedotjs,
  MongoDB: siMongodb,
  "Tailwind CSS": siTailwindcss,
  Figma: siFigma,
  WordPress: siWordpress,
  WooCommerce: siWoocommerce,
  GA4: siGoogleanalytics,
  GTM: siGoogletagmanager,
  "Meta Pixel e CAPI": siMeta,
  GitHub: siGithub,
  WhatsApp: siWhatsapp,
  Prisma: siPrisma,
  Drizzle: siDrizzle,
  Vitest: siVitest,
  OpenAPI: siOpenapiinitiative,
  "GitHub Actions": siGithubactions,
  n8n: siN8n,
};

function AwsMark({ dark }: { dark?: boolean }) {
  return (
    <svg viewBox="0 0 48 30" aria-hidden="true">
      <text x="24" y="17" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="17" fill={dark ? "#fff" : "#232F3E"}>aws</text>
      <path d="M8 21.5c9 5 23 5 31-.5" fill="none" stroke="#FF9900" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M36 19.5l4 1.3-1.6 3.8" fill="none" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LinkedinMark() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label="LinkedIn">
      <rect width="24" height="24" rx="4" fill="currentColor" />
      <path d="M7 9.5h2.6V18H7zM8.3 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM11.2 9.5h2.5v1.2c.4-.7 1.3-1.4 2.6-1.4 2.7 0 3.2 1.8 3.2 4.1V18h-2.6v-4.1c0-1 0-2.2-1.4-2.2s-1.6 1.1-1.6 2.1V18h-2.7z" fill="#fff" />
    </svg>
  );
}

/** Brand logo in its official color; `dark` lightens near-black marks for dark backgrounds. */
export function BrandIcon({ name, dark = false }: { name: string; dark?: boolean }) {
  if (name === "AWS") return <AwsMark dark={dark} />;
  const icon = brands[name];
  if (!icon) return null;
  const isBlack = icon.hex === "000000" || icon.hex === "181717";
  const fill = dark && isBlack ? "#ffffff" : `#${icon.hex}`;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={icon.path} fill={fill} />
    </svg>
  );
}
