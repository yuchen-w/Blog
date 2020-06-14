import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://rgx1ja.db.files.1drv.com/y4mlxlGauLtaPpmwet4-2fSMkjzHuh2knILMAdHMNCx_DyChZ-HVr91MkDNvwNPB5fd4-PnRk-dro3DS92fb4KR68kqoRWP0NzB51F5_FvTgX_Uat89mhLN2sJk3W6ZeYvTp--Aqfay2i5Wp2pB-lgXFw9LsARwpE51eB52ggZaCJKMvWFmwvrxYRjMKpjCPPAr?width=234&height=51&cropmode=none',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: 'Home', name: 'text' }],
        },        
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: 'Blog (Coming soon)', name: 'text' }],
        },        
      },      
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2020 <a href="http://www.commitbydefault.com">Commit by Default</a> All Rights
        Reserved
      </span>
    ),
  },
};
