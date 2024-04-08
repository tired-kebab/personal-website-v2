import Typography from "@mui/material/Typography";

const AboutMe = () => {
  return (
    <div>
      <main id="about-container">
        <img src="../../../public/my-image.png" alt="my-image" id="my-image" />
        <Typography variant="body2" color="initial" fontWeight={10}>
          <em>July 18, 2023 - Los Angeles, California</em>
        </Typography>
        <article>
          <Typography variant="body1" color="initial" fontWeight={10}>
            Hi! My name is Naeem Malik & I&apos;m a Web Developer working with
            React.js and Material-UI. This website is my creative portfolio
            filled with all the beautiful things, people, places & memories I
            love. Hope you love it too!
          </Typography>
        </article>
      </main>
    </div>
  );
};

export default AboutMe;
