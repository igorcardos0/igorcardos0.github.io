// Source of app/opengraph-image.png. GitHub Pages serves extensionless files as
// application/octet-stream, which link previews reject, so the PNG is committed instead.
// To regenerate: move this file to app/, run `npm run build`, copy out/opengraph-image
// to app/opengraph-image.png, then move it back here.
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Igor de Souza Cardoso — Engenheiro de Software Full Stack. Engenharia de software com IA no núcleo.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const asset = (file: string) => readFile(join(process.cwd(), "assets/og", file));

const stats = [
  ["7 anos", "programando"],
  ["+40", "projetos entregues"],
];

const stack = ["NestJS", "Next.js", "TypeScript", "Python", "PostgreSQL", "AWS"];

export default async function OpenGraphImage() {
  const [display, regular, semibold, photo] = await Promise.all([
    asset("InterTight-ExtraBold.ttf"),
    asset("Inter-Regular.ttf"),
    asset("Inter-SemiBold.ttf"),
    asset("igor.jpg"),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#07060c", color: "#ffffff", fontFamily: "Inter" }}>
        {/* photo on the right, fading into the dark background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photoSrc} width={520} height={691} alt="" style={{ position: "absolute", right: -10, top: -30, opacity: 0.85 }} />
        <div style={{ position: "absolute", right: -160, top: 120, width: 560, height: 560, borderRadius: 999, display: "flex", background: "radial-gradient(circle, rgba(91,61,246,0.45) 0%, rgba(91,61,246,0) 70%)" }} />

        <div style={{ position: "relative", display: "flex", flexDirection: "column", padding: "56px 64px", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", fontFamily: "Inter Tight", fontSize: 24, letterSpacing: "0.02em" }}>
            <span style={{ opacity: 0.7, marginRight: 12 }}>›</span>DEV. IGOR CARDOSO
            <span style={{ width: 10, height: 10, borderRadius: 999, background: "#7357ff", marginLeft: 12 }} />
          </div>

          <div style={{ display: "flex", marginTop: 46, fontSize: 17, fontWeight: 600, letterSpacing: "0.32em", color: "#c8c5d4" }}>
            SOFTWARE ENGINEER · ARQUITETURA &amp; IA
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 18, fontFamily: "Inter Tight", fontSize: 72, lineHeight: 0.95, letterSpacing: "-0.045em" }}>
            <span>Engenharia de software</span>
            <span style={{ display: "flex" }}><span style={{ color: "#6a4dff", marginRight: 18 }}>com IA</span>no núcleo.</span>
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 23, lineHeight: 1.4, color: "#dad7e4", maxWidth: 620 }}>
            Back-end, APIs, pagamentos e agentes de IA em produção, do desenho da arquitetura ao deploy.
          </div>

          <div style={{ display: "flex", marginTop: "auto", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 16, background: "rgba(13,12,20,0.85)", padding: "18px 8px", width: 660 }}>
            {stats.map(([value, label], index) => (
              <div key={value} style={{ display: "flex", flexDirection: "column", padding: "0 24px", borderLeft: index ? "1px solid rgba(255,255,255,0.12)" : "none" }}>
                <span style={{ fontFamily: "Inter Tight", fontSize: 30, letterSpacing: "-0.03em" }}>{value}</span>
                <span style={{ fontSize: 17, color: "#cfccd9", marginTop: 4 }}>{label}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 22, fontSize: 18, color: "#a9a5b6" }}>
            {stack.map((name, index) => (
              <span key={name} style={{ display: "flex", alignItems: "center" }}>
                {index > 0 && <span style={{ margin: "0 12px", color: "#5b3df6" }}>•</span>}
                {name}
              </span>
            ))}
            <span style={{ marginLeft: "auto", color: "#ffffff", fontWeight: 600 }}>igorcardos0.github.io</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter Tight", data: display, weight: 800, style: "normal" },
        { name: "Inter", data: regular, weight: 400, style: "normal" },
        { name: "Inter", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
