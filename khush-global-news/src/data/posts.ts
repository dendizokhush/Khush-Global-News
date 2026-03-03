export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  author: string;
  publishDate: string;
  readTime: string;
  isFeatured: boolean;
  isBreaking: boolean;
  sources?: string[];
}

export const posts: Post[] = [
  {
    id: "1",
    title: "What the New Budget Means for Counties: A Deep Dive",
    slug: "what-the-new-budget-means-for-counties",
    excerpt: "As the national government unveils the 2026/2027 fiscal plan, county governors are raising concerns over delayed disbursements and allocation cuts. Here is what it means for local development.",
    content: `
      <p>The release of the 2026/2027 national budget has sparked a fresh wave of debate between the national executive and the Council of Governors. At the heart of the matter is the allocation of equitable share revenue, which governors argue has not kept pace with inflation and the rising cost of devolved functions.</p>
      
      <h2>Key Allocations and Cuts</h2>
      <p>The Treasury has proposed a modest 3% increase in county allocations, citing fiscal constraints and high public debt service obligations. However, this falls short of the 15% increase demanded by the Commission on Revenue Allocation (CRA).</p>
      
      <ul>
        <li><strong>Health:</strong> Funding for county referral hospitals remains stagnant, raising fears of drug shortages.</li>
        <li><strong>Agriculture:</strong> A new conditional grant for fertilizer subsidies has been introduced, but access criteria remain unclear.</li>
        <li><strong>Infrastructure:</strong> Roads maintenance levy funds have been delayed for the third consecutive quarter.</li>
      </ul>

      <h2>The Governors' Stance</h2>
      <p>"We cannot deliver services on empty promises," stated the COG Chair in a press briefing yesterday. "If the Treasury does not release the pending bills funds by the end of the month, counties will grind to a halt."</p>

      <h2>Impact on the Common Mwananchi</h2>
      <p>For the average citizen, these high-level fiscal battles translate to stalled road projects, lack of medicine in local dispensaries, and delayed bursaries for students. The coming weeks will be critical as the Senate debates the Division of Revenue Bill.</p>
    `,
    image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&q=80&w=2000",
    category: "Politics",
    tags: ["Budget", "Counties", "Devolution", "Treasury"],
    author: "Denis Wandera",
    publishDate: "2026-03-02T08:00:00Z",
    readTime: "5 min read",
    isFeatured: true,
    isBreaking: false,
    sources: ["Treasury Budget Policy Statement 2026", "Council of Governors Press Release"]
  },
  {
    id: "2",
    title: "Understanding IEBC Reforms: What to Watch Ahead of 2027",
    slug: "understanding-iebc-reforms-what-to-watch",
    excerpt: "With the selection panel now fully constituted, the race to rebuild the electoral commission is on. We analyze the proposed legal amendments and their potential impact on future polls.",
    content: `
      <p>The Independent Electoral and Boundaries Commission (IEBC) is once again in the spotlight as the country prepares for the next general election cycle. After months of political wrangling, the selection panel for new commissioners has finally commenced its work.</p>

      <h2>The Selection Process</h2>
      <p>Transparency is the watchword this time around. Civil society groups have been granted observer status, and all interviews will be broadcast live. This move aims to restore public confidence in an institution that has faced credibility challenges in the past.</p>

      <h2>Proposed Legal Amendments</h2>
      <p>Parliament is currently debating several amendments to the Elections Act. Key among them is the requirement for electronic transmission of results to be the primary mode of declaration, a point of contention in previous elections.</p>
      
      <blockquote>"The integrity of the vote begins with the integrity of the voter register," says political analyst Jane Wanjiku. "We must get the basics right before we talk about technology."</blockquote>

      <h2>What's Next?</h2>
      <p>The selection panel has 90 days to present names to the President. Kenyans are watching closely to see if the new team will have the independence and competence required to manage a high-stakes election.</p>
    `,
    image: "https://images.unsplash.com/photo-1540910419868-474947cebacb?auto=format&fit=crop&q=80&w=2000",
    category: "Politics",
    tags: ["IEBC", "Elections", "Reforms", "Parliament"],
    author: "Denis Wandera",
    publishDate: "2026-03-01T14:30:00Z",
    readTime: "4 min read",
    isFeatured: false,
    isBreaking: false
  },
  {
    id: "3",
    title: "How Infrastructure Planning Impacts Urban Safety in Nairobi",
    slug: "infrastructure-planning-urban-safety-nairobi",
    excerpt: "Recent flooding in Nairobi has exposed glaring gaps in urban planning. Experts argue that sustainable drainage and zoning enforcement are no longer optional but a matter of life and death.",
    content: `
      <p>Nairobi's rapid urbanization has come at a cost. The recent heavy rains have left neighborhoods submerged, roads impassable, and residents counting losses. But is this just a natural disaster, or a man-made crisis?</p>

      <h2>The Drainage Dilemma</h2>
      <p>Urban planners point to the encroachment on riparian land and the lack of adequate drainage systems in new developments. "We are concreting over our natural sponges," explains environmentalist Dr. John Kamau. "When the water has nowhere to go, it goes into people's homes."</p>

      <h2>Zoning Enforcement</h2>
      <p>The county government has promised a crackdown on illegal structures, but enforcement remains a challenge. Corruption and lack of political will have often allowed developers to bypass regulations.</p>

      <h2>The Way Forward</h2>
      <p>Experts are calling for a master plan review that prioritizes green spaces and sustainable drainage solutions. Without decisive action, Nairobi risks becoming unlivable during the rainy seasons.</p>
    `,
    image: "https://images.unsplash.com/photo-1626262847844-322129337583?auto=format&fit=crop&q=80&w=2000",
    category: "Society",
    tags: ["Nairobi", "Urban Planning", "Infrastructure", "Safety"],
    author: "Sarah Kimani",
    publishDate: "2026-02-28T10:15:00Z",
    readTime: "6 min read",
    isFeatured: false,
    isBreaking: false
  },
  {
    id: "4",
    title: "Shilling Gains Ground Against the Dollar: Is It Sustainable?",
    slug: "shilling-gains-ground-against-dollar",
    excerpt: "The Kenyan Shilling has posted its strongest performance in months. Economists attribute this to diaspora remittances and tea exports, but warn of external volatility.",
    content: `
      <p>The Kenyan Shilling has rallied against the US Dollar, trading at its strongest level in six months. This comes as a relief to importers and consumers who have been grappling with high costs of goods.</p>

      <h2>Drivers of the Rally</h2>
      <p>Central Bank data shows that strong inflows from diaspora remittances and tea exports have bolstered foreign exchange reserves. Additionally, the successful Eurobond buyback has boosted investor confidence.</p>

      <h2>Caution Ahead</h2>
      <p>However, analysts warn that the gains could be short-lived if global oil prices rise or if the US Federal Reserve adjusts interest rates. "We are not out of the woods yet," cautions economist David Ndii. "Structural reforms are needed to sustain this momentum."</p>
    `,
    image: "https://images.unsplash.com/photo-1621981386829-9b766882fa04?auto=format&fit=crop&q=80&w=2000",
    category: "Business",
    tags: ["Economy", "Currency", "Forex", "Trade"],
    author: "James Mwangi",
    publishDate: "2026-03-03T09:00:00Z",
    readTime: "3 min read",
    isFeatured: false,
    isBreaking: true
  },
  {
    id: "5",
    title: "Senate Passes Controversial ICT Bill Amidst Protests",
    slug: "senate-passes-ict-bill",
    excerpt: "The Senate has passed the ICT Practitioners Bill, requiring all ICT professionals to be licensed. Critics argue it will stifle innovation in Kenya's thriving tech ecosystem.",
    content: `
      <p>Despite strong opposition from the tech community, the Senate has passed the ICT Practitioners Bill. The bill mandates the registration and licensing of all ICT practitioners in Kenya.</p>

      <h2>Key Provisions</h2>
      <p>The bill establishes an ICT Practitioners Institute to regulate the sector. Proponents argue it will weed out quacks and standardize quality. Opponents, however, see it as an unnecessary bureaucratic hurdle.</p>

      <h2>Tech Community Reaction</h2>
      <p>"This is a dark day for Silicon Savannah," tweeted a prominent tech CEO. "We are regulating ourselves into irrelevance."</p>
    `,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
    category: "Politics",
    tags: ["Technology", "Senate", "Legislation", "Innovation"],
    author: "Denis Wandera",
    publishDate: "2026-03-02T16:45:00Z",
    readTime: "4 min read",
    isFeatured: false,
    isBreaking: true
  },
  {
    id: "6",
    title: "Coffee Reforms: Farmers Start to See the Fruits",
    slug: "coffee-reforms-farmers-benefit",
    excerpt: "Direct settlement systems and the removal of brokers are finally putting money back into farmers' pockets. A look at the changing fortunes in Central Kenya.",
    content: `
      <p>For years, coffee farmers in Central Kenya have toiled with little to show for it. But recent government reforms aimed at dismantling cartels are beginning to bear fruit.</p>

      <h2>Direct Settlement System (DSS)</h2>
      <p>The introduction of the DSS means that payment for coffee sales now goes directly to the farmer's account, bypassing cooperatives and millers who previously held onto funds for months.</p>

      <h2>Rising Prices</h2>
      <p>With the removal of unnecessary intermediaries, farmers are realizing better prices per kilo. "I can finally pay school fees without taking a loan," says Peter Njoroge, a farmer in Nyeri.</p>
    `,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=2000",
    category: "Business",
    tags: ["Agriculture", "Coffee", "Reforms", "Farmers"],
    author: "Grace Wambui",
    publishDate: "2026-03-01T11:00:00Z",
    readTime: "5 min read",
    isFeatured: false,
    isBreaking: false
  },
  {
    id: "7",
    title: "Opinion: Why We Need a National Conversation on Mental Health",
    slug: "opinion-mental-health-conversation",
    excerpt: "The rising cases of suicide and domestic violence are a symptom of a deeper societal issue. It is time to destigmatize mental health and invest in support systems.",
    content: `
      <p>The headlines are grim. Every week, we read about tragic incidents of suicide or domestic violence. While economic hardship is a factor, we cannot ignore the mental health crisis brewing in our homes and workplaces.</p>

      <h2>Breaking the Silence</h2>
      <p>In many Kenyan communities, mental illness is still viewed as a curse or a weakness. This stigma prevents people from seeking help until it is too late.</p>

      <h2>Policy Action Needed</h2>
      <p>The government must move beyond rhetoric and allocate real resources to mental health services. We need counselors in schools, support systems in workplaces, and accessible care in our hospitals.</p>
    `,
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&q=80&w=2000",
    category: "Opinion",
    tags: ["Mental Health", "Society", "Wellness", "Health"],
    author: "Dr. Amani K.",
    publishDate: "2026-02-27T09:00:00Z",
    readTime: "4 min read",
    isFeatured: false,
    isBreaking: false
  },
  {
    id: "8",
    title: "Fact Check: Is the Government Planning to Tax M-Pesa Transactions Again?",
    slug: "fact-check-mpesa-tax-rumors",
    excerpt: "Social media has been abuzz with claims of a new levy on mobile money transfers. We verified the Finance Bill 2026 to get the truth.",
    content: `
      <p><strong>Claim:</strong> The government has introduced a new 5% tax on all M-Pesa transactions in the Finance Bill 2026.</p>
      
      <p><strong>Verdict: False.</strong></p>

      <h2>The Evidence</h2>
      <p>We have reviewed the Finance Bill 2026 tabled in Parliament. There is no clause proposing an additional tax on mobile money transactions. The current excise duty remains at 15%, unchanged from the previous financial year.</p>

      <h2>Origin of the Rumor</h2>
      <p>The rumor appears to have stemmed from a misinterpreted clause regarding digital service tax, which applies to foreign digital platforms, not local mobile money transfers.</p>
    `,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2000",
    category: "Fact Check",
    tags: ["Taxes", "M-Pesa", "Finance Bill", "Fake News"],
    author: "Fact Check Desk",
    publishDate: "2026-03-03T12:00:00Z",
    readTime: "2 min read",
    isFeatured: false,
    isBreaking: false
  },
  {
    id: "9",
    title: "Turkana's Underground Water: A Missed Opportunity?",
    slug: "turkana-underground-water-opportunity",
    excerpt: "Years after the discovery of massive aquifers in Turkana, the region still struggles with drought. What happened to the promise of a green desert?",
    content: `
      <p>In 2013, the discovery of the Lotikipi Aquifer in Turkana was hailed as a game-changer. With enough water to supply Kenya for 70 years, it promised to transform the arid region.</p>

      <h2>The Salinity Challenge</h2>
      <p>Subsequent studies revealed high salinity levels in parts of the aquifer, making the water unfit for direct consumption or agriculture without expensive desalination.</p>

      <h2>The Way Forward</h2>
      <p>Experts argue that with solar-powered desalination technology becoming cheaper, the project should be revisited. "We cannot let this resource lie idle while people starve," says local leader Joseph Ekai.</p>
    `,
    image: "https://images.unsplash.com/photo-1535202669325-149d4b561846?auto=format&fit=crop&q=80&w=2000",
    category: "Counties",
    tags: ["Turkana", "Water", "Drought", "Development"],
    author: "Denis Wandera",
    publishDate: "2026-02-26T14:00:00Z",
    readTime: "5 min read",
    isFeatured: false,
    isBreaking: false
  },
  {
    id: "10",
    title: "Opinion: The Role of Gen Z in Shaping Kenya's Political Future",
    slug: "opinion-gen-z-politics",
    excerpt: "From online activism to street protests, Kenya's youth are no longer passive observers. They are setting the agenda and demanding accountability.",
    content: `
      <p>The traditional political playbook in Kenya relied on tribal alliances and handouts. But a new demographic is disrupting this status quo. Generation Z, armed with smartphones and a refusal to settle for less, is changing the game.</p>

      <h2>Digital Democracy</h2>
      <p>Social media platforms like TikTok and X have become the new town halls. Here, policies are dissected, and leaders are held to account in real-time.</p>

      <h2>Beyond the Keyboard</h2>
      <p>We have seen this online energy translate into offline action, with youth-led protests demanding better governance. The political class can no longer afford to ignore this constituency.</p>
    `,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=2000",
    category: "Opinion",
    tags: ["Gen Z", "Politics", "Youth", "Activism"],
    author: "Kevin O.",
    publishDate: "2026-03-02T10:00:00Z",
    readTime: "4 min read",
    isFeatured: false,
    isBreaking: false
  },
  {
    id: "11",
    title: "Mombasa Port Records Highest Cargo Volume in History",
    slug: "mombasa-port-record-cargo",
    excerpt: "Efficiency improvements and new equipment at the Port of Mombasa have led to record-breaking performance, boosting Kenya's status as a regional logistics hub.",
    content: `
      <p>The Kenya Ports Authority (KPA) has reported a 10% increase in cargo throughput at the Port of Mombasa, the highest in its history.</p>

      <h2>Efficiency Gains</h2>
      <p>The introduction of new ship-to-shore cranes and the 24-hour operation schedule have significantly reduced ship turnaround time. This makes Mombasa a more attractive option for importers in Uganda, Rwanda, and DRC compared to Dar es Salaam.</p>
    `,
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=2000",
    category: "Business",
    tags: ["Mombasa", "Trade", "Logistics", "Economy"],
    author: "Ali Hassan",
    publishDate: "2026-03-01T08:30:00Z",
    readTime: "3 min read",
    isFeatured: false,
    isBreaking: false
  },
  {
    id: "12",
    title: "Explainer: The Housing Levy and You",
    slug: "explainer-housing-levy",
    excerpt: "Confused about the deductions on your payslip? We break down how the Affordable Housing Levy works, who pays, and what the benefits are.",
    content: `
      <p>The Affordable Housing Levy has been a subject of intense debate and legal battles. Here is a simple breakdown of what you need to know.</p>

      <h2>Who Pays?</h2>
      <p>All salaried employees and employers contribute 1.5% of the gross salary. Non-salaried Kenyans are also expected to contribute based on their income.</p>

      <h2>What is the Money For?</h2>
      <p>The funds are ring-fenced for the construction of affordable housing units across the country. The goal is to address the housing deficit and create jobs in the construction sector.</p>

      <h2>Can You Opt Out?</h2>
      <p>Currently, the levy is mandatory. However, there are provisions for accessing the units or withdrawing savings under specific conditions after a certain period.</p>
    `,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000",
    category: "National",
    tags: ["Housing", "Taxes", "Development", "Explainer"],
    author: "Denis Wandera",
    publishDate: "2026-02-25T13:00:00Z",
    readTime: "5 min read",
    isFeatured: false,
    isBreaking: false
  }
];
