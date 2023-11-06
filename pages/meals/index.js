import React from "react";
import Layout from "../../components/Layout";
import MealCard from "./MealCard";

export default function index() {
  return (
    <Layout title="meals">
      <h1 className="flex justify-center text-4xl font-bold antialiased py-8 prose text-center bg-gradient-to-t from-blue-500 via-turquoise-500 to-green-500 text-transparent bg-clip-text">
        The BEST Ph.D in cooking!
      </h1>
      <div className="flex justify-center px-6">
        <div className="grid gap-6 px-6 py-6 md:px-8 md:py-8 grid-cols-1 md:grid-cols-5">
          <MealCard></MealCard>
          <MealCard></MealCard>
          <MealCard></MealCard>
          <MealCard></MealCard>
          <MealCard></MealCard>
          <MealCard></MealCard>
        </div>
      </div>
    </Layout>
  );
}
