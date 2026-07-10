import type { LegalDocumentContent } from "@/app/types/legalDocument";

export const privacyPolicyContent: LegalDocumentContent = {
  title: "Privacy Policy",
  lastUpdated: "10.07.2026",
  intro: [
    { type: "paragraph", text: "This Privacy Policy (\"Privacy Policy\") explains how UNITED4DIGITAL LTD,  legal address: 71-75 Shelton Street, Covent Garden, London, England, WC2H 9JQ, registration number: 15785227 (\"Company,\" \"we,\" \"our,\" or \"us\") collects, uses, shares, stores, and otherwise processes personal data when you download, install, access, or use Hook Wars (the \"App\")." },
    { type: "paragraph", text: "This Privacy Policy applies solely to the App and any related services provided by the Company in connection with the App." },
    { type: "paragraph", text: "Please read this Privacy Policy carefully to understand how we process your personal data and what rights you may have under applicable data protection laws." },
    { type: "paragraph", text: "By using the App, you acknowledge that your personal data may be processed as described in this Privacy Policy." },
    { type: "paragraph", text: "If you do not agree with this Privacy Policy, please discontinue using the App." },
  ],
  sections: [
    {
      id: "definitions",
      title: "1. Definitions",
      blocks: [
        { type: "paragraph", text: "For the purposes of this Privacy Policy, the following capitalized terms shall have the meanings set forth below:" },
        { type: "paragraph", text: "\"App\" means the Hook Wars mobile game, including all related software, features, functionality, updates, and services made available by the Company." },
        { type: "paragraph", text: "\"Personal Data\" means any information relating to an identified or identifiable natural person, or any equivalent concept under applicable privacy laws." },
        { type: "paragraph", text: "\"Processing\" means any operation performed on Personal Data, including its collection, recording, organization, storage, use, disclosure, transmission, analysis, deletion, or other use, as defined under applicable data protection laws." },
        { type: "paragraph", text: "\"Third-Party Services\" means third-party providers, software development kits (SDKs), advertising partners, analytics providers, multiplayer infrastructure providers, cloud services, platform providers, and other external services integrated into or used in connection with the App." },
      ],
    },
    {
      id: "scope-of-this-privacy-policy",
      title: "2. Scope of this Privacy Policy",
      blocks: [
        { type: "paragraph", text: "This Privacy Policy applies to the Personal Data processed through your use of the App." },
        { type: "paragraph", text: "It does not apply to any third-party websites, applications, products, or services that may be linked to, integrated with, or made available through the App. Such third-party services are governed by their own privacy policies, and we encourage you to review them before providing any personal data or using such services." },
      ],
    },
    {
      id: "personal-data-we-collect",
      title: "3. Personal Data We Collect",
      blocks: [
        { type: "paragraph", text: "Depending on how you use the App, we may collect the following categories of Personal Data." },
      ],
      subsections: [
        {
          id: "information-you-provide",
          title: "3.1 Information You Provide",
          blocks: [
            { type: "paragraph", text: "We may collect information that you voluntarily provide when using the App, including:" },
            {
              type: "list",
              items: [
                "your player nickname",
                "information you choose to provide when contacting us or submitting inquiries",
                "any other information you voluntarily provide to us",
              ],
            },
          ],
        },
        {
          id: "gameplay-information",
          title: "3.2 Gameplay Information",
          blocks: [
            { type: "paragraph", text: "We may collect information related to your use of the App, including:" },
            {
              type: "list",
              items: [
                "gameplay progress",
                "game settings and preferences",
                "selected characters, abilities, and other gameplay configurations",
                "virtual items, in-game currencies, rewards, and inventory",
                "gameplay statistics and performance metrics",
                "session information",
                "multiplayer identifiers and matchmaking information",
                "other information necessary to provide, operate, and improve the App",
              ],
            },
          ],
        },
        {
          id: "device-and-technical-information",
          title: "3.3 Device and Technical Information",
          blocks: [
            { type: "paragraph", text: "We may collect technical information about your device and your use of the App, including:" },
            {
              type: "list",
              items: [
                "device model",
                "operating system and version",
                "device language",
                "device identifiers and advertising identifiers (where available)",
                "application version",
                "crash reports and diagnostic information",
                "network and connection information",
                "performance information, such as frame rate and device performance metrics",
                "other technical information necessary to maintain, secure, and improve the App",
              ],
            },
          ],
        },
        {
          id: "information-collected-by-third-party-services",
          title: "3.4 Information Collected by Third-Party Services",
          blocks: [
            { type: "paragraph", text: "Certain information may be collected directly by our Third-Party Services when you use the App. Depending on the services used, such information may include:" },
            {
              type: "list",
              items: [
                "IP address",
                "advertising identifiers",
                "device identifiers",
                "approximate location inferred from your IP address or device settings",
                "analytics and usage information",
                "crash and diagnostic information",
                "other information processed by such Third-Party Services in accordance with their own privacy policies",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "how-we-use-personal-data",
      title: "4. How We Use Personal Data",
      blocks: [
        { type: "paragraph", text: "We use Personal Data for the following purposes:" },
        {
          type: "list",
          items: [
            "to provide, operate, maintain, and improve the App",
            "to enable multiplayer gameplay, matchmaking, and other online features",
            "to create and maintain your Anonymous Player Profile and save gameplay progress",
            "to personalize your gameplay experience, including remembering your settings and preferences",
            "to provide Virtual Items, rewards, and other in-game functionality",
            "to analyze how the App is used, monitor performance, and improve gameplay and user experience",
            "to identify, investigate, and prevent fraud, cheating, abuse, security incidents, and other unauthorized activities",
            "to diagnose technical issues, troubleshoot errors, and maintain the stability and security of the App",
            "to display, deliver, measure, and manage advertisements, including rewarded advertisements and, where permitted by applicable law, personalized advertising",
            "to communicate with you regarding the App, including responding to your requests or inquiries",
            "to comply with applicable laws, regulations, legal processes, or requests from competent authorities",
            "to establish, exercise, or defend our legal rights",
          ],
        },
        { type: "paragraph", text: "We may also use Personal Data for any other purpose that is compatible with the purposes described in this Privacy Policy or as otherwise permitted or required by applicable law." },
      ],
    },
    {
      id: "advertising",
      title: "5. Advertising",
      blocks: [
        { type: "paragraph", text: "The App may display advertisements provided by the Company and our third-party advertising partners." },
        { type: "paragraph", text: "To support the operation of the App, we and our advertising partners may process certain information, including device identifiers, advertising identifiers, IP address, approximate location, device information, and information about your interactions with advertisements." },
        { type: "paragraph", text: "We may use such information to:" },
        {
          type: "list",
          items: [
            "display advertisements within the App",
            "measure the performance and effectiveness of advertising campaigns",
            "limit the frequency of advertisements",
            "prevent advertising fraud and abuse",
            "provide rewarded advertisements and associated in-game rewards",
            "where permitted by applicable law, display advertisements that may be more relevant to your interests",
          ],
        },
        { type: "paragraph", text: "Where required by applicable law, we will request your consent before processing Personal Data for personalized advertising or other activities that require consent." },
        { type: "paragraph", text: "You can learn more about our advertising practices and your available choices in the sections \"Your Privacy Rights\" and \"Cookies and Similar Technologies\" of this Privacy Policy." },
      ],
    },
    {
      id: "analytics",
      title: "6. Analytics",
      blocks: [
        { type: "paragraph", text: "We use analytics tools and similar technologies to better understand how users interact with the App, monitor its performance, improve gameplay, identify technical issues, and enhance the overall user experience." },
        { type: "paragraph", text: "Depending on the analytics services used, we and our analytics providers may process information such as:" },
        {
          type: "list",
          items: [
            "gameplay events and interactions",
            "session information",
            "gameplay progress and statistics",
            "device and technical information",
            "crash reports and diagnostic information",
            "performance metrics",
            "other information relating to the use and performance of the App",
          ],
        },
        { type: "paragraph", text: "Analytics information helps us, among other things, to:" },
        {
          type: "list",
          items: [
            "improve gameplay mechanics and game balance",
            "evaluate the performance and stability of the App",
            "identify and fix bugs and technical issues",
            "understand how features are used",
            "improve user experience",
            "develop new features and functionality",
          ],
        },
        { type: "paragraph", text: "Where required by applicable law, we will obtain your consent before processing Personal Data for analytics purposes where such consent is required." },
      ],
    },
    {
      id: "sharing-of-personal-data",
      title: "7. Sharing of Personal Data",
      blocks: [
        { type: "paragraph", text: "We may share Personal Data with third parties where necessary to provide, operate, maintain, improve, and secure the App, to comply with legal obligations, or as otherwise described in this Privacy Policy." },
        { type: "paragraph", text: "For example, we may share Personal Data with:" },
        {
          type: "list",
          items: [
            "service providers that help us operate, host, maintain, and support the App and its infrastructure",
            "multiplayer service providers that enable online gameplay, matchmaking, and related functionality",
            "analytics providers that help us understand how the App is used, improve gameplay, and monitor performance",
            "advertising partners that provide, measure, and optimize advertisements, including rewarded advertisements and, where permitted by applicable law, personalized advertising",
            "platform providers, such as Google Play and the Apple App Store, in connection with the distribution and operation of the App",
            "professional advisors, including lawyers, auditors, accountants, and insurers, where necessary for legal, regulatory, or legitimate business purposes",
            "competent authorities, regulators, courts, or law enforcement agencies where disclosure is required by applicable law or legal process",
            "third parties involved in a merger, acquisition, financing, reorganization, sale of assets, or other corporate transaction involving the Company",
          ],
        },
        { type: "paragraph", text: "The App currently uses third-party services that may process Personal Data in accordance with their own privacy policies. These services currently include multiplayer infrastructure providers, analytics providers, crash reporting services, remote configuration services, and advertising partners." },
        { type: "paragraph", text: "We encourage you to review the privacy policies of the third-party services you interact with through the App." },
      ],
    },
    {
      id: "third-party-services",
      title: "8. Third-Party Services",
      blocks: [
        { type: "paragraph", text: "We use third-party services to support the operation, functionality, security, analytics, advertising, and performance of the App. These third-party services may process Personal Data in accordance with their own privacy policies and applicable laws." },
        { type: "paragraph", text: "Our current third-party service providers include:" },
        { type: "paragraph", text: "Photon – provides multiplayer infrastructure, matchmaking, and online gameplay services." },
        { type: "paragraph", text: "Firebase – provides crash reporting, remote configuration, and related platform services." },
        { type: "paragraph", text: "GameAnalytics – provides analytics, gameplay insights, and performance monitoring." },
        { type: "paragraph", text: "IronSource/LevelPlay – provides advertising mediation services." },
        { type: "paragraph", text: "Unity Ads – provides advertising services." },
        { type: "paragraph", text: "The third-party services used in the App may change from time to time. We encourage you to review the privacy policies of such third-party providers to better understand how they process Personal Data." },
      ],
    },
    {
      id: "international-data-transfers",
      title: "9. International Data Transfers",
      blocks: [
        { type: "paragraph", text: "Your Personal Data may be processed in countries other than the country in which you reside. These countries may have data protection laws that differ from those in your jurisdiction." },
        { type: "paragraph", text: "Where we transfer Personal Data internationally, we take appropriate measures designed to protect such data in accordance with applicable law. Such measures may include entering into appropriate contractual safeguards, relying on adequacy decisions where available, or implementing other lawful transfer mechanisms." },
        { type: "paragraph", text: "By using the App, you acknowledge that your Personal Data may be transferred to and processed in countries where we or our third-party service providers operate, subject to appropriate safeguards where required by applicable law." },
      ],
    },
    {
      id: "data-retention",
      title: "10. Data Retention",
      blocks: [
        { type: "paragraph", text: "We retain Personal Data only for as long as necessary to fulfill the purposes described in this Privacy Policy, including providing the App, complying with legal obligations, resolving disputes, enforcing our agreements, and protecting our legitimate business interests." },
        { type: "paragraph", text: "The length of time we retain Personal Data depends on the nature of the information, the purposes for which it is processed, and applicable legal requirements." },
        { type: "paragraph", text: "Certain gameplay information and preferences may be stored locally on your device. Such information may be deleted if you uninstall the App, clear the App's data, or reset your device." },
        { type: "paragraph", text: "Where Personal Data is processed by our Third-Party Services, such data may be retained in accordance with the applicable third party's privacy policy and retention practices." },
        { type: "paragraph", text: "When Personal Data is no longer required for the purposes for which it was collected, we will delete, anonymize, or otherwise securely dispose of it, unless a longer retention period is required or permitted by applicable law." },
      ],
    },
    {
      id: "security",
      title: "11. Security",
      blocks: [
        { type: "paragraph", text: "We implement appropriate technical and organizational measures designed to protect Personal Data against unauthorized access, disclosure, alteration, loss, misuse, or destruction." },
        { type: "paragraph", text: "Despite these measures, no method of transmitting or storing information electronically can be guaranteed to be completely secure. Accordingly, we cannot guarantee the absolute security of Personal Data." },
        { type: "paragraph", text: "You are responsible for helping to protect your device and maintaining the security of your own environment, including by using appropriate device security measures and keeping your operating system and software up to date." },
      ],
    },
    {
      id: "children-s-privacy",
      title: "12. Children's Privacy",
      blocks: [
        { type: "paragraph", text: "The App is not directed to children and is intended for individuals who have reached the minimum age required under the laws applicable in their jurisdiction to use the App and, where applicable, to consent to the processing of their Personal Data." },
        { type: "paragraph", text: "We do not knowingly collect Personal Data from children in violation of applicable law. If we become aware that we have collected Personal Data from a child in a manner that is not permitted by applicable law, we will take appropriate steps to delete such Personal Data or otherwise comply with applicable legal requirements." },
        { type: "paragraph", text: "If you are a parent or legal guardian and believe that your child has provided Personal Data to us in violation of applicable law, please contact us using the contact details provided in this Privacy Policy. We will review your request and take appropriate action where required." },
        { type: "paragraph", text: "Parents or legal guardians may also request that we restrict or terminate a child's access to the App where permitted or required by applicable law." },
      ],
    },
    {
      id: "cookies-and-similar-technologies",
      title: "13. Cookies and Similar Technologies",
      blocks: [
        { type: "paragraph", text: "The App is a mobile application and does not use browser cookies in the same way as a website." },
        { type: "paragraph", text: "Instead, we and our Third-Party Services may use device identifiers, advertising identifiers, locally stored data, software development kits (SDKs), and similar technologies to:" },
        {
          type: "list",
          items: [
            "provide and operate the App",
            "remember your settings and preferences",
            "enable multiplayer functionality",
            "analyze App usage and performance",
            "display, measure, and improve advertisements",
            "provide rewarded advertisements and associated in-game rewards",
            "maintain the security and integrity of the App",
          ],
        },
        { type: "paragraph", text: "Where required by applicable law, we will obtain your consent before using certain technologies for analytics, personalized advertising, or other processing activities that require consent." },
        { type: "paragraph", text: "You may be able to manage certain privacy preferences through your device settings, including limiting or resetting advertising identifiers, or by using any consent choices made available within the App where required by applicable law." },
      ],
    },
    {
      id: "your-privacy-rights",
      title: "14. Your Privacy Rights",
      blocks: [
        { type: "paragraph", text: "Depending on your location and applicable law, you may have certain rights regarding your Personal Data. These rights may include the right to access, correct, update, delete, or otherwise control the processing of your Personal Data." },
        { type: "paragraph", text: "To exercise your rights or submit a privacy-related request, please contact us using the contact details provided in this Privacy Policy. We may request additional information to verify your identity before processing your request." },
        { type: "paragraph", text: "Your available rights may vary depending on your country, state, or other jurisdiction." },
      ],
      subsections: [
        {
          id: "additional-information-for-residents-of-the-eea-united-kingdom-and-switzerland",
          title: "14.1 Additional Information for Residents of the EEA, United Kingdom and Switzerland",
          blocks: [
            { type: "paragraph", text: "If you are located in the European Economic Area (\"EEA\"), the United Kingdom, or Switzerland, and applicable data protection laws apply to the processing of your Personal Data, you may have the right to:" },
            {
              type: "list",
              items: [
                "access your Personal Data",
                "request the correction of inaccurate or incomplete Personal Data",
                "request the deletion of your Personal Data",
                "request the restriction of processing",
                "object to certain processing activities",
                "request the transfer of your Personal Data to another organization where applicable",
                "withdraw your consent at any time where processing is based on your consent (without affecting the lawfulness of processing carried out before the withdrawal)",
                "lodge a complaint with the competent data protection authority",
              ],
            },
            { type: "paragraph", text: "Where required by applicable law, we process Personal Data on one or more of the following legal bases:" },
            {
              type: "list",
              items: [
                "performance of a contract with you",
                "compliance with legal obligations",
                "our legitimate interests, provided such interests are not overridden by your rights and freedoms",
                "your consent",
              ],
            },
          ],
        },
        {
          id: "additional-information-for-california-residents",
          title: "14.2 Additional Information for California Residents",
          blocks: [
            { type: "paragraph", text: "If you are a California resident, you may have certain rights under applicable California privacy laws, including the right to know, access, correct, delete, and obtain information about the Personal Data we collect, use, disclose, or share, subject to applicable exceptions." },
            { type: "paragraph", text: "Where required by applicable law, you may also have the right to opt out of certain processing activities, including the sharing or use of Personal Data for purposes that constitute targeted or cross-context behavioral advertising under applicable law." },
            { type: "paragraph", text: "We will not unlawfully discriminate against you for exercising your privacy rights." },
          ],
        },
        {
          id: "additional-u-s-state-privacy-rights",
          title: "14.3 Additional U.S. State Privacy Rights",
          blocks: [
            { type: "paragraph", text: "Residents of certain U.S. states may have additional privacy rights under applicable state privacy laws." },
            { type: "paragraph", text: "Depending on your state of residence, these rights may include the right to access, correct, delete, or obtain a copy of your Personal Data, opt out of certain processing activities, and appeal a decision regarding your privacy request where required by applicable law." },
            { type: "paragraph", text: "We will honor applicable privacy rights in accordance with the laws that apply to your jurisdiction." },
          ],
        },
      ],
    },
    {
      id: "changes-to-this-privacy-policy",
      title: "15. Changes to this Privacy Policy",
      blocks: [
        { type: "paragraph", text: "We may update this Privacy Policy from time to time to reflect changes in the App, applicable laws, our data processing practices, or for other legitimate business reasons." },
        { type: "paragraph", text: "If we make material changes to this Privacy Policy, we will provide appropriate notice where required by applicable law. Such notice may be provided through the App, on our website (if any), through the applicable app store page, or by other reasonable means." },
        { type: "paragraph", text: "The updated Privacy Policy will become effective on the date indicated by the \"Last Updated\" date at the beginning of this Privacy Policy." },
        { type: "paragraph", text: "Your continued use of the App after the effective date of the updated Privacy Policy constitutes your acknowledgment of the revised Privacy Policy." },
      ],
    },
    {
      id: "contact-information",
      title: "16. Contact Information",
      blocks: [
        { type: "paragraph", text: "If you have any questions, concerns, requests, or complaints regarding this Privacy Policy or our processing of your Personal Data, please contact us using the details below:" },
        { type: "paragraph", text: "Company Name: UNITED4DIGITAL LTD" },
        { type: "paragraph", text: "Email: support@united4digital.com" },
        { type: "paragraph", text: "Address: 71-75 Shelton Street, Covent Garden, London, England, WC2H 9JQ" },
        { type: "paragraph", text: "If you wish to exercise your privacy rights, please include sufficient information to allow us to verify your identity and process your request in accordance with applicable law." },
        { type: "paragraph", text: "We will make reasonable efforts to respond to your request within the timeframes required by applicable law." },
      ],
    },
  ],
};
