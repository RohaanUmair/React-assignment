function SwitchPagesBtn({ isSelected, pageNum }) {
  const btnStyles = {
    height: 60,
    width: 60,
    borderRadius: 10,
    backgroundColor: isSelected ? "#b88e2f" : "#f9f1e7",
    border: "none",
    outline: "none",
    fontSize: 20,
    fontWeight: 400,
    color: isSelected ? "#ffffff" : "black",
  };

  return <button style={btnStyles}>{pageNum}</button>;
}

export default SwitchPagesBtn;
