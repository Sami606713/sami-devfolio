import { personalInfo, socialLinks } from "@/constants/data";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const iconMap: Record<string, any> = {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-20 border-t border-white/5 bg-black">
            <div className="section">
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div className="space-y-6">
                            <h3 className="text-[clamp(2.5rem,8vw,5rem)] font-black uppercase tracking-tighter leading-none italic opacity-20">
                                {personalInfo.name}
                            </h3>
                            <p className="max-w-xs text-foreground-muted font-bold text-sm tracking-widest uppercase">
                                {personalInfo.title}
                            </p>
                        </div>

                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = iconMap[social.icon];
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-5 rounded-full border border-white/5 hover:border-accent hover:text-accent transition-all"
                                        aria-label={social.name}
                                    >
                                        <Icon className="text-2xl" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between pt-10 border-t border-white/5 gap-6">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
                            © {currentYear} ALL CODES RESERVED.
                        </p>
                        <div className="flex gap-10">
                            {["Github", "LinkedIn", "Resume"].map(item => (
                                <a key={item} href="#" className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 hover:opacity-100 hover:text-accent transition-all">{item}</a>
                            ))}
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
                            STAY CURIOUS.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
