export default function useToggle(initialState = false) {
  if (typeof initialState !== "boolean") {
    console.warn(
      `useToggle(${initial}) is not being initialized with a boolean value.`
    );
  }

  const [toggle, setToggle] = React.useState(initialState);
  return [toggle, () => setToggle((v) => !v)];
}
