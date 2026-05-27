import styled from 'styled-components';

export const NavbarStyles = styled.div`
  background: ${({ theme }) => theme.colors.navbarBackground};
  color: #fff;
  height: ${({ theme }) => theme.navbarHeight}px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;

  .wrapper {
    align-items: center;
    display: flex;
    height: 100%;
    margin-left: 48px;
    margin-right: 48px;

    @media (max-width: 575px) {
      margin-left: 16px;
      margin-right: 16px;
    }
  }

  .logo {
    font-family: monospace;
    font-size: 2.8em;
    font-weight: bold;
    margin-right: 72px;
    text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.8);
    white-space: nowrap;

    @media (max-width: 575px) {
      font-size: 1.8em;
      margin-right: auto;
    }
  }

  .hamburger {
    display: none;
    cursor: pointer;
    font-size: 1.5em;
    margin-right: 16px;

    @media (max-width: 575px) {
      display: block;
    }
  }

  .links {
    display: flex;

    @media (max-width: 575px) {
      display: none;
    }

    a {
      border: 1px solid transparent;
      border-radius: 2px;
      color: #fff;
      cursor: pointer;
      display: block;
      margin-right: 24px;
      padding: 3px 5px;
      text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.8);
      text-decoration: none;
      transition: 0.1s linear;
      white-space: nowrap;

      &.active,
      &:hover {
        border-color: #fff;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .drawer-links {
    display: flex;
    flex-direction: column;

    .drawer-link {
      padding: 16px;
      color: rgba(0, 0, 0, 0.85);
      text-decoration: none;
      display: block;
      border-bottom: 1px solid #f0f0f0;
      transition: 0.2s;

      &:hover,
      &.active {
        background: #fafafa;
        color: ${({ theme }) => theme.colors.coral};
        font-weight: 600;
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }

  .region-select {
    align-items: center;
    border-radius: 2px;
    border: 1px solid #fff;
    cursor: pointer;
    display: flex;
    font-size: 0.9em;
    justify-items: center;
    margin-left: auto;
    padding: 3px 5px;
    transition: 0.1s linear;
    white-space: nowrap;

    @media (max-width: 575px) {
      display: none;
    }

    &:hover {
      background: #fff;
      color: ${({ theme }) => theme.colors.navbarBackground};
    }
  }
`;
