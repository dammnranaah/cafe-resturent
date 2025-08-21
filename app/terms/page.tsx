export const metadata = {
  title: 'Terms of Service • Rana Café',
  description: 'The terms governing use of the Rana Café website and services.',
}

export default function TermsPage() {
  return (
    <main className="container pt-28 md:pt-32 pb-12">
      <h1 className="font-display text-3xl md:text-4xl mb-3">Terms of Service</h1>
      <p className="text-coffee-700/80 mb-8 max-w-3xl">
        By accessing or using the Rana Café website, you agree to the following terms and conditions.
      </p>

      <section className="prose max-w-3xl prose-coffee">
        <h2>Use of Service</h2>
        <p>
          You agree to use this site in compliance with applicable laws. You may not attempt to disrupt or
          compromise the security or availability of the site.
        </p>

        <h2>Reservations</h2>
        <p>
          Submitting a reservation request does not guarantee availability. We will confirm via email or phone.
        </p>

        <h2>Content</h2>
        <p>
          All content on this site, including text, graphics, and branding, is owned by Rana Café or used with
          permission and may not be reproduced without consent.
        </p>

        <h2>Liability</h2>
        <p>
          The website is provided "as is" without warranties of any kind. Rana Café is not liable for any
          indirect or consequential damages arising from your use of the site.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these Terms from time to time. Continued use of the site after changes constitutes
          acceptance of the revised terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Contact <a href="mailto:support@ranacafe.com">support@ranacafe.com</a>.
        </p>
      </section>
    </main>
  )
}
