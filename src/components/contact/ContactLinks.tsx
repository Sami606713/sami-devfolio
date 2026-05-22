import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

interface ContactLinkItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  target?: string;
}

const links: ContactLinkItem[] = [
  {
    icon: <FaEnvelope size={16} />,
    label: "Email",
    value: "sami606713@gmail.com",
    href: "mailto:sami606713@gmail.com",
  },
  {
    icon: <FaLinkedin size={16} />,
    label: "LinkedIn",
    value: "sami-ullah-6326b9265",
    href: "https://www.linkedin.com/in/sami-ullah-6326b9265/",
    target: "_blank",
  },
  {
    icon: <FaGithub size={16} />,
    label: "GitHub",
    value: "Sami606713",
    href: "https://github.com/Sami606713",
    target: "_blank",
  },
  {
    icon: <FaWhatsapp size={16} />,
    label: "WhatsApp",
    value: "+92 324 534 6965",
    href: "https://wa.me/923245346965",
    target: "_blank",
  },
];

export function ContactLinks() {
  return (
    <div className="bg-surface border border-white/[0.08] rounded-2xl p-8 h-fit">
      <h2 className="font-semibold text-lg mb-6 text-foreground">
        Or reach out directly
      </h2>

      <div>
        {links.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            target={item.target}
            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
            aria-label={`${item.label}: ${item.value}`}
            className={`flex items-center gap-4 py-4 px-2 rounded-lg transition-colors hover:bg-surface-2 -mx-2 ${
              index < links.length - 1 ? "border-b border-white/[0.08]" : ""
            }`}
          >
            {/* Icon */}
            <div
              className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 bg-accent/10 text-accent"
              aria-hidden="true"
            >
              {item.icon}
            </div>

            {/* Text */}
            <div>
              <p className="text-xs uppercase tracking-wider mb-0.5 text-muted">
                {item.label}
              </p>
              <p className="text-sm font-medium text-foreground">{item.value}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Fast response note */}
      <div className="mt-6 rounded-xl p-4 bg-surface-2">
        <p className="text-sm font-semibold text-accent">Fast response</p>
        <p className="text-sm mt-1 leading-relaxed text-muted">
          I typically respond within 24 hours. For urgent projects, WhatsApp is
          fastest.
        </p>
      </div>
    </div>
  );
}
