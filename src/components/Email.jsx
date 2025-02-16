export default function Email() {
  const mail = "ethan.paleyron@proton.me";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(mail)
      .then(() => {
        // Optional: Add a visual feedback like a toast or temporary highlight
        console.log("Email copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy email", err);
      });
  };

  return (
    <div className="email">
      <a href={`mailto:${mail}`} className="link">
        {mail}
      </a>
      <button id="copy" onClick={handleCopy}>
        <img src="/assets/icons/copy.svg" alt="Copier" />
      </button>
    </div>
  );
}
