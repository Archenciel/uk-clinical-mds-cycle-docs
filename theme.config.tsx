import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image';
import LogoIcon from "./components/logo";
import { RiMailSendLine } from "react-icons/ri";

const config: DocsThemeConfig = {
  logo: (
    <>
      <LogoIcon/>
      <span style={{ marginLeft: '.8em', fontWeight: 800 }}>
      Data-Driven Innovation in the Clinical Domain
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/Archenciel/uk-clinical-mds-cycle-docs',
  },
  chat: {
    link: "https://mailto:oliver.diekmeier@gmail.com",
    icon: <RiMailSendLine  style={{height:"28px", width:"28px"}}/>
  },
  docsRepositoryBase: 'https://github.com/Archenciel/uk-clinical-mds-cycle-docs',
  footer: {
    text: 'UK BI-K Data Driven Innovation Cycle in the Clinical Domain Docs',
  },
}

export default config
