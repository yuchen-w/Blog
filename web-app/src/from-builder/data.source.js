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
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Recipes',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: 'View the latest recipes that I\'ve tried',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Travel',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: 'View my latest travels!',
                },
              ],
            },
          },
        ],
      },      
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner20DataSource = {
  wrapper: { className: 'banner2' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        page: { className: 'home-page banner2-page' },
        textWrapper: { className: 'banner2-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner2-title',
          children: (
            <span>
              <p>
                Hi! I'm Yuchen<br />
              </p>
            </span>
          ),
        },
        content: {
          className: 'banner2-content',
          children: (
            <span>
              <p>
                I am a professional full stack developer, hobbyist photographer
                and general technology enthusiast
              </p>
            </span>
          ),
        },        
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <span>
                <p>
                  Languages and Technologies<br />
                </p>
              </span>
            </span>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>
              I like to work with the following technologies and languages<br />
            </p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <span>
                    <p>C#</p>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children:
              'I am proficient in writing backend services in C#',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>TypeScript/JavaScript</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children:
              'I prefer to build frontend code using TS where possible',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>
                  ASP.NET Core<br />
                </p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children:
              '',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                React<br />
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children:
              'My preferred frontend framework for building web apps. Currently using version 16.x with hooks on a near daily basis.',
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Redux</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children:
              'My preferred state management framework to use with React.',
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'http://reactivex.io/assets/Rx_Logo_S.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>
                  RX (JS/.NET)<br />
                </p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children:
              'Redux-Observables to handle asynchronous operations in React + Redux and RX.Net to handle all asynchronous operations in the backend',
          },
        },
      },
    ],
  },
};
export const Content90DataSource = {
  wrapper: { className: 'home-page-wrapper content9-wrapper' },
  page: { className: 'home-page content9' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <p>
              My experience and education<br />
            </p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'timeline',
    children: [
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://media-exp1.licdn.com/dms/image/C510BAQEO2Mj5u5Sx7Q/company-logo_100_100/0?e=1599696000&v=beta&t=CJnSwBaFU3DOxsq1B6e_uer9e46aQM1xMpbZRFLf5LQ',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <p>Vitol</p>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <span>
                  <p>
                    Full Stack Engineer<br />
                  </p>
                </span>
              </span>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <span>
                <span>
                  <p>
                    2018 - Present<br />
                  </p>
                </span>
              </span>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <span><p>London Team</p></span>
            ),
          },
          content: { className: 'block-content', children: (<span>
                <p>
                  I sit on the trading floor and build analytical tools for Traders. But I also wear many hats and remain very involved in all aspects of the SDLC for all of the apps we develop in London. <br />
                </p>
              </span>) },
        },
      },
      {
        name: 'block1',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://media-exp1.licdn.com/dms/image/C4D0BAQGjlgfogMd0_Q/company-logo_100_100/0?e=1599696000&v=beta&t=2Go6kWxsSB_U1mEKSAbKOohTh6mtIOOsDwYFX0Ho5kI',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <p>Actruris</p>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <div>Full Stack Developer</div>
              </span>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <span>
                <p>2017-2018</p>
              </span>
            ),
          },
          title: { className: 'block-title', children: 'Web Team' },
          content: {
            className: 'block-content',
            children:
              'Was responsible for maintaining and building new features in C#, ASP.NET MVC5 and ASP.NET Web Forms. Also built and maintained client-facing front end web applications using JavaScript, React and TypeScript.',
          },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://media-exp1.licdn.com/dms/image/C510BAQFLP4jd05WZRQ/company-logo_100_100/0?e=1599696000&v=beta&t=79LBrXg6fvUT53zaI71UEyYKN0srWa_Cc0eDyRulKcM',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                Western Power Distribution<br />
              </span>
            ),
          },
          post: { className: 'block-post', children: 'Graduate Trainee Engineer & Power Academy Scholar' },
          time: {
            className: 'block-time',
            children: (
              <span>
                <span>
                  <p>
                    2015 - 2016<br />
                  </p>
                </span>
              </span>
            ),
          },
          title: { className: 'block-title', children: 'Primary System Design Team (Tipton)' },
          content: {
            className: 'block-content',
            children:(
              <span>
                <span>
                Designed and implemented a bespoke conversion program to import network data into ASPEN OneLiner using Python. <br />
                </span>
                <span>
                Maintained and improved upon the internal VBA Network Protection Settings calculator tool. <br />
                </span>
                <span>Also designed and built a bespoke internal python tool for automating manual data updates from the network. <br/></span>
              </span>
            )
              
          },
        },
      },
      {
        name: 'block3',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://media-exp1.licdn.com/dms/image/C4D0BAQEGh_DklOKK1Q/company-logo_100_100/0?e=1599696000&v=beta&t=qMfTYTIc9bi7ZMGFZi07hTGiePFBxQsWPZhuU-JhJFk',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <p>
                  Imperial College London<br />
                </p>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <p>Student</p>
              </span>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <span>
                <span>
                  <p>2011-2015</p>
                </span>
              </span>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <p>
                        Electrical and Electronic Engineering with Management
                        (MEng)<br />
                      </p>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'block-content',
            children: (
              <span>
                <span>
                  Graduated with Upper Second Class (2:1) Honours, average of 72.8% in final year<br />
                </span>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Teams20DataSource = {
  wrapper: { className: 'home-page-wrapper teams2-wrapper' },
  page: { className: 'home-page teams2' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>
              Cool stuff that I've been involved in<br />
            </p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    gutter: 72,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://media-exp1.licdn.com/dms/image/C560BAQFe0_92dc0jZA/company-logo_200_200/0?e=1599696000&v=beta&t=6gxK6y4nHto78-eLDMP_yryDj9PX1EYYQawltlm7J0c',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>
                    GLH 2019 (Team LawSum)<br />
                  </p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p>
                    Front End Engineer<br />
                  </p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: (
                <span>
                  <p>
                    Team LawSum placed second in London hackathon. LawSum was a Law text summarising
                    engine with a chrome plugin<br />
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>
                    Commit by Default<br />
                  </p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p>
                    Front End Engineer<br />
                  </p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: (
                <span>
                  <p>
                    This blog was built using TypeScript + React and Ant Design. Hosted on GitHub<br />
                  </p>
                </span>
              ),
            },
          ],
        },
      },     
     
    ],
  },
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
