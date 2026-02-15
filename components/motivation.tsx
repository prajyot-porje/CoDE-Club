"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const teacherMotivations = [
  {
    name: "Prof. Anjali Sharma",
    quote: "Keep building one project at a time, and confidence will follow your consistency.",
    image: "/codeclub.png",
  },
  {
    name: "Mr. Rajesh Verma",
    quote: "Great coders are not born—they grow by solving real problems every day.",
    image: "/codeclub1.png",
  },
  {
    name: "Dr. Meera Nair",
    quote: "Your curiosity is your superpower; never stop asking why and how.",
    image: "/codeclub.png",
  },
  {
    name: "Ms. Priya Kulkarni",
    quote: "Learn deeply, collaborate openly, and your ideas will create impact.",
    image: "/codeclub1.png",
  },
]

export function Motivation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="motivation" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Motivation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Inspiring words from our teachers that push us to learn, create, and grow together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teacherMotivations.map((teacher, index) => (
            <motion.article
              key={teacher.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border border-white/20 mb-4">
                <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{teacher.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">“{teacher.quote}”</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
