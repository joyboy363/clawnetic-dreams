import { motion } from "framer-motion";
import angyImg from "@/assets/angy.jpeg";
import dennisImg from "@/assets/dennis.png";
import santiagoImg from "@/assets/santiago.jpeg";
import serenaImg from "@/assets/serena.jpeg";

const founders = [
  {
    name: "Dennis Cerna",
    role: "Co-Founder",
    img: dennisImg,
  },
  {
    name: "Angelica Cardona",
    role: "Co-Founder",
    img: angyImg,
  },
  {
    name: "Santiago Salas",
    role: "Co-Founder",
    img: santiagoImg,
  },
  {
    name: "Serena Marzouca",
    role: "Co-Founder",
    img: serenaImg,
  },
];

const FoundersSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <span className="text-primary text-sm font-medium">The Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Meet the <span className="text-gradient-neon">Founders</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            The people behind ClawVault — obsessed with arcade culture, engineering, and building unforgettable experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-4">
                <img
                  src={founder.img}
                  alt={founder.name}
                  className="w-52 h-52 rounded-full object-cover border-2 border-primary/30 glow-cyan group-hover:border-primary transition-colors duration-300"
                />
                <div className="absolute -inset-2 bg-primary/5 rounded-full blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">{founder.name}</h3>
              <p className="text-lg text-muted-foreground mt-1">{founder.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
