import styled from 'styled-components';

export const ManualSearchStyles = styled.div`
  .search-title {
    font-size: 1.2em;
    font-weight: bold;
  }

  .search-input {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
    margin-bottom: 12px;

    .ant-input-search {
      width: 100%;
    }

    .action-btn {
      flex: 1;
    }
  }

  .ant-table {
    font-size: 0.8em;
    overflow-x: auto;
  }
`;
