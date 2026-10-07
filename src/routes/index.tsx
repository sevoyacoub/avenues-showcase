import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroFilm } from '@/components/hero-film';
import { useParallax } from '@/hooks/use-parallax';
import { business } from '@/lib/business';
import clothing from '@/assets/clothing.jpg';
import homeGoods from '@/assets/home-goods.jpg';
import trinkets from '@/assets/trinkets.jpg';

const socialImage = 'https://angelas-on-the-avenue.lovable.app/__l5e/assets-v1/c41cc526-d972-497f-b013-a317d6682ef8/angela-hero.jpg';
const description = 'Discover secondhand clothing, home goods and unique finds at Angela’s on the Avenue, a nonprofit thrift store at 231 Philadelphia Ave in Egg Harbor City, NJ.';
export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Angela’s on the Avenue | Thrift & Community in Egg Harbor City' },
    { name: 'description', content: description },
    { property: 'og:title', content: 'Angela’s on the Avenue | Secondhand treasures. Community first.' },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: socialImage },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: socialImage },
  ] }),
  component: Index,
});

const finds = [
  { title: 'Secondhand clothing', image: clothing, alt: 'Folded denim, knitwear and everyday clothing', copy: 'Everyday favorites and unexpected standouts. Find a new-to-you piece with a little personality.' },
  { title: 'Home goods', image: homeGoods, alt: 'Vintage ceramics and patterned glassware on a wooden shelf', copy: 'Pieces with a past, ready for a new home. Browse the little things that make a space your own.' },
  { title: 'Unique trinkets', image: trinkets, alt: 'A brass bird, decorative box, glass bottle and small found treasures', copy: 'Curiosities, keepsakes and miscellaneous delights. The kind of finds you can’t plan for.' },
];

function Index() {
  const hero = useParallax();
  return <div className="site">
    <a href="#about" className="skip-link">Skip to content</a>
    <section className="hero" ref={hero} aria-label="Angela’s on the Avenue">
      <HeroFilm />
      <div className="hero-shade" data-depth="0.12" />
      <header className="site-header">
        <a className="wordmark" href="#" aria-label="Angela’s on the Avenue, home">
          <span className="monogram" aria-hidden="true">A</span>
          <span className="wordmark-text">Angela’s<span>on the Avenue</span></span>
        </a>
        <span className="header-location">Egg Harbor City, NJ</span>
      </header>
      <div className="hero-content" data-depth="0.05">
        <p className="hero-label">Secondhand treasures. Community first.</p>
        <h1>Angela’s<span className="hero-subname">on the Avenue</span></h1>
        <div className="hero-bottom"><p>A nonprofit thrift store where every find is a small discovery — and shopping supports our neighbors.</p><span className="hero-rule" aria-hidden="true" /></div>
      </div>
    </section>
    <main>
      <section id="about" className="band paper-band">
        <div className="inner about-layout">
          <div><p className="eyebrow">01 — The idea</p><h2 className="section-title">A beautifully arranged secondhand treasure</h2></div>
          <div className="about-copy"><p className="body-copy">Step through the door and let the discovery begin. Clothing, home goods and small curiosities, with a second-floor shopping area to explore. The inventory changes often, so there’s usually something new to catch your eye.</p><p className="about-note">Find your next favorite. Give it a second life.</p></div>
        </div>
      </section>
      <section id="finds" className="band ink-band">
        <div className="inner"><p className="eyebrow">02 — What you’ll find</p><h2 className="section-title">Three ways to dig</h2>
          <div className="finds-grid">{finds.map((find) => <article key={find.title} className="find-item"><div className="find-image"><img src={find.image} alt={find.alt} width={1088} height={720} loading="lazy" decoding="async" /></div><h3>{find.title}</h3><p>{find.copy}</p></article>)}</div>
          <p className="image-note">Thrift-inspired imagery. Individual finds and inventory vary.</p>
        </div>
      </section>
      <section id="community" className="band mission-band">
        <div className="inner"><p className="eyebrow">03 — The mission</p><h2 className="section-title">Shop. Donate. Volunteer.</h2><p className="body-copy">Angela’s is a community effort through and through. Shopping, donating and volunteering support NO1HUNGRY and its work to feed and support neighbors in Egg Harbor City and the surrounding area.</p><p className="mission-support">There’s a place for you here — whether you’re hunting for a find, clearing out a closet, or lending a hand.</p><Button asChild variant="avenue" className="mission-link"><a href={business.facebook} target="_blank" rel="noopener noreferrer">Find us on Facebook <ArrowUpRight /></a></Button></div>
      </section>
      <section id="reviews" className="band paper-band">
        <div className="inner"><div className="review-heading"><div><p className="eyebrow">04 — Word of mouth</p><h2 className="section-title">How people describe it</h2></div><p className="rating">4.3 / 5 · 11 Google reviews<br /><span>Rating from the supplied Google listing</span></p></div>
          <div className="review-grid">{business.reviews.map((review) => <figure key={review} className="review"><blockquote>“{review}”</blockquote><figcaption>Google review excerpt</figcaption></figure>)}</div>
          <a className="review-source" href={business.reviewSource} target="_blank" rel="noopener noreferrer">Read the review excerpts <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <section id="visit" className="band ink-band">
        <div className="inner"><p className="eyebrow">05 — Come by</p><h2 className="section-title">Visit the store</h2>
          <div className="visit-grid"><div><p className="small-label">Shopping hours</p><div className="hours-list">{business.hours.map((hours) => <div className="hours-row" key={hours.days}><span>{hours.days}</span><span>{hours.time}</span></div>)}</div><p className="hours-note">Hours published by NO1HUNGRY. Check the store’s Facebook page for changes before your visit.</p></div>
            <div><p className="small-label">Where</p><a className="address-link" href={business.directions} target="_blank" rel="noopener noreferrer">231 Philadelphia Ave<br />Egg Harbor City, NJ 08215</a><Button asChild variant="avenue" className="directions-button"><a href={business.directions} target="_blank" rel="noopener noreferrer">Get directions <ArrowRight /></a></Button></div></div>
        </div>
      </section>
    </main>
    <footer className="footer"><div className="inner"><div className="footer-layout"><div><div className="footer-name">Angela’s</div><p>A nonprofit thrift store in Egg Harbor City, NJ — supporting NO1HUNGRY.</p><div className="footer-links"><a href={business.directions} target="_blank" rel="noopener noreferrer">Directions</a><a href={business.facebook} target="_blank" rel="noopener noreferrer">Facebook</a><a href={business.missionWebsite} target="_blank" rel="noopener noreferrer">NO1HUNGRY</a></div></div><div className="contact-block"><span className="small-label">NO1HUNGRY community contact</span><br /><a href={`tel:${business.communityPhone}`}>609-965-3890</a><p>For shopping, donations & volunteering.</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Angela’s on the Avenue</span><span>Secondhand treasures. Community first.</span></div></div></footer>
  </div>;
}
