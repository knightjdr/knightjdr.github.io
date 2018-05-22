import Dotplot from './assets/dotplot.svg';
import Kinase from './assets/kinase.png';
import LTRI from './assets/ltri.svg';
import McMaster from './assets/mcmaster.svg';
import NSERC from './assets/nserc.svg';
import OHRI from './assets/ohri.svg';
import Ottawa from './assets/ottawa.svg';
import Vanier from './assets/vanier.svg';
import Review from './assets/review.svg';
import York from './assets/york.svg';

const Details = [
  {
    title: 'Education',
    items: [
      {
        details: `I attended McMaster University for my first undergadute degree,
          studying mathematics and biology. The emphases were algebra and
          anatomy respectively.`,
        img: McMaster,
        imgAlt: 'McMaster logo',
        link: 'https://www.mcmaster.ca/',
        title: 'BSc in Biology and Mathematics',
        year: 2002,
      },
      {
        details: `I attended the University of York in the UK for my second
          undergraduate degree in English and History, focusing on Victorian
          literature and Medieval European history.`,
        img: York,
        imgAlt: 'University of York logo',
        link: 'https://www.york.ac.uk/',
        title: 'BA in English and History',
        year: 2005,
      },
      {
        details: `During my PhD I was awarded a Vanier Canada Graduate
          Scholarship that is given for demonstrating leadership skills and
          scholarly achievement in graduate studies.`,
        img: Vanier,
        imgAlt: 'Vanier scholarship logo',
        link: 'http://www.vanier.gc.ca/en/home-accueil.html',
        title: 'Vanier Scholarship',
        year: 2009,
      },
      {
        details: `At the University of Ottawa I recieved my PhD, developing
          computational and methodological approaches for studying the protein
          kinase superfamily.`,
        img: Ottawa,
        imgAlt: 'University of Ottawa logo',
        link: 'https://www.uottawa.ca/en',
        title: 'PhD in Cellular and Molecular Medicine',
        year: 2011,
      },
    ],
  },
  {
    title: 'Career',
    items: [
      {
        details: `While an undergraduate student I was funded by the Natural
          Sciences and Engineering Research Council with an Undergraduate
          Student Research Award to perform research during my Summers in
          the laboratories of Dr. G. Brian Golding and Dr. David J. D. Earn.`,
        img: NSERC,
        imgAlt: 'NSERC logo',
        link: 'http://www.nserc-crsng.gc.ca/index_eng.asp',
        title: 'NSERC USRA holder',
        year: '2000 - 2002',
      },
      {
        details: `My graduate studies were conducted in the laboratory of
          Dr. Rashmi Kothary at the Ottawa Hospital Research Institute where I
          developed new computational and experimental techniques for studying
          the protein kinase superfamily.`,
        img: OHRI,
        imgAlt: 'OHRI logo',
        link: 'http://www.ohri.ca/home.asp',
        title: 'Graduate student at the OHRI',
        year: '2005 - 2011',
      },
      {
        details: `After completing my PhD I began postdoctoral studies
          in the laboratory of Dr. Anne-Claude Gingras at the
          Lunenfeld-Tanenbaum Research Institute studying
          cerebral cavernous malformations using proteomic approaches.`,
        img: LTRI,
        imgAlt: 'LTRI logo',
        link: 'http://www.lunenfeld.ca/',
        title: 'Postdoctoral fellow at the LTRI',
        year: '2011 - 2015',
      },
      {
        details: `I am currently employed as a Bioinformatician at the
          Lunenfeld-Tanenbaum Research Institute in the laboratory of
          Dr. Anne-Claude Gingras. My principal role is to create web apps and
          develop new approaches to aid molecular biologists
          with data analysis.`,
        img: LTRI,
        imgAlt: 'LTRI logo',
        link: 'http://www.lunenfeld.ca/',
        title: 'Bioinformatician at the LTRI',
        year: '2015 - present',
      },
    ],
  },
  {
    title: 'Publications',
    items: [
      {
        details: `My first paper was published in 2007. It documented
        structural and residue conservation in the protein kinase superfamily
        and showed how this information could be used to predict unknown protein
        kinase structures.`,
        img: Kinase,
        imgAlt: 'Protein kinase',
        link: 'http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0000982',
        title: 'First paper published',
        year: '2007',
      },
      {
        details: `The first review article I wrote discussed the role of
          protein kinases in skeletal muscle cell proliferation and
          differeniation.`,
        img: Review,
        imgAlt: 'Kinases in muscle differeniation',
        link: 'https://skeletalmusclejournal.biomedcentral.com/articles/10.1186/2044-5040-1-29',
        title: 'First review article',
        year: '2011',
      },
      {
        details: `My first Nature paper describes the suite of web tools we
          built to aid molecular biologists in visualizing protein-protein
          interaction data.`,
        img: Dotplot,
        imgAlt: 'Dotplot',
        link: 'https://www.nature.com/articles/nmeth.4330.epdf?author_access_token=Mxscfd4TsFnZDOMRVLu6q9RgN0jAjWel9jnR3ZoTv0N_r0kXKLsUVDr0iDmCOCg724OKwf_HwmR4LS6tUTcLnv0lZ95VTwz0lijrGL0nG0hlWQsNj9aa71B1ICe2lxjt',
        title: 'First Nature paper',
        year: '2017',
      },
    ],
  },
];
export default Details;
