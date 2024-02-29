type SearchForTheCity = {
  class: string;
  placeholder?: string;
  onChange: (e?: any) => void;
};

const SearchForTheCity = (props: SearchForTheCity) => {
  return (
    <input
      type="text"
      className={props.class}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export { SearchForTheCity };
