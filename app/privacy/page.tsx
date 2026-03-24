import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — 7-SENSE Marine",
  description: "Privacy policy for 7-SENSE Marine applications and services.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#000C18] text-white px-6 py-16 max-w-3xl mx-auto">
      <h1 className="font-heading text-3xl font-bold text-[#00F0FF] mb-2">
        Privacy Policy
      </h1>
      <p className="text-white/40 text-sm mb-10">
        Effective date: March 23, 2026 · Last updated: March 23, 2026
      </p>

      <section className="space-y-8 text-white/80 leading-relaxed">
        <div>
          <h2 className="text-white font-semibold text-lg mb-2">1. Who we are</h2>
          <p>
            7-SENSE Marine is a marine technology company based in Maine, USA.
            We build tools for marine professionals — including parts identification,
            job planning, and market intelligence services. Our products operate
            under the Mysealium and PySeas product lines.
          </p>
          <p className="mt-2">
            Contact:{" "}
            <a
              href="mailto:hello@7sense.net"
              className="text-[#00F0FF] hover:underline"
            >
              hello@7sense.net
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-white font-semibold text-lg mb-2">
            2. What data we collect
          </h2>
          <p>
            We collect only the minimum data necessary to provide our services:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Public page data</strong> — We read publicly available posts
              and information from marine industry Facebook pages using the Facebook
              Graph API. We do not read private messages, personal profiles, or
              user-generated content unrelated to public business pages.
            </li>
            <li>
              <strong>Contact information</strong> — If you contact us or sign up
              for early access, we collect your name and email address.
            </li>
            <li>
              <strong>Usage data</strong> — Standard web analytics (page views,
              referral sources). No cross-site tracking.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold text-lg mb-2">3. How we use data</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Public Facebook page data is used solely for internal marine industry
              market intelligence — identifying trends, tracking OEM announcements,
              and monitoring industry news. It is not sold, shared, or published.
            </li>
            <li>
              Contact information is used to respond to inquiries and send product
              updates you have opted into. We do not send unsolicited marketing.
            </li>
            <li>We do not sell any personal data to third parties.</li>
            <li>We do not use data for advertising targeting.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold text-lg mb-2">
            4. Facebook data use
          </h2>
          <p>
            Our Facebook integration reads public page feeds via the Facebook Graph
            API. We access only publicly available page posts and page metadata (name,
            category, follower count). We do not request or store user access tokens,
            user profiles, friend lists, or any data requiring Facebook user consent.
          </p>
          <p className="mt-2">
            Data retrieved from Facebook is stored on our internal servers in the
            United States and used exclusively for non-commercial market analysis.
            We comply with the{" "}
            <a
              href="https://developers.facebook.com/terms/"
              className="text-[#00F0FF] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook Platform Terms
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-white font-semibold text-lg mb-2">5. Data retention</h2>
          <p>
            Market intelligence signals derived from public page data are retained
            indefinitely for trend analysis. Raw post content is not retained beyond
            what is needed for classification. Contact information is retained until
            you request deletion.
          </p>
        </div>

        <div id="data-deletion">
          <h2 className="text-white font-semibold text-lg mb-2">
            6. Your rights &amp; data deletion
          </h2>
          <p>
            You may request access to, correction of, or deletion of any personal
            data we hold about you by emailing{" "}
            <a
              href="mailto:hello@7sense.net"
              className="text-[#00F0FF] hover:underline"
            >
              hello@7sense.net
            </a>
            . We will respond within 30 days.
          </p>
          <p className="mt-2">
            To request deletion of any data associated with your Facebook account
            or pages, email{" "}
            <a
              href="mailto:hello@7sense.net"
              className="text-[#00F0FF] hover:underline"
            >
              hello@7sense.net
            </a>{" "}
            with the subject line <strong>"Data Deletion Request"</strong>. We
            will confirm deletion within 30 days. Because our integration uses
            only public page data via an app access token — not user OAuth — we
            do not store personal Facebook user data, friend lists, or private
            content.
          </p>
        </div>

        <div>
          <h2 className="text-white font-semibold text-lg mb-2">7. Security</h2>
          <p>
            All data is stored on encrypted servers. API credentials are managed via
            a secrets manager and are never embedded in source code or transmitted
            in plain text.
          </p>
        </div>

        <div>
          <h2 className="text-white font-semibold text-lg mb-2">8. Changes</h2>
          <p>
            We may update this policy as our services evolve. Material changes will
            be noted with an updated effective date at the top of this page.
          </p>
        </div>

        <div>
          <h2 className="text-white font-semibold text-lg mb-2">9. Contact</h2>
          <p>
            Questions or requests:{" "}
            <a
              href="mailto:hello@7sense.net"
              className="text-[#00F0FF] hover:underline"
            >
              hello@7sense.net
            </a>
            <br />
            7-SENSE Marine / Mysealium Holdings · Maine, USA
          </p>
        </div>
      </section>
    </main>
  );
}
