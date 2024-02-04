import { Nav } from "./_util/cards"
import ContentSection from "./_components/contentSection"
import Hero from "./_components/hero"
import CardSection from "./_components/cardSection"

const heroProps = {
    title: 'Jsoh Dev',
    subText: "Software developer looking for a place to store personal projects, share interesting details on my hobbies, and learn some new skills in the process.",
    image: '/favicon.svg',
    buttons: [
        {
            text: 'Explore Projects',
            link: '#projects'
        }, {
            text: 'About Jsoh',
            link: '#about'
        }
    ]
}

const sectionContents = [
    <Hero key="hero" {...heroProps} />,
    <CardSection cards={Nav.projects.items} key='projects'/>,
    <CardSection cards={Nav.about.items} key='about'/>,

]

export default function Home() {
    return (
      <div id="home">
        {Object.keys(Nav).map((navKey, index) => {
          const header = Nav[navKey];
          return (
            <ContentSection key={index} sectionTitle={header.headerCard} index={index} link={header.id}>
              {sectionContents[index]}
            </ContentSection>
          );
        })}
        </div>
    );
  }