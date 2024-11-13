function SwitchPagesBtn({ isSelected, pageNum, onClick }) {
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
    cursor: 'pointer'
  };

  return <button onClick={onClick} style={btnStyles}>{pageNum}</button>;
}

export default SwitchPagesBtn;
