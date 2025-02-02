import React, { useState } from 'react';
import {
  Container,
  // Button,
  Hidden,
  // IconButton,
  // Menu,
  // MenuItem,
} from '@material-ui/core';
// import { Language } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

import NavBar from './NavBar';

// import ETHLOGO from './Icons/123ETH';
import SoulLogo from './Icons/SoulLogo';
// import selectDomainIcon from '../assets/domain_select.svg';

import Box from './Box';

// const ETH123URL = 'https://eth123.org/';

const Header = ({
  language,
  onChangeLanguage,
  tagList,
}) => {

  const [visible, setVisible] = useState(false);
  // const [anchorEl, setAnchorEl] = React.useState(null);

  const translations = {
    zh: {
      siteTitle: '一个没有灵魂的静态导航站',
    },
    en: {
      siteTitle: 'Soulless static navigation site',
    }
  }

  const t = (key) => {
    return translations[language][key];
  }

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  //
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // render language change btn
  // const renderLanguageBtn = () => {
  //   return (
  //     <Button
  //       disableElevation={true}
  //       variant="outlined"
  //       onClick={() => {
  //         const lng = language === 'zh' ? 'en' : 'zh';
  //         window.localStorage.setItem('i18nextLng', lng);
  //         document.cookie = `i18next=${lng};path=/;domain=.eth123.org`;
  //         document.cookie = `i18next=${lng};path=/;domain=.123btc.org`;
  //         onChangeLanguage(lng);
  //       }}
  //       size="small"
  //       startIcon={<Language />}
  //       className="languageBtn"
  //       style={{ textTransform: 'none' }}>
  //       <Box fontWeight="400" className="languageBtn_text">
  //         {language === "zh" ? 'English' : '中文'}
  //       </Box>
  //     </Button>
  //   )
  // }

  // web header
  const webHeader = () => {
    return (
      <Box
        mb={3.75}
        backgroundColor="#fff"
        boxShadow="0 2px 8px #f0f1f2">
        <Container>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            py={2}>
            <Box
              display="flex"
              flexDirection="row">
              <a
                href="/"
                style={{ textDecoration: 'none' }}>
                <Box position="relative">
                  {/* <SoulLogo /> */}
                  <Box
                    mt={.5}
                    fontSize={14}
                    color="#999">
                    {t('siteTitle')}
                  </Box>
                  <Box
                    position="absolute"
                    bottom={-16}
                    left={0}
                    height={4}
                    width="100%"
                    borderRadius={2}
                    backgroundColor="#FF7828"
                  />
                </Box>
              </a>
              {/* <a
                href={ETH123URL}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}>
                <Box
                  ml={4.5}
                  pl={4.5}
                  borderLeft="1px solid rgba(0, 0, 0, .1)">
                  <ETHLOGO />
                  <Box
                    mt={.5}
                    fontSize={14}
                    color="#999">
                    {t('ethTitle')}
                  </Box>
                </Box>
              </a> */}
            </Box>
            {/* <Box>
              {renderLanguageBtn()}
            </Box> */}
          </Box>
        </Container>
      </Box>
    )
  }

  // wap header
  const wapHeader = () => {
    return (
      <Box
        mb={2}
        py={1.25}
        backgroundColor="#fff">
        <Container>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            height={30}>
            <Box
              display="flex"
              cursor="pointer"
              onClick={() => {
                setVisible(true);
              }}>
              <MenuIcon />
            </Box>
            
            {/* <Box width={32}>
              <Box
                position="absolute"
                top={10}
                right={16}>
                {renderLanguageBtn()}
              </Box>
            </Box> */}
          </Box>
        </Container>
        {/* <Menu
          id="domain-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => {
            window.open(ETH123URL);
            handleClose();
          }}>
            123ETH
          </MenuItem>
        </Menu> */}
      </Box>
    )
  }

  return (
    <Box>
      <Hidden smDown>
        {webHeader()}
      </Hidden>
      <Hidden mdUp>
        {wapHeader()}
        <NavBar
          tagList={tagList}
          language={language}
          key={`NavBar-${(tagList || []).length}`}
          drawerVisible={visible}
          onClose={() => {
            setVisible(false);
          }}
        />
      </Hidden>
    </Box>
  )
}

export default Header;
