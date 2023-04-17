import { styled } from "goober";
import Button from "@/components/button";

const Container = styled("li")`
  list-style-type: none;
  button {
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 140%;
  }
`;

const ListTabsItem = ({
  isActive,
  label,
  miniBorderTab,
  onClick,
}) => {
  return (
    <Container>
      <Button
        bg={isActive && miniBorderTab ? "var(--lilac-400)" : isActive ? "var(--red-400)" : "var(--grey-25)"}
        textcolor={isActive && miniBorderTab ? "var(--grey-25)" : miniBorderTab ? "var(--grey-400)" : isActive ? "var(--grey-25)" : "var(--grey-300)"}
        padding="0.375rem 0.75rem"
        width="100%"
        onClick={() => onClick()}
        className="save-btn"
      >
        {label}
      </Button>
    </Container>
  );
};

export default ListTabsItem;
