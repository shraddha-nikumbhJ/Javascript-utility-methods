import { HomePage } from "./components/HomePage";

export const App = () => {
  console.log(process.env.APP_NAME);
  return (
    <div>
      <HomePage />
    </div>
  );
};
