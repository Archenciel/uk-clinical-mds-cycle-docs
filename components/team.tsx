// pages/team.tsx
import React from 'react';
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LanguageIcon from '@mui/icons-material/Language';
import { IconButton } from '@mui/material';

const TeamMember = ({ name, role, description, imagePath, linkedin, mail, web }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6em' }}>
    {/* Image on the left */}
    <div style={{ flex: '0 0 250px', marginRight: '20px' }}>
      <Image src={imagePath} width={250} height={250} alt={name} />
      <div style={{margin:"0em 0em 50% 28%"}}>
        {linkedin && <IconButton color="primary" onClick={() => window.open(linkedin, '_blank').focus()}><LinkedInIcon ></LinkedInIcon></IconButton>}
        {web && <IconButton color="primary" onClick={() => window.open('mailto:'+mail, '_self')}><AlternateEmailIcon ></AlternateEmailIcon></IconButton>}
        {web && <IconButton color="primary" onClick={() => window.open(web, '_blank').focus()}><LanguageIcon ></LanguageIcon></IconButton>}
      </div>
    </div>

    {/* Text on the right */}
    <div style={{ flex: '1' }}>
      <div style={{ fontWeight: 'bold', fontSize: "1.5em" }}>{name}</div>
      <div className="content" dangerouslySetInnerHTML={{__html: role}} style={{marginBottom:"1em"}}></div>
      <div className="content" dangerouslySetInnerHTML={{__html: description}} style={{marginBottom:"1em"}}></div>
    </div>
  </div>
);

const Team: React.FC = () => {
  return (
    <div>
      <div style={{fontSize:"2em", marginBottom:"1em"}}>Research Team</div>

      {/* Primary Researcher */}
      <TeamMember
        name="Oliver Diekmeier"
        role="<div> Ph.D. Candidate at BI-K, University of Cologne <br/> Project Lead and Senior Solution Architect at Mercedes-Benz AG </div>"
        description="<div> Oliver Diekmeier leads this research project, bringing expertise in IT and Data Science from the German Industry. His research focuses on Medical Data Science and its application in the clinical domain.  After graduating with a M.Sc. in Industrial Engineering and Management with a focus on ICT, he currently pursues a Ph.D. at the University of Cologne. Oliver has a wide range of experience, notably leading innovative IT projects at Mercedes-Benz AG and contributing to digital and IT strategy consulting at BCG Platinion. With a diverse background, global exposure, and a commitment to continuous improvement, Oliver is a valuable team member of the BI-K team in driving technology-driven solutions and innovative research.</div>"
        imagePath="/images/OliverDiekmeier.png"
        linkedin="https://www.linkedin.com/in/oliver-diekmeier-567639179/"
        mail="oliver.diekmeier@uk-koeln.de"
        web="https://bik.uni-koeln.de/"
      />

    <div style={{fontSize:"1.6em", marginBottom:"1em"}}>Academic Supervisors</div>
      {/* Academic Supervisors */}
      <TeamMember
        name="Prof. Dr. Oya Beyan"
        role="<div> Director of BI-K Institute, University of Cologne <br/> Co-Chair of MeDIC Cologne </div>"
        description="<div>Univ.-Prof. Oya Beyan joined the Medical Faculty of the University of Cologne in May 2021, bringing her expertise as a medical informatician with a background in computer science. Throughout her career, she has been a pioneer in the field of medical data science, focusing on providing data for processing through AI and machine learning. As the Director of the newly established Institute for Biomedical Informatics (BI-K) in Cologne, she aims to enhance interdisciplinary research, promote open scientific practices, and integrate social and humanistic perspectives into the field. Prof. Beyan's goal is to support data-driven medicine with ethical and trustworthy AI, emphasizing the curation of high-quality data for better decision-making. She also serves as the Co-Director of MeDIC, the Medical Data Integration Center at the University Hospital Cologne, dedicated to curating data to support clinics and researchers.</div>"
        imagePath="/images/OyaBeyan.png"
        linkedin="https://www.linkedin.com/in/oya-deniz-beyan-50a02a8/"
        mail="oya.beyan@uk-koeln.de"
        web="https://bik.uni-koeln.de/institut/institutsleitung-univ-prof-oya-beyan"
      />
    <TeamMember
        name="Prof. Dr-Ing. Stefan Wesner"
        role="<div> Director of ITCC/RRZK, University of Cologne <br/> Chair for Parallel and Distributed Systems Board of Directors, Centre for Data and Simulation Science </div>"
        description="<div>Prof. Dr.-Ing. Stefan Wesner currently leads the Information Technology and Communication Centre (ITCC/RRZK) at the University of Cologne. Appointed in 2022, his role signifies a pivotal advancement in the university's computing capabilities and infrastructure management. Prof. Wesner's extensive career includes pivotal positions such as CIO of Ulm University and Managing Director at the High Performance Computing Center Stuttgart (HLRS). His expertise encompasses data center management, smart network operations, and the development of efficient execution environments, particularly applying machine learning to optimize data center and cloud operations. At the University of Cologne, Prof. Wesner plays a crucial role in steering the Centre for Data and Simulation Science, driving innovative approaches in computational research. His work significantly impacts various academic disciplines, integrating advanced computational techniques to address complex research challenges. </div>"
        imagePath="/images/StefanWesner.png"
        linkedin="https://www.linkedin.com/in/stefan-wesner/"
        mail="wesner@uni-koeln.de"
        web="https://pds.uni-koeln.de/people/stefan-wesner"
      />

    <div style={{fontSize:"1.6em", marginBottom:"1em"}}>Associated Researchers</div>
      {/* Associated Researchers */}
      <TeamMember
        name="Prof. Dr. Andreas Beyer"
        role="<div>Principal Investigator, Institute for Genetics, University of Cologne <br/> Cellular Networks and Systems Biology, CECAD  <br/>Co-Chair of MeDIC Cologne </div>"
        description="<div>Prof. Dr. Andreas Beyer is an esteemed researcher at the Institute for Genetics, focusing on the intricate processes of aging at a molecular level. His group's expertise lies in analyzing aging-related changes in gene activities and molecular networks, both in humans and model species. Under Prof. Dr. Beyer's guidance, the team excels in developing sophisticated algorithms to sift through and interpret vast amounts of genetic and proteomic data. This involves the integration of heterogeneous data sets, which is pivotal in uncovering new insights into complex biological questions that cannot be addressed by examining individual data sets in isolation. The group has significantly advanced various biostatistical and bioinformatic methods, such as gene mapping techniques, network biology, and functional genomic screen analysis. Their findings have provided crucial insights into the relationship between protein function and its regulation within the cell. The team employs computational approaches from biostatistics, machine learning, and network biology to analyze, represent, and integrate data, contributing significantly to our understanding of the aging process.</div>"
        imagePath="/images/AndreasBeyer.png"
        linkedin=""
        mail="andreas.beyer@uni-koeln.de"
        web="https://www.cecad.uni-koeln.de/research/principal-investigators/full-members/andreas-beyer"
      />
            <TeamMember
        name="Prof. Dr. Roman-Ulrich Müller"
        role="<div> Research Group Leader - Kidney Research Center Cologne <br/> Internist, Nephrologist, Head of ADPKD Diagnostics and Therapy <br/> University Hospital of Cologne </div>"
        description="<div>Prof. Dr. Roman-Ulrich Müller stands at the forefront of kidney research, particularly in the study of Acute Kidney Injury (AKI), a growing concern in aging populations and a significant challenge to modern healthcare systems. His research is pivotal in addressing the rising incidence of AKI and its associated cardiovascular complications. Prof. Dr. Müller's team has made substantial contributions to the field, particularly in linking hypoxia-inducible factor signaling to stress resistance, longevity, and tumorigenesis. Their exploration into non-coding RNAs (ncRNAs) and RNA-binding proteins (RBPs) in kidney disease is a pioneering effort, revealing critical insights into kidney development and function. Prof. Dr. Müller's expertise extends beyond research, as he also leads the diagnostics and therapy for Autosomal Dominant Polycystic Kidney Disease (ADPKD) at the University Hospital of Cologne. His multifaceted approach to nephrology combines cutting-edge research with clinical excellence, significantly advancing our understanding and treatment of kidney diseases.</div>"
        imagePath="/images/RomanMueller.png"
        linkedin="https://www.linkedin.com/in/roman-ulrich-m%C3%BCller-279248203/"
        mail="roman-ulrich.mueller@uk-koeln.de"
        web="https://www.cecad.uni-koeln.de/research/principal-investigators/full-members/roman-ulrich-mueller"
      />

      <div style={{fontSize:"1.6em", marginBottom:"1em"}}>External Associates</div>
      {/* External Associates */}
    </div>
  );
};

export default Team;
