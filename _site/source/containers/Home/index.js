import React         from 'react';
import Banner        from 'components/Banner';
import Wrapper       from 'components/Wrapper';
import Header        from 'components/Header';
import Content       from 'components/Content';
import Footer        from 'components/Footer';
import Section       from 'components/Section';
import backgroundImg from 'assets/images/mic-stand.jpg';

const staticText = "Hi, I'm Liam and I";

const dynamicText = [
	'make things.',
	'create website.',
	'play loud music',
];

const Home = () => (
	<div>
		<Header />

		<Content>
			<Banner image={ backgroundImg } staticText={ staticText } dynamicText={ dynamicText } />

			<Wrapper>
				<Section>
					<p>
						Hi, my name is Liam. Well, actually it’s William, but no one but paychecks and angry relatives call me that anymore. I’m a twenty-something year old web developer from Tuscaloosa, AL. I enjoy loud music, creative problem solving, and copious amounts of chips and salsa.
					</p>

					<p>
						I became a web developer in 2008 when I was fortunate enough to land a student position at the University of Alabama. I’ve been using my accumulated web skills to avoid starvation ever since. Over the course of my career I’ve developed an expertise in Front-End Development using whatever tools the industry professionals are drooling over at the time. I enjoy what I do and the people I work with. So, if you have a project in mind feel free to <a href='mailto:liam.b.butterworth@gmail.com'>shoot me an email</a> or if you’re looking for someone full-time <a href='#'>check out my resume</a>
					</p>

					<p>
						If you’re interested in viewing examples of my work here’s my <a href='https://github.com/liambutterworth'>GitHub Account</a>. I work with all the usual suspects and acronyms; responsive design, cross-browser compatibility, RESTful API.
					</p>
				</Section>
			</Wrapper>
		</Content>

		<Footer />
	</div>
);

export default Home;
