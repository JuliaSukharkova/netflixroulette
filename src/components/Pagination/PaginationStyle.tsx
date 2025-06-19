import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
  flex-wrap: wrap;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.primaryColor : theme.background.bgColorBtn};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.bright : theme.colors.primaryColor};
  font-weight: 500;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ $active, theme }) =>
      $active ? theme.colors.primaryColor : theme.colors.hover};
    color: ${({ $active, theme }) =>
    $active ? theme.colors.bright : theme.colors.primaryColor};
  }
`;