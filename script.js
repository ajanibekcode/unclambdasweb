// const menuToggle = document.querySelector('.menu-toggle');
// const navigation = document.querySelector('.navigation');

// const button = document.querySelector('.third a');

// menuToggle.addEventListener('click', () => {
//   navigation.classList.toggle('show');
// });


// button.addEventListener('click', () => {
	
// })


const menu = document.querySelector('#mobile-menu')

const menuLinks = document.querySelector('.navigation')

const menuLinksContainer = document.querySelector('.navcontainer')
 
//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    menuLinksContainer.classList.toggle('_active');
}

menu.addEventListener('click', mobileMenu);


// About Us
function showContent(sectionId) {
  const textSection = document.getElementById('actual-content');
  let content = '';

  switch(sectionId) {
    case 'who-we-are':
      content = 'Lambda Phi Epsilon at UNC Chapel Hill is an Asian-interest, non-Asian-exclusive fraternity that aims to make leaders among men. The organization was founded in the spring of 2013 by 18 young men. We are a diverse group dedicated to increasing public awareness about modern Asian and Asian-American issues through philanthropic activities and services such as hosting bone marrow drives on behalf of Be the Match, a subsidiary of the National Marrow Donor Program. At the international scale, we have a total of 73 chapters all united under the same goals. UNC Lambda Phi Epsilon strives to make a strong impact on the Asian -American community and expand our outreach on campus as well as the greater Triangle area. We hope to develop young men into future leaders while making a positive and lasting impact on society. The core values of are organization are authenticity, courageous leadership, cultural heritage, love, and wisdom.'; // "What are we" content
      break;
    case 'our-history':
      content = "Lambda Phi Epsilon was founded on February 25, 1981, by Principal Founder Master Craig Ishigo and a group of nineteen dedicated men with the mission to unify the fragmented Asian American community. Initially established at UCLA, the fraternity adopted a fraternal structure to ensure continuity and long-term impact, setting new standards of excellence for Asian American organizations. Over the years, Lambda Phi Epsilon expanded nationally and internationally, becoming the first and only nationally recognized Asian-interest fraternity in the United States and later establishing a chapter in Canada. Today, it serves as a preeminent international Asian-interest fraternal organization, focusing on leadership, philanthropy, and community advocacy. The University of North Carolina's chapter proudly continues this legacy, embodying the organization's values of academics, leadership, brotherhood, and service."; // "Our History" content
      break;
    case 'service':
      content = 'Lambda Phi Epsilon at UNC Chapel Hill proudly extends its legacy of service through the Adopt a Highway program, where brothers actively participate in highway clean-up initiatives. Nationally, the fraternity partners with the National Marrow Donor Program (NMDP) to conduct life-saving #BeTheMatch campaigns, focusing on registering committed bone marrow donors, particularly from the Asian American community. This initiative was inspired by Evan Chen, a fraternity brother who battled leukemia and catalyzed one of the largest marrow typing drives in NMDP history. Beyond this, Lambda Phi Epsilon collaborates with organizations like the National Asian Pacific Islander Desi American Panhellenic Association (NAPA) to promote mental health awareness, tackling cultural and language barriers that may hinder access to mental health resources. Through these diverse philanthropic efforts, the fraternity educates, serves, and makes a lasting impact on both local and broader communities.'; // "Service" content
      break;
  }

  textSection.innerHTML = content;
}

