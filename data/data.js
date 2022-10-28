export const projectInfo = {
    name:"Vermont Academy",
    type: "plus",
    frames: "",
    version:"2",
}

export const projectTypes = [
    {
        display: 'Professional',
        key: 'pro'
    },
    {
        display: 'Professional Plus',
        key: 'plus'
    },
    {
        display: 'Professional Premium',
        key: 'premium'
    },
]

export const projectVersion = [
    {
        display: 'first',
        key: '1'
    },
    {
        display: 'second',
        key: '2'
    },
    {
        display: 'third',
        key: '3'
    }
]

export const tocItemInfo = [
    {
        id: 1,
        title: "Homepage and Hover/On States",
        frameStart: "1",
        frameEnd: "4",
        description: "Vermont Academy's new homepage featuring an updated and modern aesthetic. These first two slides feature both the homepage and various on/hover states for intactive items, while the third shows how the navigation will appear when interacted with.",

    },
    {
        id: 2,
        title: "Sample Layout Pages",
        frameStart: "4",
        frameEnd: "6",
        description: "A site is much more than just its homepage. Showcased on these slides are some example interior pages utilizing dummy content to give a rough idea of how the rest of the site will come together with this new design",

    },
    {
        id: 3,
        title: "Block and Specialty Styles",
        frameStart: "7",
        frameEnd: "8",
        description: "These two slides are home to a showcase of the basic building block styles, along with some more specialty purpose styles that come with this new site design",

    },
]

export const projectFrames = [
    {
        id:1,
        img:"/images/hp1.jpg",
        height:"4633px",
        width: "1600px",
        title: "Vermont Academy's New Homepage",
        frameGroup:1,
        navGraphic: true,
        navGraphicToChange: true,
        description: `<p>Welcome to Vermont Academy’s new Website! Based on our last conversation, along with all the notes I received initially, it was clear from the jump that everyone agreed that an update was long overdue. It was also clear that there were some different ideas on how these updates could be achieved. The following design is the result of taking all these notes along with VA’s existing branding elements and collateral to generate a sleek, and modern approach to the school’s front end site.</p> 
        
        <p>This is also a design where the static nature of the mockup presentation limits me a bit more than I’d like, forcing me to rely on these notes to explain in greater detail how some items and interactions will behave on the final site. Starting with our Homepage, on initial load visitors will see the large image before elements transition into view in the following order: “we are” “va”, the call to action buttons that appear below, and finally both the “scroll down” text and the site’s nav and logo region. If of course the visitor immediately goes to engage with the navigation, these element will become visible to them, regardless of order. The look and feel of this section borrows from VA’s viewbook, which is a design language that is leaned into throughout the whole design.</p> 
        
        <p>Scrolling down the page we’re greeted with the first section of the homepage, an introduction to the school that once again borrows heavily from the “we are” motif from the viewbook. As we arrive in this section, we see hinted below three image links that will allow the visitor to dive into the site into specific areas. This layout features academic, student life, and athletic links, but these very much don’t have to go to these sections all the time or at all. When hovered (shown on the next frame, additional text will appear to highlight and invite the user to click and explore deeper.</p>
        
        <p> Below this is a region that serves as an “At a Glance” type of section, though should feel unique and a bit more organic than just a list of facts. Included here is copy that outlines an at a glance view of VA, stats with iconography (or large numbers) that highlight key elements about the school, and a quote block that also serves as an insight into the school. All of these are laid out in an interesting looking “broken” grid.</p>

        <p> News and Events follows up this section, with the familiar “Happening around Campus” heading. Events here remain mostly unchanged outside of an aesthetic update, but we do find a new featured news carousel here. Having a single news area solves for a few elements, including keeping this area compact. It also allows you to curate news a little easier, having one feed on the homepage and allows the visitor to engage as they see fit. Through the site you’ll have the option to pepper additional stories as you see fit in an organic way (ie: Headmaster posts), so don’t fret that this is the only means a someone will have to digest news on the site.</p>

        <p>The homepage is rounded out with a final value add and call to action section with additional text that invites the visitor to take the next steps; applying, requesting more information or visiting the campus. Below this is of course the site’s footer. Here we see VA’s seal, address, boilerplate, footer links and social media. Simple and straightforward, as a footer should be.</p>`, 
    },
    {
        id:2,
        img:"/images/hp2.jpg",
        height:"4633px",
        width: "1600px",
        title: "Homepage Hover/On States",
        frameGroup:1,
        navGraphic: true,
        navGraphicToChange: true,
        description:`<p>This slide may look similar to the first, however the significant difference here is how interactive items like links show their hover states. Again, a bit limited in the static nature of these presentations, we see here how the image links will appear when hovered, along with how buttons and links will look after their transitions when hovered. Nothing will be a hard change from normal to hovered, instead anticipate soft fades and transitions between states.</p>`, 
    },
   {
        id:3,
        img:"/images/hp3.jpg",
        height:"900px",
        width: "1600px",
        title: "Navigation Interaction Preview",
        frameGroup:1,
        navGraphic: false,
        navGraphicToChange: false,
        description:`<p>Shown here is how VA’s new expanded navigation will look when an item is hovered over. For your reference, this slide does not scroll, instead consider this a snapshot of how nav elements will appear. The biggest item to note here is the Mega Menu panel dropdown. Shown here is the academics panel, though all panels will follow the same scheme, with a section for a header and text, and button. The main nav items in the center, and an associated photo on the far right. Laying the panel out like this, with the second level pages in the middle means that the user doesn't have to move their mouse very far, regardless of which main item they've engaged with.</p>`, 
    },
    /*{
        id:4,
        img:"/images/hp4.jpg",
        height:"900px",
        width: "1600px",
        title: "Community Links Panel Preview",
        frameGroup:1,
        navGraphic: false,
        navGraphicToChange: false,
        description:`<p>A question may have come up by now. "Where is the omni/auxiliary navigation?" At the tail end of the main nav we see a hamburger icon, which when engaged with will bring down a panel for "Community Links". "Give Now", "Parents", "Alumni" and "MyVA" are all here, along with a site search. Keeping these elements contained here allows for our main navigation to remain tight and minimal, fixed at the top of the screen.</p>`, 
    },*/
    {
        id:4,
        img:"/images/lp.jpg",
        height:"3107px",
        width: "1600px",
        title: "Sample Layout: Landing Page",
        frameGroup:2,
        navGraphic: true,
        navGraphicToChange: true,
        description:`<p>A school website is more than just the homepage, and as such this presentation includes three different sample interior layouts to preview. Each of these vary in scope and content (though they all use placeholder content), but they are all meant to showcase how interior pages can look with this new site design.</p><p>The first of these layouts has been dubbed "Landing Page" for it's overall scope of content, which can lean towards the wordier side, and would do well as an introduction page to a section.</p>`,
    },
    {
        id:5,
        img:"/images/wlsr.jpg",
        height:"2243",
        width: "1600px",
        title: "Sample Layout: Wide Left, Skinny Right",
        frameGroup:2,
        navGraphic: true,
        navGraphicToChange: true,
        description:`<p>A school website is more than just the homepage, and as such this presentation includes three different sample interior layouts to preview. Each of these vary in scope and content (though they all use placeholder content), but they are all meant to showcase how interior pages can look with this new site design.</p><p>The second layout is aptly named the "Wide Left, Skinny Right" layout and is by far one of the most common layout schemes across websites. Great for pages whose content, while important, doesn't need to be as engaging as a landing page or other pages.</p>
        <p>Perhaps immediately apparent here is how color is used on this layout. The previous layout showed different colors used across the page styling, this one however is more monochromatic. Either of course is an option.</p>`,
    },
    {
        id:6,
        img:"/images/vc.jpg",
        height:"2835px",
        width: "1600px",
        title: "Sample Layout: Varied Content",
        frameGroup:2,
        navGraphic: true,
        navGraphicToChange: true,
        description:`<p>A school website is more than just the homepage, and as such this presentation includes three different sample interior layouts to preview. Each of these vary in scope and content (though they all use placeholder content), but they are all meant to showcase how interior pages can look with this new site design.</p><p>The last of the provided samples, the "Varied Content" showcases the flexibilty you'll have with the design. While a landing page isn't right for every page, and a simple layout might not do more engaging content justice, something in the middle might serve a page better.</p>
        <p>A difference from the "Landing Page" layout shown here and on the last frame would be how the page banner is treated. It can be hard to find a specific photo per page. Instead, these layouts are intended to leverage a small suite of campus shots or abstract shots that would be content agnostic so to speak</p>`,
    },
    {
        id:7,
        img:"/images/bs.jpg",
        height:"4217px",
        width: "1600px",
        title: "Block Styles",
        frameGroup:3,
        navGraphic: false,
        navGraphicToChange: false,
        description:`<p>Showcased on these last two slides is a library or reference to all of the different building block styles your school will have at their disposal when it comes to building out pages. The first of these pages, entitled "Block Styles" shows off the basic type styling that will be used acrossed the site, along with how some specific content components will appear. You'll likely to never see a pae utalize all of these styles at once, and seeing them all here can be overwhelming at first, but remember that these slides are just a reference guide to show off design elements, as well as a reference for resources on our end to use when building out the site.</p>
        <p> As a brief aside here. I am acutely aware of just how much orange is on the page on this frame. It needs to be stated that you will receive different colored versions of a good chunk of these styles (buttons, blocks, etc), as well as you'll never see a page this loaded with items to begin with.</p>`,
    },
    {
        id:8,
        img:"/images/ss.jpg",
        height:"5122px",
        width: "1600px",
        title: "Specialty Styles",
        frameGroup:3,
        navGraphic: false,
        navGraphicToChange: false,
        description:`<p>Showcased on these last two slides is a library or reference to all of the different building block styles your school will have at their disposal when it comes to building out pages. The first of these pages, entitled "Specialty Styles" shows off more specific use case styles, along with a suite of row styles that will give your school more flexibility in regards to content population. You'll likely to never see a pae utalize all of these styles at once, and seeing them all here can be overwhelming at first, but remember that these slides are just a reference guide to show off design elements, as well as a reference for resources on our end to use when building out the site.</p>`,
    }
]

export const fixedNavGraphic = {
    initial:{
        img:"/images/nav.png",
        width:"1600px",
        height:"108px",
    },
    scrolled: {
        img:"/images/navScrolled.png",
        width:"1600px",
        height:"108px",
    }
}

projectInfo.type = projectTypes[0].display;
projectInfo.frames= projectFrames.length;
projectInfo.version = projectVersion[0].display;