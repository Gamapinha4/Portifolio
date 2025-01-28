"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from "react-icons/fa"
import { getPinnedRepos, type RepoDetails } from "../lib/github"
import { Code, ExternalLink, Eye, GitFork, Star, Users } from "lucide-react"

const Projects = () => {
  const [projects, setProjects] = useState<RepoDetails[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPinnedProjects() {
      try {
        setLoading(true)
        const pinnedRepos = await getPinnedRepos("Gamapinha4")
        setProjects(pinnedRepos)
      } catch (err) {
        setError("Falha ao carregar os projetos. Por favor, tente novamente mais tarde.")
      } finally {
        setLoading(false)
      }
    }

    fetchPinnedProjects()
  }, [])

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-sky-400">Carregando Projetos...</h2>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-sky-400">Projetos</h2>
          <p className="text-center text-red-500">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-sky-400"
        >
          Projetos em Destaque
        </motion.h2>

        {projects.length === 0 ? (
          <div className="text-center text-gray-400">Nenhum projeto fixado encontrado</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(({ repo, readme, contributors }, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gray-800/30 rounded-[10px] backdrop-blur-sm border border-sky-500/20 hover:border-sky-500/50 transition-all duration-300"
              >
      
              <div className="relative m-[1px] bg-gray-900/95 rounded-2xl backdrop-blur-xl">
                <div className="p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-sky-300 group-hover:text-sky-200 transition-colors duration-300">
                        {repo.name}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-1.5">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm">{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <GitFork className="w-4 h-4 text-sky-400" />
                          <span className="text-sm">{repo.forks_count}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Eye className="w-4 h-4 text-emerald-400" />
                          <span className="text-sm">{repo.watchers_count}</span>
                        </div>
                      </div>
                    </div>

                    {repo.language && (
                      <span className="px-3 py-1 text-xs font-medium text-sky-300 bg-sky-500/10 rounded-full border border-sky-500/20">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <p className="text-gray-300 leading-relaxed line-clamp-3">
                      {readme || repo.description}
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-900/95 to-transparent" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {repo.topics
                      .filter(topic => topic !== "pinned")
                      .map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium text-gray-300 bg-gray-800 rounded-full border border-gray-700 hover:border-sky-500/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                  {contributors.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <h4 className="flex items-center gap-2 text-sm font-medium text-gray-400">
                        <Users className="w-4 h-4" />
                        Contribuidores
                      </h4>
                      <div className="flex flex-wrap items-center gap-2">
                        {contributors.map(contributor => (
                          <a
                            key={contributor.login}
                            href={contributor.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/avatar relative"
                          >
                            <div className="relative">
                              <img
                                src={contributor.avatar_url}
                                alt={contributor.login}
                                className="w-8 h-8 rounded-[10px] object-cover transition-transform duration-300 group-hover/avatar:scale-110 group-hover/avatar:ring-2 ring-sky-500"
                              />
                            </div>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-sky-300 text-xs rounded-[10px] opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-sky-500/20">
                              {contributor.login}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-4 pt-2">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-sky-300 bg-sky-500/10 rounded-[10px] hover:bg-sky-500/20 transition-colors duration-300"
                    >
                      <Code className="w-4 h-4" />
                      <span>Código</span>
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-sky-300 bg-sky-500/10 rounded-[10px] hover:bg-sky-500/20 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects

