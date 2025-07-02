import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms And Conditions",
  description: "Ths Is My First Next JS project",
};

export default function TermsAndConditions() {
  return (
    <section className="bg-gray-100 min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-bold mb-4">Terms & Conditions</h1>

        <p className="mb-4">
          Welcome to YouDiv! These terms and conditions outline the rules and
          regulations for the use of YouDiv Solutions&apos;s Website, located at
          you-div.netlify.app.
        </p>

        <p className="mb-4">
          By accessing this website, we assume you accept these terms and
          conditions. Do not continue to use YouDiv if you do not agree to all
          of the terms stated on this page.
        </p>

        <h2 className="font-semibold mb-2">1. Use of the Website</h2>
        <p className="mb-4">
          You agree to use YouDiv only for lawful purposes and in a way that
          does not infringe the rights of others or restrict their use and
          enjoyment of the site.
        </p>

        <h2 className="font-semibold mb-2">2. Intellectual Property Rights</h2>
        <p className="mb-4">
          Unless otherwise stated, YouDiv Solutions and/or its licensors own the
          intellectual property rights for all material on YouDiv. All
          intellectual property rights are reserved.
        </p>

        <h2 className="font-semibold mb-2">3. User Accounts</h2>
        <p className="mb-4">
          If you create an account on our platform, you are responsible for
          maintaining its security and for all activities that occur under the
          account.
        </p>

        <h2 className="font-semibold mb-2">4. Limitation of Liability</h2>
        <p className="mb-4">
          In no event shall YouDiv Solutions be liable for any direct, indirect,
          incidental, or consequential damages resulting from the use or
          inability to use our website or services.
        </p>

        <h2 className="font-semibold mb-2">5. External Links</h2>
        <p className="mb-4">
          Our website may contain links to third-party websites. We are not
          responsible for the content or privacy policies of these sites and
          encourage you to review their terms independently.
        </p>

        <h2 className="font-semibold mb-2">6. Account Termination</h2>
        <p className="mb-4">
          We may suspend or terminate your access to our platform without prior
          notice if you breach any of these terms and conditions.
        </p>

        <h2 className="font-semibold mb-2">7. Governing Law</h2>
        <p className="mb-4">
          These terms are governed by and interpreted in accordance with the
          laws of the Kingdom of Morocco. Any disputes will be handled in
          Moroccan courts.
        </p>

        <h2 className="font-semibold mb-2">8. Changes to Terms</h2>
        <p className="mb-4">
          YouDiv Solutions reserves the right to revise these terms at any time.
          By using this website, you agree to be bound by the current version of
          these terms.
        </p>

        <h2 className="font-semibold mb-2">9. Contact Information</h2>
        <p className="mb-4">
          If you have any questions about our Terms & Conditions, you can
          contact us:
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
          Last updated: June 22, 2025
        </p>
      </div>
    </section>
  );
}
