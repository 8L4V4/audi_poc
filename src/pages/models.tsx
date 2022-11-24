import { ModelsBanner } from "components/Models/ModelsBanner/ModelsBanner";
import { ModelsList } from "components/Models/ModelsList/ModelsList";
import { NextPage } from "next";

const Models: NextPage = () => {
  return (
    <main className="Models">
      <ModelsBanner/>
      <ModelsList />
    </main>
  );
};

export default Models;