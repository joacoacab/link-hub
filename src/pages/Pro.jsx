import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import ThemeBackground from '../components/ThemeBackground'
import ProfileHeader from '../components/ProfileHeader'
import Section from '../components/Section'
import LinkButton from '../components/LinkButton'
import SocialBar from '../components/SocialBar'
import profilesData from '../data/profiles.json'

export default function Pro() {
  const profile = profilesData.pro

  // Agrupar links por sección
  const linksBySection = profile.links.reduce((acc, link) => {
    const section = link.section || 'principal'
    if (!acc[section]) acc[section] = []
    acc[section].push(link)
    return acc
  }, {})

  // Ordenar secciones
  const sectionOrder = ['principal', 'proyectos', 'portfolio', 'contacto']
  const sections = sectionOrder.filter(s => linksBySection[s])

  useEffect(() => {
    // Actualizar título y meta tags
    document.title = profile.seo?.title || `${profile.name} | Link Hub`
  }, [profile])

  return (
    <>
      <Helmet>
        <title>{profile.seo?.title || `${profile.name} | Link Hub`}</title>
        <meta name="description" content={profile.seo?.description || profile.bio} />
        <meta property="og:title" content={profile.seo?.title || `${profile.name} | Link Hub`} />
        <meta property="og:description" content={profile.seo?.description || profile.bio} />
        <meta property="og:type" content="website" />
        {profile.seo?.ogImage && (
          <meta property="og:image" content={profile.seo.ogImage} />
        )}
      </Helmet>

      <ThemeBackground />
      
      <div className="min-h-screen px-4 py-8 md:py-12 relative z-10">
        <div className="max-w-2xl mx-auto">
          <ProfileHeader profile={profile} />

          <main>
            {sections.map((sectionKey, sectionIndex) => {
              const sectionTitle = {
                principal: 'Principal',
                proyectos: 'Proyectos',
                portfolio: 'Portfolio',
                contacto: 'Contacto',
              }[sectionKey] || sectionKey

              return (
                <Section key={sectionKey} title={sectionTitle}>
                  {linksBySection[sectionKey].map((link, linkIndex) => (
                    <LinkButton
                      key={linkIndex}
                      link={link}
                      index={sectionIndex * 10 + linkIndex}
                    />
                  ))}
                </Section>
              )
            })}
          </main>

          <SocialBar social={profile.social} />
        </div>
      </div>
    </>
  )
}

