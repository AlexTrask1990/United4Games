import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/ui/Header/Header";
import Footer from "@/app/ui/Footer/Footer";
import { createPageMetadata } from "@/app/lib/seo";

export const metadata: Metadata = createPageMetadata({
  path: "/cookie-policy",
  title: "Cookie Policy",
  description: "United4Games cookie policy.",
  noIndex: true,
});

const Bold = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold text-primary">{children}</span>
);

const PolicyLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-secondary underline transition-colors hover:text-accent-red"
  >
    {children}
  </Link>
);

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="grow bg-base-100 px-6 py-24 pt-40">
        <div className="container mx-auto w-11/12 max-w-6xl">
          <article>
          <h1 className="font-display text-4xl font-bold text-primary">
            Cookie Policy
          </h1>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-secondary">
              Last Updated: April 1, 2024
            </p>

            <div className="mt-8 space-y-4 text-base leading-relaxed text-gray-50">
              <p>
                Dear Guest (hereinafter referred to as <Bold>&quot;You&quot;</Bold>{" "}
                or <Bold>&quot;Consumer&quot;</Bold>),
              </p>
              <p>
                Welcome to <Bold>united4games.com</Bold>, an online platform
                operated by <Bold>United4Digital Ltd.</Bold>, headquartered in
                71-75 Shelton Street Covent Garden, London, England, WC2H 9JQ
                (hereinafter referred to as <Bold>&quot;We&quot;</Bold> or the{" "}
                <Bold>&quot;Company&quot;</Bold>).
              </p>
              <p>
                In our ongoing effort to enhance your browsing experience, we
                utilize cookies on our website for various functionalities. Allow
                us to elucidate the nature and utilization of these cookies on
                our platform.
              </p>
              <p>
                A Cookie Policy is detailing the methods by which a website or
                online service employs cookies and related technologies to gather
                and manage user data. It encompasses details regarding the types
                of cookies utilized, their respective purposes, guidance on
                managing or disabling cookies for users, and specifics concerning
                third-party cookies. These policies serve as crucial tools for
                ensuring transparency and adherence to data protection laws, such
                as the General Data Protection Regulation (GDPR) in the European
                Union. They play a pivotal role in informing users about their
                privacy rights and the handling of their personal data during
                their interactions with the website.
              </p>
              <p>
                Some cookies, known as proprium cookies or first-party cookies,
                are directly conveyed and managed by us. Via these cookies, the
                Company gathers and handles your personal data. We aim to clarify
                how we gather this data, the purposes for which it is used, and
                your associated rights, in accordance with Article 13 of the
                General Data Protection Regulation (EU) 2016/679 (the
                &quot;GDPR&quot;).
              </p>
              <p>
                Conversely, other cookies, referred to as third-party cookies, are
                conveyed and managed by third parties. This policy provides links
                to the respective policies published by these third parties. We
                highly recommend you to carefully review these policies.
              </p>
              <p>
                If you are unfamiliar with cookies, we kindly ask you to
                thoroughly read this policy alongside the general{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-secondary underline transition-colors hover:text-accent-red"
                >
                  privacy policy
                </Link>{" "}
                of the Website. This will enable you to make informed choices
                regarding your preferences.
              </p>
              <p>
                The Controller prioritizes the utmost protection of the privacy
                and personal data of its Consumers. For any inquiries related to
                this Cookie Policy, Consumers are encouraged to contact the
                Controller at any time via email at{" "}
                <Bold>support@united4digital.com</Bold>
              </p>

              <h2 className="pt-4 font-display text-2xl font-bold text-primary">
                A. Understanding Cookies and Their Purpose
              </h2>
              <p>
                Cookies are small text files that websites visited by a consumer
                send directly to their device (typically, to the browser), where
                they are stored for transmission back to the same websites during
                the consumer&apos;s subsequent visits (known as{" "}
                <Bold>proprium or first-party cookies</Bold>). While browsing a
                website, a consumer&apos;s device may also receive cookies from
                other websites or web servers (referred to as{" "}
                <Bold>third-party cookies</Bold>). This occurs because the
                visited website may contain elements, such as images, maps,
                sounds, or links to specific web pages from other domains, which
                are hosted on servers different from the one hosting the
                requested page. Simply put, these cookies originate from websites
                other than the one currently being visited.
              </p>
              <p>
                Cookies can have a duration limited to a single browsing session
                on the browser (known as <Bold>session cookies</Bold>), which
                automatically deactivate once the consumer closes the browser.
                Alternatively, cookies may have a predetermined duration (known
                as <Bold>permanent cookies</Bold>), remaining stored and active
                on the hard disk until their expiration date. This allows them to
                continue gathering information during multiple browsing sessions
                on the browser.
              </p>
              <p>
                Cookies serve various purposes. Some are essential for enabling
                you to navigate the Website and utilize its functionalities
                (referred to as technical cookies). Others are utilized to gather
                statistical information, either in aggregate or individually,
                about the number of consumers accessing the Website and how it is
                utilized (known as <Bold>monitoring cookies or analytics</Bold>).
                Additionally, certain cookies are employed to track your consumer
                profile and display advertisements that align with your
                preferences and consumer habits (known as{" "}
                <Bold>profiling cookies</Bold>).
              </p>
              <p>
                To gain a more comprehensive understanding of the various
                categories of cookies mentioned, please continue reading this
                policy. Explore how each type functions and the purposes they
                serve. You are encouraged to freely decide whether to consent to
                their use or opt out accordingly.
              </p>

              <h2 className="pt-4 font-display text-2xl font-bold text-primary">
                B. Technical Cookies
              </h2>
              <p>
                Technical cookies are exclusively utilized on the Website to
                facilitate your navigation and enable you to utilize its
                functionalities. These cookies are considered first-party cookies
                as they are conveyed directly by us on the Website. Their primary
                function is to enhance your browsing experience and ensure the
                proper functioning of the Website&apos;s features.
              </p>
              <p>
                Technical cookies serve the purpose of memorizing your
                preferences, such as your selected country, to streamline your
                browsing experience. These are commonly referred to as
                functionalities cookies. Unlike session cookies, which expire
                once the browsing session ends, functionalities cookies are often
                lasting cookies. They remain stored on your computer even after
                closing the browser until their scheduled expiration date or
                until you choose to delete them.
              </p>
              <p>
                The technical cookies currently used on the Website are as
                follows:
              </p>
              <ol className="list-decimal space-y-4 pl-5">
                <li>
                  <Bold>Cookie&apos;s denomination: </Bold>
                  united4games-accept-cookies
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      <Bold>Cookie&apos;s category: </Bold>
                      Technical first-party cookie.
                    </li>
                    <li>
                      <Bold>Cookie&apos;s function: </Bold>
                      Functionality lasting.
                    </li>
                    <li>
                      <Bold>Function: </Bold>
                      Keeps the information about your preference regarding the
                      enabling of cookies on this site.
                    </li>
                  </ul>
                </li>
              </ol>
              <p>
                As per the privacy law currently in force, the installation of
                technical cookies does not necessitate your prior consent. You
                are free to block the installation of technical cookies by
                adjusting your browser settings (refer to paragraph E, No. 1, for
                instructions on how to do this). However, please note that
                blocking the installation of technical cookies or deleting them
                thereafter may compromise your ability to access the Website,
                utilize its features in whole or in part, enable or disable
                certain functions, or receive certain services.
              </p>

              <h2 className="pt-4 font-display text-2xl font-bold text-primary">
                C. Monitoring Cookies of &quot;Analytics&quot;
              </h2>
              <p>
                Analytics are employed on the Website to gather statistical
                information, whether aggregated or not, regarding the number of
                consumers accessing the Website and their browsing patterns.
              </p>
              <p>
                The analytics cookies on this Website are third-party cookies, as
                they are not directly conveyed or installed by the Company, but
                by third-party entities. These cookies are utilized to track how
                consumers navigate the Website.
              </p>
              <p>
                The following third-party analytics may be installed on the
                Website without your prior consent, as they are less invasive and
                anonymized. Third parties cannot access disaggregated data at the
                IP address level, meaning they cannot identify your specific
                identity using these cookies:
              </p>
              <ol className="list-decimal space-y-4 pl-5">
                <li>
                  <Bold>Cookie&apos;s denomination: </Bold>
                  Vercel Analytics
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      <Bold>Cookie&apos;s category: </Bold>
                      Third-party cookie analytics.
                    </li>
                    <li>
                      <Bold>Link disclosure / Instructions on opt-out: </Bold>
                      <PolicyLink href="https://vercel.com/docs/analytics/privacy-policy">
                        Vercel Analytics Privacy
                      </PolicyLink>
                      .
                    </li>
                  </ul>
                </li>
              </ol>
              <p>
                For this reason, a specific banner is prominently displayed when
                you access the Website, informing you that:
              </p>
              <ol className="list-decimal space-y-2 pl-5">
                <li>Third-party analytics cookies are used on the Website.</li>
                <li>
                  By accepting cookies via the banner, you are providing your
                  consent to the use of cookies.
                </li>
              </ol>
              <p>
                If you provide your consent to the use of cookies in this manner,
                we will track your consent using a specific technical cookie.
                This ensures that the cookies banner will not be displayed during
                your subsequent visits to the Website. However, please be aware
                that if you delete this technical cookie from your browser (as
                explained in paragraph E, No. 1), your consent tracking will be
                lost. Consequently, the cookies banner will reappear during your
                next visit to the Website.
              </p>
              <p>
                You are entirely free to block the installation of analytics
                cookies at any time, and doing so will not affect your ability to
                visit the Website or access its contents in any way. Please
                carefully review the third-party cookies policies by following
                the links provided above to learn how to block them.
              </p>

              <h2 className="pt-4 font-display text-2xl font-bold text-primary">
                D. Profiling Cookies
              </h2>
              <p>
                Profiling cookies are utilized to generate a consumer&apos;s
                profile, which is based on the preferences and interests
                displayed by you during your internet browsing. The purpose is to
                display advertisements that are tailored to your profile. This
                allows the advertisements shown on our Website to be more
                relevant and of interest to you.
              </p>
              <p>
                Your prior consent is required to install such cookies, as
                mandated by the current privacy law. Therefore, when you access
                the Website, a specific banner is displayed, informing you that:
              </p>
              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  Profiling and/or third-party cookies may be used on the
                  Website.
                </li>
                <li>
                  By accepting cookies via the banner, you are providing your
                  consent to the use of cookies.
                </li>
              </ol>
              <p>
                If you provide your consent to the use of cookies in this manner,
                we will track your consent using a specific technical cookie.
                This will prevent the cookies banner from being displayed during
                your subsequent visits to the Website. However, please be aware
                that if you delete this technical cookie from your browser (as
                explained in paragraph E, No. 1), your consent tracking will be
                lost, and the cookies banner will reappear during your next visit
                to the Website.
              </p>
              <p>
                You are completely free to block the installation of profiling
                cookies at any time, and this will not in any way compromise your
                ability to visit the Website and access its contents. If you
                choose to deactivate behavioral advertising, this does not mean
                that you will stop receiving advertisements on the Website.
                However, the banners displayed on the Website may not be tailored
                to reflect your interests or preferences based on the browser you
                are currently using.
              </p>
              <p>
                Certain third-party cookies are installed by entities with which
                we do not have a direct contractual relationship. Therefore, we
                provide you with links to intermediary websites that contain
                lists of third parties installing profiling cookies and links to
                their privacy policies, where you can find information about
                their profiling cookies and how to oppose their installation
                (opt-out):
              </p>
              <ul className="list-disc space-y-4 pl-5">
                <li>
                  <Bold>Cookie&apos;s denomination: </Bold>
                  Facebook
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      <Bold>Cookie&apos;s category: </Bold>
                      Third-party profiling cookie lasting
                    </li>
                    <li>
                      <Bold>Link to the policy: </Bold>
                      <PolicyLink href="https://www.youronlinechoices.com/uk/">
                        Your Online Choices - Facebook
                      </PolicyLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <Bold>Cookie&apos;s denomination: </Bold>
                  LinkedIn
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      <Bold>Informative links: </Bold>
                      <PolicyLink href="https://www.linkedin.com/legal/cookie-policy">
                        LinkedIn Cookie Policy
                      </PolicyLink>
                    </li>
                  </ul>
                </li>
              </ul>

              <h2 className="pt-4 font-display text-2xl font-bold text-primary">
                E. How to Manage Cookies and Opt-out of Their Use
              </h2>
              <p>
                There are several options available to manage, disable, and
                remove cookies:
              </p>
              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  Modify your browser settings: Please follow the instructions
                  provided by your browser&apos;s manufacturer to discover how to
                  manage, disable, or remove all types of cookies (technical,
                  analytics, and profiling):
                </li>
              </ol>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Explorer:{" "}
                  <PolicyLink href="https://support.microsoft.com/en-gb/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d">
                    Manage cookies in Microsoft Edge
                  </PolicyLink>
                </li>
                <li>
                  Chrome:{" "}
                  <PolicyLink href="https://support.google.com/chrome/answer/95647?hl=en">
                    Manage cookies in Google Chrome
                  </PolicyLink>
                </li>
                <li>
                  Firefox:{" "}
                  <PolicyLink href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US">
                    Manage cookies in Mozilla Firefox
                  </PolicyLink>
                </li>
                <li>
                  Safari:{" "}
                  <PolicyLink href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac">
                    Manage cookies in Safari
                  </PolicyLink>
                </li>
                <li>
                  Opera:{" "}
                  <PolicyLink href="https://help.opera.com/en/latest/web-preferences/">
                    Manage cookies in Opera
                  </PolicyLink>
                </li>
                <li>
                  Edge:{" "}
                  <PolicyLink href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd">
                    Manage cookies in Microsoft Edge
                  </PolicyLink>
                </li>
              </ul>

              <h2 className="pt-4 font-display text-2xl font-bold text-primary">
                F. Processing Methods and Data Retention Timing
              </h2>
              <p>
                As outlined in the preamble of this Cookie Policy, the Company
                collects and processes certain personal data through cookies
                directly conveyed on the Website (first-party cookies). The
                Company acts as the data controller of such data, in accordance
                with the provisions of the GDPR.
              </p>
              <p>
                Please note that we will process your data solely using
                electronic instruments, in a highly automated manner, without any
                human intermediation. Therefore, our employees and collaborators
                will never access the content of your personal data obtained
                through cookies. This means that they will never be able to view
                and/or access any Personally Identifiable Information (PII)
                directly.
              </p>
              <p>
                Certain employees and coworkers, designated by us as data
                controllers, may perform maintenance operations on IT systems
                hosting your data, without accessing their actual contents. Your
                personal data may be stored on servers managed by third parties
                (such as IT system providers) or may be handled by specialized
                online marketing entities acting as external data controllers
                based on specific written appointments by the Company.
              </p>
              <p>
                We hereby inform you that, in compliance with legal requirements
                and guarantees, your data may be transferred to countries outside
                the European Economic Union that may not provide a level of
                privacy and personal data protection equivalent to that
                guaranteed by Italian and European privacy laws. However, as the
                Controller, we prioritize security and will ensure that such
                transfers are conducted with all due care and guarantees.
              </p>
              <p>
                Your personal data will not be transferred to third-party data
                processors or disseminated to unauthorized parties.
              </p>

              <h2 className="pt-4 font-display text-2xl font-bold text-primary">
                G. Your Rights
              </h2>
              <p>
                To exercise your rights or to obtain any other information or
                clarification regarding this Cookie Policy, please contact the
                Company via email at support@united4digital.com.
              </p>
              <p>
                In accordance with Privacy Laws, the Data Controller informs that
                Consumers have the right to obtain:
              </p>
              <ol className="list-decimal space-y-2 pl-5">
                <li>Indication of the origin of personal data.</li>
                <li>
                  Information about the purposes and methods of processing.
                </li>
                <li>
                  Explanation of the logic applied in electronic processing.
                </li>
                <li>
                  Identification details of the Controllers and Processors.
                </li>
                <li>
                  Information about the subjects or categories of subjects to
                  whom the personal data may be communicated or who may come to
                  know them as Processors.
                </li>
              </ol>
              <p>Furthermore, Consumers have the right to:</p>
              <ol className="list-decimal space-y-2 pl-5">
                <li>Access, update, rectify, or integrate data.</li>
                <li>
                  Request the deletion, transformation into anonymous form, or
                  blocking of unlawfully processed data, including data whose
                  retention is unnecessary for the purposes for which the data
                  were collected or subsequently processed.
                </li>
              </ol>
              <p>Furthermore, Consumers have:</p>
              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  The right to withdraw consent at any time, if the processing is
                  based on their consent.
                </li>
                <li>
                  (If applicable) The right to data portability (the right to
                  receive all personal data concerning them in a structured
                  format, commonly used, and readable by automatic device), the
                  right to limit the processing of personal data, and the right
                  to erasure (&quot;right to be forgotten&quot;).
                </li>
                <li>
                  The right to object:
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      In whole or in part, for legitimate reasons, to the
                      processing of personal data concerning them, even if
                      pertinent to the purpose of the collection.
                    </li>
                    <li>
                      In whole or in part, to the processing of personal data
                      concerning them for the purpose of sending advertising or
                      direct sales material or for carrying out market research
                      or commercial communication.
                    </li>
                    <li>
                      If personal data are processed for direct marketing
                      purposes, at any time, to the processing of your data for
                      this purpose, including profiling insofar as it is
                      connected to such direct marketing.
                    </li>
                  </ul>
                </li>
                <li>
                  If they believe that the processing that concerns them violates
                  any Privacy Laws, the right to lodge a complaint with a
                  Supervisory Authority (if a European citizen, in the Member
                  State in which they usually reside, in the one in which they
                  work, or in the one in which the alleged violation has
                  occurred).
                </li>
              </ol>
              <p>
                The Controller is not responsible for updating all links provided
                in this Cookie Policy. Therefore, if a link is not functional or
                updated, Consumers acknowledge and accept that they must always
                refer to the document and/or section of the websites referred to
                by such link.
              </p>
            </div>

          <Link
            href="/"
              className="mt-12 inline-block font-bold text-secondary transition-colors hover:text-accent-red"
          >
            Back to home
          </Link>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
