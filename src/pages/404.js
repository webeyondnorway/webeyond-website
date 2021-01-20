import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/utils.module.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={styles.container}>
      <div className={styles.block}>
        <h1>404: Not Found</h1>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
