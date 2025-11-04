import { useState } from "react";

export default function Email() {
  const mail = "paleyron.ethan@proton.me";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(mail)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.error("Failed to copy email", err);
      });
  };

  return (
    <div className="email">
      <a
        href={`mailto:${mail}`}
        className={`link ${copied ? "copy-email" : ""}`}
      >
        {copied ? "Email copié !" : mail}
      </a>
      <button id="copy" onClick={handleCopy}>
        <img src="/assets/icons/copy.svg" alt="Copier" />
      </button>
    </div>
  );
}
