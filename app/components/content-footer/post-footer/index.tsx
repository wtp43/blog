import React from 'react'
import styles from './footer.module.css'

const PostFooter = () => {
  return (
    <>
      <hr style={{ margin: 0, paddingTop: 'var(--gap)' }} />
      <footer className={styles.footer}>
        <p>Thanks for reading!</p>
      </footer>
    </>
  )
}

export default PostFooter
