import styled from 'styled-components';
import { MovieDetailsStyles } from '../movie-details/movie-details.styles';

export const TVShowSeasonsModalComponentStyles = styled(MovieDetailsStyles)`
  .seasons {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .season-row {
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    margin-bottom: 8px;
    margin-right: 4px;
    margin-left: 4px;
    padding: 8px 10px;
    transition: 0.1s linear;
    max-width: 145px;

    @media (max-width: 575px) {
      flex: 1 1 calc(50% - 8px);
      max-width: none;
    }

    &.selected {
      border-color: #fff;
    }

    &.in-library {
      cursor: not-allowed;
      border-color: #fff;
    }
  }

  .season-number {
    font-size: 1.1em;
    font-weight: 600;
  }

  .season-episodes-count {
    font-size: 0.9em;
  }

  .seasons-details {
    padding-top: 12px;

    .season-top {
      margin-bottom: 4px;
    }

    .season-title,
    .season-top {
      display: flex;
      align-items: center;

      @media (max-width: 575px) {
        flex-wrap: wrap;
      }
    }

    .season-title,
    .season-replace {
      cursor: pointer;
    }

    .season-replace {
      font-weight: bold;
      display: flex;
      align-items: center;
      margin-left: 32px;
      border: 1px solid #fff5;
      border-radius: 5px;
      padding: 0 4px;

      @media (max-width: 575px) {
        margin-left: 0;
        margin-top: 8px;
        width: 100%;
        justify-content: center;
      }
    }

    .season-number {
      font-size: 1.25em;
      font-weight: 600;
      margin-right: 8px;
    }

    .season-year {
      font-size: 1em;
      font-weight: 300;
    }

    .season-toggle {
      margin-right: 12px;
      margin-top: 4px;
    }

    .ant-table {
      color: #fff;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 4px;
      font-size: 0.9em;

      @media (max-width: 575px) {
        font-size: 0.8em;
      }

      tr :hover > td {
        background: inherit;
      }

      tr > td {
        border: none;
        padding: 6px 8px;

        @media (max-width: 575px) {
          padding: 4px 4px;
        }
      }
    }
  }
`;
