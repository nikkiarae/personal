'use client';
interface ListItemProps {
  text: string;
  className?: string;
}

const ListItem = ({ text, className }: ListItemProps) => {
  return <p className={className}>{text}</p>;
};

export default ListItem;
