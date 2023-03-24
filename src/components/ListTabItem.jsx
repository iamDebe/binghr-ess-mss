import { styled } from "goober";

const Container = styled("li")`
  height: 100%;
  list-style-type: none;
`;

const ListTabsItem = ({
  isActive,
  label,
  onClick,
  activeBgColor,
  activeTextColor,
}) => {
  return (
    <Container>
      <button
        style={{
          display: "inline-block",
          borderRadius: "4px",
          background: isActive ? "#D2446E" : "none",
          color: isActive ? "#FCFCFD" : "#BBBEC4",
          height: "100%",
          padding: "6px 12px",
          fontWeight: 600,
          border: "none",
        }}
        type="button"
        onClick={() => {
          onClick();
        }}
      >
        {label}
      </button>
    </Container>
  );
};

export default ListTabsItem;
