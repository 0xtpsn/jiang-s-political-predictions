// ========================================
// DATA: PREDICTIONS
// ========================================
const predictions = [
    {
        id: 1,
        title: "Trump Will Win the 2024 Election",
        category: "US Politics",
        verdict: "correct",
        verdictLabel: "✅ Correct",
        confidence: "High",
        source: "Geo-Strategy #5",
        quote: "I'm making the prediction that he will win in November.",
        analysis: "Donald Trump won the 2024 presidential election, defeating Kamala Harris who replaced Biden as the Democratic nominee."
    },
    {
        id: 2,
        title: "Trump Will Pick Nikki Haley as VP",
        category: "US Politics",
        verdict: "wrong",
        verdictLabel: "❌ Wrong",
        confidence: "Medium",
        source: "Geo-Strategy #5",
        quote: "He will pick Nikki Haley as his vice president... I'll make the bet that he picks Nikki Haley.",
        analysis: "Trump picked JD Vance as his running mate, not Nikki Haley. Jiang did hedge this prediction, saying 'I'm not completely sure... JD Vance is also possible.'"
    },
    {
        id: 3,
        title: "Trump Wants a Third Term",
        category: "US Politics",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "High",
        source: "Civilization #END, Geo-Strategy Update #2",
        quote: "Donald Trump, president of the United States, he wants a third term... he's that narcissistic.",
        analysis: "Trump is currently in his second term as of March 2026. Whether he pursues a third term or a constitutional amendment remains to be seen."
    },
    {
        id: 4,
        title: "Biden Coalition Will Fracture",
        category: "US Politics",
        verdict: "correct",
        verdictLabel: "✅ Correct",
        confidence: "High",
        source: "Geo-Strategy #5",
        quote: "The Biden Coalition will not pull together because of inflation, illegal immigration, what's happening in Gaza, what's happening in Ukraine.",
        analysis: "Biden dropped out of the race; the Democratic coalition fractured over Gaza, age concerns, and economic issues. Kamala Harris replaced him but still lost."
    },
    {
        id: 5,
        title: "The United States Will Go to War with Iran",
        category: "US-Iran War",
        verdict: "correct",
        verdictLabel: "✅ Correct",
        confidence: "Very High",
        source: "Geo-Strategy #8, #9, #10, #11; Game Theory #9; Updates #1, #2",
        quote: "War between United States and Iran is very likely in the next two to four years.",
        analysis: "The US and Israel launched strikes on Iranian nuclear facilities. A US-Iran military conflict is actively underway as of early 2026. This was Jiang's most central and persistent prediction."
    },
    {
        id: 6,
        title: "Israel & US Will Launch a 'Decapitation Strike' on Iran's Supreme Leader",
        category: "US-Iran War",
        verdict: "correct",
        verdictLabel: "✅ Correct",
        confidence: "High",
        source: "Game Theory #9",
        quote: "The Israelis and Americans launched a decapitation strike against Khamenei who is the supreme leader of Iran.",
        analysis: "Per the transcript's own reporting, this event occurred as described."
    },
    {
        id: 7,
        title: "Iran Will Close the Strait of Hormuz",
        category: "US-Iran War",
        verdict: "correct",
        verdictLabel: "✅ Correct",
        confidence: "High",
        source: "Game Theory #9, Geo-Strategy #8, Civilization #END",
        quote: "The Iranians have closed the strait of Hormuz... we can expect that the entire global economy will suffer greatly over the next few months.",
        analysis: "Referenced as having occurred in the Game Theory #9 transcript. The Strait of Hormuz disruption has contributed to global energy price spikes."
    },
    {
        id: 8,
        title: "Iran Will Attack GCC Countries (Dubai, Bahrain, Qatar, Saudi Arabia)",
        category: "US-Iran War",
        verdict: "correct",
        verdictLabel: "✅ Correct",
        confidence: "High",
        source: "Game Theory #9",
        quote: "The Iranians attacked the GCC. Dubai, Abu Dhabi, Bahrain, Qatar, Kuwait. Dubai as a city in the long term it is dead.",
        analysis: "Per the transcript, Iranian attacks on GCC states began after the war escalated."
    },
    {
        id: 9,
        title: "The US Will Eventually Use Ground Troops in Iran",
        category: "US-Iran War",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "High",
        source: "Geo-Strategy #8, Update #2",
        quote: "All three major players, Donald Trump, Israel, and Iran want America to use ground troops in Iran for their own selfish individual purposes.",
        analysis: "As of March 2026, the conflict is primarily an air/missile campaign. Ground invasion has not yet occurred."
    },
    {
        id: 10,
        title: "US Ground Troops Would Be Trapped (Sunk Cost Fallacy)",
        category: "US-Iran War",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "High",
        source: "Geo-Strategy #8",
        quote: "Once it becomes trapped, sunk cost fallacy comes into play and America just puts in all its resources into the country but it's a black hole.",
        analysis: "Contingent on ground troops being deployed. Jiang draws parallels to Athens' Sicilian Expedition and Vietnam War."
    },
    {
        id: 11,
        title: "Iran Wants the US to Invade (The 'Iran Trap')",
        category: "US-Iran War",
        verdict: "unfalsifiable",
        verdictLabel: "🔮 Unfalsifiable",
        confidence: "High",
        source: "Geo-Strategy #8, Update #2",
        quote: "Iran wants to force a US invasion knowing that if the US invades it has to lose the war.",
        analysis: "Iran's true strategic intentions are not publicly knowable. This is an interpretive framework."
    },
    {
        id: 12,
        title: "Nuclear Weapons Will Not Be Used (Putin's Deterrence)",
        category: "US-Iran War",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "High",
        source: "Geo-Strategy #8, Update #1",
        quote: "Putin says from the onset no one is allowed to use nuclear weapons. If Iran uses nuclear weapons I will nuke Iran. If the United States uses nuclear weapons I will nuke the United States.",
        analysis: "No nuclear weapons have been used as of March 2026, but Putin has not made such an explicit public declaration either."
    },
    {
        id: 13,
        title: "Putin's Goal Is to Destroy the American Empire",
        category: "Russia & Putin",
        verdict: "unfalsifiable",
        verdictLabel: "🔮 Unfalsifiable",
        confidence: "Very High",
        source: "Geo-Strategy #9, #10, Civilization #END",
        quote: "Putin loves his country Russia and he believes that Western consumerism has corrupted his nation... he needs to destroy the Empire.",
        analysis: "This is an interpretive framework of Putin's intentions — a core thesis of the channel — rather than a falsifiable prediction."
    },
    {
        id: 14,
        title: "Putin Will Drag On the Ukraine War (But Not Expand It)",
        category: "Russia & Putin",
        verdict: "partial",
        verdictLabel: "🔶 Partial",
        confidence: "High",
        source: "Geo-Strategy #10",
        quote: "He will drag on the Ukraine war... he will not end it, he will not seek peace, he will not negotiate peace terms... but he doesn't want to expand it.",
        analysis: "The war has indeed dragged on for 4+ years and Russia has not expanded to NATO countries. However, US-brokered ceasefire negotiations underway in early 2026 suggest Russia may negotiate under favorable terms."
    },
    {
        id: 15,
        title: "Russia Has Won the Ukraine War Through Attrition",
        category: "Russia & Putin",
        verdict: "partial",
        verdictLabel: "🔶 Partial",
        confidence: "High",
        source: "Geo-Strategy #10",
        quote: "Russia has basically won the war... Ukraine has lost maybe 500,000 men in this war so they had no more manpower.",
        analysis: "Russia holds significant Ukrainian territory and Ukraine faces severe manpower shortages. 'Won' is debatable — the conflict remains unresolved as of March 2026."
    },
    {
        id: 16,
        title: "Russia–North Korea Mutual Defense Pact to Create Multi-Front Distraction",
        category: "Russia & Putin",
        verdict: "correct",
        verdictLabel: "✅ Correct",
        confidence: "High",
        source: "Civilization #END",
        quote: "Putin signed an agreement with Kim Jong Un... a mutual defense pact... if America attacks Iran, he needs to throw America off balance.",
        analysis: "Russia and North Korea signed a mutual defense treaty in June 2024. North Korea deployed troops to assist Russia in Ukraine."
    },
    {
        id: 17,
        title: "North Korea Will Become More Belligerent",
        category: "Russia & Putin",
        verdict: "partial",
        verdictLabel: "🔶 Partial",
        confidence: "Medium",
        source: "Geo-Strategy #10",
        quote: "North Korea can now take the initiative... the threat of North Korea will force America to divert resources to South Korea.",
        analysis: "North Korea has escalated provocations (missile tests, severing inter-Korean ties) but hasn't created a genuine military crisis requiring US force diversion."
    },
    {
        id: 18,
        title: "Israel's True Goal Is 'Greater Israel' — Removing Both Iran AND America from the Middle East",
        category: "Israel & Middle East",
        verdict: "unfalsifiable",
        verdictLabel: "🔮 Unfalsifiable",
        confidence: "High",
        source: "Geo-Strategy Update #2, Civilization #END",
        quote: "Israel absolutely no good to defeat Iran. They need to both defeat Iran and America. The best way to do that is to entangle both into war.",
        analysis: "Speculative interpretation of Israeli grand strategy. Not falsifiable with publicly available information."
    },
    {
        id: 19,
        title: "GCC (Gulf States) Will Collapse Economically",
        category: "Israel & Middle East",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "High",
        source: "Game Theory #9",
        quote: "In the long term we can expect the entire GCC area including Saudi Arabia to eventually collapse. Dubai as a city in the long term it is dead.",
        analysis: "GCC economies have been disrupted by the Iran conflict but have not 'collapsed.' Dubai's economy has been significantly impacted by regional instability."
    },
    {
        id: 20,
        title: "Bahrain Will Fall First (Shia Revolution)",
        category: "Israel & Middle East",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "Medium",
        source: "Game Theory #9",
        quote: "I think Bahrain will be the first to fall.",
        analysis: "50%+ Shia population ruled by Sunni minority + US 5th Fleet base as target. Bahrain has experienced unrest but no revolution as of March 2026."
    },
    {
        id: 21,
        title: "Iran's Counter-Strategy: Global Shia Jihad + Uniting Muslim World",
        category: "Israel & Middle East",
        verdict: "partial",
        verdictLabel: "🔶 Partial",
        confidence: "High",
        source: "Game Theory #9",
        quote: "The first strategy is to create an international global jihad of the Shia against the American empire.",
        analysis: "Shia militias have attacked US targets across the Middle East. Iran has galvanized Shia solidarity but hasn't united the broader Muslim world under its leadership."
    },
    {
        id: 22,
        title: "The Second American Civil War",
        category: "US Domestic",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "High",
        source: "Geo-Strategy #11",
        quote: "America will descend into civil war... ignited by Trump's re-election and a war with Iran.",
        analysis: "Political polarization is extreme and Trump has been re-elected. While no civil war has occurred yet, the prediction's conditions (re-election + Iran war) are still unfolding."
    },
    {
        id: 23,
        title: "America Will Become a Theocratic, Isolationist Nation",
        category: "US Domestic",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "Low",
        source: "Geo-Strategy #11",
        quote: "A future theocratic, isolationist America.",
        analysis: "Christian nationalism has gained influence under Trump 2.0, but the US remains a secular democracy with active international engagements."
    },
    {
        id: 24,
        title: "American Military Hubris Will Lead to Defeat",
        category: "US Domestic",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "High",
        source: "Geo-Strategy #8, Civilization #END",
        quote: "The American military... cannot imagine the possibility that they could be defeated in Iran. Shock and awe... created hubris in the American Military.",
        analysis: "The US has engaged militarily in the Middle East but the ultimate outcome of the Iran conflict is undetermined as of March 2026."
    },
    {
        id: 25,
        title: "BRICS Will Continue to Expand",
        category: "Global Economics",
        verdict: "correct",
        verdictLabel: "✅ Correct",
        confidence: "High",
        source: "Geo-Strategy #10",
        quote: "We will see BRICS continue to expand... maybe formally announce a new currency or a new trading system.",
        analysis: "BRICS expanded in January 2024 to include Saudi Arabia, UAE, Iran, Egypt, and Ethiopia. No new currency has been formally announced yet."
    },
    {
        id: 26,
        title: "The Petrodollar System Will Be Threatened",
        category: "Global Economics",
        verdict: "partial",
        verdictLabel: "🔶 Partial",
        confidence: "High",
        source: "Civilization #END, Geo-Strategy #10",
        quote: "If the GCC collapses, the American economy and American empire both collapse at the same time. Saudi Arabia has joined BRICS.",
        analysis: "Saudi Arabia has diversified away from dollar-exclusive oil trade (accepting yuan, etc.) and joined BRICS. But the petrodollar system has not collapsed."
    },
    {
        id: 27,
        title: "US Stock Market Collapse Due to Middle East Instability",
        category: "Global Economics",
        verdict: "partial",
        verdictLabel: "🔶 Partial",
        confidence: "High",
        source: "Game Theory #9",
        quote: "If these nations are no longer able to invest in the stock market, these companies will collapse in value and with that that would lead to economic depression.",
        analysis: "Markets have experienced significant volatility and corrections related to Middle East conflict, but no 'economic depression' has materialized."
    },
    {
        id: 28,
        title: "Bitcoin Is Controlled by the American Military",
        category: "Global Economics",
        verdict: "wrong",
        verdictLabel: "❌ Wrong",
        confidence: "High (stated as fact)",
        source: "Civilization #END",
        quote: "Bitcoin is being controlled by the American military along with certain technology companies and they're trying to displace the USD.",
        analysis: "There is no credible evidence that Bitcoin is controlled by the US military. This is a conspiracy theory with no supporting evidence."
    },
    {
        id: 29,
        title: "China Will NOT Invade Taiwan",
        category: "China",
        verdict: "correct",
        verdictLabel: "✅ Correct",
        confidence: "High",
        source: "Civilization #END",
        quote: "China is dependent on the American economy. So I do not believe this will happen.",
        analysis: "China has not invaded Taiwan as of March 2026. Cross-strait tensions remain high but no military action has been taken."
    },
    {
        id: 30,
        title: "US-China Rapprochement Will Occur",
        category: "China",
        verdict: "partial",
        verdictLabel: "🔶 Partial (Lean Wrong)",
        confidence: "Medium",
        source: "Civilization #END",
        quote: "America and China become best friends — or not best friends, but they'll have a rapprochement.",
        analysis: "There has been diplomatic engagement (Biden-Xi meetings, some tariff rollbacks under Trump 2.0), but the relationship remains deeply adversarial with ongoing trade war and tech restrictions."
    },
    {
        id: 31,
        title: "Germany-Russia Rapprochement Will Occur",
        category: "China",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "Medium",
        source: "Civilization #END",
        quote: "Germany and Russia will have a rapprochement... these are going to be the two big geopolitical surprises next five years.",
        analysis: "Germany has maintained its anti-Russia stance so far, but the prediction was framed as a 'next five years' surprise. Geopolitical shifts could still occur as economic pressures mount."
    },
    {
        id: 32,
        title: "American Empire Will End Through Overextension + Debt + Civil Discord",
        category: "Theoretical",
        verdict: "unfalsifiable",
        verdictLabel: "🔮 Unfalsifiable",
        confidence: "Very High",
        source: "Geo-Strategy #10, Civilization #END",
        quote: "The three mechanisms: Military overextension, unsustainable debt ($37T+), internal political polarization.",
        analysis: "This is a long-term civilizational thesis — the core framework of the entire channel. It is not a testable short-term prediction but has explanatory merit."
    },
    {
        id: 33,
        title: "'Putinism': Continuous Warfare as National Rejuvenation",
        category: "Theoretical",
        verdict: "unfalsifiable",
        verdictLabel: "🔮 Unfalsifiable",
        confidence: "High",
        source: "Geo-Strategy #9",
        quote: "Putinism is a concept of continuous warfare for national discipline and strength, contrasting it with consumerism.",
        analysis: "An interpretive framework for understanding Putin's domestic strategy, not a falsifiable prediction."
    },
    {
        id: 34,
        title: "No Ceasefire or Peace Is Possible in the US-Iran War",
        category: "US-Iran War",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "Very High",
        source: "Game Theory #13",
        quote: "There can be no ceasefire. There can be no truce. There can be no peace because both the American Empire and Iran are fighting for the nature and structure of reality itself.",
        analysis: "As of March 2026, no ceasefire has been reached between the US and Iran. Jiang frames this as a structural impossibility rather than a diplomatic failure — both sides need to win to maintain their respective systems."
    },
    {
        id: 35,
        title: "The US-Iran War Ends When the Global Economy Is Destroyed",
        category: "Global Economics",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "High",
        source: "Game Theory #13",
        quote: "This war ends when the global economy is destroyed. Because once the global economy is destroyed, this entire edifice collapses.",
        analysis: "Jiang argues the war's endpoint is the collapse of the US-led global financial order, not a military victory. The global economy has been strained but not destroyed as of March 2026."
    },
    {
        id: 36,
        title: "A New Multipolar World Order Will Emerge After the War",
        category: "Theoretical",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "High",
        source: "Game Theory #13",
        quote: "What will happen after this war? Well, a new world will emerge where there are different spheres of influence.",
        analysis: "Jiang predicts the post-war world will be multipolar with distinct spheres of influence, replacing the current US-dominated unipolar order. This aligns with broader BRICS expansion trends but remains to be seen."
    },
    {
        id: 37,
        title: "AI Will Replace the US Dollar as the Primary Mechanism of Wealth Extraction",
        category: "Global Economics",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "Medium",
        source: "Game Theory #13",
        quote: "There's actually a war going on for the soul of humanity for the human consciousness between US dollar the old world order and artificial intelligence the new world order.",
        analysis: "A novel claim framing AI as a successor to the US dollar in structuring global wealth extraction. While AI is reshaping economies, there is no direct evidence it is being designed as a replacement for the dollar-based financial order."
    },
    {
        id: 38,
        title: "An Elite Civil War Between Parasitic Elites and Counter-Elites",
        category: "US Domestic",
        verdict: "partial",
        verdictLabel: "🔶 Partial",
        confidence: "High",
        source: "Game Theory #13, Game Theory #14",
        quote: "What's happening is a civil war between the elite, these people, and the counter elite, people who want to take the position and become the parasites.",
        analysis: "Jiang frames the release of the Epstein files and current political turmoil as evidence of an intra-elite power struggle. The Trump movement's anti-establishment posture and exposure of establishment networks lends some support to this framework. In GT #14, he further develops this as a conflict between Wall Street (finance/Democrats) and Silicon Valley (AI/tech/Republicans) over government bailouts."
    },
    {
        id: 39,
        title: "Internal Civil Conflicts Drive Assassination Intelligence",
        category: "US-Iran War",
        verdict: "unfalsifiable",
        verdictLabel: "🔮 Unfalsifiable",
        confidence: "High",
        source: "Game Theory #14",
        quote: "These different factions are providing intelligence to their enemies in order to eliminate their internal enemies.",
        analysis: "Jiang argues that the reason both Israel and Iran are so effectively killing each other's leaders is not primarily through electronic surveillance (SIGINT), but through human intelligence (HUMINT) provided by rival internal factions. This is a speculative interpretation — plausible but unverifiable."
    },
    {
        id: 40,
        title: "The World Will Become More Theocratic (Iran, Israel, and America)",
        category: "Theoretical",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "High",
        source: "Game Theory #14",
        quote: "Iran becomes much more theocratic and extreme and nationalistic. Israel abandons democracy and embraces theocracy. America will also abandon democracy and embrace theocracy because that is a general trend of the world.",
        analysis: "Jiang predicts a global shift from the secular financial order to a nationalist theocratic order over the next 5-10 years. Religious nationalism has strengthened in all three countries, but full theocratic transformation has not occurred."
    },
    {
        id: 41,
        title: "The Private Credit Bubble and AI Bubble Will Both Burst",
        category: "Global Economics",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "High",
        source: "Game Theory #14",
        quote: "Both finance and AI are bubbles that will burst. They're parasites... there's a private credit bubble of about $2 trillion... and the AI bubble where companies just lend money to each other.",
        analysis: "Jiang identifies two major financial bubbles — the ~$2 trillion private credit market and the AI investment bubble — arguing both are sustained by moral hazard and expectation of government bailouts. As of March 2026, both sectors show signs of stress but neither has burst."
    },
    {
        id: 42,
        title: "A Global Economic Depression Is Coming",
        category: "Global Economics",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "High",
        source: "Game Theory #14",
        quote: "The world is headed towards an economic depression... a splintering, a rupture in the world. And so you're not going to be able to afford to fly to Maldives for vacation. There will be no avocados in the supermarket.",
        analysis: "Jiang predicts a severe global economic depression driven by the convergence of war, energy disruption, and financial bubble bursts. While the global economy has been strained, a full depression has not materialized as of March 2026."
    },
    {
        id: 43,
        title: "America Will Expand into Canada, Mexico, and the Western Hemisphere",
        category: "US Domestic",
        verdict: "partial",
        verdictLabel: "🔶 Partial",
        confidence: "High",
        source: "Tucker Carlson Interview",
        quote: "If America is forced to retreat back into the Western Hemisphere, it needs to worry about resources... America has absolutely no choice but to ensure its own supply networks. That means eventually taking over Greenland, Canada, Mexico.",
        analysis: "Trump has openly discussed acquiring Greenland and making Canada the '51st state,' and has exerted significant economic pressure on Mexico. While outright annexation hasn't occurred, the direction of US policy aligns with Jiang's thesis of hemispheric consolidation."
    },
    {
        id: 44,
        title: "America Will Experience Sectarian Violence (Similar to The Troubles)",
        category: "US Domestic",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "High",
        source: "Tucker Carlson Interview, Geo-Strategy #11",
        quote: "America is probably going to suffer many years of sectarian violence, not a full-fledged civil war, but maybe something along the lines of the troubles in Ireland.",
        analysis: "Jiang refines his earlier civil war prediction into something more specific: prolonged sectarian violence with insurgent groups fighting the state, triggered by the Iran war and a potential national draft. As of March 2026, political polarization is extreme but organized sectarian violence has not yet materialized."
    },
    {
        id: 45,
        title: "Japan Will Rise Again as a Major Power",
        category: "China",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "High",
        source: "Tucker Carlson Interview",
        quote: "If I were to bet if you give me a billion dollars and said in East Asia you can invest your money either in China or Japan... I would invest all my money in Japan.",
        analysis: "Despite aging population, resource dependency, and 30 years of deflation, Jiang bets on Japan's historical resilience — citing the Mongol invasions, Meiji Restoration, and post-WWII recovery. A contrarian take given China's current economic dominance in the region."
    },
    {
        id: 46,
        title: "Korean Reunification Will Happen",
        category: "China",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "Medium",
        source: "Tucker Carlson Interview",
        quote: "I would not be surprised if North Korea and South Korea were to come to a compromise... both nations aspire for national reunification and because China and Japan will be in conflict.",
        analysis: "Jiang suggests that as China and Japan enter into conflict, the Korean peninsula could leverage the instability for reunification. As of March 2026, inter-Korean relations remain hostile with no signs of compromise."
    },
    {
        id: 47,
        title: "Israel and Iran Will Eventually Ally",
        category: "geopolitics",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "High",
        source: "Game Theory #16: Pax Judaica Rising",
        quote: "If Iran proves it is strong and GCC proves it's weak... Israel will abandon the GCC and the United States and Israel will work with Iran to build a new order in the Middle East because that's the law of the jungle.",
        analysis: "Applying game theory and the geopolitical logic that 'the strong respect each other and prey on the weak', Jiang predicts an eventual alliance of convenience between regional powers Israel and Iran once the US empire is forced out, despite current ideological enmity."
    },
    {
        id: 48,
        title: "Engineered US Financial Collapse",
        category: "economics",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "High",
        source: "Game Theory #17: The Great Reset",
        quote: "Transnational capital needs to first collapse the American economy... to shift the center of gravity from America to Israel. You want to engineer a financial crisis... to buy up these resources... It'll be suddenly.",
        analysis: "Jiang theorizes that transnational capital will deliberately engineer a severe, sudden collapse of the US stock market and private credit bubbles in order to extract wealth before shifting the global center of economic gravity to Israel."
    },
    {
        id: 49,
        title: "Creation of a North American Technate",
        category: "geopolitics",
        verdict: "pending",
        verdictLabel: "⏳ Pending",
        confidence: "High",
        source: "Game Theory #18: Trump World Order",
        quote: "The grand plan for America is something called the Technate... By collapsing the Middle East, you make Asia and Europe dependent on North American energy and fertilizer... to transform America from finance to resource exportation and manufacturing.",
        analysis: "Jiang predicts Trump's chaotic foreign policy and Middle East wars are calculated moves to collapse the globalized financial system. This forces a transition towards a self-sufficient, resource-driven 'Fortress America' (Technate) spanning North America."
    }
];

// ========================================
// DATA: LECTURES
// ========================================
const lectures = [
    // Civilization Series
    { title: "Explaining Humanity's Transition to Agriculture", series: "civilization", number: "#1", hasPredictions: false },
    { title: "Religion and the Dawn of Society", series: "civilization", number: "#2", hasPredictions: false },
    { title: "The Religious Imagination", series: "civilization", number: "#3", hasPredictions: false },
    { title: "The Paradise Lost of Marija Gimbutas", series: "civilization", number: "#4", hasPredictions: false },
    { title: "The Yamnaya Conquest of Europe", series: "civilization", number: "#5", hasPredictions: false },
    { title: "Elite Overproduction and the Bronze Age Collapse", series: "civilization", number: "#6", hasPredictions: false },
    { title: "Homer's Iliad and the Birth of Greek Civilization", series: "civilization", number: "#7", hasPredictions: false },
    { title: "Rat Utopia and the Peloponnesian War", series: "civilization", number: "#8", hasPredictions: false },
    { title: "Aeschylus, Sophocles, and Euripides as Prophets of Democracy", series: "civilization", number: "#9", hasPredictions: false },
    { title: "The Trial of Socrates and Plato's Allegory of the Cave", series: "civilization", number: "#10", hasPredictions: false },
    { title: "The Greatness of Philip II of Macedon", series: "civilization", number: "#11", hasPredictions: false },
    { title: "The Tyranny of Alexander the Great", series: "civilization", number: "#12", hasPredictions: false },
    { title: "Aristotle and the Greek Legacy", series: "civilization", number: "#13", hasPredictions: false },
    { title: "Hannibal Barca, Lucius Brutus, and the Triumph of Rome", series: "civilization", number: "#14", hasPredictions: false },
    { title: "The Myth-Making Genius of Julius Caesar", series: "civilization", number: "#15", hasPredictions: false },
    { title: "Julius Caesar's Will and Octavian's Birth of Empire", series: "civilization", number: "#16", hasPredictions: false },
    { title: "Homer, Vergil, and the War for the Soul of Rome", series: "civilization", number: "#17", hasPredictions: false },
    { title: "The Great Pyramid as Ancient Egypt's Manhattan Project", series: "civilization", number: "#18", hasPredictions: false },
    { title: "Gilgamesh and Mesopotamia's Quest for Immortality", series: "civilization", number: "#19", hasPredictions: false },
    { title: "The Proto-Buddhists of the Indus Valley Civilization", series: "civilization", number: "#20", hasPredictions: false },
    { title: "The Apology of King David of Israel", series: "civilization", number: "#21", hasPredictions: false },
    { title: "The Literary Genesis of the Yahwist", series: "civilization", number: "#22", hasPredictions: false },
    { title: "Cyrus the Great as Messiah", series: "civilization", number: "#23", hasPredictions: false },
    { title: "Resurrecting the Gnostic Jesus", series: "civilization", number: "#24", hasPredictions: false },
    { title: "Paul of Tarsus, Messiah of Rome", series: "civilization", number: "#25", hasPredictions: false },
    { title: "Constantine's Monotheistic Revolution", series: "civilization", number: "#26", hasPredictions: false },
    { title: "Augustine's Empire of God", series: "civilization", number: "#27", hasPredictions: false },
    { title: "Muhammad's Revolution of God", series: "civilization", number: "#28", hasPredictions: false },
    { title: "Dante's Divine Comedy and the Liberation of the Human Imagination", series: "civilization", number: "#29", hasPredictions: false },
    { title: "Dante as the Second Coming of Homer", series: "civilization", number: "#30", hasPredictions: false },
    { title: "The Oceanic Currents of History", series: "civilization", number: "#31", hasPredictions: false },
    { title: "Rome's Rise, Fall, and Legacy", series: "civilization", number: "#32", hasPredictions: false },
    { title: "The Rise and Fall of the Byzantine Empire", series: "civilization", number: "#33", hasPredictions: false },
    { title: "The Useful Fiction of the Holy Roman Empire", series: "civilization", number: "#34", hasPredictions: false },
    { title: "The Viking Legacy", series: "civilization", number: "#35", hasPredictions: false },
    { title: "Memory of the Norse", series: "civilization", number: "#36", hasPredictions: false },
    { title: "The Golden Age of Islam", series: "civilization", number: "#37", hasPredictions: false },
    { title: "Twilight of the Middle Kingdom", series: "civilization", number: "#38", hasPredictions: false },
    { title: "Genghis Khan, World Shatterer", series: "civilization", number: "#39", hasPredictions: false },
    { title: "Church and Empire", series: "civilization", number: "#40", hasPredictions: false },
    { title: "Dante's Quiet Revolution", series: "civilization", number: "#41", hasPredictions: false },
    { title: "The Protestant Reformation and the Birth of Capitalism", series: "civilization", number: "#42", hasPredictions: false },
    { title: "The Structure of Scientific Revolutions", series: "civilization", number: "#43", hasPredictions: false },
    { title: "The Spanish Conquest of the New World", series: "civilization", number: "#44", hasPredictions: false },
    { title: "The Gunpowder Revolution", series: "civilization", number: "#45", hasPredictions: false },
    { title: "The Revolution of Reason", series: "civilization", number: "#46", hasPredictions: false },
    { title: "The Passion of Robespierre", series: "civilization", number: "#47", hasPredictions: false },
    { title: "Napoleon's Empire of Myth", series: "civilization", number: "#48", hasPredictions: false },
    { title: "The Dutch Golden Age and the Rise of the Middle Class", series: "civilization", number: "#49", hasPredictions: false },
    { title: "Rule, Britannia!", series: "civilization", number: "#50", hasPredictions: false },
    { title: "Shakespeare's Language of Empire", series: "civilization", number: "#51", hasPredictions: false },
    { title: "Empire of Democracy", series: "civilization", number: "#52", hasPredictions: false },
    { title: "Dostoevsky and the Soul of Russia", series: "civilization", number: "#53", hasPredictions: false },
    { title: "The German Will to Power", series: "civilization", number: "#54", hasPredictions: false },
    { title: "Kant, Hegel, and the Theory of Everything", series: "civilization", number: "#55", hasPredictions: false },
    { title: "What Marx Got Wrong", series: "civilization", number: "#56", hasPredictions: false },
    { title: "How Modernism Ruined Everything", series: "civilization", number: "#57", hasPredictions: false },
    { title: "Birth of the Nation-State", series: "civilization", number: "#58", hasPredictions: false },
    { title: "The Man of Steel", series: "civilization", number: "#59", hasPredictions: false },
    { title: "The Decline and Fall of the American Empire", series: "civilization", number: "#END", hasPredictions: true },
    { title: "Meet Professor Jiang", series: "civilization", number: "BONUS", hasPredictions: false },
    { title: "Meet the Students", series: "civilization", number: "BONUS", hasPredictions: false },

    // Secret History Series
    { title: "How Power Works", series: "secret-history", number: "#1", hasPredictions: false },
    { title: "How Societies Collapse", series: "secret-history", number: "#2", hasPredictions: false },
    { title: "Death by Gerontocracy", series: "secret-history", number: "#3", hasPredictions: false },
    { title: "How Evil Triumphs", series: "secret-history", number: "#4", hasPredictions: false },
    { title: "The Birth of Evil", series: "secret-history", number: "#5", hasPredictions: false },
    { title: "The Psychology of Evil", series: "secret-history", number: "#6", hasPredictions: false },
    { title: "Death by Meritocracy", series: "secret-history", number: "#7", hasPredictions: false },
    { title: "Death by Bureaucracy", series: "secret-history", number: "#8", hasPredictions: false },
    { title: "The Theory of Everything", series: "secret-history", number: "#9", hasPredictions: false },
    { title: "The Conspiracy of Evil", series: "secret-history", number: "#10", hasPredictions: false },
    { title: "Dawn of the Human Imagination", series: "secret-history", number: "#11", hasPredictions: false },
    { title: "Heaven on Earth", series: "secret-history", number: "#12", hasPredictions: false },
    { title: "Mandate of Heaven", series: "secret-history", number: "#13", hasPredictions: false },
    { title: "Legacy of the Steppes", series: "secret-history", number: "#14", hasPredictions: false },
    { title: "Capital and the Bronze Age Collapse", series: "secret-history", number: "#15", hasPredictions: false },
    { title: "The Big Bang of Greek Civilization", series: "secret-history", number: "#16", hasPredictions: false },
    { title: "Literary Genesis", series: "secret-history", number: "#17", hasPredictions: false },
    { title: "Thus Spoke Zarathustra", series: "secret-history", number: "#18", hasPredictions: false },
    { title: "Dawn of the Jews", series: "secret-history", number: "#19", hasPredictions: false },
    { title: "The Hellenistic World", series: "secret-history", number: "#20", hasPredictions: false },
    { title: "Roman Anti-Civilization", series: "secret-history", number: "#21", hasPredictions: false },
    { title: "The Divine Spark of Jesus", series: "secret-history", number: "#22", hasPredictions: false },
    { title: "The Organization of Evil", series: "secret-history", number: "#23", hasPredictions: false },
    { title: "Empire of Church", series: "secret-history", number: "#24", hasPredictions: false },
    { title: "Capital of Evil", series: "secret-history", number: "#25", hasPredictions: false },
    { title: "Faith of Evil", series: "secret-history", number: "#26", hasPredictions: false },
    { title: "Empire of Evil", series: "secret-history", number: "#27", hasPredictions: false },
    { title: "Pax Judaica", series: "secret-history", number: "#END", hasPredictions: false },

    // Geo-Strategy Series
    { title: "Iran's Strategy Matrix", series: "geo-strategy", number: "#1", hasPredictions: false },
    { title: "Christian Zionism and the Middle East Conflict", series: "geo-strategy", number: "#2", hasPredictions: false },
    { title: "How Empire is Destroying America", series: "geo-strategy", number: "#3", hasPredictions: false },
    { title: "Saudi Arabia's Trump Card Against Iran", series: "geo-strategy", number: "#4", hasPredictions: false },
    { title: "Why Trump Will Win (And Pick Nikki Haley as VP)", series: "geo-strategy", number: "#5", hasPredictions: true },
    { title: "America's Imperial Hubris", series: "geo-strategy", number: "#6", hasPredictions: false },
    { title: "Who Killed Iranian President Ebrahim Raisi?", series: "geo-strategy", number: "#7", hasPredictions: false },
    { title: "The Iran Trap", series: "geo-strategy", number: "#8", hasPredictions: true },
    { title: "Putin's War for the Soul of Russia", series: "geo-strategy", number: "#9", hasPredictions: true },
    { title: "Putin's Strategic Imagination", series: "geo-strategy", number: "#10", hasPredictions: true },
    { title: "The Second American Civil War", series: "geo-strategy", number: "#11", hasPredictions: true },
    { title: "Psychohistory (The Science of Imagining the Future)", series: "geo-strategy", number: "#END", hasPredictions: false },

    // Geo-Strategy Updates
    { title: "US-Iran War Incoming", series: "geo-strategy", number: "Update #1", hasPredictions: true },
    { title: "WWIII Begins, Let's Game Theory", series: "geo-strategy", number: "Update #2", hasPredictions: true },
    { title: "The Messianic Calling", series: "geo-strategy", number: "Update #3", hasPredictions: false },
    { title: "Newton's Divine Plan", series: "geo-strategy", number: "Update #4", hasPredictions: false },
    { title: "The Universal Law of Game Theory", series: "geo-strategy", number: "Update #5", hasPredictions: false },
    { title: "Is Putin the Übermensch?", series: "geo-strategy", number: "Update #6", hasPredictions: false },
    { title: "When Eschatologies Converge", series: "geo-strategy", number: "Update #7", hasPredictions: false },
    { title: "Why the West is Doomed", series: "geo-strategy", number: "Update #8", hasPredictions: false },

    // Game Theory Series
    { title: "The Dating Game", series: "game-theory", number: "#1", hasPredictions: false },
    { title: "Why Schools Suck", series: "game-theory", number: "#2", hasPredictions: false },
    { title: "Rich Dad, Poor Dad", series: "game-theory", number: "#3", hasPredictions: false },
    { title: "The Immigration Trap", series: "game-theory", number: "#4", hasPredictions: false },
    { title: "The World Game", series: "game-theory", number: "#5", hasPredictions: false },
    { title: "The World's Bank", series: "game-theory", number: "#6", hasPredictions: false },
    { title: "America's Game", series: "game-theory", number: "#7", hasPredictions: false },
    { title: "Communist Specter", series: "game-theory", number: "#8", hasPredictions: false },
    { title: "The US-Iran War", series: "game-theory", number: "#9", hasPredictions: true },
    { title: "The Law of Asymmetry", series: "game-theory", number: "#10", hasPredictions: false },
    { title: "The Law of Escalation", series: "game-theory", number: "#11", hasPredictions: false },
    { title: "The Law of Eschatological Convergence", series: "game-theory", number: "#12", hasPredictions: false },
    { title: "Epstein's World", series: "game-theory", number: "#13", hasPredictions: true },
    { title: "The Law of Proximity", series: "game-theory", number: "#14", hasPredictions: true },
    { title: "Pax Judaica Rising", series: "game-theory", number: "#16", hasPredictions: true },
    { title: "The Great Reset", series: "game-theory", number: "#17", hasPredictions: true },
    { title: "Trump World Order", series: "game-theory", number: "#18", hasPredictions: true },

    // Great Books Series
    { title: "Secrets of the Universe", series: "great-books", number: "#1", hasPredictions: false },
    { title: "Homer and the Invention of the Human", series: "great-books", number: "#2", hasPredictions: false },
    { title: "Poets and Prophets", series: "great-books", number: "#3", hasPredictions: false },
    { title: "The Conscious Universe", series: "great-books", number: "#4", hasPredictions: false },
    { title: "The Odyssey", series: "great-books", number: "#5", hasPredictions: false },
    { title: "The Intimacy of Love", series: "great-books", number: "#6", hasPredictions: false },

    // Other
    { title: "Jiang Xueqin Teaching Gay Talese Research Method (Introduction)", series: "other", number: "—", hasPredictions: false },
    { title: "Political Prophet Predicts the Next Phase in Iran, Trump's War Plan, & Israel's Plot to Sabotage It", series: "other", number: "—", hasPredictions: true },
];

// ========================================
// SERIES METADATA
// ========================================
const seriesMeta = {
    "civilization": { label: "Civilization", color: "civilization", desc: "A sweeping survey of human civilization from the dawn of agriculture through the fall of empires. 60+ episodes tracing power, religion, war, and philosophy across 10,000 years." },
    "secret-history": { label: "Secret History", color: "secret-history", desc: "An exploration of the hidden mechanisms behind power, societal collapse, evil, and bureaucratic decay. Reveals the structures that shape history behind the scenes." },
    "geo-strategy": { label: "Geo-Strategy", color: "geo-strategy", desc: "Real-time geopolitical analysis applying historical frameworks to contemporary events — Iran, Russia, Israel, the US, and the shifting balance of global power." },
    "game-theory": { label: "Game Theory", color: "game-theory", desc: "Applying game theory to everything from dating to global economics to the US-Iran conflict. Shows how rational actors create irrational outcomes." },
    "great-books": { label: "Great Books", color: "great-books", desc: "Deep dives into foundational literary works — Homer, the Bible, and the texts that shaped human consciousness and imagination." },
    "other": { label: "Other", color: "other", desc: "Miscellaneous lectures and teaching demonstrations." }
};

// Map series+number to the predictions that reference them in their source field
function getRelatedPredictions(series, number) {
    const seriesLabel = seriesMeta[series]?.label || '';
    // Build a search key like "Geo-Strategy #5" or "Game Theory #9"
    const searchKey = `${seriesLabel} ${number}`.toLowerCase();
    return predictions.filter(p => p.source.toLowerCase().includes(searchKey));
}

const YOUTUBE_CHANNEL = 'https://www.youtube.com/@PredictiveHistory/videos';

// ========================================
// RENDER PREDICTIONS
// ========================================
function renderPredictions() {
    const grid = document.getElementById('predictions-grid');
    grid.innerHTML = predictions.map((p, i) => `
        <div class="prediction-card fade-in" data-verdict="${p.verdict}" data-id="${p.id}" style="animation-delay: ${i * 0.04}s" onclick="openPredictionModal(${p.id})">
            <div class="card-header">
                <div class="card-title">${p.title}</div>
                <span class="verdict-badge ${p.verdict}">${p.verdictLabel}</span>
            </div>
            <div class="card-quote">"${p.quote}"</div>
            <div class="card-meta">
                <span class="meta-tag category">${p.category}</span>
                <span class="meta-tag">${p.source.split(',')[0]}</span>
            </div>
        </div>
    `).join('');
}

// ========================================
// RENDER LECTURES
// ========================================
function renderLectures() {
    const list = document.getElementById('lectures-list');
    list.innerHTML = lectures.map((l, i) => {
        const meta = seriesMeta[l.series];
        return `
            <div class="lecture-item fade-in" data-series="${l.series}" data-index="${i}" style="animation-delay: ${Math.min(i * 0.02, 1)}s" onclick="openLectureModal(${i})">
                <span class="lecture-number">${l.number}</span>
                <span class="lecture-series-badge ${l.series}">${meta.label}</span>
                <span class="lecture-title">${l.title}</span>
                <div class="lecture-meta-right">
                    ${l.hasPredictions ? '<span class="prediction-indicator">📊 Predictions</span>' : ''}
                    <span class="lecture-arrow">→</span>
                </div>
            </div>
        `;
    }).join('');
}

// ========================================
// FILTER PREDICTIONS
// ========================================
function setupPredictionFilters() {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            document.querySelectorAll('.prediction-card').forEach(card => {
                if (filter === 'all' || card.dataset.verdict === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// ========================================
// FILTER LECTURES BY SERIES
// ========================================
function setupSeriesTabs() {
    const tabs = document.querySelectorAll('.series-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const series = tab.dataset.series;
            document.querySelectorAll('.lecture-item').forEach(item => {
                if (series === 'all' || item.dataset.series === series) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// ========================================
// SEARCH LECTURES
// ========================================
function setupSearch() {
    const input = document.getElementById('search-input');
    input.addEventListener('input', () => {
        const query = input.value.toLowerCase().trim();
        // Reset series tab to "All" when searching
        document.querySelectorAll('.series-tab').forEach(t => t.classList.remove('active'));
        document.querySelector('.series-tab[data-series="all"]').classList.add('active');

        document.querySelectorAll('.lecture-item').forEach(item => {
            const title = item.querySelector('.lecture-title').textContent.toLowerCase();
            const series = item.dataset.series;
            if (!query || title.includes(query) || series.includes(query)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
}

// ========================================
// PREDICTION MODAL
// ========================================
function openPredictionModal(id) {
    const p = predictions.find(pred => pred.id === id);
    if (!p) return;

    const content = document.getElementById('modal-content');
    content.innerHTML = `
        <span class="verdict-badge ${p.verdict} modal-verdict">${p.verdictLabel}</span>
        <h2>${p.title}</h2>
        <div class="modal-quote">"${p.quote}"</div>
        <div class="modal-section">
            <div class="modal-section-title">Source</div>
            <div class="modal-section-content">${p.source}</div>
        </div>
        <div class="modal-section">
            <div class="modal-section-title">Category</div>
            <div class="modal-section-content">${p.category}</div>
        </div>
        <div class="modal-section">
            <div class="modal-section-title">Jiang's Confidence</div>
            <div class="modal-section-content">${p.confidence}</div>
        </div>
        <div class="modal-section">
            <div class="modal-section-title">Fact-Check Analysis</div>
            <div class="modal-section-content">${p.analysis}</div>
        </div>
    `;

    document.getElementById('modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ========================================
// LECTURE NAVIGATION — open as article
// ========================================
function slugify(text) {
    return text.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

function getLectureArticleUrl(l) {
    const meta = seriesMeta[l.series];
    const seriesSlug = meta.label.toLowerCase().replace(/\s+/g, '-');
    let raw;
    if (l.series === 'other') {
        raw = l.title;
    } else {
        raw = `${seriesSlug}-${l.number}-${l.title}`;
    }
    return `articles/${slugify(raw)}.html`;
}

function openLectureModal(index) {
    const l = lectures[index];
    if (!l) return;
    // Navigate directly to the article page
    window.location.href = getLectureArticleUrl(l);
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// NAVIGATION
// ========================================
function setupNav() {
    const nav = document.getElementById('nav');

    // Scroll effect
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Active section highlighting
    const sections = ['hero', 'predictions', 'teachings', 'about'];
    const links = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(l => l.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
}

// ========================================
// INITIALIZE
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderPredictions();
    renderLectures();
    setupPredictionFilters();
    setupSeriesTabs();
    setupSearch();
    setupNav();

    // Modal close handlers
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal-overlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});
