import type { LegalDocumentContent } from "@/app/types/legalDocument";

export const termsOfUseContent: LegalDocumentContent = {
  title: "Terms of Use",
  lastUpdated: "07.09.2026",
  intro: [
    { type: "paragraph", text: "Welcome to Hook Wars (the \"App\"), an online multiplayer game operated by UNITED4DIGITAL LTD, legal address: 71-75 Shelton Street, Covent Garden, London, England, WC2H 9JQ, registration number: 15785227 (\"Company,\" \"we,\" \"our,\" or \"us\")." },
    { type: "paragraph", text: "These Terms of Use (\"Terms\") govern your access to and use of the App, including any related content, features, updates, and services made available through the App." },
    { type: "paragraph", text: "By downloading, installing, accessing, or using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use the App." },
    { type: "paragraph", text: "Our collection and processing of personal data are governed by our Privacy Policy, which forms an integral part of your use of the App." },
  ],
  sections: [
    {
      id: "definitions",
      title: "1. Definitions",
      blocks: [
        { type: "paragraph", text: "For the purposes of these Terms, the following capitalized terms shall have the meanings set forth below:" },
        { type: "paragraph", text: "\"App\" means the Hook Wars mobile game, including all software, features, functionality, content, updates, patches, and related services made available by the Company." },
        { type: "paragraph", text: "\"Player\", \"User\", or \"you\" means any individual who downloads, installs, accesses, or uses the App." },
        { type: "paragraph", text: "\"Services\" means the App and all related services, functionality, multiplayer features, content, support, websites (if any), and other services provided by or on behalf of the Company." },
        { type: "paragraph", text: "\"Anonymous Player Profile\" means the locally generated player profile associated with your device, including your nickname, locally stored game progress, gameplay settings, multiplayer identifiers, and other locally stored information used to provide and operate the App." },
        { type: "paragraph", text: "\"Virtual Items\" means any virtual currencies, energy, characters, abilities, skins, rewards, consumable items, unlockable content, or other digital items made available within the App, whether earned through gameplay, advertisements, promotional activities, or otherwise. Virtual Items have no monetary value and do not constitute real-world property or currency." },
        { type: "paragraph", text: "\"Third-Party Services\" means any products, software development kits (SDKs), advertising networks, analytics providers, multiplayer infrastructure, cloud services, platform providers, or other services operated by third parties that are integrated with or used in connection with the App." },
      ],
    },
    {
      id: "eligibility-and-acceptance-of-the-terms",
      title: "2. Eligibility and Acceptance of the Terms",
      blocks: [
        { type: "paragraph", text: "By downloading, installing, accessing, or using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms." },
        { type: "paragraph", text: "You may use the App only if you meet the minimum age requirements under the laws applicable to your jurisdiction to use the App and, where applicable, to consent to the processing of your personal data. If you have not reached such age, you may use the App only with the consent or involvement of your parent or legal guardian, where required by applicable law." },
        { type: "paragraph", text: "By using the App, you represent and warrant that:" },
        {
          type: "list",
          items: [
            "you meet the applicable legal age requirements to use the App",
            "where required by applicable law, you have obtained any necessary consent or authorization from your parent or legal guardian",
            "all information you provide in connection with your use of the App, if any, is accurate and not misleading",
            "you will comply with these Terms and all applicable laws and regulations while using the App",
          ],
        },
        { type: "paragraph", text: "If you do not meet the applicable eligibility requirements, you must not access or use the App." },
        { type: "paragraph", text: "We reserve the right to suspend, restrict, or terminate your access to the App if we reasonably believe that you do not satisfy the eligibility requirements set out in these Terms or have otherwise violated these Terms." },
        { type: "paragraph", text: "We may also suspend or terminate your access to the App, or delete or reset your Anonymous Player Profile, upon a reasonable request from your parent or legal guardian where we determine that such person is legally authorized to act on your behalf under applicable law." },
      ],
    },
    {
      id: "license-to-use-the-app",
      title: "3. License to Use the App",
      blocks: [
        { type: "paragraph", text: "Subject to your compliance with these Terms, the Company grants you a limited, personal, non-exclusive, non-transferable, non-sublicensable, and revocable license to download, install, access, and use the App solely for your personal, non-commercial entertainment purposes." },
        { type: "paragraph", text: "This license does not transfer to you any ownership or other intellectual property rights in or to the App or any part thereof. All rights not expressly granted under these Terms are reserved by the Company and its licensors." },
        { type: "paragraph", text: "You may not, directly or indirectly:" },
        {
          type: "list",
          items: [
            "copy, reproduce, modify, adapt, translate, or create derivative works based on the App",
            "distribute, sell, lease, rent, sublicense, assign, or otherwise commercially exploit the App or any part of it",
            "reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code, underlying ideas, algorithms, or structure of the App, except to the extent such restrictions are prohibited by applicable law",
            "remove, alter, or obscure any copyright, trademark, or other proprietary notices contained in the App",
            "use the App in any manner that could interfere with its operation, security, integrity, or availability",
            "use bots, automation tools, cheats, hacks, exploits, scripts, or other unauthorized software or methods designed to gain an unfair advantage or manipulate gameplay",
            "access or use the App for any unlawful purpose or in violation of applicable laws or regulations",
          ],
        },
        { type: "paragraph", text: "The Company may update, modify, suspend, discontinue, or restrict access to any part of the App at any time, with or without notice, to the extent permitted by applicable law." },
        { type: "paragraph", text: "Your license to use the App automatically terminates if you violate these Terms or if your access to the App is suspended or terminated by the Company." },
      ],
    },
    {
      id: "player-profiles-accounts-and-gameplay",
      title: "4. Player Profiles, Accounts and Gameplay",
      blocks: [
        { type: "paragraph", text: "The App does not require you to create a registered user account in order to access basic gameplay. When you first access the App, an Anonymous Player Profile may be automatically created and associated with your device." },
        { type: "paragraph", text: "You may have the option to create or sign into a registered account. A registered account may allow certain gameplay progress, Virtual Items, purchase-related entitlements, settings, and other game data to be associated with your account and restored when you sign in on a supported device." },
        { type: "paragraph", text: "If you choose to continue using the App without creating or signing into a registered account, certain information may remain associated only with your device or Anonymous Player Profile and may be lost if you uninstall the App, clear App data, reset, lose, or replace your device." },
        { type: "paragraph", text: "You are responsible for maintaining the confidentiality and security of your account credentials and for activities conducted through your account. You must provide accurate information where required and must not allow another person to use your account in violation of these Terms." },
        { type: "paragraph", text: "Your player profile or account may include, among other things, your player nickname, gameplay progress, gameplay settings, Virtual Items, statistics, multiplayer identifiers, purchase-related entitlements, and other information necessary to provide and operate the App." },
        { type: "paragraph", text: "You are responsible for maintaining an appropriate player nickname. You may not use a nickname that:" },
        {
          type: "list",
          items: [
            "infringes the intellectual property or other rights of any person or entity",
            "is unlawful, offensive, abusive, defamatory, hateful, discriminatory, or otherwise inappropriate",
            "impersonates another person or entity or is intended to mislead other players; or",
            "otherwise violates these Terms or applicable law.",
          ],
        },
        { type: "paragraph", text: "We reserve the right, at our sole discretion, to modify, replace, remove, or require you to change your nickname if we reasonably believe that it violates these Terms or may negatively affect the App or other users." },
        { type: "paragraph", text: "The App is an online multiplayer game. Certain features require an active Internet connection and the availability of third-party services. We do not guarantee that multiplayer functionality, matchmaking, game sessions, or other online features will always be available, uninterrupted, secure, or error-free." },
        { type: "paragraph", text: "From time to time, we may modify gameplay mechanics, characters, abilities, maps, matchmaking systems, game balance, rewards, progression systems, virtual items, or any other aspect of the App in order to improve gameplay, maintain security, comply with legal requirements, or for other legitimate business purposes." },
        { type: "paragraph", text: "Unless otherwise required by applicable law, we do not guarantee the continued availability of any particular game mode, feature, character, virtual item, reward, statistic, or gameplay progression." },
        { type: "paragraph", text: "You acknowledge that your gameplay progress, statistics, virtual items, and other gameplay-related data may change, become unavailable, or be lost due to updates, maintenance, technical issues, or other circumstances." },
      ],
    },
    {
      id: "virtual-items-and-in-app-purchases",
      title: "5. Virtual Items and In-App Purchases",
      blocks: [
        { type: "paragraph", text: "The App may include virtual currencies, including Gems and Coins, characters, weapons, skins, rewards, Battle Passes, advertising-free features, special offers, bundles, consumable items, unlockable content, and other digital items or features (collectively, \"Virtual Items\")." },
        { type: "paragraph", text: "Virtual Items may be purchased for real money, obtained using Virtual Currency, earned through gameplay, received as rewards, or otherwise made available within the App. The availability and methods of obtaining particular Virtual Items may vary." },
        { type: "paragraph", text: "Virtual Items and Virtual Currency are licensed, not sold, and are provided solely for use within the App for personal entertainment purposes. They have no real-world monetary value and may not be redeemed for money, exchanged for money or other items of real-world value, transferred between users, sold, or traded outside the App, except where expressly permitted by the Company or required by applicable law." },
        { type: "paragraph", text: "Certain Virtual Items or Virtual Currency may be consumable or may be used to acquire other Virtual Items. Other Virtual Items, such as characters, skins, or certain features, may remain available once unlocked, subject to these Terms and the technical limitations described below." },
      ],
      subsections: [
        {
          id: "in-app-purchases",
          title: "5.1 In-App Purchases",
          blocks: [
            { type: "paragraph", text: "The App may allow you to purchase Virtual Items, Virtual Currency, Battle Passes, advertising-free features, Special Offers, bundles, and other digital content using real money." },
            { type: "paragraph", text: "All purchases are processed exclusively through the platform from which you obtained the App, including Google Play or the Apple App Store, as applicable. We do not directly process your payment card information." },
            { type: "paragraph", text: "Purchases are also subject to the applicable platform's terms, conditions, billing rules, and policies." },
            { type: "paragraph", text: "Prices, available products, quantities, bundles, promotional offers, and other purchase terms may vary by platform, country, currency, or time and may be changed from time to time. The price and applicable terms displayed through the relevant platform at the time of purchase will apply to that transaction." },
          ],
        },
        {
          id: "virtual-currency",
          title: "5.2 Virtual Currency",
          blocks: [
            { type: "paragraph", text: "The App may include Virtual Currency, including Gems and Coins." },
            { type: "paragraph", text: "Depending on the type of Virtual Currency, it may be purchased, earned through gameplay, received as a reward, or otherwise obtained within the App." },
            { type: "paragraph", text: "Virtual Currency may be used only within the App and only for the purposes made available by the Company. Virtual Currency has no cash value and cannot be redeemed or exchanged for real money or transferred, sold, or traded outside the App." },
            { type: "paragraph", text: "Virtual Currency purchased for real money does not expire merely as a result of the passage of time. However, access to locally stored Virtual Currency may be lost if the App is deleted, App data is cleared, or the user changes devices without using a registered account or another supported method of preserving game data." },
          ],
        },
        {
          id: "accounts-game-data-and-restoration",
          title: "5.3 Accounts, Game Data and Restoration",
          blocks: [
            { type: "paragraph", text: "You may use certain features of the App without creating a registered account. However, some game data, including certain Virtual Items, Virtual Currency, purchase-related entitlements, and gameplay progress, may be stored locally or associated with an Anonymous Player Profile." },
            { type: "paragraph", text: "If you use the App without creating or signing into a registered account, we may be unable to restore certain game data, consumable Virtual Items, Virtual Currency, or gameplay progress if you uninstall the App, clear App data, lose or replace your device, or otherwise lose access to locally stored data." },
            { type: "paragraph", text: "Creating and using a registered account may allow eligible game data and purchases to be associated with your account and restored when you sign in on a supported device." },
            { type: "paragraph", text: "Certain purchases may also be restorable through the applicable platform where supported. The ability to restore a particular purchase depends on the type of purchase, the platform's rules, the user's account status, and the technical functionality available in the App." },
          ],
        },
        {
          id: "refunds",
          title: "5.4 Refunds",
          blocks: [
            { type: "paragraph", text: "Purchases made through Google Play or the Apple App Store are subject to the applicable platform's payment and refund policies and applicable law." },
            { type: "paragraph", text: "Refund requests should be submitted and will be handled in accordance with the procedures and policies of the platform through which the purchase was made." },
            { type: "paragraph", text: "Where a purchase is refunded, cancelled, reversed, charged back, or otherwise invalidated, we may revoke or adjust the corresponding Virtual Items, Virtual Currency, features, benefits, or entitlements to the extent technically possible and permitted by applicable law." },
            { type: "paragraph", text: "Nothing in these Terms limits any refund, cancellation, withdrawal, or other consumer right that cannot lawfully be excluded or restricted." },
          ],
        },
        {
          id: "changes-to-virtual-items-and-the-in-game-economy",
          title: "5.5 Changes to Virtual Items and the In-Game Economy",
          blocks: [
            { type: "paragraph", text: "We may modify the availability, characteristics, functionality, pricing, quantity, exchange rates, rewards, progression requirements, or other aspects of Virtual Items and the in-game economy from time to time for gameplay balancing, technical, promotional, legal, security, or legitimate business reasons." },
            { type: "paragraph", text: "Such changes may include introducing or discontinuing Virtual Items, changing the amount of Virtual Currency included in an offer, modifying the Virtual Currency cost of an item, or changing the content of Special Offers or bundles." },
            { type: "paragraph", text: "Any changes will be subject to applicable law and will not limit any mandatory consumer rights." },
            { type: "paragraph", text: "You acknowledge that you acquire no ownership or proprietary rights in Virtual Items or Virtual Currency beyond the limited right to use them within the App in accordance with these Terms." },
          ],
        },
      ],
    },
    {
      id: "advertisements",
      title: "6. Advertisements",
      blocks: [
        { type: "paragraph", text: "The App may display advertisements, promotional content, sponsored content, or other commercial communications provided by the Company or third-party advertising partners." },
        { type: "paragraph", text: "Certain advertisements may be optional and may provide in-game rewards, Virtual Items, or other benefits if you choose to view them." },
        { type: "paragraph", text: "Advertisements displayed in the App may be delivered, measured, or personalized by third-party advertising partners in accordance with applicable law and our Privacy Policy." },
        { type: "paragraph", text: "The Company does not endorse, control, or assume responsibility for any third-party advertisements or for any products, services, or content promoted by third parties through the App." },
        { type: "paragraph", text: "The availability, frequency, format, content, and any associated rewards of advertisements may be modified, limited, suspended, or discontinued by the Company at any time, to the extent permitted by applicable law." },
      ],
    },
    {
      id: "acceptable-use",
      title: "7. Acceptable Use",
      blocks: [
        { type: "paragraph", text: "When using the App, you agree to act responsibly and in compliance with these Terms and all applicable laws and regulations." },
        { type: "paragraph", text: "You must not:" },
        {
          type: "list",
          items: [
            "use the App for any unlawful, fraudulent, or unauthorized purpose",
            "interfere with, disrupt, or compromise the operation, security, integrity, or availability of the App or any related systems or networks",
            "use cheats, bots, automation tools, scripts, exploits, hacks, mods, or any unauthorized software or methods intended to gain an unfair advantage or manipulate gameplay",
            "attempt to circumvent or interfere with the App's technical or security measures",
            "impersonate another person or entity or otherwise misrepresent your identity",
            "use an offensive, abusive, misleading, or otherwise inappropriate nickname or other user identifier",
            "harass, threaten, abuse, or otherwise engage in conduct that negatively affects other users",
            "exploit bugs, glitches, or unintended game mechanics for your own benefit or disclose such exploits to others instead of promptly reporting them to the Company",
            "use the App for commercial purposes without the Company's prior written consent; or",
            "encourage, assist, or enable any other person to engage in conduct that violates these Terms.",
          ],
        },
        { type: "paragraph", text: "If you become aware of a vulnerability, bug, security issue, or other unintended behavior within the App, you agree to report it to the Company as soon as reasonably practicable and not to exploit or publicly disclose it in a manner that could harm the App, the Company, or other users." },
        { type: "paragraph", text: "The Company reserves the right to investigate any suspected violation of these Terms and to take any action it considers appropriate, including restricting, suspending, or terminating access to the App." },
      ],
    },
    {
      id: "intellectual-property",
      title: "8. Intellectual Property",
      blocks: [
        { type: "paragraph", text: "The App, including all software, source code, technology, gameplay mechanics, audiovisual content, artwork, graphics, animations, characters, designs, user interface, music, sound effects, text, trademarks, logos, and all other content and materials made available through the App, together with all intellectual property rights therein, are owned by or licensed to the Company and are protected by applicable intellectual property and other laws." },
        { type: "paragraph", text: "Except for the limited license expressly granted under these Terms, nothing in these Terms grants you any ownership or other rights in or to the App or any part thereof." },
        { type: "paragraph", text: "You may not copy, reproduce, distribute, publicly display, publicly perform, modify, create derivative works from, or otherwise exploit any part of the App except as expressly permitted by these Terms or with the Company's prior written consent." },
        { type: "paragraph", text: "Any feedback, suggestions, ideas, proposals, or other comments you voluntarily provide regarding the App (\"Feedback\") may be used by the Company without restriction or obligation to compensate you, and you hereby grant the Company a worldwide, perpetual, irrevocable, royalty-free, transferable, sublicensable license to use, reproduce, modify, adapt, publish, distribute, and otherwise exploit such Feedback for any lawful purpose." },
      ],
    },
    {
      id: "third-party-services-and-platforms",
      title: "9. Third-Party Services and Platforms",
      blocks: [
        { type: "paragraph", text: "The App may integrate with or rely upon Third-Party Services in order to provide certain functionality, including, without limitation, multiplayer features, analytics, advertising, crash reporting, remote configuration, content sharing, platform services, and other technical or operational capabilities." },
        { type: "paragraph", text: "Your use of certain features of the App may be subject to the terms, conditions, and privacy policies of the applicable third-party providers. The Company encourages you to review such terms and policies where applicable." },
        { type: "paragraph", text: "The Company does not own or control Third-Party Services and, to the fullest extent permitted by applicable law, is not responsible for their availability, security, functionality, content, acts, omissions, or practices." },
        { type: "paragraph", text: "The availability of certain features of the App may depend on Third-Party Services. The Company does not guarantee that any Third-Party Services will remain available, uninterrupted, compatible, or error-free." },
        { type: "paragraph", text: "Third-Party Services may be modified, suspended, or discontinued by their respective providers at any time. The Company shall not be liable for any interruption, limitation, or unavailability of the App resulting from the acts or omissions of any third-party provider." },
      ],
    },
    {
      id: "updates-and-availability",
      title: "10. Updates and Availability",
      blocks: [
        { type: "paragraph", text: "The Company may, from time to time, update, modify, maintain, improve, suspend, or discontinue the App or any part of it, including its features, functionality, gameplay mechanics, game modes, characters, abilities, maps, matchmaking systems, progression systems, Virtual Items, rewards, content, or technical requirements." },
        { type: "paragraph", text: "Such changes may be made for various reasons, including to improve gameplay, maintain the security or stability of the App, comply with applicable law, address technical issues, prevent abuse or cheating, or support the Company's legitimate business interests." },
        { type: "paragraph", text: "The Company does not guarantee that any particular feature, game mode, Virtual Item, reward, or other content will remain available for any specific period of time." },
        { type: "paragraph", text: "From time to time, the App may be unavailable due to scheduled or emergency maintenance, technical issues, updates, third-party service interruptions, or other circumstances beyond the Company's reasonable control." },
        { type: "paragraph", text: "To the fullest extent permitted by applicable law, the Company shall not be liable for any interruption, modification, suspension, or discontinuation of the App or any part thereof." },
      ],
    },
    {
      id: "suspension-and-termination",
      title: "11. Suspension and Termination",
      blocks: [
        { type: "paragraph", text: "The Company may, at its sole discretion and to the fullest extent permitted by applicable law, suspend, restrict, or terminate your access to the App, temporarily or permanently, with or without prior notice, if the Company reasonably believes that:" },
        {
          type: "list",
          items: [
            "you have violated these Terms or any applicable law",
            "your use of the App poses a security, legal, or technical risk to the Company, the App, Third-Party Services, or other users",
            "you have engaged in cheating, fraud, exploitation of bugs or vulnerabilities, unauthorized automation, or other conduct intended to obtain an unfair advantage",
            "you have interfered with or attempted to interfere with the proper operation of the App; or",
            "such action is otherwise necessary to protect the App, the Company, its users, or to comply with applicable law or a lawful request from a competent authority.",
          ],
        },
        { type: "paragraph", text: "Where appropriate, the Company may, in addition to or instead of suspending or terminating your access to the App:" },
        {
          type: "list",
          items: [
            "remove or require you to change your nickname",
            "reset or remove gameplay progress, statistics, or Virtual Items associated with your use of the App",
            "restrict access to specific features or functionality of the App; or",
            "take any other reasonable enforcement action permitted by applicable law.",
          ],
        },
        { type: "paragraph", text: "You may stop using the App at any time by discontinuing its use and uninstalling it from your device." },
        { type: "paragraph", text: "Termination or suspension of your access to the App shall not affect any rights, obligations, or remedies that have accrued prior to such termination or suspension, nor shall it affect any provisions of these Terms that by their nature are intended to survive termination." },
      ],
    },
    {
      id: "disclaimer-of-warranties",
      title: "12. Disclaimer of Warranties",
      blocks: [
        { type: "paragraph", text: "To the fullest extent permitted by applicable law, the App is provided on an \"as is\" and \"as available\" basis, without warranties of any kind, whether express, implied, statutory, or otherwise." },
        { type: "paragraph", text: "The Company does not warrant or represent that:" },
        {
          type: "list",
          items: [
            "the App will always be available, uninterrupted, secure, or error-free",
            "defects or errors will be corrected within any particular timeframe",
            "the App or any content made available through it will be accurate, complete, or up to date",
            "the App will meet your expectations or requirements; or",
            "the App will be compatible with every device, operating system, network, or software configuration.",
          ],
        },
        { type: "paragraph", text: "You acknowledge that your use of the App is at your own risk." },
        { type: "paragraph", text: "Nothing in these Terms excludes, limits, or modifies any warranty or other right that cannot be excluded or limited under applicable law." },
      ],
    },
    {
      id: "limitation-of-liability",
      title: "13. Limitation of Liability",
      blocks: [
        { type: "paragraph", text: "To the fullest extent permitted by applicable law, the Company and its affiliates, directors, officers, employees, licensors, partners, and service providers shall not be liable for any indirect, incidental, consequential, special, exemplary, or punitive damages, or for any loss of profits, revenue, business, goodwill, data, or other intangible losses arising out of or relating to your access to or use of, or inability to access or use, the App." },
        { type: "paragraph", text: "Without limiting the foregoing, the Company shall not be liable for any loss or damage arising from:" },
        {
          type: "list",
          items: [
            "interruptions, delays, or unavailability of the App",
            "errors, bugs, defects, or technical malfunctions",
            "the loss of gameplay progress, statistics, Virtual Items, or other in-game data",
            "unauthorized access to or use of the App by third parties",
            "failures or interruptions of Third-Party Services",
            "your use of or reliance on any third-party advertisements, products, services, or content; or",
            "any acts or omissions of other users.",
          ],
        },
        { type: "paragraph", text: "Nothing in these Terms excludes or limits the Company's liability for fraud, fraudulent misrepresentation, gross negligence, willful misconduct, death or personal injury caused by the Company's negligence, or any other liability that cannot be excluded or limited under applicable law." },
        { type: "paragraph", text: "Where applicable law does not permit the exclusion of certain warranties or the limitation of certain liabilities, some of the above limitations may not apply to you." },
      ],
    },
    {
      id: "indemnification",
      title: "14. Indemnification",
      blocks: [
        { type: "paragraph", text: "To the fullest extent permitted by applicable law, you agree to defend, indemnify, and hold harmless the Company, its affiliates, directors, officers, employees, licensors, partners, and service providers from and against any claims, actions, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to:" },
        {
          type: "list",
          items: [
            "your violation of these Terms or applicable law",
            "your misuse of the App",
            "your infringement of any intellectual property, privacy, or other rights of any third party; or",
            "your intentional misconduct or fraudulent acts.",
          ],
        },
        { type: "paragraph", text: "The Company reserves the right, at its own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, and you agree to cooperate with the Company in the defense of such matter." },
      ],
    },
    {
      id: "changes-to-the-terms",
      title: "15. Changes to the Terms",
      blocks: [
        { type: "paragraph", text: "The Company may revise or update these Terms from time to time to reflect changes in the App, applicable law, our business practices, or for other legitimate business reasons." },
        { type: "paragraph", text: "If we make material changes to these Terms, we will provide appropriate notice as required by applicable law. Such notice may be provided through the App, on the applicable app store page, on our website (if any), or by other reasonable means." },
        { type: "paragraph", text: "The updated Terms will become effective on the date specified in the revised version. Your continued access to or use of the App after the effective date of the updated Terms constitutes your acceptance of the revised Terms." },
        { type: "paragraph", text: "If you do not agree to the updated Terms, you must stop using the App and uninstall it from your device." },
      ],
    },
    {
      id: "governing-law-and-dispute-resolution",
      title: "16. Governing Law and Dispute Resolution",
      blocks: [
        { type: "paragraph", text: "These Terms and any dispute, claim, or non-contractual obligation arising out of or in connection with these Terms or the App shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of laws principles." },
        { type: "paragraph", text: "If a dispute arises between you and the Company, the parties agree to first attempt to resolve the dispute amicably through good-faith negotiations." },
        { type: "paragraph", text: "If the dispute cannot be resolved amicably, it shall be submitted to the competent courts of England and Wales, unless applicable consumer protection laws provide you with the right to bring proceedings before the courts of your country of residence or otherwise require a different jurisdiction." },
        { type: "paragraph", text: "Nothing in these Terms shall limit or exclude any rights or remedies that you may have under mandatory consumer protection laws applicable in your jurisdiction." },
      ],
    },
    {
      id: "contact-information",
      title: "17. Contact Information",
      blocks: [
        { type: "paragraph", text: "If you have any questions, concerns, or requests regarding these Terms or the App, please contact us using the details below:" },
        { type: "paragraph", text: "Company Name: UNITED4DIGITAL LTD" },
        { type: "paragraph", text: "Email: support@united4digital.com" },
        { type: "paragraph", text: "Address: 71-75 Shelton Street, Covent Garden, London, England, WC2H 9JQ" },
        { type: "paragraph", text: "We will make reasonable efforts to respond to your inquiry as soon as practicable." },
      ],
    },
  ],
};
