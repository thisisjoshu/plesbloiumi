import { Container } from "@/components/ui/Container";
import { Finder } from "./Finder";

/**
 * Hero — full-bleed media slab (allowed only on the homepage and editorial
 * opens). The stack is:
 *
 *   1. Background gradient (sunset palette) — always-on fallback. If the
 *      video asset is missing or the browser blocks autoplay, this remains
 *      the visible background. Acts as the de-facto poster.
 *   2. <video> — muted, looping, autoplay, playsInline. Drop the file at
 *      /public/hero.mp4 to override. Falls back to a Pexels CDN clip.
 *   3. Protection gradient — bottom-up volcano alpha so the headline
 *      remains legible against any frame.
 *   4. Content stack with explicit z-index — top: editorial brand-stamp +
 *      Pijin greeting; bottom: wordmark headline + tagline + pitch.
 *
 * NOTE: avoided the Photo component for the background layer because its
 * internal `relative` class collided with the `absolute` override and
 * pushed all overlaid content out of view.
 */
export function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[78vh] min-h-[560px] max-h-[820px] w-full overflow-hidden">
        {/* Layer 1: gradient fallback (sunset palette) */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #7A2818 0%, #D8442E 35%, #F2B544 70%, #FDF1D6 100%)",
          }}
        />

        {/* Layer 2: video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        >
          {/* Drop /public/hero.mp4 to override. Falls back to a CC-licensed
              Pexels CDN clip — 720p, ~5.5MB, no auth. */}
          <source src="/hero.mp4" type="video/mp4" />
          <source
            src="https://videos.pexels.com/video-files/8356893/8356893-hd_1280_720_25fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Layer 3: protection gradient — darker top AND bottom so editorial
            stamp and headline both hold against bright frames */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(22,27,31,.55) 0%, rgba(22,27,31,.15) 25%, rgba(22,27,31,.15) 65%, rgba(22,27,31,.75) 100%)",
          }}
        />

        {/* Layer 4: content — explicit z-10 so it cannot fall behind any
            stacking context from the absolute siblings */}
        <div className="relative z-10 h-full">
          <Container className="h-full">
            <div className="flex h-full flex-col justify-between pt-10 md:pt-14 pb-16 md:pb-24">
              {/* Top — editorial brand-stamp + Pijin greeting */}
              <div>
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.16em] text-shell-50/90"
                  style={{ textShadow: "0 1px 10px rgba(0,0,0,.55)" }}
                >
                  Hapi Isles · Solomon Islands
                </p>
                <p
                  className="mt-3 font-hand text-[clamp(24px,3vw,34px)] text-sun-300"
                  style={{ textShadow: "0 1px 14px rgba(0,0,0,.65)" }}
                >
                  Yumi welkam yu.
                </p>
              </div>

              {/* Bottom — wordmark headline + English tagline + pitch */}
              <div>
                <h1
                  className="font-display font-normal text-shell-50 text-[clamp(44px,8.5vw,84px)] leading-[1.0] tracking-[-0.025em] text-balance max-w-[14ch]"
                  style={{ textShadow: "0 2px 30px rgba(0,0,0,.5)" }}
                >
                  <em className="not-italic font-display italic text-reef-300">
                    Ples
                  </em>{" "}
                  blo iumi.
                </h1>
                <p
                  className="mt-3 font-display italic text-[clamp(22px,3vw,32px)] leading-[1.2] text-shell-50/95 max-w-[34ch]"
                  style={{ textShadow: "0 1px 14px rgba(0,0,0,.55)" }}
                >
                  Our place. Yours to wander.
                </p>
                <p
                  className="mt-5 max-w-[44ch] font-sans text-[clamp(15px,1.5vw,18px)] leading-[1.55] text-shell-50/90"
                  style={{ textShadow: "0 1px 10px rgba(0,0,0,.5)" }}
                >
                  992 islands. 87 languages. One slow week is usually enough to
                  change you.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Finder pulls up over the slab edge so it reads as handed across */}
      <Container className="-mt-10 md:-mt-12 relative z-20">
        <Finder />
      </Container>
    </section>
  );
}
