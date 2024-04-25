type WishItem = {
  id: number;
  name: string;
};

interface WishItemProps {
  item: WishItem;
  onRemove: (id: number) => void;
}

const WishItem = ({ item, onRemove }: WishItemProps) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default WishItem;
