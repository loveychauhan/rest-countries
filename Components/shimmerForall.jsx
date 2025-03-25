import React from 'react'
import * as  styles from './shimmer.module.css'

export default function shimmerForall() {
  const shimmerItems = Array.from({ length: 8 })
  return (
    <section className={styles.shimmerContainer}>
      {
        shimmerItems.map((_, index) => (
          <div key={index} className={styles.CountryCard}>
            <div className={styles.img}></div>
            <div className={styles.cardText}>
              <h3 className={styles.Cardheading}></h3>
              <p className={styles.para}><b></b><span></span></p>
              <p className={styles.para}></p>
              <p className={styles.para}></p>
            </div>
          </div>
        ))}
    </section>
  )}
