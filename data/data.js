export const projectInfo = {
    name:"University School of Nashville",
    type: "",
    frames: "",
    version:"",
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

export const tocItemInfo = [
    {
        id: 1,
        title: "Homepage and Hover/On States",
        frameStart: "1",
        frameEnd: "3",
        description: "USN's new homepage featuring an updated and modern aesthetic. These first two slides feature both the homepage and various on/hover states for intactive items, while the third shows how the navigation will appear when interacted with.",

    },
    {
        id: 2,
        title: "Sample Layout Pages",
        frameStart: "4",
        frameEnd: "6",
        description: "A site is much more than just its homepage. Showcased on these slides are some example interior pages utilizing dummy content to give a rough idea of how the rest of the site will come together with this new design",

    },
     /* {
        id: 3,
        title: "Block and Specialty Styles",
        frameStart: "7",
        frameEnd: "8",
        description: "These two slides are home to a showcase of the basic building block styles, along with some more specialty purpose styles that come with this new site design",

    }, */
]

export const projectFrames = [
    {
        id:1,
        img:"/images/hp1.jpg",
        height:"4987px",
        width: "1600px",
        title: "USN's New Homepage",
        frameGroup:1,
        navGraphic: true,
        navGraphicToChange: true,
        description: `<p>Welcome to USN’s new Website! Based on our last conversation, along with all the notes I received initially, it was clear from the jump that everyone agreed that an update was long overdue but had different thoughts on how to get there. The presented design is a showcase of how everyone’s thoughts, ideas, and preferences have been combined to bring USN’s site forward.</p> 

        <p>This is also a design where the static nature of the mockup presentation limits me a bit more than I’d like, forcing me to rely on these notes to explain in greater detail how some items and interactions will behave on the final site. Starting with our Homepage, on initial load visitors will see the large image before the “Welcome To” and CTA (Call to Action) buttons fade in. <em>after these fade in</em> (or if the user immediately scrolls) will the top navigation and logotype fade in. Across different print materials I noticed the use of just the name of the school written out and opted to use it as our main navigation as it ties with the rest of the aesthetic I am leaning towards. We do however see the seal, and “USN” in the footer.</p> 
        
        <p> Scrolling down the page we are introduced to the first section of the homepage, pulling double duty as an introduction and “at a glance” section. The four statistics here were pulled from various places, but they can really be anything, along with all the copy we see on the page being as flexible as you would like. The “learn more” button here could lead to the about section’s “At a Glance” or even the main admissions page depending on how the final text reads here.</p> 
        
        <p>The next section is specific for curriculum, with large links for each of the different school levels. A big note that was repeated here was just how boxy the current site feels. This new design aims to break out of that contained feel with something more open and elegant. These three links, when hovered over, will spring to life with color, though this is shown on the next slide.</p> 
        
        <p>The next section’s layout mirrors the introduction region above, but also provides something new for USN. This section will allow you to feature different elements of the school on the homepage. While “Traditions” “Go Tigers!” etc are listed here, these options can be really any facet of the school you wish to highlight. When a user selects one of these, both the description text <em> and image will change. Historically this was not achievable on the platform, though we have recently opened the door to some small custom coding to fill in product gaps as we can. “Tabbed” content is requested a fair amount, and one we can solve for now with this approach.</p> 
        
        <p>I am closing out the homepage with a news and event section. We are also contrasting the rest of the layout to have this further stand out as its own section. With news first we see one, large, featured story along with three other headlines and photos, allowing visitors to get a glimpse into the recent happenings around the school. Below all of this is a horizontal events carousel</p> 
        
        <p>The site’s footer rounds out this and all pages of the site. CTA links are repeated here (and therefore will appear on every page in a non-intrusive manner). The formal USN and Seal logo also is included here. The rest of the footer includes the standard fare, with the address, resource links, social media icons, and boilerplate text.</p>`, 
    },
    {
        id:2,
        img:"/images/hp2.jpg",
        height:"4987px",
        width: "1600px",
        title: "Homepage Hover/On States",
        frameGroup:1,
        navGraphic: true,
        navGraphicToChange: true,
        description:"",//"<p>With Accessability being a cheif concern, care went into how interactivty would be handled on the site, as that's where most of accessability pitfalls occur. Additionally, with this being a fairly static mock up presentation, it can be difficult to preview all of the different interactivity and microinteractions that the design will have. The plan is to have each of the elements on the HP transition in very similar to the referenced Bentley School, or other blackbaud schools with that feature applied. While we can discuss this further, I did opt for a simple drop down menu with accessiblity being the largest factor. If a mega menu is truely desired, we can loop back to this and enhance what's here.</p>",
    },
   {
        id:3,
        img:"/images/hp3.jpg",
        height:"900px",
        width: "1600px",
        title: "Main Nav Panel Preview",
        frameGroup:1,
        navGraphic: false,
        navGraphicToChange: false,
        description:"",//"<p>Shown here are the site's two navigations, one for the main nav and the other a more utility nav. The main nav is composed of a simple drop down, clean and effective without any major fuss, it should quickly let visitors navigate the site without overwhelming them.</p><p>The other navigation has been set up like a utility panel and is meant for the current community members. In there they will find all of the links to the various portal logins, as well as any helpful public pages like the school calendar, or main news page. Search is also tucked in there. This both consolidates all of these more community focused resources into one place, as well makes it a bit easier to retrain said community on where to go on the site.</p>",
    },
    {
        id:4,
        img:"/images/lp.jpg",
        height:"3767px",
        width: "1600px",
        title: "Sample Layout: Landing Page",
        frameGroup:2,
        navGraphic: true,
        navGraphicToChange: true,
        description:``,//`<p>A school website is more than just the homepage, and as such this presentation includes three different sample interior layouts to preview. Each of these vary in scope and content (though they all use placeholder content), but they are all meant to showcase how interior pages can look with this new site design.</p><p>The first of these layouts has been dubbed "Landing Page" for it's overall scope of cotnent and somewhat centered layout that would do well as an introduction page to a section.</p>`,
    },
    {
        id:5,
        img:"/images/wlsr.jpg",
        height:"2580",
        width: "1600px",
        title: "Sample Layout: Wide Left, Skinny Right",
        frameGroup:2,
        navGraphic: true,
        navGraphicToChange: true,
        description:``,//`<p>A school website is more than just the homepage, and as such this presentation includes three different sample interior layouts to preview. Each of these vary in scope and content (though they all use placeholder content), but they are all meant to showcase how interior pages can look with this new site design.</p><p>The second layout is aptly named the "Wide Left, Skinny Right" layout and is by far one of the most common layout schemes across websites. Great for pages whose content, while important, doesn't need to be as engaging as a landing page or other pages.</p>`,
    },
    {
        id:6,
        img:"/images/vc.jpg",
        height:"3447px",
        width: "1600px",
        title: "Sample Layout: Varied Content",
        frameGroup:2,
        navGraphic: true,
        navGraphicToChange: true,
        description:``,//`<p>A school website is more than just the homepage, and as such this presentation includes three different sample interior layouts to preview. Each of these vary in scope and content (though they all use placeholder content), but they are all meant to showcase how interior pages can look with this new site design.</p><p>The last of the provided samples, the "Mixed Row Layout" showcases the flexibilty you'll have with the design. While a landing page isn't right for every page, and a simple layout might not do more engaging content justice, something in the middle might serve a page better.</p><p>Also, immediately apparent here is the lack of a page banner. We understand that sometimes, finding the right or relevant page banner for every single page can be difficult. This type of page "banner" region is another solution for pages that don't actually need a banner, like forms, or deeper sub pages. You may not use this banner design a lot, but it's there for when you need it.</p>`,
    },
     /*{
        id:7,
        img:"/images/bs.jpg",
        height:"4911px",
        width: "1600px",
        title: "Block Styles",
        frameGroup:3,
        navGraphic: false,
        navGraphicToChange: false,
        description:`<p>Showcased on these last two slides is a library or reference to all of the different building block styles your school will have at their disposal when it comes to building out pages. The first of these pages, entitled "Block Styles" shows off the basic type styling that will be used acrossed the site, along with how some specific content components will appear. You'll likely to never see a pae utalize all of these styles at once, and seeing them all here can be overwhelming at first, but remember that these slides are just a reference guide to show off design elements, as well as a reference for resources on our end to use when building out the site.</p>`,
    },
    {
        id:8,
        img:"/images/ss.jpg",
        height:"5040px",
        width: "1600px",
        title: "Specialty Styles",
        frameGroup:3,
        navGraphic: false,
        navGraphicToChange: false,
        description:`<p>Showcased on these last two slides is a library or reference to all of the different building block styles your school will have at their disposal when it comes to building out pages. The first of these pages, entitled "Specialty Styles" shows off more specific use case styles, along with a suite of row styles that will give your school more flexibility in regards to content population. You'll likely to never see a pae utalize all of these styles at once, and seeing them all here can be overwhelming at first, but remember that these slides are just a reference guide to show off design elements, as well as a reference for resources on our end to use when building out the site.</p>`,
    }  */
]

export const fixedNavGraphic = {
    initial:{
        img:"/images/nav.png",
        width:"1600px",
        height:"119px",
    },
    scrolled: {
        img:"/images/navScrolled.png",
        width:"1600px",
        height:"119px",
    }
}

projectInfo.type = projectTypes[0].display;
projectInfo.frames= projectFrames.length;