import type { Metadata } from "next";
import { LindsayMitchProposalPage } from "@/components/knox/lindsay-mitch-proposal-page";

export const metadata: Metadata = {
  title: "Knox Signature - Lindsay + Mitch Proposal",
  description:
    "A Knox Signature rehearsal dinner proposal for Lindsay + Mitch covering cocktail hour, dinner, production, and full evening atmosphere.",
  openGraph: {
    title: "Knox Signature - Lindsay + Mitch Proposal",
    description: "Cocktail hour and dinner atmosphere designed for Lindsay + Mitch.",
    images: ["/ks-social-cover.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knox Signature - Lindsay + Mitch Proposal",
    description: "Cocktail hour and dinner atmosphere designed for Lindsay + Mitch.",
    images: ["/ks-social-cover.png"],
  },
};

export default function Page() {
  return (
    <main>
      <LindsayMitchProposalPage />
    </main>
  );
}
