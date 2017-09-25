import React                 from 'react';
import Wrapper               from 'components/Wrapper';
import Header                from 'components/Header';
import Content               from 'components/Content';
import Footer                from 'components/Footer';
import Banner                from 'components/Banner';
import Grid, { Row, Column } from 'components/Grid';
import Thumbnail             from 'components/Thumbnail';
import backgroundImg         from 'assets/images/mic-stand.jpg';

const staticText = "Hi, I'm Liam and I";

const dynamicText = [
	'make things.',
	'create website.',
	'play loud music',
];

const Home = () => (
	<div>
		<Header />
		<Banner image={ backgroundImg } staticText={ staticText } dynamicText={ dynamicText } />

		<Content>
			<Wrapper>
				<section>
					<h1>About</h1>

					<p>
						Hi, my name is Liam. Well, actually it’s William, but no one but paychecks and angry relatives call me that anymore. I’m a twenty-something year old web developer from Tuscaloosa, AL. I enjoy loud music, creative problem solving, and unhealthy amounts of chips and salsa.
					</p>

					<p>
						I became a web developer in 2008 when I was fortunate enough to land a student-worker position at the University of Alabama. I’ve been using my accumulated web development skills to avoid starvation ever since. Over the course of my career I’ve developed an expertise in Front-End Development using whatever tools the industry professionals are drooling over at the time. I enjoy what I do and the people I work with. So, if you have a project in mind feel free to <a href='mailto:liam.b.butterworth@gmail.com'>shoot me an email</a> or if you’re looking for someone full-time <a href='#'>check out my resume</a>
					</p>

					<p>
						If you’re interested in viewing examples of my work here’s my <a href='https://github.com/liambutterworth'>GitHub Account</a>. I work with all the usual suspects and acronyms; responsive design, cross-browser compatibility, RESTful API.
					</p>
				</section>
			</Wrapper>

			<section>
				<h1>Work</h1>

				<Grid>
					<Row>
						<Column span="6">
							<Thumbnail title="Baseline" text="This is a sample sentence that will describe the project linked in this thumbnai." />
						</Column>

						<Column span="6">
							<Thumbnail title="Keyboard" text="This is a sample sentence that will describe the project linked in this thumbnai." />
						</Column>
					</Row>
				</Grid>
			</section>
		</Content>

		<Footer />
	</div>
);

export default Home;
