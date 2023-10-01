import "../style.css";

const PageItem: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="item_box">
      <span>{title}</span>
    </div>
  );
};

export default PageItem;
