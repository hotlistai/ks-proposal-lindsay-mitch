import Image from "next/image";
import type { ReactNode } from "react";
import { FadeIn } from "./fade-in";
import { VideoPlayer } from "./video-player";

const config = {
  coupleName: "Lindsay + Mitch",
  eventDate: "April 23, 2027",
  venue: "ALG Fine Art Gallery",
  totalInvestment: "$3,450",
  deposit: "A 50% deposit secures the date",
  balanceDue: "The remaining balance is due 30 days prior to the event",
};

const BANNER_IMAGE = "https://www.knoxsignature.com/images/knox-press-banner.png";
const PREVIEW_VIDEO = "/videos/lindsay-mitch-preview.mp4";
const PREVIEW_VIDEO_POSTER = "/videos/lindsay-mitch-preview-poster.jpg";
const MIDDLE_VIDEO = "/videos/lindsay-mitch-live-set.mp4";
const MIDDLE_VIDEO_POSTER = "/videos/lindsay-mitch-live-set-poster.jpg";
const PRODUCTION_IMAGE = "/images/lindsay-mitch-production-room.png";

const detailCards = [
  { label: "Date", value: config.eventDate },
  { label: "Experience", value: "Cocktail Hour + Dinner" },
  { label: "Venue", value: config.venue },
  { label: "Coverage", value: "Full evening rehearsal dinner atmosphere" },
];

const cocktailItems = [
  "Light, warm music to welcome guests as they arrive",
  "A relaxed, social atmosphere that feels elevated without overpowering conversation",
  "Live saxophone with keys or DJ support, depending on the direction you prefer",
  "Music that stays present and intentional while guests mingle",
];

const dinnerItems = [
  "DJ + live saxophone to gradually build energy",
  "Thoughtful music selection that supports the room while maintaining momentum",
  "A natural progression into more upbeat, feel-good music",
  "A lively finish that still feels tasteful and refined",
];

const productionItems = [
  "Minimal white DJ command center",
  "Premium column-array sound system",
  "Architectural atmospheric lighting",
  "Wireless microphones for speeches and toasts",
  "Digital mixing for clarity and control",
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p
      className="mb-5 text-[11px] font-semibold uppercase"
      style={{ letterSpacing: "0.32em", color: "rgba(255,255,255,0.4)" }}
    >
      {children}
    </p>
  );
}

function StyledListItem({ children }: { children: ReactNode }) {
  return (
    <li className="relative mb-3 pl-7" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
      <span className="absolute left-0 font-light" style={{ color: "rgba(255,255,255,0.25)" }}>
        {"\u2014"}
      </span>
      {children}
    </li>
  );
}

function CalloutBox({ children }: { children: ReactNode }) {
  return (
    <div
      className="my-10 px-7 py-7"
      style={{
        background: "rgba(255,255,255,0.025)",
        borderLeft: "2px solid rgba(255,255,255,0.15)",
      }}
    >
      <p className="m-0 italic font-light" style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}>
        {children}
      </p>
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="w-full">
        <Image
          src={BANNER_IMAGE}
          alt="Knox Signature"
          width={1920}
          height={600}
          priority
          className="block h-auto w-full"
        />
      </div>

      <div className="mx-auto max-w-[1040px] px-9 pb-10 pt-20 md:px-[72px]">
        <FadeIn>
          <p
            className="mb-4 text-[10px] font-semibold uppercase"
            style={{ letterSpacing: "4.5px", color: "rgba(255,255,255,0.4)" }}
          >
            Rehearsal Dinner Proposal
          </p>
          <h1
            className="text-balance font-extrabold"
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            The Knox Signature Rehearsal Dinner Experience
          </h1>
          <p
            className="mt-4 text-[11px] font-semibold uppercase"
            style={{ letterSpacing: "0.28em", color: "rgba(255,255,255,0.5)" }}
          >
            FOR {config.coupleName.toUpperCase()}
          </p>
        </FadeIn>

        <FadeIn delay={150}>
          <div
            className="mt-6 max-w-[64ch] space-y-5 font-light"
            style={{ fontSize: "clamp(17px, 1.6vw, 20px)", color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
          >
            <p>Thank you for the conversation.</p>
            <p>
              We loved hearing more about your rehearsal dinner at {config.venue} on {config.eventDate}, and are
              excited to design an atmosphere that carries the evening naturally from cocktail hour through dinner and
              into the later moments of the night.
            </p>
            <p>Below is the proposed structure for your Knox Signature experience.</p>
          </div>
        </FadeIn>

        <FadeIn delay={250}>
          <div className="mt-12">
            <SectionLabel>Private Preview</SectionLabel>
            <VideoPlayer src={PREVIEW_VIDEO} poster={PREVIEW_VIDEO_POSTER} className="max-w-[760px]" />
          </div>
        </FadeIn>
      </div>
    </header>
  );
}

function EventSnapshot() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>Event Snapshot</SectionLabel>
      </FadeIn>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {detailCards.map((card, index) => (
          <FadeIn key={card.label} delay={index * 75}>
            <div
              className="h-full px-6 py-6"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p
                className="text-[11px] font-semibold uppercase"
                style={{ letterSpacing: "0.24em", color: "rgba(255,255,255,0.35)" }}
              >
                {card.label}
              </p>
              <p
                className="mt-4 font-medium"
                style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.55, fontSize: "16px" }}
              >
                {card.value}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function BuildSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>The Build</SectionLabel>
        <h2
          className="font-bold"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "#ffffff",
          }}
        >
          Cocktail Hour & Dinner Experience
        </h2>
      </FadeIn>

      <FadeIn delay={100}>
        <p
          className="mt-4 text-[11px] font-semibold uppercase"
          style={{ letterSpacing: "0.28em", color: "rgba(255,255,255,0.45)" }}
        >
          {config.venue}
        </p>
      </FadeIn>

      <FadeIn delay={175}>
        <p className="mt-8 max-w-[64ch] font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.75 }}>
          The evening begins with live performance and gradually builds in energy as the room settles into the night.
        </p>
      </FadeIn>

      <FadeIn delay={250}>
        <div className="mt-10">
          <SectionLabel>Cocktail Hour</SectionLabel>
          <ul className="my-0 max-w-[64ch] list-none p-0">
            {cocktailItems.map((item) => (
              <StyledListItem key={item}>{item}</StyledListItem>
            ))}
          </ul>
        </div>
      </FadeIn>

      <FadeIn delay={325}>
        <div className="mt-14">
          <SectionLabel>Dinner</SectionLabel>
          <p className="max-w-[64ch] font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.75 }}>
            As the evening settles in, the experience transitions into a DJ-led format with live saxophone
            integration.
          </p>
          <ul className="mt-8 max-w-[64ch] list-none p-0">
            {dinnerItems.map((item) => (
              <StyledListItem key={item}>{item}</StyledListItem>
            ))}
          </ul>
        </div>
      </FadeIn>
    </section>
  );
}

function MiddleVideoSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <VideoPlayer src={MIDDLE_VIDEO} poster={MIDDLE_VIDEO_POSTER} halfWidth className="max-w-[560px]" />
      </FadeIn>
    </section>
  );
}

function ProductionSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>Production & Design</SectionLabel>
        <ul className="my-0 max-w-[64ch] list-none p-0">
          {productionItems.map((item) => (
            <StyledListItem key={item}>{item}</StyledListItem>
          ))}
        </ul>
      </FadeIn>

      <FadeIn delay={125}>
        <p className="mt-10 max-w-[66ch] font-light" style={{ color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>
          Everything is designed to look as polished as it sounds and to complement the gallery space throughout the
          evening.
        </p>
      </FadeIn>

      <FadeIn delay={225}>
        <CalloutBox>
          We approach every event with the same goal: to create an atmosphere that feels effortless, elevated, and
          memorable for both you and your guests.
        </CalloutBox>
      </FadeIn>

      <FadeIn delay={325}>
        <div className="mt-14">
          <Image
            src={PRODUCTION_IMAGE}
            alt="Knox Signature white DJ command center setup in a gallery-style room"
            width={1536}
            height={1024}
            className="block h-auto w-full"
            style={{ border: "1px solid rgba(255,255,255,0.06)", opacity: 0.96 }}
          />
        </div>
      </FadeIn>
    </section>
  );
}

function TimingSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>Timing</SectionLabel>
        <p className="max-w-[64ch] font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.75 }}>
          Coverage includes cocktail hour through dinner and the full evening.
        </p>
        <p className="mt-5 max-w-[64ch] font-light" style={{ color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>
          This structure allows the atmosphere to build naturally with intention, flexibility, and flow.
        </p>
      </FadeIn>
    </section>
  );
}

function TotalInvestmentSection() {
  return (
    <section
      id="investment"
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>The Full Atmosphere</SectionLabel>
        <h2
          className="font-bold"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "#ffffff",
          }}
        >
          All Night Coverage
        </h2>
      </FadeIn>

      <FadeIn delay={100}>
        <p
          className="mt-4 text-[11px] font-semibold uppercase"
          style={{ letterSpacing: "0.28em", color: "rgba(255,255,255,0.45)" }}
        >
          Cocktail Hour + Dinner Experience
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_0.85fr]">
        <FadeIn delay={175}>
          <div
            className="h-full px-8 py-8"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p
              className="text-[11px] font-semibold uppercase"
              style={{ letterSpacing: "0.28em", color: "rgba(255,255,255,0.35)" }}
            >
              Total Investment
            </p>
            <p
              className="mt-5 m-0 font-semibold"
              style={{ fontSize: "clamp(42px, 6vw, 72px)", letterSpacing: "-0.04em", lineHeight: 1, color: "#ffffff" }}
            >
              {config.totalInvestment}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={250}>
          <div
            className="h-full px-8 py-8"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p
              className="text-[11px] font-semibold uppercase"
              style={{ letterSpacing: "0.28em", color: "rgba(255,255,255,0.35)" }}
            >
              Terms
            </p>
            <dl className="mt-6 flex flex-col gap-5">
              <div>
                <dt
                  className="text-[13px] font-medium uppercase"
                  style={{ letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)" }}
                >
                  Deposit
                </dt>
                <dd className="mt-2 m-0 font-light" style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}>
                  {config.deposit}
                </dd>
              </div>
              <div>
                <dt
                  className="text-[13px] font-medium uppercase"
                  style={{ letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)" }}
                >
                  Balance
                </dt>
                <dd className="mt-2 m-0 font-light" style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}>
                  {config.balanceDue}
                </dd>
              </div>
            </dl>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ProposalFooter() {
  return (
    <footer
      className="mx-auto max-w-[1040px] px-9 pb-20 pt-14 md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <p
          className="mb-4 text-[10px] font-semibold uppercase"
          style={{ letterSpacing: "4px", color: "rgba(255,255,255,0.35)" }}
        >
          Knox Signature
        </p>
        <p className="mb-6 font-light" style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)" }}>
          Event atmospheres built with intention, restraint, and energy.
        </p>
        <div className="flex flex-col gap-1 text-[14px]" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 2 }}>
          <p>Based in Dallas. Available worldwide.</p>
          <p>
            <a href="mailto:hello@knoxsignature.com" className="footer-link pb-px transition-all duration-200">
              hello@knoxsignature.com
            </a>
          </p>
          <p>
            <a
              href="https://knoxsignature.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link pb-px transition-all duration-200"
            >
              knoxsignature.com
            </a>
          </p>
        </div>
        <p className="mt-10 text-[12px] font-light" style={{ color: "rgba(255,255,255,0.25)" }}>
          This proposal is confidential and intended solely for {config.coupleName}.
        </p>
      </FadeIn>
    </footer>
  );
}

export function LindsayMitchProposalPage() {
  return (
    <>
      <Header />
      <EventSnapshot />
      <BuildSection />
      <MiddleVideoSection />
      <ProductionSection />
      <TimingSection />
      <TotalInvestmentSection />
      <ProposalFooter />
    </>
  );
}
