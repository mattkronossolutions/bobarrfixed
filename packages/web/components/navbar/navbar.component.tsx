import React, { useState } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import { useGetParamsQuery } from '../../utils/graphql';
import { NavbarStyles } from './navbar.styles';

const links = [
  ['Movies', '/library/movies'],
  ['TV Shows', '/library/tvshows'],
  ['Search', '/search'],
  ['Discover', '/discover'],
  ['Suggestions', '/suggestions'],
  ['Calendar', '/calendar'],
  ['Settings', '/settings'],
];

export function NavbarComponent() {
  const router = useRouter();
  const { data } = useGetParamsQuery();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarStyles>
      <div className="wrapper">
        <div className="logo">bobarr</div>
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <MenuOutlined />
        </div>
        <div className="links">
          {links.map(([name, url]) => (
            <Link key={url} href={url} passHref={true}>
              <a className={cx({ active: url === router.pathname })}>{name}</a>
            </Link>
          ))}
        </div>
        <div className="region-select">{data?.params?.region || 'US'}</div>
      </div>

      <Drawer
        title="Navigation"
        placement="left"
        onClose={() => setMenuOpen(false)}
        open={menuOpen}
        bodyStyle={{ padding: 0 }}
      >
        <div className="drawer-links">
          {links.map(([name, url]) => (
            <Link key={url} href={url} passHref={true}>
              <a
                className={cx('drawer-link', {
                  active: url === router.pathname,
                })}
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </a>
            </Link>
          ))}
        </div>
      </Drawer>
    </NavbarStyles>
  );
}
