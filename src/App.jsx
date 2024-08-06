function App() {
  return (
    <div className=" bg-black  bg-dot-white/[0.2]  relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" text-white min-h-screen p-5 w-full md:w-1/2">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold">Yash Jain</h1>
          <p className="text-lg mt-2">
            Web Developer | Blockchain Developer | AI Enthusiast
          </p>
        </header>
        <main>
          <Section title="About Me">
            <p>
              I am a tech enthusiast with a passion for web development, web 3,
              and AI, dedicated to leveraging technology to drive positive
              change. My journey began with humble beginnings, but through
              perseverance and a commitment to practical learning, I have
              developed a strong foundation in these cutting-edge fields.
            </p>
            <p>
              Currently, I am a blockchain developer at an early-stage web3
              startup, where I led the development. My hands-on experience extends to over 10 hackathons,
              including ETHMumbai, where I stood out among 3000+ applicants,
              making it to the top 250 finalists. These experiences have honed
              my problem-solving skills and expanded my professional network.
            </p>
            <p>
              In addition to my technical pursuits, I am passionate about
              addressing environmental challenges. I am actively working on a
              project aimed at recycling tires into valuable by-products,
              contributing to sustainability and climate change solutions. I
              thrive in dynamic environments and enjoy taking on leadership
              roles, whether it’s leading team meetings, onboarding advisors, or
              pitching to investors. My goal is to continue growing in the tech
              space, collaborating with like-minded individuals, and
              contributing to impactful projects that make a difference.
            </p>
          </Section>
          <Section title="Skills">
            <ul className="list-disc list-inside">
              <li>
                Proficient in building full-stack websites and conducting market
                research.
              </li>
              <li>
                Experienced in marketing, including running campaigns on Google
                and Meta AdSense.
              </li>
              <li>
                Strong communication skills and adept at networking, resulting
                in a robust circle of connections.
              </li>
              <li>Capable of leading teams and other initiatives.</li>
              <li>
                Actively learning and improving in finance while focusing on
                advancing web development skills.
              </li>
              <li>
                Possesses extensive knowledge of the global startup ecosystem
                and demonstrates strong business acumen and instincts.
              </li>
            </ul>
          </Section>
          <Section title="Experience">
            <Experience
              title="GTX"
              role="Blockchain Developer"
              duration="May 2024 – Present"
              description="Integrated token swap functionality into the exchange. Added on-ramp capabilities to enable users to buy crypto using fiat currency. Contributed to both front-end and backend development."
            />
            <Experience
              title="LearnHattan"
              role="FullStack Developer"
              duration="November 2023 – April 2024"
              description="Led a multidisciplinary team to develop a fully functional MVP, earning invitations to prestigious events like Scale +91 and EthMumbai. Integrated the native LHT token on the Sepolia testnet, enhancing platform testing capabilities and reliability."
            />
          </Section>
          <Section title="Projects">
            <Project
              title="GTX Token and Sale Contracts"
              tech="Solidity, OpenZeppelin, ERC-20"
              link="https://github.com/yashj09/ERC20-Token-Sale"
              description="Developed ERC-20 GTX Token contracts with governance and role-based access control. Implemented a dynamic token sale contract with configurable periods, pricing, and purchase limits."
            />
            <Project
              title="Gemini GPT"
              tech="React, JavaScript, Google Gemini API"
              link="https://github.com/yashj09/Gemini-GPT"
              description="Developed and deployed Gemini GPT, an open-source AI chatbot, garnering significant attention with over 100 active users. Designed and implemented a conversational AI architecture, leveraging Google’s Generative AI capabilities to provide insightful and engaging responses, boosting user satisfaction by 22 percent."
            />
          </Section>
          <Section title="Achievements">
            <p>
              Over the past 6-12 months, I've achieved several milestones in my
              journey. After completing my first year of college, I joined an
              early-stage web3-based edtech startup as a blockchain developer. I
              was leading the development of our fully functional MVP, which is
              now live. Additionally, I successfully onboarded notable figures
              from the web3 world as advisors and team members. Over the last 5
              months, I've immersed myself in over 10 hackathons, tackling
              diverse challenges and crafting real-world solutions. Through
              these experiences, I've honed my communication and speaking
              skills, affording me opportunities to engage with founders and
              prominent figures in the startup ecosystem.
            </p>
            <p>
              I participated in the largest web3 hackathon called "ETHMumbai" in
              India after being selected from a pool of over 3000 applicants,
              making it to the final 250. After the hackathon, I shared my
              experience and the challenges we encountered on LinkedIn and
              Twitter. The post garnered 55+ likes on LinkedIn, 35+ likes on
              Twitter, and received a lot of appreciation. Moreover, I gained
              over 150 new connections on LinkedIn as a result.
            </p>
          </Section>
          <Section title="Current Focus and Goals">
            <p>
              Balancing college and entrepreneurial pursuits poses a significant
              challenge; I am considering dropping out to focus more on my
              projects. I need assistance in navigating business and finance
              realms. Securing grants or funding for project growth is vital.
              Building a compact yet strong team is crucial, and acquiring
              experienced advisors to guide the way is essential.
            </p>
            <p>
              I am open to full-time positions as a software engineer in a
              dynamic startup environment, where I can leverage my expertise in
              web development, web 3, and AI. With a proven track record of
              successfully leading projects from conception to execution, I
              bring a blend of technical proficiency, adaptability, and a
              passion for innovation to any team.
            </p>
          </Section>
        </main>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}

function Experience({ title, role, duration, description }) {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-lg italic">
        {role} - {duration}
      </p>
      <p>{description}</p>
    </div>
  );
}

function Project({ title, tech, link, description }) {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-lg italic">{tech}</p>
      <a href={link} className="text-blue-400 underline">
        Project Link
      </a>
      <p>{description}</p>
    </div>
  );
}

export default App;
