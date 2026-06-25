import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { serviceNowFlow } from '../data/portfolio';

export const ServiceNowJourney = () => (
  <Section id="servicenow" eyebrow="ServiceNow Journey" title="From CSA Foundation To Workflow Thinking">
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,229,255,0.08),transparent,rgba(123,97,255,0.08))]" />
      <div className="relative grid gap-5 md:grid-cols-4">
        {serviceNowFlow.map((step, index) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.12 }}
            className="relative rounded-lg border border-white/10 bg-command-bg/60 p-5"
          >
            {index < serviceNowFlow.length - 1 ? (
              <motion.span
                aria-hidden="true"
                className="absolute left-1/2 top-full hidden h-px w-full origin-left bg-command-primary md:left-full md:top-1/2 md:block"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.18 + 0.25, duration: 0.5 }}
              />
            ) : null}
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-command-primary/10 text-command-primary">
              <step.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white">{step.label}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);
