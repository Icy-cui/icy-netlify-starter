import React from "react";
import Layout from "../../components/Layout";
import MealCard from "./MealCard";

export default function index() {
  return (
    <Layout title="meals">
      <h1 className="prose via-turquoise-500 flex justify-center bg-gradient-to-t from-blue-500 to-green-500 bg-clip-text py-8 text-center text-4xl font-bold text-transparent antialiased">
        The BEST Ph.D in cooking!
      </h1>
      <div className="flex justify-center px-6">
        <div className="grid grid-cols-1 gap-6 px-6 py-6 md:grid-cols-5 md:px-8 md:py-8">
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
