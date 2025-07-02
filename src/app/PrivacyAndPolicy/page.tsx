import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy And Policy",
  description: "Ths Is My First Next JS project",
};

export default function PrivacyPolicy() {
  return (
    <section className="bg-gray-100 min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-bold mb-4">Privacy Policy</h1>

        <p className="mb-4">
          This privacy policy outlines how YouDiv Solutions collects, uses, and
          protects any information that you provide when using our website,
          located at you-div.netlify.app.
        </p>

        <h2 className="font-semibold mb-2">Information We Collect</h2>

        <p className="mb-4">We may collect the following information:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Your name and contact information</li>
          <li>Email address and phone number</li>
          <li>
            Demographic information such as location, preferences, and interests
          </li>
          <li>Other relevant data for customer support and analysis</li>
        </ul>

        <h2 className="font-semibold mb-2">How We Use the Information</h2>

        <p className="mb-4">
          We use the information we collect for the following purposes:
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>To improve our products and services</li>
          <li>To personalize user experience</li>
          <li>
            To send promotional emails about new products, special offers, or
            updates
          </li>
          <li>To contact users for feedback or research purposes</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="font-semibold mb-2">Security</h2>

        <p className="mb-4">
          We are committed to ensuring that your information is secure. We have
          implemented appropriate physical, electronic, and managerial
          procedures to safeguard the information we collect online.
        </p>

        <h2 className="font-semibold mb-2">Cookies</h2>

        <p className="mb-4">
          We use cookies to enhance your browsing experience. A cookie is a
          small file that helps us analyze web traffic or recognize you when you
          return to our site. Cookies allow us to tailor our content based on
          your preferences.
        </p>

        <p className="mb-4">
          You can choose to accept or decline cookies. Most web browsers
          automatically accept cookies, but you can usually modify your settings
          to decline cookies if you prefer.
        </p>

        <h2 className="font-semibold mb-2">Third-Party Links</h2>

        <p className="mb-4">
          Our website may contain links to external sites. Once you leave our
          site, we do not have control over those websites and are not
          responsible for their privacy practices. Please review their privacy
          policies before providing any data.
        </p>

        <h2 className="font-semibold mb-2">Managing Your Information</h2>

        <p className="mb-4">
          You may choose to restrict the collection or use of your personal
          information in the following ways:
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>
            You can unsubscribe from promotional emails at any time by clicking
            the unsubscribe link or contacting us.
          </li>
          <li>
            We will never sell or lease your personal information to third
            parties unless we have your permission or are required by law.
          </li>
          <li>
            You can request a copy of the personal data we hold about you by
            emailing us.
          </li>
          <li>
            If any information we hold is incorrect, you can request it to be
            corrected or deleted.
          </li>
        </ul>

        <h2 className="font-semibold mb-2">Contact Us</h2>

        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>
            Email:{" "}
            <a
              href="mailto:youssfoficil@gmail.com"
              className="text-blue-600 underline"
            >
              youssfoficil@gmail.com
            </a>
          </li>
          <li>Phone: +212 600-123456</li>
          <li>Company: YouDiv Solutions</li>
          <li>Address: Avenue Mohamed V, Casablanca, Morocco</li>
        </ul>

        <p className="mb-4 text-sm text-gray-600">
          This privacy policy was last updated on June 22, 2025.
        </p>
      </div>
    </section>
  );
}
