export const projectInfo = {
    name:"Westminster Christian School",
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
        frameEnd: "2",
        description: "Westminster's new homepage featuring an updated and modern aesthetic. These first two slides feature both the homepage and various on/hover states for intactive items",

    },
    {
        id: 2,
        title: "Sample Layout Pages",
        frameStart: "3",
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
        description: "",//"<p>Welcome to Westminster's New Website!. What's on show here across the presentation is an effort to bring together various design aesthetics, from existing brand material, the sites that were listed as references, as well as notes from the first session. Ideally all of this combined into a clean, modern aesthetic that vastly improves the current site design and experience.</p><p>The flow of the homepage is logical, opening like most with a large hero section with tagline text and call to action links nicely framed within the section. As the visitor scrolls they are met with an introduction section and large image links that funnel them to various sections of the site of your choosing. Beyond this is news and event section, with one highlighted news story and a list of upcoming events. As per our initial discussion the homepage has been kept fairly simple, closing out with a quote and final call to action section. As we were hesitant to use \"Apply\" as a link, the final two links are instead just inquiry and visit links, though these can absolutely be expanded in the future.</p>",
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