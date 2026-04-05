import Link from "next/link";

export default function DevHomePage() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="mx-auto max-w-4xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900">Development Tools</h1>
        <p className="mt-2 text-sm text-gray-600">
          Internal preview tools for local development only.
        </p>

        <div className="mt-6 space-y-3">
          <Link
            href="/dev/email-signature"
            className="block rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50"
          >
            Email Signature
          </Link>
        </div>
      </div>
    </main>
  );
}