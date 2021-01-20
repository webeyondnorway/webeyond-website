import { makeStyles } from "@material-ui/core/styles"
import React from "react"

const weStyles = makeStyles(() => ({
  logoContainer: {
    width: "100px",
  },
  logo: {
    width: "115px",
    height: "100%",
  },
}))

const logo = () => {
  const styles = weStyles()
  return (
    <>
      <svg
        className={styles.logo}
        viewBox="0 0 201 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.6696 2.02262H36.9452L27.2201 30.6577H22.6069L18.4508 15.1141L14.3779 30.6577H9.76473L0.0811768 2.02262H6.31523L12.1337 20.6832L16.165 6.05397H20.8613L24.8096 20.6832L30.6696 2.02262Z"
          fill="black"
        />
        <path
          d="M57.1292 20.6416C57.1292 21.1681 57.0877 21.8608 57.0045 22.7197H42.4169C42.7216 23.8556 43.3035 24.7423 44.1624 25.3795C45.049 26.0168 46.1296 26.3354 47.4041 26.3354C49.4821 26.3354 51.1861 25.5735 52.516 24.0496L55.6746 27.2497C54.7603 28.4688 53.5273 29.4247 51.9757 30.1174C50.4242 30.8101 48.7895 31.1564 47.0716 31.1564C44.0793 31.1564 41.5995 30.2144 39.6323 28.3303C37.6928 26.4185 36.7231 23.9665 36.7231 20.9741C36.7231 17.9264 37.7206 15.4605 39.7154 13.5764C41.738 11.6923 44.1763 10.7503 47.0301 10.7503C49.8839 10.7503 52.2805 11.6785 54.22 13.5348C56.1595 15.3635 57.1292 17.7324 57.1292 20.6416ZM42.4169 19.187H51.6433C51.5601 18.0511 51.103 17.1506 50.2718 16.4856C49.4406 15.7929 48.4016 15.4466 47.1547 15.4466C45.9633 15.4466 44.9382 15.7652 44.0793 16.4025C43.2481 17.012 42.6939 17.9402 42.4169 19.187Z"
          fill="black"
        />
        <path
          d="M73.2319 10.7503C75.8364 10.7503 78.0668 11.6923 79.9231 13.5764C81.8072 15.4605 82.7492 17.9125 82.7492 20.9326C82.7492 23.9526 81.8072 26.4185 79.9231 28.3303C78.0668 30.2144 75.8364 31.1564 73.2319 31.1564C72.0405 31.1564 70.863 30.907 69.6993 30.4083C68.5356 29.9096 67.6351 29.1892 66.9979 28.2472V30.6577H61.5535V0.692688H66.9979V13.5764C67.6351 12.6621 68.5356 11.9694 69.6993 11.4984C70.863 10.9997 72.0405 10.7503 73.2319 10.7503ZM68.6603 24.5899C69.6577 25.5873 70.8353 26.0861 72.1929 26.0861C73.5505 26.0861 74.7142 25.5873 75.684 24.5899C76.6814 23.5647 77.1801 22.3456 77.1801 20.9326C77.1801 19.4918 76.6953 18.2866 75.7255 17.3168C74.7558 16.3194 73.5782 15.8206 72.1929 15.8206C70.8907 15.8206 69.727 16.3194 68.7018 17.3168C67.6767 18.2866 67.1641 19.4918 67.1641 20.9326C67.1641 22.3733 67.6628 23.5924 68.6603 24.5899Z"
          fill="black"
        />
        <path
          d="M106.532 20.6416C106.532 21.1681 106.491 21.8608 106.408 22.7197H91.8201C92.1249 23.8556 92.7067 24.7423 93.5656 25.3795C94.4522 26.0168 95.5328 26.3354 96.8073 26.3354C98.8853 26.3354 100.589 25.5735 101.919 24.0496L105.078 27.2497C104.164 28.4688 102.931 29.4247 101.379 30.1174C99.8274 30.8101 98.1927 31.1564 96.4748 31.1564C93.4825 31.1564 91.0027 30.2144 89.0355 28.3303C87.0961 26.4185 86.1263 23.9665 86.1263 20.9741C86.1263 17.9264 87.1238 15.4605 89.1187 13.5764C91.1413 11.6923 93.5795 10.7503 96.4333 10.7503C99.2871 10.7503 101.684 11.6785 103.623 13.5348C105.563 15.3635 106.532 17.7324 106.532 20.6416ZM91.8201 19.187H101.046C100.963 18.0511 100.506 17.1506 99.675 16.4856C98.8438 15.7929 97.8048 15.4466 96.558 15.4466C95.3666 15.4466 94.3414 15.7652 93.4825 16.4025C92.6513 17.012 92.0972 17.9402 91.8201 19.187Z"
          fill="black"
        />
        <path
          d="M123.02 11.249H128.88L116.911 40.175H111.092L115.705 28.829L108.017 11.249H114.001L118.573 22.4703L123.02 11.249Z"
          fill="black"
        />
        <path
          d="M148.081 28.2887C146.03 30.2005 143.578 31.1564 140.725 31.1564C137.871 31.1564 135.419 30.2005 133.368 28.2887C131.318 26.377 130.293 23.9388 130.293 20.9741C130.293 17.9818 131.318 15.5297 133.368 13.618C135.419 11.7062 137.871 10.7503 140.725 10.7503C143.578 10.7503 146.03 11.7062 148.081 13.618C150.131 15.5297 151.156 17.9818 151.156 20.9741C151.156 23.9388 150.131 26.377 148.081 28.2887ZM137.234 24.6314C138.203 25.6012 139.367 26.0861 140.725 26.0861C142.082 26.0861 143.232 25.6012 144.174 24.6314C145.144 23.6617 145.629 22.4426 145.629 20.9741C145.629 19.478 145.158 18.245 144.216 17.2753C143.274 16.3055 142.11 15.8206 140.725 15.8206C139.339 15.8206 138.176 16.3055 137.234 17.2753C136.291 18.245 135.82 19.478 135.82 20.9741C135.82 22.4426 136.291 23.6617 137.234 24.6314Z"
          fill="black"
        />
        <path
          d="M166.915 10.7503C169.436 10.7503 171.348 11.5676 172.65 13.2023C173.98 14.8093 174.631 17.0813 174.603 20.0182V30.6577H169.159V20.3092C169.159 18.8684 168.799 17.774 168.078 17.0259C167.358 16.2778 166.485 15.9038 165.46 15.9038C164.296 15.9038 163.271 16.264 162.385 16.9843C161.526 17.7047 161.096 18.8684 161.096 20.4754V30.6577H155.652V11.249H161.096V14.5323C161.484 13.3409 162.274 12.4127 163.465 11.7477C164.657 11.0828 165.806 10.7503 166.915 10.7503Z"
          fill="black"
        />
        <path
          d="M194.637 0.692688H200.081V30.6577H194.637V28.2472C194 29.1892 193.085 29.9096 191.894 30.4083C190.73 30.907 189.566 31.1564 188.403 31.1564C185.798 31.1564 183.554 30.2144 181.67 28.3303C179.814 26.4185 178.885 23.9526 178.885 20.9326C178.885 17.9125 179.814 15.4605 181.67 13.5764C183.554 11.6923 185.798 10.7503 188.403 10.7503C189.622 10.7503 190.799 10.9997 191.935 11.4984C193.099 11.9694 194 12.6759 194.637 13.618V0.692688ZM189.442 26.0861C190.799 26.0861 191.977 25.5873 192.974 24.5899C193.972 23.5924 194.471 22.3733 194.471 20.9326C194.471 19.4918 193.958 18.2866 192.933 17.3168C191.908 16.3194 190.744 15.8206 189.442 15.8206C188.056 15.8206 186.865 16.3194 185.868 17.3168C184.898 18.3143 184.413 19.5195 184.413 20.9326C184.413 22.3456 184.898 23.5647 185.868 24.5899C186.865 25.5873 188.056 26.0861 189.442 26.0861Z"
          fill="black"
        />
      </svg>
    </>
  )
}

export default logo
