import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #09080E, #000000)",
          border: "5px solid #7C3CFF",
          borderRadius: 36,
          color: "#F6F5FF",
          fontSize: 70,
          fontWeight: 900,
          letterSpacing: "-6px",
        }}
      >
        IC<span style={{ color: "#81EAFF" }}>.</span>
      </div>
    ),
    size,
  );
}
