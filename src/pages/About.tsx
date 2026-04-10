import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  defaultAboutContent,
  mergeAboutContent,
} from '../content/pageDefaults';
import { apiService } from '../services/apiService';
import './About.css';

const About: React.FC = () => {
  const [aboutContent, setAboutContent] = useState(defaultAboutContent);

  useEffect(() => {
    const loadAboutContent = async () => {
      try {
        const content = await apiService.getPublicContent('about');
        setAboutContent(mergeAboutContent(content));
      } catch {
        setAboutContent(defaultAboutContent);
      }
    };

    loadAboutContent();
  }, []);

  return (
    <div className="about">
      <Helmet>
        <title>{aboutContent.seo.title}</title>
        <meta name="description" content={aboutContent.seo.description} />
        <meta name="keywords" content={aboutContent.seo.keywords.join(', ')} />
      </Helmet>
      <div className="container">
        <section className="about-hero">
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h1 className="gradient-text">{aboutContent.sections.hero.title}</h1>
              <p className="subtitle">{aboutContent.sections.hero.subtitle}</p>
              <p className="intro-text">{aboutContent.sections.hero.intro}</p>
            </div>
            <div className="about-hero-image">
              <div className="hero-image-placeholder">
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="story-section section">
          <div className="story-content">
            <h2>{aboutContent.sections.story.title}</h2>
            <div className="story-text">
              {aboutContent.sections.story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="credentials section">
          <h2>{aboutContent.sections.credentials.title}</h2>
          <div className="credentials-grid">
            {aboutContent.sections.credentials.groups.map((group) => (
              <div key={group.title} className="credential-category">
                <h3>{group.title}</h3>
                <div className="credential-list">
                  {group.items.map((item) => (
                    <div key={`${group.title}-${item.title}`} className="credential-item">
                      <h4>{item.title}</h4>
                      {item.lines.map((line) => (
                        <p key={`${item.title}-${line}`}>{line}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="approach-section section">
          <h2>{aboutContent.sections.approach.title}</h2>
          <div className="approach-content">
            <div className="approach-text">
              <p>{aboutContent.sections.approach.lead}</p>
              <div className="approach-intro">
                <p>{aboutContent.sections.approach.intro}</p>
              </div>
              <div className="approach-principles">
                {aboutContent.sections.approach.principles.map((principle) => (
                  <div key={principle.title} className="principle">
                    <h4>{principle.title}</h4>
                    <p>{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="specializations section">
          <h2>{aboutContent.sections.specializations.title}</h2>
          <div className="specializations-grid">
            {aboutContent.sections.specializations.items.map((item) => (
              <div key={item} className="specialization-card card">
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="about-cta section">
          <div className="cta-content text-center">
            <h2>{aboutContent.sections.cta.title}</h2>
            <p>{aboutContent.sections.cta.description}</p>
            <div className="cta-buttons">
              <Link
                to={aboutContent.sections.cta.primaryButtonLink}
                className="btn btn-primary btn-large"
              >
                {aboutContent.sections.cta.primaryButtonText}
              </Link>
              <Link
                to={aboutContent.sections.cta.secondaryButtonLink}
                className="btn btn-secondary btn-large"
              >
                {aboutContent.sections.cta.secondaryButtonText}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
