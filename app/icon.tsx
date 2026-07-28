import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          border: "2px solid #7C3CFF",
          borderRadius: 12,
          color: "#F6F5FF",
          fontSize: 25,
          fontWeight: 900,
          letterSpacing: "-2px",
        }}
      >
        IC<span style={{ color: "#81EAFF" }}>.</span>
      </div>
    ),
    size,
  );
}
