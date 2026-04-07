import DevTools from "./_ui/DevTools";
// app/(pages)/dev/page.tsx
export default function DevHomePage() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <DevTools href="/dev/email-signature" />
    </main>
  );
}
