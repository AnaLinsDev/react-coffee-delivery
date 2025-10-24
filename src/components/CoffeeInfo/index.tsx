type Props = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image_name: string;
  };
};

export function CoffeeInfo({ coffee }: Props) {
  return (
    <div>
      <p>{coffee.title}</p>
      <p>{coffee.description}</p>
      <p>{coffee.tags}</p>
      <p>{coffee.price}</p>
      <img src={coffee.image_name} />
      _____________
    </div>
  );
}
