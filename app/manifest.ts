import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Igor de Souza Cardoso — Engenheiro de Software Full Stack",
    short_name: "Igor Cardoso",
    description: "Portfólio de Igor de Souza Cardoso, engenheiro de software full stack e líder técnico: arquitetura de software e de IA, back-end e sistemas em produção.",
    start_url: "/",
    display: "standalone",
    background_color: "#07060c",
    theme_color: "#07060c",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
