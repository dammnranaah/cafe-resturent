export const metadata = {
  title: 'Privacy Policy • Rana Café',
  description: 'How Rana Café collects, uses, and protects your information.',
}

export default function PrivacyPage() {
  return (
    <main className="container pt-28 md:pt-32 pb-12">
      <h1 className="font-display text-3xl md:text-4xl mb-3">Privacy Policy</h1>
      <p className="text-coffee-700/80 mb-8 max-w-3xl">
        This Privacy Policy explains how Rana Café ("we", "us") collects, uses, and protects your
        information when you visit our website or make a reservation.
      </p>

      <section className="prose max-w-3xl prose-coffee">
        <h2>Information We Collect</h2>
        <p>
          We collect information you provide directly, such as your name, email, phone, reservation details,
          and any messages you submit via forms. We may also collect limited technical data like your browser
          type and approximate location for analytics and site reliability.
        </p>

        <h2>How We Use Information</h2>
        <ul>
          <li>To process and confirm reservations</li>
          <li>To respond to inquiries and provide customer support</li>
          <li>To improve our website, services, and user experience</li>
        </ul>

        <h2>Sharing</h2>
        <p>
          We do not sell your personal information. We may share data with trusted providers who assist in
          operating our website or processing reservations, under confidentiality obligations.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain personal data only as long as necessary to fulfill the purposes above or to comply with
          legal obligations.
        </p>

        <h2>Your Choices</h2>
        <p>
          You may request access, correction, or deletion of your personal information by contacting
          <a href="mailto:support@ranacafe.com"> support@ranacafe.com</a>.
        </p>

        <h2>Contact</h2>
        <p>
          Rana Café, Mirpur Rd, Dhaka 1205 · Email: <a href="mailto:support@ranacafe.com">support@ranacafe.com</a>
        </p>
      </section>
    </main>
  )
}
