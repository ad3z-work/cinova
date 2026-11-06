import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  type: z.enum(["movie", "tv"]),
  id: z.number().int().positive(),
  season: z.number().int().positive().optional(),
  episode: z.number().int().positive().optional(),
});

export type StreamSource = { name: string; url: string; quality?: string; referrer?: "origin" | "no-referrer" };

/**
 * Single playback provider (CineSrc). Kept server-side so its name and
 * URL never show in the UI; the player loads it silently as the default.
 */
function embedServers(data: z.infer<typeof schema>): StreamSource[] {
  const s = data.season ?? 1;
  const e = data.episode ?? 1;
  const isTv = data.type === "tv";
  return [
    {
      name: "CineSrc",
      url: isTv
        ? `https://cinesrc.st/embed/tv/${data.id}?s=${s}&e=${e}`
        : `https://cinesrc.st/embed/movie/${data.id}`,
      referrer: "no-referrer",
    },
  ];
}

/**
 * Resolves the configured third-party embed player for a title.
 */
export const getStreamSources = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) => schema.parse(input))
  .handler(async ({ data }) => {
    const sources = embedServers(data);
    return { sources, embed: null as string | null, error: null as string | null };
  });

