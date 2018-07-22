import React      from 'react';
import Wrapper    from 'components/Wrapper';
import Header     from 'components/Header';
import Section    from 'components/Section';
import Footer     from 'components/Footer';
import Banner     from 'components/Banner';
import Project    from 'components/Project';
import background from 'assets/images/mic-stand.jpg';

const text = {
	static: "Hi, I'm Liam and I",

	dynamic: [
		'make things.',
		'create websites.',
		'play loud music.',
	],
};

const Home = () => (
	<div>
		<Header />
		<Banner image={ background } staticText={ text.static } dynamicText={ text.dynamic } />

		<main>
			<Wrapper>
				<Section>
					<header><h1 id="about">About</h1></header>
					<hr />

					<p>
						Hi, my name is Liam. I&#39;m a web developer currently based in Tuscaloosa, AL. I enjoy loud music, creative problem solving and often both at the same time.
					</p>

					<p>
						I became a web developer in 2008 when I was fortunate enough to land a student-worker position at the University of Alabama. I&#39;ve been working ever since with clients and employers
						to craft solutions that met their needs. Over the course of my career I&#39;ve developed an expertise in Front-End development using whatever tools the industry professional are drooling
						over at the time. I enjoy what I do and the people I work with. So, if you have a project in mind feel free to <a href="mailto:contact@liambutterworth.me">shoot me an email</a>&nbsp;
						or if you&#39;re looking for someone full-time take a look at <a target="_blank" href="/liambutterworth.pdf">my resume</a>.
					</p>

					<p>
						If you&#39;re interested in viewing examples of my work here&#39;s my <a target="_blank" href="https://github.com/liambutterworth">Github</a>. I use all the expected buzzwords and acronyms: responsive
						design, cross-browser compatibility, RESTful APIs, HTML, CSS, JS, etc.
					</p>
				</Section>

				<Section>
					<header><h1 id="work">Work</h1></header>
					<hr />

					<Project
						icon="laptop"
						title="Keyboard"
						link="https://liambutterworth.me/keyboard"
						tags="HTML,CSS,Sass,JavaScript,Webpack,React,Web Audio API"
					>
						This is a fun pet project I started to familiarize myself with the finer points of React, the Web Audio API and an attempt at integrating music theory with an interactive synthesizer.
						I plan to expand on this application to make it a great method for learning how music theory works on a keyboard as well as a tool for recording and layering music compositions.
					</Project>

					<Project
						icon="npm"
						title="Bassline"
						link="http://github.com/liambutterworth/postcss-bassline.git"
						tags="JavaScript,PostCSS,Node Module,Mocha"
					>
						I wrote this PostCSS plugin to make managing vertical rhythm on a website much simpler by abstracting the
						math needed for the font-size and line-height properties. With it you can pass a pixel value reference
						to the font-size() function and it will output the correct rem value relative to the base font size.
					</Project>
				</Section>
			</Wrapper>
		</main>

		<Footer />
	</div>
);

export default Home;
