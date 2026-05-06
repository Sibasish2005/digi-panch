"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const newsData = [
  {
    id: 1,
    title: "New AI-Based Grievance System Introduced",
    description:
      "Citizens can now submit and track complaints digitally through the DigiPanch platform.",
    image: "/images/news/news1.png",
    category: "Technology",
    date: "May 6, 2026",
  },
  {
    id: 2,
    title: "Digital Land Record Access for Villagers",
    description:
      "Panchayat residents can securely access land and certificate records online.",
    image: "/images/news/news2.png",
    category: "Governance",
    date: "May 4, 2026",
  },
  {
    id: 3,
    title: "Smart Village Development Initiative",
    description:
      "New smart infrastructure projects launched under the rural digitization mission.",
    image: "/images/news/news3.png",
    category: "Development",
    date: "May 1, 2026",
  },
];

export default function LatestNews() {
  return (
    <section className="w-full bg-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Badge className="mb-4 px-4 py-1 text-sm">
            Latest Updates
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-inter text-gray-900">
            News & Announcements
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Stay informed with the latest Panchayat updates,
            AI governance initiatives, citizen services,
            and rural development programs.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {newsData.map((news, index) => (

            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl">

                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">

                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />

                </div>

                <CardContent className="p-6">

                  {/* Category + Date */}
                  <div className="flex items-center justify-between mb-4">

                    <Badge variant="secondary">
                      {news.category}
                    </Badge>

                    <span className="text-sm text-gray-500">
                      {news.date}
                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 font-inter leading-snug">
                    {news.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {news.description}
                  </p>

                  {/* Read More */}
                  <button className="mt-5 text-blue-600 font-medium hover:text-blue-700 transition">
                    Read More →
                  </button>

                </CardContent>
              </Card>
            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}