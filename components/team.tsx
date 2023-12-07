// pages/team.tsx
import React from 'react';
import Image from 'next/image';

const TeamMember = ({ name, role, description, imagePath }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6em' }}>
    {/* Image on the left */}
    <div style={{ flex: '0 0 250px', marginRight: '20px' }}>
      <Image src={imagePath} width={250} height={250} alt={name} />
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
      <h1>Research Team</h1>

      {/* Primary Researcher */}
      <TeamMember
        name="Oliver Diekmeier"
        role="<div> Ph.D. Candidate at BI-K, University Cologne <br/> Project Lead and Senior Solution Architect at Mercedes-Benz AG </div>"
        description="<div> Oliver leads this research project, bringing expertise in IT and Data Science from the Industry. His research focuses on Medical Data Science and its application in the clinical domain.  After graduating with a M.Sc. in Industrial Engineering and Management with a focus on ICT, he currently pursues a Ph.D. at the University of Cologne. Oliver has a wide range of experience, notably leading innovative IT projects at Mercedes-Benz AG and contributing to digital and IT strategy consulting at BCG Platinion. With a diverse background, global exposure, and a commitment to continuous improvement, Oliver is a valuable team member of the BI-K team in driving technology-driven solutions and innovative research.</div>"
        imagePath="/images/OliverDiekmeier.png"
      />

    <div style={{fontSize:"2em", marginBottom:"1em"}}>Academic Supervisors</div>
      {/* Academic Supervisors */}
      <TeamMember
        name="Prof. Dr. Oya Beyan"
        role="<div> Director of BI-K Institute, University Cologne <br/> Co-Chair of MeDIC Cologne </div>"
        description="<div>Univ.-Prof. Oya Beyan joined the Medical Faculty of the University of Cologne in May 2021, bringing her expertise as a medical informatician with a background in computer science. Throughout her career, she has been a pioneer in the field of medical data science, focusing on providing data for processing through AI and machine learning. As the Director of the newly established Institute for Biomedical Informatics (BI-K) in Cologne, she aims to enhance interdisciplinary research, promote open scientific practices, and integrate social and humanistic perspectives into the field. Prof. Beyan's goal is to support data-driven medicine with ethical and trustworthy AI, emphasizing the curation of high-quality data for better decision-making. She also serves as the Co-Director of MeDIC, the Medical Data Integration Center at the University Hospital Cologne, dedicated to curating data to support clinics and researchers.</div>"
        imagePath="/images/OyaBeyan.png"
      />
    <TeamMember
        name="Prof. Dr-Ing. Stefan Wesner"
        role="<div> ...</div>"
        description="<div>...</div>"
        imagePath="/images/StefanWesner.png"
      />

    <div style={{fontSize:"2em", marginBottom:"1em"}}>Associated Researchers</div>
      {/* Associated Researchers */}
      <TeamMember
        name="Prof. Dr. Andreas Beyer"
        role="<div>Co-Chair of MeDIC Cologne </div>"
        description="<div>...</div>"
        imagePath="/images/AndreasBeyer.png"
      />
            <TeamMember
        name="Prof. Dr. Roman-Ulrich Müller"
        role="<div> ... </div>"
        description="<div>...</div>"
        imagePath="/images/RomanMueller.png"
      />

      <div style={{fontSize:"2em", marginBottom:"1em"}}>External Associates</div>
      {/* External Associates */}
    </div>
  );
};

export default Team;
