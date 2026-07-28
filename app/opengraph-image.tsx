import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Igor de Souza Cardoso — Desenvolvedor Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#000000", color: "#F6F5FF", padding: "72px 82px", flexDirection: "column" }}>
        <div style={{ position: "absolute", width: 650, height: 650, borderRadius: 999, right: -120, top: -180, background: "radial-gradient(circle, #4B79FF 0%, #7C3CFF 38%, transparent 70%)", opacity: 0.65 }} />
        <div style={{ display: "flex", fontSize: 24, fontWeight: 800, color: "#A773FF", letterSpacing: "-1px" }}>DEV. IGOR S. CARDOSO ↗</div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: "auto", position: "relative" }}>
          <div style={{ fontSize: 72, fontWeight: 900, letterSpacing: "-5px", lineHeight: 1 }}>Igor de Souza Cardoso</div>
          <div style={{ fontSize: 65, fontWeight: 900, letterSpacing: "-4px", lineHeight: 1.1, background: "linear-gradient(110deg, #A773FF, #4B79FF, #81EAFF)", backgroundClip: "text", color: "transparent" }}>Desenvolvedor Full Stack.</div>
          <div style={{ marginTop: 34, fontSize: 22, color: "#AAA6B7" }}>Frontend · Automações · APIs · Integrações</div>
        </div>
      </div>
    ),
    size,
  );
}
