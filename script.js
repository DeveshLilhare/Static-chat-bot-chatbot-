// Event listeners
document.getElementById('chatbotIcon').addEventListener('click', function() {
    document.getElementById('chatbotInterface').style.display = 'block';
    startChatbotConversation();
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('chatbotInterface').style.display = 'none';
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('chatScreen').innerHTML = '';
    startChatbotConversation();
});

document.getElementById('sendBtn').addEventListener('click', function() {
    let userInput = document.getElementById('userInput').value.trim();
    if (userInput) {
        handleUserInput(userInput);
        document.getElementById('userInput').value = '';
    }
});

document.getElementById('userInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default form submission
        document.getElementById('sendBtn').click(); // Trigger the send button click event
    }
});

document.getElementById('backBtn').addEventListener('click', function() {
    addUserMessage('Back to Main Menu');
    showDefaultQuestions();
});

// Global variables to track user info
let userName = '';
let userEmail = '';

// Function to start the chatbot conversation
function startChatbotConversation() {
    userName = '';
    userEmail = '';
    addBotMessage('Hi, what is your name?');
}

// Function to handle user input
function handleUserInput(input) {
    addUserMessage(input);
    const lowerInput = input.toLowerCase();

    if (!userName) {
        userName = input;
        addBotMessage(`${userName}, How are you?`);
    } else if (!userEmail && (lowerInput === 'fine' || lowerInput === 'good')) {
        addBotMessage('What is your email?');
    } else if (!userEmail) {
        userEmail = input;
        addBotMessage(`Thank you, ${userName}. What would you like to know?`);
        showDefaultQuestions();
    } else {
        handleQuestion(input);
    }
}

// Function to add user message to the chat screen
function addUserMessage(message) {
    let userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = message;
    document.getElementById('chatScreen').appendChild(userMessage);
        scrollToBottom();

}

// Function to add bot message to the chat screen
// function addBotMessage(message) {
//     let botMessage = document.createElement('div');
//     botMessage.classList.add('bot-message');
//     botMessage.innerHTML = message;
//     document.getElementById('chatScreen').appendChild(botMessage);
// }


function addBotMessage(message) {
    let botMessage = document.createElement('div');
    botMessage.classList.add('bot-message');

    const lines = message.split('\n');
    const previewLines = lines.slice(0, 10);
    const previewMessage = previewLines.join('\n');

    botMessage.innerHTML = previewMessage.replace(/\n/g, '<br>');

    if (lines.length > 10) {
        let viewMoreBtn = document.createElement('button');
        viewMoreBtn.textContent = 'View More';
        viewMoreBtn.classList.add('view-more-btn');
        viewMoreBtn.addEventListener('click', function() {
            botMessage.innerHTML = message.replace(/\n/g, '<br>');
            viewMoreBtn.style.display = 'none';
        });
        botMessage.appendChild(viewMoreBtn);
    }

    document.getElementById('chatScreen').appendChild(botMessage);
    scrollToBottom();

}
// Function to show default questions
function showDefaultQuestions() {
    clearQuestions();
    const questions = [
        'Types of Question?'
    ];

    questions.forEach(question => {
        createQuestionButton(question);
    });
}

// Function to handle user question
// function handleQuestion(question) {
//     addUserMessage(question);
//     if (question === 'Types of Question?') {
//         addBotMessage('Please select a specific topic:');
//         showSubQuestions(['P1 - How to Launch Crypto Tokens/Coins ?', 'P2 - How to Plan ICO Marketing for Crypto?', 'P3 - Which is generally the use case for crypto ?', 'P4 - Exchange listing']);
//     } else if (question === 'P1 - How to Launch Crypto Tokens/Coins ?') {
//         let message = `
//             Launching crypto tokens or coins involves several key steps, ranging from planning and development to marketing and regulatory compliance. Here’s a comprehensive guide to help you navigate the process:
//         `;
//         addBotMessage(message);
//     } else if (question === 'Development Phase 1') {
//         addBotMessage('What would you like to know about Development Phase 1?');
//     } else if (question === 'ICO marketing Phase 2') {
//         addBotMessage('What would you like to know about ICO marketing Phase 2?');
//     } else if (question === 'Back to Main Menu') {
//         showDefaultQuestions();
//     } else {
//         addBotMessage('Choose only from the menu "' + question + '".');
//     }
// }

function handleQuestion(question) {
    addUserMessage(question);
    if (question === "Types of Question?") {
      addBotMessage("Please select a specific topic:");
      showSubQuestions([
        "P1 - How to Launch Crypto Tokens/Coins ?",
        "P2 - How to Plan ICO Marketing for Crypto?",
        "P3 - Which is generally the use case for crypto ?",
        "P4 - Exchange listing",
      ]);
    }else if (question === "P1 - How to Launch Crypto Tokens/Coins ?") {
        let message = `
                Launching crypto tokens or coins involves several key steps, ranging from planning and development to marketing and regulatory compliance. Here’s a comprehensive guide to help you navigate the process:
                <strong>Step 1: Conceptualization and Planning</strong>
                <ul>
                    <li><strong>Define the Purpose and Utility:</strong> What problem does your token solve? What is the use case (utility, security, governance, etc.)?</li>
                    <li><strong>Research:</strong> Study existing tokens and coins in your niche. Understand your target audience and market demand.</li>
                    <li><strong>Team Formation:</strong> Assemble a team of developers, marketers, legal advisors, and community managers.</li>
                </ul>
                <strong>Step 2: Technical Development</strong>
                <ul>
                    <li><strong>Choose a Blockchain Platform:</strong> Popular choices include Ethereum, Binance Smart Chain, Solana, and Polkadot. Consider factors like transaction fees, speed, and security.</li>
                    <li><strong>Select Token Standards:</strong> For Ethereum: ERC-20 (fungible) or ERC-721/ERC-1155 (non-fungible).</li>
                    <li><strong>Smart Contract Development:</strong> Write and test the smart contract using platforms like Remix IDE or Truffle. Utilize audited code and libraries, such as OpenZeppelin, to ensure security.</li>
                    <li><strong>Testing:</strong> Thoroughly test your smart contract on a testnet (Rinkeby, Kovan, etc.). Fix any bugs and ensure everything works as intended.</li>
                    <li><strong>Deployment:</strong> Deploy your smart contract on the mainnet using tools like Remix IDE or Hardhat.</li>
                </ul>
                <strong>Step 3: Legal and Regulatory Compliance</strong>
                <ul>
                    <li><strong>Legal Structure:</strong> Decide on the legal structure of your project (e.g., foundation, corporation).</li>
                    <li><strong>Regulatory Requirements:</strong> Understand and comply with the regulations in your jurisdiction. Consider engaging a legal advisor for guidance on securities laws, AML/KYC compliance, etc.</li>
                </ul>
                <strong>Step 4: Token Distribution</strong>
                <ul>
                    <li><strong>Initial Distribution Plan:</strong> Determine the allocation of tokens (team, advisors, marketing, public sale, etc.). Decide on the vesting schedule for team and advisor tokens.</li>
                    <li><strong>Token Sale:</strong> Conduct a private sale or pre-sale to raise initial funds. Organize a public sale (ICO, IEO, or IDO) to distribute tokens to the public.</li>
                </ul>
                <strong>Step 5: Marketing and Community Building</strong>
                <ul>
                    <li><strong>Website and White Paper:</strong> Create a professional website detailing your project. Write a comprehensive whitepaper explaining the project, technology, tokenomics, and roadmap.</li>
                    <li><strong>Community Engagement:</strong> Build a community on platforms like Telegram, Discord, and Twitter. Engage with potential investors and users through AMAs, social media, and forums.</li>
                    <li><strong>Marketing Campaign:</strong> Run digital marketing campaigns, including content marketing, social media, and influencer partnerships. Participate in crypto conferences and events to gain visibility.</li>
                </ul>
                <strong>Step 6: Listing on Exchanges</strong>
                    <li><strong>Initial Listings:</strong> Apply to list your token on decentralized exchanges (DEX) like Uniswap or PancakeSwap. Ensure sufficient liquidity for smooth trading.</li>
                    <li><strong>Centralized Exchanges:</strong> Apply for listings on centralized exchanges (CEX) like Binance, Coinbase, or Kraken. Prepare for compliance and due diligence processes required by exchanges.</li>
                </ul>
                <strong>Step 7: Post-Launch Activities</strong>
                <ul>
                    <li><strong>Continuous Development:</strong> Keep developing and improving your project based on feedback. Release updates and new features as planned in your roadmap.</li>
                    <li><strong>Community Support:</strong> Maintain active communication with your community. Address any issues and provide regular updates on progress.</li>
                    <li><strong>Partnerships and Collaborations:</strong> Form strategic partnerships to enhance your project's utility and reach. Collaborate with other projects and organizations in the crypto space.</li>
                    <li><strong>Monitoring and Security:</strong> Continuously monitor your smart contract and network for security vulnerabilities. Engage in regular security audits and implement necessary upgrades.</li>
                </ul>
                By following these steps, you can successfully launch and manage your cryptocurrency token or coin. Each step is crucial for ensuring the viability, legality, and success of your project in the competitive crypto landscape.
               <strong>How to Research on Best Tokens/Coin Categories ?</strong>
                Researching the best tokens or coin categories involves a systematic approach to gather, analyze, and evaluate information. Here’s a step-by-step guide to help you effectively research in this area:
                 
                  <strong>More Question </strong>
                <ul>
                    <li><strong>How to Research on Best Tokens/Coin Categories ?</strong></li>
                      <li><strong>How to design a good storyline ?</strong></li>
                        <li><strong>How to decide the supply  ?</strong></li>
                         <li><strong>How to design tokenomics ? </strong></li>
                         <li><strong>How to design tokenomics ? </strong></li>
                         <li><strong>How to design the price of a token ?</strong></li>
                         <li><strong>How to plan a Roadmap ?</strong></li>
                         <li><strong>How many types of network design contracts ?</strong></li>
                         
                
                </ul>
    
                `;
        addBotMessage(message);
      } else if (question === "P2 - How to Plan ICO Marketing for Crypto?") {
        let message = `
                Planning an ICO marketing strategy involves a comprehensive approach that covers branding, community engagement, content creation, advertising, and compliance. Here's a detailed step-by-step guide to planning your ICO marketing:
    
                <strong>Step 1: Pre-Marketing Preparation</strong>
                <ul>
                    <li><strong>Define Your Goals:</strong> Establish clear objectives for your ICO (e.g., fundraising amount, number of participants). Identify key performance indicators (KPIs) to measure success.</li>
                    <li><strong>Develop Your Value Proposition:</strong> Clearly articulate what problem your project solves. Define the unique features and benefits of your token.</li>
                    <li><strong>Create Essential Materials:</strong> Website: Build a professional, user-friendly website with comprehensive information about your project. Whitepaper: Write a detailed whitepaper explaining your project's vision, technology, tokenomics, and roadmap. Pitch Deck: Develop a concise pitch deck for potential investors.</li>
                </ul>
    
                <strong>Step 2: Branding and Messaging</strong>
                <ul>
                    <li><strong>Brand Identity:</strong> Design a compelling logo and visual identity for your project. Develop a consistent brand message and tone of voice.</li>
                    <li><strong>Content Creation:</strong> Produce high-quality content including blog posts, articles, videos, and infographics. Create educational materials to help potential investors understand your project.</li>
                </ul>
    
                <strong>Step 3: Community Building</strong>
                <ul>
                    <li><strong>Social Media Presence:</strong> Establish and maintain active profiles on key social media platforms (Twitter, Facebook, LinkedIn, Instagram). Engage with your audience regularly by posting updates, responding to comments, and sharing relevant content.</li>
                    <li><strong>Community Platforms:</strong> Create and manage communities on platforms like Telegram, Discord, and Reddit. Organize AMAs (Ask Me Anything) sessions to engage with potential investors and address their questions.</li>
                    <li><strong>Email Marketing:</strong> Build an email list and send regular newsletters with updates, insights, and exclusive offers.</li>
                </ul>
    
                <strong>Step 4: Influencer and PR Campaigns</strong>
                <ul>
                    <li><strong>Influencer Partnerships:</strong> Collaborate with influential figures in the crypto space to promote your ICO. Ensure that influencers have a genuine interest in your project and a strong following.</li>
                    <li><strong>Press Releases:</strong> Write and distribute press releases to relevant crypto and mainstream media outlets. Highlight key milestones, partnerships, and achievements.</li>
                    <li><strong>Media Outreach:</strong> Reach out to journalists, bloggers, and media platforms to secure coverage for your project. Offer exclusive interviews and insights to gain media attention.</li>
                </ul>
    
                <strong>Step 5: Advertising and Promotions</strong>
                <ul>
                    <li><strong>Paid Advertising:</strong> Run targeted ad campaigns on Google Ads, Facebook Ads, and other platforms. Utilize retargeting to reach potential investors who have previously visited your website.</li>
                    <li><strong>Crypto-Specific Platforms:</strong> Advertise on popular crypto websites, forums, and newsletters. Consider banner ads, sponsored content, and dedicated email blasts.</li>
                    <li><strong>Airdrops and Bounties:</strong> Organize airdrop campaigns to distribute free tokens and increase awareness. Launch bounty programs to reward community members for promoting your project.</li>
                </ul>
    
                <strong>Step 6: Event Participation</strong>
                <ul>
                    <li><strong>Conferences and Meetups:</strong> Attend and sponsor crypto conferences, meetups, and industry events. Network with potential investors, partners, and influencers.</li>
                    <li><strong>Webinars and Online Events:</strong> Host webinars, virtual meetups, and live streams to engage with your audience and showcase your project.</li>
                </ul>
    
                <strong>Step 7: Post-ICO Activities</strong>
                <ul>
                    <li><strong>Continuous Engagement:</strong> Maintain regular communication with your community through updates, newsletters, and social media posts. Address any concerns and provide ongoing support.</li>
                    <li><strong>Transparency and Accountability:</strong> Keep your community informed about the progress of your project, milestones achieved, and future plans. Ensure transparency in your operations and financials.</li>
                    <li><strong>Development and Growth:</strong> Focus on delivering the promised features and functionality of your project. Continue marketing efforts to attract new users and investors.</li>
                </ul>
    
                
                By following this comprehensive plan, you can effectively market your ICO, attract investors, and build a strong community around your project.
    
                  <strong>More Question </strong>
                <ul>
                    <li><strong>What Activity gives big success in ICO ?</strong></li>
                      <li><strong>Pre launching and Post launching activities </strong></li>
                        <li><strong>What is process ICO/IEO/ITO/IDO</strong></li>
                         <li><strong>Is PR work on the ICO  ?</strong></li>
                         <li><strong>Pre Listing help on ICO?</strong></li>
                         <li><strong>Crypto influencers really work ?</strong></li>
                         <li><strong>Why is Community Building important?</strong></li>
                         <li><strong>Announcement of Project preparation. Very important ?</strong></li>
                         <li><strong>What is mod , Shiller, hypers, Community manager?</strong></li>
                         <li><strong>What does the community look like ?</strong></li>
                         <li><strong>Why X,Telegram and Discord Important in Community Building ?</strong></li>
                         <li><strong>Important Tools - Link For ICO launchpad ?</strong></li>
                         
                
                </ul>
                `;
        addBotMessage(message);
      } else if (question === "P3 - Which is generally the use case for crypto ?") {
        let message = `
               Cryptocurrencies have a wide range of use cases, each leveraging the unique features of blockchain technology such as decentralization, security, and transparency. Here are some of the most common use cases for cryptocurrencies:
    
                <strong>1. Digital Currency and Payments:</strong>
                <ul>
                    <li><strong>Bitcoin (BTC):</strong>  The primary use case for Bitcoin is as a digital currency and a medium of exchange. It allows for peer-to-peer transactions without the need for intermediaries like banks.</li>
                    <li><strong>Stablecoins:</strong>  Cryptocurrencies like USDT (Tether), USDC (USD Coin), and DAI are pegged to traditional fiat currencies, providing a stable value for transactions and as a store of value.</li>
                </ul>
    
                <strong>2. Smart Contracts and Decentralized Applications (DApps):</strong>
                <ul>
                    <li><strong>Ethereum (ETH):</strong> Ethereum enables the creation and execution of smart contracts, which are self-executing contracts with the terms of the agreement directly written into code. This allows for a wide range of decentralized applications, from finance to gaming.</li>
                    <li><strong>DApp Platforms::</strong> Other platforms like Solana, Cardano, and Binance Smart Chain also support the development of DApps and smart contracts.</li>
                </ul>
    
                <strong>Step 3: Community Building</strong>
                <ul>
                    <li><strong>Social Media Presence:</strong> Establish and maintain active profiles on key social media platforms (Twitter, Facebook, LinkedIn, Instagram). Engage with your audience regularly by posting updates, responding to comments, and sharing relevant content.</li>
                    <li><strong>Community Platforms:</strong> Create and manage communities on platforms like Telegram, Discord, and Reddit. Organize AMAs (Ask Me Anything) sessions to engage with potential investors and address their questions.</li>
                    <li><strong>Email Marketing:</strong> Build an email list and send regular newsletters with updates, insights, and exclusive offers.</li>
                </ul>
    
                <strong>Step 4: Influencer and PR Campaigns</strong>
                <ul>
                    <li><strong>Influencer Partnerships:</strong> Collaborate with influential figures in the crypto space to promote your ICO. Ensure that influencers have a genuine interest in your project and a strong following.</li>
                    <li><strong>Press Releases:</strong> Write and distribute press releases to relevant crypto and mainstream media outlets. Highlight key milestones, partnerships, and achievements.</li>
                    <li><strong>Media Outreach:</strong> Reach out to journalists, bloggers, and media platforms to secure coverage for your project. Offer exclusive interviews and insights to gain media attention.</li>
                </ul>
    
                <strong>Step 5: Advertising and Promotions</strong>
                <ul>
                    <li><strong>Paid Advertising:</strong> Run targeted ad campaigns on Google Ads, Facebook Ads, and other platforms. Utilize retargeting to reach potential investors who have previously visited your website.</li>
                    <li><strong>Crypto-Specific Platforms:</strong> Advertise on popular crypto websites, forums, and newsletters. Consider banner ads, sponsored content, and dedicated email blasts.</li>
                    <li><strong>Airdrops and Bounties:</strong> Organize airdrop campaigns to distribute free tokens and increase awareness. Launch bounty programs to reward community members for promoting your project.</li>
                </ul>
    
                <strong>Step 6: Event Participation</strong>
                <ul>
                    <li><strong>Conferences and Meetups:</strong> Attend and sponsor crypto conferences, meetups, and industry events. Network with potential investors, partners, and influencers.</li>
                    <li><strong>Webinars and Online Events:</strong> Host webinars, virtual meetups, and live streams to engage with your audience and showcase your project.</li>
                </ul>
    
                <strong>Step 7: Post-ICO Activities</strong>
                <ul>
                    <li><strong>Continuous Engagement:</strong> Maintain regular communication with your community through updates, newsletters, and social media posts. Address any concerns and provide ongoing support.</li>
                    <li><strong>Transparency and Accountability:</strong> Keep your community informed about the progress of your project, milestones achieved, and future plans. Ensure transparency in your operations and financials.</li>
                    <li><strong>Development and Growth:</strong> Focus on delivering the promised features and functionality of your project. Continue marketing efforts to attract new users and investors.</li>
                </ul>
    
                By following this comprehensive plan, you can effectively market your ICO, attract investors, and build a strong community around your project.
    
                
                  <strong>P3. Tap FAQ - Important Question </strong>
                <ul>
                    <li><strong>Why is use case important for projects & Community?</strong></li>
                      <li><strong>What is the meaning of Use Case ?? </strong></li>
                        <li><strong>Give Examples of Staking in Crypto projects</strong></li>
                         <li><strong>Give example of staking and mlm as use case  strong></li>
                         <li><strong>Give Example of Gaming platform as use case for crypto</strong></li>
                         <li><strong>Give Example of Mining rewards use case for crypto</strong></li>
                         <li><strong>Give Example of Exchange development as a use case </strong></li>
                         <li><strong>Give Example of Real estate as use case </strong></li>
                         <li><strong>Give example of treading bot as use case  </strong></li>
                         <li><strong>Give example of blockchain as use case </strong></li>
                         <li><strong>Give example of metaverse as use case </strong></li>
                         <li><strong>Give example of AR and VR as use case </strong></li>
    
                          </ul>
                         
            `;
        addBotMessage(message);
      } else if (question === "P4 - Exchange listing") {
        let message = `
                Planning an ICO marketing strategy involves a comprehensive approach that covers branding, community engagement, content creation, advertising, and compliance. Here's a detailed step-by-step guide to planning your ICO marketing:
    
                <strong>Step 1: Pre-Marketing Preparation</strong>
                <ul>
                    <li><strong>Define Your Goals:</strong> Establish clear objectives for your ICO (e.g., fundraising amount, number of participants). Identify key performance indicators (KPIs) to measure success.</li>
                    <li><strong>Develop Your Value Proposition:</strong> Clearly articulate what problem your project solves. Define the unique features and benefits of your token.</li>
                    <li><strong>Create Essential Materials:</strong> Website: Build a professional, user-friendly website with comprehensive information about your project. Whitepaper: Write a detailed whitepaper explaining your project's vision, technology, tokenomics, and roadmap. Pitch Deck: Develop a concise pitch deck for potential investors.</li>
                </ul>
    
                <strong>Step 2: Branding and Messaging</strong>
                <ul>
                    <li><strong>Brand Identity:</strong> Design a compelling logo and visual identity for your project. Develop a consistent brand message and tone of voice.</li>
                    <li><strong>Content Creation:</strong> Produce high-quality content including blog posts, articles, videos, and infographics. Create educational materials to help potential investors understand your project.</li>
                </ul>
    
                <strong>Step 3: Community Building</strong>
                <ul>
                    <li><strong>Social Media Presence:</strong> Establish and maintain active profiles on key social media platforms (Twitter, Facebook, LinkedIn, Instagram). Engage with your audience regularly by posting updates, responding to comments, and sharing relevant content.</li>
                    <li><strong>Community Platforms:</strong> Create and manage communities on platforms like Telegram, Discord, and Reddit. Organize AMAs (Ask Me Anything) sessions to engage with potential investors and address their questions.</li>
                    <li><strong>Email Marketing:</strong> Build an email list and send regular newsletters with updates, insights, and exclusive offers.</li>
                </ul>
    
                <strong>Step 4: Influencer and PR Campaigns</strong>
                <ul>
                    <li><strong>Influencer Partnerships:</strong> Collaborate with influential figures in the crypto space to promote your ICO. Ensure that influencers have a genuine interest in your project and a strong following.</li>
                    <li><strong>Press Releases:</strong> Write and distribute press releases to relevant crypto and mainstream media outlets. Highlight key milestones, partnerships, and achievements.</li>
                    <li><strong>Media Outreach:</strong> Reach out to journalists, bloggers, and media platforms to secure coverage for your project. Offer exclusive interviews and insights to gain media attention.</li>
                </ul>
    
                <strong>Step 5: Advertising and Promotions</strong>
                <ul>
                    <li><strong>Paid Advertising:</strong> Run targeted ad campaigns on Google Ads, Facebook Ads, and other platforms. Utilize retargeting to reach potential investors who have previously visited your website.</li>
                    <li><strong>Crypto-Specific Platforms:</strong> Advertise on popular crypto websites, forums, and newsletters. Consider banner ads, sponsored content, and dedicated email blasts.</li>
                    <li><strong>Airdrops and Bounties:</strong> Organize airdrop campaigns to distribute free tokens and increase awareness. Launch bounty programs to reward community members for promoting your project.</li>
                </ul>
    
                <strong>Step 6: Event Participation</strong>
                <ul>
                    <li><strong>Conferences and Meetups:</strong> Attend and sponsor crypto conferences, meetups, and industry events. Network with potential investors, partners, and influencers.</li>
                    <li><strong>Webinars and Online Events:</strong> Host webinars, virtual meetups, and live streams to engage with your audience and showcase your project.</li>
                </ul>
    
                <strong>Step 7: Post-ICO Activities</strong>
                <ul>
                    <li><strong>Continuous Engagement:</strong> Maintain regular communication with your community through updates, newsletters, and social media posts. Address any concerns and provide ongoing support.</li>
                    <li><strong>Transparency and Accountability:</strong> Keep your community informed about the progress of your project, milestones achieved, and future plans. Ensure transparency in your operations and financials.</li>
                    <li><strong>Development and Growth:</strong> Focus on delivering the promised features and functionality of your project. Continue marketing efforts to attract new users and investors.</li>
                </ul>
    
                By following this comprehensive plan, you can effectively market your ICO, attract investors, and build a strong community around your project.
    
                <strong>P3. Tap FAQ - Important Question </strong>
                <ul>
                    <li><strong>What is the Best Strategy for founder share dilution ?</strong></li>
                      <li><strong>How Use Case give extra source of earning to maintain project ? </strong></li>
                        <li><strong>How does a token or Coin project earn money ?</strong></li>
                         
            `;
        addBotMessage(message);
      } else if (question === "My Website Blog") {
        let message = `
                Planning an ICO marketing strategy involves a comprehensive approach that covers branding, community engagement, content creation, advertising, and compliance. Here's a detailed step-by-step guide to planning your ICO marketing:
                  <strong><br><?
                <strong>Step 1: Pre-Marketing Preparation</strong>
                <ul>
                    <li><strong>Define Your Goals:</strong> Establish clear objectives for your ICO (e.g., fundraising amount, number of participants). Identify key performance indicators (KPIs) to measure success.</li>
                    <li><strong>Develop Your Value Proposition:</strong> Clearly articulate what problem your project solves. Define the unique features and benefits of your token.</li>
                    <li><strong>Create Essential Materials:</strong> Website: Build a professional, user-friendly website with comprehensive information about your project. Whitepaper: Write a detailed whitepaper explaining your project's vision, technology, tokenomics, and roadmap. Pitch Deck: Develop a concise pitch deck for potential investors.</li>
                </ul>
    
                <strong>Step 2: Branding and Messaging</strong>
                <ul>
                    <li><strong>Brand Identity:</strong> Design a compelling logo and visual identity for your project. Develop a consistent brand message and tone of voice.</li>
                    <li><strong>Content Creation:</strong> Produce high-quality content including blog posts, articles, videos, and infographics. Create educational materials to help potential investors understand your project.</li>
                </ul>
    
                <strong>Step 3: Community Building</strong>
                <ul>
                    <li><strong>Social Media Presence:</strong> Establish and maintain active profiles on key social media platforms (Twitter, Facebook, LinkedIn, Instagram). Engage with your audience regularly by posting updates, responding to comments, and sharing relevant content.</li>
                    <li><strong>Community Platforms:</strong> Create and manage communities on platforms like Telegram, Discord, and Reddit. Organize AMAs (Ask Me Anything) sessions to engage with potential investors and address their questions.</li>
                    <li><strong>Email Marketing:</strong> Build an email list and send regular newsletters with updates, insights, and exclusive offers.</li>
                </ul>
    
                <strong>Step 4: Influencer and PR Campaigns</strong>
                <ul>
                    <li><strong>Influencer Partnerships:</strong> Collaborate with influential figures in the crypto space to promote your ICO. Ensure that influencers have a genuine interest in your project and a strong following.</li>
                    <li><strong>Press Releases:</strong> Write and distribute press releases to relevant crypto and mainstream media outlets. Highlight key milestones, partnerships, and achievements.</li>
                    <li><strong>Media Outreach:</strong> Reach out to journalists, bloggers, and media platforms to secure coverage for your project. Offer exclusive interviews and insights to gain media attention.</li>
                </ul>
    
                <strong>Step 5: Advertising and Promotions</strong>
                <ul>
                    <li><strong>Paid Advertising:</strong> Run targeted ad campaigns on Google Ads, Facebook Ads, and other platforms. Utilize retargeting to reach potential investors who have previously visited your website.</li>
                    <li><strong>Crypto-Specific Platforms:</strong> Advertise on popular crypto websites, forums, and newsletters. Consider banner ads, sponsored content, and dedicated email blasts.</li>
                    <li><strong>Airdrops and Bounties:</strong> Organize airdrop campaigns to distribute free tokens and increase awareness. Launch bounty programs to reward community members for promoting your project.</li>
                </ul>
    
                <strong>Step 6: Event Participation</strong>
                <ul>
                    <li><strong>Conferences and Meetups:</strong> Attend and sponsor crypto conferences, meetups, and industry events. Network with potential investors, partners, and influencers.</li>
                    <li><strong>Webinars and Online Events:</strong> Host webinars, virtual meetups, and live streams to engage with your audience and showcase your project.</li>
                </ul>
    
                <strong>Step 7: Post-ICO Activities</strong>
                <ul>
                    <li><strong>Continuous Engagement:</strong> Maintain regular communication with your community through updates, newsletters, and social media posts. Address any concerns and provide ongoing support.</li>
                    <li><strong>Transparency and Accountability:</strong> Keep your community informed about the progress of your project, milestones achieved, and future plans. Ensure transparency in your operations and financials.</li>
                    <li><strong>Development and Growth:</strong> Focus on delivering the promised features and functionality of your project. Continue marketing efforts to attract new users and investors.</li>
                </ul>
    
                By following this comprehensive plan, you can effectively market your ICO, attract investors, and build a strong community around your project.
            `;
        addBotMessage(message);
      } else if (question === "Development Phase 1") {
        addBotMessage("What would you like to know about Development Phase 1?");
      } else if (question === "ICO marketing Phase 2") {
        addBotMessage("What would you like to know about ICO marketing Phase 2?");
      } else if (question === "Back to Main Menu") {
        showDefaultQuestions();
      } else {
        addBotMessage('Choose only of menu/click the back button for main  menu "' + question + '".');
      }
  }
// Function to show sub-questions
function showSubQuestions(subQuestions) {
    clearQuestions();
    subQuestions.forEach(subQuestion => {
        createQuestionButton(subQuestion);
    });
}

// Function to clear existing questions
function clearQuestions() {
    let buttons = document.querySelectorAll('.question-btn');
    buttons.forEach(button => button.remove());
}
  
// Function to create a question button
function createQuestionButton(text) {
    let questionBtn = document.createElement('button');
    questionBtn.classList.add('question-btn');
    questionBtn.textContent = text;
    questionBtn.addEventListener('click', function() {
        handleQuestion(text);
    });
    document.getElementById('chatScreen').appendChild(questionBtn);
}

function scrollToBottom() {
    let chatScreen = document.getElementById('chatScreen');
    chatScreen.scrollTop = chatScreen.scrollHeight;
}
// Initialize the chatbot when the interface opens
startChatbotConversation();



document.addEventListener('DOMContentLoaded', function() {
    const chatbotIcon = document.getElementById('chatbotIcon');
    const chatbotInterface = document.getElementById('chatbotInterface');
    const closeBtn = document.getElementById('closeBtn');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const clearBtn = document.getElementById('clearBtn');
    const backBtn = document.getElementById('backBtn');
    //    backBtn.addEventListener('click', () => {
    //     location.reload();
    // });

    // Toggle chatbot interface
    chatbotIcon.addEventListener('click', () => {
        chatbotInterface.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        chatbotInterface.style.display = 'none';
    });

    // Clear input field
    clearBtn.addEventListener('click', () => {
        userInput.value = '';
    });

    // Back button functionality
    // backBtn.addEventListener('click', () => {
    //     chatbotInterface.style.display = 'none';
    // });
    

   // Toggle chatbot interface
   chatbotIcon.addEventListener('click', () => {
    chatbotInterface.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    chatbotInterface.style.display = 'none';
});

// Clear input field
clearBtn.addEventListener('click', () => {
    userInput.value = '';
});

// // Back button functionality
// backBtn.addEventListener('click', () => {
//     chatbotInterface.style.display = 'none';
// });
backBtn.addEventListener('click', () => {
    handleQuestion();
});
// Function to close all popups
function closeAllPopups() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.style.display = 'none';
    });
}

    // Question buttons event listeners
    document.getElementById('questions1').addEventListener('click', function() {
        closeAllPopups();

        document.getElementById('popup1').style.display = 'block';
    });

    document.getElementById('questions2').addEventListener('click', function() {
        closeAllPopups();

        document.getElementById('popup2').style.display = 'block';
    });

    document.getElementById('questions3').addEventListener('click', function() {
        closeAllPopups();

        document.getElementById('popup3').style.display = 'block';
    });

    document.getElementById('questions4').addEventListener('click', function() {
        closeAllPopups();

        document.getElementById('popup4').style.display = 'block';
    });

    // Close popup buttons
    document.getElementById('closePopup1').addEventListener('click', function() {
        document.getElementById('popup1').style.display = 'none';
    });

    document.getElementById('closePopup2').addEventListener('click', function() {
        document.getElementById('popup2').style.display = 'none';
    });

    document.getElementById('closePopup3').addEventListener('click', function() {
        document.getElementById('popup3').style.display = 'none';
    });

    document.getElementById('closePopup4').addEventListener('click', function() {
        document.getElementById('popup4').style.display = 'none';
    });
});
