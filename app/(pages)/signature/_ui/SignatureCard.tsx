"use client";

import { useRef, useState } from "react";

type Signature = {
  personName: string;
  role: string;
  companyName: string;
  phone: string;
  email: string;
  address: string;
  website: string;
  logoUrl: string;
  primaryColor: string;
  secondaryColor: string;
};

type SignatureCardProps = {
  signature: Signature;
  socialLinks: [string, string][];
};

export default function SignatureCard({
  signature,
  socialLinks,
}: SignatureCardProps) {
  const previewRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyPreview = async () => {
    const node = previewRef.current;
    if (!node) return;

    try {
      const html = node.innerHTML;
      const text = node.innerText;

      if ("ClipboardItem" in window) {
        const item = new ClipboardItem({
          "text/html": new Blob([html], { type: "text/html" }),
          "text/plain": new Blob([text], { type: "text/plain" }),
        });

        await navigator.clipboard.write([item]);
      } else {
        await navigator.clipboard.writeText(text);
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy signature preview", error);
    }
  };

  const labelStyle: React.CSSProperties = {
    fontWeight: 700,
    color: signature.primaryColor,
  };

  const linkStyle: React.CSSProperties = {
    color: signature.primaryColor,
    textDecoration: "none",
  };

  return (
    <div className="mx-auto max-w-4xl rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Email Signature</h1>
          <p className="mt-2 text-sm text-gray-600">
            Copy the preview block and paste it into your email signature
            editor.
          </p>
        </div>

        <button
          type="button"
          onClick={handleCopyPreview}
          className="rounded-xl px-4 py-2 text-sm font-semibold"
          style={{
            backgroundColor: signature.secondaryColor,
            color: signature.primaryColor,
            border: `1px solid ${signature.secondaryColor}`,
          }}
        >
          {copied ? "Copied" : "Copy preview"}
        </button>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
        <div ref={previewRef}>
          <table
            role="presentation"
            cellPadding={0}
            cellSpacing={0}
            style={{
              borderCollapse: "collapse",
              width: "100%",
              maxWidth: "620px",
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              lineHeight: "1.5",
              color: signature.primaryColor,
            }}
          >
            <tbody>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    height: "4px",
                    backgroundColor: signature.secondaryColor,
                    fontSize: "0",
                    lineHeight: "0",
                    padding: "0",
                  }}
                >
                  &nbsp;
                </td>
              </tr>

              <tr>
                <td
                  colSpan={2}
                  style={{
                    height: "14px",
                    fontSize: "0",
                    lineHeight: "0",
                    padding: "0",
                  }}
                >
                  &nbsp;
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    width: "84px",
                    verticalAlign: "top",
                    paddingRight: "16px",
                  }}
                >
                  <img
                    src={signature.logoUrl}
                    alt={`${signature.companyName} logo`}
                    width="64"
                    height="64"
                    style={{
                      display: "block",
                      width: "64px",
                      height: "64px",
                      objectFit: "contain",
                      borderRadius: "10px",
                    }}
                  />
                </td>

                <td style={{ verticalAlign: "top" }}>
                  <div
                    style={{
                      fontSize: "22px",
                      lineHeight: "1.15",
                      fontWeight: 700,
                      color: signature.primaryColor,
                    }}
                  >
                    {signature.personName}
                  </div>

                  <div
                    style={{
                      marginTop: "4px",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: signature.secondaryColor,
                    }}
                  >
                    {[signature.role, signature.companyName]
                      .filter(Boolean)
                      .join(" • ")}
                  </div>

                  <div
                    style={{
                      color: "#4b5563",
                      borderTop: `1px solid ${signature.secondaryColor}`,
                      paddingTop: "12px",
                      marginTop: "12px",
                    }}
                  >
                    <div style={{ marginBottom: "4px" }}>
                      <span style={labelStyle}>Phone:</span> {signature.phone}
                    </div>

                    <div style={{ marginBottom: "4px" }}>
                      <span style={labelStyle}>Email:</span>{" "}
                      <a href={`mailto:${signature.email}`} style={linkStyle}>
                        {signature.email}
                      </a>
                    </div>

                    <div style={{ marginBottom: "4px" }}>
                      <span style={labelStyle}>Address:</span>{" "}
                      {signature.address}
                    </div>

                    <div style={{ marginBottom: "4px" }}>
                      <span style={labelStyle}>Web:</span>{" "}
                      <a
                        href={signature.website}
                        target="_blank"
                        rel="noreferrer"
                        style={linkStyle}
                      >
                        {signature.website}
                      </a>
                    </div>
                  </div>

                  {socialLinks.length > 0 && (
                    <div style={{ marginTop: "10px" }}>
                      {socialLinks.map(([platform, url], index) => (
                        <span key={platform}>
                          <a
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              color: signature.secondaryColor,
                              textDecoration: "none",
                              fontWeight: 600,
                            }}
                          >
                            {platform.charAt(0).toUpperCase() +
                              platform.slice(1)}
                          </a>
                          {index < socialLinks.length - 1 ? (
                            <span style={{ color: "#9ca3af" }}> | </span>
                          ) : null}
                        </span>
                      ))}
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}