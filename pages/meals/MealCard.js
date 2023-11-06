import React from "react";
import Image from "next/image";
import styles from "./Meals.module.css";
import testImg from '../../assets/test.jpg'

export default function MealCard() {
  return (
    <div className={styles.card}>
      <a href="#">
        <h5 className={styles.cardTitle}>Dinner 23/10/2023</h5>
      </a>
      <p className={styles.cardContent}>鸡肉沙拉+菜菜+米饭</p>
      <Image
        src={testImg}
        alt="Picture of the author"
        className={styles.mealImg}
      />
      <button href="#" className={styles.editBtn}>
        Edit
      </button>
    </div>
  );
}
