import { css } from 'styled-components';

export const mobileOnly = css`
  @media (min-width: 576px) {
    display: none;
  }
`;

export const desktopOnly = css`
  @media (max-width: 575px) {
    display: none;
  }
`;

export const mobileAndTablet = css`
  @media (min-width: 992px) {
    display: none;
  }
`;

export const respondTo = {
  mobile: (styles: ReturnType<typeof css>) => css`
    @media (max-width: 575px) {
      ${styles}
    }
  `,
  tablet: (styles: ReturnType<typeof css>) => css`
    @media (min-width: 576px) and (max-width: 991px) {
      ${styles}
    }
  `,
  desktop: (styles: ReturnType<typeof css>) => css`
    @media (min-width: 992px) {
      ${styles}
    }
  `,
};
