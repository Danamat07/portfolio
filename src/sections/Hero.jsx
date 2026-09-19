import { FaGithub, FaLinkedin } from "react-icons/fa";

const skills = [
    "React.js",
    "Next.js", 
    "JavaScript", 
    "HTML", 
    "CSS", 
    "Tailwind", 
    "XML", 
    "Python", 
    "C", 
    "C++", 
    "C#", 
    "Java", 
    "Kotlin", 
    "PHP", 
    "Node.js", 
    ".NET", 
    "MySQL", 
    "PostgreSQL", 
    "SMS", 
    "SQLite", 
    "Git", 
    "Linux", 
    "Arduino", 
    "phpMyAdmin", 
    "ABAP",
];

export const Hero = () => {
    const socialLinks = [
        {
            icon: FaGithub,
            href: "https://github.com/Danamat07",
            label: "GitHub",
        },
        {
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/dana-maria-matei-b17282310/",
            label: "LinkedIn",
        },
    ];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">

            {/* ==================== BACKGROUND ==================== */}
            <div className="absolute inset-0">
                <img
                    src="/hero-bg.jfif"
                    alt=""
                    className="w-full h-full object-cover opacity-40"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>


            {/* ==================== FLOATING DOTS ==================== */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#b08a6b",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${
                                15 + Math.random() * 20
                            }s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>


            {/* ==================== CONTENT ==================== */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* ==================== LEFT COLUMN ==================== */}
                    <div className="space-y-8">

                        {/* Role Badge */}
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">

                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />

                                Software Engineer

                                <span className="opacity-50">
                                    |
                                </span>

                                Testing Specialist

                            </span>
                        </div>


                        {/* ==================== HEADLINE ==================== */}
                        <div className="space-y-4">

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">

                                Crafting{" "}

                                <span className="text-primary glow-text">
                                    software
                                </span>

                                <br />

                                that people

                                <br />

                                <span className="font-serif italic font-normal text-foreground">
                                    can rely on.
                                </span>

                            </h1>


                            {/* Description */}
                            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in animation-delay-200">
                                Hi, I'm Dana Matei — a Software Engineer
                                specializing in Testing. I make sure every
                                feature is built to deliver a smooth and
                                reliable user experience.
                            </p>

                        </div>


                        {/* ==================== SOCIAL LINKS ==================== */}
                        <div className="flex items-center gap-5 animate-fade-in animation-delay-300">

                            <span className="text-sm text-muted-foreground">
                                Follow me:
                            </span>


                            <div className="flex items-center gap-3">

                                {socialLinks.map((social) => {
                                    const Icon = social.icon;

                                    return (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="
                                                w-10
                                                h-10
                                                rounded-full
                                                flex
                                                items-center
                                                justify-center
                                                border
                                                border-border
                                                bg-card/50
                                                text-foreground
                                                transition-all
                                                duration-300
                                                hover:text-white
                                                hover:border-white
                                                hover:bg-primary/10
                                                hover:-translate-y-1
                                            "
                                        >
                                            <Icon size={20} />
                                        </a>
                                    );
                                })}

                            </div>

                        </div>

                    </div>


                    {/* ==================== RIGHT COLUMN ==================== */}
                    <div className="relative animate-fade-in animation-delay-300">
                        <div className="relative max-w-sm mx-auto">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img src="/profile-photo.jpg" alt="Dana Matei" className="w-full aspect-[4/5] object-cover rounded-2xl "/>
                            </div>
                        </div>
                        
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">
                        Technologies I work with
                    </p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};